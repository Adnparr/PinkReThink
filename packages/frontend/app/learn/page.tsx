import React from 'react';
import SharedHeader from '../../components/SharedHeader';
import SharedFooter from '../../components/SharedFooter';
import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';

export default function LearnPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 antialiased dark bg-dark-gradient min-h-screen">
      <div className="relative flex min-h-screen w-full flex-col">
        <SharedHeader />

        <main className="flex-1 overflow-hidden">
          <div className="mx-auto flex h-full max-w-[1600px] flex-col lg:flex-row">
            <MainContent />
            <Sidebar />
          </div>
        </main>
        
        <SharedFooter />
      </div>
    </div>
  );
}
