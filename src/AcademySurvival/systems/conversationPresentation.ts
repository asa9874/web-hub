import {dialogueLineRegistry,dialogueSceneRegistry} from '../data/dialogue';
import type {DialoguePresentation} from '../types/dialogue';
import {fixedSpeech} from './fixedStudents';
import {culturalPracticeRegistry,culturalContentRegistry} from '../data/culture';
import type {ConversationRecord,ConversationTurn} from '../types/conversation';
import {conversationIntents} from '../data/conversations';
import {seedHash} from './seededRandom';
/** Pure presentation: no world mutation, inference, or simulation RNG consumption. */
export function renderDialoguePresentation(p:DialoguePresentation){if(p.lineId.startsWith('scene/')){const parts=p.lineId.split('/');return dialogueSceneRegistry.get(parts[1])?.lines[Number(parts[2])]?.text;}return dialogueLineRegistry.get(p.lineId)?.text;}
export function renderConversationTurn(record:ConversationRecord,turn:ConversationTurn){
 if(turn.presentation){const text=renderDialoguePresentation(turn.presentation);if(text)return text;}
 if(record.proposal.kind==='culture'){const p=record.proposal,d=culturalPracticeRegistry.get(p.practiceId);if(turn.speakerId===record.targetId)return turn.reaction==='warm'?'그 의미를 알려 줘서 고마워요. 함께 해 보고 싶어요.':turn.reaction==='neutral'?'내 취향과는 조금 다르지만 그 뜻은 알겠어요.':turn.reaction==='uneasy'?'그 표현이 조금 부담스러웠어요. 어떤 뜻인지 물어봐도 될까요?':'이번에는 사양할게요. 제 선택도 존중해 주세요.';return (p.mode==='explain'?'서로의 뜻을 확인하고 싶어요. ':p.mode==='gift'?'이 선물의 의미를 설명해도 될까요? ':'함께 해 볼래요? ')+(d?.name??'문화 교류')+' · '+(p.contentId?culturalContentRegistry.get(p.contentId)?.name??'':d?.description??'');}
 const authored=fixedSpeech(turn.speakerId,turn.intent,turn.speakerId===record.targetId?turn.reaction:'neutral');if(authored)return authored;
 const d=conversationIntents[turn.intent];if(!d)return '말을 잠시 멈춘다.';
 if(turn.speakerId===record.targetId){if(turn.reaction==='refused')return '지금은 그 제안에 동의하기 어려워요.';if(turn.reaction==='uneasy')return '조금 부담스러워요. 생각할 시간이 필요해요.';if(turn.intent==='accept_commitment'||turn.intent==='reject_commitment')return d.line;return conversationIntents[record.proposal.intent].reply;}
 const prefix=seedHash(record.id+'/'+turn.id)%3===0?'잠깐 괜찮다면, ':'';return prefix+d.line;
}
