export default function OpenSourceBanner() {
  return (
    <div className="border-b border-white/5 bg-gradient-to-r from-indigo-950/30 via-purple-950/20 to-pink-950/30">
      <div className="mx-auto max-w-5xl px-6 py-2 flex items-center justify-center gap-2 text-xs">
        <span className="inline-flex h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
        <span className="text-gray-400">Open source — debates &amp; discussions happen on GitHub</span>
        <a
          href="https://github.com/Deva-me-AI/AI-History-in-the-Making"
          className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors ml-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contribute →
        </a>
      </div>
    </div>
  );
}
