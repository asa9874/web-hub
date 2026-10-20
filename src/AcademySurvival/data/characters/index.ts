import {serena} from './serena';
export const fixedCharacters=[serena];
export const fixedCharacterRegistry=new Map(fixedCharacters.map(t=>[t.id,t]));
