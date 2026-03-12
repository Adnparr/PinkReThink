"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import CharacterCard, { type CharacterData } from "./CharacterCard";

const characters: CharacterData[] = [
  {
    id: "luna",
    name: "Luna",
    type: "Dũng cảm",
    tagColor: "primary",
    icon: "explore",
    description:
      "Nhà thám hiểm dũng cảm luôn sẵn sàng cho những thử thách mới và khám phá những vùng đất lạ.",
    image:
      "https://variety.com/wp-content/uploads/2025/12/Tomb-Raider-Catalyst.png",
    imageAlt: "Luna — nhà thám hiểm dũng cảm",
  },
  {
    id: "stella",
    name: "Stella",
    type: "Thông thái",
    tagColor: "primary",
    icon: "auto_awesome",
    description:
      "Phù thủy tri thức mang theo quyển sách phép thuật chứa đựng tất cả câu trả lời của vũ trụ.",
    image:
      "https://static0.polygonimages.com/wordpress/wp-content/uploads/2025/12/frieren-looking-up-in-the-trailer-for-season-2.jpg?w=1200&h=628&fit=crop",
    imageAlt: "Stella — phù thủy tri thức",
    featured: true,
  },
  {
    id: "flora",
    name: "Flora",
    type: "Bình yên",
    tagColor: "emerald",
    icon: "eco",
    description:
      "Người bảo vệ thiên nhiên dịu dàng, giúp bạn học cách yêu thương và chăm sóc thế giới xung quanh.",
    image:
      "https://gamek.mediacdn.vn/133514250583805952/2025/4/15/kudasai-mononoke-92-17447016114501332442091.webp",
    imageAlt: "Flora — người bảo vệ thiên nhiên",
  },
];

export default function CharacterGrid() {
  const router = useRouter();
  const [selected, setSelected] = useState<string | null>(null);
  const [confirming, setConfirming] = useState(false);

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

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full items-stretch">
        {characters.map((char) => (
          <CharacterCard
            key={char.id}
            character={char}
            selected={selected === char.id}
            onSelect={handleSelect}
          />
        ))}
      </div>

      {/* Confirm CTA */}
      <div className="flex flex-col items-center gap-4 w-full max-w-sm">
        <button
          type="button"
          disabled={!selected || confirming}
          onClick={handleConfirm}
          className={`w-full flex items-center justify-center gap-3 py-4 rounded-2xl font-black text-lg tracking-tight transition-all
            ${
              selected
                ? "bg-gradient-to-r from-primary to-rose-400 text-white shadow-2xl shadow-primary/30 hover:scale-105 active:scale-95 border-b-4 border-primary/50"
                : "bg-white/5 text-slate-500 border border-white/10 cursor-not-allowed"
            }
          `}
        >
          <span className="material-symbols-outlined text-2xl">
            {confirming ? "hourglass_top" : "rocket_launch"}
          </span>
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
