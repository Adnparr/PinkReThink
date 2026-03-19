export default function FeedContent() {
  return (
    <section className="lg:col-span-6 flex flex-col gap-6">
      {/* Hero Section / Categories */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-black border border-primary/30 px-8 py-10 text-white shadow-[0_0_50px_-12px_rgba(242,13,128,0.3)]">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path d="M44.7,-76.4C58.2,-69.2,70.1,-58.3,77.8,-45.3C85.5,-32.3,89,-16.1,88.4,-0.4C87.7,15.4,82.8,30.7,74.5,43.4C66.1,56,54.4,65.9,41.1,72.9C27.7,79.9,13.9,84,0.1,83.9C-13.7,83.8,-27.4,79.5,-39.8,71.9C-52.2,64.2,-63.3,53.2,-71.4,40.1C-79.5,27.1,-84.6,12.1,-84.5,-2.9C-84.4,-17.9,-79.1,-32.8,-70.2,-45.1C-61.4,-57.4,-49,-67,-35.8,-74.5C-22.6,-82,-11.3,-87.4,2.5,-91.7C16.3,-95.9,31.2,-83.5,44.7,-76.4Z" fill="#f20d80" transform="translate(100 100)"></path>
          </svg>
        </div>
        <div className="relative z-10 flex flex-col gap-4">
          <h1 className="text-3xl font-black bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">Chia sẻ Sự thông thái của Bạn</h1>
          <p className="text-white/70 max-w-[480px]">Tham gia cùng hàng ngàn phụ nữ đang học tập và phát triển cùng nhau trong không gian an toàn, hỗ trợ của chúng tôi.</p>
          <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10 shadow-sm hover:border-primary/30 transition-all group">
            <button className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-bold shadow-[0_0_20px_rgba(242,13,128,0.5)] hover:shadow-[0_0_30px_rgba(242,13,128,0.7)] transition-all hover:scale-105 active:scale-95">
              <span className="material-symbols-outlined text-[20px] text-primary group-hover:drop-shadow-[0_0_8px_rgba(242,13,128,0.8)] transition-all">edit</span> Bắt đầu một cuộc Thảo luận
            </button>
          </div>
        </div>
      </div>
      {/* Category Tabs */}
      <div className="flex overflow-x-auto gap-2 pb-2 no-scrollbar border-b border-primary/5">
        <button className="px-5 py-2 whitespace-nowrap rounded-full bg-primary text-white font-bold text-sm">Tất cả Chủ đề</button>
        <button className="px-5 py-2 whitespace-nowrap rounded-full bg-white/5 text-white/60 font-bold text-sm border border-white/10 hover:border-primary/50 hover:text-white transition-all">Chủ đề Thịnh hành</button>
        <button className="px-5 py-2 whitespace-nowrap rounded-full bg-white/5 text-white/60 font-bold text-sm border border-white/10 hover:border-primary/50 hover:text-white transition-all">Câu chuyện Thành công</button>
        <button className="px-5 py-2 whitespace-nowrap rounded-full bg-white/5 text-white/60 font-bold text-sm border border-white/10 hover:border-primary/50 hover:text-white transition-all">Mẹo Nuôi con</button>
        <button className="px-5 py-2 whitespace-nowrap rounded-full bg-white/5 text-white/60 font-bold text-sm border border-white/10 hover:border-primary/50 hover:text-white transition-all">Phát triển Sự nghiệp</button>
      </div>
      {/* Feed Content */}
      <div className="flex flex-col gap-4">
        {/* Discussion Card 1 */}
        <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10 shadow-sm hover:border-primary/30 transition-all group">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-full bg-center bg-cover" data-alt="Profile photo of a community member" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCgbpTEtE4nHkb2KG-F-OxFsUGb3MjrNobtfSLdAVMKVUuyoNsOX7FIznT-6DIwECEkXAJKEpvdSZsb-brCDUDLPiG7MeB-cBMd71ab6-G0mh_MGc8gk220WPwlJZCDYjCiQcBC-YEEpbO2IfUcpuvl3EghXT3acmC0MSCrj0tOO-yIca5Q-plFr_Qb60hSvlapSThf8RprftQ0yw9NaeciqROnqA-3DBHnbLDmxw6Lu_YCsvzygMeBfa4HgkKrpMHbb3ZqhzwwOQYh")'}}></div>
              <div>
                <h4 className="text-sm font-bold text-white">Elena Richardson</h4>
                <p className="text-xs text-slate-500">Mẹo Nuôi con • 2 giờ trước</p>
              </div>
            </div>
            <span className="bg-primary/10 text-primary text-[10px] font-bold uppercase px-2 py-1 rounded">Nổi bật</span>
          </div>
          <h3 className="text-lg font-bold text-white mb-2 leading-snug group-hover:text-primary transition-colors">Làm thế nào để cân bằng việc học toàn thời gian với trẻ nhỏ ở nhà?</h3>
          <p className="text-white/60 text-sm line-clamp-2 mb-4">
            Tôi vừa bắt đầu học ngành điều dưỡng và đang gặp khó khăn trong việc tìm thời gian tập trung học khi đứa con 3 tuổi của tôi còn thức. Có ai có lịch trình hay mẹo nào thực sự hiệu quả không?
          </p>
          <div className="flex items-center gap-6 text-slate-400">
            <button className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-[20px] text-primary group-hover:drop-shadow-[0_0_8px_rgba(242,13,128,0.8)] transition-all">favorite</span>
              <span className="text-xs font-bold text-white/80">128</span>
            </button>
            <button className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-[20px] text-primary group-hover:drop-shadow-[0_0_8px_rgba(242,13,128,0.8)] transition-all">chat_bubble</span>
              <span className="text-xs font-bold text-white/80">45 Phản hồi</span>
            </button>
            <button className="flex items-center gap-1.5 ml-auto hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-[20px] text-primary group-hover:drop-shadow-[0_0_8px_rgba(242,13,128,0.8)] transition-all">share</span>
            </button>
          </div>
        </div>
        {/* Discussion Card 2 (Success Story) */}
        <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10 shadow-sm hover:border-primary/30 transition-all group">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-full bg-center bg-cover" data-alt="Profile photo of a successful mentor" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA08RNv4sYkCjODbGBIBKiTFJbcgDvzSiHtzRGOr17h7wmLg7x-QA4SSIuElpmSXlbb2HJK11RMYS70CvW2sgOGSyiTt5FZgZe4XEwCF2N91wfNBseZi0Xh98VpxVlmVlPMhdhHHkyQcoVYTcVI8SWIYIDi7rACRG7_7foWCuGaZ3R0d8tuD4bx1atzA8uWzVsNlQtT3ZZIf4KW8m3Rip0E91sJYZ5FEjm5kir1dmONdukV6znj5ONlHdmj9AX3Bi4kTgG5aNm7uHN2")'}}></div>
              <div>
                <h4 className="text-sm font-bold text-white">Maya Patel</h4>
                <p className="text-xs text-slate-500">Câu chuyện Thành công • 5 giờ trước</p>
              </div>
            </div>
          </div>
          <h3 className="text-lg font-bold text-white mb-2 leading-snug group-hover:text-primary transition-colors">Từ một bà mẹ nội trợ trở thành Junior Developer trong 6 tháng!</h3>
          <div className="w-full h-40 rounded-xl bg-center bg-cover mb-4" data-alt="Coding setup with laptop and coffee" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCyTiogNAdEWK9AWB6_c4jFKxgUQzQk6Hovv-RJMeYhJrRQXNa-jr_66fhC_tYMk4fIFaIsV0-Fg_o56C4X8FzFUSv6rgFCLzrLjuKH40y_nPpNZ9aqn9iFWKybbSsjHsRuwrrhnGPDNXocQ1f9dFjkrxNLSUUqYLGvEKdQhjyeSCCrFJ6-n4uaHZ3ic_ZflS6kF9O478j3UKWO3g2E7WblqNb4AaC3diAl8OQlLukILp9QU1Q8yiWNn7bmdPV85m-xAgaSccPr5x3N")'}}></div>
          <p className="text-white/60 text-sm line-clamp-2 mb-4">
            Tôi muốn chia sẻ hành trình của mình. Sau khi tham gia khóa học cơ bản về Web Dev tại đây, tôi đã nhận được kỳ thực tập đầu tiên! Đừng bỏ cuộc, sự hỗ trợ của cộng đồng là tất cả...
          </p>
          <div className="flex items-center gap-6 text-slate-400">
            <button className="flex items-center gap-1.5 text-primary">
              <span className="material-symbols-outlined text-[20px] text-primary group-hover:drop-shadow-[0_0_8px_rgba(242,13,128,0.8)] transition-all">favorite</span>
              <span className="text-xs font-bold text-white/80">842</span>
            </button>
            <button className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-[20px] text-primary group-hover:drop-shadow-[0_0_8px_rgba(242,13,128,0.8)] transition-all">chat_bubble</span>
              <span className="text-xs font-bold text-white/80">92 Phản hồi</span>
            </button>
          </div>
        </div>
        {/* Discussion Card 3 */}
        <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10 shadow-sm hover:border-primary/30 transition-all group">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-full bg-center bg-cover" data-alt="User avatar" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC2OXzI1zknM9zYMWf7kESt_uOJr3Rf2TUbK0mSl4EmvnUnGLLu9reUMAJ3fEuZA7T6j6B65k5xxi217eo9wVGMZSwW7cGpV9CuliNcD7ExM9QDYnpDvINsdiXAPSLueC8BFeINCKLHwrPcqmzWaEFsGaiUEmRyMuxwj9S-ZNEZbiw0pVKlMVwsqwj4Mx1MJW-rKNkbB3awFdDD_Bq5W152IVifeiM32OAfyQTdEzo9ZoNqQUinLQY1awJVY-J4SZ_ApftEW8qK8sds")'}}></div>
              <div>
                <h4 className="text-sm font-bold text-white">Sarah Jenkins</h4>
                <p className="text-xs text-slate-500">Chủ đề Thịnh hành • 8 giờ trước</p>
              </div>
            </div>
          </div>
          <h3 className="text-lg font-bold text-white mb-2 leading-snug group-hover:text-primary transition-colors">Đàm phán lương: 3 quy tắc hàng đầu của bạn là gì?</h3>
          <p className="text-white/60 text-sm line-clamp-2 mb-4">
            Tôi có cuộc phỏng vấn lần hai vào ngày mai cho một vị trí Senior. Tôi rất lo lắng về việc nói chuyện tiền bạc. Điều kiện tiên quyết của bạn là gì?
          </p>
          <div className="flex items-center gap-6 text-slate-400">
            <button className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-[20px] text-primary group-hover:drop-shadow-[0_0_8px_rgba(242,13,128,0.8)] transition-all">favorite</span>
              <span className="text-xs font-bold text-white/80">56</span>
            </button>
            <button className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-[20px] text-primary group-hover:drop-shadow-[0_0_8px_rgba(242,13,128,0.8)] transition-all">chat_bubble</span>
              <span className="text-xs font-bold text-white/80">31 Phản hồi</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
