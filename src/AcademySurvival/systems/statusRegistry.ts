import {statuses} from '../data/statuses';
import {events} from './registry';
import {validateStatuses} from './statusValidation';
export {statuses};
export const statusRegistry=new Map(statuses.map(s=>[s.id,s]));
export const statusIssues=validateStatuses(statuses);
export const statusEvents=(id:string)=>events.filter(event=>statusRegistry.get(id)?.eventTags.some(tag=>event.tags.includes(tag)));
