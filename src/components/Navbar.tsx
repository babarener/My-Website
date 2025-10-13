// components/Navbar.tsx
"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={[
          "fixed top-0 inset-x-0 z-50 border-b",
          "bg-white/80 dark:bg-zinc-950/70",
          "backdrop-blur supports-[backdrop-filter]:bg-white/60 supports-[backdrop-filter]:dark:bg-zinc-950/50",
          "transition-all duration-300",
          scrolled
            ? "border-zinc-200/60 dark:border-zinc-800/60 shadow-sm"
            : "border-zinc-100 dark:border-zinc-800",
        ].join(" ")}
      >
        <div
          className={[
            "mx-auto max-w-6xl px-6 flex items-center justify-between gap-6",
            "transition-all duration-300",
            scrolled ? "py-1" : "py-4",
            ].join(" ")}
        >
          {/* 左侧：头像 + 名字 + 简介（滚动时隐藏姓名与简介，头像缩小） */}
          <div className="flex items-center gap-4 sm:gap-5 min-w-0">
            <img
              src="/frank.jpg"
              alt="Frank Bo"
              className={[
                "rounded-full border-4 border-zinc-200 dark:border-zinc-800 object-cover",
                "transition-all duration-300",
                scrolled ? "w-10 h-10 border-2" : "w-28 h-28",
              ].join(" ")}
            />

            <div
              className={[
                "transition-all duration-300 origin-left",
                scrolled
                  ? "opacity-0 scale-95 -translate-x-2 pointer-events-none select-none"
                  : "opacity-100 scale-100 translate-x-0",
              ].join(" ")}
            >
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Xinyu (Frank) Bo
              </h1>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400 text-sm sm:text-base max-w-md">
                4th Year Data Science Student at University of Waterloo 
              </p>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400 text-sm sm:text-base max-w-md">
                Driven by curiosity — learning, building, and refining.
              </p>
            </div>
          </div>

          {/* 右侧：社交图标 + 邮件 + 暗黑模式 */}
          <div className="flex items-center gap-2 sm:gap-3">
            <SocialLinks />
            <EmailButton email="xbo@uwaterloo.ca" />
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* 顶部占位，避免内容被固定导航遮挡 */}
      <div
        aria-hidden="true"
        className={scrolled ? "h-[44px]" : "h-[120px] sm:h-[128px]"}
      />
    </>
  );
}

/** 邮件按钮：点击打开邮件客户端，悬停放大变色 */
function EmailButton({ email }: { email: string }) {
  return (
    <a
      href={`mailto:${email}`}
      aria-label="Email"
      className={[
        "inline-flex items-center justify-center rounded-full",
        "h-10 w-10 sm:h-11 sm:w-11 border border-zinc-200/70 dark:border-zinc-800/70",
        "transition-all duration-200",
        "hover:scale-110 hover:border-blue-500/50 hover:text-blue-600 dark:hover:text-blue-400",
        "focus:outline-none focus:ring-2 focus:ring-blue-500/40",
        "text-zinc-700 dark:text-zinc-300",
      ].join(" ")}
      title="Email me"
    >
      {/* 信封图标（无需额外库） */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5"
      >
        <path d="M2.25 6.75A2.25 2.25 0 0 1 4.5 4.5h15a2.25 2.25 0 0 1 2.25 2.25v10.5A2.25 2.25 0 0 1 19.5 19.5h-15A2.25 2.25 0 0 1 2.25 17.25V6.75Zm2.224.474a.75.75 0 0 0-.948 1.152l7.5 6a.75.75 0 0 0 .948 0l7.5-6a.75.75 0 1 0-.948-1.152L12 12.42 4.474 7.224Z" />
      </svg>
    </a>
  );
}

/** 社交链接图标组：悬停放大 + 变色 */
function SocialLinks() {
  const linkBase =
    "inline-flex items-center justify-center rounded-full h-10 w-10 sm:h-11 sm:w-11 border border-zinc-200/70 dark:border-zinc-800/70 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/40 text-zinc-700 dark:text-zinc-300";

  return (
    <nav aria-label="Social links" className="flex items-center gap-2 sm:gap-3">
      {/* GitHub */}
      <a
        href="https://github.com/babarener"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
        className={`${linkBase} hover:scale-110 hover:text-black dark:hover:text-white`}
        title="GitHub"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
          <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.35-1.77-1.35-1.77-1.11-.76.08-.74.08-.74 1.22.09 1.86 1.25 1.86 1.25 1.09 1.86 2.86 1.32 3.56 1.01.11-.79.43-1.32.77-1.63-2.67-.31-5.48-1.33-5.48-5.9 0-1.3.47-2.36 1.24-3.19-.12-.31-.54-1.57.12-3.27 0 0 1.01-.32 3.31 1.22a11.5 11.5 0 0 1 6.02 0c2.3-1.54 3.31-1.22 3.31-1.22.66 1.7.24 2.96.12 3.27.77.83 1.24 1.89 1.24 3.19 0 4.58-2.81 5.58-5.49 5.88.44.38.82 1.11.82 2.24v3.32c0 .32.21.69.83.58A12 12 0 0 0 12 .5z" />
        </svg>
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/frank-xinyu-bo-27046627b"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
        className={`${linkBase} hover:scale-110 hover:text-[#0A66C2]`}
        title="LinkedIn"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
          <path d="M4.98 3.5C4.98 4.88 3.86 6 2.49 6 1.11 6 0 4.88 0 3.5 0 2.12 1.11 1 2.49 1 3.86 1 4.98 2.12 4.98 3.5zM.5 8.5h4V23h-4V8.5zM8.5 8.5h3.8v1.98h.05c.53-1.01 1.82-2.08 3.75-2.08 4.01 0 4.75 2.64 4.75 6.07V23h-4v-6.53c0-1.56-.03-3.56-2.17-3.56-2.18 0-2.51 1.7-2.51 3.45V23h-4V8.5z" />
        </svg>
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/babababarener"
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram"
        className={`${linkBase} hover:scale-110 hover:text-pink-600`}
        title="Instagram"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
          <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zm11 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM12 7a5 5 0 1 0 .001 10.001A5 5 0 0 0 12 7zm0 2a3 3 0 1 1-.001 6.001A3 3 0 0 1 12 9z" />
        </svg>
      </a>
    </nav>
  );
}


