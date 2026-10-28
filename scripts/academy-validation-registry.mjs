import {readdir,readFile,access} from 'node:fs/promises';
import {execFileSync} from 'node:child_process';
import {resolve,posix} from 'node:path';
import {root} from './academy-check.mjs';
export const profiles=['quick','standard','extended','full'];
const normalized=p=>p.replaceAll('\\','/');
export function systemFor(path){
 const p=normalized(path).toLowerCase();
 if(/gameaudio|academy-audio|lifepacing|lifeplanner|academy-pacing|visual-mode/.test(p))return 'play';
 if(/skilltree|skillrules|systems\/skills|types\/skill|data\/skills|academy-skills/.test(p))return 'character';
 if(/economy|economics/.test(p))return 'items';
 if(/giftcodex|gift-codex|academy-gifts/.test(p))return 'character';
 if(/admission|endingcollection|endinggallery|gamestart/.test(p))return 'play';
 if(/spatialmappresentation|campusmap|itemart|item-art|gamepolish|ui-assets/.test(p))return 'play';
 if(/storygraph|story-graph|heroinegraph/.test(p))return 'events';
 if(/personalscene|personal-scene|personalstories|heroineroute|heroine-route|serena-route/.test(p))return 'events';
 if(/academystor|academy-stor/.test(p))return 'events';
 if(/riftcrisis|riftchronology|rift-crisis|rift-chronology/.test(p))return 'events';
 if(/lifeprogress|life-progress/.test(p))return 'motivation';
 if(/academyevent|official-event|officialevents/.test(p))return 'academics';
 if(/systems\/registry\.ts|data\/config\.ts/.test(p))return 'character';
 if(/playerresponsedialog|eventscene|presentation|gamenavigation|academygamedesign|gameinterface/.test(p))return 'play';
 if(/dialogue|koreantext/.test(p))return 'conversations';
 if(/fixedstudents|fixed-students|characterstories|characters\/(students|stories|storycontent)/.test(p))return 'character';
 if(/systems\/items|types\/item|data\/items|inventory|test-academy-items/.test(p))return 'items';
 if(/combat|systems\/checks|data\/checks|types\/check/.test(p))return 'combat';
 if(/academygroups|academy-groups|test-academy-groups/.test(p))return 'academy-groups';
 if(/dailylife|daily-life|dormitory/.test(p))return 'daily-life';
 if(/culture/.test(p))return 'culture';
 if(/world.?lore|worldidentity/.test(p))return 'world-lore';
 if(/conversation/.test(p))return 'conversations';
 if(/academics|academicpanel|data\/academic|types\/academic/.test(p))return 'academics';
 if(/npcactions|npcactionpanel|test-academy-npc-actions|play-layout|playsession|playerview|playerlife|playercontrols|types\/player|gameplay|liveworldproviders|[/-]player?[.-]/.test(p))return 'play';
 if(/academysurvival\.tsx|detaildialog|catalogentrydialog|test-academy-browser|popup/.test(p))return 'archive';
 for(const [pattern,group] of [[/worldsimulation|world-simulation|worldinvariant|validationscenario|validation/,'validation'],[/worldevent|world-event/,'events'],[/games?time|calendar|[/-]time[.-]/,'time'],[/aisandbox|character\.ts|eventqueue|domaintransaction/,'core'],[/npcschedule|schedule/,'schedules'],[/motivation|[/-]goals|[/-]needs/,'motivation'],[/npcmemory|memory|information/,'memory'],[/interaction/,'interactions'],[/actioneffect|action-effect/,'effects'],[/relationship/,'relationships'],[/npcsimulation|simulation|[/-]lod[.-]/,'lod'],[/npcai|[/-]ai[.-]/,'ai'],[/location/,'locations'],[/organization|[/-]social[.-]/,'organizations'],[/morality|disposition/,'morality'],[/npcgeneration|[/-]npc[.-]/,'generation'],[/knowledge|status|impact|character|traits|gifts/,'character'],[/features/,'features'],[/check|workflow/,'workflow']])if(pattern.test(p))return group;
 return null;
}
const dependents={items:['combat','effects','interactions','ai','memory','events','play','validation'],combat:['effects','interactions','ai','memory','events','play','validation'],'academy-groups':['schedules','interactions','memory','events','play','validation'],'daily-life':['locations','schedules','interactions','ai','events','play','validation'],culture:['world-lore','generation','interactions','memory','ai','events','validation'],'world-lore':['generation','locations','organizations','character','play','validation'],conversations:['interactions','memory','relationships','play','validation'],academics:['schedules','effects','ai','memory','events','play','validation'],time:['academics','schedules','motivation','locations','events','ai','memory','validation'],locations:['schedules','interactions','events','ai','validation'],schedules:['academics','motivation','interactions','effects','ai','validation'],motivation:['ai','effects','interactions','validation'],interactions:['relationships','memory','effects','events','ai','validation'],relationships:['interactions','ai','memory'],memory:['interactions','ai','events','validation'],effects:['memory','events','ai','validation'],events:['ai','memory','validation'],character:['academics','generation','schedules','ai','validation'],organizations:['locations','generation','ai'],morality:['generation','ai','memory'],lod:['ai','validation'],core:['time','locations','schedules','motivation','interactions','relationships','effects','memory','events','ai','lod','validation']};
export async function getRegistry(cwd=root){
 const files=(await readdir(resolve(cwd,'scripts'))).filter(f=>/^test-academy(?:-.*)?\.mjs$/.test(f)).sort();
 return [...files.map(f=>({id:f.replace(/^test-academy-?/,'').replace('.mjs','')||'academy',script:'scripts/'+f,systems:[systemFor(f)??'core'],dependencies:[],level:f.includes('-browser')?'full':/knowledge|features|morality|organizations|social|status\.mjs|check\.mjs|validation\.mjs/.test(f)?'quick':'standard',requiresBrowser:f.includes('-browser'),expectedCostClass:f.includes('-browser')?'high':f.includes('schedules')||f.includes('motivations')?'high':'medium',env:f==='test-academy-ai.mjs'?{AI_SKIP_BATCH:'1'}:{}})),
 ...['types','build'].map(kind=>({id:kind,script:'scripts/academy-static-check.mjs',args:['--kind',kind],systems:['core'],dependencies:[],level:kind==='types'?'quick':'standard',requiresBrowser:false,expectedCostClass:'medium',staticAlways:true,env:{}}))];
}
export function gitChanged({base,staged=false}={},cwd=root){
 const git=args=>execFileSync('git',args,{cwd,encoding:'utf8',maxBuffer:8*1024*1024}).split('\0').filter(Boolean).map(normalized);
 // A missing/invalid ref is an analysis failure, never an invented comparison base.
 if(base)execFileSync('git',['rev-parse','--verify',base+'^{commit}'],{cwd,stdio:'pipe'});
 return [...new Set([...git(['diff','--name-only','-z',...(staged?['--cached']:base?[base]:['HEAD'])]),...staged?[]:git(['ls-files','--others','--exclude-standard','-z'])])].sort();
}
async function reverseImports(cwd){
 const ts=await import('typescript'),files=[];
 const walk=async dir=>{for(const e of await readdir(resolve(cwd,dir),{withFileTypes:true})){const p=dir+'/'+e.name;if(e.isDirectory())await walk(p);else if(/\.(tsx?|css)$/.test(p))files.push(p);}};
 await walk('src/AcademySurvival');const known=new Set(files),reverse=new Map();
 for(const path of files.filter(p=>/\.tsx?$/.test(p))){const source=ts.createSourceFile(path,await readFile(resolve(cwd,path),'utf8'),ts.ScriptTarget.Latest,true);if(source.parseDiagnostics.length)throw Error('구문 분석 불가: '+path);
  // Runtime reverse edges do not propagate through erased type-only cycles.
  // Direct schema edits escalate conservatively; tsc still checks all type consumers.
  const imports=[];const visit=node=>{if((ts.isImportDeclaration(node)||ts.isExportDeclaration(node))&&!node.isTypeOnly&&!node.importClause?.isTypeOnly&&node.moduleSpecifier&&ts.isStringLiteral(node.moduleSpecifier))imports.push(node.moduleSpecifier.text);if(ts.isCallExpression(node)&&node.expression.kind===ts.SyntaxKind.ImportKeyword&&node.arguments[0]&&ts.isStringLiteral(node.arguments[0]))imports.push(node.arguments[0].text);ts.forEachChild(node,visit);};visit(source);
  for(const spec of imports.filter(i=>i.startsWith('.'))){const raw=posix.normalize(posix.join(posix.dirname(path),spec)),target=[raw,raw+'.ts',raw+'.tsx',raw+'/index.ts',raw+'/index.tsx'].find(p=>known.has(p));if(target){const set=reverse.get(target)??new Set();set.add(path);reverse.set(target,set);}}
 }return reverse;
}
export async function selectValidation({profile='quick',changed,analysisError,scenarioIds=[],registry,cwd=root}={}){
 if(!profiles.includes(profile))throw Error('Invalid profile');registry??=await getRegistry(cwd);
 let level=profiles.indexOf(profile),warnings=[],reasons=[],groups=new Set(),directUI=false,uncertain=!!analysisError;
 if(analysisError)warnings.push('영향 분석 실패: '+analysisError);
 if(changed){
  let reverse;try{reverse=await reverseImports(cwd);}catch(e){uncertain=true;warnings.push('정적 의존성 분석 실패: '+e.message);}
  const expanded=new Set(changed),queue=[...changed];while(queue.length){for(const consumer of reverse?.get(queue.shift())??[])if(!expanded.has(consumer)){expanded.add(consumer);queue.push(consumer);}}
  for(const path of changed){const group=systemFor(path);directUI||=/src\/AcademySurvival\/components\/|\.css$|AcademySurvival\.tsx$/.test(path);if(group){groups.add(group);reasons.push({path,group,reason:'직접 변경'});}else if(!/^(docs\/|.*\.md$)/.test(path)){uncertain=true;warnings.push('미등록 변경: '+path);}}
  // A composition root imports almost every engine. Reaching it does not mean a leaf
  // change altered every contract; direct edits to these roots still escalate below.
  for(const path of expanded)if(!/components\/|systems\/aiSandbox\.ts|systems\/worldSimulation\.ts/.test(path)){const group=systemFor(path);if(group)groups.add(group);}
  // Explicit message/data dependencies complement static imports; one hop avoids an all-to-all closure.
  for(const group of [...groups])for(const next of dependents[group]??[])groups.add(next);
  const critical=changed.some(p=>/systems\/(gameTime|calendar|eventQueue|aiSandbox|worldSimulation|actionEffects|domainTransaction|seededRandom)|data\/calendars|types\/|rng|migration/i.test(p));
  if(critical){level=Math.max(level,2);groups.add('core');reasons.push({reason:'중앙 시계·저장·효과·공통 계약: Extended 승격'});}
  else if(groups.size>3)level=Math.max(level,1);
  if(directUI)reasons.push({reason:'직접 UI 변경: 관련 브라우저 검사 포함(실행 URL 필요)'});
 }
 if(uncertain){level=Math.max(level,2);reasons.push({reason:'불확실한 영향 분석: 보수적 전체 headless 선택'});}
 const effectiveProfile=profiles[level];
 const selected=registry.filter(t=>{
  if(scenarioIds.length&&!changed)return false;
  if(t.requiresBrowser)return level===3||!!changed&&directUI&&(uncertain||t.systems.some(g=>groups.has(g))||groups.size===0);
  return profiles.indexOf(t.level)<=level&&(!changed||uncertain||t.staticAlways||groups.has('core')||t.systems.some(g=>groups.has(g)));
 }).map(t=>({...t,reason:uncertain?'영향 분석 불확실 · 안전 기본 검증':changed?`변경·역의존·명시적 연동: ${t.staticAlways?'공통 정적 검사':t.systems.join(', ')}`:'프로파일 기본 검사'}));
 const scenarios=scenarioIds.length?scenarioIds:level>=2?['world-clock-basic','npc-movement','npc-needs','npc-ai','npc-interaction','causal-events','step-vs-jump','save-load','academy-day']:level>=1?['world-clock-basic','npc-movement','npc-needs','save-load','step-vs-jump']:['world-clock-basic'];
 if(level===3&&!scenarioIds.length)scenarios.push('large-integration','player-autolife','academy-registration','academy-exam','social-commitment','culture-activity');
 return {requestedProfile:profile,profile:effectiveProfile,changed:changed??[],groups:[...groups].sort(),reasons,warnings,tests:selected,scenarios:[...new Set(scenarios)],uncertain};
}
export async function assertRegistry(registry,cwd=root){const ids=new Set();for(const t of registry){if(ids.has(t.id))throw Error('Duplicate test '+t.id);ids.add(t.id);await access(resolve(cwd,t.script));}return registry.length;}
