import {serena} from './serena';
import {additionalStudents} from './students';
export const fixedCharacters=[serena,...additionalStudents];
export const fixedCharacterRegistry=new Map(fixedCharacters.map(t=>[t.id,t]));
