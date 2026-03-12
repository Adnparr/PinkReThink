import React from 'react';
import Link from 'next/link';

export default function MapView() {
  return (
    <section className="flex-1 relative min-h-[800px] overflow-hidden bg-gradient-to-b from-slate-950 via-purple-950 to-indigo-950">
      {/* Background Gradients and Patterns */}
      <div className="absolute inset-0 opacity-10 dark:opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#f20d80 0.8px, transparent 0.8px)', backgroundSize: '32px 32px' }}>
        <div className="absolute inset-0 opacity-40 pointer-events-none" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCNvtfBHCb7WdZrMYu03I6LFiJhNCtBTE6j9keBWStBARR3WeWslKy9HRfsdRAYgMZy3xqd3SrsDoAtVmHUnYDmznqCmBkRRyMtBqOsdO8Puf57EJyEgSXyKI8g37VaNBPPXSWY0ydh-cc3UwIOQjK5YIFTb5r5O8M5RV-G7vRi33iv9LXkUmpSwpdvhZIG3kw2u4Fx1nOPJYGng_Od8F4Cw2JyiBDYLYnGcKPyzfqQ39ycZh-ywJLABQBPTjkLIyev-Gpml4Uuw4fK')" }}></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.4)_0%,transparent_100%)]"></div>
      </div>

      <div className="relative w-full h-full md:p-12 overflow-y-auto">
        {/* Map Header */}
        <div className="flex justify-between items-start mb-12">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">The Scholar's Trail</h2>
            <p className="text-slate-500 dark:text-slate-400 mt-1">Journey through the lands of Knowledge</p>
          </div>
          <div className="flex gap-3">
            <button className="bg-white dark:bg-slate-800 p-2 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
              <span className="material-symbols-outlined">zoom_in</span>
            </button>
            <button className="bg-white dark:bg-slate-800 p-2 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
              <span className="material-symbols-outlined">zoom_out</span>
            </button>
          </div>
        </div>

        {/* Map Nodes Container */}
        <div className="relative max-w-2xl mx-auto flex flex-col items-center py-10 gap-12">
          {/* SVG Trail line connecting nodes */}
          <svg className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none stroke-primary/20 fill-none" preserveAspectRatio="none" viewBox="0 0 400 1200">
            <path className="stroke-primary/40 fill-none drop-shadow-[0_0_15px_rgba(242,13,128,0.5)]" d="M200,50 Q250,150 150,250 T200,450 T250,650 T150,850 T200,1100" strokeDasharray="12 12" strokeLinecap="round" strokeWidth="10"></path>
          </svg>

          {/* Node 1: Completed */}
          <div className="relative group transition-all hover:scale-105 cursor-pointer">
            <div className="relative w-32 h-32 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full blur-xl opacity-30 animate-pulse"></div>
              <div className="z-10 bg-white dark:bg-slate-800 rounded-3xl p-4 shadow-2xl border-4 border-green-400 flex flex-col items-center">
                <span className="material-symbols-outlined text-green-500 text-5xl">menu_book</span>
              </div>
            </div>
            <div className="absolute left-32 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-slate-800/95 backdrop-blur px-5 py-3 rounded-2xl shadow-xl border-2 border-green-200 dark:border-green-900 min-w-[220px]">
              <div className="flex items-center gap-2 mb-1">
                <span className="material-symbols-outlined text-green-500 text-sm">check_circle</span>
                <p className="text-[10px] font-black text-green-600 uppercase tracking-widest">Completed</p>
              </div>
              <h4 className="font-bold text-slate-800 dark:text-white">Floating Book Island</h4>
              <p className="text-[11px] text-slate-500">Lesson 1: The First Chapter</p>
            </div>
          </div>

          {/* Node 2: Active */}
          <Link href="/learn" className="relative group ml-48 transition-all scale-110 cursor-pointer block">
            <div className="relative w-40 h-40 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-orange-400/40 rounded-full blur-2xl animate-pulse"></div>
              <div className="z-10 bg-gradient-to-br from-white to-rose-50 dark:from-slate-800 dark:to-slate-700 rounded-[2.5rem] p-6 shadow-2xl border-4 border-primary ring-8 ring-primary/20">
                <span className="material-symbols-outlined text-primary text-6xl">castle</span>
              </div>
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 flex flex-col items-center z-20">
                <div className="size-14 rounded-2xl border-4 border-white dark:border-slate-800 bg-primary shadow-2xl overflow-hidden p-1 rotate-3">
                  <img className="w-full h-full rounded-xl object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAh71wtANmPerVr5n1Z1iR1SVnr6mpOwBo4qdz8Ct7apFCfBOcj8KphfTxo72IEbmsoL1lHGmjbl5ifY5lgehYlod6TEmamBXNt4VfJb6UV5hKJd1F68eBGGktra5LDZXw7QRp6jxb8MjP-hJKAFlLbOle6zpZPH9fbHj82QgqgJQS_Tue6QQ4K75MK-_eNPnUaYMV1BiJA-TySV3g0bIvD0640Ym8kZ0GQ6EtupFZFhClb0dZVw_nCkqyOKeixXdP94_gYMBe2dITb" alt="User Avatar" />
                </div>
                <div className="w-4 h-4 bg-primary rotate-45 -mt-2 shadow-lg"></div>
              </div>
            </div>
            <div className="absolute left-40 top-1/2 -translate-y-1/2 bg-primary/20 backdrop-blur-xl px-6 py-4 rounded-3xl shadow-[0_20px_50px_rgba(242,13,128,0.4)] border border-white/20 min-w-[240px] group-hover:bg-primary/30 transition-colors">
              <p className="text-[10px] font-black text-rose-100 uppercase tracking-[0.2em] mb-1">Adventurer Position</p>
              <h4 className="font-black text-white text-lg">Cloud Grammar Heights</h4>
              <p className="text-xs text-rose-100/80">Lesson 2: Sentence Spells</p>
            </div>
          </Link>

          {/* Node 3: Locked */}
          <div className="relative group -ml-40 opacity-70">
            <div className="relative w-32 h-32 flex items-center justify-center grayscale contrast-75">
              <div className="z-10 bg-slate-200 dark:bg-slate-700 rounded-3xl p-5 shadow-xl border-4 border-slate-300 dark:border-slate-600">
                <span className="material-symbols-outlined text-slate-500 text-5xl">forest</span>
              </div>
              <div className="absolute -top-4 -right-4 bg-slate-500 text-white rounded-2xl p-2 border-4 border-white dark:border-slate-800 shadow-lg z-20">
                <span className="material-symbols-outlined text-sm font-bold">lock</span>
              </div>
            </div>
            <div className="absolute left-32 top-1/2 -translate-y-1/2 bg-white/5 dark:bg-slate-900/30 backdrop-blur-xl px-5 py-3 rounded-2xl border border-white/10 min-w-[200px]">
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Locked Region</p>
              <h4 className="font-bold text-slate-400">The Quill Forest</h4>
              <p className="text-[11px] text-slate-500">Requires Lvl 15</p>
            </div>
          </div>

          {/* Node 4: Final Peak */}
          <div className="relative group">
            <div className="w-32 h-32 bg-primary/5 rounded-full shadow-inner flex items-center justify-center border-4 border-dashed border-primary/20 z-10 custom-glow-circle shadow-[0_0_20px_rgba(242,13,128,0.2)]">
              <span className="material-symbols-outlined text-primary/30 text-6xl animate-pulse">workspace_premium</span>
            </div>
            <div className="absolute top-36 left-1/2 -translate-x-1/2 text-center whitespace-nowrap">
              <h4 className="font-black text-xl text-primary drop-shadow-[0_0_8px_rgba(242,13,128,0.6)] uppercase tracking-tighter">Graduation Peak</h4>
              <p className="text-[10px] text-slate-400 uppercase tracking-[0.3em] font-black">The Final Trial</p>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-40 left-20 pointer-events-none animate-bounce" style={{ animationDuration: '3s' }}>
          <span className="material-symbols-outlined text-white/40 text-4xl">cloud</span>
        </div>
        <div className="absolute top-[60%] right-20 pointer-events-none animate-bounce shadow-primary" style={{ animationDuration: '4s' }}>
          <span className="material-symbols-outlined text-yellow-400/50 text-3xl">auto_awesome</span>
        </div>
        <div className="absolute bottom-[20%] left-[10%] pointer-events-none opacity-20">
          <img className="size-20 grayscale blur-[2px]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAh71wtANmPerVr5n1Z1iR1SVnr6mpOwBo4qdz8Ct7apFCfBOcj8KphfTxo72IEbmsoL1lHGmjbl5ifY5lgehYlod6TEmamBXNt4VfJb6UV5hKJd1F68eBGGktra5LDZXw7QRp6jxb8MjP-hJKAFlLbOle6zpZPH9fbHj82QgqgJQS_Tue6QQ4K75MK-_eNPnUaYMV1BiJA-TySV3g0bIvD0640Ym8kZ0GQ6EtupFZFhClb0dZVw_nCkqyOKeixXdP94_gYMBe2dITb" alt="Decorative Blur" />
        </div>
      </div>

      {/* Floating Action Buttons / Tips */}
      <div className="absolute bottom-10 right-10 flex flex-col gap-4 items-end">
        <div className="bg-white/10 dark:bg-slate-900/40 backdrop-blur-xl p-4 rounded-2xl shadow-2xl border border-white/10 max-w-xs flex gap-4 items-center">
          <div className="bg-primary/20 p-2 rounded-lg text-primary">
            <span className="material-symbols-outlined">lightbulb</span>
          </div>
          <p className="text-sm font-medium text-slate-200">Tip: Completing 'Cloud Grammar' unlocks the Feathered Pen artifact!</p>
        </div>
        <button className="group flex items-center gap-3 bg-primary text-white pl-6 pr-8 py-4 rounded-2xl shadow-2xl shadow-primary/30 hover:bg-primary/90 transition-all hover:scale-105 bg-gradient-to-r from-primary to-rose-400 border-b-4 border-primary/50">
          <span className="material-symbols-outlined text-2xl group-hover:translate-x-2 transition-transform">auto_fix_high</span>
          <span className="text-xl font-black tracking-tight">Continue Adventure</span>
        </button>
      </div>
    </section>
  );
}
