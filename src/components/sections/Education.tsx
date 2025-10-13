// src/sections/Education.tsx
export default function Education() {
  return (
    <section id="education" className="scroll-mt-28 sm:scroll-mt-32">
      <div className="relative w-full max-w-screen-xl mx-auto overflow-hidden rounded-3xl border border-zinc-200/70 dark:border-zinc-800/70 shadow-sm bg-white dark:bg-zinc-950">
        {/* 顶部花纹带（淡蓝色） */}
        <div className="relative h-12 sm:h-14">
          {/* 背景渐变 */}
          <div className="absolute inset-0 bg-gradient-to-r from-sky-50 via-blue-50 to-indigo-50 dark:from-[#0b1220] dark:via-[#0e1628] dark:to-[#111a30]" />
           {/* 条纹效果（非常浅的蓝色、透明度极低） */}
           <div className="absolute inset-0 opacity-[0.12] dark:opacity-[0.08]">
             <svg width="100%" height="100%">
               <defs>
                 <pattern id="stripe" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 0 40 L 40 0" stroke="rgb(130, 180, 255)" strokeWidth="1" />
                 </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#stripe)" />
             </svg>
          </div>

          {/* 左上角标圆钮 + 标题（与其他 section 对齐） */}
          <div className="absolute left-4 sm:left-6 -bottom-6 flex items-center gap-3">
            <div className="h-12 w-12 rounded-full bg-rose-500 text-white flex items-center justify-center shadow-md ring-4 ring-white dark:ring-zinc-950">
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7">
                <path d="M3 9l9-4 9 4-9 4-9-4Z" />
                <path d="M7 11v4a5 5 0 0 0 10 0v-4" />
              </svg>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100">Education</h2>
          </div>
        </div>

        {/* 主体内容（无时间线，icon 居中，右侧留白） */}
        <div className="px-6 sm:px-10 pt-12 pb-8">
          <div className="grid grid-cols-[72px_1fr] gap-4 pr-4 sm:pr-6 xl:pr-8">
            {/* 左侧：仅保留 icon，垂直水平居中 */}
            <div className="flex items-center justify-center">
              <div className="h-12 w-12 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200/60 dark:border-zinc-700 flex items-center justify-center text-sm font-semibold text-zinc-700 dark:text-zinc-200">
                <img
                    src="/media/Education/uwicon.png"   
                    alt="University of Waterloo"
                    className="h-10 w-10 object-contain"
                />
              </div>
            </div>

            {/* 右侧内容卡片（占满右列，右侧有间距） */}
            <article className="w-full rounded-2xl border border-zinc-200/70 dark:border-zinc-800/70 bg-white/70 dark:bg-zinc-900/40 p-5 sm:p-6">

              <h3 className="text-lg sm:text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                BMath, Data Science — Minor in Combinatorics & Optimization
              </h3>

              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                <a
                  href="https://uwaterloo.ca/"
                  target="_blank"
                  rel="noreferrer"
                  className="underline decoration-dotted underline-offset-2 hover:text-zinc-900 dark:hover:text-zinc-200"
                >
                  University of Waterloo
                </a>{" "}
                • Sep 2022 — May 2027
              </p>

              <p className="mt-3 text-zinc-700 dark:text-zinc-300 leading-relaxed">
                Coursework: Algorithms & Data Structures, Graph Theory, OOP Design, Regression & Predictive Modeling, C++, Python, R. 
              </p>
              <p className="mt-3 text-zinc-700 dark:text-zinc-300 leading-relaxed">
                Activities: Strength Club, Tea Club, intramural basketball, and startup projects.
              </p>

              {/* tags（保持紧凑） */}
              <ul className="mt-4 flex flex-wrap gap-2">
                {["Python", "C++", "SQL", "R", "Compilers", "Algorithms", "Data Analysis", "Computer Architecture", "Operating Systems", "Data Structures"].map((t) => (
                  <li
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-full border border-zinc-200/70 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 bg-white/60 dark:bg-zinc-900/50"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>


      </div>
    </section>
  );
}
