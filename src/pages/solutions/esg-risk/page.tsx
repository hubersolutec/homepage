import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import { Link } from 'react-router-dom';

export default function ESGRiskPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-600 to-blue-700 text-white py-32">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(https://readdy.ai/api/search-image?query=Modern%20digital%20ESG%20risk%20analysis%20dashboard%20with%20data%20visualization%20charts%20and%20graphs%20on%20multiple%20screens%20in%20a%20professional%20corporate%20environment%20with%20clean%20minimalist%20background%20in%20teal%20and%20blue%20tones%20showing%20environmental%20social%20governance%20metrics&width=1920&height=800&seq=esg-hero-001&orientation=landscape)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6">ESG Risk Analysis</h1>
            <p className="text-2xl mb-8 text-teal-100">ESG 사건사고 분석 플랫폼</p>
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              AI 기반 자연어처리(NLP)와 감성분석을 통해 매일 15,000건 이상의 뉴스를 분석하고,<br />
              기업의 ESG 리스크를 실시간으로 모니터링하여 조기 경보를 제공합니다.
            </p>
            <div className="flex gap-4">
              <Link 
                to="/contact" 
                className="inline-block bg-white text-teal-600 px-8 py-4 rounded-lg font-semibold hover:bg-teal-50 transition-colors whitespace-nowrap cursor-pointer"
              >
                무료 상담 신청
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ESG 사건사고 분석 플랫폼 */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">ESG 사건사고 분석 플랫폼</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-6">
                <i className="ri-file-list-3-line text-3xl text-teal-600"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">일별 ESG 사건사고 분석</h3>
              <p className="text-gray-600 leading-relaxed">
                매일 국내 주요 언론사에서 약 15,000건 이상의 뉴스 기사 중 기업과 관련한 뉴스를 수집합니다.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <i className="ri-brain-line text-3xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">AI 기반</h3>
              <p className="text-gray-600 leading-relaxed">
                자연어처리(NLP)와 감성분석을 통해 각 기사를 17개 ESG 이슈로 분류하고 리스크를 점수화합니다.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <i className="ri-line-chart-line text-3xl text-green-600"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">ESG 영향</h3>
              <p className="text-gray-600 leading-relaxed">
                ESG 사건은 기업과 이해관계자들에게 인적, 자연 환경적, 재무적, 정치적, 법적으로 부정적인 영향을 미칩니다.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <i className="ri-settings-3-line text-3xl text-purple-600"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">자동화</h3>
              <p className="text-gray-600 leading-relaxed">
                분석 전과정은 자동화되어 있으며 2015년부터 현재까지 ESG 사건사고 뉴스 데이터를 보유하고 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 주요 특징 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">주요 특징</h2>

          {/* 기업의 ESG 리스크 모니터링 */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20ESG%20risk%20monitoring%20dashboard%20showing%20real-time%20data%20charts%20graphs%20and%20analytics%20with%20stock%20price%20correlation%20on%20a%20modern%20laptop%20screen%20in%20a%20clean%20corporate%20office%20environment%20with%20simple%20white%20background&width=800&height=600&seq=esg-monitor-001&orientation=landscape"
                alt="ESG 리스크 모니터링"
                className="w-full rounded-xl shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-4 text-gray-900">기업의 ESG 리스크 모니터링</h3>
              <p className="text-xl text-teal-600 mb-6 font-semibold">ESG 데이터를 활용하여 새로운 투자 기회 발굴</p>
              <p className="text-gray-600 leading-relaxed text-lg">
                기업의 ESG 리스크 점수의 변동 추이를 파악하고, 동종산업군 내 기업과 비교할 수 있습니다. 
                또한, 주가와 연동하여 ESG 사건이 주가에 미치는 영향을 직관적으로 비교할 수 있으며, 
                ESG 이슈트리를 통해 기업의 주요 이슈들을 모니터링할 수 있습니다.
              </p>
            </div>
          </div>

          {/* ESG 조기 경보 */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 md:order-1">
              <h3 className="text-3xl font-bold mb-6 text-gray-900">ESG 조기 경보</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                ESG 모니터링 서비스로 AI 알고리즘이 매일 국내 90여개 언론사의 15,000여건의 기업 뉴스를 수집하여 
                ESG 사건사고 정보를 일 2회 이메일 서비스를 통해 제공합니다.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="bg-teal-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-teal-600 mb-2">90+</div>
                  <div className="text-gray-700">언론사</div>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">15,000+</div>
                  <div className="text-gray-700">일일 뉴스 수집</div>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">17개</div>
                  <div className="text-gray-700">ESG 이슈 분류</div>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-purple-600 mb-2">2회/일</div>
                  <div className="text-gray-700">이메일 알림</div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <img 
                src="https://readdy.ai/api/search-image?query=Modern%20email%20notification%20alert%20system%20on%20smartphone%20and%20tablet%20showing%20ESG%20news%20alerts%20and%20risk%20warnings%20in%20a%20professional%20business%20setting%20with%20clean%20white%20background&width=800&height=600&seq=esg-alert-001&orientation=landscape"
                alt="ESG 조기 경보"
                className="w-full rounded-xl shadow-lg"
              />
            </div>
          </div>

          {/* ESG 사건사고 보고서 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20ESG%20incident%20report%20document%20displayed%20on%20laptop%20screen%20showing%20detailed%20risk%20scores%20charts%20and%20news%20analysis%20in%20a%20modern%20office%20environment%20with%20simple%20background&width=800&height=600&seq=esg-report-001&orientation=landscape"
                alt="ESG 사건사고 보고서"
                className="w-full rounded-xl shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-6 text-gray-900">ESG 사건사고 보고서</h3>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                ESG 사건사고 분석 데이터를 이용하여 자동으로 생성되는 기업별 ESG 사건사고 보고서입니다.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <i className="ri-check-line text-teal-600 text-xl mr-3 mt-1"></i>
                  <span className="text-gray-700">뉴스 데이터 기반의 ESG 리스크 점수</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-teal-600 text-xl mr-3 mt-1"></i>
                  <span className="text-gray-700">환경, 사회, 지배구조 별 리스크 점수 및 주요 뉴스기사</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-teal-600 text-xl mr-3 mt-1"></i>
                  <span className="text-gray-700">리스크 점수의 변동 추이</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-teal-600 text-xl mr-3 mt-1"></i>
                  <span className="text-gray-700">동일 산업군 내 ESG 리스크 순위</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 시스템 작동 방식 */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">시스템 작동 방식</h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-8 rounded-xl">
                <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">1</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">데이터 수집</h3>
                <p className="text-gray-600">매일 국내 90여개 언론사에서 15,000건 이상의 뉴스 기사를 자동 수집합니다.</p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">2</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">AI 분석</h3>
                <p className="text-gray-600">자연어처리(NLP)와 감성분석을 통해 17개 ESG 이슈로 자동 분류합니다.</p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl">
                <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">3</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">리스크 점수화</h3>
                <p className="text-gray-600">각 기사의 ESG 리스크를 정량적으로 점수화하여 객관적 평가를 제공합니다.</p>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-red-50 p-8 rounded-xl">
                <div className="w-12 h-12 bg-pink-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">4</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">실시간 알림</h3>
                <p className="text-gray-600">중요 ESG 사건 발생 시 일 2회 이메일로 즉시 알림을 전송합니다.</p>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-xl">
                <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">5</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">대시보드 시각화</h3>
                <p className="text-gray-600">리스크 추이, 산업군 비교, 주가 연동 등을 직관적으로 시각화합니다.</p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-teal-50 p-8 rounded-xl">
                <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">6</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">보고서 생성</h3>
                <p className="text-gray-600">기업별 ESG 사건사고 보고서를 자동으로 생성하여 제공합니다.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 기대 효과 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">기대 효과</h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-time-line text-4xl text-teal-600"></i>
              </div>
              <div className="text-3xl font-bold text-teal-600 mb-2">실시간</div>
              <p className="text-gray-600">ESG 리스크 모니터링</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-alarm-warning-line text-4xl text-blue-600"></i>
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">조기 경보</div>
              <p className="text-gray-600">일 2회 이메일 알림</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-bar-chart-box-line text-4xl text-green-600"></i>
              </div>
              <div className="text-3xl font-bold text-green-600 mb-2">데이터 기반</div>
              <p className="text-gray-600">객관적 의사결정</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-shield-check-line text-4xl text-purple-600"></i>
              </div>
              <div className="text-3xl font-bold text-purple-600 mb-2">리스크 관리</div>
              <p className="text-gray-600">선제적 대응 가능</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">자주 묻는 질문</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <details className="bg-white rounded-lg p-6 cursor-pointer group">
              <summary className="font-semibold text-lg text-gray-900 cursor-pointer list-none flex items-center justify-between">
                ESG 리스크 분석은 어떻게 이루어지나요?
                <i className="ri-arrow-down-s-line text-2xl text-gray-400 group-open:rotate-180 transition-transform"></i>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                AI 기반 자연어처리(NLP)와 감성분석 기술을 활용하여 매일 15,000건 이상의 뉴스 기사를 자동으로 수집하고, 
                17개 ESG 이슈로 분류한 후 리스크를 정량적으로 점수화합니다. 2015년부터 현재까지의 데이터를 보유하고 있어 
                장기적인 추세 분석도 가능합니다.
              </p>
            </details>

            <details className="bg-white rounded-lg p-6 cursor-pointer group">
              <summary className="font-semibold text-lg text-gray-900 cursor-pointer list-none flex items-center justify-between">
                어떤 기업들을 모니터링할 수 있나요?
                <i className="ri-arrow-down-s-line text-2xl text-gray-400 group-open:rotate-180 transition-transform"></i>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                국내 주요 상장사와 비상장사를 포함하여 2,800개 이상의 기업을 모니터링할 수 있습니다. 
                포괄적인 모니터링을 통해 투자 포트폴리오 전체의 ESG 리스크를 관리할 수 있습니다.
              </p>
            </details>

            <details className="bg-white rounded-lg p-6 cursor-pointer group">
              <summary className="font-semibold text-lg text-gray-900 cursor-pointer list-none flex items-center justify-between">
                조기 경보는 어떻게 제공되나요?
                <i className="ri-arrow-down-s-line text-2xl text-gray-400 group-open:rotate-180 transition-transform"></i>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                ESG 사건사고가 발생하면 일 2회 이메일을 통해 자동으로 알림을 받습니다. 
                알림에는 해당 기업의 ESG 리스크 점수, 관련 뉴스 기사, 영향 분석 등이 포함되어 
                신속한 의사결정을 지원합니다.
              </p>
            </details>

            <details className="bg-white rounded-lg p-6 cursor-pointer group">
              <summary className="font-semibold text-lg text-gray-900 cursor-pointer list-none flex items-center justify-between">
                무료 체험이 가능한가요?
                <i className="ri-arrow-down-s-line text-2xl text-gray-400 group-open:rotate-180 transition-transform"></i>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                네, 14일 무료 트라이얼을 제공합니다. 트라이얼 기간 동안 2,800개 기업(상장사 + 비상장사)에 대한 
                조기경보 서비스를 체험하실 수 있으며, 별도의 신용카드 등록 없이 신청 가능합니다.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-blue-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">ESG 리스크 관리를 시작하세요</h2>
          <p className="text-xl mb-8 text-teal-100 max-w-3xl mx-auto">
            AI 기반 ESG 리스크 분석으로 기업의 지속가능성을 강화하고<br />
            투자 리스크를 최소화하세요
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
