import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-24">
      {/* Hero */}
      <div className="text-center mb-20">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
          AI History in the Making
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-4">
          Documenting the fastest technological revolution in human history.
        </p>
        <p className="text-gray-500 max-w-xl mx-auto">
          A living document tracking milestones, open questions, and how fast they resolve. 
          Things we debated months ago are already settled. We&apos;re watching fast-forward happen.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-20">
        <Link
          href="/timeline"
          className="group rounded-xl border border-gray-800 bg-gray-900/50 p-8 transition-all hover:border-blue-500/50 hover:bg-gray-900/80"
        >
          <div className="text-3xl mb-4">📅</div>
          <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
            Timeline
          </h2>
          <p className="text-gray-400 text-sm">
            Every major AI event from 2022 to now — model launches, lab formations, 
            funding rounds, policy shifts, and cultural inflection points.
          </p>
        </Link>

        <Link
          href="/questions"
          className="group rounded-xl border border-gray-800 bg-gray-900/50 p-8 transition-all hover:border-purple-500/50 hover:bg-gray-900/80"
        >
          <div className="text-3xl mb-4">🔮</div>
          <h2 className="text-xl font-semibold mb-2 group-hover:text-purple-400 transition-colors">
            Open Questions
          </h2>
          <p className="text-gray-400 text-sm">
            The big debates — what&apos;s resolved, what&apos;s still open, and how fast 
            the answers are arriving. Inspired by Dwarkesh Patel&apos;s format.
          </p>
        </Link>
      </div>

      {/* Pull quote */}
      <div className="border-l-2 border-purple-500 pl-6 py-2 mb-16">
        <p className="text-lg text-gray-300 italic">
          &ldquo;I wonder things and they get resolved so fast that it feels like 
          we should be documenting this historic time in history.&rdquo;
        </p>
      </div>

      {/* Contribute */}
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-3">This is open source</h3>
        <p className="text-gray-400 text-sm mb-4">
          Submit a PR to add events, update questions, or correct the record. 
          All data lives in simple JSON files.
        </p>
        <a
          href="https://github.com/Deva-me-AI/AI-History-in-the-Making"
          className="inline-flex items-center gap-2 rounded-lg bg-gray-800 px-5 py-2.5 text-sm font-medium text-gray-200 transition-colors hover:bg-gray-700"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub →
        </a>
      </div>
    </div>
  );
}
