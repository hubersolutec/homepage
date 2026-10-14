import React from 'react';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import { Link } from 'react-router-dom';

const WiseCollabAI: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-pink-900"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-pink-900/85"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white">
            <div className="mb-6">
              <span className="inline-block bg-purple-600/20 text-purple-200 px-4 py-2 rounded-full text-sm font-medium border border-purple-400/30">
                AI협업솔루션 · AI POWERED
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              WiseCollab AI<br />
              <span className="text-purple-300">AI 기반 지능형 협업 솔루션</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
              Standard의 모든 기능에 AI 기반 지능형 업무 지원, 예측 분석, RAG 기반 AI Agent를 추가하여
              제조업의 디지털 전환을 완성합니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 whitespace-nowrap cursor-pointer hover:scale-105">
                무료 데모 신청
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Standard 기능 포함 안내 */}
      <section className="py-12 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 text-purple-800">
            <i className="ri-check-double-line text-2xl w-6 h-6 flex items-center justify-center"></i>
            <span className="text-lg font-semibold">WiseCollab Standard의 모든 기능 포함</span>
          </div>
        </div>
      </section>

      {/* AI 핵심 기능 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">AI가 만드는 새로운 업무 경험</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              인공지능이 업무를 분석하고, 예측하고, 자동화합니다
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto mb-20">
            <div>
              <img 
                src="https://readdy.ai/api/search-image?query=AI%20powered%20business%20intelligence%20dashboard%20with%20machine%20learning%20predictions%2C%20smart%20analytics%20interface%20showing%20automated%20insights%2C%20modern%20enterprise%20AI%20platform%20with%20natural%20language%20processing&width=600&height=400&seq=ai-intelligence&orientation=landscape" 
                alt="AI 기반 지능형 업무 지원" 
                className="w-full rounded-2xl shadow-2xl object-cover"
              />
            </div>
            <div>
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl mb-6 flex items-center justify-center">
                <i className="ri-sparkle-line text-2xl text-white w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">AI 기반 지능형 업무 지원</h3>
              <p className="text-lg text-gray-600 mb-6">
                AI가 업무 패턴을 학습하여 최적의 작업 방식을 제안하고, 반복적인 업무를 자동화합니다.
                사용자는 더 중요한 의사결정에 집중할 수 있습니다.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <i className="ri-sparkle-fill text-purple-600 mr-3 w-5 h-5 flex items-center justify-center"></i>
                  스마트 문서 분류 및 태깅
                </li>
                <li className="flex items-center text-gray-700">
                  <i className="ri-sparkle-fill text-purple-600 mr-3 w-5 h-5 flex items-center justify-center"></i>
                  자동 일정 최적화
                </li>
                <li className="flex items-center text-gray-700">
                  <i className="ri-sparkle-fill text-purple-600 mr-3 w-5 h-5 flex items-center justify-center"></i>
                  업무 우선순위 추천
                </li>
                <li className="flex items-center text-gray-700">
                  <i className="ri-sparkle-fill text-purple-600 mr-3 w-5 h-5 flex items-center justify-center"></i>
                  이상 징후 자동 감지
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto mb-20">
            <div className="order-2 lg:order-1">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl mb-6 flex items-center justify-center">
                <i className="ri-line-chart-line text-2xl text-white w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">예측 분석 & 자동화</h3>
              <p className="text-lg text-gray-600 mb-6">
                과거 데이터를 기반으로 미래를 예측하고, 최적의 의사결정을 지원합니다.
                생산 계획, 품질 관리, 설비 유지보수 등 다양한 영역에서 활용됩니다.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <i className="ri-sparkle-fill text-purple-600 mr-3 w-5 h-5 flex items-center justify-center"></i>
                  수요 예측 및 생산 계획 최적화
                </li>
                <li className="flex items-center text-gray-700">
                  <i className="ri-sparkle-fill text-purple-600 mr-3 w-5 h-5 flex items-center justify-center"></i>
                  품질 불량 예측 및 사전 대응
                </li>
                <li className="flex items-center text-gray-700">
                  <i className="ri-sparkle-fill text-purple-600 mr-3 w-5 h-5 flex items-center justify-center"></i>
                  설비 고장 예측 및 예방 정비
                </li>
                <li className="flex items-center text-gray-700">
                  <i className="ri-sparkle-fill text-purple-600 mr-3 w-5 h-5 flex items-center justify-center"></i>
                  재고 최적화 및 자동 발주
                </li>
              </ul>
            </div>
            <div className="order-1 lg:order-2">
              <img 
                src="https://readdy.ai/api/search-image?query=predictive%20analytics%20dashboard%20with%20forecasting%20charts%2C%20machine%20learning%20model%20visualization%2C%20business%20intelligence%20platform%20showing%20trend%20analysis%20and%20predictions%2C%20modern%20data%20science%20interface&width=600&height=400&seq=ai-prediction&orientation=landscape" 
                alt="예측 분석 & 자동화" 
                className="w-full rounded-2xl shadow-2xl object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <img 
                src="https://readdy.ai/api/search-image?query=AI%20chatbot%20interface%20for%20enterprise%2C%20conversational%20AI%20assistant%20dashboard%2C%20RAG%20based%20knowledge%20retrieval%20system%2C%20natural%20language%20query%20interface%20with%20document%20search%20results&width=600&height=400&seq=ai-agent&orientation=landscape" 
                alt="RAG 기반 AI Agent" 
                className="w-full rounded-2xl shadow-2xl object-cover"
              />
            </div>
            <div>
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl mb-6 flex items-center justify-center">
                <i className="ri-robot-line text-2xl text-white w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">RAG 기반 AI Agent</h3>
              <p className="text-lg text-gray-600 mb-6">
                기업의 문서, 매뉴얼, 데이터를 학습한 AI Agent가 자연어로 질문에 답변합니다.
                전문가 수준의 지식을 누구나 쉽게 활용할 수 있습니다.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <i className="ri-sparkle-fill text-purple-600 mr-3 w-5 h-5 flex items-center justify-center"></i>
                  자연어 질의응답
                </li>
                <li className="flex items-center text-gray-700">
                  <i className="ri-sparkle-fill text-purple-600 mr-3 w-5 h-5 flex items-center justify-center"></i>
                  문서 기반 정확한 답변
                </li>
                <li className="flex items-center text-gray-700">
                  <i className="ri-sparkle-fill text-purple-600 mr-3 w-5 h-5 flex items-center justify-center"></i>
                  출처 명시 및 근거 제공
                </li>
                <li className="flex items-center text-gray-700">
                  <i className="ri-sparkle-fill text-purple-600 mr-3 w-5 h-5 flex items-center justify-center"></i>
                  지속적인 학습 및 개선
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 정부지원사업 */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">정부지원사업 활용</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-purple-100">
              <div className="w-12 h-12 bg-purple-100 rounded-xl mb-4 flex items-center justify-center">
                <i className="ri-government-line text-purple-600 text-xl w-6 h-6 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">스마트팩토리 지원사업</h3>
              <p className="text-gray-600 mb-4">
                AI 기반 고도화 수준의 스마트팩토리 구축에 최적화된 솔루션입니다.
              </p>
              <div className="bg-purple-50 p-4 rounded-xl">
                <div className="text-sm text-purple-800">
                  <strong>지원 수준:</strong> 중간2 ~ 고도화
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-purple-100">
              <div className="w-12 h-12 bg-purple-100 rounded-xl mb-4 flex items-center justify-center">
                <i className="ri-brain-line text-purple-600 text-xl w-6 h-6 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI 바우처</h3>
              <p className="text-gray-600 mb-4">
                중소기업의 AI 도입을 지원하는 AI 바우처 사업에 활용 가능합니다.
              </p>
              <div className="bg-purple-50 p-4 rounded-xl">
                <div className="text-sm text-purple-800">
                  <strong>지원 내용:</strong> AI 솔루션 도입 비용 지원
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
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">60%</div>
              <p className="text-gray-600">업무 자동화율</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">80%</div>
              <p className="text-gray-600">의사결정 속도 향상</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">50%</div>
              <p className="text-gray-600">예측 정확도 향상</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">6주</div>
              <p className="text-gray-600">평균 도입 기간</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-6">
              AI와 함께하는 스마트한 협업을 시작하세요
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              WiseCollab AI로 제조업의 디지털 전환을 완성하세요
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WiseCollabAI;
