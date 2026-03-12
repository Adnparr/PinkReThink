export default function WhyChooseUsSection() {
  return (
    <section className="px-6 lg:px-20 py-24 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-4 animate-fade-in-up ">
          <h2 className="text-4xl font-black tracking-tight text-white">Why Families Love PinkReThink</h2>
          <p className="text-slate-600 dark:text-slate-400">We provide a nurturing environment designed specifically for the unique needs of women and young learners.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/10 hover:border-primary/50 hover:-translate-y-2 transition-all group animate-fade-in-up  [animation-delay:200ms]">
            <div className="size-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-3xl">shield_with_heart</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Safe &amp; Secure</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Moderated communities and 100% child-safe content verified by educators.</p>
          </div>
          <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/10 hover:border-primary/50 hover:-translate-y-2 transition-all group animate-fade-in-up  [animation-delay:400ms]">
            <div className="size-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-3xl">sentiment_very_satisfied</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Fun &amp; Engaging</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Gamified lessons, interactive quizzes, and rewards that keep curiosity alive.</p>
          </div>
          <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/10 hover:border-primary/50 hover:-translate-y-2 transition-all group animate-fade-in-up  [animation-delay:600ms]">
            <div className="size-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-3xl">school</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Expert Led</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Courses designed and taught by world-class female educators and specialists.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
