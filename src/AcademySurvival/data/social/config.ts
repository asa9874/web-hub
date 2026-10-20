import type {AcquisitionKind,OrganizationType,PositionCategory,TitleCategory} from '../../types/social';
export const POSITION_CATEGORIES:Record<PositionCategory,string>={royalty:'왕실·귀족',academy:'아카데미·교육',military:'군사·기사단',clergy:'종교·성직',research:'마법·연구',commerce:'길드·상업',legal:'법적 신분·범죄',world:'특수 조직·세계관'};
export const TITLE_CATEGORIES:Record<TitleCategory,string>={learning:'학업·성장',battle:'전투·무용',research:'마법·연구',heroic:'선행·영웅',infamy:'범죄·악명',relations:'사회·인간관계',eccentric:'기묘한 행적',legend:'전설·초월·신화'};
export const ACQUISITION_TYPES:Record<AcquisitionKind,string>={achievement:'업적형',event:'사건형',reputation:'평판형',relationship:'관계형',secret:'비밀형',dishonor:'불명예형',special:'특수형'};
export const POSITION_ACQUISITIONS={birth:'출생·계승',admission:'입학',appointment:'임명',election:'선출',qualification:'자격',judgment:'법적 판단',contract:'계약',recognition:'공식 인정'};
export const EXCLUSIVE_GROUPS={'sovereign-seat':'동일 국가의 최고 통치·계승 직위','academic-year':'동일 아카데미의 현재 학년','student-executive':'동일 학생회의 집행 대표','academy-head':'동일 아카데미의 운영 책임','order-command':'동일 기사단 지휘권','tower-head':'동일 마탑 최고 직위','church-head':'동일 교단 최고 성직','guild-head':'동일 길드 대표권','custody':'동일 법원의 현재 구금 처분','noble-seat':'동일 영지의 귀족 작위'};
export const ORGANIZATION_TYPES:Record<OrganizationType,string>={polity:'국가·영지',academy:'교육기관',order:'군사·기사단',church:'교단',tower:'마법 연구기관',guild:'길드·상단',court:'사법기관',network:'특수 조직',settlement:'정착지',world:'세계적 공인 체계'};
export const ORGANIZATIONS:{id:string;name:string;type:OrganizationType}[]=[
 {id:'empire',name:'제국',type:'polity'},{id:'dawn-kingdom',name:'새벽 왕국',type:'polity'},{id:'north-duchy',name:'북부 공국',type:'polity'},
 {id:'academy-main',name:'본교 아카데미',type:'academy'},{id:'academy-guest',name:'협약 아카데미',type:'academy'},
 {id:'royal-order',name:'왕실 기사단',type:'order'},{id:'frontier-order',name:'변경 수비대',type:'order'},
 {id:'dawn-church',name:'새벽 교단',type:'church'},{id:'central-tower',name:'중앙 마탑',type:'tower'},
 {id:'trade-guild',name:'도시 상인조합',type:'guild'},{id:'city-court',name:'도시 법원',type:'court'},
 {id:'border-network',name:'경계 협약 조직',type:'network'},{id:'river-town',name:'강가 정착지',type:'settlement'},
 {id:'world-covenant',name:'세계 공인 협약',type:'world'},
];
