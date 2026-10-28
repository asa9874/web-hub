import {readFile,writeFile} from 'node:fs/promises';
// Reuse the contract's exact bundle; full AI remains enabled for this short measurement.
const contract=JSON.parse(await readFile('test-results/academy-groups/report.json','utf8'));if(!contract.passed)throw Error('Run test:academy-groups first');
const {createWorldSimulation}=await import('../test-results/academy-groups/engine.mjs');
const world=createWorldSimulation({seed:'group-full-ai-100',count:100}),start=world.runtime.world.clock.getSnapshot(),begin=performance.now();world.advance(60);const elapsedMs=performance.now()-begin,groups=world.runtime.ai.getGroups();
if(world.runtime.world.clock.getSnapshot()!==start+60||groups.diagnose().length)throw Error('시간·조직 정합성 실패');
const stats=world.getStatistics(),report={seed:world.seed,count:stats.npcs,minutes:60,fullAi:true,elapsedMs:Math.round(elapsedMs),targetMs:300,warningMs:1000,warning:elapsedMs>1000,environment:{node:process.version,platform:process.platform},activeMemberships:groups.getGroups().reduce((n,g)=>n+g.members.filter(m=>m.leftAt===undefined).length,0),groups:groups.getGroups().length,ai:stats.ai,events:stats.events,memory:stats.memory,notRun:['7-day','30-day','360-day']};
await writeFile('test-results/academy-groups/performance.json',JSON.stringify(report,null,2));console.log(JSON.stringify({count:report.count,minutes:60,fullAi:true,elapsedMs:report.elapsedMs,warning:report.warning,activeMemberships:report.activeMemberships}));world.dispose();
