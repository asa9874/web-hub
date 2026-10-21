import type {CharacterImpactConfig,CharacterImpactDomain} from '../types/characterImpact';
export const CHARACTER_IMPACT_LABELS:Record<CharacterImpactDomain,string>={stats:'능력치',proficiencies:'숙련도',traits:'특성',gifts:'기프트',positions:'직급·신분',titles:'칭호'};
export const CHARACTER_IMPACT_V1:CharacterImpactConfig=Object.freeze({
 version:'character-impact-v1',maximum:1000,
 caps:Object.freeze({stats:180,proficiencies:170,traits:150,gifts:180,positions:170,titles:150}),
 stats:Object.freeze({ids:Object.freeze(['STR','AGI','VIT','MAG','INT','WIL','CHA'] as const),ceiling:200,topCount:3,topWeight:0.7,allWeight:0.3}),
 proficiency:Object.freeze({maxRank:9}),
 decay:Object.freeze({first:1,second:0.25,third:0.1,rest:0.05}),
});
// Callers select a formula explicitly; v2 can replace this binding without rewriting character records.
export const ACTIVE_CHARACTER_IMPACT_CONFIG=CHARACTER_IMPACT_V1;
