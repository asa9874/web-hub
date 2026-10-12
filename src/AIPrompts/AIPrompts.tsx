import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Check, Copy, Download, Expand, X } from 'lucide-react';
import { projectUrl } from '../projects/registry';
import artworkData from './artworks.json';
import './AIPrompts.css';

type ArtworkEntry = typeof artworkData[number] & {
  styleLabel?: string;
  stylePrompt?: string;
  qualityPrompt?: string;
  reuseNote?: string;
  aspectRatio?: string;
  originalImage?: string;
  width?: number;
  height?: number;
};
const artworks: ArtworkEntry[] = artworkData;

const categories = [
  { id:'surrealism', title:'초현실주의', subtitle:'SURREALISM', description:'현실에 없는 형태와 공간', cover:'ai-prompts/ribbon.webp' },
  { id:'animation', title:'애니메이션', subtitle:'ANIMATION', description:'각 그림체에 맞는 장면과 생성 프롬프트', cover:'ai-prompts/bd-orbital-letter.webp' },
] as const;

function ArtworkNavigator({ works }: { works: typeof artworks }) {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(works[0]?.id);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const interacting = useRef(false);
  const reveal = () => {
    clearTimeout(hideTimer.current);
    setVisible(true);
    hideTimer.current = setTimeout(() => { if (!interacting.current) setVisible(false); }, 1800);
  };
  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      clearTimeout(hideTimer.current);
      setVisible(true);
      hideTimer.current = setTimeout(() => { if (!interacting.current) setVisible(false); }, 1800);
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        let current = works[0]?.id;
        for (const work of works) {
          const top = document.getElementById('artwork-' + work.id)?.getBoundingClientRect().top;
          if (top !== undefined && top <= innerHeight * .45) current = work.id;
        }
        setActive(current);
      });
    };
    window.addEventListener('scroll', onScroll, { passive:true });
    return () => { window.removeEventListener('scroll', onScroll); clearTimeout(hideTimer.current); cancelAnimationFrame(frame); };
  }, [works]);
  if (!works.length) return null;
  return <nav className={'pg-scroll-nav' + (visible ? ' is-visible' : '')} aria-label="작품 바로가기"
    onMouseEnter={() => { interacting.current = true; reveal(); }}
    onMouseLeave={event => { interacting.current = event.currentTarget.contains(document.activeElement); reveal(); }}
    onFocusCapture={() => { interacting.current = true; reveal(); }}
    onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) { interacting.current = event.currentTarget.matches(':hover'); reveal(); } }}>
    {works.map(work => <button key={work.id} type="button" aria-current={active === work.id ? 'location' : undefined} onClick={() => {
      document.getElementById('artwork-' + work.id)?.scrollIntoView({ behavior:matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block:'start' });
      setActive(work.id);
      reveal();
    }}><span className="pg-nav-dot" />{work.title}</button>)}
  </nav>;
}

function Artwork({ artwork }: { artwork: typeof artworks[number] }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [copyState, setCopyState] = useState<'idle' | 'full' | 'style' | 'error'>('idle');
  const copyPrompt = async (kind: 'full' | 'style') => {
    try {
      const style = [artwork.stylePrompt, artwork.qualityPrompt && 'Clean rendering: ' + artwork.qualityPrompt].filter(Boolean).join('\n\n');
      await navigator.clipboard.writeText(kind === 'style' ? style : artwork.prompt);
      setCopyState(kind);
    } catch {
      setCopyState('error');
    }
  };

  return (
    <article id={'artwork-' + artwork.id} className={'pg-artwork' + (artwork.stylePrompt ? ' pg-artwork-reference' : '')} aria-labelledby={'pg-' + artwork.id}>
      <figure className="pg-frame">
        <button className="pg-image-button" type="button" aria-label={artwork.title + ' 크게 보기'} onClick={() => dialog.current?.showModal()}>
          <img src={projectUrl(artwork.image)} alt={artwork.alt} width={artwork.width ?? 1024} height={artwork.height ?? 1280} style={{ aspectRatio:artwork.aspectRatio ?? '4 / 5' }} loading={artwork.number === '01' || artwork.number === '03' ? 'eager' : 'lazy'} />
          <span className="pg-expand"><Expand size={16} aria-hidden="true" /> 크게 보기</span>
        </button>
        <figcaption><span>{artwork.number} / {artwork.englishTitle}</span><span>AI 생성 이미지</span></figcaption>
      </figure>
      <div className="pg-details">
        <span className="pg-number">WORK {artwork.number}</span>
        <h2 id={'pg-' + artwork.id}>{artwork.title}</h2>
        <p className="pg-subtitle">{artwork.description}</p>
        {artwork.styleLabel && <span className="pg-style-label">{artwork.styleLabel}</span>}
        {artwork.reuseNote && <div className="pg-reuse-note"><h3>재사용 메모</h3><p>{artwork.reuseNote}</p></div>}
        <div className="pg-prompt-heading"><h3>프롬프트</h3><span>EN / ORIGINAL</span></div>
        <p className="pg-prompt" lang="en">{artwork.prompt}</p>
        <div className="pg-actions">
          <button type="button" onClick={() => copyPrompt('full')}>{copyState === 'full' ? <Check size={15} aria-hidden="true" /> : <Copy size={15} aria-hidden="true" />}{copyState === 'full' ? '복사 완료' : '프롬프트 복사'}</button>
          {artwork.stylePrompt && <button type="button" onClick={() => copyPrompt('style')}>{copyState === 'style' ? <Check size={15} aria-hidden="true" /> : <Copy size={15} aria-hidden="true" />}{copyState === 'style' ? '그림체 복사 완료' : '그림체만 복사'}</button>}
          <a href={projectUrl(artwork.originalImage ?? artwork.image)} download={artwork.id + (artwork.originalImage ? '.png' : '.webp')}><Download size={15} aria-hidden="true" /> 이미지 저장</a>
        </div>
        {artwork.qualityPrompt && <p className="pg-quality-note">그림체 복사에는 미세 노이즈를 줄이는 조건도 포함됩니다.</p>}
        <p className="pg-copy-status" role="status">{copyState === 'error' ? '복사하지 못했습니다. 위의 프롬프트를 선택해 복사해 주세요.' : copyState === 'full' ? '전체 프롬프트를 복사했습니다.' : copyState === 'style' ? '그림체 지시문을 복사했습니다.' : ''}</p>
      </div>
      <dialog className="pg-dialog" ref={dialog} aria-label={artwork.title + ' 확대 이미지'} onClick={event => { if (event.target === event.currentTarget) dialog.current?.close(); }}>
        <button className="pg-close" type="button" aria-label="확대 이미지 닫기" onClick={() => dialog.current?.close()}><X size={24} /></button>
        <img src={projectUrl(artwork.image)} alt={artwork.alt} />
      </dialog>
    </article>
  );
}

export default function AIPrompts() {
  const [params] = useSearchParams();
  const selected = categories.find(category => category.id === params.get('category'));
  const visibleWorks = useMemo(() => artworks.filter(artwork => artwork.category === selected?.id), [selected]);
  useEffect(() => { window.scrollTo({ top:0, behavior:'instant' }); }, [selected]);
  return (
    <div className="prompt-gallery">
      <div className="pg-shell">
        <header className="pg-header"><Link to={selected ? '/ai-prompts/' : '/'}><ArrowLeft size={15} aria-hidden="true" />{selected ? '카테고리' : 'web hub'}</Link>{selected ? <Link to="/">web hub <ArrowUpRight size={14} aria-hidden="true" /></Link> : <a href="#pg-categories">카테고리 보기 <ArrowUpRight size={14} aria-hidden="true" /></a>}</header>
        <main>
          <section className="pg-intro" aria-labelledby="pg-title">
            <div><p className="pg-eyebrow">{selected ? 'AI그림 프롬프트 / ' + selected.subtitle : 'IMAGE & PROMPT'}</p><h1 id="pg-title">{selected?.title ?? 'AI그림 프롬프트'}</h1><p className="pg-description">{selected?.description ?? '그림체별 생성 결과와 재사용할 프롬프트를 저장합니다.'}</p></div>
            <span className="pg-count">{selected?.subtitle ?? 'COLLECTION'} <span>{selected ? visibleWorks.length : artworks.length} WORKS</span></span>
          </section>
          {selected ? <>
            <nav className="pg-category-tabs" aria-label="갤러리 카테고리">{categories.map(category => <Link key={category.id} to={'?category=' + category.id} aria-current={category.id === selected.id ? 'page' : undefined}>{category.title}<span>{artworks.filter(work => work.category === category.id).length}</span></Link>)}</nav>
            {selected.id === 'animation' && <aside className="pg-comparison-note"><strong>그림체에 맞는 장면으로</strong><p>각 스타일의 강점에 맞춰 장면과 구도를 따로 설계했습니다. 결과와 재사용 메모를 확인하고, 전체 프롬프트 또는 그림체 지시문을 복사해 참고하세요.</p></aside>}
            <section id="pg-collection" className="pg-collection" aria-label="작품과 프롬프트">{visibleWorks.length ? visibleWorks.map(artwork => <Artwork key={artwork.id} artwork={artwork} />) : <div className="pg-category-empty"><h2>등록된 작품이 없습니다</h2><p>작품이 추가되면 이곳에서 볼 수 있습니다.</p><Link to="/ai-prompts/">카테고리로 돌아가기 <ArrowUpRight size={14} aria-hidden="true" /></Link></div>}</section>
          </> : <section id="pg-categories" className="pg-categories" aria-label="갤러리 카테고리">{categories.map(category => {
            const count = artworks.filter(work => work.category === category.id).length;
            return <Link key={category.id} className="pg-category-card" to={'?category=' + category.id}>
              <div className="pg-category-cover">{category.cover ? <img src={projectUrl(category.cover)} alt="" /> : <span>ANIMATION<span>아직 등록된 작품이 없습니다</span></span>}</div>
              <div className="pg-category-info"><span className="pg-eyebrow">{category.subtitle}</span><div><h2>{category.title}</h2><ArrowUpRight size={20} aria-hidden="true" /></div><p>{category.description}<span>{count} 작품</span></p></div>
            </Link>;
          })}</section>}
        </main>
        <footer className="pg-footer"><span>AI그림 프롬프트</span><span>이미지 · 프롬프트 / {artworks.length} 작품</span></footer>
      </div>
      {selected && <ArtworkNavigator key={selected.id} works={visibleWorks} />}
    </div>
  );
}
