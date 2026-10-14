import PreviousProductContent from '../../components/feature/PreviousProductContent';
import ScreenExplorer from '../../components/feature/ScreenExplorer';
import AgenticMESDetails from '../../components/feature/AgenticMESDetails';
import FaberemDetails from '../../components/feature/FaberemDetails';
import SolutionVisualStory from '../../components/feature/SolutionVisualStory';
import { Link } from 'react-router-dom';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

type Product = { name: string; legacy?: string; eyebrow: string; title: string; intro: string; demo: string; process: string[]; features: { title: string; body: string }[]; technology: string[]; screens: { title: string; image: string; caption: string }[] };
export default function ProductPage({ product }: { product: Product }) {
  return <div className="min-h-screen text-slate-900 bg-white"><Header /><main>
    <section className="relative overflow-hidden bg-[#071a33] text-white pt-32 pb-20 md:pt-40 md:pb-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_85%_30%,rgba(37,99,235,.3),transparent_60%)]" />
      <div className="container relative mx-auto px-4"><div className="text-sm mb-12 text-slate-400"><Link to="/solutions" className="hover:text-white">솔루션</Link><span className="mx-3">/</span>{product.name}</div>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-center"><div><p className="text-xs tracking-[.18em] uppercase font-bold text-blue-300">{product.eyebrow}</p><p className="text-lg font-semibold mt-6 text-blue-200">{product.name}</p><h1 className="mt-3 font-extrabold whitespace-pre-line">{product.title}</h1><p className="mt-6 max-w-2xl text-slate-300 leading-8">{product.intro}</p><div className="mt-8 flex flex-wrap gap-3">{product.screens.length > 0 && <a href="#product-screens" className="bg-blue-600 hover:bg-blue-500 rounded-md px-6 py-3 font-bold text-sm">실제 화면 보기 ↓</a>}<a href={product.demo} target="_blank" rel="noopener noreferrer" className="border border-white/30 rounded-md px-6 py-3 font-bold text-sm hover:bg-white/10">체험사이트 연결 <span aria-hidden="true">↗</span></a><Link to="/contact" className="border border-white/30 rounded-md px-6 py-3 font-bold text-sm hover:bg-white/10">도입 문의</Link></div></div>
          {product.name === 'Agentic MES' || product.name === 'FABEREM' ? <figure className="relative rounded-2xl border border-white/15 bg-white/10 p-3 shadow-[0_32px_80px_rgba(0,0,0,.35)]"><img src={product.name === 'FABEREM' ? '/assets/faberem-fea-concept.png' : '/assets/approved-screens/agentic-mes-dashboard.png'} alt={product.name === 'FABEREM' ? '3D 형상과 해석 결과를 보여주는 개념 이미지' : 'Agentic MES 생산현황 실제 화면'} className="h-auto w-full rounded-lg bg-white object-contain" /><figcaption className="px-2 pt-3 text-xs text-slate-300">{product.name === 'FABEREM' ? '3D 해석 개념 이미지 · 실제 SPDM 화면은 아래에서 확인' : '사용자 제공 생산현황 화면 · 변경 절차는 아래에서 확인'}</figcaption></figure> : <div className="rounded-2xl border border-white/15 bg-white/5 p-7 md:p-9"><p className="text-xs text-blue-300 tracking-wider">CONNECTED WORKFLOW</p><p className="mt-4 text-xl font-bold">업무와 데이터를 하나의 흐름으로</p><ol className="mt-8 space-y-3">{product.process.map((step,index) => <li key={step} className="flex gap-4 items-center rounded-lg bg-white/5 border border-white/10 p-4"><span className="text-xs font-bold text-blue-300">0{index + 1}</span><span className="text-sm">{step}</span></li>)}</ol><p className="mt-6 text-xs leading-6 text-slate-400">현장 업무 · 데이터 · 시스템 연계</p></div>}
        </div>
      </div>
    </section>
    {product.screens.length > 0 && <section id="product-screens" className="bg-slate-50 py-20 md:py-24"><div className="container mx-auto px-4">
      <div className="mb-9 flex flex-wrap items-end justify-between gap-5"><div><p className="text-sm font-bold text-blue-700">제품 화면</p><h2 className="mt-3 text-3xl font-bold md:text-4xl">실제 업무 화면으로 살펴보세요.</h2></div><a href={product.demo} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-blue-700 hover:underline">체험사이트 열기 ↗</a></div>
      <ScreenExplorer product={product.name} screens={product.screens.map(item => ({ label:product.name, title:item.title, description:item.caption, image:item.image, alt:product.name + ' ' + item.title + ' 공개용 화면' }))} note={product.name === 'Agentic MES' ? '사용자가 제공한 MES 화면 캡처입니다.' : '사용자 제공 화면을 바탕으로 식별정보를 익명화한 공개용 변환 이미지입니다.'} />
    </div></section>}
    <SolutionVisualStory product={product.name} />
    {product.name === 'FABEREM' ? null : <section className="py-20 md:py-24"><div className="container mx-auto px-4"><p className="text-sm font-bold text-blue-700">업무에서 시작하는 솔루션</p><h2 className="text-3xl md:text-4xl font-bold mt-3">기능을 넘어, 업무가 연결되도록.</h2><div className="mt-10 grid gap-6 md:grid-cols-3">{product.features.map((feature,index) => <article key={feature.title} className="border-t-2 border-blue-700 pt-6 pb-3"><span className="text-xs text-blue-700 font-bold">0{index + 1}</span><h3 className="mt-4 text-xl font-bold">{feature.title}</h3><p className="mt-4 leading-8 text-slate-600">{feature.body}</p></article>)}</div></div></section>}
    {product.name === 'FABEREM' && <FaberemDetails />}
    {product.name === 'Agentic MES' && <AgenticMESDetails />}
    {product.name !== 'FABEREM' && <section className="py-20 md:py-24"><div className="container mx-auto px-4 grid gap-10 lg:grid-cols-[.8fr_1.2fr]"><div><p className="text-sm font-bold text-blue-700">제품의 기술경쟁력</p><h2 className="mt-3 text-3xl md:text-4xl font-bold">운영할 수 있는 기술로<br />현장의 변화를 지원합니다.</h2></div><ul className="space-y-0">{product.technology.map((item,index) => <li key={item} className="py-6 border-b border-slate-200 flex gap-5"><span className="text-sm font-bold text-blue-700">0{index + 1}</span><p className="leading-8 text-slate-600">{item}</p></li>)}</ul></div></section>}
    {product.name === 'Agentic MES' || product.name === 'FABEREM' ? <details className="container mx-auto px-4 py-10"><summary className="cursor-pointer border-t border-slate-200 py-5 text-sm font-bold text-blue-700">기존 상세 설명 펼쳐보기</summary><PreviousProductContent name={product.name} /></details> : <PreviousProductContent name={product.name} />}
    {product.legacy && <div className="container mx-auto px-4 pb-12"><Link to={product.legacy} className="text-sm text-blue-700 hover:underline">기존 시뮬레이션 솔루션 소개 보기 →</Link></div>}
    <section className="bg-[#071a33] py-16 text-white"><div className="container mx-auto px-4 flex flex-col md:flex-row md:items-center justify-between gap-7"><div><h2 className="text-2xl md:text-3xl font-bold">우리 현장에 필요한 범위부터 검토합니다.</h2><p className="mt-4 text-sm text-slate-300 leading-7">현장별 데이터·제약조건·구축 범위에 따라 적용 결과가 달라집니다.</p></div><Link to="/contact" className="shrink-0 self-start rounded-md bg-blue-600 px-6 py-3 font-bold hover:bg-blue-500">상담 문의 →</Link></div></section>
  </main><Footer /></div>;
}




