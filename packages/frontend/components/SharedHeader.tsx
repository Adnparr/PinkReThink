"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function SharedHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const [user, setUser] = useState<null | { name: string; avatar?: string }>(
    null,
  );

  const navLinks = [
    { name: "Home", href: "/landingpage" },
    { name: "Community", href: "/community" },
    { name: "Courses", href: "/roadmap" },
    { name: "Profile", href: "/profile" },
  ];

  useEffect(() => {
    // read demoUser from localStorage or sessionStorage
    try {
      const raw =
        localStorage.getItem("demoUser") || sessionStorage.getItem("demoUser");
      if (raw) setUser(JSON.parse(raw));
    } catch (e) {
      setUser(null);
    }
  }, []);

  function handleLogout() {
    try {
      localStorage.removeItem("demoUser");
      sessionStorage.removeItem("demoUser");
    } catch (e) {
      // ignore
    }
    setUser(null);
    router.push("/landingpage");
  }

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-white/5 px-6 py-4 lg:px-20 bg-background-dark/40 backdrop-blur-xl sticky top-0 z-50">
      <div className="flex items-center gap-8">
        <Link href="/landingpage" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white shadow-[0_0_15px_rgba(242,13,128,0.4)]">
            <span className="material-symbols-outlined">auto_stories</span>
          </div>
          <h1 className="text-2xl font-black tracking-tight text-white hover:text-primary transition-colors">
            PinkReThink
          </h1>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href || pathname?.startsWith(link.href + "/");
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-semibold transition-colors ${isActive ? "text-primary border-b-2 border-primary pb-1" : "text-slate-300 hover:text-white"}`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="flex items-center gap-4">
        {/* Search Bar - hidden on mobile */}
        <div className="hidden sm:flex items-center bg-white/5 rounded-xl px-3 py-1.5 border border-white/10 group focus-within:border-primary/50 transition-colors">
          <span className="material-symbols-outlined text-primary/60 text-lg group-focus-within:text-primary transition-colors">
            search
          </span>
          <input
            className="bg-transparent border-none focus:ring-0 text-sm placeholder:text-slate-500 text-white w-32 lg:w-48 ml-2 outline-none"
            placeholder="Search..."
            type="text"
          />
        </div>

        {/* Notifications */}
        <button className="hidden sm:flex items-center justify-center size-10 rounded-full hover:bg-white/5 text-slate-300 hover:text-white transition-colors relative">
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute top-2 right-2 size-2 bg-primary rounded-full animate-pulse"></span>
        </button>

        {/* User Avatar & Dropdown */}
        <div className="relative group ml-2">
          {user ? (
            <>
              <button className="flex size-10 rounded-full bg-primary/20 items-center justify-center overflow-hidden border-2 border-primary/20 hover:border-primary transition-colors cursor-pointer">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="w-full h-full object-cover"
                  alt="Profile picture"
                  src={user.avatar || ""}
                />
              </button>

              {/* Dropdown Menu */}
              <div className="absolute right-0 top-full mt-2 w-48 rounded-xl bg-[#1a0b2e] border border-white/10 shadow-xl invisible opacity-0 group-hover:opacity-100 group-hover:visible transition-all origin-top-right z-50 overflow-hidden">
                <div className="flex flex-col">
                  <Link
                    href="/profile"
                    className="flex items-center gap-3 px-4 py-3 text-sm text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    <span className="material-symbols-outlined text-lg">
                      person
                    </span>
                    Profile & Settings
                  </Link>
                  <Link
                    href="/roadmap"
                    className="flex items-center gap-3 px-4 py-3 text-sm text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    <span className="material-symbols-outlined text-lg">
                      hotel_class
                    </span>
                    My Progress
                  </Link>
                  <div className="h-px bg-white/10 w-full"></div>
                  <button
                    onClick={handleLogout}
                    className="flex items-center w-full text-left gap-3 px-4 py-3 text-sm text-slate-300 hover:text-red-400 hover:bg-red-500/10 transition-colors"
                  >
                    <span className="material-symbols-outlined text-lg">
                      logout
                    </span>
                    Logout
                  </button>
                </div>
              </div>
            </>
          ) : (
            <Link
              href="/login"
              className="flex size-10 items-center justify-center rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 transition-colors"
            >
              <span className="material-symbols-outlined">login</span>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
