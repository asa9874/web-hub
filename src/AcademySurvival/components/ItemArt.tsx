import type {CSSProperties} from 'react';
import {itemArtRegistry,itemAtlasUrl} from '../data/itemArt';

/** Only pass an identified definition ID. Unknown items share a non-revealing placeholder. */
export default function ItemArt({definitionId,className=''}:{definitionId?:string;className?:string}){
 const art=definitionId?itemArtRegistry.get(definitionId):undefined;
 const style:CSSProperties=art?{backgroundImage:`url("${itemAtlasUrl(art.atlas)}")`,backgroundPosition:`${art.column*25}% ${art.row*25}%`}:{};
 return <span aria-hidden="true" className={'ac-item-art '+(!art?'is-unknown ':'')+className} style={style}>{!art&&'◇'}</span>;
}
