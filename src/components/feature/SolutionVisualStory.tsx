import { Link } from 'react-router-dom';

const mesOperations = [
  { icon:'ri-file-list-3-line', title:'영업·견적', body:'견적과 수주 정보를 제조 실행의 출발점으로 연결' },
  { icon:'ri-clipboard-line', title:'작업지시', body:'품목·수량·공정·일정을 현장 실행 단위로 관리' },
  { icon:'ri-bar-chart-box-line', title:'생산현황', body:'진행률·재공·안돈을 한 화면에서 확인' },
  { icon:'ri-truck-line', title:'출하·이력', body:'출하 상태와 LOT·품질 이력을 연결' },
];
const changeSteps = [
  ['01','요청','수요기업 사용자가 변경을 설명'],
  ['02','분석','AI가 화면·Rule·데이터 영향 확인'],
  ['03','분류','설정 / Skill 조합 / 개발 필요'],
  ['04','검증','변경안 가상검증과 담당자 승인'],
  ['05','반영','운영 배포·버전·복구 이력 관리'],
];
const fabStages = [
  { no:'01', title:'Applet Studio', tag:'기술 고도화', icon:'ri-layout-2-line', detail:'반복 해석을 입력·실행·검토하는 Web Application으로 구성', href:'#faberem-stage-01' },
  { no:'02', title:'Agentic Simulation', tag:'기술 고도화', icon:'ri-robot-2-line', detail:'승인된 Applet과 Tool로 실행을 보조하고 엔지니어가 판단', href:'#faberem-stage-02' },
  { no:'03', title:'Surrogate Studio', tag:'기술 고도화', icon:'ri-line-chart-line', detail:'검증된 Run으로 대리모델을 학습·검증하고 설계안을 비교', href:'#faberem-stage-03' },
];

export default function SolutionVisualStory({ product }: { product: string }) {
  if (product === 'Agentic MES') return <section className="border-b border-slate-200 bg-white py-20 md:py-24"><div className="container mx-auto px-4">
    <div className="grid gap-6 lg:grid-cols-[.9fr_1.1fr] lg:items-end"><div><p className="text-sm font-bold tracking-widest text-blue-700">MES OPERATION + CHANGE AI</p><h2 className="mt-3 text-3xl font-extrabold leading-tight md:text-4xl">제조 업무를 실행하고,<br/><span className="text-blue-700">현장의 변경을 이어갑니다.</span></h2></div><p className="max-w-2xl leading-8 text-slate-600">실제 MES 업무와 AI 변경 절차는 서로 다른 층입니다. 아래 흐름은 수요기업이 사용하는 제조 업무를, 그다음 흐름은 수요기업의 요청을 검증·승인해 반영하는 절차를 보여줍니다.</p></div>
    <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-5 md:p-8"><div className="flex items-center justify-between gap-4"><span className="text-xs font-extrabold tracking-widest text-slate-500">MES CORE · ACTUAL OPERATION</span><span className="text-xs font-semibold text-blue-700">실제 화면으로 확인 가능</span></div><div className="mt-6 grid gap-3 md:grid-cols-4">{mesOperations.map((item,i)=><div key={item.title} className="relative bg-white p-5 shadow-sm ring-1 ring-slate-200"><i className={item.icon+' text-3xl text-blue-700'} aria-hidden="true"/><span className="absolute right-5 top-5 text-xs font-bold text-slate-400">0{i+1}</span><h3 className="mt-5 text-lg font-bold">{item.title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{item.body}</p></div>)}</div><a href="#product-screens" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:underline">제공된 실제 화면 보기 <span aria-hidden="true">↗</span></a></div>
    <div className="mt-5 rounded-2xl bg-[#071a33] p-6 text-white md:p-8"><div className="flex flex-wrap items-center justify-between gap-3"><div><span className="text-xs font-extrabold tracking-widest text-blue-300">CHANGE AI · REQUEST TO DEPLOYMENT</span><h3 className="mt-2 text-xl font-bold">운영 중 변경을 처리하는 흐름</h3></div><span className="rounded-full border border-blue-300/40 px-3 py-1.5 text-xs text-blue-100">수요기업 승인 후 반영</span></div><ol className="mt-6 grid gap-3 md:grid-cols-5">{changeSteps.map(([n,title,body])=><li key={n} className="relative border-t border-blue-400/50 pt-4"><span className="text-xs font-bold text-blue-300">{n}</span><strong className="mt-2 block text-base">{title}</strong><span className="mt-2 block text-xs leading-5 text-slate-300">{body}</span></li>)}</ol></div>
  </div></section>;
  if (product === 'FABEREM') return <section className="border-b border-slate-200 bg-white py-20 md:py-24"><div className="container mx-auto px-4"><div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-center"><div><p className="text-sm font-bold tracking-widest text-blue-700">ENGINEERING PLATFORM</p><h2 className="mt-3 text-3xl font-extrabold leading-tight md:text-4xl">하나의 해석 이력이<br/><span className="text-blue-700">다음 설계를 돕는 구조.</span></h2><p className="mt-5 leading-8 text-slate-600">현재 화면으로 확인할 수 있는 SPDM Core가 자원과 실행 이력을 관리합니다. 그 공통 기반 위에서 Applet Studio, Agentic Simulation, Surrogate Studio의 세 단계로 기술을 고도화합니다.</p><Link to="/solutions/simulation" className="mt-6 inline-flex text-sm font-bold text-blue-700 hover:underline">기존 시뮬레이션 솔루션 보기 ↗</Link></div><div className="relative overflow-hidden rounded-2xl border border-blue-100 bg-[radial-gradient(circle_at_50%_40%,#dbeafe,white_70%)] p-5 shadow-[0_24px_70px_rgba(15,23,42,.1)]"><img src="/assets/approved-screens/faberem-result-viewer-anonymized.png" alt="FABEREM 웹 3D 결과 뷰어 실제 화면" className="mx-auto h-auto w-full max-w-[720px]"/><p className="mt-3 text-center text-xs text-slate-500">사용자 제공 3D 결과 화면을 익명화한 공개용 이미지</p></div></div><a href="#faberem-foundation" className="mt-8 flex items-center justify-between border-l-4 border-blue-700 bg-blue-50 px-6 py-4 text-sm font-bold text-blue-900 hover:bg-blue-100"><span>공통 기반 · SPDM Core — 현재 제품 화면으로 확인</span><span aria-hidden="true">↗</span></a><div className="mt-4 grid gap-3 lg:grid-cols-3">{fabStages.map((stage,i)=><a href={stage.href} key={stage.no} className="group relative border-t-4 border-blue-700 bg-slate-50 p-6 hover:bg-blue-50"><div className="flex items-start justify-between gap-3"><i className={stage.icon+' text-4xl text-blue-700'} aria-hidden="true"/><span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-blue-800">{stage.tag}</span></div><span className="mt-8 block text-xs font-bold text-blue-700">STEP {stage.no}</span><h3 className="mt-2 text-xl font-bold">{stage.title}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{stage.detail}</p><span className="mt-4 inline-block text-sm font-bold text-blue-700">단계 보기 {i<2?'→':'↗'}</span></a>)}</div></div></section>;
  return null;
}
