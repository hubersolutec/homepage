import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';

export default function SustainabilityPage() {
  return (
    <div className="min-h-screen consulting-page">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#071a33] via-[#0b3264] to-[#071a33]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#071a33]/90 to-[#071a33]/80"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <p className="text-green-300 text-sm font-semibold mb-3 tracking-wide">서비스</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">지속가능경영 컨설팅</h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              ESG 경영 요구 확대에 대응하는<br className="md:hidden" />체계적인 지속가능경영 컨설팅을 제공합니다
            </p>
          </div>
        </div>
      </section>

      {/* ESG 공급망 컨설팅 정부지원사업 */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-600/10 text-blue-600 px-6 py-3 rounded-full text-sm font-semibold border border-blue-200 mb-6">
              <i className="ri-government-line w-4 h-4 flex items-center justify-center"></i>
              Government Support Program
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              ESG 공급망 컨설팅 <span className="text-blue-600">정부지원사업</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              산업통상자원부와 한국생산성본부가 함께하는 ESG 공급망 컨설팅 정부지원사업으로<br />
              중소·중견기업의 지속가능한 성장을 체계적으로 지원합니다.
            </p>
          </div>

          {/* 모집대상 */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-10">모집대상</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  number: '1',
                  title: '원청사로부터 ESG 경영을 요구받는 중소·중견기업',
                  description: '글로벌 공급망에서 ESG 요구사항 준수가 필요한 기업'
                },
                {
                  number: '2',
                  title: 'ESG 규제 대응이 필요한 해외 수출 중소·중견기업',
                  description: '유럽 그린딜, CSRD 등 해외 ESG 규제 대응이 시급한 기업'
                },
                {
                  number: '3',
                  title: 'ESG 경영에 관심이 있는 국내 모든 대·중·소기업',
                  description: 'ESG 경영 도입과 지속가능성 향상을 원하는 모든 기업'
                }
              ].map((item, index) => (
                <div key={index} className="group">
                  <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 h-full border border-gray-100 group-hover:border-blue-200">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-6 text-white font-bold text-xl">
                      {item.number}
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4 leading-snug">{item.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 지원내용 */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-10">지원내용</h3>
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="consulting-flow" aria-label="ESG 컨설팅 지원 흐름"><div><span>01</span><strong>현황 진단</strong><small>요구사항과 공급망 현황 확인</small></div><div><span>02</span><strong>평가·개선</strong><small>ESG 지표와 실행과제 정리</small></div><div><span>03</span><strong>보고·확산</strong><small>이행계획과 증빙 체계 마련</small></div></div>
                </div>
                <div>
                  <div className="space-y-6">
                    {[
                      'CSDDD & EcoVadis 등 ESG Standard Index 제공',
                      'ESG 등급 관리 및 리포트 작성 지원',
                      '탄가·중장기 이행방안 및 ESG 모델사례 제시',
                      '각종 ESG 관련 설명 서식 및 정책·수립 가이드 제공',
                      '국내 및 영문으로 제공상수 온라인 및 발급'
                    ].map((text, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <i className="ri-check-line text-white text-sm"></i>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">{text}</h4>
                          <p className="text-gray-600 text-sm">
                            {index === 0 && '글로벌 ESG 표준 지수와 평가 기준 제공'}
                            {index === 1 && '체계적인 ESG 등급 관리 시스템 구축'}
                            {index === 2 && '실행 가능한 중장기 로드맵과 성공사례 벤치마킹'}
                            {index === 3 && '실무에 바로 활용 가능한 양식과 가이드라인'}
                            {index === 4 && '국내외 활용을 위한 다국어 증명서 발급 시스템'}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 지원프로세스 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-purple-600/10 text-purple-600 px-6 py-3 rounded-full text-sm font-semibold border border-purple-200 mb-6">
              <i className="ri-flow-chart w-4 h-4 flex items-center justify-center"></i>
              Consulting Process
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="text-purple-600">지원프로세스</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              체계적인 4단계 프로세스를 통해 기업의 ESG 경영 수준을 진단하고<br />
              실질적인 개선방안을 제시합니다.
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {[
                {
                  step: 'Step 1',
                  title: '수혜기업선정',
                  description: '1순위: 특정 수출 기업\n2순위: 전체 수출 기업\n3순위: 수출 희망 기업',
                  items: ['ESG 경영 전반 진단', '기업 현황 및 니즈 분석', '맞춤형 컨설팅 계획 수립']
                },
                {
                  step: 'Step 2',
                  title: '온라인 자가진단',
                  description: '기업 담당자가 자가진단 시스템 접속\n사전조사 폼에 정보입력\n컨설턴트 룸에 정보 제시',
                  items: ['온라인 ESG 자가진단 시스템', '기업 현황 정보 입력', '전문 컨설턴트 배정']
                },
                {
                  step: 'Step 3',
                  title: '현장방문 컨설팅',
                  description: '기업 현장 ESG 진단 및 컨설팅\nESG 경영을 위한 현장 개선방안\n현장 자료 조사 결과시스템 제시',
                  items: ['현장 방문 ESG 진단', '개선방안 도출 및 제시', '실행계획 수립 지원']
                },
                {
                  step: 'Step 4',
                  title: '최종결과보고',
                  description: 'ESG 등급 향상 전략 결과 보고서\n성과달성도(컨설팅 전후비교) 리포트\n국문 및 영문 컨설팅수료증 발급',
                  items: ['ESG 등급 개선 결과 분석', '성과 측정 및 비교 분석', '수료증 발급 (국문/영문)']
                }
              ].map((item, index) => (
                <div key={index} className="relative group">
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-16 right-0 w-8 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 transform translate-x-4"></div>
                  )}
                  <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-500 h-full border border-purple-100 group-hover:border-purple-300">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-sm">
                        {item.step}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line mb-6">{item.description}</p>
                      <div className="space-y-2">
                        {item.items.map((text, i) => (
                          <div key={i} className="flex items-center text-sm text-gray-600">
                            <i className="ri-check-line text-purple-600 mr-2 flex-shrink-0"></i>
                            <span>{text}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8 rounded-2xl max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">전문 컨설팅 지원 기간</h3>
              <p className="text-lg mb-6">기업당 최대 6개월간 전문 컨설턴트가 직접 방문하여 맞춤형 ESG 컨설팅을 제공합니다.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/20 rounded-xl p-4">
                  <div className="text-2xl font-bold text-yellow-300 mb-2">6개월</div>
                  <p className="text-purple-100">컨설팅 기간</p>
                </div>
                <div className="bg-white/20 rounded-xl p-4">
                  <div className="text-2xl font-bold text-green-300 mb-2">현장방문</div>
                  <p className="text-blue-100">전문가 직접 방문</p>
                </div>
                <div className="bg-white/20 rounded-xl p-4">
                  <div className="text-2xl font-bold text-blue-300 mb-2">맞춤형</div>
                  <p className="text-purple-100">기업별 솔루션</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
