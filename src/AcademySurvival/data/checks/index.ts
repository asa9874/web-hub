import type {CheckDefinition} from '../../types/check';
export const CHECK_RULES={primaryWeight:.65,secondaryWeight:.35,statFactor:.5,skillPerRank:5,modifierMin:-15,modifierMax:15,luckMin:-10,luckMax:9,greatMargin:12,partialMargin:-5,criticalMargin:-15,difficulties:{trivial:15,easy:30,normal:45,hard:65,veryHard:85,extreme:105}} as const;
export const checkDefinitions:CheckDefinition[]=[
 {id:'physical-attack',name:'물리 공격',primary:'STR',secondary:'AGI',proficiencyId:'proficiency-sword',allowUntrained:true,tags:['combat','attack','sword','duel','body-load','physical-action','strenuous-training']},
 {id:'physical-defense',name:'물리 대응',primary:'AGI',secondary:'WIL',proficiencyId:'proficiency-sword',allowUntrained:true,tags:['combat','defense','dodge','sword','body-load','physical-action']},
 {id:'magic-attack',name:'마력탄 제어',primary:'MAG',secondary:'INT',proficiencyId:'proficiency-mana-control',allowUntrained:false,tags:['combat','magic','arcane']},
 ...(['fire','ice','lightning'] as const).map(id=>({id:id+'-attack',name:{fire:'화염 공격',ice:'냉기 공격',lightning:'번개 공격'}[id],primary:'MAG' as const,secondary:'INT' as const,proficiencyId:'proficiency-'+id,allowUntrained:false,tags:['combat','magic',id]})),
 {id:'magic-defense',name:'마법 저항',primary:'WIL',secondary:'MAG',proficiencyId:'proficiency-barrier',allowUntrained:true,tags:['combat','defense','magic','resistance']},
 {id:'healing',name:'회복 마법',primary:'MAG',secondary:'INT',proficiencyId:'proficiency-healing',allowUntrained:false,tags:['magic','healing']},
 {id:'escape',name:'도주',primary:'AGI',secondary:'WIL',proficiencyId:'proficiency-survival',allowUntrained:true,tags:['combat','escape','movement']},
 {id:'pursuit',name:'추적',primary:'AGI',secondary:'INT',proficiencyId:'proficiency-tracking',allowUntrained:true,tags:['tracking','perception']},
 {id:'persuade',name:'설득 시도',primary:'CHA',secondary:'INT',proficiencyId:'proficiency-rhetoric',allowUntrained:true,tags:['speech','persuasion']},
 {id:'negotiate',name:'협상',primary:'CHA',secondary:'INT',proficiencyId:'proficiency-negotiation',allowUntrained:true,tags:['negotiation','speech']},
 {id:'intimidate',name:'위압',primary:'STR',secondary:'CHA',proficiencyId:'proficiency-rhetoric',allowUntrained:true,tags:['intimidation','speech']},
 {id:'mental-resist',name:'정신 저항',primary:'WIL',secondary:'INT',allowUntrained:true,tags:['mental','fear','resistance']},
 {id:'observe',name:'관찰·분석',primary:'INT',secondary:'WIL',proficiencyId:'proficiency-detection',allowUntrained:true,tags:['perception','analysis','research']},
 {id:'stealth',name:'은신',primary:'AGI',secondary:'INT',proficiencyId:'proficiency-stealth',allowUntrained:true,tags:['stealth']},
 {id:'craft',name:'기초 제작',primary:'INT',secondary:'AGI',proficiencyId:'proficiency-clockwork',allowUntrained:true,tags:['craft','precision'],partial:{cost:'추가 작업 시간 필요'}},
 {id:'knowledge',name:'지식 활용',primary:'INT',secondary:'WIL',proficiencyId:'proficiency-magic-theory',allowUntrained:true,tags:['research','knowledge']},
 {id:'strength',name:'힘겨루기',primary:'STR',secondary:'VIT',allowUntrained:true,tags:['strength','physical']},
];
export const checkRegistry=new Map(checkDefinitions.map(d=>[d.id,d]));
