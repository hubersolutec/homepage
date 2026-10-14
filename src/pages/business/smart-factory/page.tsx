import { useState } from 'react';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';

export default function SmartFactoryPage() {
  const [activeCase, setActiveCase] = useState(0);

  const cases = [
    {
      title: '글로벌 자동차 부품사 컨설팅으로 비용 절감',
      image: '/assets/about/about-who-v23.png',
      highlights: ['글로벌 표준 Framework', 'MES 표준화·확산', '구축 인건비 55% 절감'],
      description: `글로벌 자동차 부품을 제조하는 고객사는 공장별로 상이한 제조 시스템을 사용하고 있어 신규 공장 구축 시 비용이 증가하는 문제가 있었습니다. 해외 신규 공장 확산 프로젝트의 투자 비용을 절감하기 위하여 후버솔루텍에 스마트팩토리 컨설팅을 요청했습니다.

후버솔루텍 컨설턴트는 표준 Framework를 정의한 후 시스템 설계와 프로세스 컨설팅을 진행했고, 체계적인 표준화 컨설팅으로 고객사의 해외 공장에 MES를 성공적으로 구축하였습니다.

추후 다른 공장에 MES 확산 시 기존 공장에 적용된 Asset을 활용하여 인건비를 55%를 절감하였으며 글로벌 환경 변화에 효율적으로 대응할 수 있었습니다.`
    },
    {
      title: '금속/플라스틱 가공 회사 제조 경쟁력 강화',
      image: '/assets/about/about-who-v23.png',
      highlights: ['공정·설비 데이터 연결', '생산·품질 이력 통합', '현장 중심 단계별 구축'],
      description: `금속 및 플라스틱 가공 현장은 다품종 생산, 잦은 계획 변경, 설비별 실적 분산으로 인해 납기와 품질을 동시에 관리하기 어렵습니다. 특히 CNC·프레스·사출·조립 공정의 작업 정보가 수기 문서와 엑셀에 나뉘어 있으면 생산 진척, 재공품, 불량 원인을 적시에 파악하기 어렵습니다.

후버솔루텍은 현장 진단을 바탕으로 생산계획, 작업지시, 설비·생산실적, LOT 추적, 재고 및 품질 이력을 하나의 운영 흐름으로 연결하는 스마트팩토리 솔루션을 제공했습니다. 기존 설비와 시스템은 최대한 활용하면서 필요한 데이터부터 단계적으로 연계해 현장 적용 부담을 낮췄습니다.

이를 통해 주문과 생산계획의 정합성을 높이고, 공정별 진행 상황과 병목을 빠르게 확인하며, 원자재부터 완제품까지의 이력을 체계적으로 관리할 수 있는 기반을 구축했습니다. 생산 대응력과 품질 추적성을 함께 높여 금속·플라스틱 가공 기업의 지속적인 제조 경쟁력 강화를 지원합니다.`
    }
  ];

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
            <p className="text-blue-300 text-sm font-semibold mb-3 tracking-wide">서비스</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">스마트팩토리 컨설팅</h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              제조 현장의 디지털 전환을 위한<br className="md:hidden" />최적의 솔루션을 제시합니다
            </p>
          </div>
        </div>
      </section>

      {/* 서비스 개요 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">서비스 개요</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              후버솔루텍의 컨설팅 서비스는 스마트팩토리 전문 컨설턴트가<br />
              제조 현장의 스마트팩토리 구현을 위한 최적의 솔루션을 제시합니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-sm font-extrabold text-blue-700">수준 진단</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">수준 진단 서비스</h3>
              <div className="space-y-3 text-gray-600">
                <p className="font-semibold text-gray-800">스마트팩토리 구현 수준 평가 및 성숙도 측정</p>
                <p className="text-sm">• 진단 모델을 활용한 로드맵 수립</p>
                <p className="text-sm">• 생산계획/관리, 작업지시, 품질관리 등 시스템 활용 수준 평가</p>
                <p className="text-sm">• 설비 온라인, 데이터 가시화 성숙도 진단</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-sm font-extrabold text-blue-700">Master Plan</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Master Plan 컨설팅</h3>
              <div className="space-y-3 text-gray-600">
                <p className="font-semibold text-gray-800">스마트팩토리 전환을 위한 전략적 계획 수립</p>
                <p className="text-sm">• 공장의 AS-IS 분석을 통한 TO-BE 목표 수립</p>
                <p className="text-sm">• 스마트팩토리 세부 기능 정의</p>
                <p className="text-sm">• 추진 일정, 기대 효과 등 단계별 실행 계획 수립</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-sm font-extrabold text-blue-700">PI 컨설팅</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">PI 컨설팅</h3>
              <div className="space-y-3 text-gray-600">
                <p className="font-semibold text-gray-800">스마트팩토리 구축을 위한 표준 프로세스 수립 및 개선</p>
                <p className="text-sm">• 현 프로세스 분석 및 문제점 도출</p>
                <p className="text-sm">• 개선점 발굴 및 최적화 방안 제시</p>
                <p className="text-sm">• 표준화를 통한 혁신적인 프로세스 수립</p>
              </div>
              <p className="text-xs text-gray-500 mt-4">* Process Innovation (프로세스혁신)</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-sm font-extrabold text-blue-700">특화 영역</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">특화 영역 전문 컨설팅</h3>
              <div className="space-y-3 text-gray-600">
                <p className="text-sm">• 설비 인터페이스/온라인 스펙 사양 설명서 제공</p>
                <p className="text-sm">• 최적의 라인 물류 자동화 레이아웃 설계</p>
                <p className="text-sm">• 자동화 설비 선정 및 컨설팅</p>
                <p className="text-sm">• 창고 자동화 방안 수립</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 필요성 */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">필요성</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">성공적인 스마트팩토리 구축 로드맵 수립을 위하여</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <i className="ri-team-line text-3xl text-blue-600"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">업종 노하우와 전문 지식 필요</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <i className="ri-checkbox-circle-fill text-blue-600 mt-1 mr-3 flex-shrink-0"></i>
                  <span>유사 업종 컨설팅 및 대형 프로젝트 경험에 의한 성공 모델/노하우</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-checkbox-circle-fill text-blue-600 mt-1 mr-3 flex-shrink-0"></i>
                  <span>고도화된 기술, 데이터 분석, 자동화 등 다양한 스마트 제조 지식</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-checkbox-circle-fill text-blue-600 mt-1 mr-3 flex-shrink-0"></i>
                  <span>분야별 스마트팩토리 전문가의 전문적인 조언과 방향성 제시</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <i className="ri-roadmap-line text-3xl text-green-600"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">전략적인 계획 수립 및 구축 방안 필요</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <i className="ri-checkbox-circle-fill text-green-600 mt-1 mr-3 flex-shrink-0"></i>
                  <span>컨설팅 이후의 구축/운영까지 연계한 전략적인 계획</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-checkbox-circle-fill text-green-600 mt-1 mr-3 flex-shrink-0"></i>
                  <span>기존 공장 확산 및 신공장 구축을 위한 로드맵</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-checkbox-circle-fill text-green-600 mt-1 mr-3 flex-shrink-0"></i>
                  <span>미래 성장을 위한 최적의 스마트팩토리 구축 방안</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 역량/특장점 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">역량/특장점</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              {
                letter: 'S',
                color: 'blue',
                title: 'Success Model',
                subtitle: '유사 업종 프로젝트 성공 모델 제시',
                items: [
                  '국내외 다양한 기업에 컨설팅과 구축을 연계한 프로젝트 경험 보유',
                  '글로벌 기업에 수행한 MES 구축 성공사례 및 노하우 활용'
                ]
              },
              {
                letter: 'S',
                color: 'green',
                title: 'Specialist',
                subtitle: '분야별 전문인력 보유',
                items: [
                  '제조 현장의 인프라, 설비 온라인, 솔루션 구축, 운영까지 전문 지식을 활용한 스마트팩토리 전문 컨설팅',
                  '자동화, 데이터 분석, IoT 등 다양한 기술을 접목한 스마트팩토리 전략 수립'
                ]
              },
              {
                letter: 'S',
                color: 'purple',
                title: 'Solution',
                subtitle: '검증된 방법론 및 진단 Tool Kit 적용',
                items: [
                  '다양한 업종/분야에서 다년간 검증된 컨설팅 방법론을 활용하여 최적의 솔루션 제시',
                  '수십년 간 축적된 노하우를 반영한 수준진단 Tool Kit 활용'
                ]
              },
              {
                letter: 'S',
                color: 'orange',
                title: 'Strategic Mind',
                subtitle: '전략적 변화 관리 서비스',
                items: [
                  '현장 혁신 마인드 제고 및 혁신 활동 가이드',
                  '고객의 업무수행 능력 향상을 위한 스마트팩토리 구축 성공, 실패사례 공유'
                ]
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <div className={`w-20 h-20 bg-${item.color}-600 bg-opacity-10 rounded-2xl flex items-center justify-center mb-6 mx-auto`}>
                  <span className={`text-4xl font-bold text-${item.color}-600`}>{item.letter}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{item.title}</h3>
                <h4 className="text-base font-semibold text-gray-800 mb-4 text-center">{item.subtitle}</h4>
                <ul className="space-y-3">
                  {item.items.map((text, i) => (
                    <li key={i} className="text-sm text-gray-600 leading-relaxed">{text}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 p-1 rounded-full">
              <div className="bg-white px-8 py-4 rounded-full">
                <p className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  후버솔루텍 4S 컨설팅역량
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 고객 혜택 */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">고객 혜택</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              제조 현장의 단계별 최적화를 고려한 맞춤형 청사진 및 ROI 제시
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100">
              <div className="w-20 h-20 mx-auto mb-6">
                <span className="text-sm font-extrabold text-blue-700">최고 경영자</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">최고 경영자</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <i className="ri-checkbox-circle-fill text-blue-600 mt-1 mr-3 flex-shrink-0"></i>
                  <span>전문가의 단계별 로드맵 제시로 구축 비용 최적화</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-checkbox-circle-fill text-blue-600 mt-1 mr-3 flex-shrink-0"></i>
                  <span>스마트팩토리 수준 진단을 통한 발전 방향 제시</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-checkbox-circle-fill text-blue-600 mt-1 mr-3 flex-shrink-0"></i>
                  <span>투자 비용, 구축 기간, ROI 등을 고려한 투자 계획 수립</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100">
              <div className="w-20 h-20 mx-auto mb-6">
                <span className="text-sm font-extrabold text-blue-700">생산 관리자</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">생산 관리자</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <i className="ri-checkbox-circle-fill text-green-600 mt-1 mr-3 flex-shrink-0"></i>
                  <span>스마트팩토리 전환에 필요한 지식과 기술 습득</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-checkbox-circle-fill text-green-600 mt-1 mr-3 flex-shrink-0"></i>
                  <span>현장 특성과 자원을 고려한 실행 계획 및 준비 항목 점검</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-checkbox-circle-fill text-green-600 mt-1 mr-3 flex-shrink-0"></i>
                  <span>명확한 업무 진행을 위한 KPI 수립</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 컨설팅 사례 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">컨설팅 사례</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            <div className="space-y-4">
              {cases.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCase(index)}
                  className={`w-full text-left p-6 rounded-xl transition-all duration-300 cursor-pointer ${
                    activeCase === index
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  <h3 className="text-lg font-bold">{item.title}</h3>
                </button>
              ))}
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src={cases[activeCase].image} 
                  alt={cases[activeCase].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="px-8 pt-4 text-xs text-slate-500">제조 운영 연결을 설명하는 개념 이미지</p>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{cases[activeCase].title}</h3>
                <div className="mb-6 grid gap-2 sm:grid-cols-3">
                  {cases[activeCase].highlights.map((highlight) => (
                    <div key={highlight} className="rounded-lg border border-blue-100 bg-blue-50 px-3 py-3 text-center text-sm font-semibold leading-5 text-blue-800">
                      {highlight}
                    </div>
                  ))}
                </div>
                <div className="text-[15px] text-gray-600 leading-7 whitespace-pre-line">
                  {cases[activeCase].description}
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
