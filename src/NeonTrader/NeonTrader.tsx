import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { BALANCE, DEFAULT_SETTINGS, RECORD_KEY, SAVE_KEY, SETTINGS_KEY, SYMBOLS, TITLE } from './config/balance';
import type { Settings } from './config/balance';
import { CampaignEngine } from './engine/CampaignEngine';
import { GameClock } from './engine/GameClock';
import { hashSeed } from './engine/SeededRandom';
import { liquidationPrice, pnl, quoteOrder } from './engine/TradingEngine';
import { REGIME_LABEL } from './engine/RegimeEngine';
import TradingChart from './ui/TradingChart';
import CharacterCam from './ui/CharacterCam';
import { ChiptuneEngine } from './audio/ChiptuneEngine';
import './NeonTrader.css';
const money = (value: number) => Math.round(value).toLocaleString('ko-KR');
const signed = (v: number) => (v >= 0 ? '+' : '−') + money(Math.abs(v));
function settingsLoad(): Settings { try {
    const raw = JSON.parse(localStorage.getItem(SETTINGS_KEY) ?? '{}'), base = { ...DEFAULT_SETTINGS };
    for (const key of ['master', 'bgm', 'sfx'] as const)
        if (Number.isFinite(raw[key]))
            base[key] = Math.max(0, Math.min(1, raw[key]));
    for (const key of ['muted', 'motion', 'flash', 'crt'] as const)
        if (typeof raw[key] === 'boolean')
            base[key] = raw[key];
    if ([.75, 1, 1.5, 2, 4].includes(raw.speed))
        base.speed = raw.speed;
    if ([3, 4, 5].includes(raw.minutes))
        base.minutes = raw.minutes;
    if ([1, 1.15, 1.3].includes(raw.text))
        base.text = raw.text;
    if (matchMedia('(prefers-reduced-motion: reduce)').matches)
        base.motion = false;
    return base;
}
catch {
    return { ...DEFAULT_SETTINGS };
} }
interface RunRecord {
    seed: number;
    ending: string;
    day: number;
    score: number;
}
function recordLoad(): RunRecord[] { try {
    const rows = JSON.parse(localStorage.getItem(RECORD_KEY) ?? '[]');
    return Array.isArray(rows) ? rows.filter(r => r && Number.isInteger(r.seed) && Number.isFinite(r.score) && typeof r.ending === 'string').slice(0, 20) : [];
}
catch {
    return [];
} }
export default function NeonTrader() {
    const [records, setRecords] = useState(recordLoad);
    const [settings, setSettings] = useState(settingsLoad), [engine, setEngine] = useState(() => { try {
        return CampaignEngine.restore(localStorage.getItem(SAVE_KEY));
    }
    catch {
        return null;
    } }), [screen, setScreen] = useState<'title' | 'game'>('title'), [modal, setModal] = useState<'help' | 'settings' | 'restart' | null>(null), [seed, setSeed] = useState(() => new Date().toISOString().slice(0, 10)), [repay, setRepay] = useState(0), [history, setHistory] = useState(false), [, render] = useState(0);
    const sound = useRef<ChiptuneEngine | null>(null), lastSound = useRef(0), hitUntil = useRef(0);
    const ensureSound = () => { if (!sound.current)
        sound.current = new ChiptuneEngine(settings); };
    useEffect(() => () => { sound.current?.destroy(); sound.current = null; }, []);
    useEffect(() => { lastSound.current = 0; }, [engine]);
    useEffect(() => { const audio = sound.current; if (!audio)
        return; audio.volume(settings); audio.setMood(screen === 'game' && engine ? engine.emotion.mood : 'IDLE'); if (document.hidden || modal || (screen === 'game' && engine?.phase === 'trading' && engine.paused))
        audio.pause();
    else
        audio.resume(); for (const event of engine?.events ?? [])
        if (event.id > lastSound.current) {
            audio.effect(event.kind, engine?.score.combo);
            lastSound.current = event.id;
            if (event.kind === 'liquidation' || (event.kind === 'profit' && (event.value ?? 0) > 20000))
                hitUntil.current = performance.now() + 140;
        } }, [settings, screen, modal, engine, engine?.paused, engine?.emotion.mood, engine?.serial]);
    const [titleEngine] = useState(() => new CampaignEngine(1));
    const [audioView, setAudioView] = useState<ReturnType<ChiptuneEngine['snapshot']> | null>(null), [hit, setHit] = useState(false);
    const live = useRef({ engine, settings, screen, modal });
    useEffect(() => { live.current = { engine, settings, screen, modal }; }, [engine, settings, screen, modal]);
    const refresh = () => render(v => v + 1);
    const dialogOpen = !!modal || (screen === 'game' && !!engine && (engine.phase !== 'trading' || engine.paused));
    useEffect(() => {
        if (!dialogOpen) return;
        const dialog = document.querySelector<HTMLElement>('.nt-modal-front .nt-modal') ?? document.querySelector<HTMLElement>('.nt-modal');
        if (!dialog) return;
        const previousFocus = document.activeElement as HTMLElement | null;
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        const controls = () => Array.from(dialog.querySelectorAll<HTMLElement>('button:not(:disabled),input:not(:disabled),select:not(:disabled),a[href]')).filter(el => el.getClientRects().length);
        controls()[0]?.focus({ preventScroll: true });
        const trap = (event: KeyboardEvent) => {
            if (event.key === 'Escape' && modal) {
                event.preventDefault(); event.stopImmediatePropagation(); setModal(null);
            }
            if (event.key !== 'Tab') return;
            const items = controls(), first = items[0], last = items.at(-1);
            if (!first) { event.preventDefault(); return; }
            if (!dialog.contains(document.activeElement) || (event.shiftKey ? document.activeElement === first : document.activeElement === last)) {
                event.preventDefault(); (event.shiftKey ? last : first)?.focus();
            }
        };
        window.addEventListener('keydown', trap, true);
        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener('keydown', trap, true);
            if (previousFocus?.isConnected) previousFocus.focus({ preventScroll: true });
        };
    }, [dialogOpen, modal, screen, engine?.phase, engine?.paused]);
    const order = (side: 1 | -1) => { if (!engine)
        return; engine.order(side, quoteOrder(engine.trading.cash, engine.ratio, engine.leverage, engine.market.quotes[engine.selected].price).margin); engine.save(); refresh(); };
    useEffect(() => { try {
        localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
    }
    catch { /* optional */ } }, [settings]);
    useEffect(() => { let previous = performance.now(), frame = 0, lastPaint = 0, lastSave = 0; const clock = new GameClock(); const tick = (now: number) => { const { engine: e, settings: s, screen, modal } = live.current; const dt = (now - previous) / 1000; previous = now; if (e && screen === 'game' && !modal && !document.hidden && !e.paused && e.phase === 'trading') {
        clock.advance(dt * s.speed, () => e.step());
    }
    else
        clock.reset(); if (now - lastPaint > 100) {
        render(now);
        setAudioView(sound.current?.snapshot() ?? null);
        setHit(now < hitUntil.current);
        lastPaint = now;
    } if (e && now - lastSave > 2000) {
        e.save();
        lastSave = now;
    } frame = requestAnimationFrame(tick); }; frame = requestAnimationFrame(tick); const hide = () => { const e = live.current.engine; if (document.hidden) {
        sound.current?.pause();
        if(e){e.paused = e.phase === 'trading';e.save();}
        clock.reset();
    } else if(!e||live.current.screen==='title'||(e.phase!=='trading'&&!live.current.modal))sound.current?.resume(); }, save = () => live.current.engine?.save(); document.addEventListener('visibilitychange', hide); window.addEventListener('pagehide', save); return () => { cancelAnimationFrame(frame); document.removeEventListener('visibilitychange', hide); window.removeEventListener('pagehide', save); save(); }; }, []);
    useEffect(() => { const key = (event: KeyboardEvent) => { const { engine: e, screen, modal } = live.current; if (!e || screen !== 'game' || modal || event.repeat || (event.target as HTMLElement).closest('input,select,textarea'))
        return; if (event.code === 'Tab' && (event.target as HTMLElement).closest('button,a'))
        return; if (event.code === 'Escape') {
        if (e.phase !== 'trading')
            return;
        event.preventDefault();
        e.paused = !e.paused;
        refresh();
        return;
    } if (e.phase !== 'trading' || e.paused)
        return; const ratios = [.1, .25, .5, 1]; if (['KeyA', 'KeyD', 'Space', 'KeyQ', 'KeyE', 'KeyT', 'Tab', 'Digit1', 'Digit2', 'Digit3', 'Digit4'].includes(event.code))
        event.preventDefault(); if (event.code === 'KeyA' || event.code === 'KeyD')
        e.order(event.code === 'KeyA' ? 1 : -1, quoteOrder(e.trading.cash, e.ratio, e.leverage, e.market.quotes[e.selected].price).margin); if (event.code === 'Space')
        e.close(); if (event.code === 'KeyQ')
        e.ratio = ratios[Math.max(0, ratios.indexOf(e.ratio) - 1)]; if (event.code === 'KeyE')
        e.ratio = ratios[Math.min(3, ratios.indexOf(e.ratio) + 1)]; if (event.code === 'Tab' || event.code === 'KeyT')
        e.selected = SYMBOLS[(SYMBOLS.indexOf(e.selected) + 1) % 3]; if (event.code.startsWith('Digit')) {
        const n = Number(event.key);
        if (n >= 1 && n <= 4)
            e.leverage = [1, 5, 10, 20][n - 1];
    } e.save(); refresh(); }; window.addEventListener('keydown', key); return () => window.removeEventListener('keydown', key); }, []);
    useEffect(() => { if (engine?.phase === 'ending' && !engine.practice) {
        try {
            const records = JSON.parse(localStorage.getItem(RECORD_KEY) ?? '[]');
            if (Array.isArray(records) && !records.some((r: {
                seed: number;
                score: number;
            }) => r.seed === engine.seed && r.score === engine.score.score)) {
                records.unshift({ seed: engine.seed, ending: engine.ending, day: engine.day, debt: engine.debt, score: engine.score.score, at: Date.now() });
                localStorage.setItem(RECORD_KEY, JSON.stringify(records.slice(0, 20)));
            }
        }
        catch { /* optional */ }
    } }, [engine?.phase, engine]);
    const goMenu = () => { engine?.save(); setRecords(recordLoad()); if (engine?.practice) {
        try {
            setEngine(CampaignEngine.restore(localStorage.getItem(SAVE_KEY)));
        }
        catch {
            setEngine(null);
        }
    } setScreen('title'); };
    const begin = (tutorial = false) => { engine?.save(); const e = new CampaignEngine(/^\d{1,10}$/.test(seed) ? Number(seed) >>> 0 : hashSeed(seed || String(Date.now())), tutorial ? 75 : settings.minutes * 60); e.practice = tutorial; e.tutorial = tutorial; setEngine(e); setScreen('game'); setModal(null); e.save(); };
    const quote = engine?.market.quotes[engine.selected], position = engine?.trading.position, mark = position && engine ? engine.market.quotes[position.symbol].price : 0, profit = position ? pnl(position, mark) : 0, roe = position ? profit / position.margin : 0, preview = engine && quote ? quoteOrder(engine.trading.cash, engine.ratio, engine.leverage, quote.price) : null, remaining = engine ? Math.max(0, engine.duration - engine.market.time) : 0, last = engine?.events.at(-1), profitClass = (v: number) => v >= 0 ? 'nt-up' : 'nt-down';
    const adjust = <K extends keyof Settings>(k: K, v: Settings[K]) => setSettings(s => ({ ...s, [k]: v }));
    return <main onPointerDownCapture={ensureSound} onKeyDownCapture={ensureSound} className={`nt-page ${settings.motion ? '' : 'nt-still'} ${settings.crt ? 'nt-crt' : ''} ${settings.flash ? 'nt-flash' : ''}`} style={{ '--nt-text': settings.text } as React.CSSProperties} aria-label={TITLE} data-phase={engine?.phase ?? 'title'} data-mood={engine?.emotion.mood ?? 'IDLE'} data-hitstop={settings.motion && hit} data-snapshot={JSON.stringify({ day: engine?.day, practice: engine?.practice, duration: engine?.duration, time: engine?.market.time, phase: engine?.phase, cash: engine?.trading.cash, debt: engine?.debt, selected: engine?.selected, position: engine?.trading.position, paused: engine?.paused, score: engine?.score, mood: engine?.emotion.mood, audio: audioView })}>
 <header className="nt-top"><Link to="/">← WEB HUB</Link><div><strong>NEON<span>TRADER</span></strong><small>오늘도 청산당했습니다!</small></div><nav><button onClick={() => { if (engine)
        engine.pause(true); setModal('help'); }}>도움말</button><button onClick={() => { if (engine)
        engine.pause(true); setModal('settings'); }}>설정</button></nav></header>
 {screen === 'title' ? <section className="nt-title"><div className="nt-title-copy"><p className="nt-eyebrow">30 DAYS / ONE VERY BAD IDEA</p><h1>내 빚이…<br /><em>1억이라고?</em></h1><p>자칭 천재 트레이더 <b>니아</b>와 30일.<br />차트를 읽고, 위험을 정하고, 빚을 지워 보세요.</p><div className="nt-title-numbers"><span>START<strong>₩1,000,000</strong></span><span>DEBT<strong>₩100,000,000</strong></span><span>DEADLINE<strong>30 DAYS</strong></span></div><label>캠페인 시드 <input value={seed} onChange={e => setSeed(e.target.value)} maxLength={40}/></label><div className="nt-title-buttons"><button className="nt-primary" onClick={() => engine && engine.phase !== 'ending' ? setModal('restart') : begin()}>새 캠페인 →</button>{engine && <button onClick={() => { setScreen('game'); refresh(); }}>이어하기 · DAY {engine.day}</button>}<button onClick={() => begin(true)}>75초 거래 연습</button></div><small>가상 재화 게임 · 실제 금융거래 없음 · 첫 클릭 후 사운드 활성화</small><button className="nt-sound-onboarding" onClick={() => adjust('muted', !settings.muted)}>{settings.muted ? '소리 켜고 플레이' : '무음 플레이로 전환'}</button>{records.length > 0 && <div className="nt-records"><b>LAST RUNS · 시드를 눌러 다시 도전</b>{records.slice(0, 3).map((record, i) => <button key={i} onClick={() => setSeed(String(record.seed))}>{record.ending} · DAY {record.day} · {money(record.score)} pts · #{record.seed}</button>)}</div>}</div><div className="nt-title-art"><CharacterCam engine={titleEngine} motion={false}/><span className="nt-title-sticker">“이번엔 진짜<br />분석 다 했어.”</span></div></section> : engine && quote && preview ? <>
 <div className="nt-session"><span>{engine.practice ? 'PRACTICE · 75 SEC' : 'CAMPAIGN'} <b>DAY {String(engine.day).padStart(2, '0')} / 30</b></span><span>남은 빚 <b>₩{money(engine.debt)}</b></span><span className={remaining < 10 ? 'nt-down' : ''}>마감 <b>{Math.floor(Math.ceil(remaining) / 60)}:{String(Math.ceil(remaining) % 60).padStart(2, '0')}</b> · {settings.speed}×</span><button onClick={() => { engine.pause(!engine.paused); refresh(); }}>{engine.paused ? '계속하기' : '일시정지'} [ESC]</button><button onClick={() => { engine.pause(true); goMenu(); }}>메인</button></div>
 <div className="nt-layout"><section className="nt-news nt-panel"><div className="nt-heading"><b>NEWS WIRE</b><span>포지션과 독립된 뉴스</span></div><strong className="nt-headline" key={engine.market.news.events.filter(n => n.released).at(-1)?.id ?? -1}>{engine.market.news.events.filter(n => n.released).at(-1)?.title ?? '오늘의 첫 소식을 기다리는 중…'}</strong><div className="nt-news-list">{engine.market.news.events.filter(n => n.released).slice(-4).reverse().map(n => <div key={n.id}><time>{Math.floor(n.at / 2)}m</time><span className={n.strength > 0 ? 'nt-up' : 'nt-down'}>{n.kind}</span><p>{n.symbol} · {n.title}<small>신뢰도 {Math.round(n.credibility * 100)}% · 선반영/반등 가능</small></p></div>)}</div><p className="nt-news-hint">{engine.market.news.events.find(n => n.warned && !n.released) ? '발표 예고 도착 · 차트와 거래량을 함께 보세요.' : '뉴스는 정답이 아닙니다. 반응과 거래량을 확인하세요.'}</p></section>
 <section className="nt-chart nt-panel"><div className="nt-chart-top"><div role="group" aria-label="거래 종목">{SYMBOLS.map(s => <button key={s} aria-pressed={engine.selected === s} onClick={() => { engine.select(s); refresh(); }}>{s}</button>)}</div><div><strong>₩{money(quote.price)}</strong><span className={profitClass(quote.price - quote.start)}>{signed(quote.price - quote.start)} ({((quote.price / quote.start - 1) * 100).toFixed(2)}%)</span></div><small>{REGIME_LABEL[engine.market.regime.kind]}<br />1분봉 · 2초/봉</small></div><TradingChart engine={engine}/></section>
 <section className="nt-order nt-panel"><div className="nt-heading"><b>ORDER TERMINAL</b><span>KRW · 격리마진</span></div><div className="nt-account"><div><span>총자산</span><strong>₩{money(engine.value())}</strong></div><span className={profitClass(engine.value() - engine.startCash)}>오늘 {signed(engine.value() - engine.startCash)}</span></div><p>가용 현금 <b>₩{money(engine.trading.cash)}</b></p><div className="nt-trade-buttons"><button className="nt-long" disabled={!!position || engine.phase !== 'trading' || engine.paused} onClick={() => order(1)}>↑ 매수 / 롱<small>A · LONG</small></button><button className="nt-short" disabled={!!position || engine.phase !== 'trading' || engine.paused} onClick={() => order(-1)}>↓ 매도 / 숏<small>D · SHORT</small></button></div><div className="nt-options"><span>레버리지</span><div>{[1, 5, 10, 20].map((v, i) => <button key={v} aria-pressed={engine.leverage === v} onClick={() => { engine.chooseLeverage(v); refresh(); }}>{v}×<small>{i + 1}</small></button>)}</div></div><div className="nt-options"><span>증거금 비율 <small>Q / E</small></span><div>{[.1, .25, .5, 1].map(v => <button key={v} aria-pressed={engine.ratio === v} onClick={() => { engine.chooseRatio(v); refresh(); }}>{v * 100}%</button>)}</div></div><dl className="nt-preview"><div><dt>증거금</dt><dd>₩{money(preview.margin)}</dd></div><div><dt>명목금액</dt><dd>₩{money(preview.notional)}</dd></div><div><dt>진입 수수료 · 0.04%</dt><dd>₩{money(preview.fee)}</dd></div><div><dt>예상 청산 · 롱 / 숏</dt><dd>{money(quote.price * (1 - 1 / engine.leverage) / (1 - BALANCE.maintenance))} / {money(quote.price * (1 + 1 / engine.leverage) / (1 + BALANCE.maintenance))}</dd></div></dl></section>
 <section className="nt-character nt-panel"><div className="nt-heading"><b><i /> NIA'S ROOM / LIVE</b><span>{engine.emotion.mood} <i className="nt-equalizer" aria-hidden="true">{[0, 1, 2, 3].map(i => <i key={i} style={{ height: settings.motion ? 2 + Math.round((1 + Math.sin((audioView?.beat ?? 0) * Math.PI * 2 + i)) * 4) : 4 }}/>)}</i></span></div><CharacterCam engine={engine} motion={settings.motion}/><p className="nt-bubble" aria-live="polite">{engine.emotion.line}</p></section>
 <section className={`nt-position nt-panel ${engine.emotion.mood === 'LIQUIDATION_DANGER' ? 'nt-danger' : ''}`}><div className="nt-heading"><div><button aria-pressed={!history} onClick={() => setHistory(false)}>포지션 ({position ? 1 : 0})</button><button aria-pressed={history} onClick={() => setHistory(true)}>거래내역 ({engine.score.trades})</button></div><span>한 번에 하나의 포지션</span></div>{history ? <div className="nt-history">{engine.trading.history.length ? engine.trading.history.slice(0, 20).map((t, i) => <div key={i}><b>{t.symbol} {t.side === 1 ? '롱' : '숏'}</b><span>{t.reason === 'liquidation' ? '강제청산' : t.reason === 'close' ? '마감정산' : '수동'}</span><strong className={profitClass(t.net)}>{signed(t.net)}</strong></div>) : <p>아직 거래가 없습니다.</p>}</div> : position ? <><div className="nt-position-row"><div><small>보유 종목</small><strong>{position.symbol} {position.side === 1 ? '↑ 롱' : '↓ 숏'} <em>{position.leverage}×</em></strong></div><div><small>진입 / 현재</small><b>{money(position.entry)}<br />{money(mark)}</b></div><div><small>미실현 손익 / ROE</small><strong className={profitClass(profit)}>{signed(profit)}<br />{(roe * 100).toFixed(2)}%</strong></div><div className="nt-liquidation"><small>청산가격</small><b>₩{money(liquidationPrice(position))}</b><span>거리 {(Math.abs(mark - liquidationPrice(position)) / mark * 100).toFixed(2)}%</span></div><button className="nt-close" onClick={() => { engine.close(); engine.save(); refresh(); }} disabled={engine.paused || engine.phase !== 'trading'}>포지션 청산<small>SPACE</small></button></div><p className="nt-position-note">사용 증거금 ₩{money(position.margin)} · 수량 {position.quantity.toFixed(5)} · 손익에 레버리지 중복 적용 없음</p></> : <div className="nt-empty"><span>◇</span><p>아직 들고 있는 포지션이 없습니다.<small>뉴스와 캔들을 읽고, 진입할 때를 정하세요.</small></p></div>}<div className="nt-bottom-stats"><div><small>실현 손익</small><strong className={profitClass(engine.score.profit)}>{signed(engine.score.profit)}</strong></div><div><small>ARCADE SCORE</small><strong>{money(engine.score.score)}</strong></div><div className={engine.score.combo >= 3 ? 'nt-fever' : ''}><small>{engine.score.combo >= 3 ? 'FEVER · 점수만 강화' : '수익 실현 COMBO'}</small><strong>× {engine.score.combo}</strong></div><div><small>상환 진행</small><strong>{(engine.paid / BALANCE.debt * 100).toFixed(1)}%</strong><progress value={engine.paid} max={BALANCE.debt}/></div></div></section></div>
 {last && <div className={`nt-feedback nt-feedback-${last.kind}`} key={last.id} role="status">{last.text} {last.value !== undefined && <b>{signed(last.value)}원</b>}</div>}
 {engine.tutorial && <aside className="nt-tutorial"><b>실전 가이드 {Math.min(5, engine.tutorialStep + 1)} / 5</b><p>{['증거금은 담보입니다. 롱(A)은 가격 상승에 이익. 25%·5배로 롱에 진입해 보세요.', '청산(SPACE)하면 증거금과 손익이 돌아옵니다. 진입/청산 때 명목금액의0.04% 수수료가 듭니다.', '이제 숏(D). 가격이 내려가면 이익입니다. 레버리지는 1~4, 증거금 비율은 Q/E로 바꿉니다.', '숏도 SPACE로 정리해 보세요. 청산가격에 닿으면 격리 증거금을 잃습니다.', '마감하면 자동 정산됩니다. 결과 화면에서 빚을 갚되, 다음 날 거래할 현금은 남겨 두세요.'][engine.tutorialStep]}</p><button onClick={() => { engine.guide(false); refresh(); }}>가이드 닫기 / 스킵</button></aside>}
 {(engine.phase !== 'trading' || engine.paused) && <div className="nt-modal-backdrop"><section className="nt-modal" role="dialog" aria-modal="true" aria-label={engine.phase === 'briefing' ? '시장 브리핑' : engine.phase === 'results' ? '하루 정산' : engine.phase === 'ending' ? '캠페인 엔딩' : '일시정지'}>{engine.phase === 'briefing' ? <><p className="nt-eyebrow">DAY {engine.day} / PRE-MARKET BRIEF</p><h2>오늘도, 개장입니다.</h2><p>첫 8초는 관망 구간. 추세는 22~48초 유지되지만 뉴스가 흐름을 바꿀 수 있습니다. NYAN은 뉴스에 더 민감합니다.</p><p>빚 ₩{money(engine.debt)} · 거래 현금 ₩{money(engine.trading.cash)}</p><p>{engine.practice ? '본 캠페인 저장을 바꾸지 않는 75초 연습입니다.' : '오늘 ' + engine.duration / 60 + '분'} · 마지막 10초에 마감 안내 · 모든 포지션 시장가 정산</p><button className="nt-primary" onClick={() => { engine.start(); refresh(); }}>장 시작 →</button></> : engine.phase === 'results' ? <><p className="nt-eyebrow">DAY {engine.day} / CLOSING BELL</p><h2>오늘의 성적표</h2><p>자산 ₩{money(engine.trading.cash)} · 오늘 {signed(engine.trading.cash - engine.startCash)}원</p><p>“{engine.emotion.line}”</p><label>상환할 금액 (원)<input aria-label="상환 금액" type="number" min="0" max={Math.min(engine.debt, engine.trading.cash)} value={repay} onChange={e => setRepay(Math.max(0, Number(e.target.value)))}/></label><div className="nt-result-actions"><button onClick={() => setRepay(Math.max(0, Math.min(engine.debt, Math.floor(engine.trading.cash * .25))))}>현금의 25%</button><button onClick={() => setRepay(Math.min(engine.debt, Math.max(0, Math.floor(engine.trading.cash - BALANCE.minimum * 2))))}>거래금 2만원 남기기</button><button className="nt-primary" disabled={repay <= 0 || repay > Math.min(engine.debt, engine.trading.cash)} onClick={() => { if (!engine.repay(repay))
            engine.emit('error', '가용 현금 안에서 상환액을 선택하세요.'); setRepay(0); engine.save(); refresh(); }}>빚 상환</button></div>{engine.practice ? <button onClick={goMenu}>연습 마치고 메인으로 →</button> : <button onClick={() => { engine.nextDay(); setRepay(0); engine.save(); refresh(); }}>{engine.day === 30 ? '캠페인 결과 보기' : '다음 날 브리핑 →'}</button>}</> : engine.phase === 'ending' ? <><p className="nt-eyebrow">{engine.ending} ENDING / SEED {engine.seed}</p><h2>{engine.ending === 'GOOD' ? '완납! 이제 내 인생.' : engine.ending === 'BAD' ? '똑똑. 고지서 왔습니다.' : '오늘 저녁은… 물이야.'}</h2><p>{engine.ending === 'GOOD' ? '니아가 고지서를 종이비행기로 접었습니다. “다음엔 빚 말고, 여행 경비 모으자.”' : engine.ending === 'BAD' ? '문밖의 채권추심원도 라면 냄새에 잠시 멈췄습니다. “30일 더? 협상부터 해 보자…”' : '최소 증거금이 부족합니다. 니아가 텅 빈 컵라면을 바라보다가 당신 몫의 젓가락을 놓습니다.'}</p><div className={`nt-ending-art nt-ending-${engine.ending}`}><CharacterCam engine={engine} motion={settings.motion}/><span aria-hidden="true"/></div><div className="nt-ending-stats">{[['남은 빚', money(engine.debt) + '원'], ['최고 거래 자산', money(engine.score.peakAssets) + '원'], ['거래 순손익', signed(engine.score.profit) + '원'], ['최대 낙폭', (engine.score.drawdown * 100).toFixed(1) + '%'], ['거래 / 승률', engine.score.trades + ' / ' + (engine.score.trades ? engine.score.wins / engine.score.trades * 100 : 0).toFixed(1) + '%'], ['최대 콤보', String(engine.score.bestCombo)], ['점수', money(engine.score.score)]].map(([k, v]) => <div key={k}><small>{k}</small><strong>{v}</strong></div>)}</div><button className="nt-primary" onClick={() => { setSeed(String(Date.now())); goMenu(); }}>새 시드로 다시 도전</button></> : <><p className="nt-eyebrow">MARKET PAUSED</p><h2>잠깐, 숨 고르기.</h2><p>시장과 타이머가 함께 멈춰 있습니다. 탭을 벗어나도 자동 정지하며, 복귀 후 직접 재개합니다.</p><button className="nt-primary" onClick={() => { engine.pause(false); refresh(); }}>거래 재개</button><button onClick={() => setModal('help')}>조작 도움말</button></>}{!(engine.practice && engine.phase === 'results') && <button onClick={goMenu}>메인으로</button>}</section></div>}
 </> : null}
 {modal && <div className="nt-modal-backdrop nt-modal-front"><section className="nt-modal" role="dialog" aria-modal="true" aria-label={modal === 'settings' ? '게임 설정' : modal === 'help' ? '게임 도움말' : '캠페인 다시 시작'}><button className="nt-modal-x" onClick={() => setModal(null)}>닫기 ×</button>{modal === 'restart' ? <><h2>새 캠페인을 시작할까요?</h2><p>기존 진행을 새 시드로 교체합니다. 완료 기록은 남습니다.</p><button className="nt-primary" onClick={() => begin()}>진행 초기화 후 시작</button></> : modal === 'help' ? <><p className="nt-eyebrow">READ THE ROOM, NOT THE CAT</p><h2>거래 생존 수칙</h2><p>A 롱 / D 숏 / SPACE 청산 / 1~4 레버리지 / Q·E 증거금 / T / TAB 종목 / ESC 일시정지. 입력칸에 포커스가 있으면 거래 단축키를 실행하지 않습니다. 버튼에서는 TAB으로 포커스를 이동합니다.</p><p>증거금×레버리지 = 명목금액. 손익 = 가격 차이×수량. 왕복 수수료와 작은 스프레드가 있으므로 잦은 미세 거래는 손해입니다.</p><p>유지증거금은 현재 명목금액의0.5%. 증거금+미실현손익이 유지증거금 이하가 되면 강제청산. 현금 잔액은 음수가 되지 않습니다.</p><p>뉴스는 확률적으로 반영되고 선반영·되돌림도 있습니다. 가격은 내 포지션을 보지 않습니다. 하루 마감은 자동 정산, 상환한 돈은 되돌릴 수 없습니다.</p><p>캠페인 목표는 1억 상환/30일. 콤보와 FEVER는 점수·연출만 바꾸며 실제 수익을 늘리지 않습니다. 최소 2초·2천원·0.5% 순수익부터 콤보를 셉니다.</p><button onClick={() => { if (engine && engine.phase !== 'ending') {
        engine.guide(true);
        setScreen('game');
    }
    else
        begin(true); setModal(null); }}>실전 가이드 다시보기</button></> : <><p className="nt-eyebrow">CONTROL ROOM</p><h2>소리와 화면</h2>{(['master', 'bgm', 'sfx'] as const).map((k, i) => <label key={k}>{['마스터', 'BGM', '효과음'][i]} <input type="range" min="0" max="1" step="0.05" value={settings[k]} onChange={e => adjust(k, Number(e.target.value))}/><output>{Math.round(settings[k] * 100)}%</output></label>)}{(['muted', 'motion', 'flash', 'crt'] as const).map((k, i) => <label key={k} className="nt-toggle"><input type="checkbox" checked={settings[k]} onChange={e => adjust(k, e.target.checked)}/>{['전체 음소거', '동작·파티클', '이벤트 플래시 (기본 꺼짐)', '약한 CRT 스캔라인'][i]}</label>)}<label>진행 속도<select value={settings.speed} onChange={e => adjust('speed', Number(e.target.value))}>{[.75, 1, 1.5, 2, 4].map(n => <option key={n} value={n}>{n}×</option>)}</select></label><label>하루 길이 (새 캠페인부터)<select value={settings.minutes} onChange={e => adjust('minutes', Number(e.target.value))}>{[3, 4, 5].map(n => <option key={n}>{n}</option>)}</select></label><label>텍스트 크기<select value={settings.text} onChange={e => adjust('text', Number(e.target.value))}>{[1, 1.15, 1.3].map(n => <option key={n} value={n}>{Math.round(n * 100)}%</option>)}</select></label></>}</section></div>}
 <footer className="nt-footer"><span>SIMULATED MARKET / KRW / NO REAL MONEY</span><span>시드 {engine?.seed ?? '—'} · 저장 자동 · 소리 없이도 플레이 가능</span></footer>
 </main>;
}
