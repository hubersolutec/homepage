import { Link } from 'react-router-dom';

const areas = [
 {no:'01',title:'제조 운영 지능화',problem:'수주·계획·현장·품질 데이터의 단절',description:'주문 인식부터 생산계획, 현장 실행과 품질 이력까지 하나의 운영 흐름으로 연결합니다.',products:'WiseCollab AutoPlan',href:'/solutions/auto-plan',color:'blue'},
 {no:'02',title:'해석 업무 자산화',problem:'설계·조건·실행·결과 이력의 단절',description:'분산된 해석 데이터와 실행·검토 이력을 연결해 반복 해석과 결과 재사용을 지원합니다.',products:'FABEREM',href:'/solutions/faberem',color:'violet'},
 {no:'03',title:'기존 시스템·업무 연계',problem:'시스템과 업무 사이의 반복 입력',description:'기존 ERP·MES와 해석 도구를 활용하면서 필요한 데이터와 업무 흐름부터 단계적으로 연결합니다.',products:'AutoPlan · FABEREM 적용',href:'/contact',color:'emerald'}
];

const colors: Record<string, string> = {
  blue: 'border-blue-200 bg-blue-50/45 text-blue-700',
  violet: 'border-violet-200 bg-violet-50/45 text-violet-700',
  emerald: 'border-emerald-200 bg-emerald-50/45 text-emerald-700'
};

export default function ServicesSection() {
  return (
    <section id="applications" className="border-y border-slate-200 bg-slate-50 py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-blue-700">What We Connect</p>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 md:text-4xl">제조 운영과 해석 업무의 단절을 연결합니다.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">생산 현장의 실행 데이터와 엔지니어링 해석 경험을 각 업무에 맞는 솔루션으로 연결합니다.</p>
        </div>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {areas.map((area) => (
            <article key={area.no} className={`flex min-h-[360px] flex-col rounded-xl border p-7 md:p-8 ${colors[area.color]}`}>
              <div className="mb-10 flex items-center justify-between">
                <span className="text-sm font-extrabold tracking-widest">{area.no}</span>
                <span className="h-px w-12 bg-current opacity-30" />
              </div>
              <p className="mb-3 text-sm font-bold text-slate-500">{area.problem}</p>
              <h3 className="mb-4 text-2xl font-extrabold text-slate-950">{area.title}</h3>
              <p className="mb-6 leading-7 text-slate-600">{area.description}</p>
              <p className="mb-7 text-sm font-semibold leading-6 text-slate-700">{area.products}</p>
              <Link to={area.href} className="mt-auto inline-flex items-center gap-2 text-sm font-bold">자세히 보기 <i className="ri-arrow-right-line" /></Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
