import {useState} from 'react';
import type {ReactNode} from 'react';
import type {PlaySession} from '../systems/playSession';
import {GameTimeProvider} from './GameTimeContext';
import {LocationWorldBinding} from './LocationWorldContext';
import {RelationshipBinding} from './RelationshipContext';
import {ScheduleContext} from './scheduleHooks';
import {MotivationContext} from './motivationHooks';
import {AiContext} from './aiHooks';

/** Bind existing consumers to one already-connected runtime; never reconnect its engines. */
export default function LiveWorldProviders({session,children}:{session:PlaySession;children:ReactNode}){
 const {world,graph,schedule,motivation,ai}=session.world.runtime,[inspected,setInspected]=useState<string|null>(null);
 return <GameTimeProvider clock={world.clock}><LocationWorldBinding value={world}><RelationshipBinding value={{world,graph,inspected,inspectCharacter:setInspected,closeInspector:()=>setInspected(null)}}><ScheduleContext.Provider value={schedule}><MotivationContext.Provider value={motivation}><AiContext.Provider value={ai}>{children}</AiContext.Provider></MotivationContext.Provider></ScheduleContext.Provider></RelationshipBinding></LocationWorldBinding></GameTimeProvider>;
}
