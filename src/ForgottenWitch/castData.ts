export type Pattern='clap'|'charge'|'hop'|'ranged'|'fan'|'wave'|'guard'|'boss';
export interface MonsterDefinition {id:string;name:string;design:string;pattern:Pattern;hp:number;speed:number;height:number;windup:number;recovery:number;note:string;bossPatterns?:readonly Pattern[]}
const monster=(id:string,name:string,design:string,pattern:Pattern,hp=3,speed=85,height=150,windup=.7,recovery=1.1,note='종이라서 가벼울 줄 알았는데. 가까이서 확인하지는 말자.'):MonsterDefinition=>({id,name,design,pattern,hp,speed,height,windup,recovery,note});
export const MONSTERS:MonsterDefinition[]=[
  monster('clapper','박수꾼','cream cardboard rabbit, lavender scarf, plum button eyes','clap',3,88,155,.55,.95,'박수는 객석에서. 내 얼굴 앞에서는 하지 말고.'),
  monster('thimble','골무 고슴도치','sage hedgehog with oversized sewing thimble helmet and folded paper spines','charge',4,75),
  monster('ticket','입장권 여우','dusty pink fox with cream ticket-shaped tail, brass hole-punch brooch','charge',3,110),
  monster('teacup','찻잔 달팽이','little lavender snail carrying chipped cream teacup shell and tea leaf scarf','ranged',4,35),
  monster('bell','방울 참새','round cream sparrow with lavender paper wings and antique bell collar','hop',2,100,125),
  monster('spool','실타래 거미','cute sage eight-legged paper spider with pink thread spool body, no scary face','fan',3,60),
  monster('lantern','등불 나방','lavender moth with folded cream lantern wings and tiny plum eyes','ranged',3,75),
  monster('acorn','도토리 기사','round acorn soldier with tan cap helmet, sage leaf shield, short paper boots','guard',5,65),
  monster('mask','웃음 가면','small walking theater comedy mask, dusty pink ribbons and cream accordion legs','wave',4,60),
  monster('mushroom','우산 버섯','sage mushroom with lavender umbrella cap and cream rain boots','hop',3,70),
  monster('mail','편지 펭귄','plum penguin in cream postal apron carrying dusty pink envelope wings','ranged',3,80),
  monster('scissors','가위 집게','small friendly paper crab with cream scissor claws and pink bow','clap',4,100),
  monster('clock','늦잠 태엽쥐','cream wind-up mouse with large lavender clockwork key and sage pajamas','charge',3,120),
  monster('candle','촛농 양','round cream sheep with lavender wax curls and unlit candle crown','wave',4,45),
  monster('kite','리본 가오리','sage paper kite stingray with long dusty pink ribbon tail and button face','fan',3,90),
  monster('book','책등 부엉이','lavender owl whose body is an open cream book, brass bookmark glasses','ranged',5,50),
  monster('sock','짝 잃은 강아지','floppy cream sock puppy with sage patches and lavender button nose','hop',3,105),
  monster('drum','북치는 개구리','sage frog in plum waistcoat carrying pink cardboard drum','wave',5,60),
  monster('mirror','거울 사슴','small lavender fawn with matte cream mirror chest and folded tan antlers','guard',5,75),
  monster('crown','종이 왕관','small walking cream crown with plum cape, pink cheeks, little cardboard feet','fan',4,65),
];
export const BOSS=monster('conductor','막간의 지휘자','large elegant friendly eerie owl marionette conductor, layered dark plum tailcoat, cream ruff, crescent-mask face, lavender feather crown, brass pendulum baton, articulated cardboard wings, imposing storybook theater silhouette','boss',36,65,300,.95,1.3,'공연을 끝내는 법을 모르는 지휘자. 한 번쯤은 내려놓아도 될 텐데.');
export const BOSSES:MonsterDefinition[]=[{...BOSS,bossPatterns:['charge','fan','wave']}];
export const monsterDefinitions=[...MONSTERS,...BOSSES];
export const monsterById=(id:string)=>monsterDefinitions.find(m=>m.id===id)??MONSTERS[0];
export const monsterFile=(id:string)=>id==='clapper'?'clapper-idle.png':`monsters/${id}.png`;
export const PATTERN_LABELS:Record<Pattern,string>={clap:'근접 · 손뼉',charge:'예고 후 직선 돌진',hop:'도약 후 착지 공격',ranged:'조준 · 단발 투사체',fan:'부채꼴 세 발',wave:'낮은 바닥 파동',guard:'정면 방어 · 후방 약점',boss:'3막 순환 · 돌진 / 탄막 / 파동'};
export const NPCS=[
  {id:'lumi',name:'루미',design:'ivory hair in an asymmetric short braid, amber eyes, navy-lavender lamplighter coat, cream blouse, brass lamp brooch, small lantern at waist',description:'불 꺼진 자리부터 확인하는 조명 견습. 자신 있게 말하다가도 칭찬을 받으면 손잡이만 만지작거린다.',note:'밝혀 놓고 자기는 어둠에 서 있다. 다음에는 같이 앞으로 나오자.',frequency:248,wave:'triangle' as const,line:'등은 제가 켤게요. ……환한 곳에 서는 건 아직 연습 중이에요.'},
  {id:'serin',name:'세린',design:'dusty rose long hair with blunt fringe and tiny ribbon braids, gray blue eyes, cream archivist blouse, sage pinafore skirt, paper bookmark hair clips, notebook held at waist',description:'사라진 대본을 모으는 기록원. 어제의 문장은 정확히 기억하면서 자신의 약속은 자주 빼놓는다.',note:'책갈피가 많은데 끝까지 읽은 책은 적다고 했다. 끝을 아끼는 건가.',frequency:272,wave:'sine' as const,line:'없는 페이지도 번호는 있어요. 기다릴 자리를 남겨 두는 거죠.'},
  {id:'noel',name:'노엘',design:'steel blue bob with swept fringe, violet eyes, tailored plum stage mechanic jacket with rolled sleeves over modest cream dress, tan tool belt, miniature wind-up key earrings',description:'무대 장치를 고치는 기술자. 고장 난 물건에는 다정하고 멀쩡한 사람에게는 까칠하다.',note:'볼트를 조이면서 사람은 너무 조이면 안 된다고 했다. 본인 이야기겠지.',frequency:215,wave:'triangle' as const,line:'고장이 아니라 쉬는 중이야. ……내가 그렇게 정했어.'},
  {id:'mira',name:'미라',design:'warm chestnut wavy shoulder length hair, green eyes, dusty pink modest usher uniform, cream cuffs and collar, small crooked pillbox hat, tan ticket wallet',description:'빈 객석에도 표를 안내하는 매표원. 농담으로 모든 질문을 넘기지만 마지막 좌석은 늘 비워 둔다.',note:'내 표에는 좌석 번호가 없었다. 어디에 앉아도 된다는 뜻으로 받았어.',frequency:338,wave:'sine' as const,line:'오늘은 전석 초대예요. 웃어 주시면 더 좋은 자리로 안내하고요.'},
  {id:'iris',name:'이리스',design:'deep violet very long hair tied low with pale mint ribbon, silver eyes, layered sage and cream modest sound collector dress, plum capelet, antique tuning fork necklace',description:'극장에 남은 소리를 수집하는 조율사. 조용한 성격이지만 누군가의 침묵을 함부로 해석하지 않는다.',note:'말을 안 해도 기다려 줬다. 그런 사람에게는 조금 더 말하고 싶어져.',frequency:196,wave:'sine' as const,line:'박수 사이의 빈 소리도 들려요. 그 안에 누가 숨을 쉬거든요.'},
  {id:'poppy',name:'포피',design:'soft peach twin buns with loose short curls, teal eyes, cream and lavender costume tailor dress, dusty pink apron with spool pockets, sage measuring tape ribbon, small sewing scissors pendant',description:'의상실의 재봉사. 자꾸 작아진 옷을 고치며, 사람도 어제보다 자랐을 거라고 믿는다.',note:'망토를 고쳐 주고 값을 안 받았다. 다음엔 내가 별을 달아 줘야겠어.',frequency:366,wave:'triangle' as const,line:'조금 뜯었다가 다시 꿰매면 돼요. 마음도 그러면 참 좋겠네요.'},
] as const;
export type NpcId='flora'|typeof NPCS[number]['id'];
export const npcPuppetFile=(id:NpcId)=>id==='flora'?'flora-puppet-clean.png':id==='iris'?'npcs/iris-puppet-v3.png':`npcs/${id}-puppet.png`;
