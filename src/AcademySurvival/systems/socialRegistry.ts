import {positions,titles} from '../data/social';
import {validateSocialCatalog} from './socialValidation';
import {events} from './registry';
export {positions,titles};
export const socialIssues=validateSocialCatalog(positions,titles);
export const socialEvents=(tags:string[])=>events.filter(e=>e.tags.some(t=>tags.includes(t)));
