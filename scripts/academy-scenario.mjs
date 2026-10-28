import {build} from 'esbuild';
import {mkdir,writeFile} from 'node:fs/promises';
import {resolve,dirname} from 'node:path';
import {pathToFileURL,fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
import {root} from './academy-check.mjs';
export async function bundleScenarios(path){await mkdir(dirname(path),{recursive:true});await build({stdin:{contents:"export * from './src/AcademySurvival/systems/validationScenarios';export * from './src/AcademySurvival/systems/worldInvariants';",resolveDir:root},bundle:true,platform:'node',format:'esm',outfile:path});}
export async function scenarioTask({scenario,seed='validation-v1',count=5,minutes=60,output,bundle}){
 const started=performance.now();if(!bundle){bundle=resolve(root,'test-results/academy-validation/scenario-'+process.pid+'.mjs');await bundleScenarios(bundle);}
 const engine=await import(pathToFileURL(bundle).href),{result,snapshot}=engine.runValidationScenario(scenario,{seed,count,minutes});
 result.elapsedMs=Math.round(performance.now()-started);
 if(snapshot){result.fingerprint=createHash('sha256').update(JSON.stringify(engine.canonicalWorldState(snapshot))).digest('hex');result.metrics.saveBytes=Buffer.byteLength(JSON.stringify(snapshot));}
 result.metrics={...result.metrics,maxRssBytes:process.resourceUsage().maxRSS*1024};
 if(output){await mkdir(dirname(output),{recursive:true});await writeFile(output,JSON.stringify(result,null,2));}
 return result;
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 const args=process.argv.slice(2),o={};for(let i=0;i<args.length;i+=2){const k=args[i];if(!['--scenario','--seed','--count','--minutes','--output','--bundle'].includes(k)||!args[i+1]||Object.hasOwn(o,k))throw Error('Invalid scenario option '+k);o[k]=args[i+1];}
 scenarioTask({scenario:o['--scenario']??'world-clock-basic',seed:o['--seed'],count:Number(o['--count']??5),minutes:Number(o['--minutes']??60),output:o['--output'],bundle:o['--bundle']}).then(r=>{console.log(`${r.id}: ${r.status}; ${r.elapsedMs}ms; issues ${r.issues.length}`);process.exitCode=r.status==='failed'?1:r.status==='not_available'?2:0;}).catch(e=>{console.error('Scenario runner error: '+e.stack);process.exitCode=2;});
}
