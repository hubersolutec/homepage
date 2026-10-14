

export default function PricingSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            지능화된 데이터 공유와 의사소통의 자율화
          </h2>
          <p className="text-lg text-gray-600">
            기업 규모와 요구사항에 맞는 맞춤형 AI 솔루션으로 제조업의 디지털 전환을 지원합니다
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          <div className="relative bg-white rounded-3xl border transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 shadow-lg border-gray-200 hover:border-gray-300">
            <div className="p-8">
              <div className="text-center mb-8">
                <div className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">STANDARD SERVICE</div>
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i className="ri-settings-4-line text-2xl text-blue-600 w-8 h-8 flex items-center justify-center"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">표준 서비스</h3>
                <p className="text-gray-600 text-sm mb-6">소규모 팀을 위한 효율적인 협업 솔루션</p>
              </div>
              <div className="mb-8">
                <h4 className="font-bold text-gray-900 mb-4">포함된 기능</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <i className="ri-check-line text-xs text-blue-600 w-3 h-3 flex items-center justify-center"></i>
                    </div>
                    <span className="text-gray-700 text-sm leading-relaxed">Wise Collab 핵심 협업 기능 제공</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <i className="ri-check-line text-xs text-blue-600 w-3 h-3 flex items-center justify-center"></i>
                    </div>
                    <span className="text-gray-700 text-sm leading-relaxed">제조 현장 작업 데이터 실시간 공유 및 관리</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <i className="ri-check-line text-xs text-blue-600 w-3 h-3 flex items-center justify-center"></i>
                    </div>
                    <span className="text-gray-700 text-sm leading-relaxed">기본 공정 효율성 진단 및 개선 지원</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <i className="ri-check-line text-xs text-blue-600 w-3 h-3 flex items-center justify-center"></i>
                    </div>
                    <span className="text-gray-700 text-sm leading-relaxed">팀 맞춤형 모듈 구축 및 현장 협업 도구 제공</span>
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <span className="text-sm text-gray-500">14일 무료 체험 • 언제든 취소 가능</span>
              </div>
            </div>
          </div>

          <div className="relative bg-white rounded-3xl border transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 shadow-lg border-green-300 ring-2 ring-green-200 shadow-green-500/20">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                🔥 가장 인기
              </div>
            </div>
            <div className="p-8">
              <div className="text-center mb-8">
                <div className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">PREMIUM SERVICE</div>
                <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i className="ri-rocket-2-line text-2xl text-purple-600 w-8 h-8 flex items-center justify-center"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">프리미엄 서비스</h3>
                <p className="text-gray-600 text-sm mb-6">성장하는 기업을 위한 AI 기반 협업 및 프로세스 최적화 플랫폼</p>
              </div>
              <div className="mb-8">
                <h4 className="font-bold text-gray-900 mb-4">포함된 기능</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-purple-50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <i className="ri-check-line text-xs text-purple-600 w-3 h-3 flex items-center justify-center"></i>
                    </div>
                    <span className="text-gray-700 text-sm leading-relaxed">Wise Collab AI 기반 제조 프로세스 전반의 AI 진단 및 분석</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-purple-50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <i className="ri-check-line text-xs text-purple-600 w-3 h-3 flex items-center justify-center"></i>
                    </div>
                    <span className="text-gray-700 text-sm leading-relaxed">AI 기반 작업 시스템 최적화 및 스마트 구축 지원</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-purple-50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <i className="ri-check-line text-xs text-purple-600 w-3 h-3 flex items-center justify-center"></i>
                    </div>
                    <span className="text-gray-700 text-sm leading-relaxed">지능형 품질 관리 및 생산성 향상 솔루션</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-purple-50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <i className="ri-check-line text-xs text-purple-600 w-3 h-3 flex items-center justify-center"></i>
                    </div>
                    <span className="text-gray-700 text-sm leading-relaxed">ESG 공급망 관리 및 프로세스 전환 컨설팅</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-purple-50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <i className="ri-check-line text-xs text-purple-600 w-3 h-3 flex items-center justify-center"></i>
                    </div>
                    <span className="text-gray-700 text-sm leading-relaxed">확장 가능한 크로스 플랫폼 및 시스템 통합 지원</span>
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <span className="text-sm text-gray-500">14일 무료 체험 • 언제든 취소 가능</span>
              </div>
            </div>
          </div>

          <div className="relative bg-white rounded-3xl border transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 shadow-lg border-gray-200 hover:border-gray-300">
            <div className="p-8">
              <div className="text-center mb-8">
                <div className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">ULTIMATE SERVICE</div>
                <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i className="ri-trophy-line text-2xl text-orange-600 w-8 h-8 flex items-center justify-center"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">얼티마 서비스</h3>
                <p className="text-gray-600 text-sm mb-6">대기업을 위한 최첨단 맞춤형 AI 기반 통합 솔루션</p>
              </div>
              <div className="mb-8">
                <h4 className="font-bold text-gray-900 mb-4">포함된 기능</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-orange-50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <i className="ri-check-line text-xs text-orange-600 w-3 h-3 flex items-center justify-center"></i>
                    </div>
                    <span className="text-gray-700 text-sm leading-relaxed">AI 시뮬레이터를 통한 프로젝트 및 생산 계획 실시간 시뮬레이션 및 최적화</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-orange-50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <i className="ri-check-line text-xs text-orange-600 w-3 h-3 flex items-center justify-center"></i>
                    </div>
                    <span className="text-gray-700 text-sm leading-relaxed">엔터프라이즈급 360° 맞춤형 시스템 구축 및 통합 컨설팅</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-orange-50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <i className="ri-check-line text-xs text-orange-600 w-3 h-3 flex items-center justify-center"></i>
                    </div>
                    <span className="text-gray-700 text-sm leading-relaxed">24시간 전담 온라인 기술 지원 및 최신 솔루션 맞춤 업데이트</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-orange-50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <i className="ri-check-line text-xs text-orange-600 w-3 h-3 flex items-center justify-center"></i>
                    </div>
                    <span className="text-gray-700 text-sm leading-relaxed">IoT 기술 기반 설비 및 제품 기능 실시간 모니터링 시스템 구축</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-orange-50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <i className="ri-check-line text-xs text-orange-600 w-3 h-3 flex items-center justify-center"></i>
                    </div>
                    <span className="text-gray-700 text-sm leading-relaxed">빅데이터 기반의 심층 분석 및 비즈니스 인텔리전스(BI) 제공</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <button className="px-12 py-4 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer font-bold text-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            상담 문의 접수
          </button>
        </div>

        <div className="text-center mb-16">
          <div className="bg-gray-50 rounded-3xl p-12 shadow-xl border border-gray-100 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">모든 플랜에 포함된 기본 혜택</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i className="ri-shield-check-line text-2xl text-blue-600 w-8 h-8 flex items-center justify-center"></i>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">보안 보장</h4>
                <p className="text-gray-600 text-sm">엔터프라이즈급 보안</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i className="ri-cloud-line text-2xl text-green-600 w-8 h-8 flex items-center justify-center"></i>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">클라우드 백업</h4>
                <p className="text-gray-600 text-sm">자동 데이터 백업</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i className="ri-refresh-line text-2xl text-purple-600 w-8 h-8 flex items-center justify-center"></i>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">정기 업데이트</h4>
                <p className="text-gray-600 text-sm">최신 기능 자동 적용</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i className="ri-customer-service-line text-2xl text-orange-600 w-8 h-8 flex items-center justify-center"></i>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">고객 지원</h4>
                <p className="text-gray-600 text-sm">전문가 기술 지원</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">자주 묻는 질문</h3>
          </div>
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-2xl p-6 shadow-md border border-gray-100">
              <h4 className="font-bold text-gray-900 text-lg mb-3">무료 체험 기간 동안 모든 기능을 사용할 수 있나요?</h4>
              <p className="text-gray-600 leading-relaxed">네, 14일 무료 체험 기간 동안 선택하신 플랜의 모든 기능을 제한 없이 사용하실 수 있습니다.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 shadow-md border border-gray-100">
              <h4 className="font-bold text-gray-900 text-lg mb-3">플랜을 중간에 변경할 수 있나요?</h4>
              <p className="text-gray-600 leading-relaxed">언제든지 플랜을 업그레이드하거나 다운그레이드할 수 있습니다. 변경사항은 다음 결제 주기부터 적용됩니다.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 shadow-md border border-gray-100">
              <h4 className="font-bold text-gray-900 text-lg mb-3">온프레미스 설치가 가능한가요?</h4>
              <p className="text-gray-600 leading-relaxed">Enterprise 플랜에서는 온프레미스 배포를 지원합니다. 보안이 중요한 환경에서도 안전하게 사용하실 수 있습니다.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 shadow-md border border-gray-100">
              <h4 className="font-bold text-gray-900 text-lg mb-3">기존 시스템과의 연동은 어떻게 진행되나요?</h4>
              <p className="text-gray-600 leading-relaxed">전문 엔지니어가 기존 시스템 분석 후 맞춤형 연동 솔루션을 제공합니다. 평균 2-4주 내에 연동이 완료됩니다.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
