import {useEffect,useId,useRef,useState} from 'react';
import type {ReactNode} from 'react';
import {createPortal} from 'react-dom';
import CatalogEntryDialog,{catalogEntryReference} from './CatalogEntryDialog';
import type {CatalogEntryReference} from './CatalogEntryDialog';

/** Controlled, route-independent shell: the same dialog can be used over gameplay. */
export default function DetailDialog({title,onClose,children,wide=false,dismissible=true,lockMessage='전투를 마치거나 자동 진행을 선택하세요'}:{title:string;onClose:()=>void;children:ReactNode;wide?:boolean;dismissible?:boolean;lockMessage?:string}){
 const [reference,setReference]=useState<CatalogEntryReference|null>(null);
 const dialog=useRef<HTMLDialogElement>(null),heading=useId(),close=useRef(onClose);
 useEffect(()=>{dialog.current?.querySelector('.ac-dialog-content')?.scrollTo(0,0);},[title]);
 useEffect(()=>{close.current=dismissible?onClose:()=>{};},[onClose,dismissible]);
 useEffect(()=>{
  const element=dialog.current!;
  const previous=document.activeElement instanceof HTMLElement?document.activeElement:null;
  const overflow=document.body.style.overflow;
  document.body.style.overflow='hidden';
  element.showModal();
  const cancel=(event:Event)=>{event.preventDefault();close.current();};
  element.addEventListener('cancel',cancel);
  return ()=>{element.removeEventListener('cancel',cancel);element.close();document.body.style.overflow=overflow;if(previous?.isConnected)previous.focus({preventScroll:true});};
 },[]);
 return createPortal(<dialog ref={dialog} className={`ac-page ac-detail-dialog ${wide?'ac-dialog-wide':''}`} aria-labelledby={heading} onClick={event=>{if(event.target===event.currentTarget){const rect=event.currentTarget.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)close.current();}}}>
  <header className="ac-dialog-toolbar"><span id={heading}>{title}</span>{dismissible?<button type="button" autoFocus onClick={onClose} aria-label="상세 닫기">닫기 <span aria-hidden="true">×</span></button>:<small>{lockMessage}</small>}</header>
  <div className="ac-dialog-content" onClickCapture={event=>{
   const link=(event.target as Element).closest<HTMLAnchorElement>('a[href]');
   if(!link)return;
   const url=new URL(link.href),next=catalogEntryReference(url.searchParams);
   if(url.origin===location.origin&&url.pathname===location.pathname&&next){event.preventDefault();event.stopPropagation();setReference(next);}
  }}>{children}</div>
  {reference&&<CatalogEntryDialog reference={reference} onNavigate={setReference} onClose={()=>setReference(null)}/>}
 </dialog>,document.body);
}
