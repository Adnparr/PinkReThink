"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const DEMO_EMAIL = "demo@gmail.com";
const DEMO_PASSWORD = "demo123";

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [remember, setRemember] = useState(false);

  function handleSuccess() {
    const demoUser = {
      name: "Adventurer Alex",
      level: "Level 12 Scholar",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAh71wtANmPerVr5n1Z1iR1SVnr6mpOwBo4qdz8Ct7apFCfBOcj8KphfTxo72IEbmsoL1lHGmjbl5ifY5lgehYlod6TEmamBXNt4VfJb6UV5hKJd1F68eBGGktra5LDZXw7QRp6jxb8MjP-hJKAFlLbOle6zpZPH9fbHj82QgqgJQS_Tue6QQ4K75MK-_eNPnUaYMV1BiJA-TySV3g0bIvD0640Ym8kZ0GQ6EtupFZFhClb0dZVw_nCkqyOKeixXdP94_gYMBe2dITb",
    };

    try {
      if (remember) {
        localStorage.setItem("demoUser", JSON.stringify(demoUser));
      } else {
        sessionStorage.setItem("demoUser", JSON.stringify(demoUser));
      }
    } catch (e) {
      // ignore storage errors
    }

    router.push("/landingpage");
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (
      email.trim().toLowerCase() === DEMO_EMAIL &&
      password === DEMO_PASSWORD
    ) {
      handleSuccess();
      return;
    }

    setError(
      "Invalid demo credentials — try demo@pinkrethink.test / DemoPass123",
    );
  }

  return (
    <div className="flex flex-col flex-1 justify-center p-8 md:p-12 lg:px-16 bg-[#0a0206]/80 relative z-10">
      <div className="mb-8 text-center md:text-left">
        <div className="inline-flex md:hidden items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1 mb-4 shadow-lg backdrop-blur-md mx-auto">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">PinkReThink</span>
        </div>
        <h2 className="text-3xl lg:text-4xl font-black text-white mb-2 tracking-tight">
          Chào mừng trở lại
        </h2>
        <p className="text-slate-400 font-medium">
          Sử dụng tài khoản demo để trải nghiệm nền tảng.
        </p>
      </div>

      <form className="space-y-5" onSubmit={handleSubmit}>
        {/* Email Field */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold text-slate-300 uppercase tracking-wide">
            Địa chỉ Email
          </label>
          <div className="relative group/input">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-500 rounded-xl blur opacity-0 group-focus-within/input:opacity-30 transition duration-500"></div>
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl z-10 group-focus-within/input:text-primary transition-colors">
              mail
            </span>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="relative w-full pl-12 pr-4 py-3.5 rounded-xl border border-white/10 bg-[#140510]/80 backdrop-blur-md text-white focus:bg-[#1a0815]/90 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-slate-500 shadow-inner"
              placeholder="demo@gmail.com"
              type="email"
            />
          </div>
        </div>

        {/* Password Field */}
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <label className="text-sm font-bold text-slate-300 uppercase tracking-wide">
              Mật khẩu
            </label>
            <a
              className="text-xs font-bold text-primary hover:text-rose-400 transition-colors bg-primary/10 px-2 py-1 rounded-md"
              href="#"
            >
              Quên mật khẩu?
            </a>
          </div>
          <div className="relative group/input">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-500 rounded-xl blur opacity-0 group-focus-within/input:opacity-30 transition duration-500"></div>
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl z-10 group-focus-within/input:text-primary transition-colors">
              lock
            </span>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="relative w-full pl-12 pr-12 py-3.5 rounded-xl border border-white/10 bg-[#140510]/80 backdrop-blur-md text-white focus:bg-[#1a0815]/90 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-slate-500 shadow-inner"
              placeholder="••••••••"
              type="password"
            />
            <button
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors z-10"
              type="button"
            >
              <span className="material-symbols-outlined text-lg">
                visibility
              </span>
            </button>
          </div>
        </div>

        {/* Remember Me Checkbox */}
        <div className="flex items-center gap-3 pt-1">
          <div className="relative flex items-center">
            <input
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
              className="peer w-5 h-5 appearance-none rounded-md border border-white/20 bg-white/5 checked:bg-primary checked:border-primary cursor-pointer transition-all"
              id="remember"
              type="checkbox"
            />
            <span className="material-symbols-outlined absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-[14px] pointer-events-none opacity-0 peer-checked:opacity-100 font-bold">check</span>
          </div>
          <label
            className="text-sm font-semibold text-slate-300 cursor-pointer select-none"
            htmlFor="remember"
          >
            Duy trì đăng nhập
          </label>
        </div>

        {/* Error */}
        {error ? <div className="text-sm font-medium text-red-200 bg-red-500/20 border border-red-500/50 rounded-lg px-4 py-3 flex items-start gap-2 backdrop-blur-md">
          <span className="material-symbols-outlined text-red-400 text-[18px]">error</span>
          <span>{error}</span>
        </div> : null}

        {/* Submit Button */}
        <div className="pt-2">
          <button
            className="group/btn relative w-full flex items-center justify-center gap-3 h-14 rounded-xl font-black text-white text-lg tracking-wide uppercase transition-all hover:scale-[1.02] active:scale-95 border-b-4 border-primary/50 overflow-hidden"
            type="submit"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-rose-500 transition-all duration-300 group-hover/btn:from-rose-500 group-hover/btn:to-primary"></div>
            <div className="absolute opacity-0 group-hover/btn:opacity-100 inset-0 bg-white/20 transition-opacity"></div>
            <span className="relative drop-shadow-md">Đăng nhập</span>
          </button>
        </div>

        {/* Social Login Divider */}
        <div className="relative py-2 flex items-center">
          <div className="flex-grow border-t border-white/10"></div>
          <span className="flex-shrink mx-4 text-[11px] font-black text-slate-500 uppercase tracking-widest">
            hoặc đăng nhập với
          </span>
          <div className="flex-grow border-t border-white/10"></div>
        </div>

        {/* Social Login Buttons */}
        <div className="grid grid-cols-2 gap-4">
          <button
            className="group flex items-center justify-center gap-3 py-3.5 bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 rounded-xl transition-all text-white backdrop-blur-sm"
            type="button"
          >
            <img
              className="w-5 h-5 group-hover:scale-110 transition-transform"
              data-alt="Google logo"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrC525C15MbQA5RepH75uAEPo2rYrAL00aBvo006d1eQuumZvU1St0RBUtlIU-B6Los_oeSoWF-UQ2vNfN3LRUaLPUVHvYRIFh-j8SfUxEfxjyBLjFGUcqJWH9SfASunhjhA4OHfiag1AaJ9TC00UNwhlMGTuP4CBg7AwtVIqyR2hbtAk8mH96zKxpqF5OjVa_e3SxvmX8P4q2iqFiGTW0Evwwqq8N39RiILVPgLXVEXGKyStp9foLAtUcRhSQzK1b3VYReVXcNLYk"
              alt="Google"
            />
            <span className="text-sm font-bold tracking-wide">Google</span>
          </button>
          <button
            className="group flex items-center justify-center gap-3 py-3.5 bg-white/5 border border-white/10 hover:border-[#1877f2]/50 hover:bg-[#1877f2]/10 rounded-xl transition-all text-white backdrop-blur-sm shadow-[0_0_0_rgba(24,119,242,0)] hover:shadow-[0_0_20px_rgba(24,119,242,0.3)]"
            type="button"
          >
            <span className="material-symbols-outlined text-[#1877f2] opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all font-variation-fill">
              social_leaderboard
            </span>
            <span className="text-sm font-bold tracking-wide">Facebook</span>
          </button>
        </div>

        {/* Register Link */}
        <div className="pt-4 text-center">
          <p className="text-slate-400 font-medium">
            Mới biết đến PinkReThink?
            <a className="text-primary font-bold hover:text-rose-400 transition-colors ml-1" href="/register">
              Đăng ký ngay
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}
