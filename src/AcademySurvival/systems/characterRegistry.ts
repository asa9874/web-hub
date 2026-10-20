import {fixedCharacters} from '../data/characters';
import {validateFixedCharacters} from './characterValidation';
export {fixedCharacters};
export const characterIssues=validateFixedCharacters(fixedCharacters);
