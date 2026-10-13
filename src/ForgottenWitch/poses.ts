import type { GameMode } from './model';
export const PUPPET_POSES = {
  idle:{texture:'witch-puppet',height:198,joint:{u:.53,v:.79}},
  walk:{texture:'witch-walk',height:198,joint:{u:.59,v:.79}},
  // Tucked legs shorten the cardboard silhouette; keep hat/head scale consistent.
  jump:{texture:'witch-jump',height:174,joint:{u:.63,v:.77}},
} as const;
export function puppetPose(grounded:boolean,vx:number,mode:GameMode) {
  if(!grounded)return PUPPET_POSES.jump;
  return mode==='explore'&&Math.abs(vx)>20?PUPPET_POSES.walk:PUPPET_POSES.idle;
}
