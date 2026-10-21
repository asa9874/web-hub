import {createContext,useContext,useEffect,useState} from 'react';
import type {ReactNode} from 'react';
import {createRelationshipGraph} from '../systems/relationships';
import type {RelationshipGraph} from '../systems/relationships';
import type {LocationWorld} from '../systems/locationWorld';
import {useLocationWorld} from './LocationWorldContext';
const Context=createContext<{graph:RelationshipGraph;world:LocationWorld;inspected:string|null;inspectCharacter:(id:string)=>void;closeInspector:()=>void}|null>(null);
export function RelationshipProvider({children}:{children:ReactNode}){const [inspected,setInspected]=useState<string|null>(null),world=useLocationWorld(),[graph]=useState(()=>createRelationshipGraph(world.getCharacters().map(c=>c.id),[],{now:world.clock.getSnapshot}));useEffect(()=>world.subscribe(()=>graph.setCharacterIds(world.getCharacters().map(c=>c.id))),[world,graph]);return <Context.Provider value={{graph,world,inspected,inspectCharacter:setInspected,closeInspector:()=>setInspected(null)}}>{children}</Context.Provider>;}
export const useOptionalRelationships=()=>useContext(Context);
export function useRelationships(){const value=useOptionalRelationships();if(!value)throw new Error('RelationshipProvider 필요');return value;}
