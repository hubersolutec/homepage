
import React from 'react';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';

const WiseCollabSimulation: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 to-purple-900"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-purple-900/85"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white">
            <div className="mb-6">
              <span className="inline-block bg-indigo-600/20 text-indigo-200 px-4 py-2 rounded-full text-sm font-medium border border-indigo-400/30">
                AI기반 확장 솔루션
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Wise Collab Simulation<br />
              <span className="text-indigo-300">제조 시뮬레이션 및 분석 플랫폼</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
              첨단 AI를 결합하여 제조 기업의 시뮬레이션 업무를 혁신합니다.
              체계적인 코드 관리와 협업 환경으로 시뮬레이션 효율을 극대화하세요.
            </p>
          </div>
        </div>
      </section>

      {/* 해결하는 문제 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">기존 시뮬레이션 업무의 문제점</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              전문가 중심의 수작업 방식에서 벗어나세요
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
              <div className="w-12 h-12 bg-red-100 rounded-xl mb-4 flex items-center justify-center">
                <i className="ri-file-damage-line text-red-600 text-xl w-6 h-6 flex items-center justify-center"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">코드 관리 부재</h3>
              <p className="text-gray-600 text-sm">
                시뮬레이션 코드와 설정값이 개인 PC에 분산되어 관리가 어렵습니다
              </p>
            </div>

            <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100">
              <div className="w-12 h-12 bg-orange-100 rounded-xl mb-4 flex items-center justify-center">
                <i className="ri-team-line text-orange-600 text-xl w-6 h-6 flex items-center justify-center"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">협업 어려움</h3>
              <p className="text-gray-600 text-sm">
                여러 엔지니어가 동시에 작업할 때 충돌과 중복이 발생합니다
              </p>
            </div>

            <div className="bg-yellow-50 p-6 rounded-2xl border border-yellow-100">
              <div className="w-12 h-12 bg-yellow-100 rounded-xl mb-4 flex items-center justify-center">
                <i className="ri-history-line text-yellow-600 text-xl w-6 h-6 flex items-center justify-center"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">재현성 부족</h3>
              <p className="text-gray-600 text-sm">
                과거 시뮬레이션 결과를 재현하기 어렵고 이력 추적이 불가능합니다
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
              <div className="w-12 h-12 bg-blue-100 rounded-xl mb-4 flex items-center justify-center">
                <i className="ri-computer-line text-blue-600 text-xl w-6 h-6 flex items-center justify-center"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">리소스 충돌</h3>
              <p className="text-gray-600 text-sm">
                고성능 워크스테이션 사용 시 리소스 충돌로 비효율이 발생합니다
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 주요 기능 */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Wise Collab Simulation 주요 기능</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              시뮬레이션 업무의 모든 과정을 체계적으로 관리합니다
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto mb-20">
            <div>
              <img 
                src="https://static.readdy.ai/image/474d22559ce27b83412ff775226e0845/949cedec3ac9f55f224483cea2695e71.png" 
                alt="시뮬레이션 자산 관리" 
                className="w-full rounded-2xl shadow-2xl object-cover object-top"
              />
            </div>
            <div>
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl mb-6 flex items-center justify-center">
                <i className="ri-folder-settings-line text-2xl text-white w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">시뮬레이션 자산 관리</h3>
              <p className="text-lg text-gray-600 mb-6">
                프로젝트 단위로 시뮬레이션 코드, 설정값, 결과를 체계적으로 관리하고 버전을 추적합니다.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <i className="ri-check-line text-indigo-600 mr-3 w-5 h-5 flex items-center justify-center"></i>
                  프로젝트 단위 버전 관리
                </li>
                <li className="flex items-center text-gray-700">
                  <i className="ri-check-line text-indigo-600 mr-3 w-5 h-5 flex items-center justify-center"></i>
                  파라미터 템플릿 제공
                </li>
                <li className="flex items-center text-gray-700">
                  <i className="ri-check-line text-indigo-600 mr-3 w-5 h-5 flex items-center justify-center"></i>
                  변경 이력 추적
                </li>
                <li className="flex items-center text-gray-700">
                  <i className="ri-check-line text-indigo-600 mr-3 w-5 h-5 flex items-center justify-center"></i>
                  결과 자동 저장
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto mb-20">
            <div className="order-2 lg:order-1">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl mb-6 flex items-center justify-center">
                <i className="ri-global-line text-2xl text-white w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">웹 기반 실행 제어</h3>
              <p className="text-lg text-gray-600 mb-6">
                Ansys 기반 시뮬레이션 소프트웨어를 웹 브라우저에서 원격으로 제어하고 실행할 수 있습니다.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <i className="ri-check-line text-indigo-600 mr-3 w-5 h-5 flex items-center justify-center"></i>
                  원격 실행 및 모니터링
                </li>
                <li className="flex items-center text-gray-700">
                  <i className="ri-check-line text-indigo-600 mr-3 w-5 h-5 flex items-center justify-center"></i>
                  실시간 진행 상황 확인
                </li>
                <li className="flex items-center text-gray-700">
                  <i className="ri-check-line text-indigo-600 mr-3 w-5 h-5 flex items-center justify-center"></i>
                  결과 즉시 확인
                </li>
                <li className="flex items-center text-gray-700">
                  <i className="ri-check-line text-indigo-600 mr-3 w-5 h-5 flex items-center justify-center"></i>
                  언제 어디서나 접근
                </li>
              </ul>
            </div>
            <div className="order-1 lg:order-2">
              <img 
                src="https://readdy.ai/api/search-image?query=Web-based%20remote%20control%20monitoring%20dashboard%20for%20simulation%20software%20showing%20real-time%20execution%20status%2C%20progress%20bars%2C%20live%20performance%20metrics%2C%20and%20control%20panel%20interface.%20Modern%20cloud%20computing%20visualization%20with%20remote%20access%20indicators%2C%20browser-based%20interface%2C%20and%20real-time%20data%20streaming.%20Professional%20technology%20aesthetic%20with%20blue%20and%20purple%20gradients.&width=800&height=600&seq=sim-web-control-001&orientation=landscape" 
                alt="웹 기반 실행 제어" 
                className="w-full rounded-2xl shadow-2xl object-cover object-top"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <img 
                src="https://readdy.ai/api/search-image?query=Advanced%20job%20scheduling%20system%20interface%20displaying%20queue-based%20task%20management%20with%20priority%20levels%2C%20resource%20allocation%20charts%2C%20automated%20execution%20timeline%2C%20and%20workload%20distribution%20visualization.%20Modern%20enterprise%20software%20dashboard%20showing%20pending%20jobs%2C%20running%20tasks%2C%20and%20completed%20simulations.%20Clean%20professional%20UI%20with%20organized%20task%20cards%20and%20scheduling%20calendar.&width=800&height=600&seq=sim-scheduling-001&orientation=landscape" 
                alt="작업 스케줄링" 
                className="w-full rounded-2xl shadow-2xl object-cover object-top"
              />
            </div>
            <div>
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl mb-6 flex items-center justify-center">
                <i className="ri-calendar-schedule-line text-2xl text-white w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">작업 스케줄링</h3>
              <p className="text-lg text-gray-600 mb-6">
                큐 기반 스케줄링으로 여러 시뮬레이션 작업을 효율적으로 관리하고 리소스 충돌을 방지합니다.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <i className="ri-check-line text-indigo-600 mr-3 w-5 h-5 flex items-center justify-center"></i>
                  큐 기반 작업 관리
                </li>
                <li className="flex items-center text-gray-700">
                  <i className="ri-check-line text-indigo-600 mr-3 w-5 h-5 flex items-center justify-center"></i>
                  우선순위 설정
                </li>
                <li className="flex items-center text-gray-700">
                  <i className="ri-check-line text-indigo-600 mr-3 w-5 h-5 flex items-center justify-center"></i>
                  리소스 최적 배분
                </li>
                <li className="flex items-center text-gray-700">
                  <i className="ri-check-line text-indigo-600 mr-3 w-5 h-5 flex items-center justify-center"></i>
                  자동 실행 예약
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 기대 효과 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">기대 효과</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-6xl mx-auto">
            <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-lg">1</span>
              </div>
              <p className="text-gray-700 text-sm font-medium">
                시뮬레이션 코드 및 설정값의 체계적 관리로 재현성 확보
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-lg">2</span>
              </div>
              <p className="text-gray-700 text-sm font-medium">
                사용자별 파라미터 저장 및 자동화로 작업 효율성 향상
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-2xl border border-green-100 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-lg">3</span>
              </div>
              <p className="text-gray-700 text-sm font-medium">
                협업 시 이력 추적 및 중복작업 감소
              </p>
            </div>

            <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-lg">4</span>
              </div>
              <p className="text-gray-700 text-sm font-medium">
                원격 제어를 통한 유연한 업무 환경 제공
              </p>
            </div>

            <div className="bg-purple-50 p-6 rounded-2xl border border-purple-100 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-lg">5</span>
              </div>
              <p className="text-gray-700 text-sm font-medium">
                Job 스케줄링을 통해 리소스 충돌 방지 및 생산성 향상
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 도입 효과 수치 */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">도입 효과</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">50%</div>
              <p className="text-gray-600">시뮬레이션 시간 단축</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">70%</div>
              <p className="text-gray-600">중복 작업 감소</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">100%</div>
              <p className="text-gray-600">재현성 확보</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">40%</div>
              <p className="text-gray-600">리소스 활용률 향상</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-6">
              시뮬레이션 업무를 혁신하세요
            </h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
              체계적인 관리와 협업으로 시뮬레이션 효율을 극대화합니다
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WiseCollabSimulation;
