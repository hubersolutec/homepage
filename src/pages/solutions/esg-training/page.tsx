import React from 'react';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';

const ESGTraining: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-indigo-900"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-indigo-900/85"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white">
            <div className="mb-6">
              <span className="inline-block bg-purple-600/20 text-purple-200 px-4 py-2 rounded-full text-sm font-medium border border-purple-400/30">
                지속가능경영 솔루션
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              ESG 디지털 연수원<br />
              <span className="text-purple-300">ESG 교육 및 인식 개선 플랫폼</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
              임직원과 협력사의 ESG 역량을 강화하는 온라인 교육 플랫폼입니다.
              맞춤형 교육 콘텐츠와 체계적인 학습 관리로 ESG 문화를 정착시킵니다.
            </p>
          </div>
        </div>
      </section>

      {/* 왜 ESG 교육이 필요한가 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">왜 ESG 교육이 필요한가?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              ESG 경영의 성공은 구성원의 이해와 실천에서 시작됩니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="bg-purple-50 p-6 rounded-2xl border border-purple-100">
              <div className="w-12 h-12 bg-purple-100 rounded-xl mb-4 flex items-center justify-center">
                <i className="ri-book-open-line text-purple-600 text-xl w-6 h-6 flex items-center justify-center"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">인식 부족</h3>
              <p className="text-gray-600 text-sm">
                ESG가 무엇인지, 왜 중요한지 모르는 구성원이 많습니다
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
              <div className="w-12 h-12 bg-blue-100 rounded-xl mb-4 flex items-center justify-center">
                <i className="ri-team-line text-blue-600 text-xl w-6 h-6 flex items-center justify-center"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">실행력 부족</h3>
              <p className="text-gray-600 text-sm">
                ESG 정책은 있지만 실제 업무에 적용하지 못합니다
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
              <div className="w-12 h-12 bg-green-100 rounded-xl mb-4 flex items-center justify-center">
                <i className="ri-refresh-line text-green-600 text-xl w-6 h-6 flex items-center justify-center"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">지속성 부족</h3>
              <p className="text-gray-600 text-sm">
                일회성 교육으로는 ESG 문화가 정착되지 않습니다
              </p>
            </div>

            <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100">
              <div className="w-12 h-12 bg-orange-100 rounded-xl mb-4 flex items-center justify-center">
                <i className="ri-line-chart-line text-orange-600 text-xl w-6 h-6 flex items-center justify-center"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">측정 어려움</h3>
              <p className="text-gray-600 text-sm">
                교육 효과를 측정하고 개선하기 어렵습니다
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 주요 기능 */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">ESG 디지털 연수원 주요 기능</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              체계적인 교육으로 ESG 역량을 강화합니다
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto mb-20">
            <div>
              <img 
                src="https://static.readdy.ai/image/474d22559ce27b83412ff775226e0845/32de555a6a51858970467808fdf78f93.png" 
                alt="맞춤형 교육 콘텐츠" 
                className="w-full rounded-2xl shadow-2xl object-cover object-top"
              />
            </div>
            <div>
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl mb-6 flex items-center justify-center">
                <i className="ri-book-2-line text-2xl text-white w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">맞춤형 교육 콘텐츠</h3>
              <p className="text-lg text-gray-600 mb-6">
                직급, 부서, 역할에 맞는 맞춤형 ESG 교육 콘텐츠를 제공합니다.
                이론부터 실무까지 체계적으로 학습할 수 있습니다.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <i className="ri-check-line text-purple-600 mr-3 w-5 h-5 flex items-center justify-center"></i>
                  ESG 기초 과정
                </li>
                <li className="flex items-center text-gray-700">
                  <i className="ri-check-line text-purple-600 mr-3 w-5 h-5 flex items-center justify-center"></i>
                  부서별 실무 과정
                </li>
                <li className="flex items-center text-gray-700">
                  <i className="ri-check-line text-purple-600 mr-3 w-5 h-5 flex items-center justify-center"></i>
                  리더십 과정
                </li>
                <li className="flex items-center text-gray-700">
                  <i className="ri-check-line text-purple-600 mr-3 w-5 h-5 flex items-center justify-center"></i>
                  전문가 심화 과정
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto mb-20">
            <div className="order-2 lg:order-1">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl mb-6 flex items-center justify-center">
                <i className="ri-video-line text-2xl text-white w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">다양한 학습 방식</h3>
              <p className="text-lg text-gray-600 mb-6">
                동영상, 퀴즈, 사례 연구, 토론 등 다양한 학습 방식으로 효과적인 교육을 제공합니다.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <i className="ri-check-line text-purple-600 mr-3 w-5 h-5 flex items-center justify-center"></i>
                  동영상 강의
                </li>
                <li className="flex items-center text-gray-700">
                  <i className="ri-check-line text-purple-600 mr-3 w-5 h-5 flex items-center justify-center"></i>
                  인터랙티브 퀴즈
                </li>
                <li className="flex items-center text-gray-700">
                  <i className="ri-check-line text-purple-600 mr-3 w-5 h-5 flex items-center justify-center"></i>
                  실제 사례 연구
                </li>
                <li className="flex items-center text-gray-700">
                  <i className="ri-check-line text-purple-600 mr-3 w-5 h-5 flex items-center justify-center"></i>
                  온라인 토론
                </li>
              </ul>
            </div>
            <div className="order-1 lg:order-2">
              <img 
                src="https://static.readdy.ai/image/474d22559ce27b83412ff775226e0845/fa17f73f37833c6428697afefd4477fb.png" 
                alt="다양한 학습 방식" 
                className="w-full rounded-2xl shadow-2xl object-cover object-top"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <img 
                src="https://readdy.ai/api/search-image?query=Modern%20learning%20management%20system%20dashboard%20showing%20student%20progress%20tracking%20achievement%20analytics%20and%20certification%20management%20with%20charts%20and%20graphs%20on%20a%20professional%20laptop%20screen%20in%20clean%20office%20environment%20with%20simple%20background%20and%20purple%20accent%20colors&width=800&height=600&seq=esg-training-lms-001&orientation=landscape" 
                alt="학습 관리 시스템" 
                className="w-full rounded-2xl shadow-2xl object-cover object-top"
              />
            </div>
            <div>
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl mb-6 flex items-center justify-center">
                <i className="ri-dashboard-line text-2xl text-white w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">학습 관리 시스템 (LMS)</h3>
              <p className="text-lg text-gray-600 mb-6">
                학습 진도, 성취도, 이수 현황을 실시간으로 관리하고, 데이터 기반으로 교육 효과를 분석합니다.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <i className="ri-check-line text-purple-600 mr-3 w-5 h-5 flex items-center justify-center"></i>
                  학습 진도 추적
                </li>
                <li className="flex items-center text-gray-700">
                  <i className="ri-check-line text-purple-600 mr-3 w-5 h-5 flex items-center justify-center"></i>
                  성취도 평가
                </li>
                <li className="flex items-center text-gray-700">
                  <i className="ri-check-line text-purple-600 mr-3 w-5 h-5 flex items-center justify-center"></i>
                  이수증 발급
                </li>
                <li className="flex items-center text-gray-700">
                  <i className="ri-check-line text-purple-600 mr-3 w-5 h-5 flex items-center justify-center"></i>
                  통계 및 리포트
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 교육 과정 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">교육 과정</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100">
              <div className="w-12 h-12 bg-green-100 rounded-xl mb-4 flex items-center justify-center">
                <i className="ri-leaf-line text-green-600 text-xl w-6 h-6 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Environment</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-center">
                  <i className="ri-arrow-right-s-line text-green-600 mr-2 w-4 h-4 flex items-center justify-center"></i>
                  탄소중립 이해하기
                </li>
                <li className="flex items-center">
                  <i className="ri-arrow-right-s-line text-green-600 mr-2 w-4 h-4 flex items-center justify-center"></i>
                  에너지 효율화 실무
                </li>
                <li className="flex items-center">
                  <i className="ri-arrow-right-s-line text-green-600 mr-2 w-4 h-4 flex items-center justify-center"></i>
                  폐기물 관리 가이드
                </li>
                <li className="flex items-center">
                  <i className="ri-arrow-right-s-line text-green-600 mr-2 w-4 h-4 flex items-center justify-center"></i>
                  환경 법규 준수
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl border border-blue-100">
              <div className="w-12 h-12 bg-blue-100 rounded-xl mb-4 flex items-center justify-center">
                <i className="ri-team-line text-blue-600 text-xl w-6 h-6 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Social</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-center">
                  <i className="ri-arrow-right-s-line text-blue-600 mr-2 w-4 h-4 flex items-center justify-center"></i>
                  인권 경영 이해
                </li>
                <li className="flex items-center">
                  <i className="ri-arrow-right-s-line text-blue-600 mr-2 w-4 h-4 flex items-center justify-center"></i>
                  산업 안전 교육
                </li>
                <li className="flex items-center">
                  <i className="ri-arrow-right-s-line text-blue-600 mr-2 w-4 h-4 flex items-center justify-center"></i>
                  공급망 실사 방법
                </li>
                <li className="flex items-center">
                  <i className="ri-arrow-right-s-line text-blue-600 mr-2 w-4 h-4 flex items-center justify-center"></i>
                  사회공헌 활동 기획
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-100">
              <div className="w-12 h-12 bg-purple-100 rounded-xl mb-4 flex items-center justify-center">
                <i className="ri-scales-line text-purple-600 text-xl w-6 h-6 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Governance</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-center">
                  <i className="ri-arrow-right-s-line text-purple-600 mr-2 w-4 h-4 flex items-center justify-center"></i>
                  윤리경영 실천
                </li>
                <li className="flex items-center">
                  <i className="ri-arrow-right-s-line text-purple-600 mr-2 w-4 h-4 flex items-center justify-center"></i>
                  준법 경영 가이드
                </li>
                <li className="flex items-center">
                  <i className="ri-arrow-right-s-line text-purple-600 mr-2 w-4 h-4 flex items-center justify-center"></i>
                  리스크 관리 체계
                </li>
                <li className="flex items-center">
                  <i className="ri-arrow-right-s-line text-purple-600 mr-2 w-4 h-4 flex items-center justify-center"></i>
                  정보 공시 실무
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 도입 효과 */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">도입 효과</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">95%</div>
              <p className="text-gray-600">교육 이수율</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">80%</div>
              <p className="text-gray-600">ESG 인식 향상</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">60%</div>
              <p className="text-gray-600">교육 비용 절감</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
              <p className="text-gray-600">언제 어디서나 학습</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-6">
              ESG 교육, 지금 시작하세요
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              체계적인 교육으로 ESG 문화를 정착시키고 지속가능한 미래를 만들어갑니다
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ESGTraining;
