import React from 'react';

export default function VisualSection() {
  return (
    <div className="hidden lg:flex flex-col justify-center p-10 bg-gradient-to-tr from-primary/20 via-primary/5 to-transparent relative overflow-hidden border-r border-white/10">
      <div className="relative z-10">
        <h1 className="font-black text-white leading-tight">Start your learning journey today!</h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">Join a community of over 50,000 learners blooming every day through expert-led courses.</p>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">auto_awesome</span>
            </div>
            <p className="font-medium">Personalized learning paths</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">groups</span>
            </div>
            <p className="font-medium">Global student community</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">verified</span>
            </div>
            <p className="font-medium">Certified expert instructors</p>
          </div>
        </div>
      </div>
      
      {/* Decorative Gradients */}
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
    </div>
  );
}
