import React from 'react';
import Header from './components/Header';
import VisualSection from './components/VisualSection';
import RegisterForm from './components/RegisterForm';
import Footer from './components/Footer';

export default function RegisterPage() {
  return (
    <div className="bg-[#0f050c] bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-[#0f050c] to-black font-display text-slate-100 min-h-screen">
      <div className="layout-container flex h-full grow flex-col">
        <Header />

        <main className="flex-1 flex items-center justify-center p-4 md:p-8">
          <div className="w-full max-w-[1000px] grid grid-cols-1 lg:grid-cols-2 bg-white/5 backdrop-blur-xl rounded-2xl shadow-2xl shadow-primary/10 overflow-hidden border border-white/10">
            <VisualSection />
            <RegisterForm />
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
