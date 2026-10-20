import type {BodyPartId,DurationType,Polarity,StatusCategory} from '../../types/status';
export const STATUS_CATEGORIES:Record<StatusCategory,string>={injury:'신체·부상',physiology:'질병·생리',emotion:'정신·감정',magic:'마법·저주·축복',alteration:'변이·신체 개조',society:'사회·환경',anomaly:'특수·초상현상'};
export const STATUS_SUBCATEGORIES={trauma:'외상',function:'기능 손상',rehabilitation:'재활',illness:'질환',metabolism:'대사·생활',fatigue:'피로·수면',mood:'기분',stress:'심리적 부담',learning:'학업·몰입',bond:'관계 감정',curse:'저주',blessing:'축복',mana:'마력 이상',transfiguration:'생체 변이',prosthesis:'개조·의체',adaptation:'환경 적응',standing:'사회적 지위',exposure:'환경 노출',identity:'존재·기억',spacetime:'시공간',oddity:'기묘한 흔적'};
export const POLARITIES:Record<Polarity,string>={positive:'긍정',negative:'부정',neutral:'중립',mixed:'양면'};
export const DURATIONS:Record<DurationType,string>={timed:'시간 경과',action:'특정 행동',treatment:'치료',event:'특정 사건',conditional:'조건 충족',permanent:'영구 지속',special:'특수 · 해제법 미상'};
export const BODY_PARTS:Record<BodyPartId,string>={head:'머리',face:'얼굴',torso:'몸통','left-arm':'왼팔','right-arm':'오른팔','left-hand':'왼손','right-hand':'오른손','left-leg':'왼다리','right-leg':'오른다리','left-foot':'왼발','right-foot':'오른발',whole:'전신'};
export const ALL_PARTS=Object.keys(BODY_PARTS) as BodyPartId[];
export const LIMBS:BodyPartId[]=['left-arm','right-arm','left-hand','right-hand','left-leg','right-leg','left-foot','right-foot'];
export const ARMS:BodyPartId[]=['left-arm','right-arm'];
export const LEGS:BodyPartId[]=['left-leg','right-leg','left-foot','right-foot'];
export const BODY_PARENT:Partial<Record<BodyPartId,BodyPartId>>={face:'head','left-hand':'left-arm','right-hand':'right-arm','left-foot':'left-leg','right-foot':'right-leg'};
export function covers(outer:BodyPartId,inner:BodyPartId):boolean{return outer==='whole'||outer===inner||BODY_PARENT[inner]===outer;}
