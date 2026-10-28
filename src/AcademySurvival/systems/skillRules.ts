import type {Character} from '../types/character';
import type {SkillDefinition} from '../types/skill';
import type {CheckDefinition} from '../types/check';
import {skillRegistry} from '../data/skills';
const coreStats:Record<string,keyof Character['stats']>={strength:'STR',senses:'AGI',recovery:'VIT',constitution:'VIT',will:'WIL',focus:'WIL',fear:'WIL',madness:'WIL',speech:'CHA',etiquette:'CHA',leadership:'CHA',bargain:'CHA'};
/** One best related mastery bonus; no stacking all learned skills or rarity/influence bonuses. */
export function skillCheckBonus(c:Character,d:CheckDefinition){if(!c.skillBook)return 0;let best=0;for(const [id,p] of Object.entries(c.skillBook.entries)){const s=skillRegistry.get(id);if(s&&(s.proficiencyId===d.proficiencyId&&s.proficiencyId!==undefined||d.tags.includes(s.family)))best=Math.max(best,Math.min(3,Math.floor(p.rank/2)));}return best;}
export function skillDomainRank(c:Character,d:SkillDefinition){const stat=coreStats[d.family]??(d.category==='body'?'VIT':d.category==='social'?'CHA':'INT');return d.proficiencyId?c.proficiencyRanks[d.proficiencyId]??0:Math.min(6,Math.floor(c.stats[stat]/25));}
export function skillMasteryCap(c:Character,d:SkillDefinition){const domain=skillDomainRank(c,d),challenges=c.skillBook?.challenges[d.family]??0;return domain>=6&&challenges>=5?9:domain>=4&&challenges>=2?6:4;}
