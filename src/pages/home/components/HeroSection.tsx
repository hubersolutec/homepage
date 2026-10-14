import { Link } from 'react-router-dom';

const quickLinks=[
 ['AutoPlan','수주·계획·현장·품질 연결','/solutions/auto-plan'],
 ['FABEREM','해석 데이터·실행·검토 연결','/solutions/faberem'],
 ['제조 운영 적용','주문 인식부터 출하까지','/solutions/auto-plan#agents'],
 ['해석 업무 적용','반복 해석과 결과 재사용','/solutions/faberem'],
];

export default function HeroSection(){return <section id="home" className="relative overflow-hidden bg-[#06162d] pt-24 text-white">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_15%,rgba(37,99,235,0.28),transparent_34%),linear-gradient(120deg,#06162d_0%,#0a2447_58%,#06162d_100%)]"/>
  <div className="container relative mx-auto px-4 pt-16 md:pt-24">
    <div className="grid min-h-[570px] items-center gap-12 pb-16 lg:grid-cols-[0.88fr_1.12fr] lg:pb-24">
      <div className="max-w-2xl"><p className="mb-6 text-xs font-black uppercase tracking-[0.22em] text-blue-300">Manufacturing AI · Connected Operations</p><h1 className="text-[40px] font-extrabold leading-[1.14] tracking-[-0.03em] text-white md:text-[54px]"><span className="block">생산 운영부터</span><span className="mt-1 block text-blue-300">엔지니어링 해석까지.</span></h1><p className="mt-7 max-w-xl text-base leading-8 text-slate-300 md:text-lg">AutoPlan은 수주·계획·현장·품질을 연결하고, FABEREM은 해석 데이터·실행·검토·재사용을 연결합니다.</p><div className="mt-9 flex flex-wrap gap-3"><Link to="/solutions/auto-plan" className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-6 py-3.5 text-sm font-bold text-white hover:bg-blue-500">AutoPlan 알아보기 <i className="ri-arrow-right-line"/></Link><Link to="/solutions/faberem" className="inline-flex items-center gap-2 rounded-md border border-white/30 px-6 py-3.5 text-sm font-bold text-white hover:border-white/60 hover:bg-white/5">FABEREM 알아보기</Link></div></div>
      <div className="relative"><div className="absolute -inset-4 rounded-[28px] bg-blue-500/10 blur-2xl"/><div className="relative overflow-hidden rounded-2xl border border-white/15 bg-black shadow-[0_35px_100px_rgba(0,0,0,.45)]"><div className="aspect-video"><iframe src="https://www.youtube-nocookie.com/embed/T0rH7SFPit0?start=4&rel=0" title="후버솔루텍 기업 소개 영상" className="h-full w-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen/></div></div><div className="mt-4 flex items-center justify-between text-xs text-slate-400"><span>HUBESOLUTEC COMPANY FILM</span><span className="inline-flex items-center gap-2"><i className="ri-play-circle-line text-blue-300"/> 기업 소개 영상</span></div></div>
    </div>
    <div className="grid border-t border-white/10 sm:grid-cols-2 lg:grid-cols-4">{quickLinks.map(([name,desc,href],index)=><Link key={name} to={href} className="group border-b border-white/10 px-5 py-6 transition hover:bg-white/5 sm:border-r lg:border-b-0"><span className="text-[10px] font-black text-blue-400">0{index+1}</span><strong className="mt-2 block text-base">{name}</strong><span className="mt-1 flex items-center justify-between text-xs text-slate-400"><span>{desc}</span><i className="ri-arrow-right-line transition group-hover:translate-x-1 group-hover:text-blue-300"/></span></Link>)}</div>
  </div>
</section>}
