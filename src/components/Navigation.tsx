"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/timeline", label: "Timeline" },
  { href: "/questions", label: "Questions" },
  { href: "/debates", label: "Community" },
  { href: "/meta", label: "About" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50">
      <div className="mx-auto mt-3 flex w-[min(1040px,calc(100%-2rem))] items-center justify-between rounded-2xl border border-white/10 bg-black/45 px-4 py-2.5 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:px-6">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-lg">⏳</span>
          <span className="text-sm font-semibold tracking-tight text-gray-200 group-hover:text-white transition-colors">
            AI History
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative rounded-md px-3 py-1.5 text-[13px] font-medium transition-all ${
                pathname === link.href
                  ? "text-white"
                  : "text-gray-500 hover:text-gray-300"
              }`}
            >
              {pathname === link.href && (
                <span className="absolute inset-0 rounded-md bg-white/[0.06]" />
              )}
              <span className="relative">{link.label}</span>
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="p-1 text-gray-400 transition-colors hover:text-white md:hidden"
          aria-label="Toggle menu"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            {open ? (
              <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" />
            ) : (
              <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="mx-auto mt-2 w-[min(1040px,calc(100%-2rem))] rounded-2xl border border-white/10 bg-black/80 px-4 py-3 backdrop-blur-xl md:hidden sm:px-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`block rounded-md px-3 py-2 text-sm transition-all ${
                pathname === link.href
                  ? "text-white bg-white/[0.06]"
                  : "text-gray-500 hover:text-gray-300"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
