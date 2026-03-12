import React from 'react';

export default function LoginForm() {
  return (
    <div className="flex flex-col flex-1 md:p-12 justify-center p-6 md:p-10">
      <div className="mb-4">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">Welcome back</h2>
        <p className="text-lg text-slate-300">Please enter your details to access your dashboard.</p>
      </div>
      
      <form className="space-y-4">
        {/* Email Field */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-slate-300">Email Address</label>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl">mail</span>
            <input className="w-full pl-12 pr-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-slate-500 focus-neon" placeholder="hello@example.com" type="email" />
          </div>
        </div>

        {/* Password Field */}
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <label className="text-sm font-semibold text-slate-300">Password</label>
            <a className="text-sm font-bold text-primary hover:text-primary/80 transition-colors" href="#">Forgot password?</a>
          </div>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl">lock</span>
            <input className="w-full pl-12 pr-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-slate-500 focus-neon" placeholder="••••••••" type="password" />
            <button className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200" type="button">
              <span className="material-symbols-outlined text-xl">visibility</span>
            </button>
          </div>
        </div>

        {/* Remember Me Checkbox */}
        <div className="flex items-center gap-2">
          <input className="w-5 h-5 rounded text-primary focus:ring-primary/50 border-slate-300 dark:border-slate-600 dark:bg-slate-800 cursor-pointer" id="remember" type="checkbox" />
          <label className="text-sm font-semibold text-slate-300" htmlFor="remember">Keep me logged in</label>
        </div>

        {/* Submit Button */}
        <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2 hover-neon" type="submit">
          <span className="material-symbols-outlined">login</span>
          Log In
        </button>

        {/* Social Login Divider */}
        <div className="relative py-4 flex items-center">
          <div className="flex-grow border-t border-slate-200 dark:border-slate-700"></div>
          <span className="flex-shrink mx-4 text-xs font-bold text-slate-400 uppercase tracking-widest">or continue with</span>
          <div className="flex-grow border-t border-slate-200 dark:border-slate-700"></div>
        </div>

        {/* Social Login Buttons */}
        <div className="grid grid-cols-2 gap-4">
          <button className="flex items-center justify-center gap-2 py-3 border border-white/10 rounded-xl hover:bg-white/10 transition-colors text-white" type="button">
            <img className="w-5 h-5" data-alt="Google logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrC525C15MbQA5RepH75uAEPo2rYrAL00aBvo006d1eQuumZvU1St0RBUtlIU-B6Los_oeSoWF-UQ2vNfN3LRUaLPUVHvYRIFh-j8SfUxEfxjyBLjFGUcqJWH9SfASunhjhA4OHfiag1AaJ9TC00UNwhlMGTuP4CBg7AwtVIqyR2hbtAk8mH96zKxpqF5OjVa_e3SxvmX8P4q2iqFiGTW0Evwwqq8N39RiILVPgLXVEXGKyStp9foLAtUcRhSQzK1b3VYReVXcNLYk" alt="Google" />
            <span className="text-sm font-semibold">Google</span>
          </button>
          <button className="flex items-center justify-center gap-2 py-3 border border-white/10 rounded-xl hover:bg-white/10 transition-colors text-white" type="button">
            <span className="material-symbols-outlined text-blue-600">social_leaderboard</span>
            <span className="text-sm font-semibold">Facebook</span>
          </button>
        </div>

        {/* Register Link */}
        <div className="pt-6 text-center">
          <p className="text-slate-400">
            New to LearnBloom? 
            <a className="text-primary font-bold hover:underline ml-1" href="#">Create an account</a>
          </p>
        </div>
      </form>
    </div>
  );
}
