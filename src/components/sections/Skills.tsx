// src/components/sections/Skills.tsx
"use client";

type PillGroup = {
  title: string;
  items: string[];
};

const GROUPS: PillGroup[] = [
  {
    title: "Programming Languages",
    items: [
      "Python", "SQL", "R", "C", "C++", "Bash", "TypeScript",
      "JavaScript", "HTML", "CSS"
    ],
  },
  {
    title: "Data Science & Engineering",
    items: [
        "pandas", "NumPy", "scikit-learn", "PyTorch", "TensorFlow",
        "Power BI", "SQL", "Azure", "Git",
        "Regression", "Classification", "A/B Testing",
        "ML Pipelines", "Experiment Design"
    ],
  },
  {
    title: "Business Skills",
    items: [
      "Market Research","Pain Point Discovery", "SEO", "CRM", "Product",
      "PMF", "KPI Tracking", "Client Relations", "leadership"
    ],
  },
];

function Pill({ text }: { text: string }) {
  return (
    <li
      className="text-[11px] font-semibold px-2.5 py-1 rounded-full border border-zinc-200/70 dark:border-zinc-700
                 text-zinc-700 dark:text-zinc-300 bg-white/60 dark:bg-zinc-900/50"
    >
      {text}
    </li>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-28 sm:scroll-mt-32">
      {/* Outer card: identical border/radius/shadow/background to WorkExperience */}
      <div className="relative w-full max-w-screen-xl mx-auto overflow-hidden rounded-3xl border border-zinc-200/70 dark:border-zinc-800/70 shadow-sm bg-white dark:bg-zinc-950">

        {/* Top striped header bar with gradient + subtle diagonal pattern */}
        <div className="relative h-12 sm:h-14">
          {/* gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-50 via-sky-50 to-teal-50 dark:from-[#0b1820] dark:via-[#0d1e25] dark:to-[#102428]" />

          <div className="absolute inset-0 opacity-[0.12] dark:opacity-[0.08]">
            <svg width="100%" height="100%">
              <defs>
                <pattern id="skills-stripe" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 0 40 L 40 0" stroke="rgb(170,190,255)" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#skills-stripe)" />
            </svg>
          </div>

          {/* Badge + Title (same placement as other sections) */}
          <div className="absolute left-4 sm:left-6 -bottom-6 flex items-center gap-3">
            <div className="h-12 w-12 rounded-full bg-rose-500 text-white flex items-center justify-center shadow-md ring-4 ring-white dark:ring-zinc-950">
              {/* tools/wrench icon */}
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7">
                <path d="M21 2l-6 6M3 21l6-6M15 3a6 6 0 0 0 6 6M3 15a6 6 0 0 0 6 6" />
                <path d="M9 7l8 8M7 9l8 8" />
              </svg>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100">Skills</h2>
          </div>
        </div>

        {/* Content */}
        <div className="px-6 sm:px-10 pt-16 pb-14">
          {/* Three-column grid: 1 / 2 / 3 responsive like your example */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 items-stretch">
            {GROUPS.map((group) => (
              <article
                key={group.title}
                className="h-full rounded-2xl border border-zinc-200/70 dark:border-zinc-800/70
                           bg-white/80 dark:bg-zinc-900/40 p-5 sm:p-6"
              >
                <h3 className="text-lg font-bold text-center text-zinc-900 dark:text-zinc-100">{group.title}</h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((t) => (
                    <Pill text={t} key={t} />
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
