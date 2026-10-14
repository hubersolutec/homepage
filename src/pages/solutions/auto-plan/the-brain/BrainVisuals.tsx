import './visuals.css';
const fourM=[
 ['Man 인력',['작업 가능 인원','숙련도/스킬','근무 시간','가용성'],'가용 인력, 교대, 스킬'],
 ['Machine 설비',['설비 가용성','가동 시간','설비 용량','유지보수 일정'],'설비 용량, 가동 시간, 셋업'],
 ['Material 자재',['자재 가용량','입고 일정','재고 수준','대체 자재'],'재고, 조달 리드타임, LOT'],
 ['Method 공정',['공정 순서','작업 시간','변경 조건','품질 조건'],'공정 순서, 작업 시간, 라우팅']
] as const;
function Icon({sheet='vcf',x,y}:{sheet?:'vcf'|'engine'|'what';x:number;y:number}){
 let index=0;
 if(sheet==='engine') index=x<50?(y<40?0:2):(y<40?1:3);
 else if(sheet==='what') index=x<50?(y<40?12:y<70?13:14):9;
 else if(x<20) index=y<30?0:y<55?1:y<75?2:3;
 else if(x<50) index=y<25?4:y<45?5:y<65?6:y<80?7:8;
 else index=y<40?9:y<75?10:11;
 return <span aria-hidden="true" className="brain-clean-icon" style={{backgroundPosition:`${index%4/3*100}% ${Math.floor(index/4)/3*100}%`}}/>;
}
function MIcon({i}:{i:number}){return <Icon x={5} y={[19,43,64,85][i]}/>}
export function PlanningEngine(){return <div className="brain-engine">{[0,2].map((i)=><div className={`brain-m brain-m-${i}`} key={i}><div><Icon sheet="engine" x={i===0?26:26} y={i===0?18:65}/><h3>{fourM[i][0]}</h3></div><ul>{fourM[i][1].map(t=><li key={t}>{t}</li>)}</ul></div>)}<div className="brain-engine-core"><h3>AI 계획 엔진</h3><span className="brain-clean-core" role="img" aria-label="AI 계획 엔진 3D 뇌"/></div>{[1,3].map(i=><div className={`brain-m brain-m-${i}`} key={i}><div><Icon sheet="engine" x={77} y={i===1?18:65}/><h3>{fourM[i][0]}</h3></div><ul>{fourM[i][1].map(t=><li key={t}>{t}</li>)}</ul></div>)}</div>}
const flow=[['주문 데이터','주문 정보, 납기, 수량, 우선순위 수집'],['제약조건 분리','고정 제약과 가변 제약을 계층적으로 분리'],['우선순위 필터링','핵심 제약 기반 탐색 공간 축소 및 필터링'],['최적 스케줄 생성','탐색된 대안 중 최적 스케줄 계산 및 확정'],['실시간 재계획','변경 사항 감지 및 실시간 재계획 수행']];
const principles=[['고정 제약과 가변 제약 분리','변하지 않는 제약은 고정하고, 변동 제약만 유연하게 반영'],['탐색 공간 축소로 연산 속도 개선','계층적 필터링으로 불필요한 탐색을 제거하고 빠르게 계산'],['납기·가동률·비용 동시 최적화','납기 준수, 설비 가동률, 운영 비용을 균형 있게 최적화']];
export function VCFDiagram(){return <div className="brain-vcf"><div className="brain-column"><h3>4M 입력</h3>{fourM.map(([title,,detail],i)=><div className="brain-row" key={title}><MIcon i={i}/><div><h4>{title}</h4><p>{detail}</p></div></div>)}</div><span className="brain-arrow">→</span><div className="brain-flow"><h3>VCF 엔진 흐름도</h3>{flow.map(([title,detail],i)=><div key={title}><div className="brain-flow-row"><Icon x={35} y={[14,36,53,72,91][i]}/><div><h4>{i+1}. {title}</h4><p>{detail}</p></div></div>{i<4&&<span className="brain-down">↓</span>}</div>)}</div><span className="brain-arrow">→</span><div className="brain-column"><h3>VCF의 핵심</h3>{principles.map(([title,detail],i)=><div className="brain-principle" key={title}><b>{i+1}</b><Icon x={76} y={[27,58,87][i]}/><div><h4>{title}</h4><p>{detail}</p></div></div>)}</div></div>}
const bars=[[8,35,55,70,85],[12,22,45,62,80],[7,25,48,60,75],[10,30,52,66,82],[15,35,58,72,88]];
function Gantt({variant=0}:{variant?:number}){return <div className="brain-gantt"><div className="brain-dates">5/12　 5/13　 5/14　 5/15　 5/16</div>{bars.map((row,i)=><div className="brain-gantt-row" key={i}><small>라인{i+1}</small><div>{row.slice(0,i%2===0?3:2).map((v,j)=><span key={j} style={{left:`${(v+variant*7)%75}%`,width:`${18-j*3}%`,background:['#3984fa','#91c4ff','#45c6ad','#a696ef','#aeb7c5'][i]}}/>)}</div></div>)}</div>}
export function WhatIfDiagram(){return <div className="brain-what"><div className="brain-what-grid">{['Before|기존 계획','Event|이벤트 발생','AI Simulation|AI 시뮬레이션','Alternative Plan|대안 시뮬레이션','Best Plan|최적 계획 추천'].map(t=><h3 key={t}>{t.split('|')[0]}<small>{t.split('|')[1]}</small></h3>)}<div className="brain-what-box"><h4>기존 생산 계획 (예시)</h4><Gantt/></div><div className="brain-what-box brain-events">{[['긴급오더','09:15','고객 긴급오더 발생','납기: 5/14'],['설비고장','10:05','라인3 설비 고장 발생','예상 복구: 6시간'],['자재지연','11:20','특정 자재 입고 지연','지연: 1일']].map(([title,time,body,note],i)=><div className="brain-event" key={title}><Icon sheet="what" x={22} y={[33,57,81][i]}/><div><h4>{title} <small>{time}</small></h4><p>{body}<br/>{note}</p></div></div>)}</div><div className="brain-what-box brain-simulation"><h4>AI 다중 시나리오 시뮬레이션</h4><span className="brain-ai-orb">AI</span><strong>수천 가지 경우의 수를<br/>초 단위로 분석</strong></div><div className="brain-what-box brain-alternatives">{[['82%','120분'],['91%','60분'],['88%','90분']].map(([rate,stop],i)=><div key={rate}><strong>대안 {i+1}</strong><p>납기 준수율 {rate} | 라인 중단 {stop}</p><Gantt variant={i+1}/></div>)}</div><div className="brain-what-box"><div className="brain-best-title"><Icon sheet="what" x={82} y={27}/><div><h4>추천 최적 계획</h4><strong>대안 2</strong></div></div><p className="brain-best-rate">납기 준수율 91% | 라인 중단 60분</p><Gantt variant={2}/><div className="brain-best-note">✓ 최소 변경으로 납기 준수 극대화<br/>라인 중단 최소화 및 자원 효율 최적화</div></div></div></div>}

function OperationIcon({index}:{index:number}){return <span className="brain-clean-icon" aria-hidden="true" style={{backgroundPosition:`${index%4/3*100}% ${Math.floor(index/4)/3*100}%`}}/>}
export function ActualPlanningVisual(){return <div className="brain-operation"><div className="brain-operation-steps">{[
 [4,'수주 데이터 반영','ERP / 수주 시스템의','최신 주문 정보를 자동 반영'],
 [5,'4M 제약 계산','설비 · 자재 · 인력 · 공정의','제약 조건을 실시간 계산'],
 [15,'AI 스케줄 생성','AI가 최적의 생산 순서와','일정을 자동으로 생성'],
 [8,'What-if 재계획','변경 사항을 시뮬레이션하여','대안을 비교하고 즉시 반영']
 ].map(([index,title,line1,line2],i)=><div key={title}>{i>0&&<span className="brain-operation-down" aria-hidden="true">↓</span>}<article className={`brain-operation-step brain-operation-tone-${i}`}><OperationIcon index={Number(index)}/><div><h3>{title}</h3><p>{line1}<br/>{line2}</p></div></article></div>)}</div><div className="brain-operation-main"><figure><img src="/assets/approved-screens/autoplan-planning.png" alt="WiseCollab 원본 생산 현황 및 계획 간트차트 화면" loading="lazy"/></figure><div className="brain-operation-benefits">{[
 [11,'수기 계획 → 자동 계획','계획 수립 시간 90% 단축'],
 [8,'긴급 주문 대응','변경 시 즉시 재계획 (분 단위 반영)'],
 [3,'설비 · 자재 제약 반영','4M 제약을 고려한 실행 가능한 일정']
 ].map(([index,title,body],i)=><article className={`brain-operation-benefit brain-operation-tone-${i}`} key={title}><OperationIcon index={Number(index)}/><div><h3>{title}</h3><p>{body}</p></div></article>)}</div></div></div>}
