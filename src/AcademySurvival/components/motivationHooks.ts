import {createContext,useContext} from 'react';
import type {MotivationEngine} from '../systems/motivationEngine';
export const MotivationContext=createContext<MotivationEngine|null>(null);
export const useOptionalMotivation=()=>useContext(MotivationContext);
export function useMotivationEngine(){const engine=useOptionalMotivation();if(!engine)throw new Error('MotivationProvider 필요');return engine;}
