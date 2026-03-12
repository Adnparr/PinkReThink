import React from 'react';

export default function MainContent() {
  return (
    <div className="flex-1 overflow-y-auto p-4 lg:p-8">
      {/* Breadcrumbs */}
      <div className="mb-6 flex items-center gap-2 text-sm font-medium text-slate-500">
        <a className="hover:text-primary" href="/roadmap">Dashboard</a>
        <span className="material-symbols-outlined text-xs">chevron_right</span>
        <a className="hover:text-primary" href="#">Creative Design 101</a>
        <span className="material-symbols-outlined text-xs">chevron_right</span>
        <span className="text-slate-900 dark:text-slate-200">Visual Principles</span>
      </div>

      {/* Video Player */}
      <div className="relative overflow-hidden rounded-2xl bg-slate-900 shadow-2xl ring-1 ring-slate-200 dark:ring-slate-800">
        <div className="aspect-video w-full bg-cover bg-center flex items-center justify-center group neon-glow" title="Video lesson frame showing a person demonstrating design concepts on a digital screen" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuB2eCEVHsuI4aCTFJxobmcGe4MbishupXN2ot1fyQxcYy4_PeiZiFYK5yob_rLnyfEy4uN8jQiWu9c82RLVBhhgo-mtoMAEtjr6MquevftrNEjfmB-TYBxi1zkW9yGTcBg3CaWeNjNHAkiAFcTA8zgsG4HmmINAol2oK5v51jQkKjjQo34Q8klyRnkB-fFGqza6Iju3Uh59BnHM_0yL7EWUldQcn7Lrztwgy9pY5i-chciLJyO231rOFcdcGuH9ToPNHLU7hAcNvYO5')" }}>
          <button className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-white shadow-[0_0_30px_rgba(242,13,128,0.6)] transition-transform hover:scale-110">
            <span className="material-symbols-outlined !text-4xl">play_arrow</span>
          </button>
          
          {/* Video Controls Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
            <div className="mb-4 h-1.5 w-full overflow-hidden rounded-full bg-white/20">
              <div className="h-full w-1/3 rounded-full bg-primary"></div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6 text-white">
                <span className="material-symbols-outlined cursor-pointer hover:text-primary">play_circle</span>
                <span className="material-symbols-outlined cursor-pointer hover:text-primary">volume_up</span>
                <span className="text-sm font-medium">12:45 / 45:00</span>
              </div>
              <div className="flex items-center gap-6 text-white">
                <span className="material-symbols-outlined cursor-pointer hover:text-primary">closed_caption</span>
                <span className="material-symbols-outlined cursor-pointer hover:text-primary">settings</span>
                <span className="material-symbols-outlined cursor-pointer hover:text-primary">fullscreen</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lesson Info */}
      <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Module 3: Understanding Visual Hierarchy</h1>
          <p className="mt-2 text-slate-600 dark:text-slate-400">Instructor: Sarah Jenkins • Updated May 2024</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-white transition-opacity hover:opacity-90">
            <span className="material-symbols-outlined">check_circle</span>
            Mark as Completed
          </button>
          <button className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-slate-600 ring-1 ring-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:ring-slate-700">
            <span className="material-symbols-outlined">share</span>
          </button>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="mt-8">
        <div className="flex border-b border-primary/10">
          <button className="border-b-2 border-primary px-6 py-4 text-sm font-bold text-primary">Lesson Notes</button>
          <button className="px-6 py-4 text-sm font-semibold text-slate-500 hover:text-slate-900 dark:hover:text-slate-200">Downloads</button>
          <button className="px-6 py-4 text-sm font-semibold text-slate-500 hover:text-slate-900 dark:hover:text-slate-200">Discussion (24)</button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
          {/* Notes Section */}
          <div className="space-y-6">
            <div className="rounded-2xl p-6 glass-panel">
              <h3 className="mb-4 flex items-center gap-2 font-bold text-white">
                <span className="material-symbols-outlined text-primary">description</span>
                Key Takeaways
              </h3>
              <ul className="space-y-3 text-slate-400">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary shadow-[0_0_8px_#00f3ff]"></span>
                  Visual hierarchy is the arrangement or presentation of elements in a way that implies importance.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary shadow-[0_0_8px_#00f3ff]"></span>
                  Size and scale are the most fundamental ways to establish hierarchy.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary shadow-[0_0_8px_#00f3ff]"></span>
                  Color and contrast draw the eye towards specific call-to-action buttons.
                </li>
              </ul>
            </div>
            
            <div className="rounded-2xl p-6 glass-panel">
              <h3 className="mb-4 flex items-center gap-2 font-bold text-slate-900 dark:text-white">
                <span className="material-symbols-outlined text-primary">edit_note</span>
                Your Personal Notes
              </h3>
              <textarea 
                className="w-full rounded-xl border-dashed border-2 border-slate-200 bg-transparent p-4 text-sm focus:border-primary focus:ring-0 dark:border-slate-700 text-white placeholder-slate-500" 
                placeholder="Click here to type your own notes for this lesson..."
                rows={4}
              ></textarea>
            </div>
          </div>

          {/* Downloads Section */}
          <div className="space-y-4">
            <h3 className="flex items-center gap-2 font-bold text-slate-900 dark:text-white">
              <span className="material-symbols-outlined text-primary">cloud_download</span>
              Course Materials
            </h3>
            
            <div className="flex items-center justify-between rounded-xl p-4 glass-panel">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded bg-red-50 text-red-500">
                  <span className="material-symbols-outlined">picture_as_pdf</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">Hierarchy_Checklist.pdf</p>
                  <p className="text-xs text-slate-500">2.4 MB</p>
                </div>
              </div>
              <button className="text-primary hover:text-primary/80">
                <span className="material-symbols-outlined">download</span>
              </button>
            </div>
            
            <div className="flex items-center justify-between rounded-xl p-4 glass-panel">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-50 text-blue-500">
                  <span className="material-symbols-outlined">image</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">Design_Templates.zip</p>
                  <p className="text-xs text-slate-500">14.8 MB</p>
                </div>
              </div>
              <button className="text-primary hover:text-primary/80">
                <span className="material-symbols-outlined">download</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
