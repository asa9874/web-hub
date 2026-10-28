export type FeatureStatus='implemented'|'partial'|'not_implemented'|'planned'|'needs_verification';
export type VerificationStatus='passed'|'failed'|'not_run'|'manual';
export interface FeatureItem {id:string;name:string;description:string;status:FeatureStatus;verificationStatus:VerificationStatus;evidencePaths:string[];notes:string[];verificationScope:'recorded'|'current'|'none'}
export interface FeatureVersion {version:string;title:string;summary:string;origin:'code'|'existing-doc'|'proposal';items:FeatureItem[]}
export interface SystemFeatureNote {id:string;name:string;category:string;description:string;currentVersion?:string;targetVersion?:string;dependencies:string[];versions:FeatureVersion[]}
