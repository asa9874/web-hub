import {useState} from 'react';
import {characterArt} from '../data/characterArt';
import type {ArtCharacter,CharacterExpression} from '../data/characterArt';
export default function CharacterArt({character,expression='neutral',portrait=false,className=''}:{character:ArtCharacter;expression?:CharacterExpression;portrait?:boolean;className?:string}){
 const src=characterArt(character,expression,portrait),[failed,setFailed]=useState('');
 return <span className={`ac-character-art ${portrait?'is-portrait':'is-standing'} ${className}`} data-expression={expression}>{failed!==src?<img src={src} alt={character.name+(portrait?' 초상':' · '+({neutral:'차분함',happy:'미소',serious:'진지함',worried:'걱정'})[expression])} width={portrait?160:384} height={portrait?160:800} loading={portrait?'lazy':'eager'} decoding="async" onError={()=>setFailed(src)}/>:<span className="ac-art-fallback" aria-label={character.name+' 이미지 준비 중'}>{character.name.slice(0,1)}</span>}</span>;
}
