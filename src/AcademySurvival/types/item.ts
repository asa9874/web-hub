import type {Effect} from '../types';
import type {ActionEffect} from './actionEffects';
import type {StatId} from './knowledge';
import type {NpcAiEngine} from '../systems/npcAi';
import type {CheckResult} from './check';
export const ITEM_RARITIES=['common','fine','rare','masterwork','heroic','relic','legendary','mythic','transcendent'] as const;
export type ItemRarity=typeof ITEM_RARITIES[number];
export type ItemQuality='crude'|'normal'|'excellent'|'superior';
export type ItemCategory='weapon'|'armor'|'accessory'|'consumable'|'food'|'book'|'magic_tool'|'material'|'household'|'gift'|'valuable'|'artifact';
export const EQUIPMENT_SLOTS=['main','off','head','body','hands','feet','accessory1','accessory2'] as const;
export type EquipmentSlot=typeof EQUIPMENT_SLOTS[number];
export type ItemRequirement={type:'stat';stat:StatId;min:number}|{type:'proficiency';id:string;min:number}|{type:'location_tag';tag:string}|{type:'permission';id:string};
export interface ItemDefinition {id:string;name:string;description:string;category:ItemCategory;rarity:ItemRarity;stackable:boolean;maxStack:number;weight:number;baseValue:number;uniqueness:'mass'|'limited'|'unique'|'world_unique';worldLimit:number;spawn:'daily'|'conditional'|'explicit'|'scenario';slot?:EquipmentSlot;twoHanded?:boolean;requirements:ItemRequirement[];equipmentEffects:Effect[];useEffects:ActionEffect[];consumed:boolean;useMinutes:number;activityIds:string[];tags:string[];cultureContentId?:string;hidden:boolean;awakening?:{locationId:string;proficiencyId:string;minRank:number;materialId:string;effects:Effect[];description:string}}
export type ItemLocation={kind:'inventory';characterId:string}|{kind:'equipped';characterId:string;slot:EquipmentSlot}|{kind:'storage';storageId:string}|{kind:'ground';locationId:string};
export interface ItemHistory {id:string;at:number;kind:'created'|'transferred'|'gift'|'loan'|'returned'|'stored'|'recovered'|'used'|'appraised'|'awakened'|'event'|'discarded';actorId?:string;targetId?:string;eventId?:string;message:string}
export interface ItemInstance {id:string;definitionId:string;quantity:number;quality:ItemQuality;condition:number;location:ItemLocation;ownerCharacterId?:string;provenanceKey:string;ownerHistory:{characterId:string;firstAt:number;lastAt:number;transfers:number}[];customName?:string;renown:number;awakened:boolean;identifiedBy:string[];createdAt:number;updatedAt:number;history:ItemHistory[]}
export interface ItemStorage {id:string;name:string;locationId:string;kind:'locker'|'room'|'club'|'laboratory'|'shop';allowedCharacterIds:string[];organizationIds:string[];capacity:number;categories?:ItemCategory[]}
export interface ItemOffer {id:string;kind:'gift'|'transfer'|'loan'|'return';sourceId:string;targetId:string;itemId:string;quantity:number;createdAt:number;dueAt?:number;status:'pending'|'accepted'|'rejected'|'expired';reason?:string;transferredItemId?:string}
export interface ItemLoan {id:string;itemId:string;ownerId:string;borrowerId:string;startedAt:number;dueAt:number;returnedAt?:number}
export type ItemCommand={type:'items_initialize'}|{type:'item_create';definitionId:string;characterId:string;quantity:number}|{type:'item_equip'|'item_unequip'|'item_use'|'item_recover'|'item_discard'|'item_appraise'|'item_awaken';characterId:string;itemId:string}|{type:'item_store';characterId:string;itemId:string;storageId:string}|{type:'item_merge';characterId:string;itemId:string;targetItemId:string}|{type:'item_offer';characterId:string;targetId:string;itemId:string;kind:ItemOffer['kind'];quantity:number;dueAt?:number}|{type:'item_respond';characterId:string;offerId:string;accept:boolean};
export interface ItemSave {version:'items-v1';seed:string;absoluteMinute:number;serial:number;dirtyIds:string[];items:ItemInstance[];storages:ItemStorage[];offers:ItemOffer[];loans:ItemLoan[];initializedIds:string[];spawned:Record<string,number>;giftRewards:Record<string,number>;aiDays:Record<string,number>;slotPolicies:Record<string,EquipmentSlot[]>}
export interface ItemEngine {
 ai:NpcAiEngine;connect:()=>()=>void;disconnect:()=>void;save:()=>ItemSave;subscribe:(f:()=>void)=>()=>void;getSnapshot:()=>number;
 marketTransfer:(actorId:string,itemId:string,storageId:string,buy:boolean,quantity:number,payment:{commit:()=>void;rollback:()=>void})=>void;
 initialize:(id:string)=>void;create:(definitionId:string,location:ItemLocation,ownerCharacterId?:string,quantity?:number,quality?:ItemQuality,mode?:'daily'|'debug'|'scenario')=>ItemInstance;
 equip:(actorId:string,itemId:string,slot?:EquipmentSlot)=>void;unequip:(actorId:string,itemId:string)=>void;use:(actorId:string,itemId:string)=>void;
 propose:(sourceId:string,targetId:string,itemId:string,kind?:ItemOffer['kind'],quantity?:number,dueAt?:number)=>ItemOffer;respond:(actorId:string,offerId:string,accept:boolean)=>ItemOffer;
 evaluateGift:(sourceId:string,targetId:string,itemId:string)=>{score:number;accepted:boolean;reason:string;rewardsAvailable:boolean};
 addStorage:(storage:ItemStorage)=>void;store:(actorId:string,itemId:string,storageId:string)=>void;recover:(actorId:string,itemId:string)=>void;discard:(actorId:string,itemId:string)=>void;merge:(actorId:string,fromId:string,toId:string)=>void;
 appraise:(actorId:string,itemId:string)=>CheckResult;awaken:(actorId:string,itemId:string)=>void;getEquipmentEffects:(id:string)=>Effect[];
 getInventory:(id:string)=>ItemInstance[];getOwned:(id:string)=>ItemInstance[];getItem:(id:string)=>ItemInstance;getItems:()=>ItemInstance[];getUnownedAtLocation:(locationId:string)=>ItemInstance[];getStorages:()=>ItemStorage[];getOffers:()=>ItemOffer[];getLoans:()=>ItemLoan[];getAvailableStorages:(id:string)=>ItemStorage[];
 getView:(viewerId:string,itemId:string,debug?:boolean)=>{instance:ItemInstance;known:boolean;name:string;definition?:ItemDefinition};getUseAvailability:(id:string,itemId:string)=>{ok:boolean;reasons:string[]};
 getStatistics:()=>{instances:number;quantity:number;rarities:Record<string,number>;pending:number;loans:number};diagnose:()=>string[];setSlotPolicy:(id:string,slots:EquipmentSlot[])=>void;
}
