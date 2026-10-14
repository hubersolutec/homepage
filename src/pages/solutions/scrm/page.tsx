import React from 'react';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import { Link } from 'react-router-dom';

const WiseSCRM: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 relative bg-cover bg-center" style={{ backgroundImage: 'url(https://www.whosgood.org/public/images/sub_top_banner02.png)' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/60"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-white max-w-4xl">
            <div className="mb-6">
              <span className="inline-block bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20">
                지속가능경영 솔루션
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              WISE SCRM 솔루션
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
              SCRM(Supply Chain (ESG) Risk Management; 공급망 리스크 관리) 솔루션은 기업이 공급망의 ESG 경영 수준을 편리하게 관리할 수 있도록 개발된 솔루션입니다.
            </p>
          </div>
        </div>
      </section>

      {/* 4가지 주요 서비스 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-xl mx-auto mb-6 flex items-center justify-center">
                <i className="ri-file-list-3-line text-blue-600 text-2xl w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">자가진단(ESG MBTI™)</h3>
              <p className="text-gray-600 text-sm">
                협력사 스스로 ESG 경영 수준을 진단합니다.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-50 rounded-xl mx-auto mb-6 flex items-center justify-center">
                <i className="ri-bar-chart-box-line text-green-600 text-2xl w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">ESG 평가</h3>
              <p className="text-gray-600 text-sm">
                자가진단보다 정밀하게 ESG 경영 수준을 진단합니다.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-50 rounded-xl mx-auto mb-6 flex items-center justify-center">
                <i className="ri-search-eye-line text-purple-600 text-2xl w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">ESG 실사</h3>
              <p className="text-gray-600 text-sm">
                협력사의 ESG 경영 현황을 현장에서 ESG 전문가들이 점검합니다.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-50 rounded-xl mx-auto mb-6 flex items-center justify-center">
                <i className="ri-alarm-warning-line text-orange-600 text-2xl w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">ESG 리스크 모니터링 서비스</h3>
              <p className="text-gray-600 text-sm">
                매일 제공되는 ESG 조기경보(이메일)를 통해 공급망 내 기업의 ESG 리스크 모니터링합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 공급망 ESG RISK MANAGEMENT PROCESS */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">공급망 ESG RISK MANAGEMENT PROCESS</h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <img 
              src="https://static.readdy.ai/image/474d22559ce27b83412ff775226e0845/f4194ad52f4ff25f5be747c0998e3ba4.png" 
              alt="공급망 ESG Risk Management Process" 
              className="w-full rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* SCRM 솔루션의 특징 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">SCRM 솔루션의 특징</h2>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            <div className="border-b border-gray-200 pb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                <div className="md:col-span-1">
                  <h3 className="text-xl font-bold text-gray-900">선도적 중소기업 평가모델 개발</h3>
                </div>
                <div className="md:col-span-2">
                  <p className="text-gray-600">
                    2019년 중소기업 ESG 평가 모델은 금융위원회 '혁신금융서비스'로 2019년 지정됨
                  </p>
                </div>
              </div>
            </div>

            <div className="border-b border-gray-200 pb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                <div className="md:col-span-1">
                  <h3 className="text-xl font-bold text-gray-900">경험 있는 ESG 전문가 참여</h3>
                </div>
                <div className="md:col-span-2">
                  <p className="text-gray-600">
                    국내 환경 실사 및 중소기업 ESG 평가 경험이 풍부한 전문가들이 SCRM 솔루션을 제공함
                  </p>
                </div>
              </div>
            </div>

            <div className="pb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                <div className="md:col-span-1">
                  <h3 className="text-xl font-bold text-gray-900">맞춤형 평가 설계</h3>
                </div>
                <div className="md:col-span-2">
                  <p className="text-gray-600">
                    기업의 ESG 경영 수준 및 기업 니즈에 따라 맞춤형 서비스를 설계해 제공함 중소기업의 규모, 산업별 특성 및 시급성을 고려해 ESG 평가를 실시함
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SCRM 솔루션의 서비스 */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">SCRM 솔루션의 서비스</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">ESG MBTI</h3>
              <p className="text-gray-600 mb-6">
                가장 필수적인 항목들로 기업이 쉽게 접근할 수 있는 ESG 자가진단 서비스
              </p>
              <div className="text-sm text-blue-600 font-medium">
                결과물 : ESG MBTI 보고서
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">ESG 평가</h3>
              <p className="text-gray-600 mb-6">
                기업이 온라인으로 제출한 ESG 데이터를 기반으로 진행되는 비대면 정밀진단 서비스
              </p>
              <div className="text-sm text-blue-600 font-medium">
                결과물 : ESG 평가 보고서
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">ESG 실사</h3>
              <p className="text-gray-600 mb-6">
                기업 현장 평가를 진행해 ESG 경영 활동을 점검하는 대면 서비스
              </p>
              <div className="text-sm text-blue-600 font-medium">
                결과물 : ESG 실사 보고서
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">ESG 조기경보</h3>
              <p className="text-gray-600 mb-6">
                매일 15,000여 개의 기사를 분석해 공급망 내 ESG 리스크 기사를 선별해 제공하는 서비스
              </p>
              <div className="text-sm text-blue-600 font-medium">
                결과물 : ESG 조기경보 이메일
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 relative bg-cover bg-center" style={{ backgroundImage: 'url(https://www.whosgood.org/public/images/solution_banner.png)' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-indigo-900/80"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-blue-300">ESG 솔루션</span>
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              고객에 최적화된 ESG 솔루션 및 인사이트를 확인해 보세요
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 whitespace-nowrap cursor-pointer hover:scale-105">
                문의하기
              </Link>
              <Link to="/contact" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 whitespace-nowrap cursor-pointer">
                ESG Risk Analysis 보기
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WiseSCRM;
