import {injuryStatuses} from './injury';
import {physiologyStatuses} from './physiology';
import {emotionStatuses} from './emotion';
import {magicStatuses} from './magic';
import {alterationStatuses} from './alteration';
import {societyStatuses} from './society';
import {anomalyStatuses} from './anomaly';
import {trigger} from './define';
import type {StatusTransition} from '../../types/status';
const definitions=[...injuryStatuses,...physiologyStatuses,...emotionStatuses,...magicStatuses,...alterationStatuses,...societyStatuses,...anomalyStatuses];
const paths:[string,string,StatusTransition['kind'],string,'preserve'|'clear',string?][]=[
 ['wound','bleeding','worsen','열린 상처에서 지혈되지 않은 혈액 유출을 확인함','preserve'],
 ['bleeding','blood-loss','worsen','지혈 실패와 유의한 누적 혈액 손실 판정','clear'],
 ['blood-loss','shock','worsen','순환 유지 실패가 의무관 또는 사건 판정으로 확인됨','clear'],
 ['wound','amputation','special','말단의 회복 불가 손상 확인과 별도 절단 사건. 중상만으로 자동 발생하지 않음','preserve'],
 ['amputation','mechanical-arm','special','팔 부위 상실 후 본인의 동의·적합성 검사·의체 장착 시술 완료','preserve'],
 ['amputation','mechanical-leg','special','다리 부위 상실 후 동의한 보행 의체 장착 시술 완료','preserve'],
 ['foreign-splinter','wound','treat','잔류 파편 제거가 완료됐으나 상처 처치는 여전히 필요함','preserve'],
 ['burn','scar-contracture','special','깊은 화상 치유 뒤 실제 가동 제한이 확인됨. 모든 화상의 필연 결과는 아님','preserve'],
 ['muscle-tear','rehabilitating','improve','재활을 시작할 수 있다는 의무실 허가','clear'],
 ['fracture','rehabilitating','improve','유합 확인 후 보호된 운동 계획에 진입','clear'],
 ['cold-exposure','frostbite','worsen','실제 조직 동결 손상 판정과 손상 부위 지정이 필요함','clear'],
 ['mana-overflow','spell-recoil','worsen','방출 실패와 회로 역류 사건','clear'],
 ['soul-erosion','self-collapse','worsen','경계 붕괴 직전 단계에서 자아 유지 실패가 별도 판정됨','clear','breach'],
 ['fading-existence','unwritten-name','special','문서 인식에까지 경계 오염이 번진 사건','clear'],
 ['exhaustion','rested','improve','충분한 안전한 수면과 탈진 원인의 해소를 함께 확인','clear'],
 ['fear','calm','improve','위협에서 벗어나 자발적인 안정이 확인됨','clear'],
 ['anger','calm','improve','갈등에서 잠시 거리를 두고 평정을 되찾음','clear'],
 ];
export const statuses=definitions.map(def=>({...def,transitions:[
 ...def.recovery.filter(()=>def.duration.type!=='permanent'&&def.duration.type!=='special').map((t,index):StatusTransition=>({id:`${def.id}-release-${index}`,to:null,kind:'treat',trigger:t,body:'clear'})),
 ...paths.filter(([from])=>def.id==='status-'+from).map(([,to,kind,description,body,stageId],index):StatusTransition=>({id:`${def.id}-path-${index}`,to:'status-'+to,kind,trigger:trigger(`${def.id}-path-${index}`,description),body,stageId})),
 ]}));
