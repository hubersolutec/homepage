import React, { useState } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

export default function ContactPage() {
  const [form, setForm] = useState({ type:new URLSearchParams(window.location.search).get('solution') === 'FABEREM' ? 'FABEREM' : 'AutoPlan', company:'', name:'', email:'', phone:'', message:'' });
  const change = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) => setForm({...form,[e.target.name]:e.target.value});
  const [sending,setSending] = useState(false);
  const [status,setStatus] = useState({message:'',ok:false});
  const submit = async (e:React.FormEvent) => {
    e.preventDefault(); if(sending)return;
    setSending(true);setStatus({message:'',ok:false});
    try {
      const response=await fetch('/api/contact',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(form)});
      const result=await response.json();
      setStatus({message:result.message,ok:response.ok});
      if(response.ok)setForm({...form,message:''});
    }catch{setStatus({message:'전송하지 못했습니다. 잠시 후 다시 시도하거나 이메일로 문의해 주세요.',ok:false});}
    finally{setSending(false);}
  };
  return <div className="min-h-screen bg-white"><Header/><main>
    <section className="border-b border-slate-200 pt-32 pb-16 md:pt-40 md:pb-24"><div className="container mx-auto px-4"><div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end"><div><p className="mb-4 text-sm font-extrabold uppercase tracking-[0.18em] text-blue-700">Contact</p><h1 className="text-[38px] font-extrabold text-slate-950 md:text-[52px]"><span className="block md:whitespace-nowrap">현장의 문제부터</span><span className="block md:whitespace-nowrap">말씀해 주세요.</span></h1></div><div className="border-l-2 border-blue-700 pl-6 md:pl-8"><h2 className="mb-4 text-2xl font-extrabold md:text-3xl">기존 시스템과 업무환경을 먼저 확인합니다.</h2><p className="leading-8 text-slate-600">솔루션 도입 여부를 먼저 정하기보다 현재 사용 중인 시스템, 계획 방식과 현장 문제를 확인한 뒤 적용 가능한 범위를 검토합니다.</p></div></div></div></section>
    <section className="bg-slate-50 py-20 md:py-24"><div className="container mx-auto px-4"><div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
      <aside className="h-fit rounded-lg bg-slate-950 p-8 text-white"><p className="text-xs font-extrabold uppercase tracking-[0.16em] text-blue-300">Direct Contact</p><h2 className="mt-3 text-2xl font-extrabold">후버솔루텍</h2><div className="mt-8 space-y-6 text-sm"><div><span className="block text-slate-500">담당자</span><strong className="mt-1 block">송재홍 이사</strong></div><div><span className="block text-slate-500">전화</span><a className="mt-1 block font-bold" href="tel:0269567966">02-6956-7966</a></div><div><span className="block text-slate-500">이메일</span><a className="mt-1 break-all font-bold" href="mailto:woghd44@hubesolutec.co.kr">woghd44@hubesolutec.co.kr</a></div></div><p className="mt-10 border-t border-slate-700 pt-6 text-xs leading-6 text-slate-400">문의 내용을 작성하면 담당자에게 이메일로 전달됩니다.</p></aside>
      <form onSubmit={submit} className="rounded-lg border border-slate-200 bg-white p-7 md:p-10"><div className="mb-8"><p className="text-sm font-bold text-blue-700">Inquiry</p><h2 className="mt-2 text-3xl font-extrabold text-slate-950">문의 내용 작성</h2></div><div className="grid gap-6 sm:grid-cols-2"><label className="text-sm font-bold text-slate-700">문의 유형<select name="type" value={form.type} onChange={change} className="mt-2 w-full rounded-md border border-slate-300 bg-white px-4 py-3 font-normal"><option>AutoPlan</option><option>Agentic MES</option><option>FABEREM</option><option>WiseCollab XAI</option><option>AI 협업솔루션</option><option>지속가능경영 솔루션</option><option>파트너십·기타</option></select></label><label className="text-sm font-bold text-slate-700">회사명<input required name="company" value={form.company} onChange={change} className="mt-2 w-full rounded-md border border-slate-300 px-4 py-3 font-normal" /></label><label className="text-sm font-bold text-slate-700">담당자명<input required name="name" value={form.name} onChange={change} className="mt-2 w-full rounded-md border border-slate-300 px-4 py-3 font-normal" /></label><label className="text-sm font-bold text-slate-700">이메일<input required type="email" name="email" value={form.email} onChange={change} className="mt-2 w-full rounded-md border border-slate-300 px-4 py-3 font-normal" /></label><label className="text-sm font-bold text-slate-700 sm:col-span-2">연락처<input required name="phone" value={form.phone} onChange={change} className="mt-2 w-full rounded-md border border-slate-300 px-4 py-3 font-normal" /></label><label className="text-sm font-bold text-slate-700 sm:col-span-2">문의 내용<textarea required rows={7} name="message" value={form.message} onChange={change} placeholder="현재 시스템, 생산계획 방식과 해결하고 싶은 문제를 적어주세요." className="mt-2 w-full resize-none rounded-md border border-slate-300 px-4 py-3 font-normal leading-7" /></label></div>{status.message&&<p role="status" className={`mt-6 rounded-md p-4 text-sm ${status.ok?'bg-green-50 text-green-800':'bg-red-50 text-red-800'}`}>{status.message}</p>}<button disabled={sending} className="disabled:opacity-60 mt-7 inline-flex items-center gap-2 rounded-md bg-blue-700 px-6 py-3.5 text-sm font-bold text-white hover:bg-blue-800">{sending?'전송 중…':'문의 전송하기'} <i className="ri-arrow-right-line"/></button></form>
    </div></div></section>
  </main><Footer/></div>;
}
