import Image from "next/image";

export default function Education() {
  return (
    <section id="education" aria-labelledby="education-heading" className="scroll-mt-28 sm:scroll-mt-32 rounded-3xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <div className="px-6 py-8 sm:px-10 sm:py-12 lg:px-14">
        <h2 id="education-heading" className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-100">Education</h2>

        <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-6">
          <Image src="/media/Education/uwicon.png" alt="University of Waterloo crest" width={64} height={64} className="h-14 w-14 shrink-0 object-contain sm:h-16 sm:w-16" />
          <div className="min-w-0 flex-1">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between lg:gap-8">
              <div>
                <h3 className="text-xl font-semibold tracking-tight text-zinc-900 sm:text-2xl dark:text-zinc-100">
                  <a href="https://uwaterloo.ca/" target="_blank" rel="noreferrer" className="rounded underline-offset-4 hover:text-rose-700 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose-500 dark:hover:text-rose-300">University of Waterloo</a>
                </h3>
                <p className="mt-2 text-lg font-medium text-zinc-800 dark:text-zinc-200">BMath, Data Science</p>
                <p className="mt-1 text-sm leading-6 text-zinc-500 dark:text-zinc-400">Minor in Combinatorics &amp; Optimization</p>
              </div>
              <div className="shrink-0 lg:pt-1 lg:text-right">
                <p className="text-sm font-medium tabular-nums text-zinc-600 dark:text-zinc-300">Sep 2022 <span className="mx-1 text-zinc-400">—</span> Dec 2027</p>
                <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">Expected graduation: Dec 2027</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-7 border-t border-zinc-200 pt-7 sm:mt-9 sm:grid-cols-[1.35fr_1fr] sm:gap-10 dark:border-zinc-800">
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">Selected coursework</h4>
            <ul className="mt-4 grid gap-x-6 gap-y-2 text-sm leading-6 text-zinc-700 lg:grid-cols-2 dark:text-zinc-300">
              <li>Regression &amp; Predictive Modeling</li>
              <li>Algorithms &amp; Data Structures</li>
              <li>Graph Theory</li>
              <li>OOP Design</li>
              <li className="text-zinc-500 dark:text-zinc-400">C++, Python, R</li>
            </ul>
          </div>
          <div className="border-t border-zinc-200 pt-6 sm:border-l sm:border-t-0 sm:pl-10 sm:pt-0 dark:border-zinc-800">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">Beyond the classroom</h4>
            <p className="mt-4 max-w-sm text-sm leading-7 text-zinc-700 dark:text-zinc-300">Strength Club, Tea Club, intramural basketball, and startup projects.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
