"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const stories = [
  {
    id: "powerlifting", label: "Powerlifting", title: "Powerlifting",
    subtitle: "Understanding myself. Finding my pace.",
    caption: "On the platform", kind: "video",
    paragraphs: [
      "After trying more than a dozen sports, powerlifting is the one I’ve trained in consistently for years, and the one where I don’t see a finish line.",
      "I started with more confidence than understanding. I thought I was naturally gifted, trained without much thought, and rarely listened to advice. Eventually, a lower back injury left me struggling to even roll over in bed for months.",
      "As I learned more and began competing, I met people far stronger and more experienced than me. Seeing how quickly others progressed turned that early confidence into self-doubt. I pushed harder to catch up, often beyond what I could recover from, and spent long stretches working hard without moving forward.",
      "Over the years, my biggest gain has been a better understanding of myself. I’ve learned to train with purpose, recognize my own rate of progress, and follow my own pace without letting every comparison change my direction. I can’t control how quickly someone else improves, but I can control how I approach my own training.",
      "Today, training and competing are an integral part of my life, with around 20 hours a week devoted to training and everything around it. Progress is often slow and rarely linear, but it’s still happening. I’m grateful I stayed with it when I doubted myself most. As long as I keep learning and don’t give up, I trust that the overall direction will be forward, even through the ups and downs.",
    ],
  },
  {
    id: "go", label: "Go", title: "The Game of Go",
    subtitle: "Returning to an old game with a different mindset.",
    caption: "Back at the board", kind: "image",
    paragraphs: [
      "I learned Go as a child and spent much of my school holidays at a Go day camp. Back then, I was mostly there to play. I didn’t really know how to focus my learning, and after years of playing, I reached an amateur 3-dan level before stopping when I started middle school.",
      "Nearly a decade later, I realized that outside of lifting, I didn’t have another lasting hobby. Short videos and TV filled the gaps, but I quickly grew restless. Eventually, I found my way back to Go through online platforms.",
      "I was surprised by how much the learning experience had changed. Where I once worked through books, following numbered moves and variations on a printed board, I could now explore seemingly endless, well-organized problem libraries and use AI feedback to understand different approaches. Returning also showed me how much I had changed. I was learning with more focus and picking things up much faster. Before long, I caught up with and moved beyond my childhood level.",
      "Now, I often solve life-and-death problems on the subway or play a game during a break. It’s fun. Even after all these years, I’m still surprised by moves that turn a seemingly hopeless position into a way out.",
      "There’s an old Go saying: “Your opponent’s key point is your own.” Before choosing a move, consider where your opponent most wants to play. Often, that is exactly where you should play yourself.",
      "That habit of looking from the other side has stayed with me beyond the board. Whenever I’m given a task, I first make sure I understand what the other person needs and what they’re trying to achieve.",
    ],
  },
  {
    id: "music", label: "Japanese Music", title: "日本の音楽",
    subtitle: "An unexpected connection through music.",
    caption: "A song to listen to", kind: "iframe",
    paragraphs: [
      "Growing up, the views around me shaped a negative impression of Japan, and for a while, I had little interest in learning about it.",
      "That started to change in high school, when I became hooked on Hong Kong music from the 1980s. I loved the graceful melodies, often drawn in by the opening notes alone. Later, I discovered that many of my favourites were adaptations of Japanese songs with Cantonese lyrics. Naturally, I went looking for the originals, and they led me to more music I loved.",
      "I was truly impressed. I loved the sound of the language and the subtle emotions in the songs, which felt difficult to capture in translation. I even started learning Japanese so I could sing them myself.",
      "Today, Japanese songs make up around 80% of my playlist, and I sing along all the time when I’m driving. What began with a familiar melody opened up an interest in a language and culture I once knew very little about. Someday, I’d love to live and work in Japan for a while and experience it firsthand.",
    ],
  },
];

export default function PersonalLife() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const story = stories[active];

  return (
    <section id="personal-life" aria-labelledby="personal-life-heading" className="scroll-mt-28 rounded-3xl border border-zinc-200 bg-[#faf9f6] text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 sm:scroll-mt-32">
      <div className="px-6 py-9 sm:px-10 sm:py-12 lg:px-14">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-[10px] uppercase tracking-[0.22em] text-teal-800 dark:text-teal-300">Away from the desk</p>
            <h2 id="personal-life-heading" className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Personal Life</h2>
          </div>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">Three things I keep coming back to.</p>
        </div>

        <div role="tablist" aria-label="Personal interests" className="mt-8 grid grid-cols-3 gap-2 border-b border-zinc-300/70 pb-5 sm:gap-4 dark:border-zinc-700">
          {stories.map((item, i) => (
            <button key={item.id} ref={(el) => { tabs.current[i] = el; }} type="button" role="tab" id={`life-tab-${item.id}`} aria-selected={active === i} aria-controls={`life-panel-${item.id}`} tabIndex={active === i ? 0 : -1}
              onClick={() => setActive(i)}
              onKeyDown={(event) => {
                let next = i;
                if (event.key === "ArrowRight") next = (i + 1) % stories.length;
                else if (event.key === "ArrowLeft") next = (i + stories.length - 1) % stories.length;
                else if (event.key === "Home") next = 0;
                else if (event.key === "End") next = stories.length - 1;
                else return;
                event.preventDefault(); setActive(next); tabs.current[next]?.focus();
              }}
              className={`rounded-xl px-3 py-3 text-left transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-600 sm:px-5 sm:py-4 ${active === i ? "bg-teal-900 text-white dark:bg-teal-800" : "text-zinc-600 hover:bg-zinc-200/50 dark:text-zinc-300 dark:hover:bg-zinc-800"}`}>
              <span className={`block text-[10px] tracking-widest ${active === i ? "text-teal-200" : "text-zinc-400"}`}>0{i + 1}</span>
              <span className="mt-1.5 block text-xs font-medium sm:text-base">{item.label}</span>
            </button>
          ))}
        </div>

        <div key={story.id} role="tabpanel" id={`life-panel-${story.id}`} aria-labelledby={`life-tab-${story.id}`} tabIndex={0} className="mt-8 grid items-start gap-8 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-600 lg:mt-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <div className="lg:sticky lg:top-28">
            <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">0{active + 1} / Personal stories</p>
            <h3 className="mt-3 font-serif text-4xl leading-tight tracking-tight sm:text-5xl" lang={story.id === "music" ? "ja" : undefined}>{story.title}</h3>
            {story.id === "music" && <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">Japanese Music</p>}
            <p className="mt-4 max-w-sm text-base leading-7 text-teal-900 dark:text-teal-200">{story.subtitle}</p>
            <figure className="mt-7">
              <div className="overflow-hidden rounded-2xl bg-zinc-900">
                {story.kind === "video" ? (
                  <video controls playsInline preload="metadata" src="/media/personal-life/lifting.mp4" poster="/media/personal-life/lifting-poster.jpg" className="aspect-[4/3] w-full object-contain" aria-label="Powerlifting competition video" />
                ) : story.kind === "image" ? (
                  <Image src="/media/personal-life/go.jpg" alt="A game of Go" width={900} height={900} className="h-auto w-full" />
                ) : (
                  <iframe src="https://www.youtube.com/embed/JZem5vnQ1ik" title="Japanese music video" className="aspect-video w-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                )}
              </div>
              <figcaption className="mt-3 text-xs text-zinc-500 dark:text-zinc-400">{story.caption}</figcaption>
            </figure>
          </div>
          <div className="space-y-5 text-[15px] leading-[1.85] text-zinc-600 dark:text-zinc-300">
            {story.paragraphs.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
          </div>
        </div>
      </div>
    </section>
  );
}
