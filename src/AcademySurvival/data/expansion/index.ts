import {martialTraits} from './traitsMartial';
import {magicTraits} from './traitsMagic';
import {bodyMindTraits} from './traitsBodyMind';
import {intellectTraits} from './traitsIntellect';
import {communityTraits} from './traitsCommunity';
import {valuesLiminalTraits} from './traitsValuesLiminal';
import {combatGifts} from './giftsCombat';
import {survivalGifts} from './giftsSurvival';
import {informationGifts} from './giftsInformation';
import {relationGifts} from './giftsRelations';
import {fortuneGifts} from './giftsFortune';
import {spaceGifts} from './giftsSpace';
import {memoryGifts} from './giftsMemory';
import {omenGifts} from './giftsOmen';
import {societyGifts} from './giftsSociety';
import {dailyGifts} from './giftsDaily';
import {evolve,flag} from '../factories';
export const expansionTraits=[...martialTraits,...magicTraits,...bodyMindTraits,...intellectTraits,...communityTraits,...valuesLiminalTraits];
export const expansionGifts=[...combatGifts,...survivalGifts,...informationGifts,...relationGifts,...fortuneGifts,...spaceGifts,...memoryGifts,...omenGifts,...societyGifts,...dailyGifts];

// Different skills are independent. Only these authored development paths are exclusive.
// Several paths transform a drawback through experience rather than inflate a numeric tier.
const paths=[
 ['count-exits','rear-guard-map'],['supply-tally','wounded-count'],['sheathe-safety','practice-restraint'],
 ['clay-memory','stone-grain'],['ink-viscosity','composite-lattice'],['ritual-clean','ritual-abort'],['name-transcription','echo-counter'],
 ['motion-sickness','sea-legs'],['spell-stammer','still-casting'],['performance-freeze','stage-routine'],['envy-spiral','competitive-spark'],
 ['crisis-narrow','wide-crisis'],['certainty-hunger','question-stamina'],['source-margin','citation-courage'],['sample-suspicion','laboratory-blind'],
 ['spare-part','failure-proofing'],
 ['complaint-desk','hard-news'],['new-student-guide','rotation-leader'],['deadline-sprinter','early-draft'],['overpack','light-pack'],
 ['ritual-procrastination','portable-routine'],['help-delay','ask-early'],['doom-reading','news-boundary'],
 ['rule-rigidity','exception-mercy'],['truth-bluntness','truth-kindness'],['martyr-reflex','shared-risk'],['romantic-danger','ordinary-bravery'],
 ['curse-hygiene','unholy-firstaid'],['relic-warmth','artifact-refusal'],
].filter(path=>path.length>1);
const byId=new Map(expansionTraits.map(t=>[t.id,t]));
for(const path of paths){for(let i=0;i<path.length-1;i++){
 const from=byId.get('trait-x-'+path[i])!,to=byId.get('trait-x-'+path[i+1])!;
 if(!from||!to)throw new Error('Missing authored evolution '+path.join(' → '));
 to.tier=Math.max(to.tier,from.tier+1);to.birth={...to.birth,eligible:false};
 const group='development-'+path[0];from.exclusiveGroup=group;to.exclusiveGroup=group;
 from.evolutions.push(evolve(to.id,flag('development-'+path[i+1]),to.acquisitions[0].note,.5));
}}
export const EXPANSION_BATCH={traits:300,gifts:300,worldClassAdded:0} as const;
