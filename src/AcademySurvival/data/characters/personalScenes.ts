import {serenaRouteScenes} from '../heroineRoutes/serena';
import raw from './personalScenes.json';
import type {PersonalSceneDefinition} from '../../types/personalScene';

export const personalScenes=raw as PersonalSceneDefinition[];
export const personalSceneRegistry=new Map([...personalScenes,...serenaRouteScenes].map(s=>[s.id,s]));

const observation=personalSceneRegistry.get('SER-01')!;
observation.kind='personal';
observation.variants=[{conditions:[{type:'target',condition:{type:'activity',id:'self_study'}}],opening:[{speaker:'owner',text:'방금 살펴보던 내용, 어떻게 생각했어?'},{speaker:'owner',text:'내가 놓친 관점이 있을지도 몰라서.'}]}];
for(const code of ['SER-02','SER-03','SER-04'])personalSceneRegistry.get(code)!.kind='personal';
