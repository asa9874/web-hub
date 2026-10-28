import assert from 'node:assert/strict';
import {build} from 'esbuild';
import {mkdir} from 'node:fs/promises';
await mkdir('.build-projects',{recursive:true});
await build({stdin:{contents:["export * from './src/AcademySurvival/systems/locationRegistry';","export * from './src/AcademySurvival/systems/locationRouting';","export * from './src/AcademySurvival/systems/locationAccess';","export * from './src/AcademySurvival/systems/locationWorld';","export * from './src/AcademySurvival/systems/locationInitialState';","export * from './src/AcademySurvival/systems/gameTime';","export * from './src/AcademySurvival/systems/calendar';","export * from './src/AcademySurvival/systems/npcGeneration';","export * from './src/AcademySurvival/systems/npcGenerationContext';","export * from './src/AcademySurvival/systems/characterValidation';","export * from './src/AcademySurvival/systems/characterRegistry';"].join('\n'),resolveDir:process.cwd()},bundle:true,format:'esm',platform:'node',outfile:'.build-projects/academy-location-model.mjs'});
const m=await import('../.build-projects/academy-location-model.mjs');
const at=(h,min=0,day=1)=>m.toAbsoluteMinute({year:427,month:3,day,hour:h,minute:min});
const original=m.createInitialLocationCharacters(),player=original[0];
assert.deepEqual(m.validateCharacters(original,m.fixedCharacters),[]);
const c=structuredClone(player);
assert.equal(m.getLocationFullName('academy-class-3-1'),'세계 > 에르디아 > 아스텔 제국 > 제국 수도권 > 아르벤 학술도시 > 왕립 아카데미 > 교사동 > 3학년 1반 교실');
assert.equal(m.getLocationDepth('academy-room-305'),9);
assert.equal(m.getLocationChildren('world').length,3);
assert(m.getLocationDescendants('academy').some(l=>l.id==='academy-room-305'));
assert.throws(()=>m.getLocation('missing'));
const node=(id,parentId=null,accessRules=[])=>({id,name:id,parentId,type:'room',description:'test '+id,tags:[],activityTags:[],dangerLevel:0,accessRules});
const edge=(id,from,to,mins,bidirectional=true)=>({id,fromLocationId:from,toLocationId:to,distanceMeters:mins*70,baseTravelMinutes:mins,terrainType:'normal',allowedModes:['walk','run'],bidirectional,accessRules:[]});
assert.throws(()=>m.createLocationCatalog([node('a','missing')],[]));assert.throws(()=>m.createLocationCatalog([node('a','a')],[]));assert.throws(()=>m.createLocationCatalog([node('a','b'),node('b','a')],[]));assert.throws(()=>m.createLocationCatalog([node('a'),node('a')],[]));
const deep=Array.from({length:1200},(_,i)=>node('deep-'+i,i?'deep-'+(i-1):null));const deepCatalog=m.createLocationCatalog(deep,[]);assert.equal(deepCatalog.getLocationDepth('deep-1199'),1199);assert.equal(deepCatalog.getLocationDescendants('deep-0').length,1199);assert.equal(deepCatalog.canDelete('deep-0'),false);
for(const [time,ok] of [[at(6),true],[at(7,55),false],[at(7,58),false],[at(8,1),false],[at(6,0,2),true]])assert.equal(m.findRoute(c,'academy-plaza','academy-morning',time).ok,ok);
let r=m.findRoute(c,'academy-plaza','academy-morning',at(7,30));assert.equal(r.travelMinutes,5);assert.equal(r.arrivalTime,at(7,35));assert.equal(r.distanceMeters,350);
assert.equal(m.canEnterLocation(c,'academy-morning',at(5)).ok,true);assert.equal(m.canEnterLocation(c,'academy-morning',at(8)).ok,false);
assert.equal(m.canEnterLocation(c,'academy-library',at(9)).ok,true);assert.equal(m.canEnterLocation(c,'academy-library',at(22)).ok,false);
assert.equal(m.findRoute(c,'academy-class-3-1','academy-library',at(9)).travelMinutes,8);
assert.equal(m.findRoute(c,'academy-plaza','demon-gate',at(9)).ok,false);
assert.equal(m.findRoute(c,'academy','academy-plaza',at(9)).ok,false); // containment is not an edge
assert.equal(m.findRoute(c,'academy-plaza','academy-plaza',at(9)).travelMinutes,0);
assert.equal(m.canEnterLocation(c,'academy-professor-office',at(9)).ok,false);
assert.equal(m.canEnterLocation({...c,accessPermissions:['professor-office']},'academy-professor-office',at(9)).ok,true);
assert.equal(m.canEnterLocation({...c,positions:[{definitionId:'position-professor',organizationId:'academy-main'}]},'academy-professor-office',at(9)).ok,true);
assert.equal(m.canEnterLocation(c,'academy-council-office',at(9)).ok,false);
assert.equal(m.canEnterLocation({...c,affiliations:[{organizationId:'academy-council',visibility:'public'}]},'academy-council-office',at(9)).ok,true);
assert.equal(m.canEnterLocation({...c,gender:'여성'},'academy-dorm-women',at(9)).ok,false);
assert.equal(m.canEnterLocation({...c,gender:'남성',accessPermissions:['dorm-women']},'academy-dorm-women',at(9)).ok,true);
const night={type:'time',start:'22:00',end:'05:00',description:'night'};
for(const [h,min,ok] of [[22,0,true],[23,59,true],[0,0,true],[4,59,true],[5,0,false],[21,59,false]])assert.equal(m.evaluateAccessRule(c,night,at(h,min)),ok);
const permit={type:'permission',permissionId:'key',description:'key'};
const complex={type:'all',description:'all',rules:[{type:'any',description:'any',rules:[permit,{type:'condition',condition:{kind:'stat',key:'MAG',min:99},description:'magic'}]},{type:'not',description:'not',rule:{type:'permission',permissionId:'banned',description:'banned'}}]};
assert.equal(m.evaluateAccessRule(c,complex,at(9)),false);assert.equal(m.evaluateAccessRule({...c,accessPermissions:['key']},complex,at(9)),true);assert.equal(m.evaluateAccessRule({...c,accessPermissions:['key','banned']},complex,at(9)),false);
let catalog=m.createLocationCatalog([node('a'),node('b'),node('d')],[edge('ab','a','b',2,false),edge('bd','b','d',2),edge('ad','a','d',8)]);
assert.equal(m.findRoute(c,'a','d',at(9),'walk',catalog).travelMinutes,4);assert.equal(m.findRoute(c,'b','a',at(9),'walk',m.createLocationCatalog([node('a'),node('b')],[edge('ab','a','b',2,false)])).ok,false);
const longer={...edge('ad','a','d',1),distanceMeters:700};assert.equal(m.findRoute(c,'a','d',at(9),'walk',m.createLocationCatalog([node('a'),node('d')],[longer])).travelMinutes,10);
assert.equal(m.findRoute({...c,movementModes:['run']},'a','d',at(9),'run',catalog).travelMinutes,3);assert.equal(m.findRoute(c,'a','d',at(9),'run',catalog).ok,false);
const fatigue={id:'fatigue',definitionId:'status-exhaustion',stacks:1,sourceId:'test'};
assert.equal(m.findRoute({...c,statuses:[fatigue]},'academy-plaza','academy-morning',at(6)).travelMinutes,7);
const rough=m.createLocationCatalog([node('a'),node('b')],[{...edge('rough','a','b',10),terrainType:'rough'}]);assert.equal(m.findRoute(c,'a','b',at(9),'walk',rough).travelMinutes,15);
// Later arrival at the same intermediate node can catch an opening; earliest-only labels are wrong.
catalog=m.createLocationCatalog([node('a'),node('b'),node('c'),node('d',null,[{type:'time',start:'09:05',end:'10:00',description:'opens 09:05'}])],[edge('ab','a','b',1,false),edge('ac','a','c',3,false),edge('cb','c','b',2,false),edge('bd','b','d',1,false)]);
r=m.findRoute(c,'a','d',at(9),'walk',catalog);assert.equal(r.ok,true);assert.deepEqual(r.routeLocationIds,['a','c','b','d']);assert.equal(r.travelMinutes,6);
function world(time=at(7,30),characters=[c]){return m.createLocationWorld({clock:m.createGameClock(time),characters:structuredClone(characters),allowForcePlacement:true});}
let w=world();assert.equal(w.getLocationPopulation('academy').includingDescendants,1);assert(w.requestMovement(c.id,'academy-morning').ok);assert.equal(w.getLocationPopulation('academy-plaza').direct,0);assert.equal(w.getLocationPopulation('academy-morning').direct,0);assert.equal(w.getTravelers().length,1);w.advanceTime(4);assert.equal(w.getCharacterLocation(c.id).currentLocationId,'academy-plaza');w.advanceTime(1);assert.equal(w.getCharacterLocation(c.id).currentLocationId,'academy-morning');assert.equal(w.getLocationPopulation('academy-morning').direct,1);w.advanceTime(60);assert.equal(w.getCharacterLocation(c.id).currentLocationId,'academy-morning'); // no eviction
w=world(at(7,58));assert.equal(w.requestMovement(c.id,'academy-morning').ok,false);assert(w.getLogs().some(l=>l.type==='denied'));
w=world(at(9));w.forcePlace([c.id],'academy-class-3-1');assert(w.requestMovement(c.id,'academy-library').ok);w.advanceTime(3);w.cancelMovement(c.id);assert.equal(w.getCharacterLocation(c.id).currentLocationId,'academy-class-building');assert.equal(w.getCharacterLocation(c.id).movement,null);
w=world(at(9));w.forcePlace([c.id],'academy-corridor');w.updateCharacter(c.id,ch=>({...ch,accessPermissions:['professor-office']}));assert(w.requestMovement(c.id,'academy-professor-office').ok);w.updateCharacter(c.id,ch=>({...ch,accessPermissions:[]}));assert.equal(w.getCharacterLocation(c.id).movement,null);assert.equal(w.getCharacterLocation(c.id).currentLocationId,'academy-corridor');
w=world(at(9));w.requestMovement(c.id,'academy-arena');w.clock.setAbsoluteMinute(at(6));assert.equal(w.getCharacterLocation(c.id).movement,null);
assert.throws(()=>w.updateCharacter(c.id,ch=>({...ch,id:'changed'})));assert.throws(()=>w.registerCharacter(c));assert.throws(()=>w.registerCharacter({...c,id:'unplaced',location:undefined}));assert.throws(()=>w.forcePlace([c.id],'no-place'));assert.throws(()=>m.createLocationWorld({clock:m.createGameClock(),characters:[c]}).forcePlace([c.id],'demon-gate'));
const request={count:10,seed:'location-audit',academyStudent:true,academyYear:'random',specializationId:'random',growthType:'random'};
const batch=m.generateNpcs(request,m.npcGenerationContext);assert.equal(batch.results.length,10);assert(batch.results.every(r=>r.valid));assert.deepEqual(batch,m.generateNpcs(request,m.npcGenerationContext));
const npcs=batch.results.map(r=>r.character);w=world(at(9),npcs);w.forcePlace(npcs.slice(0,3).map(c=>c.id),'academy-library');w.forcePlace(npcs.slice(3,7).map(c=>c.id),'academy-arena');w.forcePlace(npcs.slice(7).map(c=>c.id),'academy-class-1-1');assert.equal(w.getLocationPopulation('academy-library').direct,3);assert.equal(w.getLocationPopulation('academy-arena').direct,4);assert.equal(w.getLocationPopulation('academy-class-1-1').direct,3);assert.equal(w.getLocationPopulation('academy').includingDescendants,10);
for(const [i,npc] of npcs.entries())assert(w.requestMovement(npc.id,i%2?'academy-dining':'academy-plaza').ok);assert.equal(w.getTravelers().length,10);const start=w.clock.getSnapshot();w.advanceTime(30);assert.equal(w.clock.getSnapshot()-start,30);assert.equal(w.getTravelers().length,0);assert.equal(w.getLocationPopulation('academy').includingDescendants,10);assert.equal(w.getLogs().filter(l=>l.type==='arrival').length,10);
const snapshot=w.snapshot(),sandbox=m.createLocationWorld({clock:m.createGameClock(snapshot.absoluteMinute),characters:snapshot.characters,allowForcePlacement:true});sandbox.forcePlace(npcs.map(c=>c.id),'demon-gate');sandbox.advanceTime(14400);assert.deepEqual(w.snapshot(),snapshot);snapshot.characters[0].stats.AGI=999;assert.notEqual(w.getCharacter(npcs[0].id).stats.AGI,999);
assert.equal(m.generateNpcs({...request,count:1,academyStudent:false},m.npcGenerationContext).results[0].character.location.currentLocationId,'capital-market');
// Arrival-time access recheck when a later leg loses permission, stop at the last safe waypoint.
w=world(at(9));w.updateCharacter(c.id,ch=>({...ch,accessPermissions:['professor-office']}));assert(w.requestMovement(c.id,'academy-professor-office').ok);w.advanceTime(1);w.updateCharacter(c.id,ch=>({...ch,accessPermissions:[]}));assert(w.getCharacterLocation(c.id).movement);w.advanceTime(30);assert.equal(w.getCharacterLocation(c.id).currentLocationId,'academy-corridor');assert.equal(w.getCharacterLocation(c.id).movement,null);assert(w.getLogs().some(l=>l.type==='cancel'&&l.message.includes('허가')));
// A time jump crosses the date once; intermediate arrivals retain their scheduled timestamps.
w=world(at(23,58));assert(w.requestMovement(c.id,'academy-arena').ok);w.advanceTime(30);assert.equal(w.clock.getSnapshot(),at(0,28,2));assert.equal(w.getLogs().find(l=>l.type==='arrival').at,at(0,4,2));
// Cancellation leaves the last reached point; snapshot values cannot mutate live actors.
const invalid=structuredClone(c);invalid.location.currentLocationId='missing';assert(m.characterLocationIssues(invalid).length);const detached=w.getCharacter(c.id);detached.location.currentLocationId='demon-gate';assert.equal(w.getCharacterLocation(c.id).currentLocationId,'academy-arena');
// Capacity is checked on real arrival for competing reservations. Forced placement is explicit bypass.
const tiny=m.createLocationCatalog([node('a'),{...node('b'),capacity:1}],[edge('ab','a','b',1)]),a={...structuredClone(c),id:'a1',location:{characterId:'a1',currentLocationId:'a',movement:null}},b={...structuredClone(c),id:'b1',location:{characterId:'b1',currentLocationId:'a',movement:null}};
const cap=m.createLocationWorld({clock:m.createGameClock(at(9)),characters:[a,b],catalog:tiny});assert(cap.requestMovement('a1','b').ok);assert(cap.requestMovement('b1','b').ok);cap.advanceTime(1);assert.equal(cap.getLocationPopulation('b').direct,1);assert.equal(cap.getCharacterLocation('b1').currentLocationId,'a');assert.equal(cap.getCharacterLocation('b1').movement,null);
const teleport=m.createLocationCatalog([node('a'),node('b')],[{...edge('portal','a','b',0),allowedModes:['teleport']}]);assert.equal(m.findRoute(c,'a','b',at(9),'teleport',teleport).ok,false);assert.equal(m.findRoute({...c,movementModes:['teleport']},'a','b',at(9),'teleport',teleport).travelMinutes,0);
assert.throws(()=>m.createLocationCatalog([node('a'),node('b')],[{...edge('bad','a','b',1),terrainType:'invalid'}]));assert.equal(m.findRoute(c,'a','b',at(9),'invalid',tiny).ok,false);
console.log(JSON.stringify({locations:m.locationCatalog.nodes.size,connections:m.locationCatalog.edges.size,npcs:npcs.length,checks:'hierarchy/access/routing/movement/clock/isolation/reproducibility passed'},null,2));

