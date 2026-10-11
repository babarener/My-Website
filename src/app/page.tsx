// app/page.tsx


import PersonalLife from "../components/sections/PersonalLife";
import Education from "../components/sections/Education";
import WorkExperience from "../components/sections/WorkExperience";
import Skills from "../components/sections/Skills";
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
      
      {/* Skills & Tools */}
      <Skills />

      {/* Personal Life */}
      <PersonalLife />

      {/* ===== Contact ===== */}
      <Connect />

      {/* 底部留白，避免内容贴边 */}
      <div className="h-6 sm:h-10" />
      </div>      
    ); 
}   



function Hero() {
  return (
    <section id="about" aria-labelledby="about-heading" className="scroll-mt-28 sm:scroll-mt-32 overflow-hidden rounded-3xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <div className="px-6 py-8 sm:px-10 sm:py-12 lg:px-14">
        <div>
          <h2 id="about-heading" className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">Who I Am</h2>

          <div className="mt-7 grid gap-9 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:gap-12">
            <div>
              <h3 className="max-w-[720px] text-[32px] font-semibold leading-[1.14] tracking-[-0.035em] text-zinc-900 sm:text-[42px] lg:text-[46px] dark:text-zinc-100">
                <span className="block">Understanding business.</span>
                <span className="mt-1 block text-rose-700 dark:text-rose-300">Turning data into decisions.</span>
              </h3>
              <p className="mt-6 max-w-[640px] text-base leading-7 text-zinc-600 sm:text-[17px] sm:leading-8 dark:text-zinc-300">
                I enjoy asking questions, understanding how a business works, and using data to help people make informed decisions. I’m most engaged when I can work closely with others and see how my work makes a difference.
              </p>
            </div>

            <aside aria-label="My background" className="border-t border-zinc-200 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-2 dark:border-zinc-800">
              <dl className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1 lg:gap-7">
                <div>
                  <dt className="mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">Currently</dt>
                  <dd className="text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                    <span className="block font-semibold text-zinc-800 dark:text-zinc-200">Northbridge Financial</span>
                    Advanced Analytics
                  </dd>
                </div>
                <div>
                  <dt className="mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">Education</dt>
                  <dd className="text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                    <span className="block font-semibold text-zinc-800 dark:text-zinc-200">University of Waterloo</span>
                    Data Science student
                  </dd>
                </div>
              </dl>
            </aside>
          </div>

          <div className="mt-9 grid gap-4 border-t border-zinc-200 pt-7 sm:mt-10 lg:grid-cols-[180px_minmax(0,1fr)] lg:gap-8 dark:border-zinc-800">
            <h3 className="pt-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">Outside of work</h3>
            <div>
              <p className="max-w-3xl text-[15px] leading-7 text-zinc-600 dark:text-zinc-300">
                Outside of work, I’m a <span className="font-medium text-zinc-900 dark:text-zinc-100">competitive powerlifter, a Go player, and a music lover.</span> My current goal is to qualify for the <span className="font-medium text-zinc-900 dark:text-zinc-100">Canadian Powerlifting Union National Championships.</span> I like having something to work toward, but I also enjoy exploring unfamiliar places, cultures, and ideas simply out of curiosity.
              </p>
              <a href="#personal-life" className="mt-2 inline-flex min-h-[44px] items-center gap-3 rounded text-sm font-medium text-rose-700 underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose-500 dark:text-rose-300">
                More about life outside work <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-zinc-200 pt-9 sm:mt-12 sm:pt-10 dark:border-zinc-800">
          <h3 id="journey-heading" className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-100">My Journey</h3>
          <ol aria-labelledby="journey-heading" className="mt-8">
            <li className="relative pl-8 sm:pl-10 pb-9">
              <span aria-hidden="true" className="absolute left-[5px] top-3 bottom-0 w-px bg-zinc-200 dark:bg-zinc-800" />
              <span aria-hidden="true" className="absolute left-0 top-[7px] h-[11px] w-[11px] rounded-full border-2 border-rose-500 bg-white dark:bg-zinc-950" />
              <div className="grid gap-2 lg:grid-cols-[230px_minmax(0,1fr)] lg:gap-8">
                <h4 className="text-base font-semibold leading-7 text-zinc-900 dark:text-zinc-100">Growing up in China</h4>
                <p className="max-w-3xl text-[15px] leading-7 text-zinc-600 sm:text-base dark:text-zinc-300">I grew up in China and attended four elementary schools across different cities, including both boarding and day schools. Toward the end of middle school, I felt that an exam-focused education wouldn’t take me where I wanted to go. After discussing it with my parents, I <strong className="font-semibold text-zinc-900 dark:text-zinc-100">chose a different path</strong>: I began an international curriculum in Grade 11 and was later admitted to the University of Waterloo’s Faculty of Mathematics.</p>
              </div>
            </li>
            <li className="relative pl-8 sm:pl-10 pb-9">
              <span aria-hidden="true" className="absolute left-[5px] top-3 bottom-0 w-px bg-zinc-200 dark:bg-zinc-800" />
              <span aria-hidden="true" className="absolute left-0 top-[7px] h-[11px] w-[11px] rounded-full border-2 border-rose-500 bg-white dark:bg-zinc-950" />
              <div className="grid gap-2 lg:grid-cols-[230px_minmax(0,1fr)] lg:gap-8">
                <h4 className="text-base font-semibold leading-7 text-zinc-900 dark:text-zinc-100">Finding my direction at Waterloo</h4>
                <p className="max-w-3xl text-[15px] leading-7 text-zinc-600 sm:text-base dark:text-zinc-300">At Waterloo, my interest in physics initially drew me toward applied mathematics and physics, and I also explored actuarial courses. Through these experiences, I learned that I’m most motivated when I can put ideas into practice, see tangible progress, and make an impact. That realization led me to <strong className="font-semibold text-zinc-900 dark:text-zinc-100">switch to data science</strong> in my second year.</p>
              </div>
            </li>
            <li className="relative pl-8 sm:pl-10 pb-9">
              <span aria-hidden="true" className="absolute left-[5px] top-3 bottom-0 w-px bg-zinc-200 dark:bg-zinc-800" />
              <span aria-hidden="true" className="absolute left-0 top-[7px] h-[11px] w-[11px] rounded-full border-2 border-rose-500 bg-white dark:bg-zinc-950" />
              <div className="grid gap-2 lg:grid-cols-[230px_minmax(0,1fr)] lg:gap-8">
                <h4 className="text-base font-semibold leading-7 text-zinc-900 dark:text-zinc-100">Exploring business through experience</h4>
                <p className="max-w-3xl text-[15px] leading-7 text-zinc-600 sm:text-base dark:text-zinc-300">Along the way, I tried building a startup and took on responsibilities in marketing, management, and customer outreach. My corporate internships then brought me into <strong className="font-semibold text-zinc-900 dark:text-zinc-100">business intelligence and data analysis</strong>, where I found a strong fit for my interests. During my time at Northbridge, I’ve worked with several departments and learned how their teams operate and make decisions.</p>
              </div>
            </li>
            <li className="relative pl-8 sm:pl-10 pb-0">
              
              <span aria-hidden="true" className="absolute left-0 top-[7px] h-[11px] w-[11px] rounded-full border-2 border-rose-500 bg-rose-500" />
              <div className="grid gap-2 lg:grid-cols-[230px_minmax(0,1fr)] lg:gap-8">
                <h4 className="text-base font-semibold leading-7 text-zinc-900 dark:text-zinc-100">Where I fit today</h4>
                <p className="max-w-3xl text-[15px] leading-7 text-zinc-600 sm:text-base dark:text-zinc-300">These experiences have clarified what I enjoy most: talking with people, understanding their business challenges, and <strong className="font-semibold text-zinc-900 dark:text-zinc-100">turning data into useful insights</strong>. I value the technical work that makes analysis possible, but my strongest motivation comes from connecting that work to decisions and outcomes.</p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
