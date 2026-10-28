/* Legacy Context API intentionally keeps its provider and read hooks in one module. */
/* eslint react-refresh/only-export-components: ["error", {"allowExportNames": ["useLocationWorld", "useLocationRevision"]}] */
import {createContext,useContext,useEffect,useState,useSyncExternalStore} from 'react';
import type {ReactNode} from 'react';
import {createLocationWorld} from '../systems/locationWorld';
import type {LocationWorld} from '../systems/locationWorld';
import {createInitialLocationCharacters} from '../systems/locationInitialState';
import {useGameClock} from './GameTimeContext';
const Context=createContext<LocationWorld|null>(null);
export const LocationWorldBinding=Context.Provider;
export function LocationWorldProvider({children}:{children:ReactNode}){const clock=useGameClock();const [world]=useState(()=>createLocationWorld({clock,characters:createInitialLocationCharacters(),autoConnect:false}));useEffect(()=>world.connect(),[world]);return <Context.Provider value={world}>{children}</Context.Provider>;}
export function useLocationWorld(){const world=useContext(Context);if(!world)throw new Error('LocationWorldProvider 필요');return world;}
export function useLocationRevision(world:LocationWorld){return useSyncExternalStore(world.subscribe,world.getSnapshot,world.getSnapshot);}
