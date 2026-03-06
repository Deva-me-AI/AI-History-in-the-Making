import Link from "next/link";
import timelineData from "../../data/timeline.json";
import questionsData from "../../data/questions.json";
import ActivityFeed from "@/components/ActivityFeed";

const REPO = "https://github.com/Deva-me-AI/AI-History-in-the-Making";

export default function Home() {
  const totalEvents = timelineData.length;
  const totalQuestions = questionsData.length;
  const resolved = questionsData.filter((q) => q.status === "resolved").length;
  const yearsSpanned = new Date().getFullYear() - 1950;

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 overflow-hidden">
      {/* Hero */}
      <div className="text-center pt-24 pb-20 hero-glow">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs text-gray-400 mb-10 backdrop-blur-sm">
          <span className="inline-flex h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
          Open source · Community driven · 30+ active debates
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-6 gradient-text leading-[1.1] pb-2 tracking-tight">
          AI History<br />in the Making
        </h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-xl mx-auto mb-10 leading-relaxed">
          Documenting the fastest technological revolution in human history.
          What we debated months ago is already settled.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/timeline"
            className="btn-primary rounded-lg px-5 sm:px-6 py-2.5 text-sm font-medium text-white"
          >
            Explore Timeline
          </Link>
          <a
            href={REPO}
            className="btn-secondary rounded-lg px-5 sm:px-6 py-2.5 text-sm font-medium text-gray-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            ⭐ Star on GitHub
          </a>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
        {[
          { value: totalEvents, label: "Events", suffix: "+" },
          { value: yearsSpanned, label: "Years Covered", suffix: "" },
          { value: totalQuestions, label: "Questions", suffix: "" },
          { value: resolved, label: "Resolved", suffix: "" },
        ].map((stat) => (
          <div key={stat.label} className="glass-card rounded-xl p-5 text-center">
            <div className="text-3xl font-bold stat-glow text-white mb-1">
              {stat.value}{stat.suffix}
            </div>
            <div className="text-xs text-gray-500 uppercase tracking-wider">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      <ActivityFeed />

      {/* Section cards */}
      <div className="grid md:grid-cols-2 gap-5 mb-20">
        <Link href="/timeline" className="glass-card rounded-2xl p-7 group">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400 text-lg">
              📅
            </div>
            <h2 className="text-lg font-semibold group-hover:text-blue-400 transition-colors">
              Timeline
            </h2>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-3">
            Every major AI event from Turing&apos;s 1950 paper to today — model launches,
            lab formations, funding rounds, and cultural inflection points.
          </p>
          <span className="text-xs text-indigo-400 font-medium">
            {totalEvents} events →
          </span>
        </Link>

        <Link href="/questions" className="glass-card rounded-2xl p-7 group">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/10 text-purple-400 text-lg">
              🔮
            </div>
            <h2 className="text-lg font-semibold group-hover:text-purple-400 transition-colors">
              Open Questions
            </h2>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-3">
            The big debates — what&apos;s resolved, what&apos;s still open, and how fast
            the answers are arriving.
          </p>
          <span className="text-xs text-indigo-400 font-medium">
            {totalQuestions} questions →
          </span>
        </Link>

        <Link href="/debates" className="glass-card rounded-2xl p-7 group">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400 text-lg">
              💬
            </div>
            <h2 className="text-lg font-semibold group-hover:text-amber-400 transition-colors">
              Debates
            </h2>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-3">
            Active discussions on GitHub — contested events, challenged resolutions,
            and broader questions about where AI is heading.
          </p>
          <span className="text-xs text-indigo-400 font-medium">
            View debates →
          </span>
        </Link>

        <a href={`${REPO}/issues/new/choose`} className="glass-card rounded-2xl p-7 group border-dashed!" target="_blank" rel="noopener noreferrer">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/10 text-green-400 text-lg">
              ✏️
            </div>
            <h2 className="text-lg font-semibold group-hover:text-green-400 transition-colors">
              Contribute
            </h2>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-3">
            Add events, propose questions, challenge the analysis. All content is
            community-driven through GitHub Issues and PRs.
          </p>
          <span className="text-xs text-indigo-400 font-medium">
            Start contributing →
          </span>
        </a>
      </div>

      {/* Pull quote */}
      <div className="relative mb-20 px-2">
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 rounded-full" />
        <div className="pl-8">
          <p className="text-xl text-gray-300 italic leading-relaxed font-light">
            &ldquo;I wonder things and they get resolved so fast that it feels like
            we should be documenting this historic time in history.&rdquo;
          </p>
        </div>
      </div>

      {/* How it works */}
      <div className="glass-card rounded-2xl p-8 mb-16">
        <h3 className="text-lg font-semibold mb-8 text-center text-gray-200">
          How truth works here
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: "📝", title: "Submit", desc: "Fork the repo, edit the JSON data files, open a pull request with sources." },
            { icon: "💬", title: "Debate", desc: "All discussion happens in GitHub Issues and PR comments. Evidence wins." },
            { icon: "✅", title: "Merge = Truth", desc: "What gets merged becomes the record. No gatekeeping — just consensus." },
          ].map((step) => (
            <div key={step.title} className="text-center">
              <div className="text-2xl mb-3">{step.icon}</div>
              <h4 className="font-medium text-gray-200 mb-1.5 text-sm">{step.title}</h4>
              <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
