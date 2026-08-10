// app/layout.tsx  (Server Component — 不要加 "use client")
import "./globals.css";
import "@fontsource/inter";

import Providers from "./providers";
import ThemeToggle from "@/components/ThemeToggle";
import Navbar from "@/components/Navbar"; // <- 客户端组件
import Footer from "@/components/Footer"; // 可选：也可直接写在此文件里

export const metadata = {
  title: "Frank Bo - Portfolio",
  description: "Personal portfolio website",
  icons: {
    icon: [{ url: "/icon.png", type: "image/png", sizes: "512x512" }],
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 antialiased">
        <Providers>
          {/* 头部固定在页面顶部，内容容器放在里面 */}
          <Navbar />

          {/* 给主内容留出顶部内边距，避免被 fixed Navbar 遮挡 */}
          <div className="mx-auto max-w-screen-xl px-3 sm:px-6">

            <main className="pt-6 sm:pt-10 pb-10">{children}</main>

            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}


