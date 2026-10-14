
import { useState } from 'react';

export default function SolutionPackagesSection() {
  const [activeTab, setActiveTab] = useState(0);

  const packages = [
    {
      id: 'wise-collab-ai',
      title: 'Wise Collab AI',
      subtitle: '프리미엄 AI 협업 솔루션',
      description: '대기업을 위한 완전 통합형 AI 협업 플랫폼으로, 모든 제조 프로세스를 지능화합니다.',
      target: '대기업, 중견기업',
      image: 'https://readdy.ai/api/search-image?query=premium%20AI%20collaboration%20platform%20in%20large%20manufacturing%20facility%2C%20sophisticated%20holographic%20displays%20and%20advanced%20control%20systems%2C%20enterprise-level%20smart%20factory%20with%20multiple%20robotic%20systems%2C%20high-end%20industrial%20automation%20with%20blue%20and%20gold%20ambient%20lighting%2C%20executive%20boardroom%20overlooking%20smart%20manufacturing%20operations&width=600&height=400&seq=wise-collab-ai&orientation=landscape',
      features: [
        '완전 맞춤형 AI 모델 개발',
        '전사 시스템 통합 (PDM/MES/ERP)',
        '실시간 빅데이터 분석',
        '고급 예측 분석 및 최적화',
        '24/7 전담 지원팀',
        '무제한 사용자 지원'
      ],
      color: 'blue'
    },
    {
      id: 'wise-collab-standard',
      title: 'Wise Collab Standard',
      subtitle: '표준 AI 협업 솔루션',
      description: '중견기업을 위한 핵심 AI 기능을 포함한 표준형 협업 솔루션입니다.',
      target: '중견기업, 중소기업',
      image: 'https://readdy.ai/api/search-image?query=standard%20smart%20factory%20environment%20with%20moderate%20automation%20systems%2C%20mid-size%20manufacturing%20facility%20with%20digital%20displays%20and%20robotic%20equipment%2C%20professional%20industrial%20setting%20with%20green%20ambient%20lighting%2C%20balanced%20technology%20integration%20for%20medium%20enterprises%2C%20efficient%20production%20line%20with%20AI%20monitoring%20systems&width=600&height=400&seq=wise-collab-standard&orientation=landscape',
      features: [
        '3D Web Viewer',
        '주요 시스템 연동 (MES/ERP)',
        '프로젝트 협업 지원',
        '데이터의 변경이력 추적 및 관리',
        '보안 및 데이터관리',
        '최대 100명 사용자 지원'
      ],
      color: 'green'
    },
    {
      id: 'wise-collab-lite',
      title: 'Wise Collab Lite',
      subtitle: '기본 AI 협업 솔루션',
      description: '소기업을 위한 경제적이고 실용적인 AI 협업 입문 솔루션입니다.',
      target: '중소기업, 스타트업',
      image: 'https://readdy.ai/api/search-image?query=compact%20smart%20manufacturing%20setup%20for%20small%20businesses%2C%20efficient%20small-scale%20factory%20with%20essential%20automation%20equipment%2C%20clean%20modern%20workspace%20with%20purple%20ambient%20lighting%2C%20cost-effective%20AI%20systems%20for%20startups%2C%20simplified%20but%20effective%20industrial%20technology%20integration&width=600&height=400&seq=wise-collab-lite&orientation=landscape',
      features: [
        '강력한 검색도구',
        '문서중앙화 및 표준화',
        '견적서 연동 관리',
        '문서의 전자승인 관리',
        '협업도구 지원',
        '최대 30명 사용자 지원'
      ],
      color: 'purple'
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="mb-6">
            <span className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-6 py-3 rounded-full text-sm font-bold border border-blue-200">
              💼 솔루션 패키지
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            기업 규모별 맞춤형<br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AI 협업 솔루션
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            스타트업부터 대기업까지, 모든 규모의 기업이 적정 비용으로 AI의 혜택을 누릴 수 있도록 설계된 솔루션입니다.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="bg-white p-2 rounded-2xl shadow-lg border border-gray-100">
            <div className="flex gap-2">
              {packages.map((pkg, index) => (
                <button
                  key={pkg.id}
                  className={`px-6 py-3 rounded-xl font-semibold text-sm whitespace-nowrap cursor-pointer transition-all duration-300 ${
                    activeTab === index
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  {pkg.title}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={pkg.id}
              className={`transition-all duration-500 ${activeTab === index ? 'block' : 'hidden'}`}
            >
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative h-96 lg:h-auto">
                    <img 
                      src={pkg.image} 
                      alt={pkg.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${
                      pkg.color === 'blue' ? 'from-blue-600 to-indigo-700' :
                      pkg.color === 'green' ? 'from-green-500 to-emerald-600' :
                      'from-purple-500 to-violet-600'
                    } opacity-20`}></div>
                  </div>
                  <div className="p-12">
                    <div className="mb-8">
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`w-12 h-12 ${
                          pkg.color === 'blue' ? 'bg-blue-100' :
                          pkg.color === 'green' ? 'bg-green-100' :
                          'bg-purple-100'
                        } rounded-xl flex items-center justify-center`}>
                          <i className={`ri-star-line text-xl ${
                            pkg.color === 'blue' ? 'text-blue-600' :
                            pkg.color === 'green' ? 'text-green-600' :
                            'text-purple-600'
                          } w-6 h-6 flex items-center justify-center`}></i>
                        </div>
                        <div>
                          <h3 className="text-3xl font-bold text-gray-900">{pkg.title}</h3>
                          <div className="text-gray-600 font-medium">{pkg.subtitle}</div>
                        </div>
                      </div>
                      <p className="text-gray-700 text-lg leading-relaxed mb-6">
                        {pkg.description}
                      </p>
                      <div className="inline-block bg-gray-100 px-4 py-2 rounded-full text-sm font-semibold text-gray-700">
                        {pkg.target}
                      </div>
                    </div>
                    <div className="mb-8">
                      <h4 className="font-bold text-gray-900 mb-6 text-xl">포함 기능</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {pkg.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-3">
                            <div className={`w-6 h-6 ${
                              pkg.color === 'blue' ? 'bg-blue-100' :
                              pkg.color === 'green' ? 'bg-green-100' :
                              'bg-purple-100'
                            } rounded-full flex items-center justify-center flex-shrink-0`}>
                              <i className={`ri-check-line text-sm ${
                                pkg.color === 'blue' ? 'text-blue-600' :
                                pkg.color === 'green' ? 'text-green-600' :
                                'text-purple-600'
                              } w-3 h-3 flex items-center justify-center`}></i>
                            </div>
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="text-center">
                      <button className={`bg-gradient-to-r ${
                        pkg.color === 'blue' ? 'from-blue-600 to-indigo-700' :
                        pkg.color === 'green' ? 'from-green-500 to-emerald-600' :
                        'from-purple-500 to-violet-600'
                      } text-white px-12 py-4 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer font-bold flex items-center justify-center gap-2 mx-auto`}>
                        <i className="ri-play-circle-line text-xl w-5 h-5 flex items-center justify-center"></i>
                        무료 데모 신청
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
