const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/frank-xinyu-bo-27046627b" },
  { label: "GitHub", href: "https://github.com/babarener" },
  { label: "Instagram", href: "https://www.instagram.com/babababarener" },
];

export default function Connect() {
  return (
    <section id="connect" aria-labelledby="connect-heading" className="scroll-mt-28 px-6 py-12 sm:scroll-mt-32 sm:px-10 sm:py-16 lg:px-14">
      <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-teal-800 dark:text-teal-300">Get in touch</p>
          <h2 id="connect-heading" className="mt-4 text-[38px] font-semibold leading-tight tracking-[-0.035em] text-zinc-900 sm:text-5xl lg:flex lg:min-h-[60px] lg:items-center dark:text-zinc-100">
            Let’s connect.
          </h2>
          <p className="mt-6 max-w-md text-base leading-7 text-zinc-600 dark:text-zinc-300">
            Have a role, a business challenge, or an idea in mind? I’d love to hear about it and explore how I could contribute.
          </p>
        </div>

        <div className="min-w-0">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-teal-800 dark:text-teal-300">The best way to reach me</p>
          <a href="mailto:frankxbo@gmail.com" className="group mt-4 inline-flex min-h-[44px] lg:min-h-[60px] max-w-full items-center gap-3 rounded-sm text-xl font-medium tracking-tight text-teal-800 underline-offset-8 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-600 sm:text-3xl dark:text-teal-300">
            frankxbo@gmail.com
            <span aria-hidden="true" className="text-lg transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none sm:text-2xl">↗</span>
          </a>

          <nav aria-label="Connect with me" className="mt-6 flex flex-wrap gap-x-6 gap-y-1">
            {SOCIAL_LINKS.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="inline-flex min-h-[44px] items-center gap-2 rounded-sm text-sm text-zinc-600 underline-offset-4 hover:text-teal-800 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-600 dark:text-zinc-300 dark:hover:text-teal-300">
                {link.label}<span aria-hidden="true" className="text-xs text-zinc-400">↗</span>
              </a>
            ))}
          </nav>
          <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-zinc-500 dark:text-zinc-400">
            <span>Waterloo, Ontario</span>
            <a href="tel:+12267893992" className="inline-flex min-h-[44px] items-center rounded-sm underline-offset-4 hover:text-zinc-900 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-600 dark:hover:text-zinc-100">+1 (226) 789-3992</a>
          </div>
        </div>
      </div>
    </section>
  );
}
