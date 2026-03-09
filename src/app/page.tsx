import Link from "next/link";
import timelineData from "../../data/timeline.json";
import questionsData from "../../data/questions.json";
import ActivityFeed from "@/components/ActivityFeed";

const REPO = "https://github.com/Deva-me-AI/AI-History-in-the-Making";

const timelineHighlights = timelineData.slice(-3).reverse();

export default function Home() {
  const totalEvents = timelineData.length;
  const totalQuestions = questionsData.length;
  const resolved = questionsData.filter((q) => q.status === "resolved").length;
  const activeDebates = questionsData.filter((q) => q.status !== "resolved").length;
  const yearsSpanned = new Date().getFullYear() - 1950;

  return (
    <div className="mx-auto max-w-6xl px-4 pb-24 pt-16 sm:px-8 lg:px-10 overflow-x-hidden">
      <section className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-white/[0.02] px-4 py-10 sm:px-10 sm:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(124,58,237,0.2),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(59,130,246,0.18),transparent_35%)]" />
        <div className="relative mx-auto max-w-3xl text-center">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-4 py-1.5 text-xs text-zinc-300 backdrop-blur-md">
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Open source archive · Living community timeline
          </div>

          <h1 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            AI history, <span className="gradient-text">documented in real time.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-zinc-400 sm:text-lg">
            A Vercel-style command center for major milestones, unresolved debates,
            and community truth-making as AI evolves week by week.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link href="/timeline" className="btn-primary rounded-lg px-5 py-2.5 text-sm font-medium">
              Explore timeline
            </Link>
            <Link href="/questions" className="btn-secondary rounded-lg px-5 py-2.5 text-sm font-medium">
              Track open questions
            </Link>
            <a
              href={REPO}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary rounded-lg px-5 py-2.5 text-sm font-medium"
            >
              Star on GitHub
            </a>
          </div>
        </div>
      </section>

      <section className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { value: `${totalEvents}+`, label: "Milestones" },
          { value: `${yearsSpanned}`, label: "Years Covered" },
          { value: `${resolved}`, label: "Resolved Questions" },
          { value: `${activeDebates}`, label: "Active Debates" },
        ].map((item) => (
          <div key={item.label} className="glass-card rounded-2xl px-5 py-6">
            <p className="text-2xl font-semibold tracking-tight text-white">{item.value}</p>
            <p className="mt-1 text-sm text-zinc-400">{item.label}</p>
          </div>
        ))}
      </section>

      <section className="mt-12 grid gap-6 lg:grid-cols-3">
        <Link href="/timeline" className="glass-card group rounded-2xl p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Core</p>
          <h2 className="mt-3 text-xl font-semibold text-white">Timeline</h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-400">
            Follow landmark papers, launches, and culture-shifting moments from 1950 to today.
          </p>
          <span className="mt-5 inline-flex text-sm font-medium text-indigo-300 transition-colors group-hover:text-indigo-200">
            Browse all events →
          </span>
        </Link>

        <Link href="/questions" className="glass-card group rounded-2xl p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Signal</p>
          <h2 className="mt-3 text-xl font-semibold text-white">Questions</h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-400">
            See what the community debated, what resolved quickly, and what still needs evidence.
          </p>
          <span className="mt-5 inline-flex text-sm font-medium text-indigo-300 transition-colors group-hover:text-indigo-200">
            Review open debates →
          </span>
        </Link>

        <Link href="/debates" className="glass-card group rounded-2xl p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Community</p>
          <h2 className="mt-3 text-xl font-semibold text-white">Debates</h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-400">
            Enter active GitHub discussions where claims are challenged and sources shape the record.
          </p>
          <span className="mt-5 inline-flex text-sm font-medium text-indigo-300 transition-colors group-hover:text-indigo-200">
            Join the conversation →
          </span>
        </Link>
      </section>

      <section className="mt-12 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <div className="glass-card rounded-2xl p-4 sm:p-7 overflow-hidden min-w-0">
          <div className="mb-5 flex items-center justify-between">
            <h3 className="text-base font-semibold text-white">Latest timeline cards</h3>
            <Link href="/timeline" className="text-sm text-zinc-400 hover:text-zinc-200">
              View all
            </Link>
          </div>
          <div className="space-y-3">
            {timelineHighlights.map((event) => (
              <article key={event.date} className="glass-subtle rounded-xl px-4 py-4 overflow-hidden min-w-0">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">{event.date.split('-')[0]}</p>
                <p className="mt-1.5 text-sm font-medium text-zinc-100 break-words line-clamp-2">{event.title}</p>
                <p className="mt-1.5 line-clamp-2 text-sm text-zinc-400 break-words overflow-hidden">{event.description}</p>
              </article>
            ))}
          </div>
        </div>

        <ActivityFeed />
      </section>

      <section className="mt-10 rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
        <p className="text-sm text-zinc-500">Quote from the community vision</p>
        <p className="mt-3 max-w-3xl text-lg font-light leading-relaxed text-zinc-200 sm:text-xl">
          “I wonder things and they get resolved so fast that it feels like we should be documenting this historic time in history.”
        </p>
      </section>

      <section className="mt-10 grid gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:grid-cols-3 sm:p-8">
        {[
          {
            title: "Submit",
            desc: "Fork the repo, update data files, and open a pull request with sources.",
          },
          {
            title: "Debate",
            desc: "Use issues and PR comments to challenge details with verifiable evidence.",
          },
          {
            title: "Merge",
            desc: "Consensus gets merged into the living record of AI history.",
          },
        ].map((step, index) => (
          <div key={step.title} className="glass-subtle rounded-xl p-4">
            <p className="text-xs uppercase tracking-[0.16em] text-zinc-500">0{index + 1}</p>
            <h4 className="mt-2 text-sm font-semibold text-white">{step.title}</h4>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">{step.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
