"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // 避免 SSR 与 CSR 不一致
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={[
        "relative flex items-center justify-center rounded-full",
        "h-10 w-10 sm:h-11 sm:w-11 border border-zinc-200/70 dark:border-zinc-800/70",
        "transition-all duration-300 ease-in-out",
        "hover:scale-110 hover:border-blue-500/50",
        "focus:outline-none focus:ring-2 focus:ring-blue-500/40",
        "text-zinc-700 dark:text-zinc-300",
      ].join(" ")}
    >
      {/* 背景柔和过渡效果 */}
      <span className="absolute inset-0 rounded-full transition-colors duration-500 bg-white dark:bg-zinc-950" />

      {/* 图标容器（带旋转缩放动画） */}
      <span
        className={[
          "relative z-10 flex items-center justify-center transition-transform duration-500",
          isDark ? "rotate-90 scale-110" : "rotate-0 scale-100",
        ].join(" ")}
      >
        {isDark ? (
          // 🌙 Moon icon
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5 text-blue-300 drop-shadow-[0_0_5px_rgba(147,197,253,0.4)]"
          >
            <path d="M21.752 15.002A9 9 0 0 1 9.02 2.25a.75.75 0 0 0-.967.89A7.5 7.5 0 1 0 20.86 15.97a.75.75 0 0 0 .892-.968Z" />
          </svg>
        ) : (
          // ☀️ Sun icon
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5 text-yellow-500 drop-shadow-[0_0_5px_rgba(250,204,21,0.5)]"
          >
            <path
              fillRule="evenodd"
              d="M12 4.5a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 12 4.5zM4.72 5.97a.75.75 0 0 1 1.06 0L6.75 6.94a.75.75 0 0 1-1.06 1.06L4.72 7.03a.75.75 0 0 1 0-1.06zM12 8.25a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5zM3.75 12a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75zM17.25 12a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75zM4.72 18.03a.75.75 0 0 1 1.06 0l1.03 1.03a.75.75 0 0 1-1.06 1.06L4.72 19.09a.75.75 0 0 1 0-1.06zM12 19.5a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-1.5 0v-.5a.75.75 0 0 1 .75-.75zM17.25 18.03a.75.75 0 0 1 1.06 0l1.03 1.03a.75.75 0 0 1-1.06 1.06l-1.03-1.03a.75.75 0 0 1 0-1.06z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </span>
    </button>
  );
}
