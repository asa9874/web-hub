import type { LoreEntry, TocGroup } from './bestiaryTypes';
import type { Card } from '../types';
import { CARD_LIBRARY } from './cardLibrary';

function rarityLabel(r: string): string {
  if (r === 'common')   return '일반';
  if (r === 'uncommon') return '고급';
  if (r === 'rare')     return '희귀';
  return r;
}

function typeLabel(t: string): string {
  if (t === 'attack') return '공격';
  if (t === 'skill')  return '기술';
  if (t === 'power')  return '파워';
  return t;
}

export function cardToLoreEntry(card: Card): LoreEntry {
  return {
    id: `card_${card.id}`,
    title: card.name,
    subtitle: `${rarityLabel(card.rarity)} · ${typeLabel(card.cardType)} · 비용 ${card.cost}`,
    category: 'card',
    quote: card.trivia,
    lore: card.originLore,
    imagePath: card.artPath,
    cardStats: {
      cost: card.cost,
      cardType: card.cardType,
      rarity: card.rarity,
      description: card.description,
    },
  };
}

export function buildCardTocGroup(): TocGroup {
  const attacks = CARD_LIBRARY.filter(c => c.cardType === 'attack');
  const skills  = CARD_LIBRARY.filter(c => c.cardType === 'skill');
  const powers  = CARD_LIBRARY.filter(c => c.cardType === 'power');

  return {
    header: '카드 도감',
    sub: [
      { label: '⚔ 공격 카드', entries: attacks.map(cardToLoreEntry) },
      { label: '✦ 기술 카드', entries: skills.map(cardToLoreEntry) },
      { label: '◈ 파워 카드', entries: powers.map(cardToLoreEntry) },
    ],
  };
}
