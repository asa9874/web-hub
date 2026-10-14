import type {NpcId} from './castData';
export interface AmbientNpc {id:string;npc:NpcId;x:number;y:number;trigger:'near'|'interact';radius:number;cooldown:number;seconds:number;lines:string[]}
export const AMBIENT_NPCS:AmbientNpc[]=[
 {id:'ticket-guide',npc:'mira',x:335,y:570,trigger:'near',radius:190,cooldown:12,seconds:6,lines:['표는 필요 없어요. 길만 잃지 마세요.','앞줄은 비어 있어요. ……늘 그렇지만요.']},
 {id:'lamp-helper',npc:'lumi',x:2355,y:570,trigger:'interact',radius:80,cooldown:3,seconds:7,lines:['종이 등은 손으로 덮지 마세요. 불빛이 수줍어져요.','꽃 시계가 멎으면, 안내인에게 물어보세요.']},
 {id:'sound-listener',npc:'iris',x:3210,y:570,trigger:'near',radius:190,cooldown:14,seconds:7,lines:['잠깐. 바닥 아래서 발소리가 따라와요.','조용히 가도 괜찮아요. 듣고 있는 건 제가 할게요.']},
];
