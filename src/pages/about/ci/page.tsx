import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';

export default function CIPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-purple-900">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-semibold border border-white/30 mb-8">
            <i className="ri-palette-line w-4 h-4 flex items-center justify-center"></i>
            Corporate Identity
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight drop-shadow-lg">
            후버솔루텍 <span className="text-blue-200">CI</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-50 leading-relaxed drop-shadow-md max-w-3xl mx-auto">
            과거와 미래를 연결하는 기술,<br />
            후버솔루텍의 브랜드 아이덴티티를 소개합니다.
          </p>
        </div>
      </section>

      {/* Logo Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-blue-600/10 text-blue-600 px-6 py-3 rounded-full text-sm font-semibold border border-blue-200 mb-8">
                <i className="ri-image-line w-4 h-4 flex items-center justify-center"></i>
                Logo Design
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                후버솔루텍 <span className="text-blue-600">로고</span>
              </h2>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-blue-50/30 p-16 rounded-3xl mb-16">
              <div className="text-center">
                <div className="inline-flex items-center gap-3 mb-8">
                  <div className="relative">
                    <div className="text-6xl font-bold">
                      <span className="text-black">H</span><span className="text-blue-600">ube</span>
                    </div>
                  </div>
                </div>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  후버솔루텍의 로고는 과거와 미래를 연결하는 기술의 가교 역할을 상징합니다.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm">
                <div className="w-16 h-16 bg-gradient-to-r from-gray-800 to-black rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-white text-3xl font-bold">H</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">검정색 'H'</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  과거의 기술과 전통적인 제조업을 상징합니다.
                </p>
                <div className="bg-gray-50 p-4 rounded-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-black rounded"></div>
                    <span className="font-mono text-sm text-gray-600">#000000</span>
                  </div>
                  <p className="text-sm text-gray-500">전통과 안정성을 나타내는 색상</p>
                </div>
              </div>

              <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-white text-2xl font-bold">ube</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">파란색 'ube'</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  미래의 기술과 혁신적인 AI 솔루션을 상징합니다.
                </p>
                <div className="bg-blue-50 p-4 rounded-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-blue-600 rounded"></div>
                    <span className="font-mono text-sm text-gray-600">#2563EB</span>
                  </div>
                  <p className="text-sm text-gray-500">혁신과 미래성을 담보하는 색상</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-12 rounded-3xl text-white">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0">
                    <i className="ri-links-line text-white text-2xl w-8 h-8 flex items-center justify-center"></i>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold mb-4">연결의 의미</h3>
                    <p className="text-xl text-blue-100 leading-relaxed mb-4">
                      검정색 'H'와 파란색 'ube'를 투명하게 연결하는 디자인은 후버솔루텍의 기술이 과거의 전통적인 제조업과 
                      미래의 AI 기술을 자연스럽게 이어주는 가교 역할을 한다는 의지를 담고 있습니다.
                    </p>
                    <p className="text-lg text-blue-200 leading-relaxed">
                      이는 디지털 전환을 통해 제조업의 과거와 미래를 연결하고, 지속가능한 성장을 지원하는 
                      후버솔루텍의 핵심 가치를 시각적으로 표현합니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Color System */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-blue-600/10 text-blue-600 px-6 py-3 rounded-full text-sm font-semibold border border-blue-200 mb-8">
                <i className="ri-palette-line w-4 h-4 flex items-center justify-center"></i>
                Color System
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                컬러 <span className="text-blue-600">시스템</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                후버솔루텍의 브랜드 아이덴티티를 구성하는 핵심 컬러 팔레트입니다.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  name: 'Primary Blue',
                  hex: '#2563EB',
                  rgb: '37, 99, 235',
                  description: '후버솔루텍의 메인 컬러로 미래성과 혁신을 상징합니다.',
                  usage: '로고, 주요 UI 요소, 강조 포인트',
                  bgClass: 'bg-blue-600'
                },
                {
                  name: 'Deep Black',
                  hex: '#000000',
                  rgb: '0, 0, 0',
                  description: '전통과 안정성을 나타내는 보조 컬러입니다.',
                  usage: '로고 \'H\', 텍스트, 강조 요소',
                  bgClass: 'bg-black'
                },
                {
                  name: 'Light Blue',
                  hex: '#DBEAFE',
                  rgb: '219, 234, 254',
                  description: '부드러운 배경과 보조 요소에 사용됩니다.',
                  usage: '배경, 카드, 보조 UI 요소',
                  bgClass: 'bg-blue-100'
                },
                {
                  name: 'Dark Gray',
                  hex: '#1F2937',
                  rgb: '31, 41, 55',
                  description: '텍스트와 콘텐츠에 사용되는 기본 컬러입니다.',
                  usage: '본문 텍스트, 제목, 설명',
                  bgClass: 'bg-gray-800'
                }
              ].map((color, index) => (
                <div key={index} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className={`w-full h-32 ${color.bgClass} rounded-2xl mb-6 shadow-inner`}></div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{color.name}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-semibold text-gray-500 w-12">HEX</span>
                      <span className="font-mono text-gray-900">{color.hex}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-semibold text-gray-500 w-12">RGB</span>
                      <span className="font-mono text-gray-900">{color.rgb}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4">{color.description}</p>
                  <div className="bg-blue-50 p-4 rounded-xl">
                    <p className="text-sm font-semibold text-blue-900 mb-1">사용 용도</p>
                    <p className="text-sm text-blue-700">{color.usage}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 bg-white p-10 rounded-3xl border border-gray-100 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">컬러 사용 가이드라인</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-contrast-2-line text-blue-600 text-2xl w-8 h-8 flex items-center justify-center"></i>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">명확한 대비</h4>
                  <p className="text-sm text-gray-600">가독성을 위해 충분한 색상 대비를 유지합니다</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-checkbox-circle-line text-green-600 text-2xl w-8 h-8 flex items-center justify-center"></i>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">일관성 유지</h4>
                  <p className="text-sm text-gray-600">모든 매체에서 동일한 컬러를 사용합니다</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-pantone-line text-purple-600 text-2xl w-8 h-8 flex items-center justify-center"></i>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">적절한 활용</h4>
                  <p className="text-sm text-gray-600">각 컬러의 용도에 맞게 적절히 활용합니다</p>
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
