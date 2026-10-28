import {lifeGoals} from '../lifeProgress';
import {serena} from '../characters/serena';
import {studentProfiles} from '../characters/students';
import type {NeedDefinition,NeedId,GoalDefinition,GoalCondition} from '../../types/motivation';
export const MOTIVATION_RULES={version:'motivation-v1' as const,scale:1000000,sensitivityMin:.25,sensitivityMax:2.5,generatedSensitivityMin:.5,generatedSensitivityMax:1.5,initialRange:[10,35],generationSensitivity:[.75,1.25],maxLogs:2000,goalCounts:{short:[1,3],medium:[1,2],long:[1,2]},highThreshold:75,deadlinePriorityBonus:10,contextRates:{dangerSafety:2,safeSafety:-2,fearSafety:5,ambitionRecognition:1,dutyAutonomy:1,insomniaRecovery:.5},urgency:{baseSensitivity:.85,sensitivityWeight:.15,goalBonus:2,maxGoalBonus:6,dangerBonus:2,maxDangerBonus:15}};
const n=(id:NeedId,name:string,category:NeedDefinition['category'],rate:number,weight:number,description:string,activities:string[]):NeedDefinition=>({id,name,category,defaultChangePerHour:rate,urgencyWeight:weight,description,activities,thresholds:{low:25,moderate:50,high:75,critical:90},tags:[category,id]});
export const needs:NeedDefinition[]=[
 n('hunger','허기','physical',5,1,'속이 비어 음식과 온기를 찾는다. 식사 활동을 실제 수행한 시간에만 충족된다.',['breakfast','lunch','dinner']),
 n('fatigue','피로','physical',3,1.05,'근육과 호흡에 쌓인 부담. 몸을 쉬게 하는 것과 잠드는 것은 다른 회복이다.',['rest','sleep']),
 n('sleepiness','수면 욕구','physical',4,1.1,'눈꺼풀을 무겁게 하는 잠의 부름. 의지나 명예가 수면을 대신하지 않는다.',['sleep']),
 n('social','사회적 욕구','social',2,.75,'자신의 말을 들어 줄 누군가를 찾는다. 같은 공간에 서 있는 것만으로 교류가 성립하지 않는다.',['free_time']),
 n('recreation','오락 욕구','psychological',2,.65,'성적과 임무를 잠시 잊고 즐거움을 얻고 싶다. 자유시간 자체는 오락의 증거가 아니다.',['reading','rest']),
 n('growth','성장 욕구','psychological',1,.7,'어제의 자신을 넘어설 가능성을 원한다. 훈련 시간은 이 갈증을 달래지만 실제 능력 상승을 보장하지 않는다.',['sword_training','magic_training','self_study']),
 n('safety','안전 욕구','physical',0,1.15,'위험에서 벗어나 온전히 남고자 한다. 위험한 장소와 공포 상태에 반응한다.',['rest']),
 n('recognition','인정 욕구','social',0,.65,'노력과 존재를 타인에게 인정받고 싶다. 혼자 공부한 시간을 칭찬으로 바꾸지는 않는다.',['attend_class','teach_class']),
 n('autonomy','자유 욕구','psychological',0,.6,'타인이 정한 순서에서 벗어나 스스로 선택하고 싶다. 의무 일정이 길어지면 압박을 느낄 수 있다.',['free_time']),
 n('curiosity','호기심','psychological',.5,.65,'아직 풀리지 않은 질문이 머릿속을 맴돈다. 독서와 연구에서 답을 찾을 수 있다.',['reading','self_study']),
];
export const needRegistry=new Map(needs.map(n=>[n.id,n]));
// Additive activity deltas per real hour; sensitivity and contextual modifiers are then applied.
export const ACTIVITY_NEED_RATES:Record<string,Partial<Record<NeedId,number>>>={student_work:{fatigue:4,autonomy:2},combat_recovery:{fatigue:-8},combat_exchange:{fatigue:8,growth:-8},clean_room:{fatigue:1,autonomy:-2},laundry:{fatigue:1,recreation:-1},personal_hygiene:{fatigue:-2,recreation:-2},walk_garden:{fatigue:-3,recreation:-8},gardening:{fatigue:-3,recreation:-8,social:-8},crafting:{fatigue:2,curiosity:-5,recreation:-6},letter_writing:{social:-3,recreation:-3},cultural_play:{social:-12,recreation:-15},train_together:{fatigue:7,growth:-9,social:-8},avoid_contact:{autonomy:-2},conversation:{social:-25,recreation:-6},study_together:{social:-10,growth:-5,curiosity:-7},sparring:{social:-8,growth:-9,fatigue:7},sleep:{fatigue:-16,sleepiness:-22,hunger:-2},breakfast:{hunger:-45},lunch:{hunger:-45},dinner:{hunger:-45},rest:{fatigue:-11,recreation:-4},sword_training:{fatigue:8,growth:-10},magic_training:{fatigue:6,growth:-9,curiosity:-2},self_study:{fatigue:1,growth:-5,curiosity:-9},reading:{curiosity:-7,recreation:-5},attend_class:{growth:-3,curiosity:-4,autonomy:2},teach_class:{fatigue:2,autonomy:1},patrol:{fatigue:4,autonomy:2},guard_duty:{fatigue:2,autonomy:2},office_work:{fatigue:1,autonomy:2},free_time:{autonomy:-5}};
export const MOVEMENT_NEED_RATES={walk:2,run:7,ride:1,teleport:0};
export const DISPOSITION_SENSITIVITY:Record<string,Partial<Record<NeedId,number>>>={'disposition-socialite':{social:1.3},'disposition-recluse':{social:.6},'disposition-seeker':{curiosity:1.3},'disposition-ambitious':{recognition:1.4,growth:1.15},'disposition-freedom-seeker':{autonomy:1.4},'disposition-competitor':{growth:1.2,recognition:1.15},'disposition-hedonist':{recreation:1.3},'disposition-survivalist':{safety:1.2}};
export const TRAIT_SENSITIVITY:Record<string,Partial<Record<NeedId,number>>>={'trait-constitution-hard':{fatigue:.9},'trait-study-review':{curiosity:1.15},'trait-recovery-sleep':{sleepiness:.9}};
export const STATUS_NEED_MODIFIERS:Record<string,{need:NeedId;multiplier:number;add:number}>={'status-exhaustion':{need:'fatigue',multiplier:1.3,add:2},'status-fracture':{need:'fatigue',multiplier:1.2,add:1}};
const activity=(id:string,minutes:number):GoalCondition=>({type:'activityMinutes',id,minutes});
const skill=(id:string,min:number):GoalCondition=>({type:'proficiency',id:'proficiency-'+id,min});
const external=(key:string,description:string):GoalCondition=>({type:'external',key,description});
const org=(id:string):GoalCondition=>({type:'organization',id});
const position=(id:string):GoalCondition=>({type:'position',id:'position-'+id});
const visit=(id:string):GoalCondition=>({type:'visit',id});
const g=(id:string,name:string,category:string,horizon:GoalDefinition['horizon'],priority:number,description:string,conditions:GoalCondition[],activities:string[],relatedNeeds:NeedId[],extra:Partial<GoalDefinition>={}):GoalDefinition=>({id:'goal-'+id,name,category,horizon,basePriority:priority,description,completionConditions:conditions,failureConditions:[],eligibilityConditions:[],suggestedActivities:activities,relatedNeeds,roles:[],tags:[category],preferredDispositions:[],visibility:'private',...extra});
export const goals:GoalDefinition[]=[
 g('class-today','오늘 강의를 끝까지 듣기','학업','short',65,'창밖으로 눈이 가더라도 오늘 맡은 한 강의만큼은 자기 자리에서 마치고 싶다.',[{type:'activity',id:'attend_class',count:1}],['attend_class'],['growth'],{roles:['student'],deadlineMinutes:1440,deadlinePolicy:'day-end'}),
 g('library-notes','도서관에서 참고 노트 만들기','학업','short',45,'칠판에서 이해하지 못한 줄을 책장 사이에서 다시 이어 본다.',[activity('self_study',40)],['self_study'],['curiosity'],{roles:['student','professor','staff']}),
 g('exam-upper','다음 평가에서 상위권에 들기','학업','medium',65,'답을 외우는 것보다 틀린 이유를 줄이는 편을 택했다. 성적 발표가 있어야 노력의 결과를 알 수 있다.',[external('exam-upper','실제 평가 성적 상위권 판정')],['self_study','attend_class'],['recognition','growth'],{roles:['student']}),
 g('graduate','아카데미를 졸업하기','학업','long',70,'교문을 나설 때 수료장이 아니라 지난 계절을 버틴 자신의 이름을 들고 싶다.',[external('graduated','공식 졸업 처리 기록')],['attend_class','self_study'],['growth'],{roles:['student']}),
 g('valedictorian','수석 졸업의 이름 남기기','학업','long',85,'모든 생도의 이름이 적힌 명부 맨 위에 자신의 노력이 닿기를 바란다.',[external('valedictorian','공식 수석 졸업 기록')],['self_study','attend_class'],['recognition'],{roles:['student'],preferredDispositions:['disposition-competitor','disposition-perfectionist']}),
 g('lecture-prepare','다음 강의 자료 정리','학업','short',60,'질문 하나에 얼버무리지 않도록 강의 노트의 빈칸을 채운다.',[activity('self_study',45)],['self_study'],['curiosity'],{roles:['professor']}),
 g('sword-session','오늘 검술 훈련 한 시간','성장','short',50,'거창한 비결 대신 오늘의 한 시간을 목검의 무게와 함께 보내려 한다.',[activity('sword_training',60)],['sword_training'],['growth'],{tags:['성장','sword'],deadlineMinutes:1440,deadlinePolicy:'day-end'}),
 g('magic-session','흔들리지 않는 술식 연습','성장','short',50,'주문이 끝나는 순간까지 호흡을 흐트러뜨리지 않는 연습을 한다.',[activity('magic_training',45)],['magic_training'],['growth','curiosity'],{tags:['성장','magic']}),
 g('sword-master','검술의 달인에 이르기','성장','medium',70,'익숙한 검로를 반복하는 손이 어느 날 낯선 빈틈을 깨닫기를 기다린다.',[skill('sword',4)],['sword_training'],['growth'],{tags:['성장','sword']}),
 g('mana-control','마력 제어의 정예가 되기','성장','medium',65,'작은 불씨를 끝까지 다루는 힘을 폭발보다 먼저 익히려 한다.',[skill('mana-control',3)],['magic_training','self_study'],['growth'],{tags:['성장','magic']}),
 g('body-strength','근력의 새 기준 세우기','성장','medium',55,'어제 들지 못한 무게를 기록해 두었다. 오늘의 의욕만으로 그 기록을 고쳐 쓰지는 않는다.',[{type:'stat',id:'STR',min:70}],['sword_training'],['growth'],{tags:['성장','sword']}),
 g('unbroken-focus','흔들리지 않는 정신력','성장','long',75,'누구도 보지 않는 순간에도 자신의 선택을 지탱할 마음을 단련한다.',[{type:'stat',id:'WIL',min:100}],['self_study','magic_training'],['growth','autonomy']),
 g('duel-win','정식 대련에서 승리하기','전투','medium',60,'누군가를 다치게 하는 것이 아니라 공인된 규칙 안에서 자신의 검을 증명하고 싶다.',[external('duel-win','실제 정식 대련 승리 결과')],['sword_training'],['recognition','growth']),
 g('rival-surpass','라이벌의 벽 넘기','전투','long',78,'미워해서만은 아니다. 저 사람이 있기에 자신이 어디까지 갈 수 있는지 궁금해졌다.',[external('rival-surpassed','지정 라이벌과의 비교 업적 확정')],['sword_training','magic_training'],['growth'],{preferredDispositions:['disposition-competitor'],targetKind:'character'}),
 g('guard-shift','오늘 초소 근무 완수','전투','short',72,'아무 일도 없었던 교대가 가장 좋은 결과일 수 있음을 안다.',[{type:'activity',id:'guard_duty',count:1}],['guard_duty'],['safety'],{roles:['guard'],deadlineMinutes:1440,deadlinePolicy:'day-end',failureConditions:[{type:'not',condition:{type:'position',id:'position-academy-guard'}}]}),
 g('patrol-round','담당 구역 순찰 완료','전투','short',65,'평소와 다른 발자국이 있는지 맡은 길목에서 충분한 시간을 보낸다.',[activity('patrol',60)],['patrol'],['safety'],{roles:['guard']}),
 g('new-friend','믿고 말을 건넬 친구 찾기','사회적 관계','medium',52,'식당에서 마주쳤을 때 인사 너머의 이야기를 나눌 사람이 있었으면 한다.',[{type:'relationship',metric:'trust',min:40,target:'any',also:[{metric:'intimacy',min:30}]}],['free_time'],['social'],{preferredDispositions:['disposition-socialite']}),
 g('friend-close','친구와 더 가까워지기','사회적 관계','medium',58,'이미 아는 이름 뒤에 어떤 하루가 있었는지 더 듣고 싶다.',[{type:'relationship',metric:'intimacy',min:60,target:'selected'}],['free_time'],['social'],{targetKind:'character'}),
 g('reconcile','멀어진 사람과 화해하기','사회적 관계','long',70,'먼저 건넬 말을 수없이 고쳤다. 상대의 용서까지 자신의 의지로 정할 수는 없다.',[external('reconciled','당사자가 인정한 실제 화해 사건')],['free_time'],['social'],{targetKind:'character'}),
 g('mentor-trust','스승의 신뢰 얻기','사회적 관계','medium',65,'칭찬 한 번보다 다음 일을 맡겨도 된다는 믿음을 얻고 싶다.',[{type:'relationship',metric:'trust',min:65,target:'selected'}],['self_study','sword_training'],['recognition'],{targetKind:'character'}),
 g('council','학생회에 가입하기','권력·명예','medium',65,'게시판의 결정을 읽는 사람이 아니라 결정을 함께 책임지는 사람이 되고자 한다.',[org('academy-council')],['free_time','office_work'],['recognition','autonomy'],{roles:['student'],preferredDispositions:['disposition-ambitious']}),
 g('knight','제국 기사단 입단','권력·명예','long',82,'빛나는 갑옷 너머의 맹세와 의무를 알면서도 그 대열에 서고 싶다.',[org('royal-order')],['sword_training','patrol'],['growth','recognition'],{tags:['권력·명예','sword']}),
 g('archmage','공인 대마법사 되기','권력·명예','long',86,'화려한 주문 하나가 아니라 검증받은 공적과 책임으로 마법사의 이름을 남긴다.',[position('archmage')],['magic_training','self_study'],['growth','recognition'],{tags:['권력·명예','magic']}),
 g('demon-command','마왕군 지휘권 얻기','권력·명예','long',80,'명령을 받는 데서 멈추지 않고 그 명령이 돌려줄 희생까지 책임지려 한다.',[external('demon-command-appointed','실제 마왕군 지휘 보직 임명')],['office_work','patrol'],['recognition'],{roles:['demon-worker'],preferredDispositions:['disposition-power-seeker']}),
 g('official-knight','정식 기사로 서임되기','권력·명예','medium',68,'검의 솜씨와 별개로 공식 맹세를 받아 줄 날을 준비한다.',[position('knight')],['sword_training'],['recognition'],{tags:['권력·명예','sword']}),
 g('savings','비상 생활비 모으기','경제','medium',48,'내일 식비를 걱정하지 않을 만큼의 여유가 작은 금고에 쌓이길 바란다.',[external('emergency-savings','재산 시스템의 실제 비상금 기준')],['office_work'],['safety']),
 g('debt','오래된 빚 청산','경제','long',75,'장부 마지막 줄의 숫자가 아니라 누군가에게 묶인 선택을 되찾고 싶다.',[external('debt-cleared','실제 채무 소멸 기록')],['office_work'],['autonomy','safety'],{eligibilityConditions:[external('has-debt','실제 채무 보유 확인')]}),
 g('work-record','오늘 행정 업무 마무리','경제','short',58,'미뤄 둔 서류가 누군가의 입학과 급료를 막지 않도록 책상을 정리한다.',[activity('office_work',90)],['office_work'],['recognition'],{roles:['staff','demon-worker','professor']}),
 g('independent-home','자기 이름의 거처 마련','경제','long',66,'남의 허락을 기다리지 않고 돌아갈 문 하나를 갖고 싶다.',[external('owned-home','실제 거주권·자산 소유 판정')],['office_work'],['autonomy','safety']),
 g('market-visit','수도 시장 둘러보기','탐험','short',32,'교정 밖에서는 무엇이 일상의 값어치를 정하는지 직접 보고 싶다.',[visit('capital-market')],['free_time'],['curiosity','recreation'],{roles:['student','professor','staff','guard']}),
 g('library-visit','도서관의 문 열기','탐험','short',35,'읽을 책을 아직 정하지 못했어도 책장 사이로 들어서는 일부터 시작한다.',[visit('academy-library')],['reading'],['curiosity'],{roles:['student','professor','staff','guard']}),
 g('abyss-library','심연 서고 조사','탐험','medium',68,'돌아오지 않은 책의 대출표가 지식을 얻는 값보다 먼저 눈에 들어온다.',[visit('abyss-library'),activity('reading',60)],['reading'],['curiosity'],{roles:['demon-worker'],visibility:'secret'}),
 g('ruin','고대 유적의 기록 남기기','탐험','long',79,'보물을 가져오는 것보다 돌아와 무엇을 보았는지 증명하는 일이 더 어렵다.',[external('ruin-survey','실제 유적 조사와 귀환 기록')],['self_study'],['curiosity','safety']),
 g('sleep-four','네 시간 제대로 잠들기','생존·안전','short',70,'해야 할 일의 목록을 잠시 접어 둔다. 눈을 감고 버틴 시간은 휴식으로 세지 않는다.',[activity('sleep',240)],['sleep'],['sleepiness','fatigue']),
 g('recover-fatigue','무리한 몸을 쉬게 하기','생존·안전','short',60,'다음 일격을 버티려면 지금 검을 내려놓을 줄도 알아야 한다.',[{type:'need',id:'fatigue',max:25}],['rest','sleep'],['fatigue']),
 g('safe-return','안전한 거주지로 돌아가기','생존·안전','short',75,'오늘 끝까지 가져갈 가장 중요한 것은 전리품이 아니라 자신의 몸이다.',[{type:'home'},{type:'need',id:'safety',max:20}],['rest'],['safety']),
 g('heal-injury','치료를 받고 부상에서 회복하기','생존·안전','medium',78,'고통을 참았다는 사실만으로 뼈가 붙지는 않는다. 치료의 결과를 기다린다.',[external('treated-and-recovered','실제 치료 및 회복 완료 기록')],['rest'],['safety','fatigue']),
 g('quiet-life','평온한 생활 지키기','개인적 행복','long',72,'위대한 이야기의 주인공이 아니어도 따뜻한 저녁이 반복되는 삶을 원한다.',[external('peaceful-life','장기간 생활 안정 판정')],['rest','free_time'],['safety','recreation'],{preferredDispositions:['disposition-pacifist']}),
 g('eat-well','한 끼 제대로 먹기','개인적 행복','short',44,'식판 위에 놓인 소박한 한 끼를 서두르지 않고 비우려 한다.',[{type:'any',conditions:[activity('breakfast',20),activity('lunch',20),activity('dinner',20)]}],['lunch','dinner'],['hunger']),
 g('read-for-joy','성적과 무관한 책 읽기','개인적 행복','short',30,'시험에 나오지 않을 문장을 고르는 작은 사치를 누리고 싶다.',[activity('reading',30)],['reading'],['recreation','curiosity']),
 g('free-evening','스스로 고른 저녁 시간','개인적 행복','short',42,'누가 시켜서가 아니라 잠깐만이라도 자신의 선택에 시간을 쓰려 한다.',[activity('free_time',45)],['free_time'],['autonomy']),
 g('protect-person','소중한 사람의 안전 지키기','개인적 행복','long',88,'그 사람의 내일이 계속되기를 바란다. 보호한다는 말로 선택권까지 빼앗지는 않는다.',[external('protected-person','실제 보호 사건의 결과')],['patrol','free_time'],['social','safety'],{targetKind:'character',preferredDispositions:['disposition-protector']}),
 g('academy-duty','아카데미에 기여한 기록 남기기','조직·충성','medium',60,'자신이 떠난 뒤에도 교정에 작은 도움이 남았으면 한다.',[external('academy-service','실제 기관 봉사·기여 기록')],['office_work','teach_class'],['recognition'],{roles:['student','professor','staff','guard']}),
 g('demon-duties','마왕성의 하루 업무 완수','조직·충성','short',64,'서신 한 장이 어느 군단의 식량을 늦출 수도 있다. 봉투의 무게를 가볍게 여기지 않는다.',[activity('office_work',120)],['office_work'],['recognition'],{roles:['demon-worker']}),
 g('guard-trust','믿을 수 있는 경비병 되기','조직·충성','medium',70,'강한 창보다 교대 시간에 비지 않는 자리로 동료들의 신뢰를 얻는다.',[{type:'activity',id:'guard_duty',count:5}],['guard_duty','patrol'],['recognition'],{roles:['guard']}),
 g('research-post','제국 연구소의 연구원 되기','조직·충성','long',74,'아이디어에 기관의 도장을 받기 위해 재현 가능한 기록을 쌓는다.',[org('imperial-magic-institute')],['self_study','magic_training'],['growth','curiosity'],{tags:['조직·충성','magic']}),
 g('revenge','빼앗긴 것에 대한 복수','복수·갈등','long',85,'그날을 떠올릴 때마다 미래가 과거 쪽으로 기운다. 무엇을 되찾을지 아직 스스로에게 물어야 한다.',[external('revenge-fulfilled','실제 복수 사건의 결과')],['sword_training','magic_training'],['recognition'],{preferredDispositions:['disposition-avenger'],visibility:'secret'}),
 g('clear-name','자신에게 씌워진 누명 벗기기','복수·갈등','long',82,'진실을 안다는 것과 세상이 인정한다는 것 사이의 긴 복도를 걷는다.',[external('exonerated','실제 누명 해소 판정')],['self_study','free_time'],['autonomy','safety'],{visibility:'secret',eligibilityConditions:[external('wrongly-accused','실제 누명 배경 확인')]}),
 g('dispute','동료와의 갈등을 끝내기','복수·갈등','medium',57,'상대를 이기는 일과 함께 살아갈 길을 찾는 일이 다르다는 것을 인정한다.',[external('dispute-settled','실제 갈등 조정 합의')],['free_time'],['social'],{targetKind:'character'}),
 g('forbidden-text','금서의 문맥 이해하기','비밀·탐구','medium',73,'금지되었다는 이유만으로 옳거나 틀리다고 판단하지 않고 문장 뒤의 경고를 읽는다.',[activity('self_study',240),external('restricted-text-understood','실제 금서 접근권과 해독 결과')],['self_study','reading'],['curiosity'],{visibility:'secret'}),
 g('new-spell','자신의 새 마법 발견','비밀·탐구','long',87,'남의 주문을 완벽히 재현하는 손끝에서 언젠가는 자기 질문의 답이 태어나길 원한다.',[external('spell-discovered','실제 신규 술식 발견과 검증')],['magic_training','self_study'],['curiosity','growth'],{tags:['비밀·탐구','magic']}),
 g('world-secret','두 세계의 비밀 추적','비밀·탐구','long',90,'서로 다른 달력이 같은 날을 가리키듯 적대적인 기록 뒤에도 하나의 사실이 있을지 모른다.',[external('world-secret','실제 세계관 비밀 해명 사건')],['reading','self_study'],['curiosity'],{visibility:'secret'}),
 g('mana-theory','마법 이론에 정통하기','학업','long',78,'암기한 공식이 실패했을 때 무엇을 의심해야 하는지 설명할 수 있는 학자가 되고 싶다.',[skill('magic-theory',5)],['self_study'],['curiosity','growth'],{tags:['학업','magic']}),
 g('alchemy-study','연금술 실무 숙달','성장','medium',62,'색이 바뀌었다는 감탄 뒤에 온도와 배합을 정확히 남기는 습관을 세운다.',[skill('alchemy',3)],['self_study'],['growth','curiosity'],{tags:['성장','alchemy']}),
];
goals.push(g('keep-confidence','자신감의 불씨 지키기','개인적 행복','short',48,'잘해 낸 기억을 조급한 증명으로 태워 버리지 않고 한동안 마음속에 간직하려 한다.',[{type:'statusDuration',id:'status-confidence',minutes:120}],['rest','free_time'],['recognition'],{eligibilityConditions:[{type:'status',id:'status-confidence'}]}));
goals.push(...[{key:'serena',id:serena.id,arc:'자신의 방식으로 살아가는 세레나',objective:serena.identity.objective},...studentProfiles].map(p=>({id:'personal-'+p.key,name:p.arc,description:p.objective,category:'개인적 행복',horizon:'long' as const,basePriority:65,roles:['student'],eligibilityConditions:[{type:'external' as const,key:'fixed/'+p.id,description:'고정 학생 본인에게만 부여'}],completionConditions:[{type:'external' as const,key:'personal/'+p.key,description:'실제 장기 성취 판정이 필요하며 서사 완료만으로 대체하지 않음'}],failureConditions:[],suggestedActivities:({adelia:['self_study'],lumiel:['magic_training'],lisette:['conversation'],nia:['sword_training'],camilla:['sword_training'],miel:['study_together'],estelle:['office_work'],fiona:['magic_training'],noel:['reading'],brina:['magic_training'],elisia:['conversation'],thea:['reading'],violetta:['self_study'],iris:['conversation']} as Record<string,string[]>)[p.key]??['train_together','self_study'],tags:['fixed-student'],preferredDispositions:[],relatedNeeds:['growth' as const],visibility:'private' as const})));
export const goalRegistry=new Map([...goals,...lifeGoals].map(g=>[g.id,g]));

export const ACTIVITY_BINDINGS:Record<string,string>={sleep:'home',rest:'home',wake_up:'home',breakfast:'meal',lunch:'meal',dinner:'meal',attend_class:'classroom',teach_class:'classroom',sword_training:'training',magic_training:'training',office_work:'office',guard_duty:'guard',patrol:'patrol',free_time:'leisure'};
export const RECOGNITION_ACTIVITIES:Record<string,string[]>={student:['attend_class'],professor:['teach_class'],guard:['guard_duty'],staff:['office_work'],'demon-worker':['office_work'],civilian:['free_time']};
export const ROLE_ACTIVITY_RESTRICTIONS:Record<string,string[]>={teach_class:['professor'],attend_class:['student'],guard_duty:['guard']};
export const ROLE_READING_LOCATIONS:Record<string,string[]>={'demon-worker':['abyss-library']};

export const ROLE_SENSITIVITY:Record<string,Partial<Record<NeedId,number>>>={student:{growth:1.1},professor:{curiosity:1.1},guard:{safety:1.1,fatigue:.95},staff:{recognition:.95},'demon-worker':{recognition:.95}};
