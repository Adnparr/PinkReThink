import React from 'react';
import Header from './components/Header';
import MainQuizArea from './components/MainQuizArea';
import Footer from './components/Footer';

export default function QuizPage() {
  return (
    <div 
      className="dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen flex flex-col dark" 
      style={{ background: 'radial-gradient(circle at center, #1a0b14 0%, #0d0208 100%)' }}
    >
      <Header />
      <MainQuizArea />
      <Footer />

      {/* Decorative background elements */}
      <div className="fixed top-20 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="fixed bottom-20 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="fixed top-10 right-10 text-yellow-300 opacity-50 animate-pulse pointer-events-none z-0">
        <span className="material-symbols-outlined text-4xl">sparkles</span>
      </div>
      <div className="fixed bottom-40 left-10 text-blue-300 opacity-50 animate-bounce pointer-events-none z-0">
        <span className="material-symbols-outlined text-4xl">cloud</span>
      </div>
      <div className="fixed top-1/2 left-20 text-pink-300 opacity-30 pointer-events-none z-0">
        <span className="material-symbols-outlined text-6xl">star</span>
      </div>
    </div>
  );
}
