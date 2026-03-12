"use client";

import React from "react";

export type CharacterData = {
  id: string;
  name: string;
  type: string;
  tagColor: "primary" | "emerald" | "violet";
  icon: string;
  description: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
};

type Props = {
  character: CharacterData;
  selected: boolean;
  onSelect: (id: string) => void;
};

const tagClasses: Record<CharacterData["tagColor"], string> = {
  primary: "bg-primary text-white",
  emerald: "bg-emerald-500 text-white",
  violet: "bg-violet-500 text-white",
};

export default function CharacterCard({
  character,
  selected,
  onSelect,
}: Props) {
  return (
    <div
      onClick={() => onSelect(character.id)}
      className={`glass-panel group flex flex-col rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:border-primary/50
        ${
          selected
            ? "border-primary/60 ring-2 ring-primary/30 shadow-[0_0_30px_rgba(242,13,128,0.25)] -translate-y-2"
            : "border-white/10"
        }
        ${character.featured && !selected ? "border-primary/30 ring-1 ring-primary/15" : ""}
      `}
    >
      {/* Character Image */}
      <div className="relative aspect-[4/5] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0208]/90 via-[#0d0208]/10 to-transparent z-10" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={character.image}
          alt={character.imageAlt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Type badge */}
        <div className="absolute bottom-4 left-4 z-20">
          <span
            className={`px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase ${tagClasses[character.tagColor]}`}
          >
            {character.type}
          </span>
        </div>

        {/* Featured ribbon */}
        {character.featured && (
          <div className="absolute top-4 right-4 z-20 flex items-center gap-1 bg-primary/90 backdrop-blur px-2 py-1 rounded-full text-white text-[10px] font-black uppercase tracking-widest shadow-lg">
            <span className="material-symbols-outlined text-sm">stars</span>
            Nổi bật
          </div>
        )}

        {/* Selected overlay */}
        {selected && (
          <div className="absolute inset-0 z-20 flex items-center justify-center bg-primary/10 backdrop-blur-[1px]">
            <div className="bg-primary rounded-full p-3 shadow-2xl shadow-primary/50">
              <span className="material-symbols-outlined text-white text-3xl">
                check_circle
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Card body */}
      <div className="p-6 flex flex-col flex-1 gap-4">
        <div>
          <h3 className="text-white text-2xl font-bold mb-1">
            {character.name}
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            {character.description}
          </p>
        </div>

        {/* Stat pills */}
        <div className="flex flex-wrap gap-2 mt-auto">
          <span className="flex items-center gap-1 text-xs font-semibold text-slate-400 bg-white/5 px-2 py-1 rounded-full border border-white/10">
            <span className="material-symbols-outlined text-primary text-sm">
              {character.icon}
            </span>
            Khả năng đặc biệt
          </span>
        </div>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onSelect(character.id);
          }}
          className={`w-full flex items-center justify-center gap-2 rounded-xl h-12 font-bold text-base transition-all active:scale-95
            ${
              selected
                ? "bg-primary shadow-[0_0_20px_rgba(242,13,128,0.45)] text-white"
                : "bg-white/5 hover:bg-primary/90 border border-white/10 hover:border-primary text-slate-300 hover:text-white"
            }
          `}
        >
          <span className="material-symbols-outlined text-lg">
            {selected ? "check_circle" : "radio_button_unchecked"}
          </span>
          {selected ? `Đã chọn ${character.name}` : `Chọn ${character.name}`}
        </button>
      </div>
    </div>
  );
}
