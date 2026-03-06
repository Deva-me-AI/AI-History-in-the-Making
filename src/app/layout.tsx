import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import OpenSourceBanner from "@/components/OpenSourceBanner";

const geist = Geist({ subsets: ["latin"], variable: "--font-inter" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "AI History in the Making",
  description:
    "Documenting the fastest technological revolution in human history — milestones, predictions, and how fast open questions get resolved.",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geist.variable} ${geistMono.variable} font-sans bg-black text-zinc-100 antialiased`}>
        <div className="mesh-bg" aria-hidden="true" />
        <div className="dot-grid" aria-hidden="true" />
        <OpenSourceBanner />
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <footer className="mx-auto mt-20 w-full max-w-6xl border-t border-white/10 px-6 py-12 sm:px-8">
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <p className="text-sm text-zinc-300">AI History in the Making</p>
              <p className="mt-2 max-w-md text-sm text-zinc-500">
                A living archive of milestones, open questions, and turning points in AI.
              </p>
            </div>
            <div className="flex flex-wrap items-start gap-4 text-sm text-zinc-400 sm:justify-end">
              <a href="https://github.com/Deva-me-AI/AI-History-in-the-Making" className="transition-colors hover:text-zinc-200" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://github.com/Deva-me-AI/AI-History-in-the-Making/issues/new/choose" className="transition-colors hover:text-zinc-200" target="_blank" rel="noopener noreferrer">Open Issue</a>
              <a href="https://github.com/Deva-me-AI/AI-History-in-the-Making/blob/main/CONTRIBUTING.md" className="transition-colors hover:text-zinc-200" target="_blank" rel="noopener noreferrer">Contribute</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
