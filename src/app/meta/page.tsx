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

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">How to Contribute</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            All data lives in simple JSON files in the{" "}
            <a
              href="https://github.com/Deva-me-AI/AI-History-in-the-Making"
              className="text-blue-400 hover:text-blue-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub repo
            </a>
            :
          </p>
          <ul className="text-gray-300 space-y-2 mb-4 list-disc pl-6">
            <li>
              <strong>data/timeline.json</strong> — Timeline events. Add a new
              object with date, title, description, and category.
            </li>
            <li>
              <strong>data/questions.json</strong> — Open questions. Add new
              questions, update evidence, change resolution status.
            </li>
          </ul>
          <p className="text-gray-300 leading-relaxed">
            Submit a PR. The site rebuilds automatically on merge. No CMS, no
            admin panel — just git and JSON.
          </p>
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
