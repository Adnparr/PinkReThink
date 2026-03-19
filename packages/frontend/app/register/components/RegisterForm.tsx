import React from 'react';

export default function RegisterForm() {
  return (
    <div className="p-8 md:p-10 bg-gradient-to-bl from-primary/[0.02] to-transparent">
      <div className="mb-8">
        <h2 className="font-black text-white leading-tight">Tạo Tài Khoản</h2>
        <p className="text-slate-500 dark:text-slate-400 mt-2">Điền thông tin của bạn để bắt đầu.</p>
      </div>
      
      <form action="#" className="space-y-4">
        {/* Full Name */}
        <div className="flex flex-col gap-2">
          <label className="text-slate-200 text-sm font-semibold">Họ và Tên</label>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">person</span>
            <input className="w-full pl-12 pr-4 py-3 rounded-xl border border-primary/20 bg-black/40 text-white placeholder-slate-500 focus:ring-2 focus:ring-primary/50 focus:border-primary focus:shadow-[0_0_15px_rgba(242,13,128,0.3)] transition-all outline-none" placeholder="John Doe" required type="text" />
          </div>
        </div>
        
        {/* Email */}
        <div className="flex flex-col gap-2">
          <label className="text-slate-200 text-sm font-semibold">Địa chỉ Email</label>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">mail</span>
            <input className="w-full pl-12 pr-4 py-3 rounded-xl border border-primary/20 bg-black/40 text-white placeholder-slate-500 focus:ring-2 focus:ring-primary/50 focus:border-primary focus:shadow-[0_0_15px_rgba(242,13,128,0.3)] transition-all outline-none" placeholder="name@example.com" required type="email" />
          </div>
        </div>
        
        {/* Password Fields Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col gap-2">
            <label className="text-slate-200 text-sm font-semibold">Mật khẩu</label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">lock</span>
              <input className="w-full pl-12 pr-4 py-3 rounded-xl border border-primary/20 bg-black/40 text-white placeholder-slate-500 focus:ring-2 focus:ring-primary/50 focus:border-primary focus:shadow-[0_0_15px_rgba(242,13,128,0.3)] transition-all outline-none" placeholder="••••••••" required type="password" />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-primary" type="button">
                <span className="material-symbols-outlined text-[20px]">visibility</span>
              </button>
            </div>
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="text-slate-200 text-sm font-semibold">Xác nhận Mật khẩu</label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">lock_reset</span>
              <input className="w-full pl-12 pr-4 py-3 rounded-xl border border-primary/20 bg-black/40 text-white placeholder-slate-500 focus:ring-2 focus:ring-primary/50 focus:border-primary focus:shadow-[0_0_15px_rgba(242,13,128,0.3)] transition-all outline-none" placeholder="••••••••" required type="password" />
            </div>
          </div>
        </div>
        
        {/* Terms of Service */}
        <div className="flex items-start gap-3 py-2">
          <input className="mt-1 h-5 w-5 rounded border-primary/20 text-primary focus:ring-primary cursor-pointer" id="terms" type="checkbox" />
          <label className="text-sm text-slate-600 dark:text-slate-400 cursor-pointer" htmlFor="terms">
            Tôi đồng ý với <a className="text-primary font-semibold hover:underline" href="#">Điều khoản Dịch vụ</a> và <a className="text-primary font-semibold hover:underline" href="#">Chính sách Bảo mật</a>.
          </label>
        </div>
        
        {/* Submit Button */}
        <button className="w-full bg-primary text-white font-bold py-3.5 rounded-xl shadow-lg shadow-primary/30 hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center gap-2 group" type="submit">
          <span>Đăng ký Ngay</span>
          <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
        </button>
        
        {/* Social Registration */}
        <div className="relative flex items-center justify-center py-4">
          <div className="flex-grow border-t border-slate-200 dark:border-slate-700"></div>
          <span className="px-3 text-sm text-slate-400">hoặc đăng ký với</span>
          <div className="flex-grow border-t border-slate-200 dark:border-slate-700"></div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <button className="flex items-center justify-center gap-2 py-3 border border-white/10 rounded-xl bg-white/5 hover:bg-white/10 transition-colors" type="button">
            <img alt="Google" className="w-5 h-5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhqO2Sm5j3sqEJ9exT1aPJmEFpMhjI9uAsPpjkBh3dwYA1jVdU0MYy9eNYt8Pm5yGRkfSLcMDFDVSLuOzlbJDkc49x5jc5JXqOnOtLWEJlT6hBZCxyLaVxgnExJgkf59baZaM16aT6Rhyppv-Y50qm_SE3hNpyQNwZuhsf125iGKuV8F3muj_O55v24ZPYVz_HHfViJQyDHGWnyeBcrGB3zc52XbwvJdEnyWB4um-svCYrLrSV3TqFs5hR46GbiDZuP9XHHOuhGUx9" />
            <span className="text-sm font-semibold">Google</span>
          </button>
          <button className="flex items-center justify-center gap-2 py-3 border border-white/10 rounded-xl bg-white/5 hover:bg-white/10 transition-colors" type="button">
            <img alt="Apple" className="w-5 h-5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMNpuTDMs7-5cDAe0hOyUFgD9g9ElZ1n4U4l9XOeE3b2ueCZh2S-9YVYsqfGsnmZZj-gGrUNzv3xAojPouKsJmgwfGPjNOkux7mCdkd0oxCyBfGneY-3gnaXXmPKRnjiDO_oNUg-pgS4bnBV2mdGd0dxqZ_yk803WUDP11dFtc12WqdW2stYqvoB7CAXO5SacMH4SIq171A8i7aOYHoALz8BTIm0S7BQFvlDFaqKC_aVPKB4mEgDY3Qs6iTkLGL_l_Y2fwFPiAvVcO" />
            <span className="text-sm font-semibold">Apple</span>
          </button>
        </div>
      </form>
    </div>
  );
}
