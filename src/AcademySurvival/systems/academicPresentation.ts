import type {CourseDefinition} from '../types/academic';
export const courseColor=(course:CourseDefinition)=>({STR:'#d79573',AGI:'#7bb99c',VIT:'#bdad71',MAG:'#a69ad9',INT:'#7baece',WIL:'#af95ae',CHA:'#d995ad'})[course.statId];
