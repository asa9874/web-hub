export interface CulturalProfile {
 version:'culture-life-v1';heritageCultureIds:string[];currentCultureIds:string[];
 familiarityByCulture:Record<string,number>;preferences:Record<string,number>;
 lifestyleTags:string[];lastPracticeAt:Record<string,number>;experiences:Record<string,number>;
}
export interface CulturalContent {id:string;name:string;kind:'food'|'clothing'|'hobby'|'gift';cultureIds:string[];description:string;tags:string[];implementation:'interaction_content'|'lore_only';dietaryStatus?:'unspecified'}
export interface CultureDetail {id:string;name:string;regionIds:string[];associatedRaceIds:string[];history:string;dailyLife:string;greeting:string;etiquette:string;giftMeaning:string;family:string;education:string;diversity:string;archetypes:[string,string];namingStyle:string;languageStatus:'unspecified'}
export interface CulturalPractice {id:string;name:string;cultureIds:string[];description:string;context:string;meaning:string;activityId:string;locationIds:string[];minutes:number;contentId?:string;topic:string;privacy:'public'|'personal';responseRule:string;eventId:string}
