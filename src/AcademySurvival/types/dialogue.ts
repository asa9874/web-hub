export const DIALOGUE_SITUATIONS={greeting:'첫 만남·인사',study:'수업·공부',training:'훈련·대련',gift:'선물·물건',request:'부탁·약속',concern:'걱정·격려',conflict:'갈등·사과',result:'성공·실패',story:'개인 서사',information:'소문·정보'} as const;
export type DialogueSituation=keyof typeof DIALOGUE_SITUATIONS;
export const DIALOGUE_EMOTIONS=['neutral','warm','focused','playful','worried','hurt','proud','embarrassed','serious'] as const;
export type DialogueEmotion=typeof DIALOGUE_EMOTIONS[number];
export type DialogueFact='own_success'|'own_failure'|'own_draw'|'known'|'rival'|'close'|'study'|'training'|'gift_received'|'gift_refused'|'promise'|'tired'|'injured'|'conflict'|'apology'|'success'|'failure'|'story_active'|'story_completed'|'direct_information'|'heard_information'|'defeat';
export interface SpeechProfile {characterId:string;register:'casual'|'polite'|'formal'|'mixed';sentenceStyle:string;vocabulary:string[];expressiveness:number;directness:number;teasing:number;addressPolicy:string;friendly:string;conflict:string;exhausted:string;serious:string;prohibited:string[];gestures:Partial<Record<DialogueEmotion,string>>}
export interface DialogueLine {id:string;speakerId:string;situation:DialogueSituation;text:string;requires:DialogueFact[];emotion:DialogueEmotion;kind:'flavor'|'reactive'|'interactive'|'narrative';priority:number;repetitionGroup:string}
export interface DialoguePresentation {lineId:string;emotion:DialogueEmotion;address?:string;sourceMemoryId?:string;sequenceId?:string;heard?:boolean}
export interface DialogueRecent {speakerId:string;targetId?:string;lineId:string;situation:DialogueSituation;at:number}
export interface DialogueReaction {id:string;at:number;speakerId:string;targetId?:string;eventId:string;presentation:DialoguePresentation;audienceIds:string[]}
export interface DialogueExchange {id:string;sceneId:string;interactionId:string;participants:[string,string];locationId:string;startedAt:number;endAt:number;nextTurn:number;nextAt:number;status:'active'|'completed'|'interrupted';turns:{speakerId:string;at:number;presentation:DialoguePresentation;audienceIds:string[]}[]}
export interface DialogueSave {version:'dialogue-v1';recent:DialogueRecent[];reactions:DialogueReaction[];processed:string[];exchanges:DialogueExchange[]}
export interface DialogueScene {id:string;participants:[string,string];activityIds:string[];interactionIds:string[];storyCodes:string[];lines:{speakerId:string;text:string;emotion:DialogueEmotion}[]}
