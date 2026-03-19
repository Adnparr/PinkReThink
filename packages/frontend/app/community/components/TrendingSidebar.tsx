export default function TrendingSidebar() {
  return (
    <aside className="hidden lg:flex lg:col-span-3 flex-col gap-6">
      <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10 shadow-2xl">
        <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 mb-4">Chủ đề Thịnh hành</h3>
        <div className="flex flex-col gap-4">
          <a className="group" href="#">
            <p className="text-xs font-bold text-primary mb-1">#CareerAdvice</p>
            <p className="text-sm font-bold text-white/90 group-hover:text-primary transition-colors">Những trò lừa đảo làm việc từ xa cần tránh</p>
            <p className="text-[10px] text-slate-500 uppercase mt-1">1.2k bài viết hôm nay</p>
          </a>
          <hr className="border-white/5"/>
          <a className="group" href="#">
            <p className="text-xs font-bold text-primary mb-1">#MentalHealth</p>
            <p className="text-sm font-bold text-white/90 group-hover:text-primary transition-colors">Thiền ngắn cho các mẹ</p>
            <p className="text-[10px] text-slate-500 uppercase mt-1">842 bài viết hôm nay</p>
          </a>
          <hr className="border-white/5"/>
          <a className="group" href="#">
            <p className="text-xs font-bold text-primary mb-1">#Coding</p>
            <p className="text-sm font-bold text-white/90 group-hover:text-primary transition-colors">Python và JavaScript cho người mới bắt đầu</p>
            <p className="text-[10px] text-slate-500 uppercase mt-1">531 bài viết hôm nay</p>
          </a>
        </div>
      </div>
      <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10 shadow-2xl">
        <h3 className="font-bold text-lg mb-2 text-white">Thử thách Hàng tuần</h3>
        <p className="text-sm opacity-90 mb-4 text-white/80">Đăng một điều bạn biết ơn hôm nay và gắn thẻ 3 người bạn để cùng tham gia!</p>
        <button className="w-full bg-white text-primary py-2 rounded-lg font-bold text-sm">Tham gia Thử thách</button>
      </div>
      <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10 shadow-2xl">
        <a className="block text-[10px] text-slate-400 hover:text-primary uppercase font-bold tracking-widest mb-1" href="#">Về chúng tôi</a>
        <a className="block text-[10px] text-slate-400 hover:text-primary uppercase font-bold tracking-widest mb-1" href="#">Bảo mật</a>
        <a className="block text-[10px] text-slate-400 hover:text-primary uppercase font-bold tracking-widest mb-1" href="#">Nguyên tắc</a>
        <a className="block text-[10px] text-slate-400 hover:text-primary uppercase font-bold tracking-widest mb-3" href="#">Trợ giúp</a>
        <p className="block text-[10px] text-slate-400 uppercase font-bold tracking-widest w-full">© 2024 PinkReThink</p>
      </div>
    </aside>
  );
}
