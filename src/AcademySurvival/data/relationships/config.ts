import type {RelationshipMetric,RelationshipCategory} from '../../types/relationship';
export const RELATIONSHIP_CATEGORIES:Record<RelationshipCategory,string>={family:'가족·혈연',friendship:'친분',conflict:'경쟁·갈등',authority:'사제·권력',romance:'애정·혼인',special:'특수 관계'};
export const RELATIONSHIP_METRICS:Record<RelationshipMetric,{name:string;min:number;max:number;description:string;anchors:readonly (readonly [number,string])[]}>= {
 affection:{name:'호감도',min:-100,max:100,description:'상대를 좋아하거나 싫어하는 정도. 사회적 관계의 사실과는 별개다.',anchors:[[-100,'극도의 증오'],[-60,'강한 반감'],[-20,'불호'],[0,'중립'],[20,'호의'],[60,'강한 호감'],[100,'깊은 애정']]},
 trust:{name:'신뢰도',min:-100,max:100,description:'상대의 말과 행동을 믿거나 의심하는 정도.',anchors:[[-100,'절대 불신'],[-60,'강한 의심'],[-20,'경계'],[0,'판단 보류'],[20,'어느 정도 신뢰'],[60,'높은 신뢰'],[100,'절대적 신뢰']]},
 intimacy:{name:'친밀도',min:0,max:100,description:'상대와 얼마나 가깝다고 느끼는지. 싫어하는 가족과도 높을 수 있다.',anchors:[[0,'낯선 사이'],[20,'면식 있음'],[40,'어느 정도 가까움'],[60,'친밀한 사이'],[80,'매우 가까운 사이'],[100,'깊은 유대']]},
 respect:{name:'존경도',min:0,max:100,description:'상대의 능력이나 인격을 인정하고 존경하는 정도.',anchors:[[0,'존경하지 않음'],[20,'능력을 인정함'],[40,'상당한 인정'],[60,'존경함'],[80,'깊이 존경함'],[100,'숭배에 가까움']]},
 fear:{name:'두려움',min:0,max:100,description:'상대에게 느끼는 공포와 위압감. 존경이나 호감과 공존할 수 있다.',anchors:[[0,'두려움 없음'],[20,'약한 경계'],[40,'부담감'],[60,'상당한 공포'],[80,'극심한 공포'],[100,'압도적인 공포']]},
};
export const RELATIONSHIP_V1={version:'relationships-v1',defaultConnections:6,maxConnections:10,maxCandidates:48,maxCharacters:5000,maxLogs:1000,trustedThreshold:60,hostileThreshold:-40,
 contact:{sameClass:.78,sameHome:.85,sameDepartment:.6,sameOrganization:.35,sameLocation:.3,sameRegion:.07,none:.015},
 similarityBonus:{year:.08,specialization:.12,traits:.04,age:.04},socialMultiplier:1.3,isolatedMultiplier:.55,extremeChance:.015,romanticChance:.035,rivalChance:.18,hostileChance:.06,romanticMinAge:16,romanticMaxAgeGap:4,
 dispositions:{social:['disposition-socialite'],isolated:['disposition-recluse','disposition-isolationist'],cautious:['disposition-distrustful','disposition-suspicious'],competitive:['disposition-competitor'],justice:['disposition-justice','disposition-altruist'],ambitious:['disposition-ambitious','disposition-power-seeker']},
};
