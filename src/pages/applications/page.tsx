import IndustryRfps from './IndustryRfps';
import { Link } from 'react-router-dom';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
export const applications = [
  { tag: '생산계획', title: '다품종 주문과 긴급오더가 잦은 현장', problem: '주문 양식이 다양하고 설비·자재·납기 조건을 담당자가 반복 확인합니다.', approach: '주문정보를 정리하고 생산 제약조건을 반영한 계획과 변경 영향을 검토합니다.', items: [['WiseCollab AutoPlan', '/solutions/auto-plan'], ['WiseCollab XAI', '/solutions/xai']] },
  { tag: '제조운영', title: '업무 변화에 시스템이 따라가야 하는 현장', problem: '생산·품질·자재 정보가 분리되어 있고, 화면이나 기능 개선 요청이 쌓입니다.', approach: '필요한 제조 업무를 연결하고 자연어 개선 요청을 검증·승인·운영 반영으로 이어갑니다.', items: [['Agentic MES', '/solutions/agentic-mes']] },
  { tag: '엔지니어링', title: '반복 해석과 데이터 재사용이 필요한 팀', problem: '모델·해석 조건·결과가 여러 저장소에 흩어지고 동일한 작업이 반복됩니다.', approach: '프로젝트 중심 데이터 관리부터 해석 업무 자동화와 예측 모델 확장까지 단계적으로 검토합니다.', items: [['FABEREM', '/solutions/faberem']] },
  { tag: '기업협업', title: '문서와 프로젝트가 함께 움직이는 조직', problem: '업무 문서와 프로젝트 정보가 분산되어 최신 정보 확인과 협업이 어렵습니다.', approach: '조직 규모와 업무 범위에 맞는 Lite·Standard·AI 협업 환경을 구성합니다.', items: [['WiseCollab Lite', '/solutions/lite'], ['WiseCollab Standard', '/solutions/standard'], ['WiseCollab AI', '/solutions/ai']] },
  { tag: '지속가능경영', title: '공급망 위험과 ESG 대응이 필요한 기업', problem: '공급망과 협력사 정보를 서로 다른 업무에서 관리합니다.', approach: 'Wise SCRM으로 공급망 관계와 협력사 정보를 연결합니다.', items: [['Wise SCRM', '/solutions/scrm']] },
];
export default function Applications() { return <div className="min-h-screen text-slate-900 bg-white"><Header /><main>
  <section className="pt-32 pb-20 md:pt-40 bg-[#071a33] text-white"><div className="container mx-auto px-4"><p className="text-xs font-bold tracking-[.18em] uppercase text-blue-300">Applications</p><h1 className="mt-6 font-extrabold">우리 업무에<br />어떻게 적용할까요?</h1><p className="mt-7 max-w-2xl leading-8 text-slate-300">산업·기관별 주요 업무 문제를 RFP 요구사항 예시로 살펴보고, 다섯 가지 해결 접근과 관련 솔루션으로 연결합니다.</p></div></section>
  <IndustryRfps />
  <details className="border-y border-slate-200"><summary className="container mx-auto px-4 py-6 font-bold text-blue-700 cursor-pointer">다섯 가지 해결 접근 자세히 보기</summary>
  <section className="py-20 md:py-24"><div className="container mx-auto px-4"><div className="max-w-3xl mb-12"><p className="text-sm font-bold text-blue-700">업무별 적용 시나리오</p><h2 className="mt-3 text-3xl md:text-4xl font-bold">비슷한 고민에서, 적용의 출발점을 찾으세요.</h2><p className="mt-5 leading-8 text-slate-600">아래 내용은 고객·협력사를 특정하지 않는 범용 업무 시나리오입니다. 개별 기업의 구축 실적이나 도입 성과를 나타내지 않습니다.</p></div>
  <div className="space-y-6">{applications.map((item,index) => <article key={item.tag} className="grid gap-7 rounded-xl border border-slate-200 bg-white p-6 md:p-9 lg:grid-cols-[.7fr_1fr_1fr]"><div><p className="text-xs text-blue-700 font-bold">0{index + 1} / {item.tag}</p><h3 className="mt-4 text-xl font-bold">{item.title}</h3></div><div><p className="text-xs font-bold text-slate-500 mb-3">현장의 과제</p><p className="leading-8 text-slate-600">{item.problem}</p></div><div><p className="text-xs font-bold text-blue-700 mb-3">적용 접근</p><p className="leading-8 text-slate-600">{item.approach}</p><div className="flex flex-wrap gap-2 mt-5">{item.items.map(([name,href]) => <Link key={href} to={href} className="text-xs font-semibold text-blue-700 bg-blue-50 rounded px-3 py-2 hover:bg-blue-100">{name} →</Link>)}</div></div></article>)}</div>
  <p className="text-xs leading-6 text-slate-500 mt-7">현장별 데이터·제약조건·구축 범위에 따라 적용 결과가 달라집니다.</p></div></section>
  </details>
  <section className="bg-slate-50 py-16"><div className="container mx-auto px-4 grid md:grid-cols-2 gap-7"><div><h2 className="text-3xl font-bold">적용 범위가 아직 막연해도 괜찮습니다.</h2><p className="mt-5 leading-8 text-slate-600">현재 시스템, 업무 방식과 해결하고 싶은 문제를 바탕으로 연계 범위와 도입 순서를 함께 검토합니다.</p></div><div className="flex flex-wrap items-center gap-3"><Link to="/contact" className="bg-blue-700 text-white px-6 py-3 rounded font-bold hover:bg-blue-800">문의하기 →</Link><Link to="/business/smart-factory" className="border border-slate-300 px-6 py-3 rounded font-bold hover:bg-white">컨설팅 알아보기</Link></div></div></section>
</main><Footer /></div>; }
