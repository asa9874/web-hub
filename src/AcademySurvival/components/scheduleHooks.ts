import {createContext,useContext} from 'react';
import type {NpcScheduleEngine} from '../systems/npcSchedules';
export const ScheduleContext=createContext<NpcScheduleEngine|null>(null);
export const useOptionalScheduleEngine=()=>useContext(ScheduleContext);
export function useScheduleEngine(){const engine=useOptionalScheduleEngine();if(!engine)throw new Error('ScheduleProvider 필요');return engine;}
