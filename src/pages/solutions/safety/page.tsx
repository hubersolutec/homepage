import React from 'react';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import { Link } from 'react-router-dom';

const SafetySolution: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900 to-orange-900"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/90 to-orange-900/85"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center text-white">
            <div className="mb-6">
              <span className="inline-block bg-red-600/20 text-red-200 px-6 py-2 rounded-full text-sm font-medium border border-red-400/30">
                AI기반 확장 솔루션
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              중대재해예방솔루션
            </h1>
            <p className="text-2xl text-red-100 mb-4 font-semibold">
              AI 기반 안전 관리 시스템
            </p>
            <p className="text-xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
              첨단 AI를 활용하여 제조 현장의 중대재해를 예방하고 안전성을 극대화합니다.<br />
              MES, IoT 센서 데이터를 실시간으로 분석하여 잠재적 위험을 감지하고 예측합니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-white text-red-600 px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 whitespace-nowrap cursor-pointer hover:scale-105">
                무료 안전 진단 신청
              </Link>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-red-600 transition-all duration-300 whitespace-nowrap cursor-pointer">
                안전 가이드 다운로드
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 중대재해처벌법 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">중대재해처벌법, 이제 선택이 아닙니다</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              경영진의 형사책임까지 물을 수 있는 중대재해처벌법에 대비하세요
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            <div className="bg-red-50 p-8 rounded-2xl border-2 border-red-200 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl mb-6 flex items-center justify-center">
                <i className="ri-alert-line text-2xl text-white w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">경영진 형사책임</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                중대재해 발생 시 경영책임자에게 1년 이상의 징역 또는 10억원 이하의 벌금
              </p>
              <div className="bg-white p-4 rounded-xl">
                <p className="text-sm font-semibold text-gray-900 mb-3">중대재해 기준</p>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex items-center">
                    <i className="ri-arrow-right-s-line text-red-600 mr-2 w-4 h-4 flex items-center justify-center flex-shrink-0"></i>
                    사망 1명 이상
                  </li>
                  <li className="flex items-center">
                    <i className="ri-arrow-right-s-line text-red-600 mr-2 w-4 h-4 flex items-center justify-center flex-shrink-0"></i>
                    동일 사고로 6개월 이상 치료 2명 이상
                  </li>
                  <li className="flex items-center">
                    <i className="ri-arrow-right-s-line text-red-600 mr-2 w-4 h-4 flex items-center justify-center flex-shrink-0"></i>
                    동일 질병으로 1년 이내 3명 이상 발병
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-orange-50 p-8 rounded-2xl border-2 border-orange-200 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-xl mb-6 flex items-center justify-center">
                <i className="ri-shield-check-line text-2xl text-white w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">안전보건 확보 의무</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                사업주와 경영책임자는 안전보건관리체계 구축 및 이행 의무
              </p>
              <div className="bg-white p-4 rounded-xl">
                <p className="text-sm font-semibold text-gray-900 mb-3">필수 이행 사항</p>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex items-center">
                    <i className="ri-arrow-right-s-line text-orange-600 mr-2 w-4 h-4 flex items-center justify-center flex-shrink-0"></i>
                    안전보건 관리체계 구축
                  </li>
                  <li className="flex items-center">
                    <i className="ri-arrow-right-s-line text-orange-600 mr-2 w-4 h-4 flex items-center justify-center flex-shrink-0"></i>
                    재해 예방에 필요한 인력·예산 확보
                  </li>
                  <li className="flex items-center">
                    <i className="ri-arrow-right-s-line text-orange-600 mr-2 w-4 h-4 flex items-center justify-center flex-shrink-0"></i>
                    안전보건 관련 법령 준수
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 p-8 rounded-2xl border-2 border-green-200 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl mb-6 flex items-center justify-center">
                <i className="ri-file-list-3-line text-2xl text-white w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">ESG 경영 핵심</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                안전 관리는 ESG 경영의 핵심 지표이자 기업 가치 평가 요소
              </p>
              <div className="bg-white p-4 rounded-xl">
                <p className="text-sm font-semibold text-gray-900 mb-3">기대 효과</p>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex items-center">
                    <i className="ri-arrow-right-s-line text-green-600 mr-2 w-4 h-4 flex items-center justify-center flex-shrink-0"></i>
                    투자자 신뢰도 향상
                  </li>
                  <li className="flex items-center">
                    <i className="ri-arrow-right-s-line text-green-600 mr-2 w-4 h-4 flex items-center justify-center flex-shrink-0"></i>
                    기업 평판 관리
                  </li>
                  <li className="flex items-center">
                    <i className="ri-arrow-right-s-line text-green-600 mr-2 w-4 h-4 flex items-center justify-center flex-shrink-0"></i>
                    지속가능경영 실현
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-600 p-8 rounded-xl max-w-4xl mx-auto shadow-lg">
            <div className="flex items-start">
              <i className="ri-error-warning-line text-red-600 text-3xl mr-4 w-8 h-8 flex items-center justify-center flex-shrink-0"></i>
              <div>
                <h4 className="text-xl font-bold text-red-900 mb-3">중대재해처벌법 적용 대상</h4>
                <p className="text-red-800 text-lg">
                  상시근로자 5인 이상 사업장 (2024년 1월 27일부터 전면 시행)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 주요 기능 */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">중대재해예방솔루션 주요 기능</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AI와 IoT 기술로 현장의 안전을 지킵니다
            </p>
          </div>

          <div className="max-w-7xl mx-auto space-y-20">
            {/* Feature 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="https://readdy.ai/api/search-image?query=Advanced%20industrial%20AI%20monitoring%20system%20with%20multiple%20sensor%20displays%20showing%20real-time%20hazard%20detection%2C%20thermal%20imaging%20cameras%2C%20motion%20sensors%2C%20and%20alert%20notifications%20on%20large%20control%20room%20screens%20with%20red%20warning%20indicators%20and%20safety%20monitoring%20dashboard&width=800&height=450&seq=safety-ai-detection-001&orientation=landscape"
                  alt="AI 기반 위험 징후 실시간 감지"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl mb-6 flex items-center justify-center">
                  <i className="ri-brain-line text-2xl text-white w-8 h-8 flex items-center justify-center"></i>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">AI 기반 위험 징후 실시간 감지</h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  MES, IoT 센서 데이터를 AI가 24시간 모니터링하여 이상 징후를 조기에 발견하고 즉시 알립니다.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center p-3 bg-red-50 rounded-lg">
                    <i className="ri-check-line text-red-600 mr-3 w-5 h-5 flex items-center justify-center flex-shrink-0"></i>
                    <span className="text-gray-700 font-medium">설비 이상 징후 자동 감지</span>
                  </div>
                  <div className="flex items-center p-3 bg-red-50 rounded-lg">
                    <i className="ri-check-line text-red-600 mr-3 w-5 h-5 flex items-center justify-center flex-shrink-0"></i>
                    <span className="text-gray-700 font-medium">위험 구역 출입 감지</span>
                  </div>
                  <div className="flex items-center p-3 bg-red-50 rounded-lg">
                    <i className="ri-check-line text-red-600 mr-3 w-5 h-5 flex items-center justify-center flex-shrink-0"></i>
                    <span className="text-gray-700 font-medium">환경 데이터 실시간 모니터링</span>
                  </div>
                  <div className="flex items-center p-3 bg-red-50 rounded-lg">
                    <i className="ri-check-line text-red-600 mr-3 w-5 h-5 flex items-center justify-center flex-shrink-0"></i>
                    <span className="text-gray-700 font-medium">즉각적인 경고 알림</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl mb-6 flex items-center justify-center">
                  <i className="ri-history-line text-2xl text-white w-8 h-8 flex items-center justify-center"></i>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">조치 이력 자동 기록</h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  모든 안전 관련 조치와 점검 이력을 자동으로 기록하여 법적 증빙 자료로 활용할 수 있습니다.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center p-3 bg-orange-50 rounded-lg">
                    <i className="ri-check-line text-orange-600 mr-3 w-5 h-5 flex items-center justify-center flex-shrink-0"></i>
                    <span className="text-gray-700 font-medium">점검 이력 자동 저장</span>
                  </div>
                  <div className="flex items-center p-3 bg-orange-50 rounded-lg">
                    <i className="ri-check-line text-orange-600 mr-3 w-5 h-5 flex items-center justify-center flex-shrink-0"></i>
                    <span className="text-gray-700 font-medium">조치 내용 상세 기록</span>
                  </div>
                  <div className="flex items-center p-3 bg-orange-50 rounded-lg">
                    <i className="ri-check-line text-orange-600 mr-3 w-5 h-5 flex items-center justify-center flex-shrink-0"></i>
                    <span className="text-gray-700 font-medium">감사 추적 가능</span>
                  </div>
                  <div className="flex items-center p-3 bg-orange-50 rounded-lg">
                    <i className="ri-check-line text-orange-600 mr-3 w-5 h-5 flex items-center justify-center flex-shrink-0"></i>
                    <span className="text-gray-700 font-medium">법적 증빙 자료 확보</span>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="https://readdy.ai/api/search-image?query=Digital%20safety%20management%20system%20showing%20automated%20incident%20logging%20interface%20with%20timeline%20records%2C%20action%20history%20tracking%2C%20digital%20forms%2C%20compliance%20documentation%2C%20and%20audit%20trail%20reports%20on%20modern%20tablet%20and%20desktop%20screens&width=800&height=450&seq=safety-record-system-001&orientation=landscape"
                  alt="조치 이력 자동 기록"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Feature 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="https://readdy.ai/api/search-image?query=Industrial%20safety%20analytics%20dashboard%20displaying%20incident%20pattern%20analysis%2C%20predictive%20prevention%20charts%2C%20machine%20learning%20algorithms%20identifying%20recurring%20hazards%2C%20risk%20trend%20graphs%2C%20and%20preventive%20action%20recommendations%20on%20large%20interactive%20screens&width=800&height=450&seq=safety-prevention-analytics-001&orientation=landscape"
                  alt="유사 사고 반복 방지"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl mb-6 flex items-center justify-center">
                  <i className="ri-shield-check-line text-2xl text-white w-8 h-8 flex items-center justify-center"></i>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">유사 사고 반복 방지</h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  과거 사고 데이터를 AI가 학습하여 유사한 상황을 사전에 감지하고 예방합니다.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center p-3 bg-green-50 rounded-lg">
                    <i className="ri-check-line text-green-600 mr-3 w-5 h-5 flex items-center justify-center flex-shrink-0"></i>
                    <span className="text-gray-700 font-medium">사고 패턴 분석</span>
                  </div>
                  <div className="flex items-center p-3 bg-green-50 rounded-lg">
                    <i className="ri-check-line text-green-600 mr-3 w-5 h-5 flex items-center justify-center flex-shrink-0"></i>
                    <span className="text-gray-700 font-medium">유사 상황 사전 경고</span>
                  </div>
                  <div className="flex items-center p-3 bg-green-50 rounded-lg">
                    <i className="ri-check-line text-green-600 mr-3 w-5 h-5 flex items-center justify-center flex-shrink-0"></i>
                    <span className="text-gray-700 font-medium">예방 조치 자동 제안</span>
                  </div>
                  <div className="flex items-center p-3 bg-green-50 rounded-lg">
                    <i className="ri-check-line text-green-600 mr-3 w-5 h-5 flex items-center justify-center flex-shrink-0"></i>
                    <span className="text-gray-700 font-medium">지속적인 학습 및 개선</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 도입 효과 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">도입 효과</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              실질적인 안전 개선과 비용 절감을 동시에 실현합니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-2xl border-2 border-red-200 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl mb-6 flex items-center justify-center">
                <i className="ri-shield-check-line text-2xl text-white w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">사고 예방과 대응력 향상</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <i className="ri-check-line text-red-600 mr-2 mt-1 w-5 h-5 flex items-center justify-center flex-shrink-0"></i>
                  <span>AI + IoT 기반 위험 징후 실시간 감지</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-red-600 mr-2 mt-1 w-5 h-5 flex items-center justify-center flex-shrink-0"></i>
                  <span>유사 사고 반복 방지</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-red-600 mr-2 mt-1 w-5 h-5 flex items-center justify-center flex-shrink-0"></i>
                  <span>사고 발생률 70% 감소</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-8 rounded-2xl border-2 border-orange-200 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-xl mb-6 flex items-center justify-center">
                <i className="ri-file-list-3-line text-2xl text-white w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">법적 대응 역량 강화</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <i className="ri-check-line text-orange-600 mr-2 mt-1 w-5 h-5 flex items-center justify-center flex-shrink-0"></i>
                  <span>조치 이력 자동 기록</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-orange-600 mr-2 mt-1 w-5 h-5 flex items-center justify-center flex-shrink-0"></i>
                  <span>감사/법적 증빙 체계 확보</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-orange-600 mr-2 mt-1 w-5 h-5 flex items-center justify-center flex-shrink-0"></i>
                  <span>중대재해처벌법 대응</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border-2 border-green-200 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl mb-6 flex items-center justify-center">
                <i className="ri-team-line text-2xl text-white w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">근로자 안전 인식 제고</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <i className="ri-check-line text-green-600 mr-2 mt-1 w-5 h-5 flex items-center justify-center flex-shrink-0"></i>
                  <span>실시간 경고 및 알림 시스템</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-green-600 mr-2 mt-1 w-5 h-5 flex items-center justify-center flex-shrink-0"></i>
                  <span>안전한 작업환경 구축</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-green-600 mr-2 mt-1 w-5 h-5 flex items-center justify-center flex-shrink-0"></i>
                  <span>안전 문화 정착</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-3xl p-12 max-w-6xl mx-auto shadow-2xl">
            <h3 className="text-3xl font-bold text-white text-center mb-12">핵심 성과 지표</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-white mb-3">70%</div>
                <p className="text-red-100 font-medium">사고 발생률 감소</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-white mb-3">90%</div>
                <p className="text-red-100 font-medium">위험 징후 조기 발견</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-white mb-3">100%</div>
                <p className="text-red-100 font-medium">조치 이력 기록</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-white mb-3">50%</div>
                <p className="text-red-100 font-medium">안전 관리 비용 절감</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="container mx-auto px-4">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              안전한 작업환경, 지금 시작하세요
            </h2>
            <p className="text-xl text-red-100 mb-10 leading-relaxed">
              중대재해처벌법 대응과 근로자 안전을 동시에 실현합니다
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-white text-red-600 px-10 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 whitespace-nowrap cursor-pointer hover:scale-105 text-lg">
                무료 안전 진단 신청
              </Link>
              <Link to="/solutions/energy" className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-xl font-semibold hover:bg-white hover:text-red-600 transition-all duration-300 whitespace-nowrap cursor-pointer text-lg">
                에너지 모니터링 솔루션 보기
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SafetySolution;