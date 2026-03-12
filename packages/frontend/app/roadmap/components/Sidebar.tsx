import React from "react";

export default function Sidebar() {
  return (
    <aside className="w-full lg:w-80 flex flex-col gap-6 border-r border-white/5 bg-white/5 backdrop-blur-xl p-6 shadow-2xl z-10">
      <div className="flex flex-col">
        {/* User Card */}
        <div className="flex gap-4 items-center bg-primary/10 p-4 rounded-xl border border-primary/20">
          <div
            className="bg-primary/20 aspect-square bg-cover rounded-full size-12 flex items-center justify-center text-primary"
            title="Profile image of Alex the explorer"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBzInstEv-MkR0QtJEQDG0efi0b27VHLpnSgSnqebS9pPBec6hAkSzEV1teFEhSwc1B_sdR_wzAmWFijrDdd8dSPO_UTQZo2EhBArIJuXsMy52r8DRZ39GF0yzL1RqJ0Y3P8KoFJoU1BqZX_X81lQmLG42BcQC7hZGzptMQPK8gryhgACjFYYfgoo5CZt_Yvy6F71TV1O7SeqflIJzth2pdy-b83fpDHEFtuTrWqJA39z4nzzwDHKs1YbZfKG9T4EilAL5NZfFPx4kd")',
            }}
          ></div>
          <div className="flex flex-col">
            <h1 className="text-white text-base font-bold">Adventurer Alex</h1>
            <p className="text-primary text-xs font-semibold uppercase tracking-wider">
              Level 12 Scholar
            </p>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-1 mt-6">
          <a
            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 text-slate-400 hover:text-white transition-colors"
            href="#"
          >
            <span className="material-symbols-outlined">home</span>
            <span className="text-sm font-bold">Home Dashboard</span>
          </a>
          <a
            className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary text-white shadow-lg shadow-primary/30"
            href="#"
          >
            <span className="material-symbols-outlined">map</span>
            <span className="text-sm font-bold">Course Map</span>
          </a>
          <a
            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 text-slate-400 hover:text-white transition-colors"
            href="#"
          >
            <span className="material-symbols-outlined">trophy</span>
            <span className="text-sm font-bold">Leaderboard</span>
          </a>
          <a
            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 text-slate-400 hover:text-white transition-colors"
            href="#"
          >
            <span className="material-symbols-outlined">person</span>
            <span className="text-sm font-bold">Profile</span>
          </a>
        </div>
      </div>

      {/* Progress Widget */}
      <div className="mt-auto bg-primary/5 p-4 rounded-xl border border-primary/10">
        <p className="text-xs font-bold text-primary mb-2 uppercase tracking-widest">
          Next Milestone
        </p>
        <h3 className="text-sm font-bold text-white mb-1">Graduation Peak</h3>
        <p className="text-xs text-slate-400 mb-3">
          4 lessons until final exam
        </p>
        <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
          <div className="bg-primary h-full w-[65%] shadow-[0_0_8px_rgba(242,13,128,0.6)]"></div>
        </div>
      </div>
    </aside>
  );
}
