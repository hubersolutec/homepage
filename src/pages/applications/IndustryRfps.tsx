import { useState } from 'react';
import { Link } from 'react-router-dom';
import { industries } from '../../data/industryRfps';
const areas=[
 {name:'생산계획',reason:'다품종 주문과 긴급오더가 잦은 현장',links:[['WiseCollab AutoPlan','/solutions/auto-plan'],['WiseCollab XAI','/solutions/xai']]},
 {name:'제조운영',reason:'업무 변화에 시스템이 따라가야 하는 현장',links:[['Agentic MES','/solutions/agentic-mes']]},
 {name:'엔지니어링',reason:'반복 해석과 데이터 재사용이 필요한 팀',links:[['FABEREM','/solutions/faberem']]},
 {name:'기업협업',reason:'문서와 프로젝트가 함께 움직이는 조직',links:[['WiseCollab Standard','/solutions/standard'],['WiseCollab AI','/solutions/ai']]},
 {name:'지속가능경영',reason:'공급망 위험과 ESG 대응이 필요한 기업',links:[['Wise SCRM','/solutions/scrm']]},
];
export default function IndustryRfps(){
 const [selected,setSelected]=useState(industries[0].id);
 const industry=industries.find(x=>x.id===selected)!;
 return <section className="py-16 md:py-24"><div className="container mx-auto px-4">
  <p className="text-sm font-bold text-blue-700">산업·기관별 주요 과제와 적용 방향</p>
  <h2 className="mt-3 text-3xl font-bold md:text-4xl">산업·기관을 선택하고, 우리 현장의 과제를 찾아보세요.</h2>
  <p className="mt-5 max-w-3xl leading-8 text-slate-600">산업·기관별 업무 문제를 RFP 요구사항 예시로 정리하고, 생산계획·제조운영·엔지니어링·기업협업·지속가능경영의 다섯 가지 해결 접근에 연결했습니다.</p>
  <p className="mt-3 text-xs leading-6 text-slate-500">아래 RFP는 도입 검토를 위한 범용 요구사항 예시입니다. 실제 발주 공고·고객 구축사례·성과를 나타내지 않습니다.</p>
  <div className="mt-9 flex gap-2 overflow-x-auto pb-3" role="tablist" aria-label="산업·기관 선택">{industries.map(item=><button key={item.id} type="button" role="tab" aria-selected={selected===item.id} onClick={()=>setSelected(item.id)} className={'shrink-0 rounded-md border px-4 py-3 text-sm font-bold transition '+(selected===item.id?'border-blue-700 bg-blue-700 text-white':'border-slate-200 bg-white text-slate-600 hover:border-blue-700 hover:text-blue-700')}>{item.name}</button>)}</div>
  <div className="mt-7 border-y border-slate-200 py-6"><div className="flex flex-wrap items-center justify-between gap-4"><h3 className="text-2xl font-bold">{industry.name}</h3><span className="text-sm font-bold text-blue-700">RFP 요구사항 10개</span></div><p className="mt-3 leading-7 text-slate-600">{industry.intro}</p></div>
  <div className="mt-5 space-y-3" aria-live="polite">{industry.rfps.map((rfp,index)=>{
   const relevant=[areas[rfp.area],...(rfp.secondary!==undefined?[areas[rfp.secondary]]:[])];
   return <details key={industry.id+'-'+index} className="group rounded-lg border border-slate-200 bg-white open:border-blue-300 open:shadow-sm">
    <summary className="flex cursor-pointer list-none items-start gap-4 px-5 py-5 md:px-7"><span className="mt-1 shrink-0 text-xs font-bold text-blue-700">RFP {String(index+1).padStart(2,'0')}</span><span className="min-w-0 flex-1"><strong className="block text-base leading-7 text-slate-950 md:text-lg">{rfp.title}</strong><span className="mt-2 flex flex-wrap gap-1.5">{relevant.map(area=><span key={area.name} className="rounded bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-700">{area.name}</span>)}</span></span><span aria-hidden="true" className="mt-1 shrink-0 text-xl text-blue-700 transition group-open:rotate-45">+</span></summary>
    <div className="border-t border-slate-100 px-5 pb-6 pt-5 md:pl-24 md:pr-7"><p className="text-sm leading-7 text-slate-600">{rfp.issue}</p><div className="mt-5 border-l-2 border-blue-600 pl-5"><p className="text-xs font-bold text-blue-700">적용 방향</p><p className="mt-2 text-sm leading-7 text-slate-700">{rfp.approach}</p></div><p className="mt-4 text-xs leading-6 text-slate-500">{relevant.map(x=>x.reason).join(' · ')}</p><div className="mt-4 flex flex-wrap gap-3">{relevant.flatMap(x=>x.links).map(([name,href])=><Link key={href} to={href} className="text-xs font-bold text-blue-700 hover:underline">{name} →</Link>)}</div></div>
   </details>;
  })}</div>
  <p className="mt-7 text-xs leading-6 text-slate-500">현장별 데이터·제약조건·구축 범위에 따라 적용 결과가 달라집니다. 실제 도입 시 요구사항과 연계 범위를 함께 검토합니다.</p>
 </div></section>;
}
