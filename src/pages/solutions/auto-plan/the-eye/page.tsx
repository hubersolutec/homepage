import './visuals.css';
import { Link } from 'react-router-dom';
import Header from '../../../../components/feature/Header';
import Footer from '../../../../components/feature/Footer';

const challenges = [
  ['01', '서로 다른 발주서', '고객사마다 문서 형식과 항목명이 달라 반복 입력이 발생합니다.'],
  ['02', '수기 입력 오류', '품번·수량·납기 오입력이 생산계획과 출하 오류로 이어집니다.'],
  ['03', '분산된 주문 채널', '이메일·PDF·엑셀·SCM 주문을 한곳에서 확인하기 어렵습니다.'],
  ['04', '검증 업무 지연', '원본 문서와 ERP 등록 데이터의 대조에 많은 시간이 필요합니다.'],
];

const eyeProcess = [
 [0,'문서 수집','PDF · 이미지 · 엑셀 · 이메일 · SCM','여러 채널의 주문 문서를 수집합니다.','주문 원본 확보'],
 [8,'AI 문서 인식','품번 · 수량 · 납기 추출','문서 구조를 읽어 핵심 주문 정보를 추출합니다.','입력 데이터 구조화'],
 [13,'검토·검증','중복 · 누락 · 품목 확인','원본과 인식 결과를 대조하고 확인 대상을 검토합니다.','담당자 최종 확인'],
 [1,'ERP 연결','검증된 주문정보 전달','확정한 데이터를 기존 ERP 등록 흐름에 연결합니다.','주문 데이터 연결'],
 [12,'생산계획 연결','The Brain 계획 입력','확정된 수주·납기 데이터를 생산계획에 전달합니다.','계획 입력으로 활용']
] as const;
const eyeFunctions = [
 [0,'문서 구조 인식','고객사마다 다른 발주서의 항목 구조와 핵심 필드를 인식합니다.','비정형 문서 정보 추출'],
 [7,'품번·거래처 매핑','고객사 표기와 내부 품번·거래처 마스터를 연결합니다.','내부 기준정보와 연결'],
 [13,'중복·누락 검증','기등록 주문과 필수정보를 비교해 확인 대상을 표시합니다.','확인 대상 식별'],
 [15,'검토 중심 화면','원본과 인식 결과를 한 화면에서 비교하고 최종 확정합니다.','원본과 결과 대조'],
 [1,'ERP 자동 등록','검증이 완료된 주문정보를 기존 ERP 흐름에 맞춰 전달합니다.','검증된 주문정보 전달'],
 [12,'생산계획 연결','확정된 수주·납기 데이터를 The Brain의 계획 입력으로 연결합니다.','수주·납기 데이터 활용']
] as const;
function EyeIcon({index}:{index:number}) { return <span className="eye-visual-icon" aria-hidden="true" style={{backgroundPosition:`${index%4/3*100}% ${Math.floor(index/4)/3*100}%`}}/>; }
function EyeProcess({compact=false}:{compact?:boolean}) {
 return <div className={`eye-process-panel ${compact?'eye-process-compact':''}`}><div className="eye-process-grid">{eyeProcess.map(([icon,title,label,body,result],i)=><article className="eye-process-card" key={title}><span className="eye-number">{String(i+1).padStart(2,'0')}</span><EyeIcon index={icon}/><h3>{title}</h3><p className="eye-process-label">{label}</p>{!compact&&<p className="eye-card-body">{body}</p>}<div className="eye-result">{result}</div></article>)}</div></div>;
}
function EyeFunctionCards() {
 return <div className="eye-functions-grid">{eyeFunctions.map(([icon,title,body,result],i)=><article className="eye-function-card" key={title}><span className="eye-number">{String(i+1).padStart(2,'0')}</span><div className="eye-function-main"><EyeIcon index={icon}/><div><h3>{title}</h3><p className="eye-card-body">{body}</p></div></div><div className="eye-result"><i className="ri-checkbox-circle-fill" aria-hidden="true"/>{result}</div></article>)}</div>;
}

export default function TheEyePage() {
  return <div className="min-h-screen bg-white text-slate-900">
    <Header />
    <main>
      <section className="relative overflow-hidden bg-gradient-to-br from-[#06183a] via-[#0a3fa8] to-[#079bd8] pt-28 text-white md:pt-36">
        <div className="pointer-events-none absolute inset-0 opacity-[0.08]" style={{backgroundImage:'linear-gradient(rgba(255,255,255,.7) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.7) 1px,transparent 1px)',backgroundSize:'44px 44px'}} />
        <div className="pointer-events-none absolute -right-40 -top-52 h-[620px] w-[620px] rounded-full bg-cyan-300/15 blur-3xl" />
        <div className="pointer-events-none absolute right-[3%] top-[22%] hidden h-[360px] w-[700px] rounded-[50%] border border-cyan-200/20 lg:block" />
        <div className="pointer-events-none absolute right-[8%] top-[29%] hidden h-[270px] w-[580px] rounded-[50%] border border-cyan-200/15 lg:block" />
        <div className="container relative mx-auto px-4 pb-20 md:pb-24">
          <Link to="/solutions/auto-plan" className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-blue-100 hover:text-white"><i className="ri-arrow-left-line"/> AutoPlan 전체보기</Link>
          <div className="grid gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-cyan-200">AutoPlan Layer 01 · Order Intelligence</p>
              <h1 className="mt-5 text-[52px] font-extrabold leading-none tracking-[-0.04em] md:text-[68px]">The Eye</h1>
              <h2 className="mt-7 text-[30px] font-extrabold leading-[1.22] tracking-[-0.03em] md:text-[40px]"><span className="block text-cyan-200">들어오는 주문을 읽고,</span><span className="block">생산 가능한 데이터로 전환합니다.</span></h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-blue-50/85">PDF·이미지·엑셀·이메일·SCM 주문을 인식해 품번·수량·납기를 검증하고 ERP와 생산계획에 연결합니다.</p>
              <div className="mt-7 flex flex-wrap gap-2">{['비정형 문서 인식','품번·납기 검증','ERP 자동 등록'].map(item=><span key={item} className="rounded-full border border-cyan-200/40 bg-white/10 px-4 py-2 text-xs font-bold text-cyan-50 backdrop-blur">{item}</span>)}</div>
              <a href="#process" className="mt-8 inline-flex items-center gap-2 rounded-md bg-white px-5 py-3.5 text-sm font-extrabold text-blue-800 shadow-lg hover:bg-cyan-50">인식 과정 살펴보기 <i className="ri-arrow-right-line"/></a>
            </div>
            <div className="relative rounded-[24px] border border-cyan-100/70 bg-white/95 p-3 shadow-[0_30px_90px_rgba(0,18,51,.45)] md:p-5"><span className="absolute -left-4 -top-5 rounded-md bg-cyan-300 px-4 py-2.5 text-[11px] font-black uppercase tracking-[0.16em] text-blue-950 shadow-lg">Order Intelligence</span><img src="/assets/the-eye/concept-hd.png" alt="The Eye 문서 수집, AI 인식과 ERP 등록 개념도" className="h-auto w-full rounded-xl"/></div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 lg:grid-cols-[0.68fr_1.32fr] lg:items-start">
            <div><p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">Manufacturing Challenge</p><h2 className="mt-3 text-3xl font-extrabold leading-tight text-slate-950 md:text-4xl">주문 입력 단계의<br/>반복과 오류를 줄입니다.</h2></div>
            <div className="grid gap-px overflow-hidden rounded-xl border border-slate-200 bg-slate-200 sm:grid-cols-2">{challenges.map(([no,title,body])=><article key={no} className="min-h-36 bg-white p-6"><span className="text-xs font-black text-blue-700">{no}</span><h3 className="mt-2 text-lg font-extrabold text-slate-950">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{body}</p></article>)}</div>
          </div>
        </div>
      </section>

      <section id="process" className="bg-white py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-10 grid gap-7 lg:grid-cols-[0.78fr_1.22fr] lg:items-end"><div><p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">How It Works</p><h2 className="mt-3 text-3xl font-extrabold leading-tight text-slate-950 md:text-4xl">문서 인식부터 생산계획 생성까지 이어집니다.</h2></div><p className="max-w-2xl leading-8 text-slate-600">주문을 읽는 데서 끝나지 않습니다. 중복·품목·납품처를 검증한 데이터를 ERP와 생산계획으로 전달합니다.</p></div>
          <EyeProcess />
        </div>
      </section>

      <section className="border-y border-blue-900 bg-[#071a33] py-20 text-white md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-10 grid gap-7 lg:grid-cols-[0.78fr_1.22fr] lg:items-end"><div><p className="text-sm font-bold uppercase tracking-[0.16em] text-cyan-300">Actual Operation</p><h2 className="mt-3 text-3xl font-extrabold leading-tight md:text-4xl">실제 발주서를 불러와<br/>인식 결과를 검토합니다.</h2></div><p className="max-w-2xl leading-8 text-slate-300">원본 문서, 핵심 필드 추출 결과와 ERP 등록 흐름을 실제 WiseCollab 운영 화면에서 확인합니다.</p></div>
          <div className="overflow-hidden rounded-2xl border border-white/15 bg-white p-4 shadow-[0_30px_90px_rgba(0,0,0,.35)] md:p-7"><img src="/assets/the-eye/actual-operation-hd.png" alt="WiseCollab The Eye 실제 발주서 AI 자동인식 화면" className="h-auto w-full"/></div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-blue-50 to-white py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-10 max-w-4xl"><p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">Key Functions</p><h2 className="mt-3 text-3xl font-extrabold leading-tight text-slate-950 md:text-4xl">반복 입력은 줄이고,<br/>검토와 예외 대응에 집중합니다.</h2></div>
          <EyeFunctionCards />
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white py-20">
        <div className="container mx-auto px-4"><div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"><div><p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">Evidence</p><h2 className="mt-3 text-3xl font-extrabold text-slate-950">수기 입력을 검토 중심의 업무로 전환</h2><p className="mt-5 leading-8 text-slate-600">The Eye는 반복 입력을 줄이고 담당자가 예외와 오류 판단에 집중하도록 설계합니다.</p></div><div className="rounded-2xl border border-blue-100 bg-blue-50 p-8"><strong className="text-5xl font-extrabold text-blue-800">30초</strong><p className="mt-3 font-bold text-slate-950">주문문서 처리시간</p><p className="mt-2 text-xs leading-5 text-slate-500">현장별 데이터·제약조건·구축 범위에 따라 적용 결과가 달라집니다.</p></div></div></div>
      </section>
    </main>
    <Footer />
  </div>;
}
