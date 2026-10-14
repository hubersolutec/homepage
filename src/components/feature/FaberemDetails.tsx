import FaberemKnowledgeVisual from './FaberemKnowledgeVisual';
import FaberemWebAppDemo, { WebAppConceptVisual } from './FaberemWebAppDemo';
import { ApplicationTypesVisual, SurrogateVisual } from './FaberemVisuals';
const corePillars = [
  { title:'자원 관리', icon:'ri-folder-cloud-line', body:'CAD·해석 모델, 입력 조건, 결과와 보고서를 Version·Metadata·권한과 함께 연결합니다.', detail:'Repository · Vault · Search' },
  { title:'업무 관리', icon:'ri-flow-chart', body:'Project Template와 참여자·Task·Workflow를 묶고 검토·승인·변경 이력을 남깁니다.', detail:'Project · Workflow · Approval' },
  { title:'실행 기반', icon:'ri-server-line', body:'Queue와 Runner·Solver의 작업 상태, Log, 실패 사유와 재실행 이력을 관리합니다.', detail:'Queue · Runner · Result' },
];
const simFlow = [
  ['01','요청·템플릿 준비','승인된 Applet과 해석 Tool을 선택'],
  ['02','엔지니어 조건 승인','목적·하중·경계조건을 검토'],
  ['03','SimBot 실행·정리','Solver 실행과 결과·근거 기록'],
  ['04','엔지니어 최종 판단','예외·결과 채택을 사람이 승인'],
];
const surrogateFlow = [
  { n:'01', title:'해석 실행 재사용', icon:'ri-recycle-line', body:'기존 Run의 변수·조건·실행 경로·결과를 추출하고 사전 검증합니다.', foot:'기존 Run → 학습 후보' },
  { n:'02', title:'실험계획·반복 실행', icon:'ri-git-branch-line', body:'설계 변수 공간의 샘플을 계획하고 각 샘플과 Solver Run을 연결합니다.', foot:'DoE · 샘플 ↔ Run' },
  { n:'03', title:'데이터·모델 학습', icon:'ri-bubble-chart-line', body:'품질이 확인된 결과 데이터셋으로 대리모델을 학습하고 버전과 검증 오차를 관리합니다.', foot:'데이터셋 · 모델 버전' },
  { n:'04', title:'검증·예측 제공', icon:'ri-focus-3-line', body:'검증된 설계 공간의 후보는 빠르게 비교하고, 범위 밖은 정밀 Solver로 확인합니다.', foot:'적용 범위 · 예측 오차' },
];

export default function FaberemDetails() {
  return <>
    <section id="faberem-foundation" className="scroll-mt-20 bg-slate-50 py-20 md:py-24"><div className="container mx-auto px-4">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center"><div><p className="text-sm font-bold tracking-widest text-blue-700">FOUNDATION · SPDM CORE</p><h2 className="mt-3 text-3xl font-extrabold leading-tight md:text-4xl">해석 자산과 실행 이력을<br/>하나의 기반에 연결합니다.</h2><p className="mt-5 leading-8 text-slate-600">SPDM Core는 설계·해석 자원과 업무 실행을 관리하는 기반입니다. 설계·해석 파일, Project, Workflow, Run과 Result를 연결해 생성부터 검토·승인·재사용까지 추적합니다.</p><div className="mt-6 border-l-4 border-blue-700 pl-5 text-sm font-bold leading-7 text-blue-900">자원 → 프로젝트·승인 → Queue·Runner → Solver → 결과·이력</div></div><figure className="faberem-core-visual"><div className="faberem-core-half top"><img src="/assets/faberem-visuals/spdm-core-compact-hd.png" alt="자원, 프로젝트 승인, Queue와 Runner의 연결" loading="lazy"/></div><div className="faberem-core-captions top">{[['01','자원','설계·해석 파일 관리'],['02','프로젝트·승인','업무·검토·승인 연결'],['03','Queue·Runner','작업 배정·실행 관리']].map(([n,label,detail])=><div key={n}><b><span>{n}</span> {label}</b><small>{detail}</small></div>)}</div><div className="faberem-core-half bottom"><img src="/assets/faberem-visuals/spdm-core-compact-hd.png" alt="Solver 실행에서 결과와 이력으로 연결" loading="lazy"/></div><div className="faberem-core-captions bottom">{[['05','결과·이력','결과·Run 이력 추적'],['04','Solver','해석 실행']].map(([n,label,detail])=><div key={n}><b><span>{n}</span> {label}</b><small>{detail}</small></div>)}</div><figcaption className="sr-only">SPDM Core의 자원·업무·실행 연결 구조</figcaption></figure></div>
      <div className="mt-10 grid gap-4 md:grid-cols-3">{corePillars.map(item=><article key={item.title} className="border-t-2 border-blue-700 bg-white p-6"><i className={item.icon+' text-3xl text-blue-700'} aria-hidden="true"/><h3 className="mt-5 text-xl font-bold">{item.title}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{item.body}</p><p className="mt-5 border-t border-slate-100 pt-4 text-xs font-semibold text-blue-800">{item.detail}</p></article>)}</div>
    </div></section>

    <section id="faberem-stage-01" className="scroll-mt-20 bg-white py-20 md:py-24"><div className="container mx-auto px-4">
      <div className="mb-10"><p className="text-sm font-bold tracking-widest text-blue-700">ADVANCEMENT 01 · APPLET STUDIO</p><h2 className="mt-3 text-3xl font-extrabold leading-tight md:text-4xl">반복 해석을 설계자가 사용하는 Web App으로</h2><p className="mt-5 max-w-3xl leading-8 text-slate-600">Applet Studio는 기존 해석 절차의 입력·실행·결과 확인을 하나의 업무 화면으로 구성하는 고도화 단계입니다. 승인된 절차와 버전을 SPDM Core에 연결해 재사용합니다.</p></div>
      <div className="faberem-explanation-row grid gap-8 py-8 lg:grid-cols-2 lg:gap-10 lg:items-center"><div><span className="text-sm font-extrabold text-blue-700">01 · APPLICATION WEB APP</span><h3 className="mt-3 text-2xl font-bold">설계 변수만 입력하면 해석 흐름이 이어집니다.</h3><p className="mt-4 leading-8 text-slate-600">예를 들어 부품의 외경·길이·하중·재질을 입력하고 3D 형상과 2D 단면을 확인한 뒤 해석을 실행합니다. 결과를 같은 화면에서 검토해 조건과 결과의 연결을 이해할 수 있습니다.</p><ol className="mt-6 divide-y divide-slate-200 border-t border-slate-200">{['치수·재질·하중 입력','형상과 해석 조건 확인','Solver 실행 후 결과 검토'].map((x,i)=><li key={x} className="flex gap-4 py-3 text-sm"><b className="text-blue-700">0{i+1}</b><span>{x}</span></li>)}</ol></div><WebAppConceptVisual/></div>
      <FaberemWebAppDemo/>
      <div className="faberem-application-section py-8"><span className="text-sm font-extrabold text-blue-700">02 · WEB APP 적용 방식</span><h3 className="mt-3 text-2xl font-bold">기존 절차는 그대로, 반복 업무는 표준화합니다.</h3><div className="faberem-application-row"><div><h4 className="font-bold">자유형 Application</h4><p className="mt-2 text-sm leading-7 text-slate-600">CAD·입력 파일을 받아 기존 Solver를 실행하고 결과를 웹에서 전달합니다. 현재 해석 방식을 빠르게 웹 업무로 옮길 때 사용합니다.</p></div><ApplicationTypesVisual mode="freeform"/></div><div className="faberem-application-row"><div><h4 className="font-bold">Template Application</h4><p className="mt-2 text-sm leading-7 text-slate-600">반복되는 입력 변수와 해석 절차를 화면·규칙으로 묶습니다. 설계자가 정해진 조건으로 실행하고 결과를 비교할 때 사용합니다.</p></div><ApplicationTypesVisual mode="template"/></div></div>
    </div></section>

    <section id="faberem-stage-02" className="scroll-mt-20 bg-[#071a33] py-20 text-white md:py-24"><div className="container mx-auto px-4"><p className="text-sm font-bold tracking-widest text-blue-300">ADVANCEMENT 02 · AGENTIC SIMULATION</p><h2 className="mt-3 max-w-3xl text-3xl font-extrabold leading-tight md:text-4xl">SimBot은 준비하고 실행합니다.<br/>엔지니어가 검토하고 판단합니다.</h2><p className="mt-5 max-w-3xl leading-8 text-slate-300">승인된 Applet·도구와 템플릿을 사용해 1차 해석을 보조하는 고도화 방향입니다. 해석 목적·경계조건·예외와 결과 채택은 엔지니어가 확인합니다.</p><ol className="mt-10 grid gap-3 md:grid-cols-4">{simFlow.map(([n,title,body],i)=><li key={n} className="border-t border-blue-400/60 bg-white/5 p-5"><span className="text-xs font-bold text-blue-300">0{i+1} / {i===1||i===3?'ENGINEER':'SIMBOT'}</span><i className={(i===1||i===3?'ri-user-settings-line':'ri-robot-2-line')+' mt-5 block text-3xl text-blue-300'} aria-hidden="true"/><h3 className="mt-4 font-bold">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-300">{body}</p></li>)}</ol><p className="mt-7 border-l-2 border-blue-300 pl-5 text-sm leading-7 text-blue-100">요청·조건 → Solver Run → 결과·검토 근거 → 해석업무 지식 DB → 다음 해석에 재사용</p></div></section>

    <section className="border-y border-slate-200 bg-white py-20 md:py-24"><div className="container mx-auto px-4"><div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center"><div><p className="text-sm font-bold tracking-widest text-blue-700">ENGINEERING KNOWLEDGE</p><h2 className="mt-3 text-3xl font-extrabold leading-tight md:text-4xl">해석 경험을 다음 업무의 근거로 활용합니다.</h2><p className="mt-5 leading-8 text-slate-600">실행 로그와 조건 선택 이유, 실패 수정 사례와 검토 근거를 원본 Run에 연결해 축적합니다. 관련 사례 검색은 다음 해석의 준비를 돕고, 실행 허용 조건은 승인된 Template과 Rule로 관리합니다.</p></div><FaberemKnowledgeVisual/></div><details className="mt-7 border-t border-slate-200 pt-4 text-sm text-slate-600"><summary className="cursor-pointer font-bold text-blue-800">기술 구조 자세히 보기</summary><p className="mt-3 max-w-4xl leading-7">원본과 구조화 데이터는 정확한 값·버전·출처를 보관합니다. Vector DB·RAG는 관련 지식 검색에 사용하며, 실행 범위는 승인된 Template·Rule로 통제하는 고도화 방향입니다.</p></details></div></section>
    <section id="faberem-stage-03" className="scroll-mt-20 bg-[#f3f7fc] py-20 md:py-24"><div className="container mx-auto px-4">
      <div className="mb-10"><p className="text-sm font-bold tracking-widest text-blue-700">ADVANCEMENT 03 · SURROGATE STUDIO</p><h2 className="mt-3 text-3xl font-extrabold leading-tight md:text-4xl">해석 Run을 재사용해 대리모델을 만들고 검증합니다.</h2><p className="mt-5 max-w-3xl leading-8 text-slate-600">Surrogate Studio는 반복 해석의 입력과 결과를 학습 데이터로 연결하는 고도화 단계입니다. 설계안을 빨리 비교하되, 적용 범위와 오차를 확인하고 범위 밖의 조건은 정밀 Solver로 다시 검증합니다.</p></div>
      <div className="faberem-explanation-row grid gap-8 lg:grid-cols-2 lg:gap-10 lg:items-center"><div className="divide-y divide-slate-200 border-t border-slate-300">{surrogateFlow.map(item=><div key={item.n} className="flex gap-4 py-5"><b className="text-xl text-blue-700">{item.n}</b><div><h3 className="font-bold">{item.title}</h3><p className="mt-2 text-sm leading-7 text-slate-600">{item.body}</p></div></div>)}</div><SurrogateVisual/></div>
      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2"><div className="border-l-4 border-blue-700 bg-blue-50 p-6"><strong className="text-blue-900">검증된 범위 안 → 대리모델로 빠른 비교</strong><p className="mt-2 text-sm leading-7 text-slate-600">설계 변수의 적용 범위와 예측 오차를 함께 확인합니다.</p></div><div className="border-l-4 border-slate-500 bg-white p-6"><strong>범위 밖 또는 최종 확인 → 정밀 Solver</strong><p className="mt-2 text-sm leading-7 text-slate-600">새로운 조건과 최종 판단은 Solver Run 및 엔지니어 검토로 확인합니다.</p></div></div>
      <p className="mt-5 text-xs leading-6 text-slate-500">대리모델의 성능과 적용 범위는 데이터 품질, 문제 종류 및 별도 검증 결과에 따라 달라집니다.</p>
    </div></section>
  </>;
}

