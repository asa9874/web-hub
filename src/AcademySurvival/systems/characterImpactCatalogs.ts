import {ORGANIZATIONS} from '../data/social/config';
import {traitRegistry,giftRegistry} from './registry';
import {positionRegistry,titleRegistry} from './socialRules';
import {proficiencyRegistry} from './knowledgeRegistry';
import type {CharacterImpactCatalogs} from '../types/characterImpact';
export const characterImpactCatalogs:CharacterImpactCatalogs={traits:traitRegistry,gifts:giftRegistry,positions:positionRegistry,titles:titleRegistry,proficiencies:proficiencyRegistry,organizations:new Set(ORGANIZATIONS.map(o=>o.id))};
