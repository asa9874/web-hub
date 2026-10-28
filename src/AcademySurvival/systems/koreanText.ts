/** Korean final-consonant rules, including the ㄹ exception for 으로/로. */
export function withParticle(name:string,pair:'이/가'|'은/는'|'을/를'|'과/와'|'으로/로'){
 const last=name.trim().slice(-1).charCodeAt(0),jong=last>=0xac00&&last<=0xd7a3?(last-0xac00)%28:0,[closed,open]=pair.split('/');return name+(jong&&(pair!=='으로/로'||jong!==8)?closed:open);
}
