import React from 'react';
import Header from '../components/feature/Header';
import Footer from '../components/feature/Footer';

const Placeholder: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">페이지 준비 중입니다</h1>
          <p className="text-xl text-gray-600">현재 페이지는 개발 중에 있으며, 곧 공개될 예정입니다. 양해 부탁드립니다.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Placeholder;
