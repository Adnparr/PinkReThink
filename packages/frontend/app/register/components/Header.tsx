import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-primary/20 px-6 md:px-10 lg:px-40 bg-black/40 backdrop-blur-md md:py-3 sticky top-0 z-50">
      <div className="flex items-center gap-4 text-primary">
        <div className="size-8 flex items-center justify-center bg-primary/10 rounded-lg">
          <span className="material-symbols-outlined">local_florist</span>
        </div>
        <h2 className="font-black text-white leading-tight">LearnBloom</h2>
      </div>
      <div className="flex items-center gap-4">
        <span className="hidden md:inline text-sm text-slate-600 dark:text-slate-400">Already have an account?</span>
        <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-primary/10 text-primary text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/20 transition-colors">
          <span className="truncate">Log In</span>
        </button>
      </div>
    </header>
  );
}
