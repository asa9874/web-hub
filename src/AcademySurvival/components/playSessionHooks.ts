import type {PlayerCreation} from '../types/player';
import {createContext,useContext} from 'react';
import type {PlaySession,listPlaySlots} from '../systems/playSession';
interface PlayContext {session:PlaySession|null;generation:number;start:(seed:string,count:number,player?:PlayerCreation)=>void;load:(slot:number)=>void;save:(slot:number)=>void;slots:()=>ReturnType<typeof listPlaySlots>}
export const PlaySessionContext=createContext<PlayContext|null>(null);
export function usePlaySession(){const value=useContext(PlaySessionContext);if(!value)throw Error('PlaySessionProvider 필요');return value;}
