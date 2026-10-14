import type { GameMode } from './model';
export const PUPPET_POSES = {
  idle:{texture:'witch-puppet',height:198,joint:{u:.53,v:.79}},
  walk:{texture:'witch-walk',height:198,joint:{u:.59,v:.79}},
  walkAlt:{texture:'witch-walk-alt',height:198,joint:{u:.59,v:.79}},
  walkPass:{texture:'witch-walk-pass',height:198,joint:{u:.61,v:.79}},
  apex:{texture:'witch-apex',height:174,joint:{u:.63,v:.77}},
  land:{texture:'witch-land',height:190,joint:{u:.60,v:.79}},
  // Tucked legs shorten the cardboard silhouette; keep hat/head scale consistent.
  jump:{texture:'witch-jump',height:174,joint:{u:.63,v:.77}},
  fall:{texture:'witch-fall',height:174,joint:{u:.63,v:.77}},
} as const;
export function puppetPose(grounded:boolean,vx:number,mode:GameMode,stride=0,vy=0,landing=0,recovery=0) {
  if(!grounded&&Math.abs(vy)<90)return PUPPET_POSES.apex;
  if(!grounded)return vy>70?PUPPET_POSES.fall:PUPPET_POSES.jump;
  if(mode==='explore'&&(landing>.65||recovery>0))return PUPPET_POSES.land;
  const frames=[PUPPET_POSES.walk,PUPPET_POSES.walkPass,PUPPET_POSES.walkAlt,PUPPET_POSES.walkPass];
  return mode==='explore'&&Math.abs(vx)>20?frames[Math.floor(stride/29)%4]:PUPPET_POSES.idle;
}
