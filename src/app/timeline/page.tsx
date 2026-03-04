import timelineData from "../../../data/timeline.json";

type TimelineEvent = {
  date: string;
  title: string;
  description: string;
  category: string;
  source?: string;
  sourceLabel?: string;
};

const categoryColors: Record<string, string> = {
  "Model Release": "bg-blue-500/20 text-blue-300 border-blue-500/30",
  "Lab Formation": "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
  Funding: "bg-amber-500/20 text-amber-300 border-amber-500/30",
  Policy: "bg-red-500/20 text-red-300 border-red-500/30",
  "Open Source": "bg-green-500/20 text-green-300 border-green-500/30",
  Infrastructure: "bg-purple-500/20 text-purple-300 border-purple-500/30",
  Industry: "bg-pink-500/20 text-pink-300 border-pink-500/30",
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

export default function TimelinePage() {
  const events: TimelineEvent[] = [...timelineData].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  // Group by year
  const years: Record<string, TimelineEvent[]> = {};
  for (const event of events) {
    const year = getYear(event.date);
    if (!years[year]) years[year] = [];
    years[year].push(event);
  }

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-4xl font-bold mb-4">Timeline</h1>
      <p className="text-gray-400 mb-12 max-w-2xl">
        Major AI events from 2022 to the present. Each entry links to a moment
        that shifted the trajectory. Data lives in{" "}
        <a
          href="https://github.com/Deva-me-AI/AI-History-in-the-Making/blob/main/data/timeline.json"
          className="text-blue-400 hover:text-blue-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          timeline.json
        </a>{" "}
        — submit a PR to add events.
      </p>

      {Object.entries(years).map(([year, yearEvents]) => (
        <div key={year} className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-gray-300 sticky top-16 bg-gray-950/90 backdrop-blur-sm py-2 z-10">
            {year}
          </h2>
          <div className="relative pl-8 border-l-2 border-gray-800">
            {yearEvents.map((event, i) => (
              <div key={`${event.date}-${i}`} className="mb-10 relative">
                {/* Dot on timeline */}
                <div className="absolute -left-[calc(2rem+5px)] top-1.5 h-3 w-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />

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
                {event.source && (
                  <a
                    href={event.source}
                    className="inline-flex items-center gap-1 mt-2 text-xs text-blue-400 hover:text-blue-300 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    📎 {event.sourceLabel || "Source"} →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
