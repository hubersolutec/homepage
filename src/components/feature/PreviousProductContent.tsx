import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import mes from '../../data/previous-agentic-mes.html?raw';
import faberem from '../../data/previous-faberem.html?raw';
import './PreviousProductContent.css';
export default function PreviousProductContent({ name }: { name: string }) {
 const navigate=useNavigate(); const [screen,setScreen]=useState<string|null>(null);const dialog=useRef<HTMLDialogElement>(null);
 useEffect(()=>{if(screen)dialog.current?.showModal();},[screen]);
 const handle=(event:React.MouseEvent<HTMLDivElement>)=>{
  const target=event.target as Element;const button=target.closest<HTMLElement>('[data-open-screen]');
  if(button){setScreen(button.dataset.openScreen||null);return;}
  const link=target.closest<HTMLAnchorElement>('a');if(!link)return;
  const href=link.getAttribute('href')||'';
  if(event.metaKey||event.ctrlKey||event.shiftKey||event.altKey)return;
  if(href.startsWith('#previous-')){event.preventDefault();document.getElementById(href.slice(1))?.scrollIntoView({behavior:'smooth',block:'start'});}
  else if(href.startsWith('/')){event.preventDefault();navigate(href);}
 };
 return <>
  <section aria-label={`${name} 상세 기능과 도입 구성`} className="border-t border-slate-200">
   <div className="container mx-auto px-4 py-12"><p className="text-sm font-bold text-blue-700">상세 기능과 도입 구성</p><h2 className="mt-3 text-3xl font-bold">{name}의 업무와 기술을 자세히 살펴보세요.</h2></div>
   <div className="previous-product-content" onClick={handle} dangerouslySetInnerHTML={{__html:name==='FABEREM'?faberem:mes}} />
  </section>
  <dialog ref={dialog} onClose={()=>setScreen(null)} className="fixed inset-0 m-auto max-w-[95vw] max-h-[90vh] rounded-xl border border-slate-200 p-5 backdrop:bg-slate-950/70">
   <form method="dialog" className="flex justify-end mb-3"><button className="rounded px-4 py-2 bg-slate-100 font-bold" aria-label="제품 화면 확대 닫기">닫기 ×</button></form>
   {screen&&<img src={screen} alt={`${name} 제품 화면 확대`} className="max-w-full max-h-[75vh] object-contain" />}
  </dialog>
 </>;
}
