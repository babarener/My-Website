// components/sections/Introduction.tsx
import Link from "next/link";

export default function Introduction() {
  return (
    <section
      id="intro"
      className="relative mx-auto max-w-5xl px-4 sm:px-6"
      aria-label="Introduction"
    >
      {/* 背景容器：渐变 + 网格 + 噪点 */}
      <div className="relative overflow-hidden rounded-3xl border border-zinc-200/70 dark:border-zinc-800/70 shadow-sm">
        {/* 柔和渐变（亮色 / 暗色） */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-amber-50 via-rose-50 to-indigo-50 dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-900" />

        {/* 网格图案（SVG，不吃性能，亮/暗模式不同透明度） */}
        <GridPattern className="opacity-60 dark:opacity-30" />

        {/* 细腻噪点叠加，防止大面积纯色显脏（通过混合模式更自然） */}
        <div className="pointer-events-none absolute inset-0 -z-10 mix-blend-overlay [background-image:radial-gradient(#00000010_1px,transparent_1px)] [background-size:6px_6px]" />

        {/* 内容主体 */}
        <div className="relative px-6 sm:px-12 py-12 sm:py-16">
          <p className="text-xs tracking-widest text-zinc-500 dark:text-zinc-400">
            HELLO, I’M
          </p>

          <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100">
            Xinyu (Frank) Bo
          </h1>

          <p className="mt-4 max-w-2xl text-zinc-700 dark:text-zinc-300">
            Data Science @ UWaterloo — Building ML products & fast front-ends. Passionate
            about AI, startups, and shipping meaningful tech.
          </p>

          {/* 按钮区 */}
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="#projects"
              className={[
                "inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-medium",
                "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900",
                "shadow-sm transition-all duration-200 hover:scale-[1.03] hover:shadow-md",
                "focus:outline-none focus:ring-2 focus:ring-blue-500/40",
              ].join(" ")}
            >
              View Projects
            </Link>

            <a
              href="mailto:xbo@uwaterloo.ca"
              className={[
                "inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-medium",
                "border border-zinc-300/70 text-zinc-800 dark:text-zinc-200 dark:border-zinc-700",
                "backdrop-blur bg-white/60 dark:bg-zinc-900/40",
                "transition-all duration-200 hover:scale-[1.03] hover:border-blue-500/50 hover:text-blue-600 dark:hover:text-blue-400",
                "focus:outline-none focus:ring-2 focus:ring-blue-500/40",
              ].join(" ")}
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>

      {/* Section 与下一个区块的间距 */}
      <div className="h-12" />
    </section>
  );
}

/** 轻量网格背景（SVG Pattern） */
function GridPattern({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={`absolute inset-0 -z-10 ${className}`}
      width="100%"
      height="100%"
    >
      <defs>
        <pattern id="smallGrid" width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M 24 0 L 0 0 0 24" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </pattern>
        <pattern id="grid" width="120" height="120" patternUnits="userSpaceOnUse">
          <rect width="120" height="120" fill="url(#smallGrid)" />
          <path d="M 120 0 L 0 0 0 120" fill="none" stroke="currentColor" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" className="text-zinc-200 dark:text-zinc-800" />
    </svg>
  );
}

function RefinedBackground({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-zinc-200/70 dark:border-zinc-800/70 shadow-sm">
      {/* 渐变背景 */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-rose-50 via-amber-50 to-indigo-50 dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-900" />

      {/* 轻噪点层 */}
      <div className="absolute inset-0 -z-10 mix-blend-overlay [background-image:radial-gradient(rgba(0,0,0,0.04)_1px,transparent_1px)] [background-size:5px_5px]" />

      {/* 细线网格 — 更轻、更低对比 */}
      <svg
        className="absolute inset-0 -z-15 opacity-30 dark:opacity-20"
        width="100%"
        height="100%"
        aria-hidden="true"
      >
        <defs>
          <pattern id="thinGrid" width="32" height="32" patternUnits="userSpaceOnUse">
            <path
              d="M32 0 L0 0 0 32"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill="url(#thinGrid)"
          className="text-zinc-200 dark:text-zinc-800"
        />
      </svg>

      {/* 正文内容放这里 */}
      <div className="relative p-8 sm:p-12">
        {children}
      </div>
    </div>
  );
}
