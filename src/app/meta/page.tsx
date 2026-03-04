const REPO = "https://github.com/Deva-me-AI/AI-History-in-the-Making";

export default function MetaPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-bold mb-8">About This Project</h1>

      <div className="prose prose-invert max-w-none">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Why This Exists</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            We&apos;re living through the fastest technological revolution in human
            history, and it&apos;s moving so fast that we&apos;re forgetting what we were
            debating three months ago.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            Questions that seemed genuinely open — &ldquo;are hallucinations a
            fundamental problem?&rdquo; &ldquo;will AI costs keep falling?&rdquo; — get resolved
            in months, not years. By the time you form an opinion, the evidence
            has already moved.
          </p>
          <p className="text-gray-300 leading-relaxed">
            This project exists to document that velocity. To track what we
            thought, when we thought it, and how fast reality caught up.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            The Speed of Resolution
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            The pattern is striking: questions enter mainstream discourse, get
            debated for a few months, and then resolve — usually faster than
            anyone predicted. The gap between &ldquo;AI can&apos;t do X&rdquo; and &ldquo;AI does X
            routinely&rdquo; keeps shrinking.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            In 2023, &ldquo;hallucinations&rdquo; was the #1 objection to AI adoption. By
            2025, it was a solved engineering problem. In early 2024, 8K context
            was standard. By late 2025, 200K-1M was the norm — a 100x increase
            in 18 months.
          </p>
          <p className="text-gray-300 leading-relaxed">
            It feels like watching history in fast-forward. And if we don&apos;t
            document it now, we&apos;ll forget how wild the ride was.
          </p>
        </section>

        <section className="mb-12 rounded-xl border border-gray-800 bg-gray-900/30 p-8">
          <h2 className="text-2xl font-semibold mb-4">🔓 Open Source &amp; How Truth Works Here</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            This is a fully open-source project. All content — every timeline event, 
            every open question, every analysis — lives in simple JSON files in a{" "}
            <a
              href={REPO}
              className="text-blue-400 hover:text-blue-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              public GitHub repository
            </a>.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>All debates happen on GitHub.</strong> Disagree with an analysis? 
            Think a question&apos;s status is wrong? Think we&apos;re missing a critical event? 
            Open an issue or submit a pull request. The community discusses, evidence is weighed, 
            and what gets merged becomes the record.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            No editorial gatekeeping. No single arbiter of truth. Just evidence, 
            sources, and community consensus — mediated through git.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <a
              href={`${REPO}/issues/new`}
              className="inline-flex items-center gap-1.5 rounded-lg bg-gray-800 px-4 py-2 text-sm font-medium text-gray-200 transition-colors hover:bg-gray-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              📝 Open an Issue
            </a>
            <a
              href={`${REPO}/pulls`}
              className="inline-flex items-center gap-1.5 rounded-lg bg-gray-800 px-4 py-2 text-sm font-medium text-gray-200 transition-colors hover:bg-gray-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              🔀 Pull Requests
            </a>
            <a
              href={`${REPO}/blob/main/CONTRIBUTING.md`}
              className="inline-flex items-center gap-1.5 rounded-lg border border-gray-700 px-4 py-2 text-sm font-medium text-gray-400 transition-colors hover:text-gray-200 hover:border-gray-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              📖 Contributing Guide
            </a>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">How to Contribute</h2>
          <ul className="text-gray-300 space-y-3 list-none pl-0">
            <li className="flex items-start gap-3">
              <span className="text-lg">1.</span>
              <span><strong>Fork the repo</strong> and edit the JSON files in <code className="text-sm bg-gray-800 px-1.5 py-0.5 rounded">data/</code></span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-lg">2.</span>
              <span><strong>Open a Pull Request</strong> with your changes and evidence</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-lg">3.</span>
              <span><strong>Community discusses</strong> in the PR comments</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-lg">4.</span>
              <span><strong>Merge = truth</strong> — what gets merged becomes the record</span>
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Style</h2>
          <p className="text-gray-300 leading-relaxed">
            This isn&apos;t a neutral encyclopedia. It&apos;s objective facts mixed with
            journalistic interpretive overlay. We track what happened (facts)
            and what it means (analysis). The analysis is opinionated by design —
            and open to challenge via PRs.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Credits</h2>
          <p className="text-gray-300 leading-relaxed">
            Created by{" "}
            <a
              href="https://x.com/truejaian"
              className="text-blue-400 hover:text-blue-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Jai An
            </a>{" "}
            and friends. Built with AI (naturally). Powered by{" "}
            <a
              href="https://deva.me"
              className="text-blue-400 hover:text-blue-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Deva
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
