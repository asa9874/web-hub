import type {Effect,Gift,SpecialRule} from '../../types';
import {checkDefinitions} from '../checks';
import protectedIds from './protectedIds.json';
export const protectedGiftIds=new Set(protectedIds);
export const retiredGiftIds=new Set(['biscuit-initial','sugar-cube-corner','hat-weather-report','belt-hole-memory','cup-handle-polite','pillow-cold-corner','chalk-dust-sleeve','candle-wax-flower','sneeze-paperboat','potato-face','uninvited-confetti','wooden-fork-complaint','bathroom-tile-count','teabag-last-sigh','soup-spoon-shadow','marmalade-moon'].map(id=>'gift-x-'+id));
const rewrites:Record<string,string>={
 'gift-borrowed-edge':'빌린 검을 쥐면 손바닥에는 주인이 남긴 균형의 흔적이 겹쳐진다. 소유자는 그 차이를 알아차리고 자기 자세를 조정할 단서를 얻는다. 사용 허락을 받은 검으로 첫 결투를 시작할 때에만 의미가 있으며, 검술 자체를 훔치지는 못한다. 허락과 결투의 실제 확인이 없는 상황에서는 이 권능을 적용했다고 보아서는 안 된다.',
 'gift-empty-scabbard':'비어 있는 칼집을 잡은 순간, 손과 칼집 사이에는 없는 날의 무게가 잠깐 생긴다. 상대가 느끼는 위협은 그 동작을 알아보았을 때만 성립한다. 실제 칼날과 공격 판정은 생기지 않고, 상대의 공포나 후퇴도 강제하지 않는다. 무장하지 않았다는 사실과 위협적인 태도 사이의 틈을 이용하는 선천적 권능이다.',
 'gift-honest-wound':'상처의 통증이 다른 감정과 분리되어 몸의 지도로 느껴진다. 소유자는 두려워서 못 움직이는 곳과 실제로 손상된 곳을 혼동하기 어렵다. 손상이 사라지거나 휴식이 생략되는 것은 아니며, 무리하면 부상은 악화된다. 후퇴를 판단하는 데 가치가 있는 능력이지 다친 몸을 강제로 싸우게 하는 재능은 아니다.',
 'gift-roof-memory':'직접 몸을 쉬었던 지붕은 비가 닿는 순간 등에 남은 감각으로 되살아난다. 낯선 마을도 경험이 있는 처마와 처음 보는 처마는 다르게 느껴진다. 기억 속 대피소가 현재도 열려 있거나 안전하다는 보장은 없다. 실제 이동과 출입을 확인해야 비로소 다시 몸을 맡길 수 있다.',
 'gift-warm-hem':'함께 덮은 망토의 안쪽에는 두 체온이 만나는 경계가 생긴다. 소유자는 그 작은 경계의 열을 보존하는 데 특별한 감각을 지녔다. 옷과 동행자의 실제 존재가 필요하고, 한겨울 전체를 지우거나 상처를 치료하지는 못한다. 누군가를 살피는 선택과 결합될 때 비로소 권능의 의미가 생긴다.',
 'gift-threshold-step':'열린 문지방은 소유자에게 서로 닿아 있는 두 발판처럼 느껴진다. 그 틈을 건너는 선천적 현상은 길을 여는 마법과 구별된다. 시야와 실제 빈 도착점이 필요하며 닫힌 문, 봉인, 통행 권한을 무시하지 못한다. 문이 열려 있다는 사실만으로 안전한 이동이나 도착 성공이 보장되지는 않는다.',
 'gift-pocket-snow':'처음 맞은 눈의 경계는 소유자의 빈 주머니 안에서만 천천히 풀린다. 겨울을 들고 다니는 듯 보이지만 보존되는 것은 작은 눈 한 줌뿐이다. 꺼낸 눈은 정상적으로 녹고 다른 음식과 약품을 보존하지 못한다. 소박한 선물과 온도 관측에 가치를 갖지만 끝없는 냉각원은 아니다.',
 'gift-shadow-measure':'자신의 그림자는 조명과 무관하게 걸어온 거리의 비율을 감각 속에 남긴다. 소유자는 두 지점을 실제로 걸어 비교할 때 이 비율을 자로 삼는다. 가지 않은 길과 벽 너머 거리를 알아내지는 못하고 지도도 자동으로 완성되지 않는다. 현장 측량을 대신하는 기적이 아니라 실제 관측의 다른 기준이다.',
};
export function reviewLegacyGift(g:Gift,rules:Record<string,SpecialRule>):Gift{
 const executable:string[]=[],pending:string[]=[],limits:string[]=[],flags=new Set<string>();
 const walk=(e:Effect,guarded=false):void=>{if(e.type==='CONDITIONAL_EFFECT'){const collect=(c:typeof e.condition):void=>{if(c.kind==='flag')flags.add(c.key);else if(c.kind==='all'||c.kind==='any')c.conditions.forEach(collect);else if(c.kind==='not')collect(c.condition);};collect(e.condition);e.effects.forEach(x=>walk(x,guarded||flags.size>0));return;}
  if(e.type==='SPECIAL_RULE'){const r=rules[e.ruleId];if(r){limits.push(r.restriction);pending.push('고유 규칙 '+r.target+' · 전용 실행 어댑터 미연결');}return;}
  if(e.type==='CHECK_MODIFIER'&&e.unit==='score'&&checkDefinitions.some(c=>[c.id,...c.tags].includes(e.target))&&!guarded)executable.push('공통 판정 '+e.target+' '+e.amount+'점');
  else if(e.type==='STAT_MODIFIER'&&['STR','AGI','VIT','MAG','INT','WIL','CHA'].includes(e.target)&&!guarded)executable.push('관련 공통 판정 능력 보정 '+e.target);
  else pending.push(e.type+' · 대상/조건별 실행 연결 확인 필요');
 };
 g.effects.forEach(e=>walk(e));const preserved=protectedGiftIds.has(g.id),retired=!preserved&&retiredGiftIds.has(g.id),lore=preserved?g.lore:rewrites[g.id]??g.lore;
 return {...g,lore,birth:retired?{...g.birth,eligible:false,weight:0}:g.birth,codex:{summary:lore.split('.')[0]+'.',principle:lore,scope:g.activation,limits:limits.length?[...new Set(limits)]:['판정 조건과 실제 활동의 시간·위치·동의·자원 제약을 따릅니다.'],examples:[g.activation+'에 한정된 활용을 검토합니다.'],runtime:executable.length?pending.length?'partial':'implemented':'pending',implemented:[...new Set(executable)],pending:[...new Set(pending)],generation:retired?'retired':'preserved',review:preserved?'고정 인물 참조 보호: 기존 이름·설정·효과·생성 규칙 유지.':retired?'소박한 시각 장난에 머물고 실제 적용 경로도 없어 신규 생성에서 퇴역. ID와 기존 보유 효과는 유지.':rewrites[g.id]?'설정집 문장 보강. 기존 능력의 효과와 한계를 확대하지 않음.':'기계적 전수 감사 완료. 독창성의 사람 검토와 실제 실행 연결은 별도이며 완료로 간주하지 않음.'}};
}
export const improvedLegacyIds=Object.keys(rewrites).filter(id=>!protectedGiftIds.has(id));
