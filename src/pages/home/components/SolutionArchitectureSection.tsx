import { useState } from 'react';
import { Link } from 'react-router-dom';

const stages = [
  ['01','수주','주문·납기 데이터'],
  ['02','AI 인식','The Eye'],
  ['03','생산계획','The Brain'],
  ['04','현장실행','Field AI'],
  ['05','품질추적','The Flow'],
  ['06','출하','실적·이력 연결'],
];

const agents = [
  {name:'The Eye', role:'AI 수주 인식', icon:'ri-eye-line', tone:'violet'},
  {name:'The Brain', role:'AI 생산계획', icon:'ri-brain-line', tone:'emerald'},
  {name:'Field AI', role:'현장 실행', icon:'ri-robot-2-line', tone:'blue'},
  {name:'The Flow', role:'품질 이력 관리', icon:'ri-node-tree', tone:'amber'},
];

const tones:Record<string,string> = {
  violet:'border-violet-200 bg-violet-50 text-violet-700',
  emerald:'border-emerald-200 bg-emerald-50 text-emerald-700',
  blue:'border-blue-200 bg-blue-50 text-blue-700',
  amber:'border-amber-200 bg-amber-50 text-amber-700',
};

export function AutoPlanWorkflow(){
  return <div className="grid gap-3 md:grid-cols-3 xl:grid-cols-6">
    {stages.map(([no,title,caption],index)=><div key={no} className="relative rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between"><span className="text-xs font-black text-blue-700">{no}</span>{index<5&&<i className="ri-arrow-right-line hidden text-blue-400 xl:block"/>}</div>
      <strong className="mt-5 block text-[17px] leading-snug text-slate-950">{title}</strong>
      <span className="mt-2 block text-xs leading-5 text-slate-500">{caption}</span>
    </div>)}
  </div>;
}

export function AutoPlanAgentMap(){
  return <div>
    <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">{agents.map((agent,index)=><article key={agent.name} className={`rounded-xl border p-5 ${tones[agent.tone]}`}>
      <div className="flex items-center justify-between"><i className={`${agent.icon} text-2xl`}/><span className="text-xs font-black">0{index+1}</span></div>
      <strong className="mt-6 block text-xl leading-none">{agent.name}</strong><span className="mt-2 block text-sm font-bold">{agent.role}</span>
    </article>)}</div>
    <div className="mx-auto mt-4 max-w-2xl rounded-xl border-2 border-blue-700 bg-blue-700 px-6 py-4 text-center text-white shadow-lg shadow-blue-900/10"><strong className="block text-lg">WiseCollab Core AI Orchestrator</strong><span className="mt-1 block text-xs text-blue-100">계획·실행·품질 데이터를 통합하고 Agent 간 업무를 연결</span></div>
  </div>;
}

export function AutoPlanArchitecture(){
  const sources=['ERP','MES','PLC·IoT','WMS'];
  const outputs=['생산계획','운영 분석','LOT 추적','경영 대시보드'];
  return <div className="grid items-stretch gap-4 lg:grid-cols-[1fr_0.8fr_1.35fr_0.8fr_1fr]">
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-5"><span className="text-xs font-black uppercase tracking-wider text-slate-500">Data Source</span><div className="mt-4 grid grid-cols-2 gap-2">{sources.map(x=><span key={x} className="rounded-lg border border-slate-200 bg-white px-3 py-3 text-center text-sm font-bold">{x}</span>)}</div></div>
    <div className="flex items-center justify-center rounded-xl border border-blue-200 bg-blue-50 p-5 text-center"><div><i className="ri-links-line text-3xl text-blue-700"/><strong className="mt-3 block text-sm">Integration Gateway</strong><span className="mt-1 block text-xs leading-5 text-slate-500">API · Event Bus<br/>Read-only DB</span></div></div>
    <div className="flex items-center justify-center rounded-xl bg-[#071a33] p-7 text-center text-white shadow-xl"><div><span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-600"><i className="ri-git-merge-line text-2xl"/></span><strong className="mt-4 block text-xl">Core AI Orchestrator</strong><span className="mt-2 block text-xs leading-5 text-slate-300">4대 Agent 통합 운영<br/>권한·감사로그·Fail-safe</span></div></div>
    <div className="flex items-center justify-center rounded-xl border border-emerald-200 bg-emerald-50 p-5 text-center"><div><i className="ri-shield-check-line text-3xl text-emerald-700"/><strong className="mt-3 block text-sm">Secure Operation</strong><span className="mt-1 block text-xs leading-5 text-slate-500">On-premise 가능<br/>원천시스템 보호</span></div></div>
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-5"><span className="text-xs font-black uppercase tracking-wider text-slate-500">Operational Output</span><div className="mt-4 grid grid-cols-2 gap-2">{outputs.map(x=><span key={x} className="rounded-lg border border-slate-200 bg-white px-3 py-3 text-center text-sm font-bold">{x}</span>)}</div></div>
  </div>;
}

function FaberemWorkflow(){return <div className="grid gap-3 md:grid-cols-5">{['설계·모델','입력 조건','해석 실행','결과·검토','이력·재사용'].map((name,i)=><div className="rounded-xl border border-blue-200 bg-blue-50 p-5" key={name}><span className="text-xs font-bold text-blue-700">0{i+1}</span><strong className="mt-4 block text-lg text-slate-900">{name}</strong></div>)}</div>}
const tabs=[
 {label:'AutoPlan 업무 흐름',title:'수주부터 출하까지 끊김 없는 운영',body:'수주·계획·실적·품질 데이터를 하나의 제조 운영 체계로 연결합니다.',render:<AutoPlanWorkflow/>,image:'/assets/approved-screens/autoplan-planning.png',href:'/solutions/auto-plan',product:'AutoPlan',screenTitle:'생산계획과 실행 흐름을 실제 화면에서 확인',screenBody:'설비별 작업 일정과 계획 상태를 확인하고 현장 실행에 연결합니다.'},
 {label:'FABEREM 업무 흐름',title:'설계 조건부터 결과 검토와 재사용까지',body:'모델·조건·실행·결과와 판단 근거를 해석 업무 이력으로 연결합니다.',render:<FaberemWorkflow/>,image:'/assets/approved-screens/faberem-schematic-anonymized.png',href:'/solutions/faberem',product:'FABEREM',screenTitle:'해석 구성과 데이터 연결을 실제 화면에서 확인',screenBody:'모델과 해석 단계의 관계를 확인하고 실행 결과와 검토 이력을 관리합니다.'},
 {label:'기존 시스템 연계',title:'필요한 데이터와 업무부터 단계적으로 연결',body:'AutoPlan은 ERP·MES 데이터를 연결하고, FABEREM은 기존 해석 도구와 실행 절차를 업무 공간에 연결합니다.',render:<AutoPlanArchitecture/>,image:'/assets/approved-screens/autoplan-planning.png',href:'/contact',product:'적용 상담',screenTitle:'현재 시스템과 업무 방식에 맞는 적용',screenBody:'제조 운영과 해석 업무의 적용 범위, 연계 대상과 실행 환경을 확인합니다.'},
];

export default function SolutionArchitectureSection(){
  const [active,setActive]=useState(0); const tab=tabs[active];
  return <section className="border-y border-slate-200 bg-slate-50 py-20 md:py-28"><div className="container mx-auto px-4">
    <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end"><div><p className="mb-3 text-sm font-black uppercase tracking-[0.16em] text-blue-700">Connected Workflows</p><h2 className="max-w-xl text-[32px] font-extrabold leading-[1.22] tracking-[-0.025em] text-slate-950 md:text-[44px]">화면과 데이터 흐름을<br className="hidden sm:block"/> 하나의 구조로 설명합니다.</h2></div><div><p className="max-w-2xl text-base leading-8 text-slate-600">AutoPlan의 제조 운영 흐름과 FABEREM의 해석 업무 흐름을 실제 화면과 함께 살펴보세요.</p><div className="mt-5 flex flex-wrap gap-2">{tabs.map((item,index)=><button key={item.label} onClick={()=>setActive(index)} className={`rounded-full px-5 py-2.5 text-sm font-bold transition ${active===index?'bg-blue-700 text-white shadow-md':'border border-slate-300 bg-white text-slate-700 hover:border-blue-500'}`}>{item.label}</button>)}</div></div></div>
    <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
      <div className="grid border-b border-slate-200 lg:grid-cols-[1.15fr_0.85fr]"><div className="flex min-h-[330px] items-center bg-slate-100 p-4 md:p-7"><img src={tab.image} alt={`${tab.product} 실제 업무 화면`} className="h-full max-h-[520px] w-full rounded-lg border border-slate-200 bg-white object-contain object-top shadow-sm"/></div><div className="flex flex-col justify-center bg-[#071a33] p-8 text-white md:p-10"><span className="text-xs font-black uppercase tracking-[0.16em] text-blue-300">Actual Operation</span><h3 className="mt-4 text-2xl font-extrabold leading-[1.25] md:text-3xl">{tab.screenTitle}</h3><p className="mt-4 text-sm leading-7 text-slate-300">{tab.screenBody}</p><Link to={tab.href} className="mt-7 inline-flex w-fit items-center gap-2 text-sm font-bold text-blue-300">{tab.product} 자세히 보기 <i className="ri-arrow-right-line"/></Link></div></div>
      <div key={active} className="solution-screen-enter p-6 md:p-9"><div className="mb-7"><span className="text-xs font-black uppercase tracking-[0.14em] text-blue-700">{tab.label}</span><h3 className="mt-2 text-2xl font-extrabold leading-[1.25] tracking-[-0.02em] text-slate-950">{tab.title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{tab.body}</p></div>{tab.render}</div>
    </div>
  </div></section>;
}
