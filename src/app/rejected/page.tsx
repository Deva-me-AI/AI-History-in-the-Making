"use client";

import rejectedData from "../../../data/rejected.json";
import ContributeCard from "@/components/ContributeCard";

type Source = {
  url: string;
  label: string;
};

type Votes = {
  accept: number;
  reject: number;
  gemini: string;
  gpt: string;
  claude: string;
};

type RejectedEvent = {
  title: string;
  date: string;
  description: string;
  category: string;
  sources?: Source[];
  votes?: Votes;
  reviewedAt?: string;
  issueNumber?: number;
};

const REPO = "https://github.com/Deva-me-AI/AI-History-in-the-Making";

function voteIcon(vote: string) {
  if (vote === "ACCEPT") return "✅";
  if (vote === "REJECT") return "❌";
  return "⬜";
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr + "T00:00:00Z");
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
}

export default function RejectedPage() {
  const events = (rejectedData as RejectedEvent[]).sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 pt-16 pb-16">
      <h1 className="text-4xl font-bold mb-2">Didn&apos;t Make the Cut</h1>
      <p className="text-gray-400 mb-2 max-w-2xl">
        These events were reviewed by our 3-model convergence process (Gemini, GPT-4o, Claude) and
        rejected — the majority of AI models agreed they don&apos;t belong on the history timeline.
      </p>
      <p className="text-gray-500 text-sm mb-8">
        Disagree? Every rejection links to its GitHub issue where you can challenge the verdict.
      </p>

      {events.length === 0 ? (
        <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-12 text-center">
          <p className="text-2xl mb-2">🎯</p>
          <p className="text-gray-400">No rejections yet.</p>
          <p className="text-gray-500 text-sm mt-1">
            The new 3-model convergence review is live — rejected events will appear here as the
            pipeline processes new candidates.
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {events.map((event, i) => (
            <div
              key={`${event.date}-${i}`}
              className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 hover:border-white/[0.1] transition-colors"
            >
              <div className="flex items-start justify-between gap-4 mb-2">
                <div>
                  <span className="text-xs text-gray-500 block mb-1">{formatDate(event.date)}</span>
                  <h3 className="text-lg font-semibold">{event.title}</h3>
                </div>
                <span className="flex-shrink-0 rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-xs text-red-400">
                  Rejected
                </span>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-3">{event.description}</p>

              {event.votes && (
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                  <span>
                    {voteIcon(event.votes.gemini)} Gemini: {event.votes.gemini}
                  </span>
                  <span>
                    {voteIcon(event.votes.gpt)} GPT-4o: {event.votes.gpt}
                  </span>
                  <span>
                    {voteIcon(event.votes.claude)} Claude: {event.votes.claude}
                  </span>
                  <span className="text-gray-600">
                    ({event.votes.accept}–{event.votes.reject})
                  </span>
                </div>
              )}

              {event.sources && event.sources.length > 0 && (
                <div className="flex flex-wrap gap-3 mb-2">
                  {event.sources.map((source, si) => (
                    <a
                      key={si}
                      href={source.url}
                      className="text-xs text-blue-400 hover:text-blue-300 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      📎 {source.label}
                    </a>
                  ))}
                </div>
              )}

              {event.issueNumber && (
                <a
                  href={`${REPO}/issues/${event.issueNumber}`}
                  className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  💬 Challenge this verdict (#{event.issueNumber})
                </a>
              )}
            </div>
          ))}
        </div>
      )}

      <div className="mt-12">
        <ContributeCard context="Think an event was wrongly rejected? Open an issue to challenge the convergence verdict." />
      </div>
    </div>
  );
}
