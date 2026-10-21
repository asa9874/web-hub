import {useEffect,useState} from 'react';
import type {ReactNode} from 'react';
import {MotivationContext} from './motivationHooks';
import {useScheduleEngine} from './scheduleHooks';
import {useRelationships} from './RelationshipContext';
import {createMotivationEngine} from '../systems/motivationEngine';
export function MotivationProvider({children}:{children:ReactNode}){const schedule=useScheduleEngine(),{graph}=useRelationships(),[engine]=useState(()=>createMotivationEngine(schedule,{relationships:graph,autoConnect:false}));useEffect(()=>engine.connect(),[engine]);return <MotivationContext.Provider value={engine}>{children}</MotivationContext.Provider>;}
