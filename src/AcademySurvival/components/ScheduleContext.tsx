import {useEffect,useState} from 'react';
import type {ReactNode} from 'react';
import {createNpcScheduleEngine} from '../systems/npcSchedules';
import {ScheduleContext} from './scheduleHooks';
import {useRelationships} from './RelationshipContext';

export function ScheduleProvider({children}:{children:ReactNode}){const {world,graph}=useRelationships(),[engine]=useState(()=>createNpcScheduleEngine(world,{autoConnect:false,deferInitialProcessing:true,relationships:graph}));useEffect(()=>engine.connect(),[engine]);return <ScheduleContext.Provider value={engine}>{children}</ScheduleContext.Provider>;}
