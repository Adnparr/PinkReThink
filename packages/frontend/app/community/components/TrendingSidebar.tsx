export default function TrendingSidebar() {
  return (
    <aside className="hidden lg:flex lg:col-span-3 flex-col gap-6">
      <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10 shadow-2xl">
        <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 mb-4">Trending Topics</h3>
        <div className="flex flex-col gap-4">
          <a className="group" href="#">
            <p className="text-xs font-bold text-primary mb-1">#CareerAdvice</p>
            <p className="text-sm font-bold text-white/90 group-hover:text-primary transition-colors">Remote work scams to avoid</p>
            <p className="text-[10px] text-slate-500 uppercase mt-1">1.2k posts today</p>
          </a>
          <hr className="border-white/5"/>
          <a className="group" href="#">
            <p className="text-xs font-bold text-primary mb-1">#MentalHealth</p>
            <p className="text-sm font-bold text-white/90 group-hover:text-primary transition-colors">Micro-meditation for moms</p>
            <p className="text-[10px] text-slate-500 uppercase mt-1">842 posts today</p>
          </a>
          <hr className="border-white/5"/>
          <a className="group" href="#">
            <p className="text-xs font-bold text-primary mb-1">#Coding</p>
            <p className="text-sm font-bold text-white/90 group-hover:text-primary transition-colors">Python vs JavaScript for beginners</p>
            <p className="text-[10px] text-slate-500 uppercase mt-1">531 posts today</p>
          </a>
        </div>
      </div>
      <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10 shadow-2xl">
        <h3 className="font-bold text-lg mb-2 text-white">Weekly Challenge</h3>
        <p className="text-sm opacity-90 mb-4 text-white/80">Post one thing you&apos;re grateful for today and tag 3 friends to do the same!</p>
        <button className="w-full bg-white text-primary py-2 rounded-lg font-bold text-sm">Join Challenge</button>
      </div>
      <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10 shadow-2xl">
        <a className="block text-[10px] text-slate-400 hover:text-primary uppercase font-bold tracking-widest mb-1" href="#">About</a>
        <a className="block text-[10px] text-slate-400 hover:text-primary uppercase font-bold tracking-widest mb-1" href="#">Privacy</a>
        <a className="block text-[10px] text-slate-400 hover:text-primary uppercase font-bold tracking-widest mb-1" href="#">Guidelines</a>
        <a className="block text-[10px] text-slate-400 hover:text-primary uppercase font-bold tracking-widest mb-3" href="#">Help</a>
        <p className="block text-[10px] text-slate-400 uppercase font-bold tracking-widest w-full">© 2024 PinkReThink</p>
      </div>
    </aside>
  );
}
