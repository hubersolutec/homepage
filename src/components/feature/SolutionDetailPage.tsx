import ScreenExplorer from './ScreenExplorer';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

type Feature = { title: string; description: string };
type Step = { label: string; title: string; description: string };
type Metric = { value: string; label: string; note?: string };
type Screen = { image: string; label: string; title: string; description: string };
type Diagram = { image:string; title:string; description:string; crop?:'agent'|'field'|'system'|'flow' };

function OperationalShowcase({ screens }: { screens: Screen[] }) {
  return <section className="border-y border-slate-200 bg-slate-50 py-20 md:py-24"><div className="container mx-auto px-4">
    <div className="mb-10 grid gap-6 lg:grid-cols-[.75fr_1.25fr] lg:items-end"><div><p className="text-sm font-bold uppercase tracking-[.16em] text-blue-700">Actual Operation</p><h2 className="mt-3 text-3xl font-extrabold text-slate-950 md:text-4xl">화면을 따라가면<br/>업무 흐름이 보입니다.</h2></div><p className="max-w-2xl leading-8 text-slate-600">항목을 선택하면 실제 운영 화면과 설명이 함께 전환됩니다. 화면은 전체 비율로 표시하고 확대해서 확인할 수 있습니다.</p></div>
    <ScreenExplorer product="WiseCollab" screens={screens.map(item=>({ label:item.label, title:item.title, description:item.description, image:item.image, alt:item.title+' 실제 운영 화면' }))} />
  </div></section>;
}

function AgentContextVisual({ title, subtitle, steps }: { title:string; subtitle:string; steps:Step[] }) {
  const input = steps[0];
  const output = steps[steps.length - 1];
  return <section className="border-y border-slate-200 bg-slate-50 py-16 md:py-20">
    <div className="container mx-auto px-4">
      <div className="mb-9 max-w-3xl"><p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-blue-700">System Context</p><h2 className="text-[30px] font-extrabold leading-[1.24] tracking-[-0.025em] text-slate-950 md:text-[40px]">입력 데이터가 Agent를 거쳐<br className="hidden sm:block"/> 실제 업무 결과로 전환됩니다.</h2></div>
      <div className="grid items-stretch gap-3 lg:grid-cols-[1fr_48px_1.15fr_48px_1fr]">
        <article className="rounded-xl border border-slate-200 bg-white p-6"><span className="text-xs font-black uppercase tracking-wider text-slate-500">Input Data</span><div className="mt-5 flex h-11 w-11 items-center justify-center rounded-lg bg-slate-100"><i className="ri-database-2-line text-xl text-slate-700"/></div><strong className="mt-5 block text-lg leading-snug text-slate-950">{input?.title}</strong><p className="mt-2 text-sm leading-6 text-slate-600">{input?.description}</p></article>
        <div className="hidden items-center justify-center lg:flex"><i className="ri-arrow-right-line text-2xl text-blue-400"/></div>
        <article className="rounded-xl bg-[#071a33] p-7 text-white shadow-xl"><span className="text-xs font-black uppercase tracking-wider text-blue-300">AI Agent</span><div className="mt-5 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600"><i className="ri-cpu-line text-2xl"/></div><strong className="mt-5 block text-2xl leading-tight">{title}</strong><p className="mt-3 text-sm leading-6 text-slate-300">{subtitle}</p><span className="mt-5 inline-flex rounded-full border border-blue-400/40 bg-blue-500/10 px-3 py-1.5 text-xs font-bold text-blue-200">Core AI Orchestrator 연계</span></article>
        <div className="hidden items-center justify-center lg:flex"><i className="ri-arrow-right-line text-2xl text-blue-400"/></div>
        <article className="rounded-xl border border-blue-200 bg-blue-50 p-6"><span className="text-xs font-black uppercase tracking-wider text-blue-700">Operational Output</span><div className="mt-5 flex h-11 w-11 items-center justify-center rounded-lg bg-blue-700 text-white"><i className="ri-dashboard-3-line text-xl"/></div><strong className="mt-5 block text-lg leading-snug text-slate-950">{output?.title}</strong><p className="mt-2 text-sm leading-6 text-slate-600">{output?.description}</p></article>
      </div>
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-emerald-200 bg-emerald-50 px-5 py-4"><span className="inline-flex items-center gap-2 text-sm font-bold text-emerald-900"><i className="ri-shield-check-line text-lg text-emerald-700"/> 기존 ERP·MES 원천데이터 보호</span><span className="text-xs font-semibold text-emerald-700">Read-only Connector · 권한관리 · Audit Log</span></div>
    </div>
  </section>;
}

type Props = {
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  backHref?: string;
  backLabel?: string;
  problemTitle: string;
  problems: string[];
  steps: Step[];
  features: Feature[];
  metrics?: Metric[];
  screens?: Screen[];
  diagram?: Diagram;
  spotlight?: 'field-ai';
  proofTitle?: string;
  proofBody?: string;
  footerMessage?: string;
};

export function FieldAIVisualSection(){
  const items=[
    ['ri-file-transfer-line','작업지시 전달','AI 생산계획을 현장 작업 단위로 전달'],
    ['ri-router-line','설비·PLC 연동','설비 상태와 센서 데이터를 실시간 수집'],
    ['ri-database-2-line','실적 자동 수집','투입·완료·수량·시간을 자동 기록'],
    ['ri-notification-3-line','이상 즉시 알림','지연·설비·품질 이상을 빠르게 감지'],
  ];
  return <section className="bg-white py-20 md:py-24"><div className="container mx-auto px-4"><div className="relative overflow-hidden rounded-[28px] border border-blue-100 bg-white shadow-[0_30px_90px_rgba(15,52,105,.15)]"><img src="/assets/v12/field-ai-factory.png" alt="Field AI가 연결되는 스마트 제조 현장" className="absolute inset-0 h-full w-full object-cover object-center"/><div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/5 lg:via-white/72"/><div className="relative grid min-h-[720px] lg:grid-cols-[0.48fr_0.52fr]"><div className="flex flex-col justify-center p-7 md:p-12 lg:p-14"><p className="text-sm font-black uppercase tracking-[0.16em] text-blue-700">Field AI · Autonomous Execution</p><h2 className="mt-5 text-[34px] font-extrabold leading-[1.17] tracking-[-0.03em] text-slate-950 md:text-[48px]"><span className="block text-blue-700">계획은 현장으로 내려가고,</span><span className="block">실적은 다시 AI로 올라옵니다.</span></h2><p className="mt-5 max-w-xl leading-8 text-slate-600">생산계획을 작업지시로 연결하고, 설비·센서·현장실적을 다시 계획과 분석에 환류합니다.</p><div className="mt-8 grid gap-3 sm:grid-cols-2">{items.map(([icon,title,body],index)=><article key={title} className="rounded-xl border border-slate-200 bg-white/92 p-5 shadow-sm backdrop-blur"><div className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-700"><i className={`${icon} text-xl`}/></span><div><span className="text-[10px] font-black text-blue-600">0{index+1}</span><h3 className="text-base font-extrabold text-slate-950">{title}</h3></div></div><p className="mt-3 text-xs leading-5 text-slate-600">{body}</p></article>)}</div></div><div className="relative hidden lg:block"><div className="absolute right-[8%] top-[46%] w-[250px] rounded-xl border border-white/60 bg-[#071a33]/94 p-5 text-white shadow-2xl backdrop-blur"><div className="flex items-center justify-between"><span className="text-xs font-bold text-blue-300">WORK ORDER</span><span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400"/></div><div className="mt-4 grid grid-cols-2 gap-2 text-xs"><span className="rounded bg-white/10 p-2">라인 A</span><span className="rounded bg-white/10 p-2">OP20 조립</span><span className="rounded bg-white/10 p-2">수량 200</span><span className="rounded bg-white/10 p-2">마감 10:30</span></div><div className="mt-3 rounded-md bg-blue-600 py-2 text-center text-sm font-bold">작업 진행</div></div><div className="absolute bottom-[12%] left-[4%] rounded-full border border-blue-200 bg-white/92 px-5 py-3 text-sm font-bold text-blue-800 shadow-lg backdrop-blur"><i className="ri-loop-right-line mr-2"/>실적 피드백 → AI 재계획</div></div></div><div className="relative grid border-t border-slate-200 bg-white/95 md:grid-cols-3">{[['작업지시 자동화','현장 실행을 표준화하고 누락 방지'],['실시간 진행률 확인','계획 대비 진척과 지연 즉시 파악'],['현장 데이터 신뢰도 향상','자동수집과 시스템 연동으로 정확도 확보']].map(([title,body])=><div key={title} className="border-b border-slate-200 p-6 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0"><strong className="text-lg text-blue-800">{title}</strong><p className="mt-2 text-sm leading-6 text-slate-600">{body}</p></div>)}</div></div></div></section>;
}

export default function SolutionDetailPage({
  eyebrow, title, subtitle, description, backHref = '/solutions/auto-plan', backLabel = 'AutoPlan 전체보기',
  problemTitle, problems, steps, features, metrics = [], screens = [], diagram, spotlight, proofTitle, proofBody,
  footerMessage = '기존 시스템을 유지하면서 필요한 업무부터 단계적으로 연결합니다.'
}: Props) {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <main>
        <section className="border-b border-slate-200 bg-white pt-32 pb-16 md:pt-40 md:pb-24">
          <div className="container mx-auto px-4">
            <Link to={backHref} className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-blue-700">
              <i className="ri-arrow-left-line" /> {backLabel}
            </Link>
            <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
              <div>
                <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.18em] text-blue-700">{eyebrow}</p>
                <h1 className="text-[38px] font-extrabold leading-[1.15] tracking-[-0.035em] text-slate-950 md:text-[52px]">{title}</h1>
              </div>
              <div className="border-l-2 border-blue-700 pl-6 md:pl-8">
                <h2 className="mb-4 text-2xl font-extrabold leading-tight text-slate-900 md:text-3xl">{subtitle}</h2>
                <p className="max-w-3xl text-base leading-8 text-slate-600">{description}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
              <div>
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-blue-700">Manufacturing Challenge</p>
                <h2 className="text-3xl font-extrabold leading-tight text-slate-950">{problemTitle}</h2>
              </div>
              <div className="grid gap-px overflow-hidden rounded-lg border border-slate-200 bg-slate-200 sm:grid-cols-2">
                {problems.map((problem, index) => (
                  <div key={problem} className="flex min-h-32 gap-4 bg-white p-6">
                    <span className="text-xs font-extrabold text-blue-700">0{index + 1}</span>
                    <p className="font-semibold leading-7 text-slate-700">{problem}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 max-w-3xl">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-blue-700">How It Works</p>
              <h2 className="text-3xl font-extrabold text-slate-950 md:text-4xl">데이터가 실제 업무로 이어지는 과정</h2>
            </div>
            <div className="grid gap-px overflow-hidden rounded-lg border border-slate-200 bg-slate-200 lg:grid-cols-4">
              {steps.map((step, index) => (
                <div key={step.title} className="bg-white p-7">
                  <div className="mb-8 flex items-center justify-between">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-blue-700">{step.label}</span>
                    {index < steps.length - 1 && <i className="ri-arrow-right-line hidden text-slate-300 lg:block" />}
                  </div>
                  <h3 className="mb-3 text-lg font-extrabold text-slate-950">{step.title}</h3>
                  <p className="text-sm leading-7 text-slate-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {diagram ? <section className="border-y border-slate-200 bg-slate-50 py-16 md:py-20"><div className="container mx-auto px-4"><div className="mb-8 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end"><div><p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-blue-700">Visual Architecture</p><h2 className="text-[30px] font-extrabold leading-[1.24] tracking-[-0.025em] text-slate-950 md:text-[40px]">{diagram.title}</h2></div><p className="max-w-2xl leading-8 text-slate-600">{diagram.description}</p></div><div className={`diagram-crop diagram-crop-${diagram.crop || 'agent'} overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_24px_70px_rgba(15,23,42,.1)]`}><img src={diagram.image} alt={diagram.title} className="h-auto w-full object-contain"/></div></div></section> : <AgentContextVisual title={title} subtitle={subtitle} steps={steps} />}

        {spotlight === 'field-ai' && <FieldAIVisualSection />}

        {screens.length > 0 && <OperationalShowcase screens={screens} />}

        <section className="bg-slate-950 py-20 text-white md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 max-w-3xl">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-blue-300">Key Functions</p>
              <h2 className="text-3xl font-extrabold md:text-4xl">현장에 필요한 기능을 명확하게</h2>
            </div>
            <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <article key={feature.title} className="border-t border-slate-700 pt-5">
                  <span className="text-xs font-extrabold text-blue-400">0{index + 1}</span>
                  <h3 className="mt-2 text-lg font-extrabold">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{feature.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {(metrics.length > 0 || proofTitle) && (
          <section className="bg-white py-20 md:py-24">
            <div className="container mx-auto px-4">
              <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                <div>
                  <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-blue-700">Evidence</p>
                  <h2 className="text-3xl font-extrabold leading-tight text-slate-950">{proofTitle || '현장에서 확인된 적용 효과'}</h2>
                  {proofBody && <p className="mt-5 leading-8 text-slate-600">{proofBody}</p>}
                </div>
                <div className="grid gap-px overflow-hidden rounded-lg border border-slate-200 bg-slate-200 sm:grid-cols-2">
                  {metrics.map((metric) => (
                    <div key={metric.label} className="bg-slate-50 p-7">
                      <strong className="block text-4xl font-extrabold text-blue-800">{metric.value}</strong>
                      <span className="mt-2 block font-bold text-slate-900">{metric.label}</span>
                      {metric.note && <span className="mt-2 block text-xs leading-5 text-slate-500">{metric.note}</span>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        <section className="border-t border-slate-200 bg-slate-50 py-14">
          <div className="container mx-auto flex flex-col gap-5 px-4 md:flex-row md:items-center md:justify-between">
            <p className="max-w-3xl text-xl font-extrabold leading-8 text-slate-900">{footerMessage}</p>
            <Link to="/contact" className="inline-flex w-fit items-center gap-2 rounded-md bg-blue-700 px-5 py-3 text-sm font-bold text-white hover:bg-blue-800">문의하기 <i className="ri-arrow-right-line" /></Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
