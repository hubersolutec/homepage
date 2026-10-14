const stages = [
  { n:'01', title:'Agent·규칙', body:'요청 이해 · 작업 계획 · 조건 검토', position:'agent' },
  { n:'02', title:'해석 실행', body:'Solver 실행 · 결과·피처 추출', position:'run' },
  { n:'03', title:'Run 축적 · 지식 DB', body:'모델·조건·결과·이력 · 검토 근거·승인 기록', position:'knowledge' },
  { n:'04', title:'실행 지원', body:'시간·실패 예측 · 사례 검색 · 조건 추천', position:'support' },
];
export default function FaberemAssetCycle() {
  return <figure className="faberem-asset-cycle"><div className="faberem-asset-cycle-art">
    <img src="/assets/faberem-visuals/analysis-reuse-cycle-hd.png" alt="조건 검토, 해석 실행, Run과 지식 축적, 다음 해석 지원이 시계 방향으로 연결된 3D 순환 그림" loading="lazy"/>
    {stages.map(stage=><div key={stage.n} className={'faberem-cycle-label '+stage.position}><span>{stage.n}</span><h3>{stage.title}</h3><p>{stage.body}</p></div>)}
  </div><ol className="faberem-cycle-mobile">{stages.map(stage=><li key={stage.n}><b>{stage.n} · {stage.title}</b><p>{stage.body}</p></li>)}</ol><figcaption>요청 → 해석 실행 → 근거 축적 → 다음 해석에 재사용 · 고도화 개념</figcaption></figure>;
}

