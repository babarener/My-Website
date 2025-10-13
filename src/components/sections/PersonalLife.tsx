"use client";

import React, { useEffect, useRef, useState } from "react";

type Media =
  | { type: "image"; src: string; alt?: string }
  | { type: "video"; src: string; poster?: string }
  | { type: "iframe"; src: string };

type Item = {
  id: string;
  title: string;
  subtitle?: string;
  blurb: string;
  media: Media;
};

const ITEMS: Item[] = [
  {
    id: "Powerlifting competition",
    title: "Powerlifting Enthusiast",
    subtitle: "Discipline • Perseverance • Passion",
    blurb:
      "I've loved sports for as long as I can remember—always running around  and trying every “sport” I could find. In junior high, I began formal track and field training, and over the years I explored everything from basketball, badminton to tennis, fencing, calisthenics, etc. A few years ago, I discovered powerlifting and immediately fell in love with it. I now train 20+ hours a week and compete regularly. Powerlifting has become a critical part of my life. Through years of training, I've learned far more than just strength—I've learned reflection, stay focused, persevere, endure, and manage my emotions. It become an essential part of my growth into adulthood and a defining force in how I approach challenges in life.",
    media: {
      type: "video",
      src: "/media/personal-life/lifting.mp4",
      poster: "",
    },
  },
  {
    id: "go",
    title: "The Game of Go",
    subtitle: "Calmness • Strategy • Flow",
    blurb:
      "Growing up in Asia, I was one of those kids who went to all kinds of extracurricular classes—music, fencing, Go, you name it. I must have learned at least five instruments, though most didn’t last beyond a few months😂. Go, however, is the one thing that stayed with me. I wasn't very good as a child, and there were years when I didn't play at all. But when I picked it up again in high school, I began to truly appreciate its depth. To play well, you have to quiet your thought and find stillness before the game, much like meditation. I’ve found this practice very helpful when I feel anxious or mentally blank. Go is about rhythm, strategy, and calculation—how every stone, placed dozens of moves ago can unexpectedly shift the entire flow of the board. I still enjoy playing now, spending sometimes on online platforms.",
    media: {
      type: "image",
      src: "/media/personal-life/go.jpg",
      alt: "Playing Go board",
    },
  },
  {
    id: "video",
    title: "日本の音楽(Japanese Music)",
    subtitle: "Subtle emotion • Cultural curiosity",
    blurb:
      "Back then (junior high), I was drawn to 80's Hong Kong music, which the melodies were graceful, soft, and often carried a quiet sense of storytelling that deeply moved me. Later, as the internet opened up, I discovered that many of those songs actually originated from Japan, which sparked my curiosity. I began listening to the Japanese versions and found them even more captivating—not only because the original singers conveyed the songs with deeper emotion, but also because there was something beautiful in not fully understanding the lyrics. That slight distance made me reflect on my own experiences. Now that I've started learning Japanese and can hold simple conversations, I've come to appreciate how subtle yet expressive the language is. Someday, I wish I could live and work in Japan for a while to experience that culture firsthand.",
    media: {
      type: "iframe",
      src: "https://www.youtube.com/embed/JZem5vnQ1ik",
    },
  },
  {
     id: "curiosity",
     title: "Curiosity & Exploration",
     subtitle: "Evyerything • openmindedness • learning",
     blurb:
       "Outside of training and work, I like keeping my curiosity alive. I often play basketball with friends and have joined intramural games almost every semester. I also enjoy reading books about the business world—not too technical, mostly biographies and analyses that connect historical trends with the enduring principles that keep resurfacing through change. Recently, I’ve been especially fascinated by large language models, blockchain systems & encryptos, and the evolution of AR technologies. I often find myself thinking about how these innovations might reshape social structures, human relationships, and the subtle ripple effects they could bring to our future. I'd love to get involved in real projects that explore these ideas, so, if you think my passion and background could contribute to your team, please reach out!! 👋",
     media: {
       type: "image",
       src: "/media/personal-life/past-present-future.jpg",
       alt: "past-present-future",
     },
   },
];

export default function PersonalLife() {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const root = scrollerRef.current;
    if (!root) return;
    const cards = Array.from(root.querySelectorAll<HTMLElement>("[data-card]"));
    const io = new IntersectionObserver(
      (entries) => {
        const vis = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (vis[0]) setActive(Number((vis[0].target as HTMLElement).dataset.index));
      },
      { root, threshold: 0.6, rootMargin: "0px -20% 0px -20%" }
    );
    cards.forEach((c) => io.observe(c));
    return () => io.disconnect();
  }, []);

  const scrollTo = (i: number) => {
    const el = scrollerRef.current?.querySelector<HTMLElement>(`[data-card][data-index="${i}"]`);
    el?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    setActive(i);
  };

  return (
    <section id="personal-life" className="scroll-mt-28 sm:scroll-mt-32">
      {/* === 外层容器：与 AboutMe 完全一致的对齐与样式 === */}
      <div className="relative w-full max-w-screen-xl mx-auto overflow-hidden rounded-3xl border border-zinc-200/70 dark:border-zinc-800/70 shadow-sm bg-white dark:bg-zinc-950">
        {/* 顶部花纹带（与 AboutMe 相同高度与风格） */}
        <div className="relative h-12 sm:h-14">
           <div className="absolute inset-0 bg-gradient-to-r from-rose-50 via-pink-50 to-fuchsia-50 dark:from-[#1b1419] dark:via-[#211620] dark:to-[#251a24]" />

          {/* 标题胶囊：精确居中在粉/白交界（与 AboutMe 一致做法） */}
          <div className="absolute left-4 sm:left-6 -bottom-6 flex items-center">
            <div className="inline-flex items-center gap-3 rounded-full bg-white/90 dark:bg-zinc-900/80 backdrop-blur px-4 py-2 shadow-md ring-1 ring-zinc-200/70 dark:ring-zinc-800/70">
              <span className="text-lg">🌿</span>
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100">Personal Life</h2>
            </div>
          </div>
        </div>

        {/* 内容主体（与 AboutMe 相同的内边距；顶部为标题悬浮预留） */}
        <div className="px-6 sm:px-10 pt-12 pb-8">
          {/* 滚动容器（外层包一层，放更“靠外”的箭头与渐隐遮罩） */}
          <div className="relative">
            {/* 左侧渐隐遮罩（不影响点击） */}
            <div className="pointer-events-none absolute inset-y-0 -left-1 w-10 sm:w-14 bg-gradient-to-r from-white/90 to-transparent dark:from-zinc-950/85 z-10" />
            {/* 右侧渐隐遮罩 */}
            <div className="pointer-events-none absolute inset-y-0 -right-1 w-10 sm:w-14 bg-gradient-to-l from-white/90 to-transparent dark:from-zinc-950/85 z-10" />

            {/* 左箭头（外侧悬浮，玻璃态 + 霓虹环） */}
            <button
              onClick={() => scrollerRef.current?.scrollBy({ left: -window.innerWidth, behavior: "smooth" })}
              className="hidden sm:flex absolute -left-8 top-[40%] -translate-y-1/2 z-20 h-11 w-11 items-center justify-center rounded-full bg-white/70 dark:bg-zinc-800/70 backdrop-blur ring-1 ring-pink-300/60 dark:ring-pink-400/30 shadow-lg hover:scale-110 hover:bg-pink-50/80 dark:hover:bg-zinc-700/80 transition"
              aria-label="Scroll left"
              type="button"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-5 w-5" fill="none">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
            </button>

            {/* 右箭头（外侧悬浮） */}
            <button
              onClick={() => scrollerRef.current?.scrollBy({ left: window.innerWidth, behavior: "smooth" })}
              className="hidden sm:flex absolute -right-8 top-[40%] -translate-y-1/2 z-20 h-11 w-11 items-center justify-center rounded-full bg-white/70 dark:bg-zinc-800/70 backdrop-blur ring-1 ring-pink-300/60 dark:ring-pink-400/30 shadow-lg hover:scale-110 hover:bg-pink-50/80 dark:hover:bg-zinc-700/80 transition"
              aria-label="Scroll right"
              type="button"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-5 w-5" fill="none">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </button>

            {/* 真正的滚动容器：给左右留一点内边距，避免内容贴边 */}
            <div
              ref={scrollerRef}
              className="overflow-x-auto snap-x snap-mandatory flex gap-0 pb-6 scroll-smooth px-2 sm:px-4"
            >
              {ITEMS.map((it, i) => (
                <article
                  key={it.id}
                  data-card
                  data-index={i}
                  className="min-w-full snap-center"
                >
                  <div className="mx-auto w-[96%] min-h-[320px] sm:min-h-[360px] rounded-2xl border border-zinc-200/70 dark:border-zinc-800/70 bg-white/80 dark:bg-zinc-900/60 shadow-sm">
                    {/* 左右各一半的布局 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center p-6">
                      {/* 左半：视频/图片/iframe */}
                      <div className="flex justify-center">
                        {it.media.type === "image" ? (
                          <img
                            src={it.media.src}
                            alt={("alt" in it.media && it.media.alt) || it.title}
                            className="w-full h-[280px] sm:h-[320px] object-cover rounded-xl"
                            loading="lazy"
                          />
                        ) : it.media.type === "iframe" ? (
                          <iframe
                            src={it.media.src}
                            title={it.title}
                            className="w-full h-[280px] sm:h-[320px] rounded-xl"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        ) : (
                          <video
                            src={it.media.src}
                            poster={it.media.poster}
                            controls
                            playsInline
                            className="w-full h-[280px] sm:h-[320px] rounded-xl object-cover"
                          />
                        )}
                      </div>

                      {/* 右半：标题 + 文本 */}
                      <div>
                        <h3 className="text-xl sm:text-2xl font-semibold">{it.title}</h3>
                        {it.subtitle && (
                          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                            {it.subtitle}
                          </p>
                        )}
                        <p className="mt-4 leading-7 text-zinc-700 dark:text-zinc-300">
                          {it.blurb}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>



          {/* 圆点指示器 */}
          <div className="flex items-center justify-center gap-2">
            {ITEMS.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                aria-label={`Go to card ${i + 1}`}
                className={[
                    "h-2.5 w-2.5 rounded-full transition-all duration-300 ease-out hover:scale-125",
                    active === i
                      ? "bg-violet-500 w-6 shadow-[0_0_8px_rgba(139,92,246,0.6)]"
                      : "bg-violet-300/50 hover:bg-violet-400/70",
                ].join(" ")}

              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
