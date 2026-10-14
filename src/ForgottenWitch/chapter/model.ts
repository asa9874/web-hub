import {TUNING} from '../config';
import type {Actor} from '../model';
export const CHAPTER_KEY='witch-theater-chapter-01-v1';
export const REGIONS=[{id:'entrance',name:'숲의 입구',x:300},{id:'flowers',name:'꽃밭 작업장',x:1650},{id:'rabbit',name:'작은 연습 무대',x:3150},{id:'kitchen',name:'숲속 주방',x:4700},{id:'theater',name:'중앙 대극장',x:6250},{id:'exit',name:'숲의 출구',x:7750}] as const;
export type Region=(typeof REGIONS)[number]['id'];
export type ChapterNpc='flora'|'rabbit'|'mongsil'|'chef';
export type Panel='flowers'|'rabbit'|'kitchen'|'show';
export interface Progress {version:1;met:boolean;flowers:number;rabbit:number;materials:boolean[];folds:number[];secured:boolean[];show:number;ending:boolean;farewellReady:boolean;complete:boolean;x:number;flowerHeights:number[];flowerAngles:number[];flowerFold:boolean[];chats:Record<ChapterNpc,number>}
export const freshProgress=():Progress=>({version:1,met:false,flowers:0,rabbit:0,materials:[false,false,false],folds:[0,0,0],secured:[false,false,false],show:0,ending:false,farewellReady:false,complete:false,x:220,flowerHeights:[310,570,470],flowerAngles:[0,0,0],flowerFold:[false,true,false],chats:{flora:0,rabbit:0,mongsil:0,chef:0}});
export function restoreProgress(raw:string|null):Progress {try{const p=JSON.parse(raw??'null') as Progress;if(p?.version!==1)return freshProgress();const f=freshProgress();for(const k of ['met','ending','complete'] as const)if(typeof p[k]!=='boolean')return f;for(const [k,len] of [['materials',3],['secured',3],['flowerFold',3]] as const)if(!Array.isArray(p[k])||p[k].length!==len||p[k].some(v=>typeof v!=='boolean'))return f;for(const k of ['folds','flowerHeights','flowerAngles'] as const)if(!Array.isArray(p[k])||p[k].length!==3||p[k].some(v=>!Number.isFinite(v)))return f;if(!Number.isInteger(p.flowers)||p.flowers<0||p.flowers>3||!Number.isInteger(p.rabbit)||p.rabbit<0||p.rabbit>3||!Number.isInteger(p.show)||p.show<0||p.show>4||!Number.isFinite(p.x))return f;if(p.show===4)p.ending=true;return {...p,farewellReady:p.farewellReady===true,x:Math.max(80,Math.min(8100,p.x)),folds:p.folds.map(v=>Math.max(0,Math.min(3,Math.floor(v)))),flowerHeights:p.flowerHeights.map(v=>Math.max(300,Math.min(570,v))),flowerAngles:p.flowerAngles.map(v=>Math.max(-90,Math.min(90,v))),chats:Object.fromEntries(Object.keys(f.chats).map(id=>[id,Number.isFinite(p.chats?.[id as ChapterNpc])?Math.max(0,Math.floor(p.chats[id as ChapterNpc])):0])) as Record<ChapterNpc,number>};}catch{return freshProgress();}}
export const prepared=(p:Progress)=>p.flowers===3&&p.rabbit===3&&p.secured.every(Boolean);
export const regionAt=(x:number)=>REGIONS.reduce((best,r)=>x>=r.x-650?r:best,REGIONS[0] as typeof REGIONS[number]);
export const FOLD_ORDERS=[['left','right','top'],['top','left','right'],['right','top','left']] as const;
export const PROP_NAMES=['왕관','검','보물상자'];
export function foldPaper(p:Progress,item:number,edge:string){if(!p.materials[item]||p.folds[item]>=3)return 'locked';if(FOLD_ORDERS[item][p.folds[item]]!==edge){p.folds[item]=0;return 'retry';}p.folds[item]++;return p.folds[item]===3?'crafted':'folded';}
export function flowerReady(p:Progress){return p.flowerHeights.every((h,i)=>Math.abs(h-[440,390,440][i])<=18)&&p.flowerAngles.every((a,i)=>Math.abs(a-[-30,0,30][i])<=8)&&p.flowerFold.every(v=>!v);}
export interface Platform{x:number;y:number;width:number}
export function chapterPlatforms(p:Progress):Platform[]{return [{x:1610,y:500,width:130},...[1440,1800,2180].flatMap((x,i)=>p.flowerFold[i]?[]:[{x:x-110,y:p.flowerHeights[i],width:220}])];}
export function moveChapter(a:Actor,p:Progress,dt:number,direction:number,jump:boolean,held:boolean){
 const oldY=a.y,oldGround=a.grounded;a.buffer=jump?100:Math.max(0,a.buffer-dt*1000);a.coyote=a.grounded?100:Math.max(0,a.coyote-dt*1000);a.landing=Math.max(0,a.landing-dt*5);
 const target=direction*TUNING.speed,amount=(direction?TUNING.acceleration:TUNING.friction)*dt;a.vx+=Math.sign(target-a.vx)*Math.min(Math.abs(target-a.vx),amount);if(direction)a.facing=direction;
 if(a.buffer>0&&a.coyote>0){a.vy=-TUNING.jumpSpeed;a.grounded=false;a.buffer=0;a.coyote=0;}if(!held&&a.vy<-TUNING.jumpCutSpeed)a.vy=-TUNING.jumpCutSpeed;
 a.vy+=TUNING.gravity*dt;a.x=Math.max(80,Math.min(8150,a.x+a.vx*dt));if(!p.flowerFold[0]&&a.x>1290&&a.x<1500&&a.y>505)a.x=1290;
 if(!p.farewellReady&&a.x>7755)a.x=7755;
 a.y+=a.vy*dt;a.grounded=false;const surfaces=[{x:0,y:570,width:8400},...chapterPlatforms(p)];for(const s of surfaces)if(a.vy>=0&&a.x>s.x-20&&a.x<s.x+s.width+20&&oldY<=s.y+2&&a.y>=s.y){a.y=s.y;a.vy=0;a.grounded=true;if(!oldGround)a.landing=1;break;}
 if(a.y>740){a.y=570;a.vy=0;a.grounded=true;}
}

export function npcPhase(id:ChapterNpc,p:Progress,near=false,talking=false){
 if(p.ending||p.show>0)return 'finale';if(talking)return 'dialogue';
 const done=id==='mongsil'?p.flowers===3:id==='rabbit'?p.rabbit===3:id==='chef'?p.secured.every(Boolean):prepared(p);
 if(done)return 'questComplete';if(near)return 'approach';if(p.met&&p.chats[id]>0)return 'questActive';return 'idle';
}
