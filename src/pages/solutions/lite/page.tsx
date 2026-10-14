import React from 'react';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import { Link } from 'react-router-dom';

const WiseCollabLite: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900 to-emerald-900"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-emerald-900/85"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white">
            <div className="mb-6">
              <span className="inline-block bg-green-600/20 text-green-200 px-4 py-2 rounded-full text-sm font-medium border border-green-400/30">
                AI협업솔루션
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              WiseCollab Lite<br />
              <span className="text-green-300">소기업을 위한 경량 협업 솔루션</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
              필수 기능에 집중한 가벼운 협업 플랫폼으로 소기업의 디지털 전환을 시작하세요.
              스마트공방, AS지원사업 등 정부지원사업에 최적화되어 있습니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-white text-green-600 px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 whitespace-nowrap cursor-pointer hover:scale-105">
                무료 데모 신청
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 주요 특징 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">소기업에 최적화된 핵심 기능</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              복잡한 기능은 빼고, 꼭 필요한 기능만 담았습니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-green-50 p-8 rounded-2xl border border-green-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl mb-6 flex items-center justify-center">
                <i className="ri-user-line text-2xl text-white w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">직관적인 사용자 인터페이스</h3>
              <p className="text-gray-600">
                IT 전문가가 없어도 쉽게 사용할 수 있는 직관적인 UI로 빠른 도입이 가능합니다.
              </p>
            </div>

            <div className="bg-green-50 p-8 rounded-2xl border border-green-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl mb-6 flex items-center justify-center">
                <i className="ri-database-2-line text-2xl text-white w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">기본 데이터 관리</h3>
              <p className="text-gray-600">
                생산, 재고, 품질 데이터를 체계적으로 관리하고 필요할 때 빠르게 조회할 수 있습니다.
              </p>
            </div>

            <div className="bg-green-50 p-8 rounded-2xl border border-green-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl mb-6 flex items-center justify-center">
                <i className="ri-shield-check-line text-2xl text-white w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">보안 중심 설계</h3>
              <p className="text-gray-600">
                중소기업도 안심할 수 있는 엔터프라이즈급 보안으로 데이터를 안전하게 보호합니다.
              </p>
            </div>

            <div className="bg-green-50 p-8 rounded-2xl border border-green-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl mb-6 flex items-center justify-center">
                <i className="ri-team-line text-2xl text-white w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">자료 공유 및 협업</h3>
              <p className="text-gray-600">
                팀원 간 자료 공유와 협업이 쉬워져 업무 효율성이 크게 향상됩니다.
              </p>
            </div>

            <div className="bg-green-50 p-8 rounded-2xl border border-green-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl mb-6 flex items-center justify-center">
                <i className="ri-admin-line text-2xl text-white w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">사용자 권한 관리</h3>
              <p className="text-gray-600">
                역할별 접근 권한을 설정하여 중요 데이터를 안전하게 관리할 수 있습니다.
              </p>
            </div>

            <div className="bg-green-50 p-8 rounded-2xl border border-green-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl mb-6 flex items-center justify-center">
                <i className="ri-kanban-view text-2xl text-white w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">프로젝트 관리 도구</h3>
              <p className="text-gray-600">
                프로젝트 진행 상황을 한눈에 파악하고 일정을 효율적으로 관리할 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 정부지원사업 안내 */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">정부지원사업 활용</h2>
              <p className="text-xl text-gray-600">
                WiseCollab Lite는 다양한 정부지원사업에 적합합니다
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-green-100">
                <div className="w-12 h-12 bg-green-100 rounded-xl mb-4 flex items-center justify-center">
                  <i className="ri-government-line text-green-600 text-xl w-6 h-6 flex items-center justify-center"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">스마트공방</h3>
                <p className="text-gray-600 mb-4">
                  소상공인 및 소기업을 위한 스마트공방 지원사업에 최적화된 솔루션입니다.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <i className="ri-check-line text-green-600 mr-2 w-4 h-4 flex items-center justify-center"></i>
                    생산관리 시스템 구축
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-green-600 mr-2 w-4 h-4 flex items-center justify-center"></i>
                    재고관리 자동화
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-green-600 mr-2 w-4 h-4 flex items-center justify-center"></i>
                    품질관리 체계화
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border border-green-100">
                <div className="w-12 h-12 bg-green-100 rounded-xl mb-4 flex items-center justify-center">
                  <i className="ri-service-line text-green-600 text-xl w-6 h-6 flex items-center justify-center"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">AS지원사업</h3>
                <p className="text-gray-600 mb-4">
                  기존 시스템의 업그레이드 및 유지보수를 위한 AS지원사업에 활용 가능합니다.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <i className="ri-check-line text-green-600 mr-2 w-4 h-4 flex items-center justify-center"></i>
                    기존 시스템 연동
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-green-600 mr-2 w-4 h-4 flex items-center justify-center"></i>
                    기능 확장 및 개선
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-green-600 mr-2 w-4 h-4 flex items-center justify-center"></i>
                    지속적인 기술 지원
                  </li>
                </ul>
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
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">30%</div>
              <p className="text-gray-600">업무 효율성 향상</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">50%</div>
              <p className="text-gray-600">문서 검색 시간 단축</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">40%</div>
              <p className="text-gray-600">협업 시간 절감</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">2주</div>
              <p className="text-gray-600">빠른 도입 기간</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-6">
              지금 바로 WiseCollab Lite를 시작하세요
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              소기업의 디지털 전환, 가볍게 시작하고 확실하게 성장하세요
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WiseCollabLite;
