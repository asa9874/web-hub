import type {ImpactMetadata} from '../types/impact';
import {IMPACT_DOMAINS} from '../data/impactConfig';
import {impactGrade} from '../systems/impact';
export default function ImpactBadge({impact}:{impact:ImpactMetadata}){return <div className="ac-impact-detail"><span>요소 영향력 <strong>{impact.baseImpact}</strong> / 1,000</span><b>{impactGrade(impact.baseImpact)?.name??'평가 오류'}</b><meter min="0" max="1000" value={impact.baseImpact}/><small>{impact.domains.map(d=>IMPACT_DOMAINS[d]).join(' · ')}<br/>캐릭터 최종 영향력·전투력·획득 확률과 별개의 평가</small></div>;}
