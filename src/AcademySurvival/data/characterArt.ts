import type {Character} from '../types/character';
export const CHARACTER_EXPRESSIONS=['neutral','happy','serious','worried'] as const;
export type CharacterExpression=typeof CHARACTER_EXPRESSIONS[number];
export const CHARACTER_ART_KEYS=['serena','adelia','lumiel','lisette','nia','camilla','miel','estelle','fiona','noel','brina','elisia','thea','violetta','iris','mob-male','mob-female'] as const;
export type ArtCharacter=Pick<Character,'id'|'gender'|'name'>&{templateId?:string};
export function characterArtKey(c:ArtCharacter){const key=(c.templateId??c.id).replace(/^fixed-/,'');return (CHARACTER_ART_KEYS as readonly string[]).includes(key)?key:c.gender==='여성'?'mob-female':'mob-male';}
export function characterArt(c:ArtCharacter,expression:CharacterExpression='neutral',portrait=false){return `${(import.meta.env?.BASE_URL??'/web-hub/')}assets/academy/characters/${characterArtKey(c)}/${portrait?'portrait':expression}.webp`;}
export function expressionForEmotion(emotion?:string):CharacterExpression{return ['warm','proud','playful'].includes(emotion??'')?'happy':['worried','hurt','embarrassed'].includes(emotion??'')?'worried':['serious','focused'].includes(emotion??'')?'serious':'neutral';}
