import type {StartingProfile} from './admission';
import type {WorldIdentityRequest} from './worldLore';
export interface PlayerLifePolicy {
 studyWeight:number;trainingWeight:number;socialWeight:number;restWeight:number;
 attendScheduledClasses:boolean;
 interruptionPolicy:{pauseForDirectRequests:boolean;pauseForDanger:boolean;pauseForMajorPersonalEvents:boolean;pauseForImportantNearbyEvents:boolean;minimumImportance:number};
}
export interface PlayerCreation {economicBackground?:import('./economy').EconomicBackground;startingProfile?:StartingProfile;worldIdentity?:WorldIdentityRequest;name:string;gender:string;focus:'balanced'|'combat'|'social';policy?:PlayerLifePolicy}
export const DEFAULT_PLAYER_POLICY:PlayerLifePolicy={studyWeight:35,trainingWeight:35,socialWeight:20,restWeight:10,attendScheduledClasses:true,interruptionPolicy:{pauseForDirectRequests:true,pauseForDanger:true,pauseForMajorPersonalEvents:true,pauseForImportantNearbyEvents:true,minimumImportance:75}};
export function assertPlayerPolicy(p:PlayerLifePolicy){
 if(!p||[p.studyWeight,p.trainingWeight,p.socialWeight,p.restWeight].some(n=>!Number.isInteger(n)||n<0||n>100)||p.studyWeight+p.trainingWeight+p.socialWeight+p.restWeight!==100||typeof p.attendScheduledClasses!=='boolean'||!p.interruptionPolicy||['pauseForDirectRequests','pauseForDanger','pauseForMajorPersonalEvents','pauseForImportantNearbyEvents'].some(k=>typeof p.interruptionPolicy[k as keyof typeof p.interruptionPolicy]!=='boolean')||!Number.isInteger(p.interruptionPolicy.minimumImportance)||p.interruptionPolicy.minimumImportance<0||p.interruptionPolicy.minimumImportance>100)throw Error('생활 방침은 정수0~100·합계100 및 올바른 중단 정책이 필요합니다.');
}
