import {readFile,writeFile,mkdir,readdir} from 'node:fs/promises';
import {resolve,dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
import {execFileSync} from 'node:child_process';
import {root,runTask} from './academy-check.mjs';
import {profiles,getRegistry,gitChanged,selectValidation,assertRegistry} from './academy-validation-registry.mjs';
import {bundleScenarios} from './academy-scenario.mjs';
export function parseOptions(args){
 const values=new Set(['--profile','--scenario','--seed','--base','--files','--json','--directory','--count','--minutes','--browser-url','--test','--timeout-ms']);
 const bools=new Set(['--changed','--staged','--run','--plan','--reuse','--allow-long']),o={};
 for(let i=0;i<args.length;i++){const k=args[i];if(Object.hasOwn(o,k)||!values.has(k)&&!bools.has(k))throw Error('Unknown/duplicate option: '+k);if(bools.has(k))o[k]=true;else{const v=args[++i];if(v===undefined||v.startsWith('--'))throw Error('Missing '+k);o[k]=v;}}
 if(!profiles.includes(o['--profile']??'quick'))throw Error('Invalid profile');if(o['--run']&&o['--plan'])throw Error('run/plan conflict');
 for(const [key,min,max] of [['--count',1,100],['--minutes',1,360*1440],['--timeout-ms',100,3600000]])if(o[key]!==undefined&&(!/^\d+$/.test(o[key])||Number(o[key])<min||Number(o[key])>max))throw Error('Invalid '+key);
 if(o['--staged']&&o['--base'])throw Error('staged/base conflict');if(o['--files']&&(o['--changed']||o['--staged']||o['--base']))throw Error('explicit files/git conflict');
 return o;
}
export async function validationFingerprint(plan,options,cwd=root){
 const hash=createHash('sha256');hash.update(JSON.stringify({node:process.version,platform:process.platform,arch:process.arch,plan,options,browserPath:process.env.PLAYWRIGHT_BROWSERS_PATH??'',nodeOptions:process.env.NODE_OPTIONS??'',ci:process.env.CI??'',timezone:Intl.DateTimeFormat().resolvedOptions().timeZone}));
 // Conservative content hash, including dirty/untracked source. Never reuse solely from HEAD.
 const walk=async dir=>{const files=[];for(const e of await readdir(resolve(cwd,dir),{withFileTypes:true})){const p=dir+'/'+e.name;if(e.isDirectory())files.push(...await walk(p));else files.push(p);}return files;};
 const sources=await walk('src/AcademySurvival'),scripts=(await readdir(resolve(cwd,'scripts'))).filter(f=>/academy.*\.mjs$/.test(f)).map(f=>'scripts/'+f);
 for(const p of [...sources,...scripts,'package.json','package-lock.json','tsconfig.app.json','tsconfig.node.json','vite.config.ts'].sort()){hash.update(p);try{hash.update(await readFile(resolve(cwd,p)));}catch(e){if(e.code!=='ENOENT')throw e;hash.update('absent');}}
 return hash.digest('hex');
}
const quote=s=>"'"+String(s).replaceAll("'","''")+"'";
export function shortReport(report){const s=report.summary,first=report.results.find(r=>r.status==='failed'||r.status==='runner_error'),issue=first?.scenario?.issues.find(i=>['critical','error'].includes(i.severity));return [`ACADEMY VALIDATION · ${report.profile} · ${report.status}`,`Passed ${s.passed} / Failed ${s.failed} / Skipped ${s.skipped} / Reused ${s.reused} · ${report.elapsedMs}ms · warnings ${report.warnings.length}`,first?`First: ${issue?.code??first.id} · ${issue?.message??first.error??'see log'}\nReproduce: ${first.reproduce}`:'',`Report: ${report.reportPath}`].filter(Boolean).join('\n');}
export async function main(args){
 const o=parseOptions(args),start=performance.now(),registry=await getRegistry();await assertRegistry(registry);let changed,analysisError;
 if(o['--files'])changed=o['--files'].split(',').filter(Boolean).map(p=>p.replaceAll('\\','/'));
 else if(o['--changed']||o['--base']||o['--staged'])try{changed=gitChanged({base:o['--base'],staged:o['--staged']});}catch(e){analysisError=e.message.split('\n')[0];}
 const plan=await selectValidation({profile:o['--profile']??'quick',changed,analysisError,scenarioIds:o['--scenario']?.split(',')??[],registry});
 if(o['--test']){const wanted=o['--test'].split(',');if(wanted.some(id=>!registry.some(t=>t.id===id)))throw Error('Unknown test ID');plan.tests=registry.filter(t=>wanted.includes(t.id)).map(t=>({...t,reason:'명시적 실패 검사 재실행'}));plan.scenarios=[];}
 const baseline=resolve(root,'test-results/academy-validation'),directory=o['--directory']?resolve(o['--directory']):resolve(baseline,new Date().toISOString().replace(/[:.]/g,'-')+'-'+process.pid);
 const reportPath=o['--json']?resolve(o['--json']):resolve(directory,'report.json');
 const report={version:'academy-validation-v1',profile:plan.profile,requestedProfile:plan.requestedProfile,status:'planned',startedAt:new Date().toISOString(),node:process.version,plan,warnings:plan.warnings,results:[],elapsedMs:0,summary:{passed:0,failed:0,skipped:0,reused:0},reportPath};
 if(!o['--run']){console.log(`PLAN ${plan.profile}: ${plan.tests.map(t=>t.id).join(', ')}; scenarios: ${plan.scenarios.join(', ')}`);console.log(JSON.stringify({reasons:plan.reasons,warnings:plan.warnings}));return report;}
 await mkdir(directory,{recursive:true});await mkdir(dirname(reportPath),{recursive:true});
 const semantics=Object.fromEntries(Object.entries(o).filter(([k])=>!['--reuse','--json','--directory','--run','--plan'].includes(k)));
 report.fingerprint=await validationFingerprint(plan,semantics);
 const latest=resolve(baseline,'latest.json');
 if(o['--reuse']){try{const prior=JSON.parse(await readFile(latest,'utf8'));if(prior.status==='passed'&&prior.fingerprint===report.fingerprint){report.status='reused';report.reusedFrom=prior.reportPath;report.results=prior.results.map(r=>({...r,status:'reused'}));report.summary.reused=prior.summary.passed;report.elapsedMs=Math.round(performance.now()-start);await writeFile(reportPath,JSON.stringify(report,null,2));console.log(shortReport(report));return report;}}catch{/* No valid matching receipt: perform actual checks. */}}
 try{report.head=execFileSync('git',['rev-parse','HEAD'],{cwd:root,encoding:'utf8',stdio:['ignore','pipe','pipe']}).trim();}catch{report.head=null;}
 const bundle=resolve(directory,'scenario-engine.mjs');if(plan.scenarios.length)await bundleScenarios(bundle);
 const save=async()=>{report.elapsedMs=Math.round(performance.now()-start);await writeFile(reportPath,JSON.stringify(report,null,2));};
 const tasks=[...plan.tests.map(t=>({...t,timeoutMs:Number(o['--timeout-ms']??180000),reproduce:`npm run validate:changed -- --test ${t.id} --run${t.requiresBrowser&&o['--browser-url']?' --browser-url '+quote(o['--browser-url']):''}`})),...plan.scenarios.map(id=>({id:'scenario/'+id,scenarioId:id,script:'scripts/academy-scenario.mjs',env:{},timeoutMs:Number(o['--timeout-ms']??120000)}))];
 for(const [index,task] of tasks.entries()){
  const count=Number(o['--count']??(task.scenarioId==='large-integration'||['extended','full'].includes(plan.profile)?100:5)),minutes=Number(o['--minutes']??(task.scenarioId==='large-integration'?360*1440:60)),seed=o['--seed']??'validation-v1';
  const result={id:task.id,status:'not_run',elapsedMs:0};
  if(task.requiresBrowser&&!o['--browser-url']){result.status='deferred';result.error='Browser URL required';}
  else if(task.scenarioId&&(minutes>1440||task.scenarioId==='large-integration')&&(!o['--allow-long']||!o['--minutes']||!o['--count'])){result.status='deferred';result.error='장기 실행은 --allow-long --count --minutes 명시 필요';}
  else{
   const output=resolve(directory,'scenario-'+index+'.json');
   task.args=task.scenarioId?['--scenario',task.scenarioId,'--seed',seed,'--count',String(count),'--minutes',String(minutes),'--output',output,'--bundle',bundle]:task.args??[];
   if(task.requiresBrowser)task.env.ACADEMY_TEST_URL=o['--browser-url'];
   result.reproduce=task.scenarioId?`npm run sim:test -- --scenario ${task.scenarioId} --seed ${quote(seed)} --count ${count} --minutes ${minutes}${minutes>1440||task.scenarioId==='large-integration'?' --allow-long':''}`:task.reproduce;
   const execution=await runTask(task,resolve(directory,task.id.replaceAll('/','-')));
   result.elapsedMs=execution.elapsedMs;result.outputBytes=execution.outputBytes;result.log=execution.log;
   if(task.scenarioId)try{result.scenario=JSON.parse(await readFile(output,'utf8'));}catch{/* Exit/error below distinguishes worker failure. */}
   result.status=result.scenario?.status??(execution.exitCode===0&&!execution.error?'passed':execution.error||execution.exitCode===2?'runner_error':'failed');
   if(execution.error||execution.exitCode!==0&&result.status==='passed'){result.status='runner_error';result.error=execution.error??`Exit ${execution.exitCode}`;}
   if(['runner_error','failed'].includes(result.status))result.error=execution.error??execution.tail.slice(-1200);
  }
  report.results.push(result);await save();
  if(['failed','runner_error'].includes(result.status)){for(const later of tasks.slice(index+1))report.results.push({id:later.id,status:'not_run',error:'Stopped after first failure'});break;}
 }
 report.summary={passed:report.results.filter(r=>r.status==='passed').length,failed:report.results.filter(r=>['failed','runner_error'].includes(r.status)).length,skipped:report.results.filter(r=>['deferred','not_run','not_available'].includes(r.status)).length,reused:0};
 report.status=report.summary.failed?'failed':report.summary.skipped||!report.summary.passed?'incomplete':'passed';
 report.outputBytes=report.results.reduce((n,r)=>n+(r.outputBytes??0),0);report.summaryBytes=Buffer.byteLength(shortReport(report));
 await save();await mkdir(baseline,{recursive:true});await writeFile(latest,JSON.stringify(report,null,2));console.log(shortReport(report));return report;
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url))main(process.argv.slice(2)).then(r=>{process.exitCode=['passed','reused','planned'].includes(r.status)?0:r.status==='failed'?1:2;}).catch(e=>{console.error('Validation runner error: '+e.message);process.exitCode=2;});
