import { trait as t, skill, attribute as a, check as c, growth as g, action as w, event as ev, unlock as u, when, flag, stat, tag, all, evolve as e } from './factories';
import type { Trait } from '../types';

// Each stage is authored separately. Stable IDs never depend on the display name.
export const traits: Trait[] = [
  t('sword-grip','sword',0,'흔들리는 칼끝','손바닥에 물집이 잡혔다. 그래도 오늘은 검을 놓치지 않았다.','common',skill('sword',0)),
  t('sword-measure','sword',1,'한 뼘의 간격','상대의 칼이 닿지 않는 자리에서, 자신의 칼만 닿는 거리를 배웠다.','uncommon',skill('sword',1)),
  t('sword-line','sword',2,'되돌아오는 검선','빗나간 일격조차 다음 일격으로 이어진다. 검 끝이 원을 닫는다.','rare',[...skill('sword',2),u('동료 앞에서 칼을 받쳐 든다')] ),
  t('sword-silence','sword',3,'발검 전의 정적','그가 자세를 낮추면 훈련장의 잡담부터 멎는다.','epic',skill('sword',3)),
  t('sword-horizon','sword',4,'수평선을 긋는 자','바다가 없는 땅에서도 수평선을 그을 수 있다. 다만 그 선 너머로 적은 걸어오지 못한다.','legendary',[...skill('sword',4),u('성문을 향한 일격을 가로막는다')] ),
  t('spear-heel','spear',0,'발뒤꿈치의 창','팔이 아니라 발로 찌른다는 말을 이제 조금 이해한다.','common',skill('spear',0)),
  t('spear-rain','spear',1,'빗줄기 찌르기','창끝 사이에 빈틈은 있다. 문제는 그 빈틈까지 가는 길이다.','uncommon',skill('spear',1)),
  t('spear-banner','spear',2,'깃발 아래의 창벽','함께 선 이들이 물러서지 않는 한, 이 창벽에는 뒷면이 없다.','rare',[...skill('spear',2),when(tag('defense'),c('leadership',8))]),
  t('bow-string','bow',0,'낡은 활시위','시위를 당길 때마다 팔이 떨린다. 과녁은 그런 사정까지 봐주지 않는다.','common',skill('bow',0)),
  t('bow-wind','bow',1,'바람을 읽는 손','풀잎이 고개를 숙이는 방향을 보고, 화살의 도착점을 고친다.','uncommon',[...skill('bow',1),c('perception',4)]),
  t('bow-address','bow',2,'돌아갈 곳 없는 화살','화살은 편지와 같다. 다만 이 궁수는 주소를 틀리지 않는다.','rare',[...skill('bow',2),u('인질 뒤의 줄만 끊는다')]),
  t('fist-breath','fist',0,'숨 고른 주먹','주먹을 꽉 쥐기 전에 어깨에서 힘을 빼는 법을 배웠다.','common',skill('fist',0)),
  t('fist-bridge','fist',1,'팔꿈치의 다리','적의 팔을 건너 한 걸음 들어간다. 가까운 곳에서는 큰 검도 짐이 된다.','uncommon',skill('fist',1)),
  t('fist-bell','fist',2,'뼛속의 종소리','한 번의 타격이 늦게 울린다. 방어구를 벗긴 뒤에야 그 소리가 들린다.','rare',[...skill('fist',2),when(tag('armored'),c('fist',7))]),
  t('stealth-soft','stealth',0,'발소리 줄이기','복도 당번에게 들키지 않으려 배운 재주가 제법 쓸모 있다.','common',skill('stealth',0)),
  t('stealth-seam','stealth',1,'그늘의 이음새','횃불이 닿지 않는 곳은 좁다. 몸을 숨기는 대신 시선을 비껴간다.','uncommon',[...skill('stealth',1),w('explore',1.15)]),
  t('stealth-unseen','stealth',2,'목격되지 않은 귀환','경비대는 침입자가 없었다고 보고했다. 잃어버린 열쇠만 돌아왔다.','rare',[...skill('stealth',2),u('경비 교대 사이로 동료를 빼낸다')]),
  t('shield-brace','shield',0,'어깨로 받는 방패','방패 뒤에도 멍은 든다. 넘어지지 않았다는 것이 오늘의 성과다.','common',skill('shield',0)),
  t('shield-neighbor','shield',1,'옆자리의 엄호','자신의 머리보다 옆 사람의 목을 먼저 가린다.','uncommon',[...skill('shield',1),when(tag('rescue'),c('shield',6))]),
  t('shield-gate','shield',2,'살아 있는 성문','성문이 무너진 자리에 한 사람이 서 있다. 안쪽의 아이들은 아직 울지 않는다.','rare',[...skill('shield',2),u('후퇴하는 동료의 마지막이 된다')]),

  t('flame-ember','flame',0,'손안의 불씨','손끝에서 작은 불이 피었다. 양초보다 밝지는 않지만, 분명 자신의 불이다.','common',skill('flame',0)),
  t('flame-thread','flame',1,'불꽃 엮기','불을 크게 만드는 대신 얇게 편다. 실처럼 엮인 열이 칼날을 두른다.','uncommon',skill('flame',1)),
  t('flame-forge','flame',2,'이동하는 화로','모닥불을 피우지 않아도 겨울 야영에 사람이 모인다. 전투에서는 그 온기가 전혀 다르다.','rare',[...skill('flame',2),u('눈보라 속 구조대를 덥힌다')]),
  t('flame-noon','flame',3,'자정의 정오','검은 하늘 아래 두 번째 한낮을 세운다. 시전자는 그림자를 밟고 서 있다.','epic',skill('flame',3)),
  t('frost-rime','frost',0,'성에 맺힌 손끝','한여름 찻잔에 성에를 피웠다. 동급생들은 우선 찬물을 부탁했다.','common',skill('frost',0)),
  t('frost-steps','frost',1,'얼음 디딤돌','달아나는 적보다 먼저 물 위에 길을 놓는다.','uncommon',[...skill('frost',1),u('얼음 발판으로 얕은 물을 건넌다')]),
  t('frost-orchard','frost',2,'겨울의 과수원','나뭇가지마다 얼음 꽃이 열린다. 그 아름다움을 만져 본 자는 손을 거둔다.','rare',skill('frost',2)),
  t('storm-static','storm',0,'소매의 정전기','긴장하면 머리카락이 곤두선다. 교수는 재능이라고 했고, 룸메이트는 불편하다고 했다.','common',skill('storm',0)),
  t('storm-path','storm',1,'뇌전의 길잡이','번개는 가장 쉬운 길을 간다. 마법사는 그 길을 미리 만든다.','uncommon',skill('storm',1)),
  t('storm-judgment','storm',2,'청천의 재판관','구름 없는 하늘에 판결을 청한다. 응답은 늘 소리보다 먼저 온다.','rare',[...skill('storm',2),when(tag('metal'),c('storm',8))]),
  t('healing-bandage','healing',0,'빛나는 붕대','상처가 닫히는 속도보다 떨리는 손을 가라앉히는 일이 더 어렵다.','common',skill('healing',0)),
  t('healing-pulse','healing',1,'맥박을 잇는 손','끊어지려는 박자를 찾아 자신의 숨을 맞춘다.','uncommon',[...skill('healing',1),when(tag('rescue'),c('healing',6))]),
  t('healing-dawn','healing',2,'병동에 남은 새벽','아무도 깨어 있지 않은 시간에 가장 많은 이름을 불러 주었다.','rare',[...skill('healing',2),u('야전 병동의 책임을 맡는다')]),
  t('barrier-chalk','barrier',0,'분필로 그은 선','선은 얇고 결계도 약하다. 그래도 선 안쪽의 촛불은 꺼지지 않았다.','common',skill('barrier',0)),
  t('barrier-dome','barrier',1,'둥근 피난처','비를 막던 돔이 돌을 막고, 마침내 누군가의 밤을 지킨다.','uncommon',[...skill('barrier',1),when(tag('defense'),c('barrier',8))]),
  t('barrier-mirror','barrier',1,'비껴내는 거울','버티는 대신 힘의 옆면을 민다. 유리처럼 보이는 벽에는 흠집이 없다.','rare',[...skill('barrier',1),when(tag('duel'),c('barrier',10))]),
  t('arcane-letter','arcane',0,'첫 번째 룬','오래된 글자 하나가 손등에서 빛났다. 뜻을 읽는 것과 쓰는 것은 다르다.','common',skill('arcane',0)),
  t('arcane-grammar','arcane',1,'마력의 문법','주문을 외우는 대신 문장을 고친다. 작은 오자가 폭발을 낳았던 이유를 알았다.','uncommon',[...skill('arcane',1),c('research',5)]),
  t('arcane-empty','arcane',2,'빈 룬의 학자','아무것도 쓰지 않은 자리에 다른 주문이 걸려 넘어진다.','rare',[...skill('arcane',2),u('작동 중인 마법진을 해체한다')]),
  t('arcane-weaver','arcane',2,'주문을 깁는 자','찢어진 주문 두 조각을 잇는다. 새 주문보다 볼품없지만, 분명 작동한다.','rare',[...skill('arcane',2),g('research',1.18)]),

  t('strength-carry','strength',0,'물통 나르는 팔','새벽마다 물을 날랐다. 장갑 아래의 굳은살은 출신을 속이지 않는다.','common',[a('strength',2),w('training',1.1)]),
  t('strength-oak','strength',1,'참나무 어깨','짐꾼들이 먼저 알아본다. 저 어깨라면 돌아오는 길에도 한 사람을 더 업겠다.','uncommon',[a('strength',5),a('endurance',2)]),
  t('strength-pillar','strength',2,'무너지지 않는 기둥','천장이 내려오는 순간에도 그의 두 발 사이에는 공간이 남는다.','rare',[a('strength',9),when(tag('rescue'),c('strength',12))]),
  t('recovery-sleep','recovery',0,'깊은 잠','침대에 눕자마자 잠든다. 종종 저녁 점호까지 잊는 것이 문제다.','common',[g('recovery',1.08),w('rest',1.15)]),
  t('recovery-stitch','recovery',1,'살이 잇는 속도','흉터는 남는다. 다만 그 흉터를 달고 다시 훈련장에 서는 날이 빠르다.','uncommon',[g('recovery',1.16)]),
  t('recovery-return','recovery',2,'다시 뛰는 심장','의무실에서 이름을 지우려던 날, 이불 아래에서 먼저 투덜거렸다.','rare',[g('recovery',1.28),when(tag('injured'),c('endurance',12))]),
  t('senses-footprint','senses',0,'눈에 밟히는 흔적','먼지 위에 남은 한 짝의 발자국이 자꾸 신경 쓰인다.','common',[a('perception',2),c('inference',3)]),
  t('senses-sound','senses',1,'담 너머의 숨','밤중에 누군가 숨을 죽인다. 이 학생에게는 그 정적도 들린다.','uncommon',[a('perception',5),when(tag('ambush'),c('perception',8))]),
  t('senses-circle','senses',2,'등 뒤의 시야','보지 못한 칼날 쪽으로 먼저 몸을 돌린다. 귀신을 봤다는 소문은 그 뒤에 붙었다.','rare',[a('perception',9),u('기습 직전 동료에게 경고한다')]),
  t('constitution-hard','constitution',0,'질긴 체질','같은 급식을 먹고도 혼자 배탈이 나지 않았다. 축복의 시작은 대개 소박하다.','common',[a('health',2),c('poison',4)]),
  t('constitution-clean','constitution',1,'독을 거르는 피','약초 실습에서 독초를 집어 삼켰다. 교수의 수명만 줄었다.','uncommon',[c('poison',12),a('health',3)]),
  t('constitution-sieve','constitution',2,'연금술사의 천적','혈관을 지나온 독은 제 이름을 잃는다. 그렇다고 마음껏 마셔도 된다는 뜻은 아니다.','rare',[c('poison',22),a('endurance',5)]),

  t('will-seat','will',0,'끝까지 앉은 자리','모두 나간 강의실에 혼자 남았다. 이해해서가 아니라, 포기하기 싫어서였다.','common',[a('will',2),c('fear',5)]),
  t('will-knee','will',1,'무릎 위의 맹세','다리가 꺾인 뒤에도 약속을 바꾸지 않았다.','uncommon',[a('will',5),c('fear',12)]),
  t('will-name','will',2,'부러지지 않은 이름','굴복하라는 목소리가 이름을 묻는다. 그는 끝까지 자기 이름으로 대답한다.','rare',[a('will',9),c('fear',22),u('강압적인 계약을 거절한다')]),
  t('focus-margin','focus',0,'여백 없는 노트','창밖의 소란보다 필기하는 소리가 크게 들린다.','common',[a('focus',2),g('study',1.08)]),
  t('focus-needle','focus',1,'바늘귀의 세계','고요해진 것은 세상이 아니다. 한 점을 제외한 모든 것을 잠시 잊었다.','uncommon',[a('focus',5),c('arcane',4)]),
  t('focus-still','focus',2,'폭풍의 안쪽','유리가 깨지는 소리 사이에서도 주문의 마지막 획은 흐트러지지 않는다.','rare',[a('focus',9),when(tag('under-pressure'),c('arcane',12))]),
  t('fear-tremble','fear',0,'먼저 떠는 손','용기가 없어서 살아남았다고 말한다. 그 떨림이 친구의 손을 잡아끌기도 했다.','common',[c('fear',-6),when(tag('ambush'),c('perception',8)),w('explore',.85)]),
  t('fear-listen','fear',1,'공포와 동행','두려움이 사라지지는 않았다. 대신 어느 두려움을 따라야 할지 배웠다.','uncommon',[c('fear',3),when(tag('danger'),c('inference',10))]),
  t('fear-witness','fear',2,'공포의 증인','떨리는 목소리로 괴물의 약점을 설명한다. 도망치지 않은 이유는 아직 말하지 않는다.','rare',[c('fear',10),u('관찰한 괴물의 습성을 알린다')]),
  t('madness-whisper','madness',0,'불면의 속삭임','벽 뒤에서 시험 답안을 불러 준다. 아직 그 말을 적지는 않았다.','uncommon',[a('stress',3),c('forbidden',6),w('rest',.9)]),
  t('madness-boundary','madness',1,'경계에 선 잠','꿈에서 본 복도를 낮에 찾아냈다. 출석부에는 없는 교실이었다.','rare',[c('forbidden',12),c('madness',-5),ev('forbidden',1.3)]),
  t('madness-anchor','madness',2,'심연의 닻','혼란을 없애지 못했다. 그 한가운데 책상 하나를 고정하고 연구를 계속한다.','epic',[c('forbidden',20),c('madness',12),a('stress',5)]),

  t('study-review','study',0,'복습의 습관','어제 틀린 문제에 오늘도 동그라미를 친다. 내일은 조금 작아질 것이다.','common',[g('study',1.08),w('study',1.15)]),
  t('study-link','study',1,'배움을 잇는 실','검술 교본의 비유가 마법 이론의 빈칸을 메웠다.','uncommon',[g('study',1.16),a('intellect',2)]),
  t('study-map','study',2,'학문의 지도','교수마다 다르게 그린 지형에 하나의 길을 놓는다.','rare',[g('study',1.28),u('타 학부 공동 과제에 참여한다')]),
  t('research-sample','research',0,'표본 수집가','쓸모없어 보이는 깃털에도 날짜와 장소를 적어 둔다.','common',[g('research',1.08),w('research',1.15)]),
  t('research-error','research',1,'오차의 독자','성공한 실험보다 실패한 실험의 여백에서 오래 머문다.','uncommon',[g('research',1.16),c('research',9)]),
  t('research-revision','research',2,'이론을 고치는 손','존경하는 학자의 책에 붉은 줄을 그었다. 다음 학기 교재가 바뀌었다.','rare',[g('research',1.28),u('교수의 가설에 반례를 제출한다')]),
  t('memory-hook','memory',0,'사소한 기억','빵집 주인의 이름은 잊어도, 외상 장부를 펼치던 손은 기억한다.','common',[c('memory',4)]),
  t('memory-shelf','memory',1,'머릿속 서가','배운 주문을 분류해서 꽂아 둔다. 가끔은 책보다 빨리 찾아낸다.','uncommon',[c('memory',9),g('arcane',1.08)]),
  t('memory-archive','memory',2,'걸어 다니는 사본','불탄 도서관 앞에서 그가 첫 문장을 적기 시작했다.','rare',[c('memory',16),u('읽었던 문헌을 복원한다')]),
  t('inference-detail','inference',0,'걸리는 구석','말은 맞다. 그런데 왜 잉크가 아직 젖어 있을까.','common',[c('inference',4)]),
  t('inference-knot','inference',1,'매듭을 푸는 시선','답을 아는 것보다 누가 질문을 바꾸었는지 찾는 데 능하다.','uncommon',[c('inference',9),when(tag('investigation'),c('perception',5))]),
  t('inference-absence','inference',2,'없는 증거의 무게','모두 발자국을 셀 때, 그는 발자국이 하나 모자란 이유를 묻는다.','rare',[c('inference',16),u('증언의 누락을 지적한다')]),

  t('speech-greeting','speech',0,'먼저 건넨 인사','이름을 몰라도 인사부터 한다. 적어도 기숙사에서는 문이 덜 닫힌다.','common',[c('speech',4),w('socialize',1.15)]),
  t('speech-rest','speech',1,'말 사이의 쉼표','설득은 많은 말을 하는 일이 아니라고, 듣던 사람이 먼저 말한다.','uncommon',[c('speech',9),a('charisma',2)]),
  t('speech-table','speech',2,'둥근 탁자의 목소리','서로 칼을 겨누던 이들이 의자를 당긴다. 합의는 아직 멀지만 시작은 되었다.','rare',[c('speech',16),u('적대 학부 사이의 중재를 제안한다')]),
  t('etiquette-cuff','etiquette',0,'단정한 소매','은식기를 바깥쪽부터 쓰는 것만으로도 피할 수 있는 결투가 있다.','common',[c('etiquette',4)]),
  t('etiquette-court','etiquette',1,'궁정의 빈틈','누구에게 먼저 허리를 숙여야 하는지 안다. 누구 앞에서는 숙이지 말아야 하는지도.','rare',[c('etiquette',12),u('왕실 연회의 관례로 항의한다')]),
  t('leadership-roll','leadership',0,'출석을 부르는 사람','모험을 시작하기 전에 인원부터 센다. 끝나고도 다시 센다.','common',[c('leadership',4)]),
  t('leadership-rear','leadership',1,'후미를 보는 눈','앞장서면서도 뒤처지는 발소리를 듣는다.','uncommon',[c('leadership',9),when(tag('rescue'),c('leadership',6))]),
  t('leadership-return','leadership',2,'전원 귀환의 깃발','승리 기록은 짧았다. 돌아온 이름을 적느라 지면을 다 썼다.','rare',[c('leadership',16),u('부상자를 포함한 퇴각을 지휘한다')]),
  t('bargain-change','bargain',0,'잔돈을 세는 손','호의와 가격표를 구분한다. 가끔은 호의를 더 비싸게 친다.','common',[c('bargain',4)]),
  t('bargain-door','bargain',1,'닫힌 가게의 단골','돈이 부족해도 문이 열린다. 그동안 약속을 지킨 값이다.','uncommon',[c('bargain',10),u('물품 대신 납품 약속을 제시한다')]),

  t('diligence-morning','diligence',0,'새벽 출석','천재가 잠든 시간에도 연습용 검은 조용히 움직인다.','common',[w('training',1.3),w('rest',.9),g('training',1.08)],{exclusiveGroup:'work-habit'}),
  t('diligence-mark','diligence',1,'천 번의 밑줄','재능이 없다는 말 옆에 또 하루를 적었다. 페이지는 생각보다 두껍다.','uncommon',[w('training',1.5),g('training',1.16),a('stress',2)],{exclusiveGroup:'work-habit'}),
  t('laziness-pillow','laziness',0,'베개의 신봉자','위대한 계획은 늘 이불 밖에서 실패한다. 적어도 피로만큼은 없다.','common',[w('training',.7),w('rest',1.5),g('recovery',1.08)],{exclusiveGroup:'work-habit'}),
  t('laziness-shortcut','laziness',1,'귀찮음의 발명가','같은 일을 두 번 하기 싫어서 자동 필기 장치를 만들었다. 과제는 여전히 미제출이다.','uncommon',[w('training',.8),g('research',1.22),u('반복 과제의 대체 실험을 제안한다')],{exclusiveGroup:'work-habit'}),
  t('pride-chin','pride',0,'높이 든 턱','사과보다 결투 신청서가 쉽다. 실력은 아직 그만큼 높지 않다.','common',[w('duel',1.3),c('speech',-4),c('fear',5)],{exclusiveGroup:'self-image'}),
  t('pride-crown','pride',1,'스스로 씌운 관','왕관이 가짜라는 말을 듣고도 내려놓지 않았다. 이제는 그 무게를 견딜 실력이 있다.','rare',[when(tag('duel'),c('will',12)),c('bargain',-6),w('duel',1.5)],{exclusiveGroup:'self-image'}),
  t('timidity-door','timidity',0,'문 뒤의 인사','인사말을 세 번 연습한 뒤 결국 편지를 밀어 넣었다.','common',[w('socialize',.75),c('perception',4)],{exclusiveGroup:'self-image'}),
  t('timidity-letter','timidity',1,'조심스러운 진심','목소리는 작다. 그래서 한마디를 꺼내기 전에 상대를 오래 살핀다.','uncommon',[c('speech',6),when(tag('reconciliation'),c('speech',9)),w('socialize',.85)],{exclusiveGroup:'self-image'}),
  t('frugality-thread','frugality',0,'기운 교복','남은 실까지 감아 둔다. 새 옷보다 익숙한 주머니가 편하다.','common',[w('purchase',.8),c('bargain',4)]),
  t('frugality-ledger','frugality',1,'한 닢의 기록','가계부 맨 뒤에는 동료들에게 빌려준 돈이 있다. 독촉한 흔적은 없다.','uncommon',[w('purchase',.7),c('bargain',9),u('공동 구매 장부를 정리한다')]),

  t('curse-cold','curse',0,'서늘한 낙인','비가 오기 전에 오래된 흉터가 시리다. 교단은 별일 아니라고 했다.','uncommon',[a('health',-2),c('curse',5),ev('curse',1.25)]),
  t('curse-reader','curse',1,'낙인을 읽는 자','지워지지 않는 글씨라면 끝까지 읽어 보기로 했다. 저주가 먼저 침묵했다.','rare',[c('curse',15),a('stress',3),u('낙인에 새겨진 계약 조항을 읽는다')]),
  t('blessing-candle','blessing',0,'작은 제단의 은총','큰 기적은 없다. 기도할 때마다 손이 조금 따뜻해진다.','uncommon',[c('blessing',5),when(tag('sanctuary'),g('recovery',1.15))]),
  t('blessing-vigil','blessing',1,'꺼지지 않은 철야등','신을 기다리던 밤에 아픈 이들의 이름을 먼저 외웠다.','rare',[c('blessing',14),when(tag('rescue'),c('healing',10))]),
  t('spirit-leaf','spirit',0,'잎새의 손님','앉는 자리마다 바람이 조금 더 오래 머문다.','uncommon',[c('spirit',5),u('하급 정령에게 인사를 건넨다')]),
  t('spirit-friend','spirit',1,'숲이 빌려준 이름','사람의 성 대신 숲의 별명으로 불린다. 잎들이 먼저 길을 비켜 준다.','rare',[c('spirit',14),when(tag('forest'),c('perception',8))]),
  t('forbidden-margin','forbidden',0,'금서의 여백','금지된 문장보다 그것을 지운 사람의 필체가 궁금했다.','rare',[c('forbidden',8),ev('forbidden',1.3),c('etiquette',-4)]),
  t('forbidden-price','forbidden',1,'대가를 적는 서기','힘을 부르는 주문 아래 작은 글씨를 더했다. 무엇을 잃는지 알고 빌리겠다고.','epic',[c('forbidden',18),u('금기 계약의 대가를 먼저 명시한다'),a('stress',4)]),
];

// Ordered paths plus explicit forks. Evolution replaces a stage; it does not stack it.
const paths = [
 ['sword-grip','sword-measure','sword-line','sword-silence','sword-horizon'],['spear-heel','spear-rain','spear-banner'],['bow-string','bow-wind','bow-address'],['fist-breath','fist-bridge','fist-bell'],['stealth-soft','stealth-seam','stealth-unseen'],['shield-brace','shield-neighbor','shield-gate'],
 ['flame-ember','flame-thread','flame-forge','flame-noon'],['frost-rime','frost-steps','frost-orchard'],['storm-static','storm-path','storm-judgment'],['healing-bandage','healing-pulse','healing-dawn'],['arcane-letter','arcane-grammar'],
 ['strength-carry','strength-oak','strength-pillar'],['recovery-sleep','recovery-stitch','recovery-return'],['senses-footprint','senses-sound','senses-circle'],['constitution-hard','constitution-clean','constitution-sieve'],
 ['will-seat','will-knee','will-name'],['focus-margin','focus-needle','focus-still'],['fear-tremble','fear-listen','fear-witness'],['madness-whisper','madness-boundary','madness-anchor'],
 ['study-review','study-link','study-map'],['research-sample','research-error','research-revision'],['memory-hook','memory-shelf','memory-archive'],['inference-detail','inference-knot','inference-absence'],
 ['speech-greeting','speech-rest','speech-table'],['etiquette-cuff','etiquette-court'],['leadership-roll','leadership-rear','leadership-return'],['bargain-change','bargain-door'],
 ['diligence-morning','diligence-mark'],['laziness-pillow','laziness-shortcut'],['pride-chin','pride-crown'],['timidity-door','timidity-letter'],['curse-cold','curse-reader'],['blessing-candle','blessing-vigil'],['spirit-leaf','spirit-friend'],['forbidden-margin','forbidden-price'],
];
const byId = new Map(traits.map(t=>[t.id,t]));
for(const path of paths) for(let i=0;i<path.length-1;i++) {
 const from=byId.get('trait-'+path[i])!, to=byId.get('trait-'+path[i+1])!;
 from.evolutions.push(e(to.id,all(stat(from.family,(to.tier+1)*15),flag('assessment-'+from.family)),`${(to.tier+1)*15}점 이상 및 ${to.name} 승급 심사 이수`,to.tier>=3?null:.65));
}
for(const [from,targets] of [['barrier-chalk',['barrier-dome','barrier-mirror']],['arcane-grammar',['arcane-empty','arcane-weaver']]] as const) {
 const source=byId.get('trait-'+from)!;
 targets.forEach((id,index)=>source.evolutions.push(e('trait-'+id,all(stat(source.family,35),flag(index?'path-adaptation':'path-stability')),index?'응용 실험 이수':'안정화 실습 이수',.55)));
}
// Frugality intentionally has two independent traits, not an automatic upgrade path.
traits.find(t=>t.id==='trait-sword-horizon')!.birth={eligible:true,weight:.01,condition:stat('sword',60),excludes:[]};
