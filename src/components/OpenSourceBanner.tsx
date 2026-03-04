export default function OpenSourceBanner() {
  return (
    <div className="border-b border-gray-800 bg-gradient-to-r from-blue-950/40 via-purple-950/40 to-pink-950/40">
      <div className="mx-auto max-w-5xl px-6 py-2.5 flex items-center justify-center gap-3 text-sm">
        <span className="text-gray-400">🌐 This is an open-source project.</span>
        <a
          href="https://github.com/Deva-me-AI/AI-History-in-the-Making"
          className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contribute on GitHub →
        </a>
      </div>
    </div>
  );
}
