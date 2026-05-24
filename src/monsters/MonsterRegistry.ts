import type { TocGroup } from '../data/bestiaryTypes';

import { MemoryGhost } from './Act1/Normal/MemoryGhost';
import { DarkKnight } from './Act1/Normal/DarkKnight';
import { ShadowCat } from './Act1/Normal/ShadowCat';
import { StarAbsorber } from './Act1/Normal/StarAbsorber';
import { MirrorPhantom } from './Act1/Normal/MirrorPhantom';
import { CorruptedKnight } from './Act1/Elite/CorruptedKnight';
import { DarkPriest } from './Act1/Elite/DarkPriest';
import { AbyssBeast } from './Act1/Elite/AbyssBeast';
import { DarkLord } from './Act1/Boss/DarkLord';
import { StarDestroyer } from './Act1/Boss/StarDestroyer';
import { MemoryKing } from './Act1/Boss/MemoryKing';

import { AbyssGuard } from './Act2/Normal/AbyssGuard';
import { KnowledgeCollector } from './Act2/Normal/KnowledgeCollector';
import { TwistedDoll } from './Act2/Normal/TwistedDoll';
import { EchoDemon } from './Act2/Normal/EchoDemon';
import { BookSpirit } from './Act2/Normal/BookSpirit';
import { TowerWatcher } from './Act2/Elite/TowerWatcher';
import { FearCrystal } from './Act2/Elite/FearCrystal';
import { AbyssMage } from './Act2/Elite/AbyssMage';
import { ShadowTitan } from './Act2/Boss/ShadowTitan';
import { FearQueen } from './Act2/Boss/FearQueen';
import { TowerMaster } from './Act2/Boss/TowerMaster';

import { TimeWarden } from './Act3/Normal/TimeWarden';
import { AncientGuardDoll } from './Act3/Normal/AncientGuardDoll';
import { StarJudge } from './Act3/Normal/StarJudge';
import { DimensionRift } from './Act3/Normal/DimensionRift';
import { ConstellationFragment } from './Act3/Normal/ConstellationFragment';
import { CosmicWarden } from './Act3/Elite/CosmicWarden';
import { ConstellationGuardian } from './Act3/Elite/ConstellationGuardian';
import { TimeRuler } from './Act3/Elite/TimeRuler';
import { StarHeartGuardian } from './Act3/Boss/StarHeartGuardian';
import { LordOfTime } from './Act3/Boss/LordOfTime';
import { AncientOne } from './Act3/Boss/AncientOne';

/** 모든 몬스터 클래스를 인스턴스화해 도감 UI용 TocGroup을 반환. 몬스터 클래스가 SSOT. */
export function buildMonsterTocGroup(): TocGroup {
  return {
    header: '◆ 몬스터 도감',
    sub: [
      {
        label: '  ▸ Act 1 — 달빛이 닿지 않는 도시',
        sub: [
          {
            label: '    일반 몬스터',
            entries: [
              new MemoryGhost().toBestiaryEntry('a1n1', 'normal_1'),
              new DarkKnight().toBestiaryEntry('a1n2', 'normal_1'),
              new ShadowCat().toBestiaryEntry('a1n3', 'normal_1'),
              new StarAbsorber().toBestiaryEntry('a1n4', 'normal_1'),
              new MirrorPhantom().toBestiaryEntry('a1n5', 'normal_1'),
            ],
          },
          {
            label: '    엘리트',
            entries: [
              new CorruptedKnight().toBestiaryEntry('a1e1', 'elite_1'),
              new DarkPriest().toBestiaryEntry('a1e2', 'elite_1'),
              new AbyssBeast().toBestiaryEntry('a1e3', 'elite_1'),
            ],
          },
          {
            label: '    보스',
            entries: [
              new DarkLord().toBestiaryEntry('a1b1', 'boss_1'),
              new StarDestroyer().toBestiaryEntry('a1b2', 'boss_1'),
              new MemoryKing().toBestiaryEntry('a1b3', 'boss_1'),
            ],
          },
        ],
      },
      {
        label: '  ▸ Act 2 — 심연이 삼킨 탑',
        sub: [
          {
            label: '    일반 몬스터',
            entries: [
              new AbyssGuard().toBestiaryEntry('a2n1', 'normal_2'),
              new KnowledgeCollector().toBestiaryEntry('a2n2', 'normal_2'),
              new TwistedDoll().toBestiaryEntry('a2n3', 'normal_2'),
              new EchoDemon().toBestiaryEntry('a2n4', 'normal_2'),
              new BookSpirit().toBestiaryEntry('a2n5', 'normal_2'),
            ],
          },
          {
            label: '    엘리트',
            entries: [
              new TowerWatcher().toBestiaryEntry('a2e1', 'elite_2'),
              new FearCrystal().toBestiaryEntry('a2e2', 'elite_2'),
              new AbyssMage().toBestiaryEntry('a2e3', 'elite_2'),
            ],
          },
          {
            label: '    보스',
            entries: [
              new ShadowTitan().toBestiaryEntry('a2b1', 'boss_2'),
              new FearQueen().toBestiaryEntry('a2b2', 'boss_2'),
              new TowerMaster().toBestiaryEntry('a2b3', 'boss_2'),
            ],
          },
        ],
      },
      {
        label: '  ▸ Act 3 — 고대의 전당',
        sub: [
          {
            label: '    일반 몬스터',
            entries: [
              new TimeWarden().toBestiaryEntry('a3n1', 'normal_3'),
              new AncientGuardDoll().toBestiaryEntry('a3n2', 'normal_3'),
              new StarJudge().toBestiaryEntry('a3n3', 'normal_3'),
              new DimensionRift().toBestiaryEntry('a3n4', 'normal_3'),
              new ConstellationFragment().toBestiaryEntry('a3n5', 'normal_3'),
            ],
          },
          {
            label: '    엘리트',
            entries: [
              new CosmicWarden().toBestiaryEntry('a3e1', 'elite_3'),
              new ConstellationGuardian().toBestiaryEntry('a3e2', 'elite_3'),
              new TimeRuler().toBestiaryEntry('a3e3', 'elite_3'),
            ],
          },
          {
            label: '    보스',
            entries: [
              new StarHeartGuardian().toBestiaryEntry('a3b1', 'boss_3'),
              new LordOfTime().toBestiaryEntry('a3b2', 'boss_3'),
              new AncientOne().toBestiaryEntry('a3b3', 'boss_3'),
            ],
          },
        ],
      },
    ],
  };
}
