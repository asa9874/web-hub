import type {ProficiencyCategory,ProficiencyDefinition,StatId} from '../../types/knowledge';
import {PROFICIENCY_RANKS} from './config';
import type {TenTexts} from './config';
export function P(id:string,name:string,categoryId:ProficiencyCategory,description:string,relatedStats:StatId[],checkTags:string[],effectTargets:string[],texts:TenTexts):ProficiencyDefinition {
 return {kind:'proficiency',id:'proficiency-'+id,name,categoryId,description,relatedStats,checkTags,effectTargets,ranks:PROFICIENCY_RANKS.map((rank,index)=>({level:rank.level,name:rank.name,flavorText:texts[index]}))};
}
