import type {GiftCodex,GiftPower} from './giftCodex';
import type {ImpactMetadata} from './impact';
export type Rarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
export type Category = 'martial' | 'magic' | 'body' | 'mind' | 'intellect' | 'social' | 'personality' | 'special';
export type GiftCategory = 'combat' | 'survival' | 'information' | 'relations' | 'fortune' | 'space' | 'memory' | 'omen' | 'society' | 'daily';
export type Condition =
  | { kind: 'stat'; key: string; min: number }
  | { kind: 'flag' | 'tag'; key: string }
  | { kind: 'trait'; id: string }
  | { kind: 'all' | 'any'; conditions: Condition[] }
  | { kind: 'not'; condition: Condition };
export interface Context { stats: Record<string, number>; flags: string[]; tags: string[]; traits: string[]; gifts: string[] }
export type Effect =
  | { id: string; type: 'STAT_MODIFIER'; target: string; amount: number }
  | { id: string; type: 'GROWTH_MODIFIER' | 'ACTION_WEIGHT' | 'EVENT_WEIGHT'; target: string; multiplier: number }
  | { id: string; type: 'CHECK_MODIFIER'; target: string; unit: 'score' | 'percentagePoints'; amount: number }
  | { id: string; type: 'UNLOCK_OPTION'; option: string }
  | { id: string; type: 'CONDITIONAL_EFFECT'; condition: Condition; effects: Effect[] }
  | { id: string; type: 'SPECIAL_RULE'; ruleId: string };
export interface Acquisition { condition: Condition; chance: number | null; note: string }
export interface Evolution { to: string; condition: Condition; chance: number | null; note: string }
export interface EventReference { id: string; title: string; tags: string[]; status: 'planned'; condition: Condition }
export interface ContentBase {
  impact:ImpactMetadata;
  id: string; name: string; rarity: Rarity; lore: string; system: string;
  effects: Effect[]; eventTags: string[]; eventIds: string[];
  birth: { eligible: boolean; weight: number; condition?: Condition; excludes: string[] };
}
export interface Trait extends ContentBase { kind: 'trait'; category: Category; family: string; tier: number; acquisitions: Acquisition[]; evolutions: Evolution[]; exclusiveGroup?: string }
export interface Gift extends ContentBase {codex?:GiftCodex;power?:GiftPower; kind: 'gift'; category: GiftCategory; activation: string }
export type Entry = Trait | Gift;
export interface SpecialRule {
  id: string; trigger: string; operation: 'reveal' | 'prevent' | 'create' | 'transform' | 'transfer' | 'bind' | 'remember' | 'conceal' | 'repeat' | 'move' | 'delay' | 'guarantee';
  target: string; value: number; unit: string; limit: string; restriction: string;
}
export interface Issue { id: string; message: string }
