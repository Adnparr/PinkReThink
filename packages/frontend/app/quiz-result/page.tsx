import React from 'react';
import Header from './components/Header';
import Rewards from './components/Rewards';
import Actions from './components/Actions';

export default function QuizResultPage() {
  return (
    <div className="bg-[#0a0508] font-display min-h-screen flex items-center justify-center p-4 overflow-hidden text-slate-900 dark:text-slate-100 dark">
      <div className="relative max-w-2xl w-full bg-[#1a0b14]/80 backdrop-blur-xl rounded-xl shadow-[0_0_50px_rgba(242,13,128,0.2)] overflow-hidden border border-[#f20d80]/30">
        
        {/* Decorative Background Gradients & Particles */}
        <div 
          className="absolute inset-0 opacity-40 pointer-events-none" 
          style={{ 
            background: 'radial-gradient(circle at 50% 50%, #f20d8033 0%, transparent 70%), radial-gradient(circle at 20% 80%, #4a00e022 0%, transparent 50%)' 
          }}
        ></div>
        
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-10 left-10 w-1 h-1 bg-white rounded-full animate-pulse shadow-[0_0_8px_#fff]"></div>
          <div className="absolute top-40 right-20 w-1.5 h-1.5 bg-pink-400 rounded-full animate-ping shadow-[0_0_10px_#f20d80]"></div>
          <div className="absolute bottom-20 left-1/4 w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-bounce"></div>
        </div>

        {/* Main Content Area */}
        <div className="relative z-10 flex flex-col items-center p-8 text-center">
          <Header />
          <Rewards />
          <Actions />
        </div>

        {/* Bottom Decorative Line */}
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-yellow-400 via-[#f20d80] to-purple-600 shadow-[0_0_10px_#f20d80]"></div>
      </div>
    </div>
  );
}
