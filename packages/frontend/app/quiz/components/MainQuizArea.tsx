import React from 'react';

export default function MainQuizArea() {
  return (
    <main className="flex-grow w-full max-w-3xl mx-auto px-6 flex flex-col py-4 z-10 relative">
      {/* Question Card */}
      <div className="relative mb-8 transform -rotate-1">
        <div className="absolute inset-0 bg-orange-500/5 rounded-[2rem] transform rotate-2 border border-orange-500/20"></div>
        <div className="relative bg-slate-900/60 backdrop-blur-md rounded-[2rem] p-8 border-2 border-orange-500/30 shadow-[0_0_30px_rgba(249,115,22,0.15)] text-center">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-400 text-white px-6 py-1 rounded-full font-black text-sm uppercase shadow-md">
            Câu đố Logic
          </div>
          <h2 className="text-2xl md:text-3xl font-black leading-tight pt-2 dark:text-white">Nếu một chiếc đồng hồ gõ mười ba tiếng, thì đó là lúc mấy giờ?</h2>
          <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
            <span className="material-icons text-white">lightbulb</span>
          </div>
        </div>
      </div>

      {/* Options Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Option 1 */}
        <button className="group relative p-5 rounded-2xl border border-primary/50 bg-primary/20 backdrop-blur-md hover:bg-primary/30 transition-all transform hover:-translate-y-1 shadow-[0_0_20px_rgba(242,13,128,0.2)]">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg">
              <span className="material-icons">alarm_off</span>
            </div>
            <span className="font-black text-xl text-primary">Đem đi sửa</span>
            <span className="ml-auto material-icons text-primary">check_circle</span>
          </div>
        </button>

        {/* Option 2 */}
        <button className="group relative p-5 rounded-2xl border border-blue-500/50 bg-blue-500/10 backdrop-blur-md hover:bg-blue-500/20 transition-all transform hover:-translate-y-1 shadow-[0_0_20px_rgba(59,130,246,0.1)] text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-400 rounded-xl flex items-center justify-center text-white shadow-lg">
              <span className="material-icons">dark_mode</span>
            </div>
            <span className="font-black text-xl text-blue-600">Nửa đêm</span>
          </div>
        </button>

        {/* Option 3 */}
        <button className="group relative p-5 rounded-2xl border border-green-500/50 bg-green-500/10 backdrop-blur-md hover:bg-green-500/20 transition-all transform hover:-translate-y-1 shadow-[0_0_20px_rgba(34,197,94,0.1)] text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-green-400 rounded-xl flex items-center justify-center text-white shadow-lg">
              <span className="material-icons">sunny</span>
            </div>
            <span className="font-black text-xl text-green-600">Giờ ăn trưa</span>
          </div>
        </button>

        {/* Option 4 */}
        <button className="group relative p-5 rounded-2xl border border-orange-500/50 bg-orange-500/10 backdrop-blur-md hover:bg-orange-500/20 transition-all transform hover:-translate-y-1 shadow-[0_0_20px_rgba(249,115,22,0.1)] text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-orange-400 rounded-xl flex items-center justify-center text-white shadow-lg">
              <span className="material-icons">question_mark</span>
            </div>
            <span className="font-black text-xl text-orange-600">Không thể nào</span>
          </div>
        </button>
      </div>

      {/* Feedback Area */}
      <div className="mt-auto text-center pt-8">
        <div className="flex flex-col items-center gap-4 mb-4">
          <div className="relative">
            <img alt="Mascot" className="w-32 h-32 animate-bounce" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0Pi2ZPfaHRW8wopRphckTE3WnUDxlvqwZdxjB1yIO89ihU5yWEwVTUWSg58h6IaeuCvP0Mkzo0nPtx76LcQ9d7ABF_K4iKg_ZLf5IwJpfqjFmtOeRA_TAAFDl4K2HkxewqRd49-OCOSm24GrxIn4H3g5w7XrBVTw5MMzObIJbIW-qlgzg2olgiAeQARjg94e7FEmNXLcT7tNWddSMy3vDnnAfCU3UW-3wbzpbLzKC6PnEpz8n2Alf_3GKPAlqHO6MB_zC4F93E1tC" />
            <div className="absolute -top-2 -right-2 bg-orange-500 text-white text-[10px] font-black px-2 py-1 rounded-full shadow-lg flex items-center gap-1">
              <span className="material-icons text-[12px]">local_fire_department</span> CHUỖI 3!
            </div>
          </div>
          <div className="bg-slate-900/80 backdrop-blur-lg px-6 py-4 rounded-[1.5rem] shadow-2xl border border-white/10 relative">
            <p className="text-2xl font-black text-primary">TUYỆT VỜI! ✨</p>
            <p className="font-bold dark:text-slate-300">Bạn đã trả lời đúng 3 câu liên tiếp! Cứ thế phát huy nhé!</p>
          </div>
        </div>
      </div>
    </main>
  );
}
