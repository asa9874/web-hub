import type {NpcAiEngine} from './npcAi';
import type {Character} from '../types/character';
import type {NpcImportance, SimulationActor, SimulationRegion, SimulationSave, SimulationTier, SimulationTransition, SimulationController, SimulationCommand} from '../types/simulation';
import {assertAbsoluteMinute, MAX_ABSOLUTE_MINUTE} from './calendar';

/** A precision policy over the existing world. Never owns copies of NPCs, clocks or outcomes. */
export function createNpcSimulation(ai: NpcAiEngine, options: {seed?: string; initial?: SimulationSave; autoConnect?: boolean} = {}): SimulationController {
 if (ai.getSimulation()) throw Error('같은 세계 AI에 LOD 관리자를 중복 연결할 수 없습니다.');
 const {world, schedule, clock} = ai, seed = options.seed ?? options.initial?.seed ?? `${ai.save().seed}/lod`;
 const actors = new Map<string, SimulationActor>(), regions = new Map<string, SimulationRegion>();
 const dirty = new Set<string>(), pins = new Map<string, {until: number; reason: string}>(), listeners = new Set<() => void>();
 const holds = new Map<string, number>();
 let enabled = true, playerId: string | undefined, revision = 0, stop: (() => void) | undefined;
 let policy = {enterMinutes: 5, leaveMinutes: 10, holdMinutes: 30}, transitions: SimulationTransition[] = [];
 let processing = false, previousImportant = new Set<string>();
 let commands: SimulationCommand[] = [], reachKey = '', reach = new Map<string, number>();
 const now = clock.getSnapshot;
 const notify = () => {if (!clock.isProcessingTimeline()) {revision++; listeners.forEach(fn => fn());}};
 const command = (subjectId: string, message: string) => {commands.push({at: now(), subjectId, message}); commands = commands.slice(-200);};
 // Disjoint roots; realm/nation ancestors never activate all their descendants.
 for (const id of ['academy', 'imperial-capital', 'demon-castle-place']) if (world.catalog.nodes.has(id)) {
  const place = world.catalog.getLocation(id);
  regions.set(id, {id, name: place.name, rootLocationId: id, residents: {}});
 }
 const regionOf = (place: string) => {
  const path = world.catalog.getLocationPath(place);
  return [...path].reverse().map(l => [...regions.values()].find(r => r.rootLocationId === l.id)?.id).find(Boolean) ?? place;
 };
 const isAcademic = (id: string) => world.catalog.getLocationPath(world.getCharacterReadSnapshot(id).location!.currentLocationId).some(l => l.id === 'academy') || schedule.hasSchedule(id) && ['student','professor','guard','staff'].includes(schedule.getCharacterPlan(id).role);
 function register(id: string) {
  if (actors.has(id)) return;
  const c = world.getCharacterReadSnapshot(id); if (c.kind === 'player') {playerId ??= id; return;}
  const academic = isAcademic(id) || regionOf(c.location!.currentLocationId) === 'academy';
  actors.set(id, {characterId: id, tier: 0, importance: academic || c.kind === 'fixed_npc' ? 'significant' : 'persistent', persistent: true, regionId: regionOf(c.location!.currentLocationId), activatedAt: Math.max(0, now() - policy.holdMinutes), lastDetailedAt: now(), reason: '기존 고유 NPC 보존'});
  dirty.add(id);
 }
 world.getCharacters().forEach(c => register(c.id));
 const allDirty = () => actors.forEach((_, id) => dirty.add(id));
 const participantIds = () => new Set([
  ...ai.interactions?.getSimulationParticipants() ?? [],
  ...ai.worldEvents?.getSimulationParticipants() ?? [],
 ]);
 function safety(id: string): string | undefined {
  const c = world.getCharacterReadSnapshot(id);
  if (c.location!.movement) return '실제 이동 완료까지 정밀 유지';
  if (previousImportant.has(id)) return '상호작용·세계 사건 참여자';
  const pin = pins.get(id); if (pin && pin.until > now()) return pin.reason;
 }
 function near(id: string, limit: number): boolean {
  if (!playerId || !world.hasCharacter(playerId)) return false;
  const p = world.getCharacterReadSnapshot(playerId).location!, c = world.getCharacterReadSnapshot(id).location!;
  // The next actual waypoint is prepared; it does not change anybody's physical location.
  const from = p.movement?.legs[p.movement.nextLeg]?.from ?? p.currentLocationId;
  const targets = [from, ...(p.movement ? [p.movement.legs[p.movement.nextLeg].to] : [])];
  const key = JSON.stringify([targets, policy.leaveMinutes]);
  if (key !== reachKey) {
   reach = new Map(); reachKey = key;
   for (const place of targets) {
   // Cheap bound over the real directed travel graph; access checks still belong to the movement engine.
   const distances = new Map([[place, 0]]), pending = [place];
   while (pending.length) {
    pending.sort((a,b) => distances.get(b)! - distances.get(a)!); const cursor = pending.pop()!, distance = distances.get(cursor)!;
    reach.set(cursor, Math.min(distance, reach.get(cursor) ?? Infinity));
    for (const {connection, to} of world.catalog.adjacency.get(cursor) ?? []) {
     if (!connection.allowedModes.includes('walk')) continue;
     const next = distance + Math.max(1, connection.baseTravelMinutes * (connection.terrainType === 'rough' ? 1.5 : 1));
     if (next <= policy.leaveMinutes && next < (distances.get(to) ?? Infinity)) {distances.set(to, next); pending.push(to);}
    }
   }
   }
  }
  return (reach.get(c.currentLocationId) ?? Infinity) <= limit;
 }
 function reconcile(id: string) {
  const s = actors.get(id)!; s.regionId = regionOf(world.getCharacterReadSnapshot(id).location!.currentLocationId);
  const protectedReason = safety(id), academic = s.regionId === 'academy' || isAcademic(id);
  let tier: SimulationTier, reason: string;
  if (!enabled) {tier = 0; reason = '전체 정밀 정책';}
  else if (protectedReason) {tier = 0; reason = protectedReason;}
  else if (regions.get(s.regionId)?.forcedActive || near(id, s.tier === 0 ? policy.leaveMinutes : policy.enterMinutes)) {tier = 0; reason = '플레이어 주변 이동 그래프·지역 활성';}
  else if (s.tier === 0 && now() < s.activatedAt + policy.holdMinutes) {tier = 0; reason = '활성 유지 유예';}
  else {tier = s.forcedTier ?? (academic ? 1 : s.importance === 'background' ? 3 : 2); reason = s.forcedTier === undefined ? academic ? '원거리 아카데미 일과 유지' : '원거리 중요도 정책' : '개발자 정밀도 명령';}
  if (academic && tier > 1) {tier = 1; reason = '아카데미 최소 LOD 1';}
  if (s.importance !== 'background' && tier > 2) {tier = 2; reason = '지속·주요 NPC 최소 LOD 2';}
  if (s.forcedTier === 0) {tier = 0; reason = '개발자 정밀 활성';}
  if (tier === 0 && s.reason === '기존 고유 NPC 보존') {s.activatedAt = now(); holds.set(id, now() + policy.holdMinutes);}
  if (s.tier !== tier) {
   transitions.push({at: now(), characterId: id, from: s.tier, to: tier, reason}); transitions = transitions.slice(-500);
   s.tier = tier; s.activatedAt = now(); s.reason = reason;
   if (tier === 0) holds.set(id, now() + policy.holdMinutes); else holds.delete(id);
   schedule.refreshCharacter(id); ai.requestReevaluation(id);
  } else s.reason = reason;
 }
 const process = () => {
  if (processing) return; processing = true;
  try {
   const important = participantIds();
   for (const id of important) {const s = actors.get(id); if (s?.importance === 'background') {s.importance = 'persistent'; s.persistent = true;}}
   for (const id of new Set([...important, ...previousImportant])) if (important.has(id) !== previousImportant.has(id)) dirty.add(id);
   previousImportant = important;
   for (const [id, pin] of pins) if (pin.until <= now()) {pins.delete(id); dirty.add(id);}
   for (const [id, until] of holds) if (until <= now()) {holds.delete(id); dirty.add(id);}
   const ids = [...dirty].sort(); dirty.clear(); for (const id of ids) if (actors.has(id)) reconcile(id);
  } finally {processing = false;} notify();
 };
 const getTier = (id: string): SimulationTier => actors.get(id)?.tier ?? 0;
 const nextEventTime = (current: number, limit: number) => {
  const important = participantIds();
  if (important.size !== previousImportant.size || [...important].some(id => !previousImportant.has(id))) return current;
  if (dirty.size) return current;
  let next = Infinity;
  for (const until of holds.values()) next = Math.min(next, until);
  for (const pin of pins.values()) next = Math.min(next, pin.until);
  return next <= limit ? next : null;
 };
 const requestDetailed = (id: string, reason: string, minutes = 30) => {
  if (!actors.has(id)) throw Error('등록되지 않은 NPC');
  if (!Number.isSafeInteger(minutes) || minutes < 1 || now() + minutes > MAX_ABSOLUTE_MINUTE) throw Error('활성 유지 시간 오류');
  pins.set(id, {until: Math.max(pins.get(id)?.until ?? 0, now() + minutes), reason}); dirty.add(id); if (!clock.isProcessingTimeline()) process();
 };
 const save = (): SimulationSave => ({version: 'simulation-lod-v1', absoluteMinute: now(), seed, playerId, enabled, actors: structuredClone([...actors.values()]), regions: structuredClone([...regions.values()]), transitions: structuredClone(transitions), commands: structuredClone(commands), pins: [...pins].map(([characterId, pin]) => ({characterId, ...pin})), policy: {...policy}});
 function load(input: SimulationSave) {
  const data = structuredClone(input);
  if (data.version !== 'simulation-lod-v1' || data.absoluteMinute !== now() || data.seed !== seed || typeof data.enabled !== 'boolean' || data.actors.length !== actors.size || new Set(data.actors.map(s => s.characterId)).size !== actors.size) throw Error('LOD 저장 버전·시각·인원 오류');
  if (data.playerId && (!world.hasCharacter(data.playerId) || world.getCharacterReadSnapshot(data.playerId).kind !== 'player')) throw Error('플레이어 참조 오류');
  if (!Number.isSafeInteger(data.policy.enterMinutes) || data.policy.enterMinutes < 0 || !Number.isSafeInteger(data.policy.leaveMinutes) || data.policy.leaveMinutes < data.policy.enterMinutes || !Number.isSafeInteger(data.policy.holdMinutes) || data.policy.holdMinutes < 1) throw Error('LOD 정책 오류');
  for (const s of data.actors) {
   if (!actors.has(s.characterId) || ![0,1,2,3].includes(s.tier) || s.forcedTier !== undefined && ![0,1,2,3].includes(s.forcedTier) || !['background','persistent','significant','critical'].includes(s.importance) || typeof s.persistent !== 'boolean' || !world.catalog.nodes.has(s.regionId)) throw Error('LOD 인물 참조 오류');
   if (s.tier > 1 && (isAcademic(s.characterId) || regionOf(world.getCharacterReadSnapshot(s.characterId).location!.currentLocationId) === 'academy') || s.tier === 3 && s.importance !== 'background') throw Error('LOD 최소 정밀도 오류');
   for (const at of [s.activatedAt, s.lastCoarseAt, s.lastDetailedAt]) if (at !== undefined) {assertAbsoluteMinute(at); if (at > now()) throw Error('미래 LOD 갱신 시각');}
  }
  if (new Set(data.regions.map(r => r.id)).size !== data.regions.length) throw Error('중복 지역');
  const residentIds = new Set<string>();
  for (const r of data.regions) {
   if (r.id !== r.rootLocationId || !world.catalog.nodes.has(r.rootLocationId) || r.forcedActive !== undefined && typeof r.forcedActive !== 'boolean' || r.totalPopulation !== undefined && (!Number.isSafeInteger(r.totalPopulation) || r.totalPopulation < Object.keys(r.residents).length)) throw Error('지역·인구 오류');
   for (const id of Object.values(r.residents)) {if (!actors.has(id) || residentIds.has(id)) throw Error('주민 중복·참조 오류'); residentIds.add(id);}
  }
  for (const p of data.pins) {assertAbsoluteMinute(p.until); if (!actors.has(p.characterId) || p.until <= now()) throw Error('정밀 예약 오류');}
  for (const t of data.transitions) {assertAbsoluteMinute(t.at); if (t.at > now() || !actors.has(t.characterId) || ![0,1,2,3].includes(t.from) || ![0,1,2,3].includes(t.to)) throw Error('LOD 전환 이력 오류');}
  if (data.transitions.length > 500 || (data.commands?.length ?? 0) > 200) throw Error('LOD 이력 한도 오류');
  for (const c of data.commands ?? []) {assertAbsoluteMinute(c.at); if (c.at > now() || typeof c.subjectId !== 'string' || typeof c.message !== 'string') throw Error('LOD 명령 이력 오류');}
  actors.clear(); data.actors.forEach(s => actors.set(s.characterId, s)); regions.clear(); data.regions.forEach(r => regions.set(r.id,r));
  pins.clear(); data.pins.forEach(p => pins.set(p.characterId, {until:p.until, reason:p.reason}));
  playerId = data.playerId; enabled = data.enabled; policy = data.policy; transitions = data.transitions; commands = data.commands ?? []; dirty.clear(); reachKey = ''; previousImportant = participantIds();
  holds.clear(); for (const s of actors.values()) if (s.tier === 0 && s.activatedAt + policy.holdMinutes > now()) holds.set(s.characterId,s.activatedAt + policy.holdMinutes);
  for (const id of previousImportant) if (actors.has(id) && getTier(id) > 0) dirty.add(id);
  notify();
 }
 const connect = () => {
  if (!stop) {
   const timeline = clock.subscribeTimeline({id:'lod',priority: 5, nextEventTime, processAt: process, onSeek: () => {pins.clear(); holds.clear(); transitions=[]; commands=[]; for (const s of actors.values()) {s.activatedAt = now(); s.lastDetailedAt = undefined; s.lastCoarseAt = undefined; if (s.tier === 0) holds.set(s.characterId,now()+policy.holdMinutes);} allDirty(); process();}});
   const actor = world.subscribeActors(e => {register(e.id); if (e.id === playerId) allDirty(); else dirty.add(e.id); if (!clock.isProcessingTimeline()) process();});
   const execution = schedule.subscribeExecution(id => {dirty.add(id); const s = actors.get(id); if (s) {if (s.tier === 0) s.lastDetailedAt = now(); else s.lastCoarseAt = now();}});
   const changes = clock.subscribeChanges(() => notify());
   stop = () => {timeline(); actor(); execution(); changes(); stop = undefined;};
   if (!options.initial) {allDirty(); process();} else if (dirty.size) process();
  } return () => stop?.();
 };
 const engine = {
  getTier, save, load, connect, requestDetailed, subscribe: (fn: () => void) => {listeners.add(fn); return () => {listeners.delete(fn);};}, getSnapshot: () => revision,
  getActor: (id: string) => {const s = actors.get(id); if (!s) throw Error('LOD 인물 없음'); return structuredClone(s);},
  getRegions: () => [...regions.values()].map(r => ({...structuredClone(r), active: [...actors.values()].some(s => s.regionId === r.id && s.tier === 0), individualPopulation: Object.values(r.residents).length})),
  getTransitions: () => structuredClone(transitions),
  getCommands: () => structuredClone(commands),
  getStatistics: () => ({counts: [0,1,2,3].map(t => [...actors.values()].filter(s => s.tier === t).length), persistent: [...actors.values()].filter(s => s.persistent).length, population: [...regions.values()].reduce((n,r) => n + (r.totalPopulation ?? 0),0), playerId}),
  setEnabled: (value: boolean) => {enabled = value; command('world',value?'LOD 정책 활성':'전체 정밀 정책'); allDirty(); process();},
  setPlayer: (id: string) => {if (world.getCharacterReadSnapshot(id).kind !== 'player') throw Error('플레이어 캐릭터 필요'); playerId = id; allDirty(); process();},
  forceTier: (id: string, tier?: SimulationTier) => {
   process();
   const s = actors.get(id); if (!s || tier !== undefined && ![0,1,2,3].includes(tier)) throw Error('LOD 명령 오류');
   if (tier !== undefined && tier > 0 && safety(id)) throw Error('진행 중 이동·공동 활동·중요 사건은 정밀도를 낮출 수 없습니다.');
   if (tier !== undefined && tier > 1 && (s.regionId === 'academy' || isAcademic(id))) throw Error('아카데미 NPC는 최소 LOD 1을 유지합니다.');
   if (tier === 3 && s.importance !== 'background') throw Error('지속·주요 NPC는 최소 LOD 2를 유지합니다.');
   s.forcedTier = tier; command(id,`정밀도 명령: ${tier ?? '자동'}`); dirty.add(id); process();
  },
  promote: (id: string, importance: NpcImportance) => {const s = actors.get(id); if (!s || !['background','persistent','significant','critical'].includes(importance)) throw Error('중요도 오류'); s.importance = importance; s.persistent = true; dirty.add(id); process();},
  setRegionActive: (id: string, value?: boolean) => {const r = regions.get(id); if (!r) throw Error('지역 없음'); r.forcedActive = value; command(id,value?'지역 정밀 활성':'지역 자동 반경'); allDirty(); process();},
  definePopulation: (locationId: string, total: number) => {
   const place = world.catalog.getLocation(locationId), r = regions.get(locationId);
   if (!Number.isSafeInteger(total) || total < Object.keys(r?.residents ?? {}).length) throw Error('인구 범위 오류');
   regions.set(locationId, {...r, id: locationId, rootLocationId: locationId, name: place.name, residents: r?.residents ?? {}, totalPopulation: total}); allDirty(); process();
  },
  materializeResident: (regionId: string, slot: string, factory: (seed: string, id: string) => Character) => {
   const region = regions.get(regionId); if (!region || !slot || ['__proto__','constructor','prototype'].includes(slot) || region.totalPopulation === undefined) throw Error('정의된 인구·주민 슬롯 필요');
   const existing = region.residents[slot]; if (existing) return world.getCharacter(existing);
   if (Object.keys(region.residents).length >= region.totalPopulation) throw Error('집계 인구를 초과한 주민 생성');
   const id = `resident/${encodeURIComponent(regionId)}/${encodeURIComponent(slot)}`;
   if (world.hasCharacter(id)) throw Error('주민 ID 충돌');
   const c = factory(`${seed}/${regionId}/${slot}`, id);
   if (c.id !== id || c.kind === 'player' || !c.location || regionOf(c.location.currentLocationId) !== regionId) throw Error('주민 생성 결과 신원·지역 오류');
   world.registerCharacter(c); ai.interactions?.graph.setCharacterIds(world.getCharacters().map(c => c.id)); region.residents[slot] = id; register(id); ai.syncCharacters();
   const s = actors.get(id)!; s.importance = 'background'; s.persistent = true; dirty.add(id); process(); return world.getCharacter(id);
  },
 };
 if (options.initial) load(options.initial);
 ai.attachSimulation(engine); schedule.setSimulationPolicy(engine);
 if (options.autoConnect !== false) connect();
 return engine;
}
export type NpcSimulation = SimulationController;
