import {useEffect,useId,useRef} from 'react';
import type {ReactNode} from 'react';
import {createPortal} from 'react-dom';

/** Controlled, route-independent shell: the same dialog can be used over gameplay. */
export default function DetailDialog({title,onClose,children,wide=false}:{title:string;onClose:()=>void;children:ReactNode;wide?:boolean}){
 const dialog=useRef<HTMLDialogElement>(null),heading=useId(),close=useRef(onClose);
 useEffect(()=>{dialog.current?.querySelector('.ac-dialog-content')?.scrollTo(0,0);},[title]);
 useEffect(()=>{close.current=onClose;},[onClose]);
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
 return createPortal(<dialog ref={dialog} className={`ac-page ac-detail-dialog ${wide?'ac-dialog-wide':''}`} aria-labelledby={heading} onClick={event=>{if(event.target===event.currentTarget){const rect=event.currentTarget.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)onClose();}}}>
  <header className="ac-dialog-toolbar"><span id={heading}>{title}</span><button type="button" autoFocus onClick={onClose} aria-label="상세 닫기">닫기 <span aria-hidden="true">×</span></button></header>
  <div className="ac-dialog-content">{children}</div>
 </dialog>,document.body);
}
