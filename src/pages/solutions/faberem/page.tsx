import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import FaberemProductExplorer from '../../../components/feature/FaberemProductExplorer';
import FaberemDetails from '../../../components/feature/FaberemDetails';
import FaberemAssetCycle from '../../../components/feature/FaberemAssetCycle';
import { KnowledgeGapVisual } from '../../../components/feature/FaberemVisuals';

const demo = 'https://faberem.hubesolutec.workers.dev/';
const screens = [
  { label:'정보 관리', title:'프로젝트 드라이브', description:'개인·팀·프로젝트 자료를 구분하고 필요한 해석 자산을 찾습니다.', image:'/assets/approved-screens/faberem-projects-anonymized.png', alt:'FABEREM 프로젝트 드라이브 공개용 실제 화면' },
  { label:'조건·결과 이해', title:'해석 Schematic', description:'Geometry·Model·Setup·Result의 관계를 따라 해석 구성을 확인합니다.', image:'/assets/approved-screens/faberem-schematic-anonymized.png', alt:'FABEREM 해석 Schematic 공개용 실제 화면' },
  { label:'조건·결과 이해', title:'Parameter Sets', description:'설계점별 입력 파라미터와 조건을 비교합니다.', image:'/assets/approved-screens/faberem-parameters-anonymized.png', alt:'FABEREM Parameter Sets 공개용 실제 화면' },
  { label:'해석 실행', title:'JOB 실행 조회', description:'요청·시작·완료 시각과 실행 상태, 결과 연결을 확인합니다.', image:'/assets/approved-screens/faberem-jobs-anonymized.png', alt:'FABEREM JOB 실행 조회 공개용 실제 화면' },
  { label:'조건·결과 이해', title:'웹 3D 결과 뷰어', description:'3D 결과 형상과 Contour를 웹에서 검토합니다.', image:'/assets/approved-screens/faberem-result-viewer-anonymized.png', alt:'FABEREM 3D 결과 뷰어 공개용 실제 화면' },
  { label:'협업·통제', title:'전자결재', description:'결재함과 처리 상태를 확인하는 협업 화면입니다.', image:'/assets/approved-screens/faberem-approval-anonymized.png', alt:'FABEREM 전자결재 공개용 실제 화면' },
];
const problems = [
  ['찾기 어려운 과거 해석','개인 PC와 공유 폴더에 흩어진 모델과 결과를 다시 찾습니다.'],
  ['반복되는 실행과 정리','조건 변경부터 실행, 결과 수집과 전달까지 같은 작업이 이어집니다.'],
  ['사람에게 머무는 노하우','조건 선택 이유와 검토 근거가 남지 않으면 다시 확인해야 합니다.'],
];
const adoption = [
  ['설계 변경에 따른 반복 해석','입력 조건과 변경 결과 비교'],
  ['부품·프로젝트별 해석 자료 관리','모델과 과거 결과 검색'],
  ['설계팀·해석팀 공동 검토','같은 조건과 결과로 의견 공유'],
  ['결과 승인과 자료 반출','접근 범위와 공유 이력 관리'],
];

export default function FaberemPage() {
  useEffect(() => { document.title = 'FABEREM · 해석 데이터와 업무를 연결하는 플랫폼 · HUBE Solutec'; const meta = document.querySelector('meta[name="description"]'); const previous = meta?.getAttribute('content'); meta?.setAttribute('content', 'FABEREM은 설계·해석 파일, 입력 조건, 실행 결과와 협업 이력을 연결하는 웹 기반 해석업무 플랫폼입니다.'); return () => { document.title = 'HUBE Solutec'; if (previous) meta?.setAttribute('content', previous); }; }, []);
  return <div className="faberem-page min-h-screen overflow-x-hidden bg-white text-[#14243c]"><Header/><main>
    <section className="faberem-hero relative overflow-hidden border-b border-[#dce5ef] bg-[#f6f9fe]">
      <img src="/assets/faberem-visuals/turbine-hero-hd.png" alt="터빈 형상에 메시와 유동 해석을 연결한 엔지니어링 시뮬레이션 이미지" className="faberem-hero-art absolute inset-0 h-full w-full object-cover"/>
      <div className="faberem-hero-wash absolute inset-0"/>
      <div className="container relative mx-auto px-4"><div className="faberem-hero-copy">
        <p className="text-xs font-extrabold uppercase tracking-[.15em] text-blue-700">FABEREM / Engineering Simulation Workspace</p>
        <h1 className="mt-6 font-extrabold tracking-[-.035em]">해석 파일을 넘어,<br/><span className="text-blue-700">해석 업무를 연결하다.</span></h1>
        <p className="mt-7 max-w-lg leading-8 text-slate-600">모델과 조건, 실행과 결과, 그리고 판단의 이력까지.<br/>FABEREM은 흩어진 해석 데이터를 하나의 엔지니어링 업무 공간으로 연결합니다.</p>
        <div className="mt-9 flex flex-wrap gap-3"><a href="#faberem-features" className="rounded-md bg-blue-700 px-6 py-4 text-sm font-bold text-white hover:bg-blue-800">실제 기능 살펴보기 ↓</a><a href={demo} target="_blank" rel="noopener noreferrer" className="rounded-md border border-[#d4e0f0] bg-white px-6 py-4 text-sm font-bold text-[#14243c] hover:border-blue-600">FABEREM 체험 ↗</a></div>
        <p className="mt-5 text-xs text-slate-500">SPDM · Workbench Intelligence · Simulation Operation</p>
      </div></div>
    </section>

    <section className="py-16 md:py-20"><div className="container mx-auto px-4">
      <div className="mb-8 max-w-4xl"><p className="text-sm font-bold tracking-widest text-blue-700">WHY FABEREM</p><h2 className="mt-3 text-3xl font-extrabold leading-tight md:text-4xl">해석 결과는 있어도, 다시 사용하기는 어렵습니다.</h2><p className="mt-5 leading-8 text-slate-600">모델·재료·Mesh·경계조건·Solver 설정과 결과가 서로 다른 파일과 PC에 남으면, 어떤 조건으로 결과를 만들고 왜 채택했는지 재현하기 어렵습니다. FABEREM은 이 과정을 하나의 해석 이력으로 연결합니다.</p></div>
      <div className="faberem-explanation-row grid gap-8 lg:grid-cols-2 lg:items-center"><div className="divide-y divide-slate-200">{problems.map(([title,body],i)=><div key={title} className="grid grid-cols-[2rem_1fr] gap-3 py-5"><span className="text-sm font-bold text-blue-700">0{i+1}</span><div><h3 className="font-bold">{title}</h3><p className="mt-2 text-sm leading-7 text-slate-600">{body}</p></div></div>)}</div><KnowledgeGapVisual/></div>
    </div></section>

    <section id="faberem-features" className="faberem-product-section scroll-mt-20"><div className="container mx-auto px-4"><p className="text-xs font-bold uppercase tracking-[.18em] text-blue-200">Product in action</p><h2 className="mt-5 text-3xl font-extrabold leading-tight text-white md:text-4xl">실제 화면으로 살펴보는 FABEREM.</h2><p className="mt-5 leading-7 text-slate-300">업무 공간에서 해석 결과까지, 기능을 선택해 활용 방법과 실제 화면을 확인하세요.</p><FaberemProductExplorer screens={screens}/></div></section>

    <section className="bg-white py-16 md:py-20"><div className="container mx-auto px-4"><div className="grid gap-8 lg:grid-cols-[.4fr_.6fr] lg:items-center"><div><p className="text-sm font-bold tracking-widest text-blue-700">ANALYSIS ASSET</p><h2 className="mt-3 text-3xl font-extrabold leading-tight md:text-4xl">다음 해석에 다시 쓸 수 있는<br/>업무 자산을 만듭니다.</h2><p className="mt-5 leading-8 text-slate-600">설계 버전과 입력 조건, 실행 결과와 검토 이력을 연결해 과거 업무를 확인하고 재사용할 수 있도록 지원합니다.</p><p className="mt-5 text-sm leading-7 text-slate-600">축적된 Run과 판단 근거는 다음 해석의 조건 검토와 사례 검색에 활용합니다. 예측과 추천은 데이터 축적·검증을 거쳐 고도화합니다.</p></div><FaberemAssetCycle/></div></div></section>

    <div className="border-t border-slate-200"><FaberemDetails/></div>

    <section id="faberem-adoption" className="scroll-mt-20 bg-white py-20 md:py-24"><div className="container mx-auto px-4"><div className="grid grid-cols-1 gap-10 lg:grid-cols-[.8fr_1.2fr]"><div><p className="text-sm font-bold tracking-widest text-blue-700">ADOPTION</p><h2 className="mt-3 text-3xl font-extrabold leading-tight md:text-4xl">기존 해석 환경을 활용해,<br/>필요한 업무부터 시작합니다.</h2><p className="mt-5 leading-8 text-slate-600">대상 업무와 데이터·보안 요구를 확인하고 부서 또는 프로젝트 단위로 적용합니다. 검증된 업무를 기준으로 적용 범위를 넓힙니다.</p></div><div><div className="overflow-hidden border-t-2 border-[#071a33]">{adoption.map(([work,change])=><div key={work} className="grid grid-cols-1 gap-2 border-b border-slate-200 py-5 sm:grid-cols-2"><strong>{work}</strong><span className="text-sm text-slate-600">{change}</span></div>)}</div><ol className="mt-7 flex flex-wrap gap-2">{['업무 확인','적용 범위 정의','대표 업무 검증','운영·확대'].map((step,i)=><li key={step} className="rounded-full bg-blue-50 px-4 py-2 text-xs font-bold text-blue-900">{i+1}. {step}</li>)}</ol><p className="mt-5 text-sm leading-7 text-slate-600">고객의 보안 정책과 운영 환경에 맞춰 내부 설치와 연계 범위를 협의합니다.</p></div></div></div></section>
    <section className="bg-[#071a33] py-16 text-white"><div className="container mx-auto px-4 md:flex md:items-center md:justify-between md:gap-8"><div><h2 className="text-2xl font-extrabold md:text-3xl">우리 팀의 해석업무를 FABEREM에서 연결해 보세요.</h2><p className="mt-4 text-sm leading-7 text-slate-300">제품을 체험하거나 현재 업무와 필요한 적용 범위를 상담해 보세요.</p></div><div className="mt-7 flex shrink-0 flex-wrap gap-3 md:mt-0"><a href={demo} target="_blank" rel="noopener noreferrer" className="rounded-md bg-blue-600 px-5 py-3 text-sm font-bold hover:bg-blue-500">FABEREM 체험하기 ↗</a><Link to="/contact?solution=FABEREM" className="rounded-md border border-white/40 px-5 py-3 text-sm font-bold hover:bg-white/10">도입 상담하기</Link></div></div><p className="container mx-auto mt-6 px-4 text-xs text-slate-400">현장별 데이터·제약조건·구축 범위에 따라 적용 결과가 달라집니다.</p></section>
  </main><Footer/></div>;
}
