import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { solutionGroups, autoPlanAgents } from '../../data/solutionMenu';
const otherMenus = [
  { name: '컨설팅', items: [{ name: '스마트팩토리 컨설팅', href: '/business/smart-factory' }, { name: '지속가능경영 컨설팅', href: '/business/sustainability' }] },
  { name: '회사소개', items: [{ name: '회사소개', href: '/about' }, { name: '연혁', href: '/about/history' }, { name: '경영이념', href: '/about/philosophy' }] },
];
export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const location = useLocation();
  const root = useRef<HTMLElement>(null);
  useEffect(() => { setMobileOpen(false); setOpenMenu(null); }, [location.pathname, location.hash]);
  useEffect(() => { const previous = document.body.style.overflow; if (mobileOpen) document.body.style.overflow = 'hidden'; return () => { document.body.style.overflow = previous; }; }, [mobileOpen]);
  useEffect(() => {
    const escape = (event: KeyboardEvent) => { if (event.key === 'Escape') { setOpenMenu(null); setMobileOpen(false); } };
    const outside = (event: PointerEvent) => { if (!root.current?.contains(event.target as Node)) setOpenMenu(null); };
    document.addEventListener('keydown', escape); document.addEventListener('pointerdown', outside);
    return () => { document.removeEventListener('keydown', escape); document.removeEventListener('pointerdown', outside); };
  }, []);
  const navClass = 'px-4 py-2 text-gray-800 font-bold hover:text-blue-700 rounded-lg hover:bg-blue-50 text-base focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-700';
  const activeClass = ' bg-blue-50 text-blue-700';
  return <>
    <header ref={root} className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/" aria-label="후버솔루텍 홈"><img alt="HUBE Solutec" className="h-10 w-auto" src="https://static.readdy.ai/image/c8b851b79f46142197174a795c2f56b6/09f436f1e345c843502f292d291329c7.png" /></Link>
        <nav aria-label="주 메뉴" className="hidden lg:flex items-center gap-1">
          <div onMouseEnter={() => setOpenMenu('솔루션')} onMouseLeave={() => setOpenMenu(null)}>
            <button className={navClass + (location.pathname.startsWith('/solutions') ? activeClass : '')} aria-expanded={openMenu === '솔루션'} aria-controls="solutions-menu" onClick={() => setOpenMenu('솔루션')}>솔루션 <span aria-hidden="true">⌄</span></button>
            {openMenu === '솔루션' && <div className="fixed top-14 left-1/2 -translate-x-1/2 pt-2 w-[920px] max-w-[calc(100vw-32px)]" id="solutions-menu">
              <div className="rounded-xl border border-slate-200 bg-white shadow-xl overflow-hidden">
                <Link to="/solutions" className="flex justify-between px-6 py-3 border-b border-slate-100 text-sm font-bold text-blue-700 hover:bg-blue-50">전체 솔루션 보기 <span aria-hidden="true">→</span></Link>
                <div className="grid grid-cols-4 divide-x divide-slate-100 py-5">
                  {solutionGroups.map(group => <div key={group.title} className="px-5">
                    <h2 className={`text-xs font-bold mb-3 ${group.color === 'blue' ? 'text-blue-700' : group.color === 'purple' ? 'text-purple-700' : group.color === 'cyan' ? 'text-cyan-700' : 'text-green-700'}`}>{group.title}</h2>
                    <div className="space-y-1">{group.items.map(item => <div key={item.href}>
                      <Link className="block rounded-md px-2 py-1.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-blue-700" to={item.href}>{item.name}</Link>
                      {item.href === '/solutions/auto-plan' && <div className="grid grid-cols-2 gap-1 mb-2 px-2">{autoPlanAgents.map(agent => <Link key={agent.href} to={agent.href} title={agent.description} className="bg-blue-50 rounded px-2 py-1 text-[11px] text-blue-800 hover:bg-blue-100">{agent.name}</Link>)}</div>}
                    </div>)}</div>
                  </div>)}
                </div>
              </div>
            </div>}
          </div>
          <Link to="/applications" className={navClass + (location.pathname === '/applications' ? activeClass : '')}>적용분야</Link>
          {otherMenus.map(menu => <div className="relative" key={menu.name} onMouseEnter={() => setOpenMenu(menu.name)} onMouseLeave={() => setOpenMenu(null)}>
            <button className={navClass + (menu.name === '컨설팅' && location.pathname.startsWith('/business/') || menu.name === '회사소개' && location.pathname.startsWith('/about') ? activeClass : '')} aria-expanded={openMenu === menu.name} aria-controls={`menu-${menu.name}`} onClick={() => setOpenMenu(menu.name)}>{menu.name} <span aria-hidden="true">⌄</span></button>
            {openMenu === menu.name && <div id={`menu-${menu.name}`} className="absolute top-full left-0 pt-2 w-60"><div className="bg-white rounded-xl shadow-xl border border-slate-200 p-2">{menu.items.map(item => <Link key={item.href} to={item.href} className="block px-3 py-3 rounded text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-700">{item.name}</Link>)}</div></div>}
          </div>)}
        </nav>
        <Link to="/contact" className="hidden lg:block bg-blue-700 text-white px-5 py-2.5 rounded-md hover:bg-blue-800 text-sm font-bold">문의하기</Link>
        <button className="lg:hidden p-2 text-2xl" aria-label={mobileOpen ? '메뉴 닫기' : '메뉴 열기'} aria-expanded={mobileOpen} aria-controls="mobile-menu" onClick={() => setMobileOpen(!mobileOpen)}>{mobileOpen ? '✕' : '☰'}</button>
      </div>
    </header>
    {mobileOpen && <nav id="mobile-menu" aria-label="모바일 메뉴" className="fixed inset-x-0 bottom-0 top-16 z-40 bg-white overflow-y-auto px-5 py-5">
      <h2 className="font-bold text-lg mb-3">솔루션</h2><Link to="/solutions" className="block py-3 text-blue-700 font-semibold">전체 솔루션 보기 →</Link>
      {solutionGroups.map(group => <details key={group.title} className="border-t border-slate-100 py-3"><summary className="font-semibold cursor-pointer">{group.title}</summary><div className="pt-2">{group.items.map(item => <div key={item.href}><Link to={item.href} className="block py-2 px-2 text-sm text-slate-700">{item.name}</Link>{item.href === '/solutions/auto-plan' && <div className="grid grid-cols-2 gap-1 pb-2">{autoPlanAgents.map(agent => <Link key={agent.href} to={agent.href} className="p-2 bg-blue-50 text-xs text-blue-800 rounded">{agent.name} · {agent.description}</Link>)}</div>}</div>)}</div></details>)}
      <Link to="/applications" className="block border-t border-slate-100 py-4 text-lg font-bold">적용분야</Link>
      {otherMenus.map(menu => <details key={menu.name} className="border-t border-slate-100 py-4"><summary className="text-lg font-bold cursor-pointer">{menu.name}</summary>{menu.items.map(item => <Link key={item.href} to={item.href} className="block px-2 py-3 text-sm text-slate-700">{item.name}</Link>)}</details>)}
      <Link to="/contact" className="block bg-blue-700 text-white text-center rounded-md py-3 mt-4">문의하기</Link>
    </nav>}
  </>;
}
