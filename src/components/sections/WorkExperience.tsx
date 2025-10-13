// src/sections/WorkExperience.tsx
export default function WorkExperience() {
  return (
    <section id="work" className="scroll-mt-28 sm:scroll-mt-32">
      {/* 外层卡片：与其它 section 保持同尺寸/边框/阴影 */}
      <div className="relative w-full max-w-screen-xl mx-auto overflow-hidden rounded-3xl border border-zinc-200/70 dark:border-zinc-800/70 shadow-sm bg-white dark:bg-zinc-950">

        {/* 顶部条纹带（淡紫蓝渐变 + 细斜纹），标题放这里 */}
        <div className="relative h-12 sm:h-14">
          {/* 渐变背景 */}
          <div className="absolute inset-0 bg-gradient-to-r from-violet-50 via-indigo-50 to-purple-100 dark:from-[#141122] dark:via-[#18152b] dark:to-[#1c1832]" />
          <div className="absolute inset-0 opacity-[0.12] dark:opacity-[0.08]">
            <svg width="100%" height="100%">
              <defs>
                <pattern id="work-stripe" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 0 40 L 40 0" stroke="rgb(170,190,255)" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#work-stripe)" />
            </svg>
          </div>

          {/* 左上角标圆钮 + 标题（位置与其他 section 一致） */}
          <div className="absolute left-4 sm:left-6 -bottom-6 flex items-center gap-3">
            <div className="h-12 w-12 rounded-full bg-rose-500 text-white flex items-center justify-center shadow-md ring-4 ring-white dark:ring-zinc-950">
              {/* briefcase 图标（纯 SVG） */}
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7">
                <path d="M3 9h18v9a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V9Z" />
                <path d="M9 9V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v3" />
              </svg>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100">Work Experience</h2>
          </div>
        </div>

        {/* 主体内容：三列卡片，铺满容器宽度；小屏 1 列，中屏 2 列，大屏 3 列 */}
        <div className="px-6 sm:px-10 pt-16 pb-14">

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 items-stretch">

            {/* 卡片 1：Henkel */}
            <article className="h-full rounded-2xl border border-zinc-200/70 dark:border-zinc-800/70 bg-white/80 dark:bg-zinc-900/40 p-5 sm:p-6">
              <div className="flex items-start gap-3">
                {/* 方形 logo；若没有图片可用字母占位 */}
                <div className="h-14 w-14 shrink-0 rounded-md border border-zinc-200/70 dark:border-zinc-700
                                bg-white dark:bg-zinc-800 overflow-hidden flex items-center justify-center">
                  <img
                    src="/media/WorkExperience/henkel.png"
                    alt="Henkel"
                    className="block h-11 w-11 object-contain object-center"
                  />
                </div>

                <div className="min-w-0">
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Business Intelligence Intern</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    <a href="https://www.henkel.com/" target="_blank" rel="noreferrer"
                       className="underline decoration-dotted underline-offset-2 hover:text-zinc-900 dark:hover:text-zinc-200">Henkel Adhesive Technologies</a>
                  </p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                        Sep 2024 - Apr 2025 • Global / Remote
                  </p>
                </div>
              </div>

              {/* 技术标签 */}
              <ul className="mt-3 flex flex-wrap gap-2">
                {["Power BI", "Python", "SQL", "ETL Automation", "Data Visualization", "Data Modeling"].map(t => (
                  <li key={t} className="text-xs px-2.5 py-1 rounded-full border border-zinc-200/70 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 bg-white/60 dark:bg-zinc-900/50">{t}</li>
                ))}
              </ul>

              {/* 要点 */}
              <ul className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Partnered with global teams to build an <strong>executive-level Power BI suite</strong>, unifying data from
                    <strong> 30+ countries</strong> for cleaner, faster insights.</li>
                <li>• Automated <strong>Python/SQL ETL pipelines</strong> with refresh and QA checks—saving
                    <strong>12+ hrs/month</strong> and boosting dashboard adoption by <strong>~30%</strong>.</li>
                <li>• Designed regional views that uncovered a <strong>$15 M pricing gap</strong>, directly shaping strategy.</li>
                <li>• Led global onboarding for <strong>200+ analysts & sales managers</strong> to speed up workflow adoption.</li>
              </ul>
            </article>

            {/* 卡片 2：SwiftWellness */}
            <article className="h-full rounded-2xl border border-zinc-200/70 dark:border-zinc-800/70 bg-white/80 dark:bg-zinc-900/40 p-5 sm:p-6">
              <div className="flex items-start gap-3">
                <div className="h-14 w-14 shrink-0 rounded-md border border-zinc-200/70 dark:border-zinc-700
                                bg-white dark:bg-zinc-800 overflow-hidden flex items-center justify-center">
                  <img
                    src="/media/WorkExperience/swift_wellness_logo.jfif"
                    alt="SwiftWellness"
                    className="block h-11 w-11 object-contain object-center"
                  />
                </div>

                <div className="min-w-0">
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Co-Founder & CEO</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    <a href="https://swiftwellnessapp.com" target="_blank" rel="noreferrer"
                    className="underline decoration-dotted underline-offset-2 hover:text-zinc-900 dark:hover:text-zinc-200">SwiftWellness Technologies Inc.</a>
                  </p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                      Oct 2021 - Apr 2025   • Waterloo, ON
                  </p>
                </div>
              </div>

              <ul className="mt-3 flex flex-wrap gap-2">
                {["AI Automation", "SEO", "CRM", "Product", "Google Analytics", "Marketing", "Leadership"].map(t => (
                  <li key={t} className="text-xs px-2.5 py-1 rounded-full border border-zinc-200/70 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 bg-white/60 dark:bg-zinc-900/50">{t}</li>
                ))}
              </ul>

              <ul className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Secured <strong>30+ customer commitments</strong> through demos and feedback, kickstarting recurring revenue.</li>
                <li>• Built <strong>AI-assisted marketing workflows</strong> that cut campaign time by <strong>50%+</strong> and doubled content output.</li>
                <li>• Drove <strong>SEO & analytics</strong> growth—traffic ↑<strong>35%</strong>, engagement ↑<strong>25%</strong>.</li>
                <li>• Raised <strong>$30K+</strong> in funding and partnerships for product expansion.</li>
                <li>• Turned <strong>market research insights</strong> into <strong>two key feature rollouts</strong>.</li>
              </ul>
            </article>

            {/* 卡片 3：WE Accelerate */}
            <article className="h-full rounded-2xl border border-zinc-200/70 dark:border-zinc-800/70 bg-white/80 dark:bg-zinc-900/40 p-5 sm:p-6">
              <div className="flex items-start gap-3">
                <div className="h-14 w-14 shrink-0 rounded-md border border-zinc-200/70 dark:border-zinc-700
                                bg-white dark:bg-zinc-800 overflow-hidden flex items-center justify-center">
                  <img
                    src="/media/WorkExperience/uwicon.png"
                    alt="University of Waterloo"
                    className="block h-11 w-11 object-contain object-center"
                  />
                </div>

                <div className="min-w-0">
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Team Lead</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    <a href="https://uwaterloo.ca/centre-for-work-integrated-learning/waterloo-experience-we-accelerate" target="_blank" rel="noreferrer"
                    className="underline decoration-dotted underline-offset-2 hover:text-zinc-900 dark:hover:text-zinc-200">UWaterloo & Microsoft</a>          
                  </p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                        Jan 2024 - Apr 2024 • Waterloo,ON
                  </p>
                </div>
              </div>

              <ul className="mt-3 flex flex-wrap gap-2">
                {["Azure", "Azure AI", "ML", "MLOps", "Team Lead"].map(t => (
                  <li key={t} className="text-xs px-2.5 py-1 rounded-full border border-zinc-200/70 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 bg-white/60 dark:bg-zinc-900/50">{t}</li>
                ))}
              </ul>

              <ul className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Completed Microsoft <strong>Azure Fundamentals</strong> (cloud platform) and <strong>Azure AI Fundamentals</strong> (ML model training) tracks.</li>
                <li>• Led a team to propose an <strong>integrable fraud-message detection system</strong> for messaging apps, surfacing risk explanations to users.</li>
                <li>• Designed and implemented an <strong>ML training pipeline</strong> to detect scam patterns; coordinated data prep, experimentation, and evaluation.</li>
                <li>• Owned project planning: decomposed goals into <strong>clear objectives</strong>, assigned tasks, set cadence, and <strong>unblocked teammates</strong> when issues arose.</li>
              </ul>
            </article>


          </div>
        </div>
      </div>
    </section>
  );
}
