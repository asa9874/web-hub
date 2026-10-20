import {trait,gift,rule,check,growth,when,all,flag,tag,unlock} from './factories';
// Normal catalog content. None of these effects checks character kind or template ID.
export const characterTraits=[trait('mana-attunement','arcane',0,'천부적인 마력 감응','보이지 않는 물결에 먼저 손을 담갔다. 배워서 익힌 문장보다, 마나가 머무는 틈을 느끼는 감각이 앞선다.','rare',[
 check('mana-control',10),check('arcane',6),growth('arcane',1.18),
])];
const dawn=gift('heir-of-dawn','omen','새벽의 계승자','밤이 아무리 길어도, 새벽은 반드시 찾아온다. 그 약속을 증명하기 위해 태어난 빛이 있다.','legendary',88,'위기를 인지하고 도움을 받아들인 동료와 함께 다음 행동을 정할 때',[
 when(tag('danger'),check('fear',18),check('despair-resistance',18)),
 when(all(tag('rescue'),flag('consenting-allies-present')),check('ally-morale-recovery',16),unlock('포기하지 않을 다음 행동을 동료와 함께 정한다')),
],['blessing','rescue','will']);
const star=gift('unbroken-star','survival','꺾이지 않는 별','별은 추락할 수 있다. 빛을 잃을 수도 있다. 그러나 그녀의 별만큼은 끝내 밤하늘을 포기하지 않는다.','legendary',82,'즉시 무력화될 위기이며 실제 도피로가 남아 있고, 이번 회차의 기회를 아직 쓰지 않았을 때',rule('fatal-crisis-with-valid-escape','prevent','self.instant-incapacitation',1,'마지막 행동 기회','회차당 1회 · 성공적인 발동 시 소모','위기 사건 처리기가 도피로·잔여 사용권을 확인한 뒤 짧은 회피 시도를 한 번 허용한다. 성공·생존·회복은 보장하지 않으며 이미 발생한 사망을 되돌리지 않는다.'),['rescue','will','recovery']);
star.effects.push(when(tag('danger'),check('will',20)));
const sword=gift('sacred-sword-answer','combat','성검의 응답','검이 주인을 선택하는 것이 아니다. 세상이 구원을 갈망하는 순간, 검은 그 부름에 답한다.','legendary',91,'신성 유물의 개별 적합성 판정을 통과하고 유물이 응답한 동안',[
 when(all(flag('sacred-relic-accepted'),tag('sacred-relic')),check('holy-magic',20),check('sword',12),unlock('응답한 성검의 서약을 읽고 수락 여부를 정한다')),
],['sword','blessing','forbidden']);
export const characterGifts=[dawn,star,sword];
