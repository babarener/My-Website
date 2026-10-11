type SkillGroup = {
  title: string;
  subtitle: string;
  collaboration?: string[];
  workflow?: string[];
  items: string[];
};

const GROUPS: SkillGroup[] = [
  {
    title: "Business & collaboration",
    subtitle: "Connect people, resources, and delivery.",
    collaboration: ["Clarify ambiguous requests", "Connect the right people, data & resources", "Coordinate the work through delivery"],
    items: ["Market Research", "Pain Point Discovery", "Client Relations", "Leadership", "Product", "Product–Market Fit", "KPI Tracking", "CRM", "SEO"],
  },
  {
    title: "Data & analytics",
    subtitle: "From a question to an actionable result.",
    workflow: ["Frame", "Prepare", "Analyze", "Communicate"],
    items: ["Experiment Design", "SQL", "Snowflake", "pandas", "NumPy", "Regression", "Classification", "A/B Testing", "scikit-learn", "PyTorch", "TensorFlow", "Power BI", "Report Automation", "ML Pipelines", "Azure", "Git"],
  },
  {
    title: "Programming languages",
    subtitle: "Put it into practice.",
    items: ["Python", "SQL", "R", "C", "C++", "Bash", "TypeScript", "JavaScript", "HTML", "CSS"],
  },
];

function SkillList({ items, label }: { items: string[]; label: string }) {
  return (
    <ul className="flex flex-wrap content-start gap-2" aria-label={label}>
      {items.map((item) => (
        <li key={item} className="rounded-md bg-zinc-100 px-2.5 py-1.5 text-[13px] leading-5 text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">{item}</li>
      ))}
    </ul>
  );
}

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="scroll-mt-28 rounded-3xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950 sm:scroll-mt-32">
      <div className="px-6 py-9 sm:px-10 sm:py-12 lg:px-14">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end sm:gap-8">
          <div>
            <p className="text-[10px] uppercase tracking-[0.22em] text-teal-800 dark:text-teal-300">Business meets analysis</p>
            <h2 id="skills-heading" className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-100">Skills &amp; Tools</h2>
          </div>
          <p className="max-w-xs text-sm leading-6 text-zinc-500 dark:text-zinc-400">From understanding a business question to working with the data behind it.</p>
        </div>
        <div className="mt-8 border-t border-zinc-200 dark:border-zinc-800">
          {GROUPS.map((group, index) => (
            <div key={group.title} className="grid gap-5 border-b border-zinc-200 py-7 last:border-b-0 last:pb-0 lg:grid-cols-[310px_minmax(0,1fr)] lg:gap-10 dark:border-zinc-800">
              <div className="flex items-start gap-4">
                <span aria-hidden="true" className="mt-1 text-xs tabular-nums text-teal-700 dark:text-teal-400">0{index + 1}</span>
                <div>
                  <h3 className="text-base font-medium text-zinc-900 sm:text-lg dark:text-zinc-100">{group.title}</h3>
                  <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{group.subtitle}</p>
                </div>
              </div>
              <div>
                {group.collaboration && (
                  <div className="grid gap-5 sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] sm:gap-6">
                    <div>
                      <h4 className="mb-3 text-xs font-medium tracking-wide text-teal-800 dark:text-teal-300">From request to delivery</h4>
                      <ul aria-label="From request to delivery" className="space-y-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
                        {group.collaboration.map((item) => (
                          <li key={item} className="flex items-start gap-2.5">
                            <span aria-hidden="true" className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-teal-600 dark:bg-teal-400" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="border-t border-zinc-200 pt-5 sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0 dark:border-zinc-800">
                      <h4 className="mb-3 text-xs font-medium tracking-wide text-teal-800 dark:text-teal-300">Business &amp; market</h4>
                      <SkillList items={group.items} label="Business and market skills" />
                    </div>
                  </div>
                )}
                {group.workflow && (
                  <ol aria-label="Analytical workflow" className="mb-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-teal-800 sm:gap-x-3 sm:text-sm dark:text-teal-300">
                    {group.workflow.map((step, i) => (
                      <li key={step} className="inline-flex items-center gap-2 sm:gap-3">
                        {i > 0 && <span aria-hidden="true" className="text-zinc-400">→</span>}
                        {step}
                      </li>
                    ))}
                  </ol>
                )}
                {!group.collaboration && <SkillList items={group.items} label={group.title} />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
