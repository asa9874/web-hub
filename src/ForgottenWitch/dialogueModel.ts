export type Speaker='witch'|'flora';
export type Emotion='neutral'|'joy'|'worry'|'angry'|'flustered';
export interface DialogueSegment {text:string;cps?:number;pauseAfterMs?:number;color?:string;size?:number;weight?:number}
export interface DialogueLine {speaker:Speaker;emotion:Emotion;segments:DialogueSegment[]}
export const EMOTIONS:Record<Emotion,{label:string;cps:number;pitch:number;gain:number;duration:number}>={
  neutral:{label:'차분함',cps:25,pitch:1,gain:.72,duration:.035},
  joy:{label:'기쁨',cps:30,pitch:1.1,gain:.9,duration:.038},
  worry:{label:'걱정',cps:19,pitch:.94,gain:.58,duration:.045},
  angry:{label:'분노',cps:21,pitch:1.04,gain:1.25,duration:.06},
  flustered:{label:'당황',cps:55,pitch:1.17,gain:.8,duration:.025},
};
export const SPEAKERS={witch:{name:'견습 마녀',frequency:183,wave:'triangle' as const},flora:{name:'플로라',frequency:312,wave:'sine' as const}};
export function portrait(speaker:Speaker,emotion:Emotion){return emotion==='neutral'?`${speaker}-knee.png`:`expressions/${speaker}-${emotion}.png`;}
export function lineText(line:DialogueLine){return line.segments.map(segment=>segment.text).join('');}
export function buildTimeline(line:DialogueLine){
  return line.segments.flatMap((segment,segmentIndex)=>{
    const graphemes=Array.from(new Intl.Segmenter('ko',{granularity:'grapheme'}).segment(segment.text),part=>part.segment);
    return graphemes.map((text,index)=>({text,segment:segmentIndex,delayMs:1000/(segment.cps??EMOTIONS[line.emotion].cps)+(/[.!?。…]/u.test(text)?160:/[,，]/u.test(text)?80:0)+(index===graphemes.length-1?(segment.pauseAfterMs??0):0),sound:!/[\s\p{P}\p{S}]/u.test(text)}));
  });
}
