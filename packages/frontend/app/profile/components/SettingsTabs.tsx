import React from 'react';

export default function SettingsTabs() {
  return (
    <div className="border-b border-primary/10">
      <div className="flex gap-8 overflow-x-auto pb-px">
        <a className="pb-4 text-sm font-bold text-primary border-b-2 border-primary whitespace-nowrap" href="#">Cài đặt Tài khoản</a>
        <a className="pb-4 text-sm font-bold text-slate-500 hover:text-primary transition-colors border-b-2 border-transparent whitespace-nowrap" href="#">Tùy chọn Bảo mật</a>
        <a className="pb-4 text-sm font-bold text-slate-500 hover:text-primary transition-colors border-b-2 border-transparent whitespace-nowrap" href="#">Tài khoản liên kết</a>
        <a className="pb-4 text-sm font-bold text-slate-500 hover:text-primary transition-colors border-b-2 border-transparent whitespace-nowrap" href="#">Chứng chỉ</a>
      </div>
    </div>
  );
}
