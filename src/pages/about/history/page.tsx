import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import AboutNav from '../AboutNav';

const history = [
  { year: '2026', title: '기술자산과 연구개발 기반 강화', items: [
    ['2026.05', 'WiseCollab AutoPlan 특허 등록 및 출원'],
    ['2026.05', '기술개발전담부서 인증'],
  ]},
  { year: '2025', title: '제품 확장과 기업 역량 인증', items: [
    ['2025.05', 'WiseCollab Simulation 개발'],
    ['2025.07', '소셜벤처기업 인증 및 벤처기업 인증 획득'],
    ['2025.09', '기본벤처캠프 선정'],
    ['2025.12', 'WiseCollab AutoPlan 개발'],
  ]},
  { year: '2024', title: '법인 설립과 솔루션 개발', items: [
    ['2024.09', '후버솔루텍 법인 설립'],
    ['2024.10', '독일 Hubertec AI 런칭'],
    ['2024.12', 'WiseCollab Smart 1.0 개발'],
  ]},
];

export default function HistoryPage() {
  return <div className="min-h-screen bg-white text-slate-900"><Header /><main>
    <section className="bg-[#f5f8fc] pt-32 pb-16 md:pt-40 md:pb-20"><div className="container mx-auto grid gap-9 px-4 lg:grid-cols-[1fr_.7fr] lg:items-end"><div><p className="text-xs font-bold uppercase tracking-[.18em] text-blue-700">History · HUBE Solutec</p><h1 className="mt-5 font-extrabold">기술을 축적하고,<br /><span className="text-blue-700">현장으로 확장해 왔습니다.</span></h1><p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">후버솔루텍은 AI 협업과 시뮬레이션 기술을 축적하고, WiseCollab AutoPlan 개발과 기술자산 확보를 통해 지능형 제조 솔루션 전문기업으로 성장하고 있습니다.</p></div><div className="border-t border-slate-300 pt-5 lg:text-right"><span className="text-sm font-bold text-blue-700">법인 설립부터 현재까지</span><strong className="mt-2 block text-4xl font-bold tracking-tight text-[#071a33] md:text-5xl">2024 — 2026</strong></div></div></section>
    <AboutNav />
    <section className="py-20 md:py-24"><div className="container mx-auto grid gap-10 px-4 lg:grid-cols-[.55fr_1.45fr]"><div><p className="text-sm font-bold text-blue-700">Milestones</p><h2 className="mt-3 text-3xl font-bold md:text-4xl">후버솔루텍의 발자취</h2><p className="mt-5 leading-7 text-slate-600">설립 이후 제품 개발과 기술 기반을 단계적으로 넓혀 왔습니다.</p></div><div className="border-t-2 border-blue-700">{history.map(group => <article key={group.year} className="grid gap-6 border-b border-slate-200 py-9 sm:grid-cols-[100px_1fr]"><strong className="text-3xl font-bold text-blue-700">{group.year}</strong><div><h3 className="text-xl font-bold">{group.title}</h3><ul className="mt-5 space-y-4">{group.items.map(([date,item])=><li key={date+item} className="grid gap-1 text-slate-600 sm:grid-cols-[90px_1fr]"><strong className="text-sm text-slate-800">{date}</strong><span className="leading-7">{item}</span></li>)}</ul></div></article>)}</div></div></section>
  </main><Footer /></div>;
}
