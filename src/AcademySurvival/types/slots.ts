import type {Condition} from './index';
export interface RandomContentSlot<K extends string>{id:string;kind:K;description:string;drawAt:'campaign-start';withoutReplacement:true;candidates:{entryId:string;weight:number;condition?:Condition;organizationId?:string}[]}
