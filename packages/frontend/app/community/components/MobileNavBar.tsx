export default function MobileNavBar() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-black/60 backdrop-blur-lg border-t border-white/10 flex justify-around items-center py-3 z-50">
      <button className="text-primary flex flex-col items-center">
        <span className="material-symbols-outlined">house</span>
        <span className="text-[10px] font-bold">Home</span>
      </button>
      <button className="text-slate-400 flex flex-col items-center">
        <span className="material-symbols-outlined">forum</span>
        <span className="text-[10px] font-bold">Feed</span>
      </button>
      <button className="bg-primary text-white p-2 rounded-full -mt-10 shadow-lg ring-4 ring-background-light dark:ring-background-dark">
        <span className="material-symbols-outlined">add</span>
      </button>
      <button className="text-slate-400 flex flex-col items-center">
        <span className="material-symbols-outlined">school</span>
        <span className="text-[10px] font-bold">Learn</span>
      </button>
      <button className="text-slate-400 flex flex-col items-center">
        <span className="material-symbols-outlined">person</span>
        <span className="text-[10px] font-bold">Profile</span>
      </button>
    </div>
  );
}
