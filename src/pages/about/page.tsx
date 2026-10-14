import { Link } from 'react-router-dom';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import AboutNav from './AboutNav';

const values = [
  ['01', 'AI 기반 제조 지능화', '수주부터 출하까지 전 공정을 AI로 연결·자동화하여 최적의 생산성과 효율을 제공합니다.'],
  ['02', '4대 Multi AI Agent 플랫폼', '수주관리, 생산계획, 현장실행, 품질추적을 지능적으로 수행하고 XAI 기반 원인 분석으로 의사결정을 지원합니다.'],
  ['03', 'FABEREM 해석 업무 연결', '설계와 입력 조건, 해석 실행·결과·검토 이력을 하나의 공간에서 관리합니다. 반복 해석을 Web App으로 구성하고 해석 자산과 경험을 다음 업무에 재사용합니다.'],
  ['04', '유연한 확장성과 통합', 'PLC·MES·ERP 등 기존 시스템과 쉽게 연동되며 기업의 규모와 환경에 맞게 유연하게 확장할 수 있습니다.'],
  ['05', 'ESG 경영 지원', 'Wise SCRM을 통해 공급망 리스크를 관리하고 지속 가능한 경영을 지원합니다.'],
];
const portfolio = [
  ['01', '제조 AI 운영 솔루션', 'WiseCollab AutoPlan으로 수주 인식, 생산계획, 현장 실행, LOT·4M 및 품질 이력을 하나의 제조 흐름으로 연결합니다.'],
  ['02', 'AI 분석·협업 솔루션', 'WiseCollab XAI와 협업 솔루션으로 제조 데이터의 원인을 설명하고 설계·문서·프로젝트 협업을 지원합니다.'],
  ['03', 'Simulation · FABEREM', 'FABEREM으로 해석 파일과 프로젝트, Web App, Run·결과·검토 이력을 연결하고 해석 자산과 경험의 축적·재사용을 지원합니다.'],
  ['04', 'ESG·공급망 솔루션', 'Wise SCRM을 기반으로 공급망 리스크 관리와 지속가능경영 체계 구축을 지원합니다.'],
];
const assets = ['벤처기업 인증','소셜벤처기업 인증','기술개발전담부서 인증','WiseCollab AutoPlan 특허 등록 및 출원','모듈라 스마트태그 특허','WiseCollab 관련 저작권'];
export default function AboutPage() {
  return <div className="min-h-screen bg-white text-slate-900"><Header /><main>
    <section className="bg-[#f5f8fc] pt-32 pb-16 md:pt-40 md:pb-20"><div className="container mx-auto grid gap-12 px-4 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
      <div><p className="text-xs font-bold uppercase tracking-[.18em] text-blue-700">About HUBE Solutec</p><h1 className="mt-5 font-extrabold">AI로 제조를 혁신하고,<br /><span className="text-blue-700">지속 가능한 성장</span>을 만듭니다.</h1><p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">후버솔루텍은 AI 기반 지능형 제조 솔루션을 개발·공급하여 고객의 생산성 향상과 ESG 경영 실현을 지원합니다.</p><div className="mt-8 flex flex-wrap gap-3"><Link to="/solutions" className="rounded-md bg-blue-700 px-6 py-3 text-sm font-bold text-white hover:bg-blue-800">솔루션 살펴보기</Link><Link to="/about/history" className="rounded-md border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-800 hover:border-blue-600">연혁 보기</Link></div></div>
      <figure className="overflow-hidden border border-slate-200 bg-white"><img src="/assets/about/about-who-v23.png" alt="생산계획과 현장 실행의 연결을 표현한 제조 AI 이미지" className="block h-auto w-full" /><figcaption className="px-5 py-3 text-xs text-slate-500">제조 현장과 데이터를 연결하는 솔루션 개념 이미지</figcaption></figure>
    </div></section>
    <AboutNav />
    <section className="py-20 md:py-24"><div className="container mx-auto grid gap-10 px-4 lg:grid-cols-[.75fr_1.25fr]"><div><p className="text-sm font-bold text-blue-700">Who we are</p><h2 className="mt-3 text-3xl font-bold md:text-4xl">현장의 업무를 이해하고<br />기술로 연결합니다.</h2></div><div><h3 className="text-xl font-bold">AI 기반 지능형 제조 솔루션을 개발·공급하는 제조 혁신 파트너</h3><p className="mt-5 leading-8 text-slate-600">수주부터 생산계획, 현장 실행, 품질 추적까지 제조 전 과정을 연결하고 기존 PLC·MES·ERP와 유연하게 연동해 기업의 규모와 환경에 맞는 단계적 지능화를 제공합니다.</p><p className="mt-5 leading-8 text-slate-600">AI 기술, 제조 현장 이해, 기존 시스템 연동 역량을 결합해 고객의 생산성과 경영 경쟁력을 높입니다.</p></div></div></section>
    <section className="bg-[#071a33] py-10 text-white"><div className="container mx-auto grid grid-cols-2 gap-px px-4 md:grid-cols-4">{[['2024.09','후버솔루텍 법인 설립'],['AI × 제조','지능형 제조 전문기업'],['실증·납품','현장 중심 레퍼런스 확보'],['지속 성장','파트너십 기반 사업 확장']].map(([a,b])=><div key={b} className="border-l border-white/20 px-5 py-4 first:border-l-0"><strong className="block text-xl font-bold text-blue-200 md:text-2xl">{a}</strong><span className="mt-2 block text-xs leading-6 text-slate-300 md:text-sm">{b}</span></div>)}</div></section>
    <section className="bg-slate-50 py-20 md:py-24"><div className="container mx-auto grid gap-10 px-4 lg:grid-cols-[.72fr_1.28fr]"><div><p className="text-sm font-bold text-blue-700">Our value</p><h2 className="mt-3 text-3xl font-bold md:text-4xl">제조 지능화와 지속 가능한 성장을 함께 제공합니다.</h2><p className="mt-6 leading-8 text-slate-600">기술과 운영의 균형을 고려해 필요한 업무부터 연결합니다.</p></div><div className="border-t-2 border-blue-700">{values.map(([n,t,b])=><article key={n} className="grid gap-3 border-b border-slate-200 py-6 sm:grid-cols-[38px_1fr]"><span className="text-sm font-bold text-blue-700">{n}</span><div><h3 className="text-lg font-bold">{t}</h3><p className="mt-2 leading-7 text-slate-600">{b}</p></div></article>)}</div></div></section>
    <section className="py-20 md:py-24"><div className="container mx-auto px-4"><div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start"><div><p className="text-sm font-bold text-blue-700">Business portfolio</p><h2 className="mt-3 text-3xl font-bold md:text-4xl">제조 AI를 중심으로 기업의 연결과 성장을 지원합니다.</h2><div className="mt-8 border-t-2 border-blue-700">{portfolio.map(([n,t,b])=><article key={n} className="grid gap-3 border-b border-slate-200 py-6 sm:grid-cols-[38px_1fr]"><span className="text-sm font-bold text-blue-700">{n}</span><div><h3 className="text-lg font-bold">{t}</h3><p className="mt-2 leading-7 text-slate-600">{b}</p></div></article>)}</div></div><figure className="overflow-hidden border border-slate-200 bg-white"><img src="/assets/about/about-portfolio-v23.png" alt="제조 AI, 협업과 ESG 업무의 연결을 표현한 이미지" className="block h-auto w-full" /><figcaption className="px-5 py-3 text-xs text-slate-500">제조 AI·기업 협업·공급망 관리 포트폴리오 개념 이미지</figcaption></figure></div></div></section>
    <section className="border-t border-slate-200 bg-slate-50 py-20 md:py-24"><div className="container mx-auto grid gap-10 px-4 lg:grid-cols-[.72fr_1.28fr]"><div><p className="text-sm font-bold text-blue-700">Certification & IP</p><h2 className="mt-3 text-3xl font-bold md:text-4xl">사업 수행 역량과 자체 기술자산</h2></div><ul className="grid gap-x-8 border-t-2 border-blue-700 sm:grid-cols-2">{assets.map((item,i)=><li key={item} className="flex gap-4 border-b border-slate-200 py-5"><span className="text-sm font-bold text-blue-700">{String(i+1).padStart(2,'0')}</span><span className="font-semibold leading-7">{item}</span></li>)}</ul></div></section>
    <section className="bg-[#071a33] py-16 text-white"><div className="container mx-auto flex flex-col justify-between gap-7 px-4 md:flex-row md:items-center"><div><p className="text-sm font-bold text-blue-200">Business inquiry</p><h2 className="mt-3 text-2xl font-bold md:text-3xl">제조 AI 도입과 사업 협력을 함께 검토하겠습니다.</h2><p className="mt-4 leading-7 text-slate-300">현재 운영 방식과 해결하려는 과제를 알려주시면 적용 범위와 추진 방향을 안내해 드립니다.</p></div><a href="mailto:woghd44@hubesolutec.co.kr" className="shrink-0 self-start rounded-md bg-blue-600 px-6 py-3 text-sm font-bold text-white hover:bg-blue-500">woghd44@hubesolutec.co.kr ↗</a></div></section>
  </main><Footer /></div>;
}
