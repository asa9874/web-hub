export type StatId='STR'|'AGI'|'VIT'|'MAG'|'INT'|'WIL'|'CHA';
export type StatGradeId='F'|'E'|'D'|'C'|'B'|'A'|'S'|'SS'|'SSS'|'EX';
export type RankLevel=0|1|2|3|4|5|6|7|8|9;
export type ProficiencyCategory='martial'|'elemental'|'application'|'academic'|'social'|'exploration'|'life';
export interface StatGrade {grade:StatGradeId;title:string;min:number;max:number|null;flavorText:string}
export interface StatDefinition {
 kind:'stat';id:StatId;name:string;description:string;checkTags:string[];grades:StatGrade[];
 // Read-only reference bindings. Existing effect targets are not rewritten or applied to character values.
 effectTargets:string[];derivedTargets:string[];
}
export interface ProficiencyRank {level:RankLevel;name:string;flavorText:string}
export interface ProficiencyDefinition {
 kind:'proficiency';id:string;name:string;categoryId:ProficiencyCategory;description:string;
 relatedStats:StatId[];checkTags:string[];effectTargets:string[];ranks:ProficiencyRank[];
}
export type KnowledgeDefinition=StatDefinition|ProficiencyDefinition;
// Values belong to a future character, never to a definition or trait's evolution tier.
export interface CharacterKnowledge {
 stats:Record<StatId,number>;proficiencyRanks:Record<string,RankLevel>;traitIds:string[];giftIds:string[];
}
