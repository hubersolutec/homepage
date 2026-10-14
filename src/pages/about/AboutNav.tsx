import { Link, useLocation } from 'react-router-dom';
const links = [['회사소개', '/about'], ['연혁', '/about/history'], ['경영이념', '/about/philosophy']];
export default function AboutNav() {
  const { pathname } = useLocation();
  return <nav aria-label="회사소개 페이지" className="border-b border-slate-200 bg-white"><div className="container mx-auto flex gap-7 overflow-x-auto px-4">
    {links.map(([label, href]) => <Link key={href} to={href} aria-current={pathname === href ? 'page' : undefined} className={'shrink-0 border-b-2 py-5 text-sm font-bold transition-colors ' + (pathname === href ? 'border-blue-700 text-blue-700' : 'border-transparent text-slate-500 hover:text-blue-700')}>{label}</Link>)}
  </div></nav>;
}
