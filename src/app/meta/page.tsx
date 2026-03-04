const REPO = "https://github.com/Deva-me-AI/AI-History-in-the-Making";

export default function MetaPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-bold mb-8 tracking-tight">About This Project</h1>

      <section className="mb-14">
        <h2 className="text-xl font-semibold mb-4 text-gray-200">Why This Exists</h2>
        <p className="text-gray-400 leading-relaxed mb-4">
          We&apos;re living through the fastest technological revolution in human
          history, and it&apos;s moving so fast that we&apos;re forgetting what we were
          debating three months ago.
        </p>
        <p className="text-gray-400 leading-relaxed mb-4">
          Questions that seemed genuinely open — &ldquo;are hallucinations a
          fundamental problem?&rdquo; &ldquo;will AI costs keep falling?&rdquo; — get resolved
          in months, not years. By the time you form an opinion, the evidence
          has already moved.
        </p>
        <p className="text-gray-400 leading-relaxed">
          This project exists to document that velocity. To track what we
          thought, when we thought it, and how fast reality caught up.
        </p>
      </section>

      <section className="mb-14">
        <h2 className="text-xl font-semibold mb-4 text-gray-200">The Speed of Resolution</h2>
        <p className="text-gray-400 leading-relaxed mb-4">
          The pattern is striking: questions enter mainstream discourse, get
          debated for a few months, and then resolve — usually faster than
          anyone predicted.
        </p>
        <p className="text-gray-400 leading-relaxed">
          In 2023, &ldquo;hallucinations&rdquo; was the #1 objection to AI adoption. By
          2025, it was a solved engineering problem. In early 2024, 8K context
          was standard. By late 2025, 200K-1M was the norm — a 100x increase
          in 18 months. It feels like watching history in fast-forward.
        </p>
      </section>

      <section className="glass-card rounded-2xl p-8 mb-14">
        <h2 className="text-xl font-semibold mb-6 text-gray-200">🔓 How to Contribute</h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-5">
            <h3 className="font-semibold text-amber-400 mb-3 text-sm">📝 Open an Issue — to discuss</h3>
            <ul className="text-gray-400 text-sm space-y-2 leading-relaxed">
              <li>• Debate whether a question is correctly resolved</li>
              <li>• Propose a missing event or question</li>
              <li>• Challenge framing or analysis</li>
              <li>• Start a broader discussion</li>
            </ul>
            <p className="text-gray-600 text-xs mt-3 italic">Issues are for talking. No changes needed.</p>
            <a
              href={`${REPO}/issues/new/choose`}
              className="btn-secondary inline-flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 text-xs font-medium text-gray-300 mt-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open an Issue →
            </a>
          </div>

          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-5">
            <h3 className="font-semibold text-indigo-400 mb-3 text-sm">🔀 Open a PR — to ship</h3>
            <ul className="text-gray-400 text-sm space-y-2 leading-relaxed">
              <li>• Add a timeline event (edit timeline.json)</li>
              <li>• Add or update a question (edit questions.json)</li>
              <li>• Fix a date, link, or factual error</li>
              <li>• Improve the site UI or code</li>
            </ul>
            <p className="text-gray-600 text-xs mt-3 italic">PRs are for shipping. You&apos;ve made the change.</p>
            <a
              href={`${REPO}/compare`}
              className="btn-secondary inline-flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 text-xs font-medium text-gray-300 mt-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open a PR →
            </a>
          </div>
        </div>

        <div className="rounded-xl border border-white/5 bg-white/[0.02] p-5">
          <h3 className="font-semibold text-gray-300 mb-3 text-sm">Typical flow</h3>
          <div className="flex items-center gap-3 text-sm text-gray-400">
            <span className="rounded-lg bg-amber-500/10 text-amber-400 px-2.5 py-1 text-xs font-medium">Issue</span>
            <span className="text-gray-600">→ discuss → consensus →</span>
            <span className="rounded-lg bg-indigo-500/10 text-indigo-400 px-2.5 py-1 text-xs font-medium">PR</span>
            <span className="text-gray-600">→ review →</span>
            <span className="rounded-lg bg-green-500/10 text-green-400 px-2.5 py-1 text-xs font-medium">Merge = Truth</span>
          </div>
          <p className="text-gray-600 text-xs mt-3">
            Not sure? Start with an Issue. Know exactly what to change? Go straight to a PR.
          </p>
        </div>
      </section>

      <section className="mb-14">
        <h2 className="text-xl font-semibold mb-4 text-gray-200">Style</h2>
        <p className="text-gray-400 leading-relaxed">
          This isn&apos;t a neutral encyclopedia. It&apos;s objective facts mixed with
          journalistic interpretive overlay. We track what happened (facts)
          and what it means (analysis). The analysis is opinionated by design —
          and open to challenge via PRs.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4 text-gray-200">Credits</h2>
        <p className="text-gray-400 leading-relaxed">
          Created by{" "}
          <a href="https://x.com/truejaian" className="text-indigo-400 hover:text-indigo-300 transition-colors" target="_blank" rel="noopener noreferrer">
            Jai An
          </a>{" "}
          and friends. Built with AI (naturally). Powered by{" "}
          <a href="https://deva.me" className="text-indigo-400 hover:text-indigo-300 transition-colors" target="_blank" rel="noopener noreferrer">
            Deva
          </a>
          .
        </p>
      </section>
    </div>
  );
}
