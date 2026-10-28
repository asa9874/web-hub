import {createContext,useContext} from 'react';
import type {EventSceneData} from './EventScene';
export const EventSceneContext=createContext<{present:(scene:EventSceneData)=>Promise<'yes'|'no'|'confirm'>;resultsEnabled:boolean;setResultsEnabled:(enabled:boolean)=>void}|null>(null);
export const useEventScene=()=>useContext(EventSceneContext);
