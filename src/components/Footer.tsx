export default function Footer() {
  return (
    <footer className="px-6 pb-8 pt-2 text-xs text-zinc-400 sm:px-10 lg:px-14 dark:text-zinc-500">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Frank Bo — Designed &amp; coded with care.</p>
        <a href="#about" className="inline-flex min-h-[44px] items-center gap-2 rounded-sm text-zinc-500 underline-offset-4 hover:text-teal-800 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-600 dark:text-zinc-400 dark:hover:text-teal-300">Back to top <span aria-hidden="true">↑</span></a>
      </div>
    </footer>
  );
}
