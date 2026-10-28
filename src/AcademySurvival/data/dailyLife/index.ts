import type {ResidenceRoom} from '../../types/dailyLife';
import type {LocationDefinition,LocationConnection,AccessRule} from '../../types/location';
export const DAILY_LIFE_RULES={version:'daily-life-v1' as const,retentionDays:14,maxLogs:600,maxProcessed:4000,visitorStart:'08:00',visitorEnd:'22:00',preferenceGain:1,preferenceLimit:35};
export const LIFE_ACTIVITY_NAMES:Record<string,string>={clean_room:'정리·청소',laundry:'세탁',personal_hygiene:'씻고 준비하기',walk_garden:'정원 산책'};
export const residenceRooms:ResidenceRoom[]=[];
const nodes:LocationDefinition[]=[],edges:LocationConnection[]=[];
const location=(id:string,name:string,parentId:string,type:LocationDefinition['type'],tags:string[],accessRules:AccessRule[]=[],capacity?:number):LocationDefinition=>({id,name,parentId,type,description:name+' · 아카데미의 실제 생활 공간. 입주 배정과 현재 인원은 별도로 조회한다.',organizationId:'academy-main',tags:[type,'daily-life'],activityTags:tags,accessRules,dangerLevel:0,...capacity!==undefined?{capacity}:{}});
const edge=(a:string,b:string):LocationConnection=>({id:'life-path/'+a+'/'+b,fromLocationId:a,toLocationId:b,distanceMeters:35,baseTravelMinutes:1,terrainType:'normal',travelKind:'road',allowedModes:['walk','run'],bidirectional:true,accessRules:[]});
export const roomPermission=(id:string)=>'residence/'+id;
export const visitorPermission=(id:string)=>'residence-visit/'+id;
export const residenceAccess=(id:string):AccessRule=>({type:'any',description:'입주자·생활관 직원 또는 08~22시 방문 허가자',rules:[{type:'permission',permissionId:roomPermission(id),description:'해당 방 입주 권한'},{type:'permission',permissionId:'residence-staff',description:'생활관 직원 권한'},{type:'all',description:'방문 허가와 방문 시간 모두 필요',rules:[{type:'permission',permissionId:visitorPermission(id),description:'해당 방 방문 허가'},{type:'time',start:'08:00',end:'22:00',description:'08:00 이상 22:00 미만 방문 가능'}]}]});
nodes.push(location('academy-life-hall','학생 공동생활관','academy-dorm','building',['meet','rest']));edges.push(edge('academy-dorm','academy-life-hall'));
for(let floor=1;floor<=4;floor++){
 const floorId='academy-life-floor-'+floor;nodes.push(location(floorId,floor+'층','academy-life-hall','floor',['meet']));edges.push(edge('academy-life-hall',floorId));
 for(let n=1;n<=14;n++){
  const number=floor*100+n,id='academy-life-room-'+number,activities=['sleep','rest','study','read','write','clean','meet','socialize','craft','game'];
  nodes.push(location(id,number+'호',floorId,'room',activities,[residenceAccess(id)],4));edges.push(edge(floorId,id));
  residenceRooms.push({id,buildingId:'academy-life-hall',floor,kind:'twin',residentKind:'student',beds:[id+'/bed-1',id+'/bed-2'],activities});
 }
}
for(const [kind,building,parent,count,beds] of [['professor','academy-professor-residence','academy-staff-residence',24,1],['staff','academy-staff-rooms','academy-staff-residence',24,2]] as const){
 nodes.push(location(building,kind==='professor'?'교수 숙소':'교직원 숙소',parent,'building',['meet','rest']));edges.push(edge(parent,building));
 for(let n=1;n<=count;n++){const id=building+'-'+n,activities=['sleep','rest','study','read','write','clean','meet','socialize'];nodes.push(location(id,n+'호',building,'room',activities,[residenceAccess(id)],beds+2));edges.push(edge(building,id));residenceRooms.push({id,buildingId:building,floor:1,kind:beds===1?'single':'twin',residentKind:kind,beds:Array.from({length:beds},(_,i)=>id+'/bed-'+(i+1)),activities});}
}
for(const [id,name,parent,type,tags] of [
 ['academy-life-lounge','공용 휴게실','academy-life-floor-1','room',['rest','meet','socialize','game','craft']],
 ['academy-life-study','공동 학습실','academy-life-floor-1','room',['study','read','write','meet','socialize']],
 ['academy-life-laundry','세탁실','academy-life-floor-1','room',['laundry']],
 ['academy-life-bath','공동 욕실','academy-life-floor-1','room',['hygiene']],
 ['academy-life-dining','기숙사 식당','academy-life-hall','room',['eat','meet','socialize']],
 ['academy-life-garden','기숙사 정원','academy-dorm','outdoor',['walk','garden','rest','meet','socialize']],
 ['capital-commuter-home','수도 통학생 주거지','imperial-capital','building',['sleep','rest','study','read','write','clean']],
] as const){nodes.push(location(id,name,parent,type,[...tags]));edges.push(edge(id==='capital-commuter-home'?'capital-market':parent,id));}
export const dailyLifeLocations=nodes;
export const dailyLifeConnections=edges;
export const residenceRoomRegistry=new Map(residenceRooms.map(r=>[r.id,r]));
