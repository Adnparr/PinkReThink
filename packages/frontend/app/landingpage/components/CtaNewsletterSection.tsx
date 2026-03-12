export default function CtaNewsletterSection() {
  return (
    <section className="px-6 lg:px-20 mt-24 mb-12">
      <div className="max-w-7xl mx-auto bg-gradient-to-br from-primary via-primary to-purple-800 rounded-[2rem] p-8 lg:p-16 text-center relative overflow-hidden shadow-primary border border-white/10 animate-fade-in-up ">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/5 rounded-full -ml-32 -mb-32"></div>
        <div className="relative z-10 max-w-2xl mx-auto space-y-8 animate-fade-in-up  [animation-delay:300ms]">
          <h2 className="text-4xl font-black tracking-tight text-white">Ready to start your blooming journey?</h2>
          <p className="text-white/80 text-lg">Join our newsletter to get weekly tips, free lesson samples, and early bird discounts on new courses.</p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input className="flex-1 rounded-xl border-none px-6 py-4 focus:ring-4 focus:ring-white/20 text-slate-900" placeholder="Enter your email" type="email" />
            <button className="bg-background-dark text-white px-8 py-4 rounded-xl font-bold hover:bg-black border border-white/10 transition-colors" type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  );
}
