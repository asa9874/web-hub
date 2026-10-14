import {NPCS} from './castData';
import type {NpcId} from './castData';
import type {StageCue} from './directionModel';
export type Speaker='witch'|NpcId|'rabbit'|'mongsil'|'chef';
export type Emotion='neutral'|'joy'|'worry'|'angry'|'flustered';
export interface DialogueSegment {text:string;cps?:number;pauseAfterMs?:number;color?:string;size?:number;weight?:number}
export interface DialogueLine {speaker:Speaker;emotion:Emotion;segments:DialogueSegment[];direction?:StageCue}
export type DialogueBeat=DialogueLine|{cue:StageCue};
export type NpcDialogueBeat={cue:StageCue}|{speaker?:'witch'|'npc';emotion:Emotion;text?:string;segments?:DialogueSegment[];direction?:StageCue};
export function resolveNpcBeats(entries:NpcDialogueBeat[],npc:NpcId):DialogueBeat[]{return entries.flatMap<DialogueBeat>((entry,i)=>{
  if('cue' in entry)return [entry];
  const line:DialogueLine={speaker:entry.speaker==='witch'?'witch':npc,emotion:entry.emotion,direction:entry.direction,segments:entry.segments??[{text:entry.text??'',cps:entry.emotion==='flustered'?56:entry.emotion==='angry'?17:undefined,color:entry.emotion==='angry'?'#8b2838':undefined,size:entry.emotion==='angry'?1.1:undefined}]};
  return [line,...(i===0&&entry.text!==undefined&&!entry.speaker?[{speaker:'witch' as const,emotion:'neutral' as const,segments:[{text:'……듣고 있어. 천천히 말해도 돼.'}]}]:[])];
});}
export const EMOTIONS:Record<Emotion,{label:string;cps:number;pitch:number;gain:number;duration:number}>={
  neutral:{label:'차분함',cps:25,pitch:1,gain:.72,duration:.035},
  joy:{label:'기쁨',cps:30,pitch:1.1,gain:.9,duration:.038},
  worry:{label:'걱정',cps:19,pitch:.94,gain:.58,duration:.045},
  angry:{label:'분노',cps:21,pitch:1.04,gain:1.25,duration:.06},
  flustered:{label:'당황',cps:55,pitch:1.17,gain:.8,duration:.025},
};
export const SPEAKERS:Record<Speaker,{name:string;frequency:number;wave:'triangle'|'sine'}>={witch:{name:'견습 마녀',frequency:183,wave:'triangle'},flora:{name:'플로라',frequency:312,wave:'sine'},rabbit:{name:'먹물 토끼',frequency:145,wave:'triangle'},mongsil:{name:'몽실',frequency:265,wave:'sine'},chef:{name:'꽥 셰프',frequency:220,wave:'triangle'},...Object.fromEntries(NPCS.map(n=>[n.id,{name:n.name,frequency:n.frequency,wave:n.wave}]))} as Record<Speaker,{name:string;frequency:number;wave:'triangle'|'sine'}>;
export function portrait(speaker:Speaker,emotion:Emotion){if(speaker!=='witch'&&speaker!=='flora')return `npcs/${speaker}-${emotion}.png`;return emotion==='neutral'?`${speaker}-knee.png`:`expressions/${speaker}-${emotion}.png`;}
export function conversationLabel(speaker:Speaker){const name=SPEAKERS[speaker].name,last=name.charCodeAt(name.length-1);return name+(last>=0xac00&&last<=0xd7a3&&(last-0xac00)%28?'과':'와')+' 대화';}
export function lineText(line:DialogueLine){return line.segments.map(segment=>segment.text).join('');}
export function buildTimeline(line:DialogueLine){
  return line.segments.flatMap((segment,segmentIndex)=>{
    const graphemes=Array.from(new Intl.Segmenter('ko',{granularity:'grapheme'}).segment(segment.text),part=>part.segment);
    return graphemes.map((text,index)=>({text,segment:segmentIndex,delayMs:1000/(segment.cps??EMOTIONS[line.emotion].cps)+(/[.!?。…]/u.test(text)?160:/[,，]/u.test(text)?80:0)+(index===graphemes.length-1?(segment.pauseAfterMs??0):0),sound:!/[\s\p{P}\p{S}]/u.test(text)}));
  });
}
