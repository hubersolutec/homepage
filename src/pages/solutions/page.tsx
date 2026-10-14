import { Link } from 'react-router-dom';
import { solutionGroups, autoPlanAgents } from '../../data/solutionMenu';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import { useState } from 'react';

export default function Solutions() {
  const [active, setActive] = useState('전체');
  const tabs = ['전체', ...solutionGroups.map(group => group.title)];
  const visible = active === '전체' ? solutionGroups : solutionGroups.filter(group => group.title === active);
  return <div className="min-h-screen bg-white text-slate-900"><Header /><main>
    <section className="border-b border-slate-200 bg-[#071a33] px-4 pb-20 pt-32 text-white md:pb-24 md:pt-40">
      <div className="container mx-auto"><p className="text-xs font-bold uppercase tracking-[.2em] text-blue-300">Solution portfolio</p><h1 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">전체 솔루션</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">제조 AI·운영, 엔지니어링, 기업 협업과 지속가능경영까지. 업무에 필요한 제품과 상세 기능을 한곳에서 살펴보세요.</p></div>
    </section>
    <section className="container mx-auto px-4 py-14 md:py-20" aria-label="솔루션 찾기">
      <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-5" role="group" aria-label="솔루션 영역 선택">{tabs.map(tab => <button key={tab} type="button" aria-pressed={active === tab} onClick={() => setActive(tab)} className={`rounded-md border px-4 py-2.5 text-sm font-bold transition-colors ${active === tab ? 'border-blue-700 bg-blue-700 text-white' : 'border-slate-200 bg-white text-slate-600 hover:border-blue-400 hover:text-blue-700'}`}>{tab}</button>)}</div>
      <div className="mt-12 space-y-14">{visible.map((group, groupIndex) => <section key={group.title} aria-labelledby={`group-${groupIndex}`}>
        <div className="mb-5 flex items-baseline gap-4 border-b border-slate-200 pb-4"><span className="text-sm font-bold text-blue-700">0{solutionGroups.indexOf(group) + 1}</span><h2 id={`group-${groupIndex}`} className="text-2xl font-bold md:text-3xl">{group.title}</h2><span className="text-sm text-slate-500">{group.items.length}개 솔루션</span></div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{group.items.map(item => <article key={item.href} className="min-w-0 rounded-lg border border-slate-200 bg-white p-6 transition-colors hover:border-blue-400 md:p-7"><Link to={item.href} className="group block"><span className="text-xs font-bold uppercase tracking-[.15em] text-blue-700">HUBE SOLUTEC</span><div className="mt-5 flex items-start justify-between gap-4"><h3 className="text-xl font-bold group-hover:text-blue-700">{item.name}</h3><span className="text-lg text-blue-700" aria-hidden="true">↗</span></div><p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p><span className="mt-6 inline-block text-sm font-bold text-blue-700">자세히 보기 →</span></Link>{item.href === '/solutions/auto-plan' && <div className="mt-6 border-t border-slate-200 pt-5"><p className="mb-3 text-xs font-bold text-slate-500">AutoPlan 하위 솔루션</p><div className="flex flex-wrap gap-2">{autoPlanAgents.map(agent => <Link key={agent.href} to={agent.href} title={agent.description} className="rounded border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-800 hover:bg-blue-100">{agent.name}</Link>)}</div></div>}</article>)}</div>
      </section>)}</div>
    </section>
    <section className="border-t border-slate-200 bg-slate-50 px-4 py-14"><div className="container mx-auto flex flex-col gap-5 md:flex-row md:items-center md:justify-between"><div><h2 className="text-2xl font-bold">어떤 솔루션이 필요한지 함께 살펴보세요.</h2><p className="mt-2 text-slate-600">현재 업무와 데이터 환경을 바탕으로 적용 범위를 검토합니다.</p></div><Link to="/contact" className="self-start rounded-md bg-blue-700 px-6 py-3 font-bold text-white hover:bg-blue-800">도입 문의 →</Link></div></section>
  </main><Footer /></div>;
}
