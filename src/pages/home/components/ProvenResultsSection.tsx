
export default function ProvenResultsSection() {
  return (
    <>
      <section className="bg-blue-800 py-20 text-white md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-blue-200">Verified Results</p>
              <h2 className="text-3xl font-extrabold leading-tight md:text-4xl">AutoPlan, 자동차부품 제조사 S사에서 확인된 변화</h2>
              <p className="mt-5 leading-7 text-blue-100">엑셀과 담당자 경험에 의존하던 생산계획을 데이터와 제약조건 기반의 운영 체계로 전환했습니다.</p>
            </div>
            <div className="grid grid-cols-1 gap-px overflow-hidden rounded-lg bg-blue-600 sm:grid-cols-2">
              <div className="bg-blue-900/70 p-7">
                <strong className="block text-5xl font-extrabold">96%</strong>
                <span className="mt-2 block text-sm text-blue-100">생산계획 업무시간 단축</span>
              </div>
              <div className="bg-blue-900/70 p-7">
                <strong className="block text-5xl font-extrabold">95%</strong>
                <span className="mt-2 block text-sm text-blue-100">주문문서 처리시간 단축</span>
              </div>
              <div className="bg-blue-900/70 p-7">
                <strong className="block text-xl font-extrabold">긴급오더 재계획</strong>
                <span className="mt-2 block text-sm text-blue-100">변경 조건과 납기 영향을 반영</span>
              </div>
              <div className="bg-blue-900/70 p-7">
                <strong className="block text-xl font-extrabold">생산·출하 연결</strong>
                <span className="mt-2 block text-sm text-blue-100">계획과 실행 데이터를 하나의 흐름으로 관리</span>
              </div>
            </div>
          </div>
          <p className="mt-8 text-xs leading-5 text-blue-200">* 자동차부품 제조사 S사 PoC 결과 기준이며, 현장별 데이터·제약조건·구축 범위에 따라 적용 결과가 달라집니다.</p>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-blue-700">Why hubesolutec</p>
              <h2 className="text-3xl font-extrabold leading-tight text-slate-950 md:text-4xl">제조 현장을 이해하는 기술은 다릅니다.</h2>
            </div>
            <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {[
                ['01', '기존 시스템 보호', 'ERP·MES를 교체하지 않는 Read-only 연계로 기존 IT 자산과 원천데이터를 보호합니다.'],
                ['02', '업무 이력 연결', 'AutoPlan은 수주·계획·실적을, FABEREM은 설계·조건·실행·검토 이력을 연결합니다.'],
                ['03', '기업 데이터 보안', '고객 환경에 맞는 Local AI와 권한 기반 접근으로 제조·해석 데이터의 접근 범위를 관리합니다.'],
                ['04', '현장 검증과 기술자산', '제조 현장 PoC와 생산계획·물류 관련 특허를 바탕으로 실행 가능한 기술을 제공합니다.']
              ].map(([no, title, text]) => (
                <div key={no} className="border-t border-slate-300 pt-5">
                  <span className="text-xs font-extrabold text-blue-700">{no}</span>
                  <h3 className="mt-2 text-lg font-extrabold text-slate-900">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
