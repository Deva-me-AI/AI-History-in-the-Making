import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI History in the Making",
  description:
    "Documenting the fastest technological revolution in human history — milestones, predictions, and how fast open questions get resolved.",
  openGraph: {
    title: "AI History in the Making",
    description:
      "Documenting the fastest technological revolution in human history.",
    type: "website",
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
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <footer className="border-t border-gray-800 py-8 text-center text-sm text-gray-500">
          <p>
            AI History in the Making — A living document.{" "}
            <a
              href="https://github.com/Deva-me-AI/AI-History-in-the-Making"
              className="text-blue-400 hover:text-blue-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contribute on GitHub
            </a>
          </p>
        </footer>
      </body>
    </html>
  );
}
