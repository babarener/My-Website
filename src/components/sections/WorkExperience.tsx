"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const experiences = [
  {
    "company": "Northbridge Financial",
    "short": "Northbridge",
    "role": "Advanced Analytics",
    "date": "Jan 2026 — Present",
    "summary": "Work closely with Underwriting and Claims to refine business processes, investigate loss drivers, identify areas for underwriting review, and explore opportunities for pricing improvement and subrogation.\n\nUse data to uncover patterns and provide business leaders with evidence and actionable insights to support their decisions.",
    "items": [
      [
        "Business partnership",
        "Collaborate across departments to understand their work and analytical needs."
      ],
      [
        "Cross-team collaboration",
        "Partner with Data Governance, BI & V, Claims, and Underwriting to clarify data definitions, resolve data issues, and develop outputs that meet business needs."
      ],
      [
        "Commercial fire loss analysis",
        "Analyze ten years of commercial fire losses across industries and portfolios. Align loss and premium coverage across underwriting systems, examine loss-ratio trends, and connect losses with exposures to identify areas for underwriting review."
      ],
      [
        "Process improvement",
        "Support SAS decommissioning by replacing SAS data extraction and manual Excel report preparation with SQL queries in Snowflake and automated data processing and report generation in Python. Reduce a multi-step workflow that took a full day to a one-click process that handles special cases and produces the final, fully formatted Excel report in 30 seconds."
      ],
      [
        "Homeowner inspection prioritization",
        "Combine historical claims with in-force policy data to analyze property characteristics, claim concentration, and loss severity. Provide direction to the Risk department on inspection priorities, helping focus resources on high-risk properties."
      ]
    ],
    "tags": [
      "SQL",
      "Python",
      "Snowflake",
      "Power BI"
    ],
    "logo": "/media/WorkExperience/northbridge.png",
    "highlights": [
      "loss drivers",
      "evidence and actionable insights",
      "ten years",
      "connect losses with exposures",
      "SAS decommissioning",
      "a full day",
      "one-click",
      "30 seconds",
      "high-risk properties"
    ]
  },
  {
    "company": "Henkel",
    "short": "Henkel",
    "role": "Business Intelligence Intern",
    "date": "Sep 2024 — Apr 2025",
    "summary": "Work with global and regional teams to understand reporting needs and turn business data into clear, usable insights.\n\nSupport the BI Manager with interactive Power BI dashboards and Python/SQL data pipelines, helping teams monitor performance, investigate pricing opportunities, and use consistent information in their decisions.",
    "items": [
      [
        "Global reporting",
        "Partnered with global teams to build an executive-level Power BI suite, unifying data from 30+ countries for cleaner, faster insights."
      ],
      [
        "Workflow automation",
        "Automated Python/SQL ETL pipelines with refresh and QA checks—saving 12+ hrs/month and boosting dashboard adoption by ~30%."
      ],
      [
        "Pricing insight",
        "Designed regional views that uncovered a $15 M pricing gap, directly shaping strategy."
      ],
      [
        "User adoption",
        "Led global onboarding for 200+ analysts & sales managers to speed up workflow adoption."
      ]
    ],
    "tags": [
      "Power BI",
      "Python",
      "SQL"
    ],
    "logo": "/media/WorkExperience/henkel.png",
    "highlights": [
      "reporting needs",
      "clear, usable insights",
      "30+ countries",
      "12+ hrs/month",
      "~30%",
      "$15 M pricing gap",
      "200+ analysts & sales managers"
    ]
  },
  {
    "company": "SwiftWellness",
    "short": "SwiftWellness",
    "role": "Co-Founder & CEO",
    "date": "Oct 2021 — Apr 2025",
    "summary": "Build a practical understanding of how a business works through hands-on experience in customer discovery, market research, product development, and marketing.\n\nLearn how to understand customer needs, assess market opportunities, and turn feedback into product and business decisions.",
    "items": [
      [
        "Customer discovery",
        "Secured 30+ customer commitments through demos and feedback, kickstarting recurring revenue."
      ],
      [
        "Marketing automation",
        "Built AI-assisted marketing workflows that cut campaign time by 50%+ and doubled content output."
      ],
      [
        "Digital growth",
        "Drove SEO & analytics growth—traffic ↑35%, engagement ↑25%."
      ],
      [
        "Funding & partnerships",
        "Raised $30K+ in funding and partnerships for product expansion."
      ],
      [
        "Product development",
        "Turned market research insights into two key feature rollouts."
      ]
    ],
    "tags": [
      "Product",
      "Marketing",
      "Leadership"
    ],
    "logo": "/media/WorkExperience/swift_wellness_logo.jpg",
    "highlights": [
      "practical understanding",
      "customer needs",
      "market opportunities",
      "30+ customer commitments",
      "50%+",
      "$30K+",
      "two key feature rollouts"
    ]
  },
  {
    "company": "UWaterloo & Microsoft",
    "short": "WE Accelerate",
    "role": "Team Lead",
    "date": "Jan 2024 — Apr 2024",
    "summary": "Leading a team to explore machine learning for fraud-message detection.",
    "items": [
      [
        "Cloud foundations",
        "Completed Microsoft Azure Fundamentals (cloud platform) and Azure AI Fundamentals (ML model training) tracks."
      ],
      [
        "Fraud detection",
        "Led a team to propose an integrable fraud-message detection system for messaging apps, surfacing risk explanations to users."
      ],
      [
        "Machine learning",
        "Designed and implemented an ML training pipeline to detect scam patterns; coordinated data prep, experimentation, and evaluation."
      ],
      [
        "Team delivery",
        "Owned project planning: decomposed goals into clear objectives, assigned tasks, set cadence, and unblocked teammates when issues arose."
      ]
    ],
    "tags": [
      "Azure",
      "Machine Learning",
      "Teamwork"
    ],
    "logo": "/media/WorkExperience/uwicon.png",
    "highlights": [
      "Azure Fundamentals",
      "Azure AI Fundamentals",
      "ML training pipeline",
      "clear objectives"
    ]
  }
];

function HighlightedText({ text, phrases }: { text: string; phrases: string[] }) {
  const segments: { text: string; highlighted: boolean }[] = [];
  let cursor = 0;
  while (cursor < text.length) {
    let next = -1;
    let match = "";
    for (const phrase of phrases) {
      const index = text.indexOf(phrase, cursor);
      if (index !== -1 && (next === -1 || index < next || (index === next && phrase.length > match.length))) {
        next = index;
        match = phrase;
      }
    }
    if (next === -1) {
      segments.push({ text: text.slice(cursor), highlighted: false });
      break;
    }
    if (next > cursor) segments.push({ text: text.slice(cursor, next), highlighted: false });
    segments.push({ text: match, highlighted: true });
    cursor = next + match.length;
  }
  return <>{segments.map((segment, index) => segment.highlighted
    ? <strong key={index} className="font-semibold text-zinc-900 dark:text-zinc-100">{segment.text}</strong>
    : segment.text)}</>;
}

export default function WorkExperience() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const selected = experiences[active];
  const select = (index: number, focus = false) => {
    const next = (index + experiences.length) % experiences.length;
    setActive(next);
    tabs.current[next]?.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "auto" });
    if (focus) tabs.current[next]?.focus({ preventScroll: true });
  };
  const arrowClass = "flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 text-xl text-zinc-700 hover:border-teal-400 hover:text-teal-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-500 dark:border-zinc-700 dark:text-zinc-300 dark:hover:text-teal-300";
  return (
    <section id="work" aria-labelledby="work-heading" className="scroll-mt-28 sm:scroll-mt-32 overflow-hidden rounded-3xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <div className="px-6 py-8 sm:px-10 sm:py-12 lg:px-14">
        <div className="flex items-center justify-between gap-4">
          <h2 id="work-heading" className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-100">Work Experience</h2>
          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <span aria-live="polite" className="mr-2 hidden text-xs tabular-nums text-zinc-500 sm:inline dark:text-zinc-400">0{active + 1} / 0{experiences.length}</span>
            <button type="button" aria-label="Previous experience" className={arrowClass} onClick={() => select(active - 1)}>←</button>
            <button type="button" aria-label="Next experience" className={arrowClass} onClick={() => select(active + 1)}>→</button>
          </div>
        </div>

        <div role="tablist" aria-label="Companies" className="mt-7 flex gap-3 overflow-x-auto pt-2 border-b border-zinc-200 pb-px dark:border-zinc-800">
          {experiences.map((experience, index) => (
            <button key={experience.short} ref={(el) => { tabs.current[index] = el; }} type="button" role="tab" id={`work-tab-${index}`} aria-controls={`work-panel-${index}`} aria-selected={active === index} tabIndex={active === index ? 0 : -1}
              onClick={() => select(index)}
              onKeyDown={(event) => {
                if (["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) {
                  event.preventDefault();
                  select(event.key === "Home" ? 0 : event.key === "End" ? experiences.length - 1 : index + (event.key === "ArrowRight" ? 1 : -1), true);
                }
              }}
              className={`flex shrink-0 origin-bottom items-center gap-3 rounded-t-lg border-b-2 px-3 py-4 text-sm motion-safe:transition-transform motion-safe:duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-teal-500 sm:px-4 ${active === index ? "scale-[1.04] border-teal-600 bg-teal-50/70 font-semibold text-teal-800 dark:border-teal-400 dark:bg-teal-950/40 dark:text-teal-200" : "border-transparent text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"}`}>
              <span className="flex h-9 w-14 items-center justify-center rounded bg-white p-1"><Image src={experience.logo} alt="" width={56} height={36} className="h-full w-full object-contain" /></span>
              {experience.short}
            </button>
          ))}
        </div>

        {experiences.map((experience, index) => (
          <div key={experience.short} role="tabpanel" id={`work-panel-${index}`} aria-labelledby={`work-tab-${index}`} hidden={active !== index} tabIndex={0} className="rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-500"
            onTouchStart={(event) => { const t = event.touches[0]; touchStart.current = { x: t.clientX, y: t.clientY }; }}
            onTouchEnd={(event) => { const start = touchStart.current; touchStart.current = null; if (!start) return; const t = event.changedTouches[0]; const dx = t.clientX - start.x; const dy = t.clientY - start.y; if (Math.abs(dx) > 70 && Math.abs(dx) > Math.abs(dy) * 1.5) select(active + (dx < 0 ? 1 : -1)); }}>
            <div className="grid gap-8 pt-8 lg:min-h-[420px] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.55fr)] lg:gap-10">
              <div>
                <div className="mb-5 flex h-[76px] w-[140px] items-center justify-center rounded-lg bg-white p-2"><Image src={experience.logo} alt={`${experience.company} logo`} width={140} height={76} className="max-h-full max-w-full object-contain" /></div>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">{experience.date}</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-100">{experience.company}</h3>
                <p className="mt-2 text-sm font-semibold text-zinc-700 dark:text-zinc-300">{experience.role}</p>
                <div className="mt-4 max-w-md space-y-4 text-base leading-7 text-zinc-600 dark:text-zinc-300">{experience.summary.split("\n\n").map(paragraph => <p key={paragraph}><HighlightedText text={paragraph} phrases={experience.highlights} /></p>)}</div>
                <ul aria-label="Tools and skills" className="mt-6 flex flex-wrap gap-x-4 gap-y-2 border-t border-zinc-200 pt-4 text-xs text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">{experience.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
              </div>
              <div className="space-y-6 border-t border-zinc-200 pt-7 lg:border-l lg:border-t-0 lg:pl-9 lg:pt-1 dark:border-zinc-800">
                {experience.items.map(([title, text]) => <div key={title}><h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">{title}</h4><p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300"><HighlightedText text={text} phrases={experience.highlights} /></p></div>)}
              </div>
            </div>
          </div>
        ))}
        <p className="mt-6 text-xs text-zinc-500 sm:hidden dark:text-zinc-400">Swipe across the details or use the arrows · {selected.short}</p>
      </div>
    </section>
  );
}
