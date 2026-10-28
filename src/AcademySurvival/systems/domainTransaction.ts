// Synchronous cross-domain commit: observers see committed data, never intermediate patches.
let queue:(()=>void)[]|null=null;
export function deferDomainNotification(fn:()=>void){if(queue)queue.push(fn);else fn();}
export function runDomainTransaction<T>(work:()=>T,rollback:()=>void):{value:T;observerErrors:string[]}{if(queue)throw new Error('도메인 트랜잭션 재진입 금지');queue=[];let value:T;try{value=work();}catch(error){queue=[];try{rollback();}finally{queue=null;}throw error;}const pending=queue;queue=null;const observerErrors:string[]=[];for(const fn of pending)try{fn();}catch(error){observerErrors.push(String(error));}return {value,observerErrors};}
