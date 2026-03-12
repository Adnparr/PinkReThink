import React from 'react';

export default function VisualSection() {
  return (
    <div className="hidden md:flex flex-col justify-between w-1/2 p-12 bg-white/5 border-r border-white/10">
      <div className="space-y-6">
        <div className="w-16 h-1 w-primary bg-primary rounded-full"></div>
        <h1 className="text-4xl font-black leading-tight tracking-tight text-white">
          Sparking curiosity in every <span className="text-primary underline decoration-primary/30">learner</span>.
        </h1>
        <p className="text-lg text-slate-300">Join a supportive community of thousands of women and children growing together through education.</p>
      </div>
      <div className="relative rounded-xl overflow-hidden aspect-video bg-white shadow-sm border border-primary/10">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
        <img className="w-full h-full object-cover" data-alt="Happy child and woman learning together with books" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvgpEtfWOqqnb32SfwKQy2nVeW70V87Qum5_WlqdktbDZG26qjydMxjPqk6fXVK1rUmyQnEPGcAuWuk4BtC6-JaKQy5NH388gBLjBjkcdLnEND3ysTmtwRJr9e7J8DGEloIgJYKW-EOvq8vWVMy58cU0rmCe2olRGChWnFaGB_G82QHEJ16leahP4Pra_uLzh-TwXAE96Z7xoq5Npwe0VH9GtsJ2EPFePKWeE9e32p3D2tDalHkZAMKk2pYHeWZw2SUYN1PvX8ev_h" alt="Happy child learning" />
      </div>
    </div>
  );
}
