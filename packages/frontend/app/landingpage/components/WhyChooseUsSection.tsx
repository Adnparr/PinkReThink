export default function WhyChooseUsSection() {
  return (
    <section className="px-6 lg:px-20 py-24 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-4 animate-fade-in-up ">
          <h2 className="text-4xl font-black tracking-tight text-white">Tại Sao Gia Đình Thích PinkReThink</h2>
          <p className="text-slate-600 dark:text-slate-400">Chúng tôi cung cấp một môi trường nuôi dưỡng được thiết kế dành riêng cho nhu cầu đặc biệt của phụ nữ và học viên trẻ tuổi.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/10 hover:border-primary/50 hover:-translate-y-2 transition-all group animate-fade-in-up  [animation-delay:200ms]">
            <div className="size-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-3xl">shield_with_heart</span>
            </div>
            <h3 className="text-xl font-bold mb-3">An toàn &amp; Bảo mật</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Cộng đồng được kiểm duyệt và nội dung 100% an toàn cho trẻ em được các nhà giáo dục xác minh.</p>
          </div>
          <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/10 hover:border-primary/50 hover:-translate-y-2 transition-all group animate-fade-in-up  [animation-delay:400ms]">
            <div className="size-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-3xl">sentiment_very_satisfied</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Vui nhộn &amp; Hấp dẫn</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Bài học được game hoá, câu hỏi tương tác và phần thưởng giữ cho sự tò mò luôn rực sáng.</p>
          </div>
          <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/10 hover:border-primary/50 hover:-translate-y-2 transition-all group animate-fade-in-up  [animation-delay:600ms]">
            <div className="size-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-3xl">school</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Chuyên gia dẫn dắt</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Các khóa học được thiết kế và giảng dạy bởi các nhà giáo dục và chuyên gia nữ đẳng cấp thế giới.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
