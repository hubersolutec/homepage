
import React, { useState } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

const Support: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    category: '',
    priority: '',
    subject: '',
    message: ''
  });
  const [charCount, setCharCount] = useState(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (name === 'message') {
      setCharCount(value.length);
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://readdy.ai/api/form/d2rcum42132hm7p4bqvg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData).toString()
      });

      if (response.ok) {
        alert('지원 요청이 성공적으로 전송되었습니다.');
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          category: '',
          priority: '',
          subject: '',
          message: ''
        });
        setCharCount(0);
      } else {
        alert('전송 중 오류가 발생했습니다. 다시 시도해주세요.');
      }
    } catch (error) {
      alert('전송 중 오류가 발생했습니다. 다시 시도해주세요.');
    }
  };

  const notices = [
    {
      id: 1,
      category: 'system',
      priority: 'high',
      title: 'Wise Collab AI v3.2 업데이트 안내',
      author: '개발팀',
      date: '2024-03-15',
      views: 156,
      isImportant: true
    },
    {
      id: 2,
      category: 'maintenance',
      priority: 'high',
      title: '정기 시스템 점검 안내 (3월 20일)',
      author: '운영팀',
      date: '2024-03-10',
      views: 203,
      isImportant: true
    },
    {
      id: 3,
      category: 'feature',
      priority: 'normal',
      title: '새로운 대시보드 기능 출시',
      author: '제품팀',
      date: '2024-03-08',
      views: 89,
      isImportant: false
    },
    {
      id: 4,
      category: 'security',
      priority: 'normal',
      title: '보안 업데이트 및 패스워드 정책 변경',
      author: '보안팀',
      date: '2024-03-05',
      views: 127,
      isImportant: false
    },
    {
      id: 5,
      category: 'education',
      priority: 'normal',
      title: '3월 사용자 교육 프로그램 일정 안내',
      author: '교육팀',
      date: '2024-03-03',
      views: 64,
      isImportant: false
    },
    {
      id: 6,
      category: 'system',
      priority: 'normal',
      title: 'API 응답 속도 개선 완료',
      author: '개발팀',
      date: '2024-02-28',
      views: 78,
      isImportant: false
    }
  ];

  const categories = [
    { id: 'all', name: '전체', count: 6, icon: 'ri-file-list-3-line' },
    { id: 'system', name: '시스템', count: 2, icon: 'ri-settings-3-line' },
    { id: 'maintenance', name: '점검', count: 1, icon: 'ri-tools-line' },
    { id: 'feature', name: '기능', count: 1, icon: 'ri-star-line' },
    { id: 'security', name: '보안', count: 1, icon: 'ri-shield-check-line' },
    { id: 'education', name: '교육', count: 1, icon: 'ri-graduation-cap-line' }
  ];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      system: 'bg-blue-100 text-blue-700',
      maintenance: 'bg-orange-100 text-orange-700',
      feature: 'bg-green-100 text-green-700',
      security: 'bg-red-100 text-red-700',
      education: 'bg-purple-100 text-purple-700'
    };
    return colors[category] || 'bg-gray-100 text-gray-700';
  };

  const filteredNotices = activeCategory === 'all' 
    ? notices 
    : notices.filter(notice => notice.category === activeCategory);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Header Section */}
      <section className="relative pt-24 pb-8 overflow-hidden">
        <div className="absolute inset-0 h-40">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/60"></div>
        </div>
      </section>

      {/* Notice Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">공지사항</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              시스템 업데이트, 점검 일정, 새로운 기능 등 중요한 소식을 확인하세요
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Category Filter */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap cursor-pointer inline-flex items-center gap-2 ${
                      activeCategory === category.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    <i className={`${category.icon} w-4 h-4 flex items-center justify-center`}></i>
                    {category.name}
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      activeCategory === category.id
                        ? 'bg-white/20'
                        : 'bg-gray-200'
                    }`}>
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Notice List */}
            <div className="space-y-2">
              {filteredNotices.map((notice) => (
                <div
                  key={notice.id}
                  className={`bg-white border rounded-lg p-4 hover:shadow-md transition-all duration-300 cursor-pointer ${
                    notice.isImportant ? 'border-red-200 bg-red-50/20' : 'border-gray-200'
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3 flex-1">
                      {notice.isImportant && (
                        <span className="bg-red-100 text-red-600 text-xs font-bold px-2 py-1 rounded-full inline-flex items-center gap-1 whitespace-nowrap">
                          <i className="ri-error-warning-line w-3 h-3 flex items-center justify-center"></i>
                          중요
                        </span>
                      )}
                      <span className={`text-xs font-semibold px-2 py-1 rounded-full whitespace-nowrap ${getCategoryColor(notice.category)}`}>
                        {categories.find(cat => cat.id === notice.category)?.name}
                      </span>
                      <h3 className="font-semibold text-gray-900 hover:text-blue-600 transition-colors flex-1">
                        {notice.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-500 whitespace-nowrap">
                      <span>{notice.author}</span>
                      <span>{notice.date}</span>
                      <span className="inline-flex items-center gap-1">
                        <i className="ri-eye-line w-3 h-3 flex items-center justify-center"></i>
                        {notice.views}
                      </span>
                      <span className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-1">
                        보기
                        <i className="ri-arrow-right-line w-4 h-4 flex items-center justify-center"></i>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-8">
              <div className="flex items-center gap-2">
                <button className="px-3 py-2 text-gray-400 hover:text-gray-600 cursor-pointer">
                  <i className="ri-arrow-left-line w-5 h-5 flex items-center justify-center"></i>
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg cursor-pointer">1</button>
                <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer">2</button>
                <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer">3</button>
                <button className="px-3 py-2 text-gray-400 hover:text-gray-600 cursor-pointer">
                  <i className="ri-arrow-right-line w-5 h-5 flex items-center justify-center"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Request Form */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">지원 요청하기</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              문제 해결이나 기술 지원이 필요하시면 언제든지 연락해 주세요
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <form id="support-request-form" className="space-y-6" onSubmit={handleFormSubmit} data-readdy-form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      이름 <span className="text-red-500">*</span>
                    </label>
                    <input
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="이름을 입력해주세요"
                      required
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      이메일 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="이메일을 입력해주세요"
                      required
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">회사명</label>
                    <input
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="회사명을 입력해주세요"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">연락처</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="연락처를 입력해주세요"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">문의 카테고리</label>
                    <select
                      name="category"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm pr-8"
                      value={formData.category}
                      onChange={handleInputChange}
                    >
                      <option value="">선택해주세요</option>
                      <option value="technical">기술 지원</option>
                      <option value="installation">설치 관련</option>
                      <option value="integration">시스템 연동</option>
                      <option value="training">교육 및 훈련</option>
                      <option value="bug">버그 신고</option>
                      <option value="feature">기능 요청</option>
                      <option value="billing">요금 문의</option>
                      <option value="others">기타</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">우선순위</label>
                    <select
                      name="priority"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm pr-8"
                      value={formData.priority}
                      onChange={handleInputChange}
                    >
                      <option value="">선택해주세요</option>
                      <option value="low">낮음</option>
                      <option value="medium">보통</option>
                      <option value="high">높음</option>
                      <option value="urgent">긴급</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    제목 <span className="text-red-500">*</span>
                  </label>
                  <input
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    placeholder="문의 제목을 입력해주세요"
                    required
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    문의 내용 <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows={6}
                    maxLength={500}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-sm"
                    placeholder="문제 상황이나 문의 내용을 상세히 설명해 주세요. 오류 메시지, 발생 시간, 사용 환경 등을 포함하면 더 빠른 해결이 가능합니다."
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                  <div className="text-right text-xs text-gray-500 mt-1">{charCount}/500</div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors whitespace-nowrap cursor-pointer font-semibold text-base inline-flex items-center justify-center gap-2"
                >
                  지원 요청하기
                  <i className="ri-send-plane-line text-lg w-4 h-4 flex items-center justify-center"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Support;
