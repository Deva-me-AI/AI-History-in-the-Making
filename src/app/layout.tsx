import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import OpenSourceBanner from "@/components/OpenSourceBanner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI History in the Making",
  description:
    "Documenting the fastest technological revolution in human history — milestones, predictions, and how fast open questions get resolved.",
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "AI History in the Making",
    description:
      "Documenting the fastest technological revolution in human history.",
    type: "website",
    url: "https://www.aihistoricunfolding.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI History in the Making",
    description: "Documenting the fastest technological revolution in human history.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-gray-950 text-gray-100 antialiased`}>
        <OpenSourceBanner />
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <footer className="border-t border-gray-800/50 py-10 text-center text-sm text-gray-500">
          <p className="mb-2">
            <span className="gradient-text font-medium">AI History in the Making</span> — A living, open-source document.
          </p>
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://github.com/Deva-me-AI/AI-History-in-the-Making"
              className="text-gray-500 hover:text-gray-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <span className="text-gray-700">·</span>
            <a
              href="https://github.com/Deva-me-AI/AI-History-in-the-Making/issues/new"
              className="text-gray-500 hover:text-gray-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open an Issue
            </a>
            <span className="text-gray-700">·</span>
            <a
              href="https://github.com/Deva-me-AI/AI-History-in-the-Making/blob/main/CONTRIBUTING.md"
              className="text-gray-500 hover:text-gray-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contribute
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
