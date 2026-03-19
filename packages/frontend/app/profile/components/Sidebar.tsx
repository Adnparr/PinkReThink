import React from 'react';

export default function Sidebar() {
  return (
    <div className="lg:col-span-4 flex flex-col gap-5">
      {/* Sidebar Profile Summary */}
      <div className="bg-white/5 p-6 rounded-xl border border-white/10 flex flex-col items-center text-center backdrop-blur-md shadow-2xl shadow-black/50">
        <div className="relative">
          <div className="bg-primary/10 p-1 rounded-full border-2 border-primary mb-4">
            <div 
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-32 shadow-lg" 
              title="Professional portrait of Sarah Jenkins smiling" 
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDB-gwndlu-P00IFEdld1R_TaC1o1tsiSLYOgVIipil2P_b4G_b4avX42eYC6gJtmeHY6R4vmJI_-8tet-9S-cDol9SEw_mrlmfUmAhTVlN_D7iVfZuDrfuuPFSRxH1B19aHyNnnDwjphprUOnj4cCor7IHeCnoYRymDJ8UQNZnvlDxKL1-7ZoCeH62v553KUjxz0vCYH0gPwEhmkxPqWElQ7OA_MKzBzSns_3UREx9xFpGnZT9vQbTnboiDTBKNjYAM8t694yfiZ4Q")' }}>
            </div>
          </div>
          <span className="absolute bottom-6 right-2 bg-green-500 border-4 border-white dark:border-slate-900 rounded-full size-5"></span>
        </div>
        <h1 className="text-2xl font-bold text-white">Sarah Jenkins</h1>
        <p className="text-primary font-medium mt-1">Học viên Cao cấp • Cấp 12</p>
        <p className="text-slate-500 text-sm mt-2">Thành viên từ Tháng 1 năm 2023</p>
        
        <div className="grid grid-cols-2 gap-4 w-full mt-8">
          <div className="bg-white/5 p-4 rounded-lg border border-white/10">
            <p className="text-2xl font-bold text-primary">2,450</p>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Điểm</p>
          </div>
          <div className="bg-white/5 p-4 rounded-lg border border-white/10">
            <p className="text-2xl font-bold text-primary">14</p>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Khóa học</p>
          </div>
        </div>
        
        <button className="w-full mt-6 py-3 bg-primary text-white font-bold rounded-lg hover:brightness-110 transition-all shadow-lg shadow-primary/20">
          Chỉnh sửa Hồ sơ
        </button>
      </div>

      {/* Enrolled Courses Summary */}
      <div className="bg-white/5 p-6 rounded-xl border border-white/10 flex flex-col items-center text-center backdrop-blur-md shadow-2xl shadow-black/50">
        <div className="flex items-center justify-between mb-4 w-full">
          <h3 className="font-bold text-lg text-white">Khoá học Đang học</h3>
          <a className="text-secondary text-sm font-semibold hover:brightness-110" href="#">Xem tất cả</a>
        </div>
        
        <div className="space-y-4 w-full">
          <div className="bg-white/5 p-4 rounded-lg border border-white/10 flex gap-4">
            <div className="size-10 rounded bg-primary/20 flex items-center justify-center text-primary shrink-0">
              <span className="material-symbols-outlined text-xl">palette</span>
            </div>
            <div className="flex-1 text-left">
              <p className="text-sm font-bold truncate">UI Design Fundamentals</p>
              <div className="w-full bg-white/10 h-1.5 rounded-full mt-1 overflow-hidden">
                <div className="bg-primary h-full w-[75%] rounded-full"></div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/5 p-4 rounded-lg border border-white/10 flex gap-4">
            <div className="size-10 rounded bg-secondary/20 flex items-center justify-center text-secondary shrink-0">
              <span className="material-symbols-outlined text-xl">code</span>
            </div>
            <div className="flex-1 text-left">
              <p className="text-sm font-bold truncate">Intro to React.js</p>
              <div className="w-full bg-white/10 h-1.5 rounded-full mt-1 overflow-hidden">
                <div className="bg-primary h-full w-[40%] rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
