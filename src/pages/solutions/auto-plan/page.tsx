import './visuals.css';
import ScreenExplorer from '../../../components/feature/ScreenExplorer';
import { Link } from 'react-router-dom';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import { FieldAIVisualSection } from '../../../components/feature/SolutionDetailPage';

const agents = [
  { no:'01', name:'The Eye', role:'AI 수주 인식', body:'발주서에서 품목·수량·납기를 인식하고 검증된 주문 데이터로 전환합니다.', href:'/solutions/auto-plan/the-eye' },
  { no:'02', name:'The Brain', role:'AI 생산계획', body:'설비·인원·자재·납기를 반영해 실행 가능한 생산계획과 재계획안을 만듭니다.', href:'/solutions/auto-plan/the-brain' },
  { no:'03', name:'Field AI', role:'현장 자율 실행', body:'작업지시와 LOT를 현장에 연결하고 생산실적·공정·재고 변화를 수집합니다.', href:'/solutions/auto-plan/field' },
  { no:'04', name:'The Flow', role:'AI 품질 이력 관리', body:'LOT·4M·검사·불량·조치 이력을 생산 과정에서 자동으로 연결합니다.', href:'/solutions/auto-plan/the-flow' }
];

const operationScreens = [
  { image:'/assets/approved-screens/autoplan-planning.png', label:'The Brain', title:'설비별 생산계획', description:'설비와 시간에 따른 작업 순서를 전체 간트차트로 확인합니다.', alt:'AutoPlan 생산계획 실제 화면' },
  { image:'/assets/approved-screens/autoplan-milestone.png', label:'The Brain', title:'납기 마일스톤', description:'계획된 작업과 출하·성형·전면 상태를 달력에서 살펴봅니다.', alt:'AutoPlan 마일스톤 실제 화면' },
  { image:'/assets/approved-screens/autoplan-sequence.png', label:'Field AI', title:'서열 수주와 재고', description:'품목별 수요·수주·재고를 날짜별로 확인합니다.', alt:'AutoPlan 서열 수주 관리 실제 화면' },
  { image:'/assets/approved-screens/autoplan-inventory.png', label:'The Flow', title:'재고 흐름', description:'출고·생산·재고의 변화를 기간별로 비교합니다.', alt:'AutoPlan 재고 현황 실제 화면' }
];


const journey = [
 ['AI 수주 인식', 'The Eye', '발주서의 품목·수량·납기를 인식하고 주문 데이터를 검증합니다.'],
 ['AI 생산계획', 'The Brain', '설비·자재·인원·납기 제약을 반영해 계획과 재계획안을 만듭니다.'],
 ['현장 실행', 'Field AI', '작업지시를 현장에 전달하고 설비·생산실적을 연결합니다.'],
 ['품질·LOT 추적', 'The Flow', '검사·불량·조치 이력을 LOT와 연결해 추적합니다.'],
 ['출하 연결', 'Delivery', '생산완료와 품질 이력을 출하 계획에 연결합니다.']
];
const features = [
 ['AI 문서 인식', 'OCR', '발주서·이메일·PDF에서 주문 정보를 추출하고 검증합니다.'],
 ['AI 생산계획', 'APS', '현장 제약조건을 반영해 작업 순서와 일정을 계획합니다.'],
 ['PLC / IoT 연동', 'Field Data', '설비 상태와 생산실적을 수집해 현장 흐름을 확인합니다.'],
 ['XAI 원인 분석', 'Explainable AI', '이상 징후와 영향 요인을 분석해 판단 근거를 제공합니다.'],
 ['LOT 추적', 'Traceability', '원자재·공정·검사·출하 이력을 연결해 관련 LOT를 찾습니다.'],
 ['AI 대시보드', 'Dashboard', '생산·품질·설비 지표를 한 화면에서 확인합니다.'],
 ['ERP / MES 연동', 'Integration', '기존 시스템의 데이터를 연결해 중복 입력을 줄입니다.'],
 ['SQ 대응 지원', 'Quality Evidence', '품질 이력과 증빙 자료를 정리해 심사 대응을 지원합니다.']
];
function ArchitectureIcon({index}: {index:number}) {
 return <span className="ap-architecture-icon" aria-hidden="true" style={{backgroundPosition:`${index % 4 / 3 * 100}% ${Math.floor(index / 4) / 3 * 100}%`}} />;
}
function ArchitectureDiagram() {
 const sources = [[0,'SCM · 이메일 · PDF'],[1,'ERP'],[2,'MES'],[3,'PLC · 센서'],[4,'WMS']] as const;
 const gateway = [[5,'REST API'],[6,'Kafka Event Bus'],[7,'Read-only DB Connector']] as const;
 const agentItems = [[8,'The Eye','데이터 수집 및 모니터링','eye'],[9,'The Brain','분석 및 예측 · 최적화','brain'],[10,'Field AI','현장 실행 지원 및 이상 감지','field'],[11,'The Flow','워크플로우 및 업무 자동화','flow']] as const;
 const outputs = [[12,'생산계획 간트차트'],[13,'XAI 리포트'],[14,'LOT 추적 리포트'],[15,'경영 대시보드']] as const;
 return <div className="ap-architecture" aria-label="데이터 소스에서 연계 게이트웨이, 4대 AI Agent, 사용자 출력으로 이어지는 시스템 구성">
  <section className="ap-architecture-column"><h3>데이터 소스</h3><div className="ap-architecture-content"><p className="ap-source-label">외부 데이터</p>{sources.map(([index,title],i)=><div key={title}>{i===2&&<p className="ap-source-label ap-source-divider">내부 데이터</p>}<div className="ap-system-card"><ArchitectureIcon index={index}/><strong>{title}</strong></div></div>)}</div></section>
  <span className="ap-architecture-arrow" aria-hidden="true">→</span>
  <section className="ap-architecture-column"><h3>Integration Gateway</h3><div className="ap-architecture-content ap-gateways">{gateway.map(([index,title])=><div className="ap-system-card ap-gateway-card" key={title}><ArchitectureIcon index={index}/><strong>{title}</strong></div>)}</div></section>
  <span className="ap-architecture-arrow" aria-hidden="true">→</span>
  <section className="ap-architecture-column ap-orchestrator"><h3>WiseCollab Core AI Orchestrator</h3><div className="ap-architecture-content ap-orchestrator-content"><div className="ap-core-hub"><i className="ri-links-line" aria-hidden="true"/><strong>WiseCollab</strong><span>Core AI Orchestrator</span></div><div className="ap-agent-stack">{agentItems.map(([index,title,body,color])=><div className={`ap-system-card ap-agent-card ap-agent-${color}`} key={title}><ArchitectureIcon index={index}/><div><strong>{title}</strong><p>{body}</p></div></div>)}</div></div></section>
  <span className="ap-architecture-arrow" aria-hidden="true">→</span>
  <section className="ap-architecture-column"><h3>사용자 / 출력</h3><div className="ap-architecture-content ap-output-stack">{outputs.map(([index,title])=><div className="ap-system-card" key={title}><ArchitectureIcon index={index}/><strong>{title}</strong></div>)}</div></section>
 </div>;
}
const featureBenefits = ['주문 데이터 입력·검증 지원','현장 제약을 반영한 계획 수립','설비·생산실적 수집 연결','이상 원인과 판단 근거 확인','원자재부터 출하까지 이력 연결','운영 지표를 한눈에 확인','기존 시스템을 유지하며 연계','품질 이력·증빙 자료 정리'];
function FeatureCards() {
 return <div className="ap-feature-panel"><div className="ap-feature-grid">{features.map(([title,label,body],index)=><article className={`ap-feature-card ap-feature-tone-${[0,1,2,3,0,1,0,1][index]}`} key={title}>
  <span className="ap-feature-badge">{String(index+1).padStart(2,'0')}</span>
  <div className="ap-feature-main"><div className="ap-feature-icon" role="img" aria-label={title} style={{backgroundPosition:`${index % 4 / 3 * 100}% ${Math.floor(index / 4)*100}%`}}/><div className="ap-feature-copy"><h3>{title}</h3><p className="ap-feature-label">{label}</p><p className="ap-feature-description">{body}</p></div></div>
  <div className="ap-feature-benefit"><i className="ri-checkbox-circle-fill" aria-hidden="true"/><span>{featureBenefits[index]}</span></div>
 </article>)}</div></div>;
}
const journeyPoints = [
 ['발주서·이메일·PDF 정보 인식','품목·수량·납기 데이터 검증','ERP 주문 정보 연결'],
 ['설비·자재·인원·공정 제약 반영','실행 가능한 생산계획 수립','변경 조건에 따른 재계획'],
 ['작업지시와 현장 LOT 연결','PLC·MES·IoT 실적 수집','설비·공정 상태 확인'],
 ['LOT·검사·불량 이력 연결','품질 조치와 근거 관리','추적·품질 자료 활용'],
 ['생산완료와 출하 계획 연결','출하 대상과 이력 확인','납기 대응 지원']
];
function JourneyCards() {
 return <div className="ap-journey-panel"><div className="ap-journey-grid">{journey.map(([title,label],index)=><article className={`ap-journey-card ap-feature-tone-${[0,1,2,3,0][index]}`} key={title}>
 <span className="ap-journey-number">{index+1}</span>
 {index<4 ? <ArchitectureIcon index={[8,9,10,11][index]}/> : <i className="ri-box-3-line ap-shipping-icon" aria-hidden="true"/>}
 <h3>{title}</h3><p className="ap-journey-label">{label}</p>
 <ul>{journeyPoints[index].map(point=><li key={point}><i className="ri-checkbox-circle-fill" aria-hidden="true"/><span>{point}</span></li>)}</ul>
 <div className="ap-journey-art" aria-hidden="true" style={{backgroundPosition:`${index/4*100}% 50%`}}/>
 </article>)}</div>
 <div className="ap-journey-connection"><strong>기존 시스템 연계 · 현장 피드백</strong><div className="ap-journey-systems"><span><i className="ri-database-2-line"/>ERP <small>주문·기준정보</small></span><b aria-hidden="true">↔</b><span><i className="ri-computer-line"/>MES <small>생산·품질 이력</small></span><b aria-hidden="true">↔</b><span><i className="ri-cpu-line"/>PLC / IoT <small>설비·센서 데이터</small></span></div></div>
 </div>;
}

const factorySteps = [
 {title:'영업',label:'고객 · 영업 관리',icon:'ri-team-line',points:['고객과 영업 정보 관리','수요·납기 요구 확인']},
 {title:'수주',label:'발주 · 계약 관리',image:0,points:['발주 정보 인식·검증','품목·수량·납기 확인']},
 {title:'생산계획',label:'AI 생산계획 수립',image:12,points:['설비·자재·인원 제약 반영','작업 순서·일정 계획']},
 {title:'작업지시',label:'작업지시 · 자재 배분',image:13,points:['계획을 작업지시로 전환','공정·자재 정보 전달']},
 {title:'생산',label:'현장 실행 · 실적 수집',image:10,points:['설비·공정 상태 확인','생산실적·LOT 수집']},
 {title:'품질',label:'품질검사 · 이력 관리',image:14,points:['검사·불량·조치 기록','생산 LOT와 품질 연결']},
 {title:'출하',label:'출하 · 납품 관리',icon:'ri-truck-line',points:['생산완료·출하 계획 연결','납품과 출하 이력 확인']}
];
function FactoryCards() {
 return <div className="ap-factory-panel"><div className="ap-factory-grid">{factorySteps.map((step,index)=><article className="ap-factory-card" key={step.title}>
 <span className="ap-journey-number">{String(index+1).padStart(2,'0')}</span>
 {'image' in step && typeof step.image === 'number' ? <ArchitectureIcon index={step.image}/> : <i className={`${step.icon} ap-factory-icon`} aria-hidden="true"/>}
 <h3>{step.title}</h3><p className="ap-factory-label">{step.label}</p>
 <ul>{step.points.map(point=><li key={point}><i className="ri-checkbox-circle-fill" aria-hidden="true"/><span>{point}</span></li>)}</ul>
 </article>)}</div><div className="ap-factory-note">수주·계획 → 작업지시·현장 실행 → 품질·출하 이력</div></div>;
}

export default function AutoPlanPage() {
return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <main>
        <section className="relative overflow-hidden border-b border-blue-100 bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-32 pb-16 md:pt-40 md:pb-24">
          <div className="pointer-events-none absolute -right-44 -top-64 h-[560px] w-[560px] rounded-full bg-blue-500/10" />
          <div className="container relative mx-auto px-4">
            <div className="grid gap-14 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
              <div>
                <p className="mb-5 text-sm font-extrabold uppercase tracking-[0.18em] text-blue-700">Manufacturing Operating Intelligence</p>
                <h1 className="text-[36px] font-extrabold leading-[1.16] tracking-[-0.04em] text-slate-950 md:text-[48px] xl:text-[52px]"><span className="block xl:whitespace-nowrap">기존 MES는 그대로,</span><span className="block text-blue-700 xl:whitespace-nowrap">제조 운영은 지능적으로.</span></h1>
                <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 md:text-[17px]">WiseCollab AutoPlan은 수주 인식부터 생산계획, 현장 실행과 품질 이력까지 연결합니다. 기존 ERP·MES의 원천데이터를 보호하면서 필요한 영역부터 단계적으로 적용합니다.</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {['수주 AI 인식','제약 기반 생산계획','LOT·4M 품질 이력'].map(item=><span key={item} className="rounded-full border border-blue-200 bg-white px-3.5 py-2 text-xs font-bold text-blue-800">{item}</span>)}
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="#agents" className="rounded-md bg-blue-700 px-5 py-3.5 text-sm font-bold text-white shadow-sm hover:bg-blue-800">4대 Agent 살펴보기 <i className="ri-arrow-right-line ml-1" /></a>
                  <Link to="/solutions/xai" className="rounded-md border border-slate-300 bg-white px-5 py-3.5 text-sm font-bold text-slate-800 hover:border-blue-500 hover:text-blue-700">XAI 데이터 분석</Link>
                </div>
              </div>
              <div className="relative">
                <span className="absolute -left-4 -top-5 z-10 rounded-md bg-[#071a33] px-4 py-3 text-[11px] font-extrabold uppercase tracking-[0.16em] text-blue-300 shadow-lg">Actual Operation</span>
                <div className="overflow-hidden rounded-2xl border border-blue-200 bg-white p-3 shadow-[0_28px_70px_rgba(30,64,175,.2)]">
                  <img src="/assets/v12/autoplan-hero-operation.png" alt="WiseCollab AutoPlan 생산계획 실제 운영 화면" className="h-auto w-full rounded-lg border border-slate-200 object-contain" />
                  <div className="flex flex-col gap-1 px-2 pb-1 pt-4 sm:flex-row sm:items-center sm:justify-between">
                    <strong className="text-sm text-slate-950">WiseCollab AutoPlan</strong>
                    <span className="text-xs text-slate-500">계획 · 실행 · 재고 · 품질 통합 운영</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="agents" className="bg-white py-20 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-10 grid gap-7 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
              <div><p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-blue-700">AutoPlan Concept</p><h2 className="text-3xl font-extrabold leading-tight text-slate-950 md:text-4xl">수주부터 출하까지,<br/>하나의 지능형 제조 흐름으로.</h2></div>
              <p className="max-w-2xl text-base leading-8 text-slate-600">The Eye, The Brain, Field AI와 The Flow가 수주·계획·실행·품질 데이터를 연결합니다. ERP·MES·PLC/IoT와 양방향으로 연계하면서 기존 시스템을 유지하고 필요한 지능화 기능을 확장합니다.</p>
            </div>
            <JourneyCards />
            <div className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">{agents.map(agent=><Link key={agent.no} to={agent.href} className="group flex items-center justify-between rounded-lg border border-slate-200 bg-white px-5 py-4 text-sm font-bold text-slate-800 hover:border-blue-500 hover:text-blue-700"><span><span className="mr-2 text-xs text-blue-700">{agent.no}</span>{agent.name}</span><i className="ri-arrow-right-line transition group-hover:translate-x-1"/></Link>)}</div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-[#071a33] py-20 text-white md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-10 grid gap-7 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
              <div><p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-blue-300">Factory Process</p><h2 className="text-3xl font-extrabold leading-tight md:text-4xl">영업부터 생산·품질·출하까지<br/>공장 업무를 연결합니다.</h2></div>
              <p className="max-w-2xl text-base leading-8 text-slate-300">수주와 생산계획을 작업지시로 전환하고, 현장 실적과 품질 이력을 수집해 출하까지 이어지는 전체 프로세스를 하나의 데이터 흐름으로 관리합니다.</p>
            </div>
            <FactoryCards />
          </div>
        </section>

        <section className="bg-gradient-to-b from-slate-50 to-white py-20 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-10 grid gap-7 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
              <div><p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-blue-700">AutoPlan Features</p><h2 className="text-3xl font-extrabold leading-tight text-slate-950 md:text-4xl">현장 적용성과 운영 효과를<br/>함께 설계합니다.</h2></div>
              <p className="max-w-2xl text-base leading-8 text-slate-600">문서 인식, 생산계획, 설비 연동과 원인 분석뿐 아니라 LOT 추적, 대시보드, 기존 시스템 연계와 SQ 대응까지 제조 운영에 필요한 핵심 기능을 제공합니다.</p>
            </div>
            <FeatureCards />
          </div>
        </section>

        <FieldAIVisualSection />

        <section className="border-y border-slate-200 bg-slate-50 py-20 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
              <div><p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-blue-700">Actual Operation</p><h2 className="text-3xl font-extrabold text-slate-950 md:text-4xl">AutoPlan은 실제 현장 업무 화면에서 작동합니다.</h2></div>
              <p className="max-w-2xl leading-8 text-slate-600">AI를 표현한 가상 이미지 대신 수주 인식, 생산계획, 현장 대시보드와 추적관리의 실제 운영 화면을 보여드립니다.</p>
            </div>
            <ScreenExplorer product="WiseCollab AutoPlan" screens={operationScreens} note="사용자가 제공한 실제 운영 화면입니다. 화면 속 수치는 제품 성과 수치가 아닙니다." />
          </div>
        </section>

        <section className="bg-white py-20 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-10 grid gap-7 lg:grid-cols-[0.8fr_1.2fr] lg:items-end"><div><p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-blue-700">System Architecture</p><h2 className="text-[32px] font-extrabold leading-[1.22] tracking-[-0.025em] text-slate-950 md:text-[42px]">ERP와 MES는 그대로,<br/>필요한 데이터만 연결합니다.</h2></div><p className="max-w-2xl leading-8 text-slate-600">원천시스템을 대체하지 않는 Read-only 연결을 기반으로 AutoPlan 공통 데이터 모델과 4대 Agent를 적용합니다.</p></div>
            <ArchitectureDiagram />
          </div>
        </section>

        <section className="bg-white py-20 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-blue-700">S Company PoC</p>
                <h2 className="text-3xl font-extrabold leading-tight text-slate-950 md:text-4xl">자동차부품 제조사 S사에서 확인된 변화</h2>
                <p className="mt-5 leading-8 text-slate-600">엑셀 수기 계획과 담당자 의존 문제를 생산계획 자동화 및 출하계획 연결로 개선했습니다.</p>
              </div>
              <div className="grid gap-px overflow-hidden rounded-lg border border-slate-200 bg-slate-200 sm:grid-cols-2">
                <div className="bg-blue-50 p-8"><strong className="text-5xl font-extrabold text-blue-800">96%</strong><p className="mt-2 font-bold">생산계획 업무시간 단축</p></div>
                <div className="bg-slate-50 p-8"><strong className="text-2xl font-extrabold">긴급오더 재계획</strong><p className="mt-3 text-sm leading-6 text-slate-600">변경 조건과 납기 영향을 반영한 계획 재수립</p></div>
                <div className="bg-slate-50 p-8"><strong className="text-2xl font-extrabold">계획·출하 연결</strong><p className="mt-3 text-sm leading-6 text-slate-600">생산완료 예상과 출하 요구를 하나의 흐름으로 관리</p></div>
                <div className="bg-slate-50 p-8"><strong className="text-2xl font-extrabold">담당자 의존 완화</strong><p className="mt-3 text-sm leading-6 text-slate-600">현장 규칙과 제약조건을 시스템에 구조화</p></div>
              </div>
            </div>
            <p className="mt-7 text-xs text-slate-500">* 자동차부품 제조사 S사 PoC 결과 기준이며, 현장별 데이터·제약조건·구축 범위에 따라 적용 결과가 달라집니다.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
