import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full max-w-3xl mx-auto px-6 flex items-center justify-between py-4 z-10 relative">
      <button className="flex items-center gap-2 px-6 py-3 font-black text-slate-400 hover:text-primary transition-all">
        <span className="material-icons">arrow_back</span> QUAY LẠI
      </button>
      <button className="flex items-center gap-2 px-12 py-5 bg-primary text-white rounded-2xl font-black text-xl shadow-[0_0_30px_rgba(242,13,128,0.4)] hover:shadow-[0_0_40px_rgba(242,13,128,0.6)] hover:-translate-y-1 active:translate-y-0 transition-all uppercase">
        TIẾP TỤC <span className="material-icons text-3xl">play_circle</span>
      </button>
    </footer>
  );
}
