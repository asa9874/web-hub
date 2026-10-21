import type {AccessRule,LocationDefinition,LocationConnection,LocationType} from '../../types/location';
const time=(start:string,end:string):AccessRule=>({type:'time',start,end,description:`${start} 이상 ${end} 미만 입장 가능`});
const permit=(id:string,description:string):AccessRule=>({type:'permission',permissionId:id,description});
const professor:AccessRule={type:'any',description:'본교 교수 신분 또는 연구실 출입 허가 필요',rules:[{type:'position',positionIds:['position-professor','position-department-head'],organizationId:'academy-main',description:'본교 교수·학부장 신분'},permit('professor-office','교수 연구실 출입 허가')]};
const council:AccessRule={type:'any',description:'학생회 소속 또는 집무실 출입 허가 필요',rules:[{type:'organization',organizationIds:['academy-council'],description:'학생회 소속'},permit('council-office','학생회 집무실 출입 허가')]};
const loc=(id:string,name:string,parentId:string|null,type:LocationType,description:string,organizationId?:string,accessRules:AccessRule[]=[],activityTags:string[]=[]):LocationDefinition=>({id,name,parentId,type,description,organizationId,accessRules,activityTags,tags:[type],dangerLevel:0});
export const locations:LocationDefinition[]=[
 loc('world','세계',null,'world','제국과 마계가 각자의 질서로 살아가는 세계. 공간의 포함 관계는 통행로의 존재를 뜻하지 않는다.'),
 {...loc('empire-land','제국','world','nation','대륙 중심에 자리한 제국. 황실의 법과 지방의 관습 사이로 수많은 삶이 이어진다.','empire'),calendarId:'imperial'},
 loc('imperial-capital','제국 수도','empire-land','city','황궁의 첨탑과 시장의 차양이 한 하늘 아래 겹쳐지는 수도.'),
 loc('capital-palace','황궁','imperial-capital','facility','의전과 경호가 겹겹이 둘러선 제국 정치의 중심.','imperial-palace',[permit('palace-entry','황궁 출입 허가 필요')]),
 loc('capital-market','중앙시장','imperial-capital','district','상인들의 호객과 생도들의 흥정이 뒤섞이는 생활의 거리.',undefined,[],['trade','socialize']),
 loc('academy','왕립 아카데미','imperial-capital','facility','제국의 후원을 받으면서도 학문의 자율성을 지키려는 교육 기관.','academy-main'),
 loc('academy-gate','정문','academy','outdoor','학기마다 새로운 이름이 통과하는 철문.','academy-main'),
 loc('academy-plaza','중앙광장','academy','outdoor','종소리를 듣고 각자의 수업으로 흩어지는 교정의 중심.','academy-main',[],['meet','rest']),
 loc('academy-class-building','교사동','academy','building','오래된 칠판과 새로운 논쟁이 공존하는 수업 건물.','academy-main'),
 loc('academy-corridor','교사동 복도','academy-class-building','facility','교실 문과 게시판이 길게 이어진 복도.','academy-main'),
 ...[1,2,3,4].map(year=>loc(`academy-class-${year}-1`,`${year}학년 1반 교실`,'academy-class-building','room',`${year}학년 생도들이 과제와 질문을 함께 쌓아 가는 교실.`,'academy-main',[],['study'])),
 loc('academy-professor-office','교수 연구실','academy-class-building','room','강의 노트 뒤로 미발표 논문과 상담 기록이 놓여 있다.','academy-main',[professor],['research','consult']),
 loc('academy-library','도서관','academy','building','종이 냄새와 낮은 발소리가 가득한 학문의 쉼터. 야간 폐관 뒤에는 신규 입장만 제한한다.','academy-main',[time('08:00','22:00')],['read','study']),
 loc('academy-dining','학생 식당','academy','building','식판 소리와 하루의 소문이 가장 먼저 모이는 곳.','academy-main',[],['eat','socialize']),
 loc('academy-arena','대련장','academy','outdoor','목검의 흠집마다 승패와 배움의 기억이 남아 있다.','academy-sword',[],['duel','train']),
 loc('academy-morning','아침단련장','academy','outdoor','새벽 이슬이 마르기 전 열리는 조용한 단련장. 08:00 이후에는 신규 입장을 받지 않는다.','academy-sword',[time('05:00','08:00')],['morning-training']),
 loc('academy-student-hall','학생회관','academy','building','동아리 공고와 자치 활동으로 붐비는 건물.','academy-main'),
 loc('academy-council-office','학생회 집무실','academy-student-hall','room','축제 예산과 생도들의 청원서가 같은 책상 위에서 다투는 방.','academy-council',[council],['administration']),
 loc('academy-dorm','기숙사','academy','facility','수업 밖의 생활과 비밀스러운 야식이 이어지는 거주 구역.','academy-main'),
 loc('academy-dorm-men','남학생 기숙사','academy-dorm','building','등록된 거주자와 허가받은 방문자를 위한 생활관.','academy-main',[permit('dorm-men','거주 자격 또는 방문 허가 필요')]),
 loc('academy-dorm-women','여학생 기숙사','academy-dorm','building','거주자의 사생활을 지키는 생활관. 성별만으로 출입을 판정하지 않는다.','academy-main',[permit('dorm-women','거주 자격 또는 방문 허가 필요')]),
 loc('academy-dorm-floor-3','남학생 기숙사 3층','academy-dorm-men','floor','저녁이면 복습하는 목소리와 웃음이 섞이는 층.','academy-main'),
 ...['305','306'].map(room=>({...loc(`academy-room-${room}`,`${room}호`,'academy-dorm-floor-3','room','책상과 침대 사이에 각자의 고향에서 가져온 물건이 놓여 있다.','academy-main'),capacity:4})),
 {...loc('academy-room-205','205호','academy-dorm-women','room','창가에 말려 둔 약초와 수업 노트가 작은 방을 채운다.','academy-main'),capacity:4},
 {...loc('demon-land','마계','world','realm','인간계와 다른 마력 환경 속에서 문명과 이해관계가 공존하는 이계.','demon-realm'),calendarId:'abyss'},
 loc('demon-domain','마왕령','demon-land','region','마왕성의 통치가 직접 닿는 영지. 모든 마계 세력을 뜻하지는 않는다.','demon-castle'),
 loc('demon-castle-place','마왕성','demon-domain','facility','통치와 협상의 장소이자 오래된 마력의 성채.','demon-castle'),
 loc('demon-gate','마왕성 정문','demon-castle-place','outdoor','방문 목적을 묻는 근위병이 검은 문을 지킨다.','demon-guard'),
 loc('demon-audience','알현실','demon-castle-place','room','말 한마디가 군단의 진로를 바꾸기도 하는 넓은 홀.','demon-castle',[permit('demon-audience','알현 허가 필요')]),
 loc('demon-office','집무실','demon-castle-place','room','세력들의 서신과 국경 보고서가 모이는 비공개 공간.','demon-executive',[permit('demon-office','마왕성 집무실 출입 허가 필요')]),
 loc('demon-training','마왕군 훈련장','demon-castle-place','outdoor','서로 다른 체격과 전법을 가진 병사들이 호흡을 맞추는 곳.','demon-army',[{type:'organization',organizationIds:['demon-army'],description:'마왕군 소속 필요'}],['train']),
 loc('abyss-library','심연 서고','demon-castle-place','building','봉인된 장서에는 학문과 위험이 함께 잠들어 있다.','abyss-academy',[permit('abyss-library','심연 서고 열람 허가 필요')],['research']),
];
const edge=(from:string,to:string,minutes:number):LocationConnection=>({id:`path-${from}-${to}`,fromLocationId:from,toLocationId:to,distanceMeters:minutes*70,baseTravelMinutes:minutes,terrainType:'normal',allowedModes:['walk','run'],bidirectional:true,accessRules:[]});
export const locationConnections:LocationConnection[]=[
 edge('capital-market','academy-gate',15),edge('capital-market','capital-palace',20),edge('academy-gate','academy-plaza',3),edge('academy-plaza','academy-class-building',2),edge('academy-class-building','academy-corridor',1),
 ...[1,2,3,4].map(y=>edge('academy-corridor',`academy-class-${y}-1`,1)),edge('academy-corridor','academy-professor-office',1),
 ...([['academy-library',4],['academy-dining',3],['academy-arena',6],['academy-morning',5],['academy-student-hall',3],['academy-dorm',4]] as const).map(([id,m])=>edge('academy-plaza',id,m)),
 edge('academy-student-hall','academy-council-office',1),edge('academy-dorm','academy-dorm-men',1),edge('academy-dorm','academy-dorm-women',1),edge('academy-dorm-men','academy-dorm-floor-3',2),edge('academy-dorm-floor-3','academy-room-305',1),edge('academy-dorm-floor-3','academy-room-306',1),edge('academy-dorm-women','academy-room-205',1),
 ...(['demon-audience','demon-office','demon-training','abyss-library']).map(id=>edge('demon-gate',id,5)),
];
