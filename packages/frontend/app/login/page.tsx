import React from 'react';
import SharedHeader from '@/components/SharedHeader';
import VisualSection from './components/VisualSection';
import LoginForm from './components/LoginForm';
import SharedFooter from '@/components/SharedFooter';

export default function LoginPage() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <SharedHeader />

        <main className="flex flex-1 items-center justify-center p-2 md:p-4">
          <div className="layout-content-container flex flex-col w-full max-w-[1000px] rounded-xl overflow-hidden md:flex-row bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_50px_-12px_rgba(242,13,128,0.3)]">
            <VisualSection />
            <LoginForm />
          </div>
        </main>

        <SharedFooter />  
      </div>
    </div>
  );
}
