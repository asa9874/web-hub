import {useEffect,useState} from 'react';
import type {ReactNode} from 'react';
import {createPlaySession,listPlaySlots,readPlaySave} from '../systems/playSession';
import type {PlaySession,SavePort} from '../systems/playSession';
import {PlaySessionContext as Context} from './playSessionHooks';
const storage=():SavePort=>window.localStorage;
export function PlaySessionProvider({children}:{children:ReactNode}){
 const [session,setSession]=useState<PlaySession|null>(null),[generation,setGeneration]=useState(0);
 useEffect(()=>{if(!session)return;const release=session.retain();return()=>{session.pause();release();};},[session]);
 const replace=(next:PlaySession)=>{session?.pause();setSession(next);setGeneration(n=>n+1);};
 return <Context.Provider value={{session,generation,start:(seed,count,player)=>replace(createPlaySession({seed,count,player})),load:slot=>replace(createPlaySession({save:readPlaySave(storage(),slot)})),save:slot=>{if(!session)throw Error('진행 중인 게임이 없습니다.');session.save(storage(),slot);},slots:()=>{try{return listPlaySlots(storage());}catch{return [1,2,3].map(slot=>({slot,empty:false,error:'브라우저 저장소에 접근할 수 없습니다.'}));}}}}>{children}</Context.Provider>;
}
