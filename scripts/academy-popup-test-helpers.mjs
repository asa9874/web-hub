/** Legacy catalog scenarios now explicitly dismiss the modal before using filters/tabs. */
export function popupActions(page){
 let last;
 return {
  close:async()=>{const button=page.getByRole('button',{name:'상세 닫기',exact:true});if(await button.count()){const url=new URL(page.url());last={kind:url.searchParams.get('kind'),item:url.searchParams.get('item')};await button.click();await page.getByRole('dialog').waitFor({state:'detached'});}},
  reopen:async()=>{if(!last?.item)throw Error('No previously opened catalog entry');const url=new URL(page.url());url.searchParams.set('kind',last.kind);url.searchParams.set('item',last.item);await page.goto(url.href);await page.getByRole('dialog').waitFor();},
 };
}
