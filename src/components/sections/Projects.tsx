// src/components/sections/Projects.tsx
"use client";

type Project = {
  title: string;
  subtitle: string; // e.g., award / one-liner
  image: string;    // banner image path under /public
  tags: string[];
  description: string;
  links?: { label: string; href: string }[];
};

const PROJECTS: Project[] = [
  {
    title: "",
    subtitle: "May 2024 – July 2024 | GenAI Hackathon Finalist",
    image: "/media/Project/SignBridge.png",
    tags: ["Python", "PyTorch", "React", "Google Gemini API"],
    description:
      "Real-time speech-to-sign language conversion platform integrating Google Speech-to-Text, Gemini API, PyTorch gesture models, and a React front end. Optimized the inference pipeline to achieve <1.5s latency—30% faster than baseline—improving accessibility for hearing-impaired users.",
    links: [
      { label: "GitHub", href: "https://github.com/DongYangYuWHJ/AmericanSignLanguageDetection_PromptEngineeringMaster"},
    ],
  },
  {
    title: "Chess Engine",
    subtitle: "July 2024 – Aug 2024 | University Course Project",
    image: "/media/Project/ChessEngine.png",
    tags: ["C++", "MVC", "OOP Patterns", "Observer", "Unit Testing", "Version Control"],
    description:
      "A full-featured two-player chess engine supporting all standard rules, implemented in C++ using an MVC architecture with Observer pattern for AI opponents. Includes adjustable difficulty levels, unit testing, and version control to demonstrate scalable and maintainable design.",
    links: [
      { label: "GitHub", href: "https://github.com/babarener/chessgame" },
    ],
  },
  {
    title: "QuarkML",
    subtitle: "🚧 In Progress | C++20 Machine Learning Library",
    image: "/media/Project/QuarkML.png",
    tags: ["C++20", "Machine Learning", "Library", "Algorithms"],
    description:
      "A lightweight, educational C++20 ML library reimplementing core algorithms (Linear Regression, K-Means, Decision Tree) with a unified fit/predict/score API. Focused on clarity, modularity, and engineering-grade structure with CMake, tests, and benchmarks.",
    links: [
     { label: "GitHub", href: "https://github.com/babarener/QuarkML" },
    ],
},

];

function Tag({ text }: { text: string }) {
  return (
    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full border border-zinc-200/70 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 bg-white/70 dark:bg-zinc-900/50">
      {text}
    </span>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-28 sm:scroll-mt-32">
      {/* 外层卡片：尺寸/边框/阴影与其它 section 完全一致；左右通过 px-6 sm:px-10 保证对齐 */}
      <div className="relative w-full max-w-screen-xl mx-auto overflow-hidden rounded-3xl border border-zinc-200/70 dark:border-zinc-800/70 shadow-sm bg-white dark:bg-zinc-950">

        {/* 顶部条纹带（与其它 section 保持同风格） */}
        <div className="relative h-12 sm:h-14">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 via-teal-50 to-green-50 dark:from-[#0f1a15] dark:via-[#0e1f19] dark:to-[#10241c]" /> 
            <div className="absolute inset-0 opacity-[0.12] dark:opacity-[0.08]">
            <svg width="100%" height="100%">
              <defs>
                <pattern id="projects-stripe" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 0 40 L 40 0" stroke="rgb(255,180,190)" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#projects-stripe)" />
            </svg>
          </div>

          {/* 左上角标 + 标题（与其它 section 对齐） */}
          <div className="absolute left-4 sm:left-6 -bottom-6 flex items-center gap-3">
            <div className="h-12 w-12 rounded-full bg-rose-500 text-white flex items-center justify-center shadow-md ring-4 ring-white dark:ring-zinc-950">
              {/* projects icon */}
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7">
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              </svg>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100">Projects</h2>
          </div>
        </div>

        {/* 主体内容 */}
        <div className="px-6 sm:px-10 pt-16 pb-14">
          {/* 三列卡片：小屏1列，中屏2列，大屏3列；卡片宽度与其它 section 对齐 */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 items-stretch">
            {PROJECTS.map((p) => (
              <article key={p.title} className="h-full rounded-2xl border border-zinc-200/70 dark:border-zinc-800/70 bg-white/80 dark:bg-zinc-900/40 overflow-hidden">
                {/* 顶部图片区：加渐变遮罩用于标题可读性 */}
                <div className="relative h-56 sm:h-64">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-transparent" />
                  <div className="absolute left-4 right-4 bottom-4">
                    <h3 className="text-white text-xl sm:text-2xl font-bold drop-shadow">{p.title}</h3>
                    <p className="mt-1 text-white/90 text-sm sm:text-[13px] leading-snug">{p.subtitle}</p>
                  </div>
                </div>

                {/* 内容区 */}
                <div className="p-5 sm:p-6">
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => <Tag key={t} text={t} />)}
                  </div>

                  <p className="mt-4 text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    {p.description}
                  </p>

                  {p.links && p.links.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-3">
                      {p.links.map((l) => (
                        <a
                          key={l.href}
                          href={l.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-full
                                     border border-zinc-200/70 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200
                                     bg-white/70 dark:bg-zinc-900/50 hover:bg-zinc-50 dark:hover:bg-zinc-900/70"
                        >
                          {l.label}
                          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7">
                            <path d="M7 17L17 7M10 7h7v7" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
