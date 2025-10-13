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
    icon: [
      { url: "/avatar.jpg", type: "image/jpeg", sizes: "32x32" },
      { url: "/avatar.jpg", type: "image/jpeg", sizes: "192x192" },
      { url: "/avatar.jpg", type: "image/jpeg", sizes: "any" },
    ],
    // 可选：iOS 桌面图标，若有 180x180 版本就放它
    apple: "/avatar.jpg",
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
          <div className="mx-auto max-w-screen-xl px-4 sm:px-6">

            <main className="pt-[7.5rem] sm:pt-[8.5rem] pb-10">{children}</main>

            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}


