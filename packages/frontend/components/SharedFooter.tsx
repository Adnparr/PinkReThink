import Link from "next/link";

export default function SharedFooter() {
  return (
    <footer className="px-6 lg:px-20 py-12 border-t border-white/5 bg-background-dark/40 relative z-10 w-full mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1 space-y-6">
          <Link href="/landingpage" className="flex items-center gap-3">
            <div className="size-10 rounded-xl bg-primary flex items-center justify-center text-white shadow-[0_0_15px_rgba(242,13,128,0.4)]">
              <span className="material-symbols-outlined">auto_stories</span>
            </div>
            <span className="text-2xl font-black text-white hover:text-primary transition-colors">PinkReThink</span>
          </Link>
          <p className="text-slate-400 max-w-sm">Trao quyền cho phụ nữ và trẻ em thông qua nền giáo dục dễ tiếp cận, an toàn và hấp dẫn, gắn liền suốt đời.</p>
          <div className="flex gap-4">
            <a className="text-primary/60 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">public</span></a>
            <a className="text-primary/60 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">alternate_email</span></a>
            <a className="text-primary/60 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">share</span></a>
          </div>
        </div>
        <div>
          <h5 className="font-bold mb-6 text-white">Khám phá</h5>
          <ul className="space-y-4 text-sm text-slate-500">
            <li><Link className="hover:text-primary transition-colors" href="/roadmap">Tất cả khoá học</Link></li>
            <li><Link className="hover:text-primary transition-colors" href="/community">Cộng đồng</Link></li>
            <li><a className="hover:text-primary transition-colors" href="#">Tài nguyên miễn phí</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold mb-6 text-white">Công ty</h5>
          <ul className="space-y-4 text-sm text-slate-500">
            <li><a className="hover:text-primary transition-colors" href="#">Về chúng tôi</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Tuyển dụng</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Tác động</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Liên hệ</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold mb-6 text-white">Hỗ trợ</h5>
          <ul className="space-y-4 text-sm text-slate-500">
            <li><a className="hover:text-primary transition-colors" href="#">Trung tâm trợ giúp</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Trung tâm an toàn</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Điều khoản sử dụng</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Chính sách bảo mật</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-slate-400">© 2026 PinkReThink Education. Đã đăng ký bản quyền.</p>
        <div className="flex items-center gap-6 text-sm text-slate-400">
          <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">language</span> Tiếng Việt</span>
          <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">lock</span> Nền tảng an toàn</span>
        </div>
      </div>
    </footer>
  );
}
