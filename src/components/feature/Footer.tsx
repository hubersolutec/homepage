import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#071529] text-white">
      <div className="container mx-auto px-4 py-14 md:py-16">
        <div className="grid gap-12 border-b border-white/10 pb-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div className="max-w-md">
            <p className="text-2xl font-extrabold tracking-tight">hubesolutec</p>
            <p className="mt-5 text-base leading-8 text-slate-300">기존 시스템과 제조 데이터를 연결해 수주, 생산계획, 현장 실행과 품질관리를 지능화합니다.</p>
          </div>
          <div><p className="text-sm font-extrabold uppercase tracking-[0.16em] text-blue-300">Solutions</p><nav className="mt-5 grid gap-3.5 text-[15px] leading-6 text-slate-200"><Link to="/solutions/auto-plan" className="hover:text-white">WiseCollab AutoPlan</Link><Link to="/solutions/i-pop" className="hover:text-white">Wisecollab Standard</Link><Link to="/solutions/scrm" className="hover:text-white">지속가능경영 솔루션</Link></nav></div>
          <div><p className="text-sm font-extrabold uppercase tracking-[0.16em] text-blue-300">Company</p><nav className="mt-5 grid gap-3.5 text-[15px] leading-6 text-slate-200"><Link to="/about" className="hover:text-white">회사소개</Link><Link to="/about/history" className="hover:text-white">연혁</Link><Link to="/about/philosophy" className="hover:text-white">경영철학</Link><Link to="/contact" className="hover:text-white">문의하기</Link></nav></div>
        </div>
        <div className="grid gap-3 pt-8 text-sm leading-7 text-slate-400 md:grid-cols-[1fr_auto] md:items-end">
          <div><p>(주)후버솔루텍 · 대표자 임성원 · 사업자등록번호 848-86-03456</p><p>서울특별시 서초구 반포대로14길 36, 1005호 (서초동, 현대파워텔 오피스텔)</p></div>
          <p>© 2024–2026 hubesolutec. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
