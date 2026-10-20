import {generateNpcs,NpcGenerationError} from './npcGeneration';
import {npcGenerationContext} from './npcGenerationContext';
import type {NpcGenerationRequest} from '../types/npcGeneration';
self.onmessage=(event:MessageEvent<NpcGenerationRequest>)=>{try{self.postMessage({ok:true,batch:generateNpcs(event.data,npcGenerationContext)});}catch(error){self.postMessage({ok:false,diagnostics:error instanceof NpcGenerationError?error.diagnostics:[{level:'error',code:'worker',message:error instanceof Error?error.message:'알 수 없는 생성 오류'}]});}};
