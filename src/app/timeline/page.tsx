"use client";

import { useState } from "react";
import timelineData from "../../../data/timeline.json";
import ContributeCard from "@/components/ContributeCard";

type Source = {
  url: string;
  label: string;
};

type TimelineEvent = {
  date: string;
  title: string;
  description: string;
  category: string;
  sources?: Source[];
  issueNumber?: number;
};

const categoryColors: Record<string, string> = {
  "Model Release": "bg-blue-500/20 text-blue-300 border-blue-500/30",
  "Lab Formation": "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
  Funding: "bg-amber-500/20 text-amber-300 border-amber-500/30",
  Policy: "bg-red-500/20 text-red-300 border-red-500/30",
  "Open Source": "bg-green-500/20 text-green-300 border-green-500/30",
  Infrastructure: "bg-purple-500/20 text-purple-300 border-purple-500/30",
  Industry: "bg-pink-500/20 text-pink-300 border-pink-500/30",
  Research: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
};

function formatDate(dateStr: string): string {
  const d = new Date(dateStr + "T00:00:00Z");
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    timeZone: "UTC",
  });
}

function getYear(dateStr: string): string {
  return dateStr.slice(0, 4);
}

const REPO = "https://github.com/Deva-me-AI/AI-History-in-the-Making";

export default function TimelinePage() {
  const [newestFirst, setNewestFirst] = useState(true);

  const events: TimelineEvent[] = [...timelineData].sort((a, b) => {
    const diff = new Date(a.date).getTime() - new Date(b.date).getTime();
    return newestFirst ? -diff : diff;
  });

  // Group by year
  const years: Record<string, TimelineEvent[]> = {};
  for (const event of events) {
    const year = getYear(event.date);
    if (!years[year]) years[year] = [];
    years[year].push(event);
  }

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <div className="flex items-start justify-between gap-4 mb-4">
        <h1 className="text-4xl font-bold">Timeline</h1>
        <button
          onClick={() => setNewestFirst(!newestFirst)}
          className="flex-shrink-0 mt-1 inline-flex items-center gap-2 rounded-lg border border-gray-700 bg-gray-800/50 px-3 py-1.5 text-sm text-gray-300 transition-all hover:bg-gray-800 hover:border-gray-600 hover:text-white"
        >
          {newestFirst ? "↓ Newest first" : "↑ Oldest first"}
        </button>
      </div>
      <p className="text-gray-400 mb-4 max-w-2xl">
        Major AI events from {newestFirst ? "the present back to the field's origins" : "the field's origins to the present"}.
        Each event links to sources — many link to GitHub issues for active debate.
      </p>
      <p className="text-gray-500 text-sm mb-12">
        📂 Data lives in{" "}
        <a
          href={`${REPO}/blob/main/data/timeline.json`}
          className="text-blue-400 hover:text-blue-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          timeline.json
        </a>{" "}
        — missing an event?{" "}
        <a
          href={`${REPO}/issues/new?title=Missing+event:+&labels=timeline`}
          className="text-blue-400 hover:text-blue-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open an issue
        </a>{" "}
        or{" "}
        <a
          href={`${REPO}/edit/main/data/timeline.json`}
          className="text-blue-400 hover:text-blue-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          submit a PR
        </a>
        .
      </p>

      {Object.entries(years)
        .sort(([a], [b]) => newestFirst ? Number(b) - Number(a) : Number(a) - Number(b))
        .map(([year, yearEvents]) => (
        <div key={year} className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-gray-300 sticky top-24 bg-gray-950/90 backdrop-blur-sm py-2 z-10 year-header">
            {year}
          </h2>
          <div className="relative pl-8 border-l-2 border-gray-800">
            {yearEvents.map((event, i) => (
              <div key={`${event.date}-${i}`} className="mb-10 relative timeline-event">
                <div className="absolute -left-[calc(2rem+5px)] top-1.5 h-3 w-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 timeline-dot" />

                <div className="text-xs text-gray-500 mb-1">
                  {formatDate(event.date)}
                </div>
                <h3 className="text-lg font-semibold mb-1">{event.title}</h3>
                <span
                  className={`category-badge inline-block mb-2 border ${
                    categoryColors[event.category] ||
                    "bg-gray-500/20 text-gray-300 border-gray-500/30"
                  }`}
                >
                  {event.category}
                </span>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {event.description}
                </p>

                {event.sources && event.sources.length > 0 && (
                  <div className="flex flex-wrap gap-3 mt-2">
                    {event.sources.map((source, si) => (
                      <a
                        key={si}
                        href={source.url}
                        className="inline-flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300 transition-colors"
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
                    className="inline-flex items-center gap-1.5 mt-2 text-xs text-amber-400 hover:text-amber-300 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    💬 Debate this event (#{event.issueNumber})
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}

      <ContributeCard context="Missing an event? Think a date or description is wrong? Open an issue or submit a PR." />
    </div>
  );
}
