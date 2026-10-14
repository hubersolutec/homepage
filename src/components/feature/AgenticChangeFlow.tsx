export default function AgenticChangeFlow() {
  const stages = [
    { n: '01', title: '수요기업 변경요청', body: '사용자가 대상 화면과 원하는 변경, 이유를 자연어로 등록합니다.' },
    { n: '02', title: 'AI 분석·분류', body: '현재 업무·권한·데이터 영향을 확인하고 설정 변경, Skill 조합, 추가 개발로 분류합니다.' },
    { n: '03', title: '변경안과 검증', body: '설정·Skill 변경안은 가상환경에서 기능과 연계 영향을 검증합니다.' },
    { n: '04', title: '수요기업 확인·승인', body: '사용자와 관리자가 결과를 확인합니다. 승인된 변경만 운영에 반영합니다.' },
    { n: '05', title: '운영 반영·이력', body: '배포 후 변경·승인·버전을 기록하고 필요하면 이전 버전으로 복구합니다.' },
  ];
  return <section className="agentic-change-flow py-20 md:py-24" aria-labelledby="agentic-change-title"><div className="container mx-auto px-4">
    <p className="text-sm font-bold text-blue-700">수요기업이 요청하는 MES 변경</p><h2 id="agentic-change-title" className="mt-3 text-3xl font-bold md:text-4xl">변경은 검증과 승인을 거쳐 적용합니다.</h2>
    <p className="mt-5 max-w-3xl leading-8 text-slate-600">AI는 변경 방법을 판단하고 변경안을 작성합니다. 실제 운영환경 적용 여부는 수요기업의 확인과 담당자 승인으로 결정됩니다.</p>
    <ol className="agentic-flow-steps mt-10">{stages.map(stage => <li key={stage.n}><span>{stage.n}</span><h3>{stage.title}</h3><p>{stage.body}</p></li>)}</ol>
    <div className="agentic-flow-branch mt-8"><strong>추가 개발이 필요한 요청</strong><p>새 기능·데이터 구조·외부 연계는 후버솔루텍의 요구사항 분석, 기술검토와 견적을 거쳐 개발 승인 후 진행합니다.</p></div>
    <p className="mt-5 text-xs leading-6 text-slate-500">절차 설명은 제공된 Agentic MES IR 7~10·31쪽과 기술·플랫폼 운영매뉴얼을 바탕으로 웹에서 재구성했습니다.</p>
  </div></section>;
}
