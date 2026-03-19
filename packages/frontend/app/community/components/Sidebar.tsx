export default function Sidebar() {
  return (
    <aside className="hidden lg:flex lg:col-span-3 flex-col gap-6">
      <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10 shadow-2xl">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Điều hướng</h3>
        <nav className="flex flex-col gap-1">
          <a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 text-primary font-bold" href="#">
            <span className="material-symbols-outlined">forum</span> Bảng tin
          </a>
          <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-primary/5 transition-all" href="#">
            <span className="material-symbols-outlined">groups</span> Nhóm của tôi
          </a>
          <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-primary/5 transition-all" href="#">
            <span className="material-symbols-outlined">bookmark</span> Bài viết đã lưu
          </a>
          <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-primary/5 transition-all" href="#">
            <span className="material-symbols-outlined">settings</span> Tuỳ chọn
          </a>
        </nav>
      </div>
      <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10 shadow-2xl">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Sự kiện sắp tới</h3>
        <div className="flex flex-col gap-4">
          <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10 shadow-sm hover:border-primary/30 transition-all group">
            <div className="flex flex-col items-center justify-center bg-primary/10 text-primary rounded-lg p-2 min-w-[50px]">
              <span className="text-sm font-bold">THÁNG 5</span>
              <span className="text-lg font-black leading-none">24</span>
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900 dark:text-slate-100">Hội thảo Lãnh đạo</p>
              <p className="text-xs text-slate-500">Trực tuyến • 2:00 Chiều</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
