export const LIVING_TESTS=[
  {id:'props',label:'소품 반응',x:6540,help:'풀·상자·간판 사이를 걸어 보세요.'},
  {id:'npc-react',label:'NPC 상황 반응',x:2480,help:'플로라 앞에서 점프하거나 마법을 쏘세요.'},
  {id:'magic-props',label:'마법과 무대',x:7050,help:'F/J로 종·풍차·등불을 차례로 맞혀 보세요.'},
  {id:'wind',label:'종이 바람',x:7840,help:'바람 속에서 점프하세요. E로 바람 방향을 바꿉니다.'},
  {id:'platforms',label:'움직이는 발판',x:8330,help:'움직이는 판넬에 올라타고 다음 발판으로 점프하세요.'},
  {id:'checkpoint',label:'체크포인트',x:8860,help:'의자 앞에서 E로 쉬세요. 오른쪽 함정에서 재등장 위치를 확인할 수 있습니다.'},
  {id:'traps',label:'함정 체험',x:9200,help:'이빨은 점프, 달은 타이밍을 읽고 순간이동로 피하세요.'},
  {id:'secret',label:'숨겨진 무대',x:9960,help:'수상한 커튼 앞에서 E. 안으로 들어가 작은 기록을 발견하세요.'},
  {id:'idle',label:'주인공 대기 동작',x:6600,help:'5초간 서 있거나, 플로라 곁·전투 뒤에서 잠시 기다려 보세요.'},
] as const;
export type LivingTest=(typeof LIVING_TESTS)[number]['id'];
export const TRAPS=[
  {id:'teeth',name:'접힌 종이 이빨',texture:'paper-teeth',description:'발판을 밟으면 접혀 있던 종이 이빨이 올라오는 무대 장치.',counter:'분홍색 예고 후 점프하거나 순간이동로 통과',note:'날카로워 보여도 종이야. 그렇다고 맨발로 확인할 생각은 없어.'},
  {id:'pendulum',name:'매달린 달',texture:'moon',description:'조종 막대에 매달린 달이 일정한 박자로 통로를 가로지른다.',counter:'흔들리는 궤도를 보고 지나가거나 순간이동로 회피',note:'달이 내려온다고 소원을 빌 필요는 없겠네. 먼저 비켜야 하니까.'},
  {id:'sinking',name:'내려앉는 판넬',texture:'bridge',description:'몸을 올리면 내려앉고 옆으로 기울며, 비우면 천천히 복귀하는 발판.',counter:'발판 높이와 기울기를 보며 다음 판넬로 이동',note:'한 사람 정도는 견딘다고 쓰여 있는데. 그 한 사람이 누군지는 안 쓰여 있어.'},
] as const;
