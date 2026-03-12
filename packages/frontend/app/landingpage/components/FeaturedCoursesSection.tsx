export default function FeaturedCoursesSection() {
  return (
    <section className="px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12 animate-fade-in-up ">
          <div className="space-y-4">
            <h2 className="text-4xl font-black tracking-tight text-white">Featured Courses</h2>
            <p className="text-slate-600 dark:text-slate-400">Explore our most popular lessons for every age group.</p>
          </div>
          <div className="flex gap-2">
            <button className="size-12 rounded-full border-2 border-primary/20 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="size-12 rounded-full border-2 border-primary/20 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="group cursor-pointer animate-fade-in-up  [animation-delay:200ms]">
            <div className="relative aspect-square rounded-3xl overflow-hidden mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Creative Storytelling" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeUYNDF7_wnDKVK8mm7npc4XXUHnlnYTbGEY2x91if7qQuBVbKXerNiZYEX_R1XAdWBLnplyYIbHmYOEVLInG0oGdU60IQd_G6zppQHe_dWeDfwUgkKDL4azX9dddPjuJMvAWfIog9mu6n2kPcLDaYkA6s9Zc9MRG_7__fiYzTIeGWCx3IEATiWykOH5IGAC2fuhXcRcj6HHaXFC4AP3rVrWkt4Vi2DISwENouB51d9Z9KEum84YPuKq2zVRAK-aWYhxL6AzZ6Bvwb"/>
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-white/90 text-primary text-xs font-bold uppercase tracking-wider shadow-sm">Ages 5-10</span>
              </div>
            </div>
            <h4 className="text-lg font-bold text-white group-hover:text-primary transition-colors">Creative Storytelling</h4>
            <div className="flex items-center gap-4 text-slate-500 text-sm mt-1">
              <span className="flex items-center gap-1"><span className="material-symbols-outlined text-base">video_library</span> 40 Lessons</span>
              <span className="flex items-center gap-1 text-primary"><span className="material-symbols-outlined text-base">star</span> 4.9</span>
            </div>
          </div>
          <div className="group cursor-pointer animate-fade-in-up  [animation-delay:300ms]">
            <div className="relative aspect-square rounded-3xl overflow-hidden mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Coding for Kids" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3qdgrv0HfIiHhxbRYbO-jZjzglgsc-OpervbF_KEPjNc9N7OEWq4XNAWhOvOGj3lcIpvXCs6bPyJiSh0X7IYGp0cBFSMRK3AYofPBtQIC1zq10ajA9bNETX9iMeM5P29HVbFZ8d82w1Kb481A12AXSjT02vst95HRStw_kWZg97oFy8RegLcLZ1UufejHuxUFmocet7gOmmkEP2ydon_WYTzX9g-7lZNb28zu43RjriRV9KulBR85FLWxQuKHmfR3v1Sj0S30Jafz"/>
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-white/90 text-primary text-xs font-bold uppercase tracking-wider shadow-sm">Beginner</span>
              </div>
            </div>
            <h4 className="text-lg font-bold text-white group-hover:text-primary transition-colors">Coding for Kids</h4>
            <div className="flex items-center gap-4 text-slate-500 text-sm mt-1">
              <span className="flex items-center gap-1"><span className="material-symbols-outlined text-base">view_module</span> 12 Modules</span>
              <span className="flex items-center gap-1 text-primary"><span className="material-symbols-outlined text-base">star</span> 4.8</span>
            </div>
          </div>
          <div className="group cursor-pointer animate-fade-in-up  [animation-delay:400ms]">
            <div className="relative aspect-square rounded-3xl overflow-hidden mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Mindful Motherhood" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlZeAGBYowLvIparyoVcd_6J6QrvfuNNvLc0FnJPwAeZjUCuZ52YZOXzNsHWfwrOFjQeQeUdQRUxTZKJJa49GIyHgogrlKVXLcMkjglLv1VxA7YdpBglToabSNjcLTDVE1uD-RQn-_nYAmuULASckIFtZ3X89ls8TMero7H5B8XtmWutLIyZf0zOhpt6gd3gp73XGo8eDNYSNnyS8ABsn-4wiThNCXtmagbzIHsjYeitIe9A8J8prqpBs-t8eTaQcQWph2fsi9m3qV"/>
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-white/90 text-primary text-xs font-bold uppercase tracking-wider shadow-sm">Self-care</span>
              </div>
            </div>
            <h4 className="text-lg font-bold text-white group-hover:text-primary transition-colors">Mindful Motherhood</h4>
            <div className="flex items-center gap-4 text-slate-500 text-sm mt-1">
              <span className="flex items-center gap-1"><span className="material-symbols-outlined text-base">play_circle</span> 15 Videos</span>
              <span className="flex items-center gap-1 text-primary"><span className="material-symbols-outlined text-base">star</span> 5.0</span>
            </div>
          </div>
          <div className="group cursor-pointer animate-fade-in-up  [animation-delay:500ms]">
            <div className="relative aspect-square rounded-3xl overflow-hidden mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Digital Illustration" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOS0dkIQeD-ZsMsp2tp7-Hi1dz6i1R3SmncYdxnsscUzqrI_R5BoE9ElwiDyOzialCQXjpO6zy_GnHjErqYgT_aok9qHtgexeQe1swg0-iKjz2ythVgHvWVTYG9qA9so2L2RWDOrRA0apZ6cCG3Gm03pEPyIZU_Gs88QyF2XcwGVyY69XHJtSkQ4k_caHJ7YW1rvQp67s3N4ZStWuWzmv6baFmHJb_308pxkG6NeuCweUawn2Roazl_A5mqqVu2FMgRiuOmrlZvk98"/>
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-white/90 text-primary text-xs font-bold uppercase tracking-wider shadow-sm">Art</span>
              </div>
            </div>
            <h4 className="text-lg font-bold text-white group-hover:text-primary transition-colors">Digital Illustration</h4>
            <div className="flex items-center gap-4 text-slate-500 text-sm mt-1">
              <span className="flex items-center gap-1"><span className="material-symbols-outlined text-base">palette</span> 20 Projects</span>
              <span className="flex items-center gap-1 text-primary"><span className="material-symbols-outlined text-base">star</span> 4.7</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
