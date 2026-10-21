import {createContext,useContext,useState,useSyncExternalStore} from 'react';
import type {ReactNode} from 'react';
import {createGameClock} from '../systems/gameTime';
import type {GameClock} from '../systems/gameTime';
const Context=createContext<GameClock|null>(null);
/** One explicit clock per mounted game session. A test clock never enters this context. */
export function GameTimeProvider({children,clock}:{children:ReactNode;clock?:GameClock}){const [owned]=useState(()=>clock??createGameClock());return <Context.Provider value={owned}>{children}</Context.Provider>;}
export function useGameClock(){const clock=useContext(Context);if(!clock)throw new Error('GameTimeProvider가 필요합니다.');return clock;}
export function useClockMinute(clock:GameClock){return useSyncExternalStore(clock.subscribe,clock.getSnapshot,clock.getSnapshot);}
