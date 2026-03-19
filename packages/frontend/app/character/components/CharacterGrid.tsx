"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import CharacterCard, { type CharacterData } from "./CharacterCard";

const characters: CharacterData[] = [
  {
    id: "1",
    name: "Marie Curie",
    type: "Kiên cường",
    tagColor: "primary",
    icon: "science",
    description:
      "Nhà khoa học tiên phong trong nghiên cứu phóng xạ, người phụ nữ đầu tiên giành hai giải Nobel ở hai lĩnh vực khác nhau.",
    image:
      "https://res.cloudinary.com/dodkc8iuu/image/upload/v1773567374/1_ko9tnq.jpg",
    imageAlt: "Marie Curie — nhà khoa học phóng xạ",
  },
  {
    id: "2",
    name: "Ada Lovelace",
    type: "Sáng tạo",
    tagColor: "primary",
    icon: "terminal",
    description:
      "Lập trình viên đầu tiên của nhân loại, người đã nhìn thấy tiềm năng của máy tính vượt xa khỏi những con số thuần túy.",
    image:
      "https://res.cloudinary.com/dodkc8iuu/image/upload/v1773564442/2_y8s2jm.jpg",
    imageAlt: "Ada Lovelace — lập trình viên đầu tiên",
    featured: true,
  },
  {
    id: "3",
    name: "Katherine Johnson",
    type: "Chính xác",
    tagColor: "emerald",
    icon: "rocket_launch",
    description:
      "Nữ toán học gia xuất sắc của NASA, người đã tính toán quỹ đạo chính xác đưa con người đặt chân lên Mặt Trăng.",
    image:
      "https://res.cloudinary.com/dodkc8iuu/image/upload/v1773565905/3_v64mdz.jpg",
    imageAlt: "Katherine Johnson — bộ óc của NASA",
  },
  {
    id: "4",
    name: "Hedy Lamarr",
    type: "Đột phá",
    tagColor: "emerald",
    icon: "settings_input_antenna",
    description:
      "Nữ minh tinh màn bạc kiêm nhà phát minh, người đặt nền móng cho công nghệ truyền thông không dây (Wi-Fi, Bluetooth) ngày nay.",
    image:
      "https://res.cloudinary.com/dodkc8iuu/image/upload/v1773566172/4_i1jwxe.jpg",
    imageAlt: "Hedy Lamarr — nhà phát minh Wi-Fi",
  },
  {
    id: "5",
    name: "Fei-Fei Li",
    type: "Thông thái",
    tagColor: "emerald",
    icon: "psychology",
    description:
      "Nhà khoa học máy tính hàng đầu về trí tuệ nhân tạo, người tiên phong trong việc dạy máy tính hiểu được thế giới qua hình ảnh.",
    image:
      "https://res.cloudinary.com/dodkc8iuu/image/upload/v1773567087/5_p96bsc.jpg",
    imageAlt: "Fei-Fei Li — chuyên gia AI",
  },
];

export default function CharacterGrid() {
  const router = useRouter();
  const [selected, setSelected] = useState<string | null>(null);
  const [confirming, setConfirming] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const [slideDir, setSlideDir] = useState<"left" | "right">("right");

  function handlePrev() {
    setSlideDir("left");
    setAnimKey((k) => k + 1);
    setFocusedIndex((i) => (i - 1 + characters.length) % characters.length);
  }

  function handleNext() {
    setSlideDir("right");
    setAnimKey((k) => k + 1);
    setFocusedIndex((i) => (i + 1) % characters.length);
  }

  function handleSelect(id: string) {
    setSelected((prev) => (prev === id ? null : id));
  }

  function handleConfirm() {
    if (!selected) return;
    setConfirming(true);

    const character = characters.find((c) => c.id === selected);
    if (character) {
      try {
        const stored =
          localStorage.getItem("demoUser") ||
          sessionStorage.getItem("demoUser");
        if (stored) {
          const user = JSON.parse(stored);
          user.character = {
            id: character.id,
            name: character.name,
            type: character.type,
          };
          const key = localStorage.getItem("demoUser")
            ? "localStorage"
            : "sessionStorage";
          if (key === "localStorage") {
            localStorage.setItem("demoUser", JSON.stringify(user));
          } else {
            sessionStorage.setItem("demoUser", JSON.stringify(user));
          }
        } else {
          localStorage.setItem(
            "selectedCharacter",
            JSON.stringify({ id: character.id, name: character.name }),
          );
        }
      } catch (e) {
        // ignore storage errors
      }
    }

    router.push("/landingpage");
  }

  const selectedCharacter = characters.find((c) => c.id === selected);

  return (
    <div className="w-full max-w-[1200px] mx-auto flex flex-col items-center gap-12">
      {/* Heading */}
      <div className="text-center">
        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-primary text-xs font-bold uppercase tracking-widest mb-5">
          <span className="material-symbols-outlined text-sm">
            person_search
          </span>
          Bước đầu tiên
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 leading-tight">
          Chọn người bạn đồng hành
          <br />
          <span className="text-primary drop-shadow-[0_0_18px_rgba(242,13,128,0.5)]">
            của bạn
          </span>
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
          Mỗi người bạn đều có những siêu năng lực đặc biệt để giúp bạn khám phá
          thế giới tri thức.
        </p>
      </div>

      {/* Carousel — 3 cards visible */}
      <div className="flex items-center gap-4 w-full max-w-5xl mx-auto">
        {/* Chevron Left */}
        <button
          type="button"
          onClick={handlePrev}
          className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary/40 text-slate-400 hover:text-white transition-all hover:scale-110 active:scale-95 shadow-lg"
          aria-label="Nhân vật trước"
        >
          <span className="material-symbols-outlined text-2xl">
            chevron_left
          </span>
        </button>

        {/* 3 Cards: prev | center | next */}
        <style>{`
          @keyframes slideFromRight {
            from { opacity: 0.2; transform: translateX(80px); }
            to   { opacity: 1;   transform: translateX(0); }
          }
          @keyframes slideFromLeft {
            from { opacity: 0.2; transform: translateX(-80px); }
            to   { opacity: 1;   transform: translateX(0); }
          }
          .slide-right { animation: slideFromRight 0.35s cubic-bezier(0.25,0.46,0.45,0.94) both; }
          .slide-left  { animation: slideFromLeft  0.35s cubic-bezier(0.25,0.46,0.45,0.94) both; }
        `}</style>
        <div
          key={animKey}
          className={`flex-1 grid grid-cols-3 gap-4 items-center ${slideDir === "right" ? "slide-right" : "slide-left"}`}
        >
          {/* Prev card */}
          <div
            className="opacity-50 scale-90 origin-right transition-all duration-300 cursor-pointer"
            onClick={handlePrev}
          >
            <CharacterCard
              character={
                characters[
                  (focusedIndex - 1 + characters.length) % characters.length
                ]
              }
              selected={
                selected ===
                characters[
                  (focusedIndex - 1 + characters.length) % characters.length
                ].id
              }
              onSelect={handleSelect}
            />
          </div>

          {/* Center card — focused */}
          <div className="scale-105 z-10 transition-all duration-300 shadow-2xl shadow-primary/20">
            <CharacterCard
              character={characters[focusedIndex]}
              selected={selected === characters[focusedIndex].id}
              onSelect={handleSelect}
            />
          </div>

          {/* Next card */}
          <div
            className="opacity-50 scale-90 origin-left transition-all duration-300 cursor-pointer"
            onClick={handleNext}
          >
            <CharacterCard
              character={characters[(focusedIndex + 1) % characters.length]}
              selected={
                selected ===
                characters[(focusedIndex + 1) % characters.length].id
              }
              onSelect={handleSelect}
            />
          </div>
        </div>

        {/* Chevron Right */}
        <button
          type="button"
          onClick={handleNext}
          className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary/40 text-slate-400 hover:text-white transition-all hover:scale-110 active:scale-95 shadow-lg"
          aria-label="Nhân vật tiếp theo"
        >
          <span className="material-symbols-outlined text-2xl">
            chevron_right
          </span>
        </button>
      </div>

      {/* Dot Indicators */}
      <div className="flex items-center gap-2 -mt-4">
        {characters.map((char, i) => (
          <button
            key={char.id}
            type="button"
            onClick={() => setFocusedIndex(i)}
            aria-label={`Xem ${char.name}`}
            className={`rounded-full transition-all duration-300 ${
              i === focusedIndex
                ? "w-6 h-2.5 bg-primary shadow-[0_0_8px_rgba(242,13,128,0.6)]"
                : "w-2.5 h-2.5 bg-white/20 hover:bg-white/40"
            }`}
          />
        ))}
      </div>

      {/* Confirm CTA */}
      <div className="flex flex-col items-center gap-4 w-full max-w-sm">
        <button
          type="button"
          disabled={!selected || confirming}
          onClick={handleConfirm}
          className={`w-full flex items-center justify-center py-4 rounded-2xl font-black text-lg tracking-tight transition-all
            ${
              selected
                ? "bg-gradient-to-r from-primary to-rose-400 text-white shadow-2xl shadow-primary/30 hover:scale-105 active:scale-95 border-b-4 border-primary/50"
                : "bg-white/5 text-slate-500 border border-white/10 cursor-not-allowed"
            }
          `}
        >
          {confirming
            ? "Đang khởi động..."
            : selected
              ? `Bắt đầu với ${selectedCharacter?.name}!`
              : "Hãy chọn một nhân vật"}
        </button>

        <p className="text-slate-500 text-sm text-center">
          Bạn có thể thay đổi nhân vật bất cứ lúc nào trong phần cài đặt tài
          khoản.
        </p>
      </div>
    </div>
  );
}
