export default function HeroSection() {
  return (
    <section className="px-6 lg:px-20 lg:py-20 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-8 order-2 lg:order-1">
          <div className="space-y-4 animate-fade-in-left  text-left">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-wide">TRAO QUYỀN CHO THẾ HỆ TƯƠNG LAI</span>
            <h1 className="text-5xl lg:text-7xl font-black leading-tight tracking-tight text-white">
              Nơi <span className="text-primary">Sự Tò Mò</span> Gặp Gỡ Sự Sáng Tạo
            </h1>
            <p className="text-lg lg:text-xl text-slate-400 leading-relaxed max-w-xl">
              Một không gian an toàn, vui nhộn dành cho phụ nữ và trẻ em để cùng nhau học tập, phát triển và toả sáng. Tham gia cùng hơn 10.000 học viên ngay hôm nay.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 animate-fade-in-left  [animation-delay:200ms]">
            <button className="bg-primary text-white px-8 py-4 rounded-xl text-lg font-bold shadow-primary hover:shadow-primary-lg transition-all flex items-center gap-2 hover:-translate-y-1">
              <span>Bắt đầu học</span>
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
            <button className="bg-white/5 border border-white/10 px-8 py-4 rounded-xl text-lg font-bold text-white hover:bg-white/10 transition-all backdrop-blur-md hover:-translate-y-1">
              Xem Khoá Học
            </button>
          </div>
          <div className="flex items-center gap-4 text-sm font-medium text-slate-500 animate-fade-in-left  [animation-delay:400ms]">
            <div className="flex -space-x-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="size-8 rounded-full border-2 border-background-light" alt="Student avatar 1" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJL6Br1mRrQqWxo3BNd7qTs8JrL9rDphP-ub4ENCkSgYTfcuom7uG55HGJuyKHTSBxp7bvgwUu1ma5941LD205No9qXi_O4EuAIMZOVbYsozSDFG6tWoVZcM_QSg82ou-FIr7sixi-s-4UeAejHg4g2lcRLtohhjl68lAzF_AQBe3Rrw06yUhgMHGLguHJw7QMgUowPgqkn7S6SaSP4A5u3ZSPotU363dlnCcOvs2tOubtBChtvCYkdB_hER15NbUArh0DgmF2X1tP"/>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="size-8 rounded-full border-2 border-background-light" alt="Student avatar 2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGnQh_SZ9-EkPV3c7Bl6XNaGhjfolCciMkzduMuzGGNcaaLKJGez4UAC3iNLNx1OVwgMZ61sRkyaW9j2e_S8Ek6SHkxymW7EoOnujWLU-POsI58GTbNdDVXNmFZgd2p1jmZXxYxSqZ47d9SCQI_jAkhYWJZtPL-yJOjwoVDCrlkuEXQY0Zp-wEBlqFPvVA1VqT7B3fiUj3dKiOQ2mQwWfTCItocjhdFwwMHQSkrlQb_P0xVXjhXmIg1I9RF_r7jOHzDRG6E3lenOWO"/>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="size-8 rounded-full border-2 border-background-light" alt="Student avatar 3" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtxKhyLMm6qaJ0YonT0UeKTyFoTRD-0ODt_8XApUVEhjkSZkXUZzvbDQ7eAfdGDIKi8-fevPNcmrmgsmXmCkl4QfR9wOFr_xdGw93yNv8IoCcGlZdhqgG_0GTR5xDYNuYOIH6o7c_3OX9ua2sMOTFVudlADAzLAovccoi2G1SPkZbHeKv7iN9eMoQcurDJKlQDfZwOCBaC-ngGLylYBLBuQi0igZzbY9x1lq5S7ADVEa_ZYSOvvGs6cRqqNsjvImckUDgs8Yhwc9Zu"/>
              <div className="size-8 rounded-full bg-primary flex items-center justify-center text-white text-[10px] border-2 border-background-light">+12k</div>
            </div>
            <span>Hàng ngàn học viên hạnh phúc đã tham gia</span>
          </div>
        </div>
        <div className="order-1 lg:order-2 relative animate-fade-in-right  [animation-delay:300ms]">
          <div className="absolute -top-10 -right-10 size-64 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 size-64 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl border border-white/10 bg-white/5 backdrop-blur-sm transform lg:rotate-2 animate-float">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="w-full h-full object-cover" alt="Mother and daughter learning" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfR6lIgfgmHE1dpY0g14QDDqHEZsLw-2akwq_T64ChEIcDnTMjSVUCBhac1iB35B2Qzz6dVlL9tp4Q6K3nUS4DUtzY9S7BVhjvENDz7-V-On5SPFGvlCZ2usyOQztE17XY44-aFnIUcLCNUOsbpY_z8iObr-c_tTc7fVSTgD2JqU9QvVHGmPHZsekJEGUSBcQBD4RIF-adoG-1SzNblWkIZ6cX2qiqT4grDBRYHgoLztSlG-mDnvp-3DrlpA9JLF8lSJjK6e2OoR1d"/>
            <div className="absolute bottom-6 left-6 right-6 bg-background-dark/60 backdrop-blur-xl p-4 rounded-2xl flex items-center gap-4 border border-white/10 shadow-lg">
              <div className="size-12 rounded-xl bg-primary flex items-center justify-center text-white">
                <span className="material-symbols-outlined">verified</span>
              </div>
              <div>
                <p className="font-bold text-sm">Khu vực học tập an toàn</p>
                <p className="text-xs text-slate-500">Môi trường thân thiện với trẻ em được chứng nhận</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
