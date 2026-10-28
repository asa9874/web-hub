/** Canon-preserving themes; they are not facts known by the player or completed character arcs. */
export const academyStoryRoots=[
 ['serena','SER-01','실력을 판단하는 기준'],['adelia','ADE-01','타인의 기대와 자신의 기준'],['lumiel','LUM-01','재능·노력·협력'],['lisette','LIS-01','장난과 친밀함의 경계'],['nia','NIA-01','패배와 재도전'],['camilla','CAM-01','규칙과 사정'],['miel','MIE-01','모두를 챙기는 부담'],['estelle','EST-01','이익과 신뢰'],['fiona','FIO-01','실패와 인정'],['noel','NOE-01','사실과 마음의 표현'],['brina','BRI-01','발명과 책임'],['elisia','ELI-01','도움과 자기 돌봄'],['thea','THE-01','모험과 안전'],['violetta','VIO-01','높은 기준과 타인의 재능'],['iris','IRI-01','불안과 자기 표현'],
].map(([owner,code,theme])=>({ownerId:'fixed-'+owner,code,definitionId:'personal/'+code.toLowerCase(),theme}));
