import {dialogueLineRegistry} from './lines';
/** Presentation only: a proposal is not acceptance, and thanks require a real accepted gift. */
const lines:Record<string,[string,string]>={
 serena:['서로 다치지 않도록 규칙부터 정해요. 괜찮다면 검을 맞대 볼래요?','저를 생각해서 골라 준 거군요. 고마워요. 소중히 받을게요.'],
 adelia:['실력을 확인할 생각이라면 제대로 준비해. 대충 겨룰 생각은 없으니까.','내 취향을 제법 살폈네. 좋아, 고맙게 받을게.'],
 lumiel:['음…… 대련? 결과보다 과정을 살펴보고 싶은데, 같이 해 볼까?','나한테 주는 거야? 생각해 준 건…… 기쁘네. 고마워.'],
 lisette:['후후, 이번에는 말이 아니라 움직임으로 이야기해 볼까?','어머, 나한테 선물? 이번 고맙다는 말은 장난 아니야.'],
 nia:['좋아, 기세만큼 실력도 있는지 겨뤄 볼래?','흥, 이런 것도 챙길 줄 알아? ……고맙다니까!'],
 camilla:['대련을 제안한다. 서로의 준비와 안전 규칙을 먼저 확인하자.','네 배려는 분명히 받았다. 고맙다. 함부로 다루지 않겠다.'],
 miel:['우리 한 번 겨뤄 볼래? 무리하지 않기로 약속하고!','와, 나한테 주는 거야? 고마워! 네가 골랐다니 더 좋은데!'],
 estelle:['승패보다 서로의 판단을 알아보고 싶군요. 대련은 어떠세요?','뜻밖의 배려네요. 보내 주신 마음까지 감사히 받겠습니다.'],
 fiona:['저, 대련으로 확인하고 싶은 게 있어요. 안전한 범위에서만요.','저를 위해 골라 주셨다고요? 아…… 고마워요. 잘 간직할게요.'],
 noel:['한 번 겨루자. 무리할 생각은 없어. 네 생각은?','……내 몫도 생각했구나. 고마워. 받을게.'],
 brina:['하하, 준비됐으면 한 번 맞춰 볼까? 위험한 건 서로 멈추는 걸로!','오, 이걸 나한테? 손이 아니라 마음부터 바빠지네. 고마워!'],
 elisia:['괜찮다면 가볍게 겨뤄 볼까? 아프면 꼭 말해 주고.','받는 쪽이 되는 건 조금 낯설지만…… 기뻐. 고마워.'],
 thea:['한 번 겨뤄 보자! 물론 준비하고, 위험하면 바로 멈추고!','어, 선물? 고마워! 잃어버리지 않게 잘 챙길게!'],
 violetta:['준비가 되셨다면 대련을 제안하겠어요. 서로 시간을 허투루 쓰지는 말죠.','세심하게 골라 주셨군요. 그 마음에 맞게 정중히 받겠어요.'],
 iris:['저…… 같이 겨뤄 볼래? 네가 싫다면 하지 않아도 돼.','나한테도 이런 걸…… 고마워. 받는 게 정말 기뻐.'],
};
export function actionLine(id:string,kind:'proposal'|'gift'){return lines[id.replace(/^fixed-/,'')]?.[kind==='proposal'?0:1];}

export function interactionIntro(id:string,definitionId?:string){if(definitionId==='sparring')return actionLine(id,'proposal');const situation=definitionId==='study_together'?'study':definitionId==='train_together'?'training':undefined;return situation?dialogueLineRegistry.get(`speech/${id.replace(/^fixed-/,'')}/${situation}/0`)?.text:undefined;}

const closing:Record<string,string>={serena:'함께해 주셔서 고마워요. 오늘의 일은 천천히 돌아보고 싶어요.',adelia:'함께한 시간까지 대충 넘길 생각은 없어. 다음에는 더 잘해 보자.',lumiel:'음…… 같이 해 보니 혼자일 때와는 다르네. 생각할 게 생겼어.',lisette:'후후, 이 시간은 장난으로 넘기지 않을게. 같이해 줘서 고마워.',nia:'흥, 나쁘지 않았어! 다음에도 준비해서 와.',camilla:'수고했다. 오늘 함께한 일은 차분히 돌아보도록 하자.',miel:'같이해서 좋았어! 이제 우리 각자 할 일도 챙겨 보자.',estelle:'시간을 내주셔서 감사해요. 다음 판단은 조금 쉬고 해도 좋겠네요.',fiona:'함께해 주셔서 고마워요. 저는 잠깐 생각을 정리해 볼게요.',noel:'……같이해 줘서 고마워. 오늘은 이쯤 하자.',brina:'하하, 같이하니 금방이네! 잠깐 숨부터 돌리자.',elisia:'같이 시간을 보내 줘서 고마워. 너도 잠깐 쉬어 가.',thea:'좋아, 오늘은 여기까지! 다음에도 서두르지 말고 같이하자.',violetta:'시간을 내주신 건 기억하겠어요. 이제 잠시 정리할 시간이 필요하군요.',iris:'같이 있어 줘서…… 고마워. 이제 나도 조금 쉬어 갈게.'};
export const actionCompletionLine=(id:string)=>closing[id.replace(/^fixed-/,'')];
