"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import SharedHeader from "../../../components/SharedHeader";
import SharedFooter from "../../../components/SharedFooter";

const characterStories: Record<string, any> = {
  "1": {
    name: "Marie Curie",
    avatar: "https://res.cloudinary.com/dodkc8iuu/image/upload/v1773567374/1_ko9tnq.jpg",
    title: "Từ phòng thí nghiệm lạnh lẽo đến hai giải Nobel",
    intro: "Trước khi trở thành biểu tượng của nền khoa học thế giới, Marie Curie cũng chỉ là một cô gái với tình yêu mãnh liệt dành cho tri thức, dám vượt qua những định kiến về giới tính thời bấy giờ.",
    story1: "Bà đã làm việc ngày đêm trong một căn nhà kho dột nát, bất chấp cái lạnh cắt da và điều kiện thiếu thốn để chắt lọc từng gram quặng urani. Không ai tin rằng một người phụ nữ có thể làm nên điều vĩ đại.",
    story2: "Nhưng với ý chí kiên cường không thể khuất phục, bà không chỉ khám phá ra hai nguyên tố mới là Polonium và Radium mà còn mở ra kỷ nguyên chữa trị ung thư bằng tia xạ. Bà mãi là tấm gương chói lọi về tinh thần khoa học bất diệt.",
    quote: "Trong cuộc sống không có gì để sợ hãi, chỉ có những điều cần được hiểu.",
    color: "from-fuchsia-600 to-pink-500",
    shadow: "shadow-fuchsia-500/50"
  },
  "2": {
    name: "Ada Lovelace",
    avatar: "https://res.cloudinary.com/dodkc8iuu/image/upload/v1773564442/2_y8s2jm.jpg",
    title: "Từ những giấc mơ bay đến ngôn ngữ lập trình",
    intro: "Rất lâu trước khi có máy tính điện tử, Ada Lovelace đã bắt đầu cuộc hành trình phi thường của mình bằng trí tò mò mênh mông, với ước mơ kết hợp toán học khô khan và trí tưởng tượng đầy thi vị.",
    story1: "Khi được tiếp cận với ý tưởng về cỗ máy phân tích (Analytical Engine) của Charles Babbage, trong khi mọi người chỉ thấy một chiếc máy tính toán khổng lồ, Ada lại nhìn thấy một tương lai kỳ diệu. Bà tin rằng máy móc có thể sáng tạo ra nghệ thuật, soạn nhạc nếu được lập trình.",
    story2: "Những dòng ghi chú của bà về thuật toán tính số Bernoulli đã được công nhận là chương trình máy tính đầu tiên trên thế giới. Dù cỗ máy ấy chưa bao giờ được chế tạo trong đời bà, lời sấm truyền của bà đã mở đường cho kỷ nguyên công nghệ thông tin ngày nay.",
    quote: "Trí tưởng tượng chính là khả năng khám phá của chúng ta... Chính nó đã chạm tới những thế giới khuất lấp vô hình quanh ta.",
    color: "from-indigo-600 to-purple-500",
    shadow: "shadow-indigo-500/50"
  },
  "3": {
    name: "Katherine Johnson",
    avatar: "https://res.cloudinary.com/dodkc8iuu/image/upload/v1773565905/3_v64mdz.jpg",
    title: "Chiếc 'Máy tính sống' vươn tới các vì sao",
    intro: "Một trong những ngôi sao sáng nhất của NASA không làm việc ngoài vũ trụ, mà gắn mình với phấn trắng, bảng đen và những phương trình toán học phức tạp ngay tại Trái Đất.",
    story1: "Trong một xã hội mang nặng định kiến về giới tính và chủng tộc, Katherine Johnson đã sử dụng tài năng toán học xuất chúng của mình để vượt qua mọi rào cản. NASA đã phải nương tựa vào quỹ đạo chuyến bay do chính tay bà tính toán để đưa ra những quyết định sinh tử cho các phi hành gia.",
    story2: "Từ sứ mệnh của Alan Shepard, tới cú hạ cánh lịch sử của tàu Apollo 11 lên Mặt Trăng, những chữ số chính xác tuyệt đối của Katherine đã đảm bảo nhân loại không chỉ vươn ra khỏi bầu khí quyển, mà còn có thể trở về nhà an toàn.",
    quote: "Giống như bất kỳ ai khác, tôi luôn nỗ lực làm điều tốt nhất mỗi ngày.",
    color: "from-blue-600 to-cyan-500",
    shadow: "shadow-blue-500/50"
  },
  "4": {
    name: "Hedy Lamarr",
    avatar: "https://res.cloudinary.com/dodkc8iuu/image/upload/v1773566172/4_i1jwxe.jpg",
    title: "Biểu tượng nhan sắc và phát minh thay đổi thế giới",
    intro: "Hedy Lamarr được thế giới biết đến như một mỹ nhân Hollywood đình đám, nhưng rất ít người đương thời hiểu rằng ẩn sau vẻ đẹp đó là một bộ óc kỹ thuật phi thường.",
    story1: "Sống trong thời điểm Thế chiến II đang nổ ra khốc liệt, Hedy cảm thấy thôi thúc phải làm điều gì đó giúp ích. Ban ngày là diễn viên, nhưng khi đêm xuống, bà lại cặm cụi tự nghiên cứu các bản phác thảo và mạch điện học.",
    story2: "Bà đã đồng phát minh ra công nghệ 'nhảy tần số' để điều khiển sóng vô tuyến, chống bị nhiễu sóng từ kẻ thù. Dù ban đầu không được quân đội trọng dụng, nhưng công nghệ này chính là nền tảng trực tiếp tạo nên Bluetooth, Wi-Fi và mạng GPS định vị chúng ta sử dụng mỗi ngày.",
    quote: "Hy vọng và lòng tò mò vào tương lai sẽ tỏ ra mạnh mẽ hơn bất cứ nỗi u sầu nào của hiện tại.",
    color: "from-rose-600 to-red-500",
    shadow: "shadow-rose-500/50"
  },
  "5": {
    name: "Fei-Fei Li",
    avatar: "https://res.cloudinary.com/dodkc8iuu/image/upload/v1773567087/5_p96bsc.jpg",
    title: "Dạy máy tính học cách nhìn ngắm thế giới",
    intro: "Câu chuyện của Fei-Fei Li là hành trình đầy quả cảm của một bé gái nhập cư vượt qua vô vàn khó khăn tài chính để vươn lên thành một trong những nhà khoa học AI hàng đầu thế giới.",
    story1: "Ban ngày đi học trên những giảng đường danh giá, ban đêm lại phải làm thêm tại một tiệm giặt ủi nhỏ của gia đình, Fei-Fei hiểu rất rõ ý nghĩa của sự nỗ lực kiên cường. Bà đam mê việc dạy máy tính không chỉ tính toán mà làm sao để 'nhìn' và 'hiểu' được thế giới như con người.",
    story2: "Bằng tinh thần tiên phong, bà đã xây dựng ImageNet – bộ dữ liệu khổng lồ chứa hàng triệu hình ảnh, châm ngòi cho cuộc cách mạng Deep Learning (Học sâu). Ngày nay, công việc của bà không chỉ là phát triển AI, mà là hướng AI tới những mục tiêu nhân văn sâu sắc nhất.",
    quote: "Tôi không coi Trí tuệ Nhân tạo chỉ là một cuộc cách mạng công nghệ, tôi coi nó là một bước tiến của nhân loại.",
    color: "from-emerald-600 to-teal-500",
    shadow: "shadow-emerald-500/50"
  }
};

export default function StoryPage() {
  const [characterData, setCharacterData] = useState<any>(characterStories["2"]); // Default Ada Lovelace

  useEffect(() => {
    try {
      // Logic to fetch user character ID
      let charId = "3";
      const stored = localStorage.getItem("demoUser") || sessionStorage.getItem("demoUser");
      if (stored) {
        const user = JSON.parse(stored);
        if (user?.character?.id) {
          charId = user.character.id;
        }
      } else {
        const selected = localStorage.getItem("selectedCharacter");
        if (selected) {
          const parsed = JSON.parse(selected);
          if (parsed?.id) charId = parsed.id;
        }
      }
      
      if (characterStories[charId]) {
        setCharacterData(characterStories[charId]);
      }
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .liquid-gradient {
            background: linear-gradient(135deg, #0f050a 0%, #1a0812 35%, #050a15 70%, #08111d 100%);
        }
        .glass-card {
            background: rgba(255, 255, 255, 0.03);
            backdrop-filter: blur(16px);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .text-glow {
            text-shadow: 0 0 20px rgba(255,255,255,0.4);
        }
      `}} />
      <div className="bg-background-dark text-slate-100 font-display min-h-screen liquid-gradient selection:bg-purple-500/30">
        <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
          <div className="layout-container flex h-full grow flex-col z-10">
            <SharedHeader />
            
            <main className="flex-1 flex flex-col items-center py-10 px-4 md:px-10 mt-4 md:mt-8">
              <div className="max-w-[1100px] w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                
                {/* Image Section */}
                <div className="relative group lg:col-span-5">
                  <div className={`absolute -inset-2 bg-gradient-to-r ${characterData.color} rounded-2xl blur-2xl opacity-30 group-hover:opacity-60 transition duration-1000`}></div>
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-slate-900 border border-white/10 ring-1 ring-white/10 shadow-2xl">
                    <img className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-[2s]" data-alt={characterData.name} src={characterData.avatar}/>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#05010a] via-[#05010a]/40 to-transparent opacity-90"></div>
                    <div className="absolute bottom-8 left-8 right-8">
                      <span className={`bg-gradient-to-r ${characterData.color} px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.2em] text-white mb-4 inline-block shadow-lg`}>Bấm vào để xem</span>
                      <h1 className="text-4xl md:text-5xl font-black text-white leading-tight text-glow mb-2">{characterData.name}</h1>
                      <p className="text-slate-300 font-medium text-lg border-l-2 border-white/40 pl-3">{characterData.title}</p>
                    </div>
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="flex flex-col gap-8 lg:col-span-7 pt-4">
                  {/* Intro */}
                  <div className="glass-card p-8 md:p-10 rounded-3xl relative overflow-hidden group">
                    <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${characterData.color}`}></div>
                    <h3 className="text-white font-bold text-2xl mb-6 flex items-center gap-3">
                      <span className="material-symbols-outlined text-3xl">auto_stories</span>
                      Hành trình lịch sử
                    </h3>
                    <div className="space-y-6 text-slate-300 leading-relaxed text-lg font-medium">
                      <p className="text-slate-100">{characterData.intro}</p>
                      <p>{characterData.story1}</p>
                      <p>{characterData.story2}</p>
                    </div>
                  </div>
                  
                  {/* Quote Player */}
                  <div className="glass-card p-6 md:p-8 rounded-3xl relative overflow-hidden transition-all hover:border-white/20 hover:bg-white/5">
                    <div className="flex items-center gap-6">
                      <div className="relative shrink-0">
                        <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-2xl size-20 md:size-24 border-2 border-white/20" style={{backgroundImage: `url("${characterData.avatar}")`}}></div>
                        <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-1 border-4 border-[#08111d]">
                          <span className="material-symbols-outlined text-[16px] text-[#08111d] font-bold">format_quote</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="text-white text-lg md:text-xl font-bold leading-tight mb-2">&quot;{characterData.quote}&quot;</p>
                        <p className="text-slate-400 text-sm font-bold uppercase tracking-widest">— {characterData.name}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Completion Notice */}
                  <div className={`bg-white/5 border border-white/10 p-6 md:p-8 rounded-3xl flex items-start gap-5 shadow-2xl ${characterData.shadow}`}>
                    <div className={`shrink-0 p-3 rounded-2xl bg-gradient-to-br ${characterData.color} shadow-lg`}>
                      <span className="material-symbols-outlined text-white text-2xl">verified</span>
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-1">Cảm hứng từ quá khứ</h4>
                      <p className="text-slate-400 font-medium leading-relaxed">Câu chuyện của {characterData.name} chứng minh rằng dù bạn xuất phát từ đâu hay gặp khó khăn gì, tinh thần kiên trì và đam mê sẽ luôn giúp bạn thay đổi thế giới.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Bottom Actions */}
              <div className="w-full max-w-[1100px] mt-24 text-center border-t border-white/10 pt-16 pb-20 relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#08111d] px-4">
                  <span className="material-symbols-outlined text-4xl text-slate-600">stars</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent mb-6">
                  Câu chuyện vĩ đại kế tiếp thuộc về bạn
                </h2>
                <p className="text-slate-400 max-w-2xl mx-auto text-lg mb-12">Hành trình của {characterData.name} đã thắp lên ngọn lửa, và bây giờ ngọn lửa đó được trao lại cho bạn. Hãy tiếp tục tiến bước và tạo nên dấu ấn của riêng mình nhé!</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/roadmap" className="px-8 py-4 rounded-2xl bg-white text-slate-900 font-black hover:scale-105 active:scale-95 transition-all flex items-center gap-3 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                    <span className="material-symbols-outlined">rocket_launch</span>
                    Khởi hành chặng tiếp theo
                  </Link>
                  <Link href="/landingpage" className="px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-colors flex items-center gap-3">
                    <span className="material-symbols-outlined">home</span>
                    Về trang chủ
                  </Link>
                </div>
              </div>
            </main>
            <SharedFooter />
          </div>
          
          {/* Subtle animated background shapes */}
          <div className="fixed inset-0 pointer-events-none z-0">
            <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] animate-pulse"></div>
            <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px] animate-pulse" style={{animationDelay: "2s"}}></div>
          </div>
        </div>
      </div>
    </>
  );
}
