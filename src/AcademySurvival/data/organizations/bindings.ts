import type {PositionAffiliationBinding} from '../../types/organization';
export const ACADEMY_YEAR_POSITIONS:Record<string,number>={'position-academy-year-one':1,'position-academy-year-two':2,'position-academy-year-three':3,'position-academy-year-four':4};
export const POSITION_AFFILIATION_BINDINGS:PositionAffiliationBinding[]=[
 ...Object.keys(ACADEMY_YEAR_POSITIONS).map(positionId=>({positionId,scope:'holding' as const,required:true,description:'현재 학적의 교육기관에 직접 또는 하위 학부를 통해 소속되어야 한다.'})),
 ...['position-student-president','position-student-vice-president','position-student-treasurer'].map(positionId=>({positionId,scope:'fixed' as const,organizationId:'academy-council',required:true,description:'본교 학생회 직급은 학생회 가입 기록을 별도로 확인한다.'})),
 ...['position-knight','position-knight-captain','position-knight-deputy'].map(positionId=>({positionId,scope:'holding' as const,required:true,description:'기사단 직위의 실제 조직 가입을 확인한다. 명예 직위에는 적용하지 않는다.'})),
 {positionId:'position-researcher',scope:'holding',required:true,description:'계약 연구원의 연구기관 가입을 별도로 확인한다.'},
];
