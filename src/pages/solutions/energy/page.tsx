import React from 'react';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import { Link } from 'react-router-dom';

const EnergyMonitoring: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900 to-blue-900"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-blue-900/85"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white">
            <div className="mb-6">
              <span className="inline-block bg-green-600/20 text-green-200 px-4 py-2 rounded-full text-sm font-medium border border-green-400/30">
                AI기반 확장 솔루션
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Wise Collab Energy Monitoring<br />
              <span className="text-green-300">에너지 모니터링 및 최적화</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
              첨단 AI를 결합하여 제조 기업의 에너지 효율을 극대화하는 솔루션입니다.
              MES, IoT 전력 센서 데이터를 실시간으로 모니터링하고 분석하여 에너지 소비를 최적화합니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-white text-green-600 px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 whitespace-nowrap cursor-pointer hover:scale-105">
                무료 에너지 진단 신청
              </Link>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-green-600 transition-all duration-300 whitespace-nowrap cursor-pointer">
                에너지 절감 가이드 다운로드
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 왜 에너지 관리가 필요한가 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">왜 에너지 관리가 필요한가?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              에너지 비용 절감과 탄소중립 실현을 동시에
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
              <div className="w-12 h-12 bg-red-100 rounded-xl mb-4 flex items-center justify-center">
                <i className="ri-money-dollar-circle-line text-red-600 text-xl w-6 h-6 flex items-center justify-center"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">에너지 비용 증가</h3>
              <p className="text-gray-600 text-sm">
                전기료 인상으로 제조 원가가 지속적으로 상승하고 있습니다
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
              <div className="w-12 h-12 bg-green-100 rounded-xl mb-4 flex items-center justify-center">
                <i className="ri-leaf-line text-green-600 text-xl w-6 h-6 flex items-center justify-center"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">탄소중립 규제</h3>
              <p className="text-gray-600 text-sm">
                2050 탄소중립 목표에 따른 규제가 강화되고 있습니다
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
              <div className="w-12 h-12 bg-blue-100 rounded-xl mb-4 flex items-center justify-center">
                <i className="ri-eye-off-line text-blue-600 text-xl w-6 h-6 flex items-center justify-center"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">가시성 부족</h3>
              <p className="text-gray-600 text-sm">
                어디서 얼마나 에너지를 사용하는지 파악이 어렵습니다
              </p>
            </div>

            <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100">
              <div className="w-12 h-12 bg-orange-100 rounded-xl mb-4 flex items-center justify-center">
                <i className="ri-line-chart-line text-orange-600 text-xl w-6 h-6 flex items-center justify-center"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">ESG 평가</h3>
              <p className="text-gray-600 text-sm">
                에너지 효율은 ESG 평가의 핵심 지표입니다
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 주요 기능 */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Wise Collab Energy Monitoring 주요 기능</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              실시간 모니터링부터 AI 기반 최적화까지
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto mb-20">
            <div>
              <img 
                src="https://readdy.ai/api/search-image?query=Modern%20industrial%20energy%20monitoring%20dashboard%20displaying%20real-time%20power%20consumption%20data%20with%20digital%20meters%2C%20colorful%20graphs%2C%20and%20equipment%20status%20indicators%20on%20large%20screens%20in%20a%20clean%20control%20room%20environment%20with%20professional%20lighting%20and%20minimalist%20design&width=800&height=600&seq=energy-monitoring-1&orientation=landscape" 
                alt="실시간 전력 모니터링" 
                className="w-full rounded-2xl shadow-2xl object-cover"
              />
            </div>
            <div>
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl mb-6 flex items-center justify-center">
                <i className="ri-flashlight-line text-2xl text-white w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">실시간 전력 모니터링</h3>
              <p className="text-lg text-gray-600 mb-6">
                설비별, 라인별, 공장별 전력 사용량을 실시간으로 모니터링하고 이상 패턴을 즉시 감지합니다.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <i className="ri-check-line text-green-600 mr-3 w-5 h-5 flex items-center justify-center"></i>
                  설비별 전력 사용량 추적
                </li>
                <li className="flex items-center text-gray-700">
                  <i className="ri-check-line text-green-600 mr-3 w-5 h-5 flex items-center justify-center"></i>
                  실시간 대시보드
                </li>
                <li className="flex items-center text-gray-700">
                  <i className="ri-check-line text-green-600 mr-3 w-5 h-5 flex items-center justify-center"></i>
                  이상 패턴 자동 감지
                </li>
                <li className="flex items-center text-gray-700">
                  <i className="ri-check-line text-green-600 mr-3 w-5 h-5 flex items-center justify-center"></i>
                  즉각적인 알림
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto mb-20">
            <div className="order-2 lg:order-1">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl mb-6 flex items-center justify-center">
                <i className="ri-line-chart-line text-2xl text-white w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">AI 기반 이상 탐지</h3>
              <p className="text-lg text-gray-600 mb-6">
                AI가 과거 데이터를 학습하여 비정상적인 에너지 소비 패턴을 자동으로 감지하고 원인을 분석합니다.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <i className="ri-check-line text-green-600 mr-3 w-5 h-5 flex items-center justify-center"></i>
                  이상 패턴 자동 감지
                </li>
                <li className="flex items-center text-gray-700">
                  <i className="ri-check-line text-green-600 mr-3 w-5 h-5 flex items-center justify-center"></i>
                  원인 분석 및 제안
                </li>
                <li className="flex items-center text-gray-700">
                  <i className="ri-check-line text-green-600 mr-3 w-5 h-5 flex items-center justify-center"></i>
                  에너지 낭비 요인 식별
                </li>
                <li className="flex items-center text-gray-700">
                  <i className="ri-check-line text-green-600 mr-3 w-5 h-5 flex items-center justify-center"></i>
                  최적화 방안 도출
                </li>
              </ul>
            </div>
            <div className="order-1 lg:order-2">
              <img 
                src="https://readdy.ai/api/search-image?query=Advanced%20AI%20artificial%20intelligence%20system%20analyzing%20energy%20consumption%20patterns%20with%20neural%20network%20visualization%2C%20anomaly%20detection%20alerts%2C%20and%20predictive%20analytics%20displayed%20on%20futuristic%20holographic%20interface%20in%20modern%20technology%20environment%20with%20blue%20and%20green%20lighting&width=800&height=600&seq=energy-monitoring-2&orientation=landscape" 
                alt="AI 기반 이상 탐지" 
                className="w-full rounded-2xl shadow-2xl object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20time-series%20database%20visualization%20showing%20long-term%20energy%20trend%20analysis%20with%20multiple%20layered%20graphs%2C%20historical%20data%20charts%2C%20and%20predictive%20modeling%20displays%20on%20modern%20server%20infrastructure%20background%20with%20organized%20data%20center%20aesthetic%20and%20clean%20professional%20lighting&width=800&height=600&seq=energy-monitoring-3&orientation=landscape" 
                alt="시계열 DB 활용" 
                className="w-full rounded-2xl shadow-2xl object-cover"
              />
            </div>
            <div>
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl mb-6 flex items-center justify-center">
                <i className="ri-database-line text-2xl text-white w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">시계열 DB 활용</h3>
              <p className="text-lg text-gray-600 mb-6">
                대용량 시계열 데이터를 효율적으로 저장하고 분석하여 장기적인 에너지 트렌드를 파악합니다.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <i className="ri-check-line text-green-600 mr-3 w-5 h-5 flex items-center justify-center"></i>
                  대용량 데이터 저장
                </li>
                <li className="flex items-center text-gray-700">
                  <i className="ri-check-line text-green-600 mr-3 w-5 h-5 flex items-center justify-center"></i>
                  빠른 데이터 조회
                </li>
                <li className="flex items-center text-gray-700">
                  <i className="ri-check-line text-green-600 mr-3 w-5 h-5 flex items-center justify-center"></i>
                  트렌드 분석
                </li>
                <li className="flex items-center text-gray-700">
                  <i className="ri-check-line text-green-600 mr-3 w-5 h-5 flex items-center justify-center"></i>
                  예측 모델링
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 에너지 절감 프로세스 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">에너지 절감 프로세스</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <span className="text-white font-bold text-2xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">데이터 수집</h3>
              <p className="text-gray-600 text-sm">
                IoT 센서를 통한 실시간 전력 데이터 수집
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <span className="text-white font-bold text-2xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">분석 및 진단</h3>
              <p className="text-gray-600 text-sm">
                AI 기반 에너지 사용 패턴 분석 및 낭비 요인 진단
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <span className="text-white font-bold text-2xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">최적화 실행</h3>
              <p className="text-gray-600 text-sm">
                개선 방안 도출 및 에너지 절감 조치 실행
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <span className="text-white font-bold text-2xl">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">효과 측정</h3>
              <p className="text-gray-600 text-sm">
                절감 효과 측정 및 지속적인 모니터링
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 도입 효과 */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">도입 효과</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            <div className="text-center">
              <div className="text-5xl font-bold text-green-600 mb-2">30%</div>
              <p className="text-gray-600 text-lg">에너지 비용 절감</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">25%</div>
              <p className="text-gray-600 text-lg">생산 효율 증대</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-600 mb-2">40%</div>
              <p className="text-gray-600 text-lg">운영 최적화</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-2xl border border-green-100 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">추가 효과</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <i className="ri-check-line text-green-600 mr-3 mt-1 w-5 h-5 flex items-center justify-center flex-shrink-0"></i>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">탄소배출 감소</h4>
                  <p className="text-gray-600 text-sm">에너지 절감을 통한 탄소배출량 감소</p>
                </div>
              </div>
              <div className="flex items-start">
                <i className="ri-check-line text-green-600 mr-3 mt-1 w-5 h-5 flex items-center justify-center flex-shrink-0"></i>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">ESG 평가 개선</h4>
                  <p className="text-gray-600 text-sm">환경 부문 ESG 점수 향상</p>
                </div>
              </div>
              <div className="flex items-start">
                <i className="ri-check-line text-green-600 mr-3 mt-1 w-5 h-5 flex items-center justify-center flex-shrink-0"></i>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">설비 수명 연장</h4>
                  <p className="text-gray-600 text-sm">최적 운영으로 설비 노후화 방지</p>
                </div>
              </div>
              <div className="flex items-start">
                <i className="ri-check-line text-green-600 mr-3 mt-1 w-5 h-5 flex items-center justify-center flex-shrink-0"></i>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">데이터 기반 의사결정</h4>
                  <p className="text-gray-600 text-sm">정확한 데이터로 투자 우선순위 결정</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-6">
              에너지 효율화, 지금 시작하세요
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              AI 기반 에너지 관리로 비용 절감과 탄소중립을 동시에 실현합니다
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-white text-green-600 px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 whitespace-nowrap cursor-pointer hover:scale-105">
                무료 에너지 진단 신청
              </Link>
              <Link to="/solutions" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-green-600 transition-all duration-300 whitespace-nowrap cursor-pointer">
                전체 솔루션 보기
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EnergyMonitoring;