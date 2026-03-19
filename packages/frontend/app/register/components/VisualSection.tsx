import React from 'react';

export default function VisualSection() {
  return (
    <div className="hidden lg:flex flex-col justify-center p-10 bg-gradient-to-tr from-primary/20 via-primary/5 to-transparent relative overflow-hidden border-r border-white/10">
      <div className="relative z-10">
        <h1 className="font-black text-white leading-tight">Bắt đầu hành trình học tập của bạn ngay hôm nay!</h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">Tham gia cộng đồng hơn 50.000 học viên đang toả sáng mỗi ngày thông qua các khóa học do chuyên gia dẫn dắt.</p>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">auto_awesome</span>
            </div>
            <p className="font-medium">Lộ trình học tập cá nhân hóa</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">groups</span>
            </div>
            <p className="font-medium">Cộng đồng học viên toàn cầu</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">verified</span>
            </div>
            <p className="font-medium">Giảng viên chuyên gia được chứng nhận</p>
          </div>
        </div>
      </div>
      
      {/* Decorative Gradients */}
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
    </div>
  );
}
