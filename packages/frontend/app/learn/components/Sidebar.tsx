import React from 'react';

export default function Sidebar() {
  return (
    <aside className="w-full lg:w-96 border-l border-white/10 glass-panel flex flex-col h-screen lg:sticky lg:top-0">
      <div className="p-6 border-b border-white/10">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">Course Content</h2>
          <span className="text-xs font-bold text-primary">45% Completed</span>
        </div>
        <div className="h-2 w-full rounded-full bg-primary/10">
          <div className="h-full w-[45%] rounded-full bg-primary"></div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {/* Module 1 */}
        <div className="px-6 py-4 dark:bg-slate-800/30">
          <p className="text-xs font-black uppercase tracking-widest text-slate-400">Module 1: Introduction</p>
        </div>
        <div className="divide-y divide-primary/5">
          <div className="flex items-center gap-4 p-5 hover:bg-primary/5 transition-colors cursor-pointer hover:bg-white/5">
            <input defaultChecked className="h-5 w-5 rounded border-2 border-primary text-primary focus:ring-primary focus:ring-offset-0" type="checkbox" />
            <div className="flex-1 min-w-0 hover:bg-white/5">
              <p className="text-sm font-semibold text-slate-900 dark:text-white truncate">1. Welcome to the Course</p>
              <p className="text-xs text-slate-500">03:45</p>
            </div>
            <span className="material-symbols-outlined text-primary">play_circle</span>
          </div>
          <div className="flex items-center gap-4 p-5 hover:bg-primary/5 transition-colors cursor-pointer hover:bg-white/5">
            <input defaultChecked className="h-5 w-5 rounded border-2 border-primary text-primary focus:ring-primary focus:ring-offset-0" type="checkbox" />
            <div className="flex-1 min-w-0 hover:bg-white/5">
              <p className="text-sm font-semibold text-slate-900 dark:text-white truncate">2. Setting Up Your Tools</p>
              <p className="text-xs text-slate-500">08:20</p>
            </div>
            <span className="material-symbols-outlined text-primary">play_circle</span>
          </div>
        </div>

        {/* Module 2 */}
        <div className="px-6 py-4 dark:bg-slate-800/30">
          <p className="text-xs font-black uppercase tracking-widest text-slate-400">Module 2: Core Concepts</p>
        </div>
        <div className="divide-y divide-primary/5">
          <div className="flex items-center gap-4 p-5 active-lesson cursor-pointer hover:bg-white/5">
            <input className="h-5 w-5 rounded border-2 border-primary text-primary focus:ring-primary focus:ring-offset-0" type="checkbox" />
            <div className="flex-1 min-w-0 hover:bg-white/5">
              <p className="text-sm font-bold text-primary truncate">3. Understanding Visual Hierarchy</p>
              <p className="text-xs text-primary/70">12:45 • Now Playing</p>
            </div>
            <span className="material-symbols-outlined text-primary shadow-[0_0_10px_rgba(242,13,128,0.5)]">pause_circle</span>
          </div>
          <div className="flex items-center gap-4 p-5 hover:bg-primary/5 transition-colors cursor-pointer hover:bg-white/5">
            <input className="h-5 w-5 rounded border-2 border-slate-300 dark:border-slate-600 text-primary focus:ring-primary focus:ring-offset-0" type="checkbox" />
            <div className="flex-1 min-w-0 hover:bg-white/5">
              <p className="text-sm font-semibold text-slate-900 dark:text-white truncate">4. Color Theory Essentials</p>
              <p className="text-xs text-slate-500">15:10</p>
            </div>
            <span className="material-symbols-outlined text-secondary/60">lock</span>
          </div>
          <div className="flex items-center gap-4 p-5 hover:bg-primary/5 transition-colors cursor-pointer hover:bg-white/5">
            <input className="h-5 w-5 rounded border-2 border-slate-300 dark:border-slate-600 text-primary focus:ring-primary focus:ring-offset-0" type="checkbox" />
            <div className="flex-1 min-w-0 hover:bg-white/5">
              <p className="text-sm font-semibold text-slate-900 dark:text-white truncate">5. Typography Selection</p>
              <p className="text-xs text-slate-500">10:30</p>
            </div>
            <span className="material-symbols-outlined text-secondary/60">lock</span>
          </div>
        </div>

        {/* Module 3 */}
        <div className="px-6 py-4 dark:bg-slate-800/30">
          <p className="text-xs font-black uppercase tracking-widest text-slate-400">Module 3: Advanced Layouts</p>
        </div>
        <div className="divide-y divide-primary/5">
          <div className="flex items-center gap-4 p-5 hover:bg-primary/5 transition-colors cursor-pointer opacity-60 hover:bg-white/5">
            <input className="h-5 w-5 rounded border-2 border-slate-200 text-primary focus:ring-primary focus:ring-offset-0" disabled type="checkbox" />
            <div className="flex-1 min-w-0 hover:bg-white/5">
              <p className="text-sm font-semibold text-slate-900 dark:text-white truncate">6. Grid Systems</p>
              <p className="text-xs text-slate-500">18:20</p>
            </div>
            <span className="material-symbols-outlined text-secondary/60">lock</span>
          </div>
        </div>
      </div>

      <div className="border-t border-primary/10 p-4">
        <button className="w-full rounded-xl bg-primary py-4 text-sm font-bold text-white shadow-[0_0_15px_rgba(242,13,128,0.4)] transition-all hover:scale-[1.02] active:scale-95">Next Lesson</button>
      </div>
    </aside>
  );
}
