import type {SpeechProfile,DialogueScene} from '../../types/dialogue';
export * from './lines';
export const DIALOGUE_RULES={recentPerSpeaker:24,maxRecent:2400,maxReactions:160,maxExchanges:80,maxProcessed:2048,sceneCooldownMinutes:1440} as const;
const rows:[string,SpeechProfile['register'],string,number,number,number,string,string,string][]=[
 ['serena','polite','차분히 질문하고 자신의 판단을 분명히 한다',55,70,5,'도움을 받는 말도 조금씩 드러낸다','책임과 상대의 선택을 구별한다','기대보다 실제 사람을 먼저 살핀다'],
 ['adelia','mixed','정돈된 짧은 문장과 경쟁의 어휘',65,85,25,'호의를 감춘 제안으로 가까워진다','자존심을 유지하되 잘못을 부인하지 않는다','핑계 없이 자신의 기준을 말한다'],
 ['lumiel','casual','일상은 느리고 짧게, 연구 설명은 정확하게',25,80,5,'관심 있는 생각을 길게 공유한다','설명이 부족했다면 다시 말한다','흥미보다 근거를 앞세운다'],
 ['lisette','casual','가벼운 반문과 여유 있는 말끝',80,50,85,'농담 사이에 진심을 드러낸다','상처를 알면 장난을 멈춘다','상대를 시험하지 않고 직접 말한다'],
 ['nia','casual','짧고 힘 있는 승부의 말',90,90,80,'인정과 경쟁을 함께 표현한다','패배와 사과를 남 탓으로 돌리지 않는다','허세보다 다시 할 준비를 말한다'],
 ['camilla','formal','단정한 설명과 책임의 언어',35,90,5,'약속을 지키는 행동을 인정한다','원칙을 말하기 전에 사정을 듣는다','안전과 공정을 우선한다'],
 ['miel','casual','밝은 구어와 빠른 제안',95,65,35,'함께하자는 말에 거절할 여지도 둔다','웃음으로 불편함을 덮지 않는다','자신의 피로도 솔직하게 말한다'],
 ['estelle','polite','부드러운 질문과 조건의 명시',35,40,25,'예상 밖의 호의에는 잠시 말을 고른다','계산으로 상대의 마음을 단정하지 않는다','속마음을 전부 설명하는 독백을 피한다'],
 ['fiona','polite','일상은 조심스럽게, 전문 내용은 선명하게',50,65,5,'자기 생각을 먼저 제안한다','정확함을 핑계로 상대를 몰지 않는다','안전 근거를 주저 없이 설명한다'],
 ['noel','casual','간결하고 직설적인 문장',15,95,5,'드물고 분명한 호의를 전한다','맞는 말과 상처 주는 방식을 구별한다','모르는 것은 모른다고 말한다'],
 ['brina','casual','활달한 설명과 점검의 비유',90,85,25,'함께 고친 과정에 감사한다','작품에 대한 자부심과 사과를 구분한다','성과를 꾸미지 않고 실패도 점검한다'],
 ['elisia','mixed','다정한 질문과 기다리는 말',65,45,5,'자신도 부탁할 수 있음을 드러낸다','도움이 상대의 선택을 넘지 않게 한다','자기 휴식도 중요한 일로 말한다'],
 ['thea','casual','발견을 권하는 빠른 말',90,80,25,'동행자의 속도를 묻는다','들뜬 마음으로 남의 사정을 지우지 않는다','무모함을 용기라고 포장하지 않는다'],
 ['violetta','formal','우아하고 구체적인 평가',45,90,20,'인정을 아끼지 않되 기준은 유지한다','비평을 인격의 평가로 넓히지 않는다','완벽함과 협력의 차이를 살핀다'],
 ['iris','mixed','작고 조심스럽되 문장을 끝맺는다',40,35,5,'자신의 뜻을 먼저 말하려 한다','관계 불안으로 상대를 통제하지 않는다','거절할 자유를 함께 존중한다'],
];
export const speechProfiles:SpeechProfile[]=rows.map(([key,register,sentenceStyle,expressiveness,directness,teasing,friendly,conflict,serious])=>({characterId:'fixed-'+key,register,sentenceStyle,vocabulary:sentenceStyle.split(' '),expressiveness,directness,teasing,addressPolicy:'낯선 상대를 임의로 친근한 별명으로 부르지 않는다. 선배·교수의 호칭은 친밀도만으로 제거하지 않는다.',friendly,conflict,exhausted:'피로를 감추기보다 말의 길이와 속도를 줄인다.',serious,prohibited:['모르는 사건 단정','승패 조작','모든 문장에 같은 감탄사','동의 없는 호칭 변경'],gestures:{neutral:expressiveness<40?'잠깐 시선을 맞춘다.':'상대를 향해 자세를 고친다.',warm:expressiveness<40?'말끝이 조금 부드러워진다.':'작게 웃으며 말을 잇는다.',focused:'생각을 정리한 뒤 또박또박 말한다.',playful:'가볍게 고개를 기울인다.',worried:'농담을 멈추고 말을 낮춘다.',hurt:'잠시 입을 다물었다가 다시 말한다.',proud:expressiveness<40?'고개를 작게 끄덕인다.':'표정이 밝아진다.',embarrassed:'곧바로 답하지 않고 말을 고른다.',serious:'상대의 대답을 기다린다.'}}));
export const speechProfileRegistry=new Map(speechProfiles.map(p=>[p.characterId,p]));
const pair=(id:string,a:string,b:string,activityIds:string[],interactionIds:string[],storyCodes:string[],text:string[]):DialogueScene=>({id,participants:['fixed-'+a,'fixed-'+b],activityIds,interactionIds,storyCodes,lines:text.map((text,i)=>({speakerId:'fixed-'+(i%2?b:a),text,emotion:i===3?'warm':'focused'}))});
export const dialogueScenes:DialogueScene[]=[
 pair('NPCCHAT-01','adelia','miel',['study_together'],['study_together'],['ENS-01'],['쉬는 시간도 좋지만 오늘 볼 문제부터 정하자.','응! 막히는 곳은 표시해 두고 같이 풀자.','네가 시간까지 챙기는 건 몰랐네. 나도 집중할게.','같이 하는 거니까! 쉬어야 할 때도 말해 줘.']),
 pair('NPCCHAT-02','lumiel','fiona',['study_together'],['study_together'],['ENS-03','LUM-03'],['같은 전제라고 생각했는데 설명이 다르네.','기록을 나란히 놓고 다른 부분부터 찾아볼까요?','좋아. 결론보다 가정부터 설명할게.','확인한 것과 추측은 표시를 나눠 둘게요.']),
 pair('NPCCHAT-03','nia','camilla',['train_together'],['train_together'],['ENS-02'],['선배, 준비됐어? 오늘은 제대로 해 보고 싶은데!','안전 절차부터 확인하자. 준비도 실력의 일부다.','알았어, 그냥 덤비진 않을게. 그다음엔 봐주기 없기야!','무리하지 않는 범위에서 서로의 움직임을 살피도록 하자.']),
 pair('NPCCHAT-04','lisette','noel',['conversation'],['friendly_chat'],['ENS-04'],['노엘, 내가 아주 재미있는 이야기를 해 주면?','먼저 무슨 이야기인지 들어 볼게.','어머, 바로 거절할 줄 알았는데?','들어 보는 것과 믿는 건 다르니까.']),
 pair('NPCCHAT-05','estelle','thea',['conversation'],['friendly_chat','serious_talk'],[],['계획을 이야기하기 전에 확인한 장소부터 나눠 볼까요?','좋아! 아직 모르는 곳은 모른다고 표시할게.','허가가 필요한 부분도 함께 확인해야겠네요.','응, 이야기했다고 바로 출발하는 건 아니니까. 준비부터 하자!']),
 pair('NPCCHAT-06','brina','fiona',['study_together'],['study_together'],[],['아이디어를 보기 전에 점검 항목부터 같이 만들까?','네. 실제로 확인하지 않은 성능은 적지 않는 게 좋겠어요.','좋아! 자신 있어도 한 번 더 살피는 거지.','설명과 실제 결과를 나눠 기록하면 다음에도 도움이 될 거예요.']),
 pair('NPCCHAT-07','elisia','iris',['conversation'],['friendly_chat','serious_talk'],['ENS-08'],['천천히 말해도 돼. 답을 대신 정하지는 않을게.','내 마음을 말하면 부담이 될까 봐 망설였어.','부담스럽다면 그렇게 말할 자유도 서로에게 있겠지.','응. 혼자 짐작하지 말고 물어보는 연습부터 할게.']),
 pair('NPCCHAT-08','violetta','miel',['conversation'],['friendly_chat'],[],['함께 준비한다면 완성도에 대한 생각부터 맞춰야겠군요.','맞아! 그렇다고 사람들 기분을 전부 뒤로 미루진 말자.','무리한 계획이 좋은 결과를 보장하지는 않겠지요.','그럼 각자 할 수 있는 것부터 물어보자! 말만으로 배역을 정하진 말고.']),
 pair('NPCCHAT-09','serena','nia',['train_together'],['train_together'],[],['어느 부분부터 함께 확인하고 싶으세요?','기본부터 해 볼까? 잘하는 척만 하려는 건 아니야!','그럼 서두르지 않고 서로의 움직임을 살펴봐요.','좋아! 연습한 만큼 다음 승부에서 보여 줄 거야.']),
 pair('NPCCHAT-10','adelia','estelle',['conversation'],['friendly_chat','serious_talk'],[],['협력한다고 경쟁까지 그만둘 생각은 없어.','물론이에요. 서로의 조건을 분명히 하는 편이 좋겠지요.','좋아. 내가 할 수 있는 범위부터 이야기하겠어.','저도 같은 방식으로 말씀드릴게요. 결정은 그다음에 하지요.']),
 pair('NPCCHAT-11','thea','brina',['conversation'],['friendly_chat'],[],['장비 준비에 관해 의견을 들어도 될까?','좋지! 먼저 실제로 가진 것부터 살펴보자고.','없는 장비가 생긴 것처럼 계획에 넣으면 안 되겠지?','그렇지! 필요한 걸 적는 일과 손에 넣는 일은 따로야.']),
 pair('NPCCHAT-12','lumiel','noel',['study_together'],['study_together'],[],['조용히 각자 읽고, 궁금한 것만 이야기할까.','좋아. 침묵도 불편하지 않아.','설명이 필요하면 말해 줘. 그때는 조금 길어질 수도 있어.','필요하면 물을게. 모르는 척 넘기지는 않을 거야.']),
];
export const dialogueSceneRegistry=new Map(dialogueScenes.map(d=>[d.id,d]));
