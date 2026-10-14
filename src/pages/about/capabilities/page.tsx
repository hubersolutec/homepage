import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';

export default function CapabilitiesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-purple-900">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-semibold border border-white/30 mb-8">
            <i className="ri-team-line w-4 h-4 flex items-center justify-center"></i>
            Capabilities
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight drop-shadow-lg">
            후버솔루텍의 <span className="text-blue-200">역량</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-50 leading-relaxed drop-shadow-md max-w-3xl mx-auto">
            전문성과 경험을 갖춘 리더십 팀이<br />
            혁신적인 솔루션을 제공합니다.
          </p>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-medium text-sm uppercase tracking-wide">Leadership Team</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">경험과 전문성을 갖춘 리더십</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              후버솔루텍의 미래를 이끌어가는 전문 리더들을 소개합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                name: '임성원',
                position: '대표이사 CEO',
                description: '25년간의 IT 개발 업계 경험을 바탕으로 제조업 디지털 전환이라는 후버솔루텍의 비전을 이끌고 있습니다.',
                expertise: ['제조업 디지털 전환', 'AI 기술 전략', '글로벌 사업 개발'],
                image: 'https://readdy.ai/api/search-image?query=professional%20Korean%20business%20executive%20CEO%20illustration%20portrait%2C%2050%20years%20old%20confident%20leadership%20character%20design%2C%20modern%20corporate%20style%20digital%20artwork%2C%20clean%20minimalist%20illustration%20with%20blue%20and%20purple%20color%20scheme%2C%20professional%20business%20executive%20character%20art%2C%20contemporary%20flat%20design%20illustration%20style%2C%20mature%20experienced%20businessman&width=400&height=500&seq=ceo-illustration-50s&orientation=portrait'
              },
              {
                name: '송재홍',
                position: '최고재무책임자 CFO',
                description: '글로벌 기업에서의 재무 관리 경험을 바탕으로 안정적인 성장을 이끌고 있습니다.',
                expertise: ['재무 전략', '투자 관리', '리스크 관리'],
                image: 'https://readdy.ai/api/search-image?query=professional%20Korean%20finance%20executive%20CFO%20illustration%20portrait%2C%20late%2040s%20experienced%20financial%20leader%20character%20design%20without%20glasses%2C%20modern%20corporate%20style%20digital%20artwork%2C%20clean%20minimalist%20illustration%20with%20blue%20and%20purple%20color%20scheme%2C%20professional%20business%20executive%20character%20art%2C%20contemporary%20flat%20design%20illustration%20style&width=400&height=500&seq=cfo-illustration-40s&orientation=portrait'
              },
              {
                name: 'Steve Park',
                position: '최고마케팅책임자 CMO',
                description: '브랜딩과 마케팅 전략 분야의 전문가로서 시장 확장과 고객 관계 관리를 주도하고 있습니다.',
                expertise: ['브랜드 전략', '디지털 마케팅', '고객 관계 관리'],
                image: 'https://readdy.ai/api/search-image?query=professional%20Korean%20marketing%20executive%20CMO%20illustration%20portrait%2C%20early%2040s%20innovative%20marketing%20leader%20character%20design%2C%20modern%20corporate%20style%20digital%20artwork%2C%20clean%20minimalist%20illustration%20with%20blue%20and%20purple%20color%20scheme%2C%20professional%20business%20executive%20character%20art%2C%20contemporary%20flat%20design%20illustration%20style&width=400&height=500&seq=cmo-illustration-early40s&orientation=portrait'
              }
            ].map((leader, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow h-full flex flex-col">
                <div className="mb-6">
                  <img 
                    src={leader.image} 
                    alt={leader.name} 
                    className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{leader.name}</h3>
                <p className="text-blue-600 font-semibold mb-4">{leader.position}</p>
                <p className="text-gray-600 mb-6 leading-relaxed flex-grow">{leader.description}</p>
                <div className="mt-auto">
                  <p className="text-sm font-semibold text-gray-900 mb-3">전문 분야</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {leader.expertise.map((skill, i) => (
                      <span key={i} className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm w-full text-center">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-3xl p-12 text-white text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">함께 성장할 인재를 찾습니다</h3>
            <p className="text-xl text-gray-200 mb-4 max-w-2xl mx-auto">혁신적인 기술과 창의적 사고로</p>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">제조업의 미래를 만들어갈 동료들을 기다립니다.</p>
            <div className="flex justify-center">
              <button className="bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer font-semibold">
                채용 신청하기
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
