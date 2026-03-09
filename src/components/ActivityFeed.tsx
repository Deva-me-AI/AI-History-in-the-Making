import Image from "next/image";
import { getRecentActivity, type ActivityItem } from "@/lib/github";

const REPO = "https://github.com/Deva-me-AI/AI-History-in-the-Making";

function iconFor(type: ActivityItem["type"]): string {
  if (type === "pr") return "🔀";
  if (type === "issue") return "📋";
  if (type === "comment") return "💬";
  if (type === "commit") return "📝";
  return "🗣️";
}

function labelFor(type: ActivityItem["type"]): string {
  if (type === "pr") return "Merged PR";
  if (type === "issue") return "Issue";
  if (type === "comment") return "Comment";
  if (type === "commit") return "Commit";
  return "Discussion";
}

function relativeTime(iso: string): string {
  const timestamp = new Date(iso).getTime();
  const now = Date.now();
  const seconds = Math.max(1, Math.floor((now - timestamp) / 1000));

  if (seconds < 60) return "just now";
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes} minute${minutes === 1 ? "" : "s"} ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} hour${hours === 1 ? "" : "s"} ago`;
  const days = Math.floor(hours / 24);
  if (days === 1) return "yesterday";
  if (days < 30) return `${days} days ago`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months} month${months === 1 ? "" : "s"} ago`;
  const years = Math.floor(months / 12);
  return `${years} year${years === 1 ? "" : "s"} ago`;
}

function stripMarkdown(text: string): string {
  return text
    .replace(/#{1,6}\s+/g, "")           // headings
    .replace(/\*\*([^*]+)\*\*/g, "$1")    // bold
    .replace(/\*([^*]+)\*/g, "$1")        // italic
    .replace(/__([^_]+)__/g, "$1")        // bold underscores
    .replace(/_([^_]+)_/g, "$1")          // italic underscores
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1") // links
    .replace(/`([^`]+)`/g, "$1")          // inline code
    .replace(/```[\s\S]*?```/g, "")       // code blocks
    .replace(/^\s*[-*+]\s+/gm, "")        // list markers
    .replace(/^\s*\d+\.\s+/gm, "")        // ordered list markers
    .replace(/\|/g, " ")                  // table pipes
    .replace(/\n+/g, " ")                 // newlines to spaces
    .replace(/\s{2,}/g, " ")             // collapse whitespace
    .trim();
}

function shortPreview(body: string): string {
  if (!body) return "";
  const clean = stripMarkdown(body);
  if (!clean) return "";
  if (clean.length <= 120) return clean;
  return `${clean.slice(0, 120).trimEnd()}…`;
}

function labelTextColor(hex: string): string {
  const value = Number.parseInt(hex, 16);
  const red = (value >> 16) & 255;
  const green = (value >> 8) & 255;
  const blue = value & 255;
  const luminance = (0.2126 * red + 0.7152 * green + 0.0722 * blue) / 255;
  return luminance > 0.6 ? "#111827" : "#f9fafb";
}

export default async function ActivityFeed() {
  const items = await getRecentActivity(18);

  return (
    <section className="mb-20">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold text-gray-100">Recent Activity</h2>
          <p className="mt-1 text-sm text-gray-500">
            Live updates from issues, merged PRs, comments, and discussions.
          </p>
        </div>
      </div>

      <div className="glass-card rounded-2xl p-5 sm:p-6">
        {items.length === 0 ? (
          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4 text-sm text-gray-400">
            Activity feed is temporarily unavailable (likely GitHub API rate limit). Please check back shortly.
          </div>
        ) : (
          <ul className="space-y-4">
            {items.map((item) => (
              <li key={item.id} className="border-b border-white/5 pb-4 last:border-0 last:pb-0">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 text-base" aria-hidden>
                    {iconFor(item.type)}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs text-gray-500">{labelFor(item.type)}</span>
                      <span className="text-gray-700">·</span>
                      <span className="text-xs text-gray-500">{relativeTime(item.updatedAt)}</span>
                    </div>

                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-0.5 block text-sm font-medium text-gray-100 transition-colors hover:text-indigo-300 break-words line-clamp-2"
                    >
                      {item.title}
                    </a>

                    <p className="mt-1 text-sm text-gray-400 break-words line-clamp-2">{shortPreview(item.body)}</p>

                    <div className="mt-2 flex flex-wrap items-center gap-2">
                      <a
                        href={item.author.htmlUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-gray-300"
                      >
                        <Image
                          src={item.author.avatarUrl}
                          alt={item.author.login}
                          width={18}
                          height={18}
                          className="h-[18px] w-[18px] rounded-full"
                        />
                        @{item.author.login}
                      </a>

                      {item.labels.map((label) => (
                        <span
                          key={`${item.id}-${label.id}`}
                          className="inline-flex items-center rounded-full px-2 py-0.5 text-[11px]"
                          style={{
                            backgroundColor: `#${label.color}33`,
                            color: labelTextColor(label.color),
                            border: `1px solid #${label.color}66`,
                          }}
                        >
                          {label.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-5 border-t border-white/5 pt-4">
          <a
            href={`${REPO}/pulse`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-indigo-400 transition-colors hover:text-indigo-300"
          >
            View all on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}
