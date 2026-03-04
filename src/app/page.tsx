import Link from "next/link";

const REPO = "https://github.com/Deva-me-AI/AI-History-in-the-Making";

export default function Home() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-24">
      {/* Hero */}
      <div className="text-center mb-24 hero-glow">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-xs text-green-400 mb-8">
          🔓 Open Source — Community Driven
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text leading-tight pb-2">
          AI History in the Making
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-4">
          Documenting the fastest technological revolution in human history.
        </p>
        <p className="text-gray-500 max-w-xl mx-auto mb-8">
          A living document tracking milestones, open questions, and how fast they resolve. 
          Things we debated months ago are already settled. We&apos;re watching fast-forward happen.
        </p>
        <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
          <a
            href={REPO}
            className="inline-flex items-center gap-2 rounded-lg bg-white text-gray-900 px-5 py-2.5 text-sm font-semibold transition-all hover:bg-gray-200 hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            ⭐ Star on GitHub
          </a>
          <a
            href={`${REPO}/blob/main/CONTRIBUTING.md`}
            className="inline-flex items-center gap-2 rounded-lg border border-gray-700 px-5 py-2.5 text-sm font-medium text-gray-300 transition-all hover:border-gray-500 hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contribute →
          </a>
        </div>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-24">
        <Link
          href="/timeline"
          className="group card-hover rounded-xl border border-gray-800 bg-gray-900/50 p-8"
        >
          <div className="text-3xl mb-4">📅</div>
          <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
            Timeline
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Every major AI event from 2022 to now — model launches, lab formations, 
            funding rounds, policy shifts, and cultural inflection points.
          </p>
          <span className="inline-block mt-4 text-xs text-gray-500 group-hover:text-blue-400 transition-colors">
            38 events and counting →
          </span>
        </Link>

        <Link
          href="/questions"
          className="group card-hover rounded-xl border border-gray-800 bg-gray-900/50 p-8"
        >
          <div className="text-3xl mb-4">🔮</div>
          <h2 className="text-xl font-semibold mb-2 group-hover:text-purple-400 transition-colors">
            Open Questions
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            The big debates — what&apos;s resolved, what&apos;s still open, and how fast 
            the answers are arriving. Inspired by Dwarkesh Patel&apos;s format.
          </p>
          <span className="inline-block mt-4 text-xs text-gray-500 group-hover:text-purple-400 transition-colors">
            12 questions tracked →
          </span>
        </Link>
      </div>

      {/* Pull quote */}
      <div className="relative mb-24">
        <div className="absolute -left-4 top-0 bottom-0 w-1 rounded-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500" />
        <div className="pl-8">
          <p className="text-xl text-gray-300 italic leading-relaxed">
            &ldquo;I wonder things and they get resolved so fast that it feels like 
            we should be documenting this historic time in history.&rdquo;
          </p>
        </div>
      </div>

      {/* How it works */}
      <div className="rounded-xl border border-gray-800 bg-gradient-to-br from-gray-900/80 to-gray-900/30 p-8 mb-12">
        <h3 className="text-xl font-bold mb-6 text-center">How truth works here</h3>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-2xl mb-3">📝</div>
            <h4 className="font-medium mb-1">Submit</h4>
            <p className="text-gray-500 text-sm">
              Fork the repo, edit the JSON data files, open a pull request with sources.
            </p>
          </div>
          <div>
            <div className="text-2xl mb-3">💬</div>
            <h4 className="font-medium mb-1">Debate</h4>
            <p className="text-gray-500 text-sm">
              All discussion happens in GitHub Issues and PR comments. Evidence wins.
            </p>
          </div>
          <div>
            <div className="text-2xl mb-3">✅</div>
            <h4 className="font-medium mb-1">Merge = Truth</h4>
            <p className="text-gray-500 text-sm">
              What gets merged becomes the record. No gatekeeping — just consensus.
            </p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <a
            href={`${REPO}/issues/new`}
            className="inline-flex items-center gap-2 rounded-lg bg-gray-800 px-5 py-2.5 text-sm font-medium text-gray-200 transition-colors hover:bg-gray-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            📝 Open an Issue
          </a>
        </div>
      </div>
    </div>
  );
}
