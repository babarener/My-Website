export default function Connect() {
  return (
    <section
      id="connect"
      className="scroll-mt-28 sm:scroll-mt-32 w-full max-w-screen-xl mx-auto px-6 sm:px-10 py-20 text-center"
    >
      {/* 顶部标题 */}
      <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
        Let’s connect!
      </h2>

      {/* 简介文字 */}
      <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-10 max-w-2xl mx-auto leading-relaxed">
        If you're interested in my story and still think I could possibly strengthen your team,
        please contact me! Looking forward to any opportunities.
      </p>

      {/* 联系方式图标行 */}
      <div className="flex flex-wrap justify-center gap-10">

        {/* Address */}
        <div className="flex flex-col items-center">
        <div className="h-12 w-12 flex items-center justify-center rounded-full
                        bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400
                        shadow-sm mb-2">
            {/* location pin icon */}
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
             <path d="M12 21s8-7.6 8-13a8 8 0 1 0-16 0c0 5.4 8 13 8 13Z" />
             <circle cx="12" cy="8.5" r="2.5" />
            </svg>
          </div>
          <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">Waterloo, ON</span>
        </div>

        {/* Phone */}
        <div className="flex flex-col items-center">
          <div className="h-12 w-12 flex items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 shadow-sm mb-2">
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M22 16.92V21a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3 5.18 2 2 0 0 1 5 3h4.09a1 1 0 0 1 1 .75l1.14 5a1 1 0 0 1-.29.95l-2.2 2.2a16 16 0 0 0 6.34 6.34l2.2-2.2a1 1 0 0 1 .95-.29l5 1.14a1 1 0 0 1 .75 1Z" />
            </svg>
          </div>
          <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
            +1 (226) 789-3992
          </span>
        </div>

        {/* Email */}
        <a
          href="mailto:xbo@uwaterloo.ca"
          className="flex flex-col items-center hover:scale-105 transition-transform"
        >
          <div className="h-12 w-12 flex items-center justify-center rounded-full bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 shadow-sm mb-2">
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M22 6 12 13 2 6" />
              <rect x="2" y="6" width="20" height="12" rx="2" ry="2" />
            </svg>
          </div>
          <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">Email</span>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/babarener"
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center hover:scale-105 transition-transform"
        >
          <div className="h-12 w-12 flex items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 shadow-sm mb-2">
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="currentColor"
            >
              <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.02c-3.2.7-3.87-1.54-3.87-1.54-.53-1.36-1.29-1.72-1.29-1.72-1.06-.73.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.79 2.73 1.27 3.4.97.11-.75.41-1.27.75-1.56-2.55-.29-5.23-1.27-5.23-5.64 0-1.25.45-2.27 1.19-3.07-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.17 1.18a10.9 10.9 0 0 1 5.77 0c2.19-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.11 3.04.74.8 1.19 1.82 1.19 3.07 0 4.39-2.69 5.34-5.25 5.62.42.36.8 1.06.8 2.14v3.17c0 .31.21.68.8.56A10.99 10.99 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5Z" />
            </svg>
          </div>
          <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">GitHub</span>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/frank-xinyu-bo-27046627b"
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center hover:scale-105 transition-transform"
        >
          <div className="h-12 w-12 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 shadow-sm mb-2">
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="currentColor"
            >
              <path d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5v-14c0-2.8-2.2-5-5-5zm-11.5 20h-2.9v-9.9h2.9v9.9zm-1.5-11.3c-1 0-1.7-.8-1.7-1.7s.8-1.7 1.7-1.7 1.7.8 1.7 1.7-.7 1.7-1.7 1.7zm13 11.3h-2.9v-4.7c0-1.1 0-2.6-1.6-2.6s-1.9 1.2-1.9 2.5v4.8h-2.9v-9.9h2.8v1.3h.1c.4-.7 1.3-1.5 2.7-1.5 2.9 0 3.4 1.9 3.4 4.3v5.8z" />
            </svg>
          </div>
          <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">LinkedIn</span>
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/babababarener"
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center hover:scale-105 transition-transform"
        >
          <div className="h-12 w-12 flex items-center justify-center rounded-full bg-rose-100 dark:bg-rose-900/40 text-rose-600 dark:text-rose-400 shadow-sm mb-2">
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="currentColor"
            >
              <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zM12 8c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4zm6.5-2c.8 0 1.5.7 1.5 1.5S19.3 9 18.5 9 17 8.3 17 7.5 17.7 6 18.5 6z" />
            </svg>
          </div>
          <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">Instagram</span>
        </a>
      </div>
    </section>
  );
}



