import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import AboutNav from '../AboutNav';
const values = [
  ['H','Humanity','사람 중심','AI는 사람을 대체하는 장식이 아니라, 현장의 반복을 줄이고 더 나은 판단을 돕는 도구여야 합니다.'],
  ['U','Uniqueness','현장에 맞는 차별화','보편적인 기술을 나열하기보다 고객의 공정과 업무방식에 맞는 실행 가능한 차이를 만듭니다.'],
  ['B','Balance','기술과 운영의 균형','새로운 시스템과 기존 자산, 자동화와 사람의 검토, 성과와 책임 사이의 균형을 지킵니다.'],
  ['E','Ethics','신뢰할 수 있는 기술','데이터 보안과 권한, AI 결과의 근거와 한계를 투명하게 관리하는 것을 기술의 기본으로 봅니다.'],
];
export default function PhilosophyPage() {
  return <div className="min-h-screen bg-white text-slate-900"><Header /><main>
    <section className="bg-[#f5f8fc] pt-32 pb-16 md:pt-40 md:pb-20"><div className="container mx-auto grid gap-10 px-4 lg:grid-cols-[1fr_.65fr] lg:items-end"><div><p className="text-xs font-bold uppercase tracking-[.18em] text-blue-700">Philosophy · The HUBE Way</p><h1 className="mt-5 font-extrabold">사람과 현장을 위한 기술,<br /><span className="text-blue-700">신뢰할 수 있는 변화.</span></h1><p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">후버솔루텍은 HUBE에 담긴 네 가지 가치로 기술을 선택하고 제품을 설계하며 고객과 협력합니다.</p></div><div className="border-t border-slate-300 pt-5 lg:text-right"><strong className="text-5xl font-extrabold tracking-[.12em] text-[#071a33] md:text-6xl">HUBE</strong><span className="mt-3 block text-sm text-slate-500">Humanity · Uniqueness · Balance · Ethics</span></div></div></section>
    <AboutNav />
    <section className="py-20 md:py-24"><div className="container mx-auto grid gap-10 px-4 lg:grid-cols-[.55fr_1.45fr]"><div><p className="text-sm font-bold text-blue-700">Our values</p><h2 className="mt-3 text-3xl font-bold md:text-4xl">네 가지 기준으로 일합니다.</h2></div><div className="border-t-2 border-blue-700">{values.map(([letter,en,ko,body])=><article key={letter} className="grid gap-5 border-b border-slate-200 py-7 sm:grid-cols-[74px_1fr]"><strong className="text-5xl font-bold text-blue-700">{letter}</strong><div><p className="text-xs font-bold uppercase tracking-wider text-slate-500">{en}</p><h3 className="mt-2 text-xl font-bold">{ko}</h3><p className="mt-3 leading-8 text-slate-600">{body}</p></div></article>)}</div></div></section>
    <section className="bg-[#071a33] py-16 text-white"><div className="container mx-auto grid gap-8 px-4 lg:grid-cols-2"><h2 className="text-3xl font-bold md:text-4xl">기존 시스템을 존중하고,<br />현장의 데이터로 증명합니다.</h2><p className="leading-8 text-slate-300">후버솔루텍의 제조지능화는 기술을 앞세우는 프로젝트가 아닙니다. 현장의 문제를 정의하고, 기존 업무를 보호하며, 적용 전후의 변화가 확인되는 방식으로 추진합니다.</p></div></section>
  </main><Footer /></div>;
}
