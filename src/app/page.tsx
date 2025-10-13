// app/page.tsx
import Link from "next/link";

import PersonalLife from "../components/sections/PersonalLife";
import Education from "../components/sections/Education";
import WorkExperience from "../components/sections/WorkExperience";
import Skills from "../components/sections/Skills";
import Projects from "../components/sections/Projects";
import Connect from "../components/sections/Connect";



export default function HomePage() {
  return (
    <div className="space-y-16 sm:space-y-20">
      {/* ===== Hero / Introduction ===== */}
      <Hero />

      {/* ===== Education ===== */}
      <Education />

      {/* ===== Work Experience ===== */}
      <WorkExperience />
      
      {/* ====== PersonalLife ====== */}
      <PersonalLife />

      {/* ===== Projects ===== */}
      <Projects />

      {/* skills & tools */}
      <Skills />

      {/* ===== Contact ===== */}
      <Connect />

      {/* 底部留白，避免内容贴边 */}
      <div className="h-6 sm:h-10" />
      </div>      
    ); 
}   



function Hero() {
  return (
    <section id="about" className="scroll-mt-28 sm:scroll-mt-32">
      <div className="relative w-full max-w-screen-xl mx-auto overflow-hidden rounded-3xl border border-zinc-200/70 dark:border-zinc-800/70 shadow-sm bg-white dark:bg-zinc-950">
        {/* 顶部花纹带（柔和紫色渐变 + 菱格纹） */}
          <div className="relative h-14 sm:h-16">
            {/* 背景渐变 */}
            <div className="absolute inset-0 bg-gradient-to-r from-amber-50 via-orange-50 to-yellow-50 dark:from-[#221b10] dark:via-[#2a1e0d] dark:to-[#31210e]" />
            {/* 浅紫色菱格纹（透明度极低） */}
            <div className="absolute inset-0 opacity-[0.15] dark:opacity-[0.08]">
              <svg width="100%" height="100%">
               <defs>
                 <pattern id="diamond" width="30" height="30" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                   <path d="M 0 15 L 15 0 L 30 15 L 15 30 Z" fill="none" stroke="rgb(186, 148, 255)" strokeWidth="0.4" />
                 </pattern>
               </defs>
              <rect width="100%" height="100%" fill="url(#diamond)" />
              </svg>
      </div>

          {/* 左上角标圆钮 + 标题 */}
          <div className="absolute left-4 sm:left-6 -bottom-6 flex items-center gap-3">
            <div className="h-12 w-12 rounded-full bg-rose-500 text-white flex items-center justify-center shadow-md ring-4 ring-white dark:ring-zinc-950">
              {/* 人物轮廓图标 */}
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Z" />
                <path d="M4 20a8 8 0 0 1 16 0" strokeLinecap="round" />
              </svg>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100">About Me</h2>
          </div>
        </div>

        {/* 文字主体（两栏） */}
        <div className="px-6 sm:px-10 pt-12 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 左列 */}
            <div>
              <h3 className="flex items-center gap-2 text-zinc-900 dark:text-zinc-100 font-semibold">
                <span className="text-lg">🌐</span> My Journey
              </h3>
              <p className="mt-3 text-[15px] font-medium text-zinc-700 dark:text-zinc-300 leading-relaxed">
                I was born in Beijing twenty-one years ago. As a kid, I spent most of my time outside, exploring freely without much limits—and those years were genuinely happy. My family moved often, and I ended up attending four different elementary schools, living in cities across China. 
              </p>

              <p className="mt-3 text-[15px] font-medium text-zinc-700 dark:text-zinc-300 leading-relaxed">
                For most of my early life, I didn’t think much about direction or purpose; I simply went with what felt comfortable. It wasn’t until high school that I started learning to take control of my time and develop a sense of ambition. 
              </p>

              <p className="mt-3 text-[15px] font-medium text-zinc-700 dark:text-zinc-300 leading-relaxed">
                Entering university, I still saw myself primarily as a student—following instructions and absorbing what others taught. But over time, I’ve gained perspective and skills, and I’ve begun asking deeper questions about why I exist and how I can bring values. I want to contribute to something meaningful, to help build a better future. I’m genuinely glad that I’ve come to think this way, and I will to keep moving forward in that direction.
              </p>
            </div>

            {/* 右列 */}
            <div>
              <h3 className="flex items-center gap-2 text-zinc-900 dark:text-zinc-100 font-semibold">
                <span className="text-lg">👤</span> Who I Am
              </h3>
              <p className="mt-3 text-[15px] font-medium text-zinc-700 dark:text-zinc-300 leading-relaxed">
                I’m a software-minded analyst who loves connecting data and intuition.  
                I use <strong>Python</strong>, <strong>React</strong>, and <strong>SQL</strong> to find structure in chaos,  
                build dashboards with <strong>Power BI</strong> and <strong>ETL automation</strong>,  
                and prototype ideas with <strong>PyTorch</strong> and <strong>scikit-learn</strong> to uncover trends that tell stories.
              </p>

              <p className="mt-4 text-[15px] font-medium text-zinc-700 dark:text-zinc-300 leading-relaxed">
                Those are what I usually put on my resume.  
                But I’m more than that. I’m a real, curious, sometimes uncertain person trying to figure things out.  
                I’m grateful for what I have, and I hope to create something that makes the world around me a little better.  
                I’m a <strong>competing powerlifter</strong>, a <strong>Go player</strong>, a <strong>music lover</strong>, and a <strong>traveler....</strong> I enjoys learning about different cultures and ideas that make me more complete as a person
              </p>


              <a
                href="#personal-life"
                className="inline-flex items-center gap-2 mt-5 text-lg font-semibold text-rose-600 hover:text-rose-500 dark:text-rose-400 dark:hover:text-rose-300 transition-colors"
              >
               <span>→ See more about my personal life</span>
              </a>

            </div>
          </div>

          {/* 分隔线 + 一句当前关注点（可改内容） */}
          <div className="my-8 h-px bg-zinc-200 dark:bg-zinc-800" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center gap-2">
              <span className="text-lg">⏳</span>
              <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">What I’m focusing on Now</h4>
            </div>
            <p className="text-[15px] font-medium text-zinc-700 dark:text-zinc-300 leading-relaxed">
              These days, I’m learning how to slow down and think deeper — to build with intention, not just efficiency. I’m exploring how technology, design, and discipline intersect to create something truly meaningful.
            </p>
          </div>
        </div>

        
      </div>
    </section>
  );
}






function RefinedBackground({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-zinc-200/70 dark:border-zinc-800/70 shadow-sm min-h-[22rem] sm:min-h-[26rem]">
      {/* 渐变背景 */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-rose-50 via-amber-50 to-indigo-50 dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-900" />

      {/* 柔和网格 */}
      <svg
        className="absolute inset-0 -z-10 opacity-25 dark:opacity-15"
        width="100%"
        height="100%"
        aria-hidden="true"
      >
        <defs>
          <pattern id="softGrid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M40 0 L0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.4" />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill="url(#softGrid)"
          className="text-zinc-300 dark:text-zinc-800"
        />
      </svg>

      {/* 微弱噪点层 */}
      <div className="absolute inset-0 -z-5 [background-image:radial-gradient(rgba(0,0,0,0.04)_1px,transparent_1px)] [background-size:6px_6px] mix-blend-overlay" />

      <div className="relative px-4 sm:px-8 md:px-10 py-8 sm:py-12">{children}</div>
    </div>
  );
}


/* ---------- SVG Grid Pattern ---------- */
function GridPattern({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={`absolute inset-0 -z-10 ${className}`} width="100%" height="100%">
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

