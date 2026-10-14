import { useEffect } from 'react';
import { BrowserRouter, useLocation, useNavigate } from 'react-router-dom';
import { AppRoutes } from './router';
function PageState() {
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (hash.startsWith('#/')) { navigate(hash.slice(1), { replace: true }); return; }
    const names: Record<string,string> = { '/applications': '적용분야', '/solutions/agentic-mes': 'Agentic MES', '/solutions/faberem': 'FABEREM', '/solutions': '전체 솔루션', '/contact': '문의', '/about': '회사소개', '/about/history': '연혁', '/about/philosophy': '경영이념' };
    document.title = names[pathname] ? `${names[pathname]} | HUBE Solutec` : 'HUBE Solutec | 후버솔루텍';
    if (!hash) window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname, hash, navigate]);
  return null;
}
export default function App() { return <BrowserRouter basename={__BASE_PATH__}><PageState /><AppRoutes /></BrowserRouter>; }
