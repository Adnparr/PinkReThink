import React from 'react';

export default function Header() {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-white/5 px-6 md:px-20 lg:px-40 bg-black/20 backdrop-blur-md sticky top-0 z-50 py-3">
      <div className="flex items-center gap-3 text-primary">
        <div className="size-8 flex items-center justify-center bg-primary/10 rounded-lg">
          <span className="material-symbols-outlined text-primary text-2xl">auto_stories</span>
        </div>
        <h2 className="text-white text-xl font-extrabold leading-tight tracking-[-0.015em]">LearnBloom</h2>
      </div>
      <button className="flex min-w-[84px] cursor-pointer items-center justify-center rounded-xl h-10 px-5 bg-primary/10 text-primary text-sm font-bold hover:bg-primary/20 transition-colors">
        <span className="truncate">Help Center</span>
      </button>
    </header>
  );
}
