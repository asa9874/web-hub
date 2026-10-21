import type {RelationshipCategory,RelationshipTypeDefinition,FixedRelationshipSeed} from '../../types/relationship';
const data:Record<RelationshipCategory,string>={
family:`parent|부모|자녀를 돌보고 책임지는 부모의 지위. 애정과 신뢰가 낮아도 혈연·양육의 사실은 사라지지 않는다.|child
child|자녀|부모와 세대를 잇는 자녀의 지위. 기대와 반발은 같은 가족 안에서도 함께 자란다.|parent
brother|형제|형제라는 가족의 연을 공유한다. 가족 호칭의 세부 연령 서열과 감정은 별도로 기록한다.|brother
sister|자매|자매라는 가족의 연을 공유한다. 함께 자란 기억이 언제나 다정한 것은 아니다.|sister
mixed-sibling|남매|서로 다른 성별의 형제자매로 맺어진 가족 관계. 친밀함과 갈등 모두 가능하다.|mixed-sibling
grandparent|조부모|두 세대를 건너 손자녀와 이어진 조부모의 지위. 삶의 경험이 관계의 온도를 대신하지는 않는다.|grandchild
grandchild|손자녀|조부모와 두 세대를 사이에 둔 손자녀의 지위. 멀리 살아도 가족의 사실은 남는다.|grandparent
relative|친척|직계와 형제자매 밖에서 이어지는 친족 관계. 가까운 친척인지조차 감정 수치와 별개의 정보다.|relative
adoptive-parent|양부모|혈연 대신 양육과 약속으로 가족을 이룬 부모의 지위.|adopted-child
adopted-child|양자녀|입양을 통해 가족의 일원이 된 자녀의 지위. 출생의 비밀을 추정하는 표지가 아니다.|adoptive-parent
sworn-brother|의형제|핏줄 대신 서로의 약속으로 형제의 연을 맺었다. 맹세가 친절한 감정을 보장하지는 않는다.|sworn-brother
sworn-sister|의자매|함께 지킬 약속으로 자매의 연을 맺었다. 연대의 사실과 개인의 인식은 구분한다.|sworn-sister`,
friendship:`acquaintance|지인|얼굴과 이름을 알고 가끔 인사를 나누는 상대. 한쪽은 더 가깝다고 생각할 수도 있다.|acquaintance
friend|친구|함께 시간을 보내고 싶다고 여기는 상대. 상대방도 친구라고 생각하는지는 별개의 문제다.|friend
best-friend|절친|마음 깊은 곳을 내보일 수 있다고 생각하는 상대. 신뢰의 정도는 실제 수치로 확인한다.|best-friend
childhood-friend|소꿉친구|어린 시절을 함께 보낸 인연. 추억의 친밀함이 현재의 호감을 강요하지 않는다.|childhood-friend
colleague|동료|같은 일이나 활동에서 접점을 가진 상대. 협력과 경쟁의 경계는 사람마다 다르다.|colleague
classmate|동급생|같은 반에서 학업을 함께하는 관계. 실제 반 정보가 있을 때만 자동 생성의 근거로 쓴다.|classmate
roommate|룸메이트|같은 거주 방을 함께 사용하는 사실적 관계. 생활 습관의 차이로 반감이 생길 수도 있다.|roommate
senior|선배|같은 교육·조직 맥락에서 먼저 길을 밟은 사람의 위치. 나이만 많다는 이유로 부여하지 않는다.|junior
junior|후배|같은 교육·조직 맥락에서 뒤이어 들어온 사람의 위치. 존경이나 복종을 뜻하지 않는다.|senior`,
conflict:`competitor|경쟁자|비슷한 목표나 자리를 두고 실력을 겨루는 상대. 승부가 끝나면 함께 웃을 수도 있다.|competitor
rival|라이벌|자신의 성장과 승부를 의식하게 하는 특별한 경쟁 상대. 높은 호감과 존경도 자연스럽다.|rival
enemy|원수|지울 수 없는 피해나 증오의 대상으로 인식하는 상대. 실제 사건의 판정은 별도 시스템이 맡는다.|enemy
nemesis|숙적|오랜 대립 속에서 자신의 길과 깊이 얽혔다고 여기는 상대.|nemesis
hostile|적대자|현재 목적이나 안전을 위협한다고 보는 상대. 상대의 인식이 같다고 가정하지 않는다.|hostile
discord|불화 관계|반복된 마찰이나 가치관의 충돌로 관계가 어긋나 있다고 여기는 상대.|discord`,
authority:`mentor|스승|가르침을 전하는 사람의 사실적 역할. 존경받는지는 제자의 감정 수치로 따로 표현한다.|disciple
disciple|제자|가르침을 받는 사람의 사실적 역할. 배움의 계약이 호감을 의미하지 않는다.|mentor
superior|상관|특정 지휘·업무 관계에서 지시를 내리는 위치. 공식 직급 자체와는 별도의 인물 간 연결이다.|subordinate
subordinate|부하|특정 지휘·업무 관계에서 지시를 받는 위치. 두려움과 충성은 독립적인 감정이다.|superior
guardian|보호자|상대의 생활이나 안전을 돌볼 책임을 맡은 사람의 역할.|ward
ward|피보호자|다른 사람의 보호와 돌봄을 받는 위치. 의존의 정도를 자동으로 결정하지 않는다.|guardian
liege|주군|충성과 봉사의 약속을 받는 사람의 지위. 국가나 조직의 대표 신분과 혼동하지 않는다.|retainer
retainer|가신|특정 인물에게 봉사와 충성을 약속한 역할. 속마음까지 충성한다고 단정하지 않는다.|liege`,
romance:`lover|연인|서로 합의해 교제하는 사실적 관계. 애정의 크기와 관계의 공개 여부는 따로 기록한다.|lover
ex-lover|전 연인|교제했던 사실이 남은 상대. 이별 뒤의 감정은 미련부터 안도까지 다양하다.|ex-lover
crush|짝사랑|상대의 응답과 무관하게 품은 일방적인 애정의 인식. 반대편에는 같은 유형을 만들지 않는다.|
fiance|약혼자|혼인을 약속한 사실적 관계. 정치적 약속이라면 애정이 없을 수도 있다.|fiance
spouse|배우자|혼인으로 맺어진 사실적 관계. 혈연·감정·공개 범위와 분리해 관리한다.|spouse`,
special:`benefactor|은인|도움을 베풀어 상대에게 은혜를 남긴 사람의 위치. 도움의 크기는 사건 기록에서 다룬다.|beneficiary
beneficiary|수혜자|상대의 도움을 받은 위치. 감사의 감정이 반드시 따르는 것은 아니다.|benefactor
lifesaver|생명의 은인|상대의 생명을 구한 사람의 위치. 구체적인 구조 사건을 이번 엔진이 추정하지 않는다.|life-saved
life-saved|구명 수혜자|상대에게 생명을 구원받은 위치. 공통 역방향 참조를 위해 별도 유형으로 둔다.|lifesaver
creditor|채권자|상대에게 받을 채무가 있는 사람의 위치. 채무액과 법적 집행은 별도 시스템의 영역이다.|debtor
debtor|채무자|상대에게 갚아야 할 채무를 가진 위치. 빚졌다고 반드시 두려워하지는 않는다.|creditor
accomplice|공범|같은 범행에 관여한 사실적 연결. 범행이나 카르마를 이 관계만으로 자동 생성하지 않는다.|accomplice
secret-sharer|비밀 공유자|공통의 비밀을 알고 있는 연결. 비밀의 내용과 공개 여부는 별도로 다룬다.|secret-sharer
watcher|감시자|상대를 지켜보거나 추적하는 사람의 관점. 감시 대상이 이를 안다고 가정하지 않는다.|watched
watched|감시 대상|다른 사람에게 감시당한다고 인식하는 위치. 실제 감시 사실은 사건 시스템과 연결해야 한다.|watcher`,
};
const factual=new Set(['parent','child','brother','sister','mixed-sibling','grandparent','grandchild','relative','adoptive-parent','adopted-child','sworn-brother','sworn-sister','childhood-friend','classmate','roommate','mentor','disciple','superior','subordinate','guardian','ward','liege','retainer','lover','ex-lover','fiance','spouse','benefactor','beneficiary','lifesaver','life-saved','creditor','debtor','accomplice','secret-sharer']);
export const relationshipTypes:RelationshipTypeDefinition[]=Object.entries(data).flatMap(([category,text])=>text.split('\n').map(line=>{const [key,name,description,reverse]=line.split('|');return {id:'relation-'+key,name,description,category:category as RelationshipCategory,reciprocalTypeId:reverse?'relation-'+reverse:undefined,symmetric:key===reverse,reciprocity:factual.has(key)?'required':'perceptual',tags:[category,...(['friend','best-friend','childhood-friend'].includes(key)?['friend']:[]),...(['competitor','rival'].includes(key)?['rival']:[]),...(['enemy','nemesis','hostile','discord'].includes(key)?['hostile']:[])]};}));
// No new canonical Serena relationships are invented. Campaigns may supply confirmed seeds here later.
export const fixedRelationshipSeeds:FixedRelationshipSeed[]=[];
