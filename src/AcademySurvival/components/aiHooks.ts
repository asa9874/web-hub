import {createContext,useContext} from 'react';
import type {NpcAiEngine} from '../systems/npcAi';
export const AiContext=createContext<NpcAiEngine|null>(null);
export const useOptionalAi=()=>useContext(AiContext);
export function useAiEngine(){const engine=useOptionalAi();if(!engine)throw new Error('AiProvider 필요');return engine;}
