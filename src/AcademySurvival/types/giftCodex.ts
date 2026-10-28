export type GiftField='arms'|'arcana'|'spacetime'|'mind'|'records'|'causality'|'life'|'nature'|'creation';
export type GiftPower=
 |{kind:'steady-luck'|'extreme-luck'|'precision';checks:string[]}
 |{kind:'exchange-weights';checks:string[]}
 |{kind:'memory-anchor'};
export interface GiftCodex {
 summary:string;principle:string;scope:string;limits:string[];examples:string[];field?:GiftField;
 runtime:'implemented'|'partial'|'pending';implemented:string[];pending:string[];
 generation:'active'|'pending'|'retired'|'preserved';review:string;
}
