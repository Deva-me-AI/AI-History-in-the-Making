"use client";

import { useEffect, useState } from "react";
import ContributeCard from "@/components/ContributeCard";

const REPO = "Deva-me-AI/AI-History-in-the-Making";
const REPO_URL = `https://github.com/${REPO}`;

type GitHubLabel = {
  name: string;
  color: string;
};

type GitHubIssue = {
  number: number;
  title: string;
  html_url: string;
  state: string;
  created_at: string;
  updated_at: string;
  comments: number;
  labels: GitHubLabel[];
  user: {
    login: string;
    avatar_url: string;
    html_url: string;
  };
  body: string | null;
};

type GitHubDiscussion = {
  number: number;
  title: string;
  html_url: string;
  created_at: string;
  updated_at: string;
  comments: number;
  state: string;
  body: string | null;
  category: {
    name: string;
    slug: string;
  };
  user: {
    login: string;
    avatar_url: string;
  };
  reactions: {
    total_count: number;
    "+1": number;
    "-1": number;
    heart: number;
    rocket: number;
    eyes: number;
  };
};

const labelStyles: Record<string, string> = {
  timeline: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  questions: "bg-purple-500/20 text-purple-300 border-purple-500/30",
  debate: "bg-amber-500/20 text-amber-300 border-amber-500/30",
  accuracy: "bg-red-500/20 text-red-300 border-red-500/30",
  "missing-event": "bg-orange-500/20 text-orange-300 border-orange-500/30",
  "convergence-review":
    "bg-purple-500/20 text-purple-300 border-purple-500/30",
};

function timeAgo(dateStr: string): string {
  const seconds = Math.floor(
    (Date.now() - new Date(dateStr).getTime()) / 1000
  );
  if (seconds < 60) return "just now";
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 30) return `${days}d ago`;
  const months = Math.floor(days / 30);
  return `${months}mo ago`;
}

function truncateBody(body: string | null, maxLen = 200): string {
  if (!body) return "";
  const cleaned = body
    .replace(/\r\n/g, " ")
    .replace(/\n/g, " ")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/#{1,6}\s/g, "")
    .replace(/---+/g, "")
    .replace(/\|/g, " · ")
    .replace(/\s{2,}/g, " ")
    .trim();
  if (cleaned.length <= maxLen) return cleaned;
  return cleaned.slice(0, maxLen) + "…";
}

const discussionCategories = [
  {
    name: "Open Questions",
    description:
      "Will AI replace programmers? Is RAG obsolete? Are we in a bubble? Debate the big questions.",
    emoji: "💡",
    url: `${REPO_URL}/discussions/categories/ideas`,
    color: "from-amber-500/10 to-orange-500/10 border-amber-500/20",
  },
  {
    name: "Debates",
    description:
      "Open-ended debates about AI trends, interpretations, and what it all means.",
    emoji: "💬",
    url: `${REPO_URL}/discussions/categories/general`,
    color: "from-blue-500/10 to-indigo-500/10 border-blue-500/20",
  },
  {
    name: "Q&A",
    description:
      "Ask questions about the timeline, methodology, or AI history in general.",
    emoji: "🙏",
    url: `${REPO_URL}/discussions/categories/q-a`,
    color: "from-green-500/10 to-emerald-500/10 border-green-500/20",
  },
  {
    name: "Announcements",
    description:
      "Major updates, new features, and milestones for the project.",
    emoji: "📢",
    url: `${REPO_URL}/discussions/categories/announcements`,
    color: "from-purple-500/10 to-pink-500/10 border-purple-500/20",
  },
];

export default function CommunityPage() {
  const [issues, setIssues] = useState<GitHubIssue[]>([]);
  const [discussions, setDiscussions] = useState<GitHubDiscussion[]>([]);
  const [loading, setLoading] = useState(true);
  const [discussionsLoading, setDiscussionsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [discussionsError, setDiscussionsError] = useState<string | null>(null);
  const [tab, setTab] = useState<"discussions" | "issues">("discussions");

  useEffect(() => {
    async function fetchDiscussions() {
      try {
        const res = await fetch(
          `https://api.github.com/repos/${REPO}/discussions?per_page=50&sort=updated&direction=desc`
        );

        if (!res.ok) {
          throw new Error("Failed to fetch discussions from GitHub");
        }

        const data: GitHubDiscussion[] = await res.json();
        // Sort by total reactions (most popular first), then by updated_at
        data.sort((a, b) => {
          const reactDiff = (b.reactions?.total_count ?? 0) - (a.reactions?.total_count ?? 0);
          if (reactDiff !== 0) return reactDiff;
          return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
        });
        setDiscussions(data);
      } catch (err) {
        setDiscussionsError(
          err instanceof Error
            ? err.message
            : "Failed to load discussions"
        );
      } finally {
        setDiscussionsLoading(false);
      }
    }

    fetchDiscussions();
  }, []);

  useEffect(() => {
    async function fetchIssues() {
      try {
        const [openRes, closedRes] = await Promise.all([
          fetch(
            `https://api.github.com/repos/${REPO}/issues?state=open&per_page=30&sort=updated&direction=desc`
          ),
          fetch(
            `https://api.github.com/repos/${REPO}/issues?state=closed&per_page=20&sort=updated&direction=desc`
          ),
        ]);

        if (!openRes.ok || !closedRes.ok) {
          throw new Error("Failed to fetch issues from GitHub");
        }

        const openIssues: GitHubIssue[] = await openRes.json();
        const closedIssues: GitHubIssue[] = await closedRes.json();

        const allIssues = [...openIssues, ...closedIssues]
          .filter((i) => !("pull_request" in i))
          .sort(
            (a, b) =>
              new Date(b.updated_at).getTime() -
              new Date(a.updated_at).getTime()
          );

        setIssues(allIssues);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to load issues"
        );
      } finally {
        setLoading(false);
      }
    }

    fetchIssues();
  }, []);

  const openCount = issues.filter((i) => i.state === "open").length;
  const closedCount = issues.filter((i) => i.state === "closed").length;

  const discussionCategoryStyles: Record<string, string> = {
    ideas: "bg-amber-500/20 text-amber-300 border-amber-500/30",
    general: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    "q-a": "bg-green-500/20 text-green-300 border-green-500/30",
    announcements: "bg-purple-500/20 text-purple-300 border-purple-500/30",
  };

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-4xl font-bold mb-4">Community</h1>
      <p className="text-gray-400 mb-6 max-w-2xl">
        Debate AI history, challenge the analysis, and help build the record.
        All contributions happen on GitHub.
      </p>

      {/* How it works banner */}
      <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-5 mb-8">
        <div className="flex items-start gap-3">
          <div className="text-xl mt-0.5">📋</div>
          <div>
            <h3 className="font-medium text-gray-200 text-sm mb-2">
              How this works
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-400">
              <div className="flex items-start gap-2">
                <span className="text-green-400 font-bold mt-px">💬</span>
                <div>
                  <span className="text-gray-300 font-medium">
                    Discussions
                  </span>{" "}
                  — Open debates, questions, and community conversation about
                  AI history and trends.
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-400 font-bold mt-px">📝</span>
                <div>
                  <span className="text-gray-300 font-medium">Issues</span>{" "}
                  — Actionable fixes: wrong dates, missing events, factual
                  errors that need a PR to resolve.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tab navigation */}
      <div className="flex items-center gap-1 mb-8 border-b border-gray-800 pb-px">
        <button
          onClick={() => setTab("discussions")}
          className={`px-4 py-2 text-sm font-medium transition-colors border-b-2 -mb-px ${
            tab === "discussions"
              ? "text-white border-purple-500"
              : "text-gray-500 border-transparent hover:text-gray-300"
          }`}
        >
          💬 Discussions
        </button>
        <button
          onClick={() => setTab("issues")}
          className={`px-4 py-2 text-sm font-medium transition-colors border-b-2 -mb-px ${
            tab === "issues"
              ? "text-white border-blue-500"
              : "text-gray-500 border-transparent hover:text-gray-300"
          }`}
        >
          📝 Issues ({openCount} open, {closedCount} resolved)
        </button>
      </div>

      {/* Discussions tab */}
      {tab === "discussions" && (
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {discussionCategories.map((cat) => (
              <a
                key={cat.name}
                href={cat.url}
                className={`block rounded-xl border bg-gradient-to-br ${cat.color} p-5 transition-all hover:scale-[1.02] hover:shadow-lg`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{cat.emoji}</span>
                  <h3 className="font-semibold text-gray-200">{cat.name}</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {cat.description}
                </p>
                <div className="mt-3 text-xs text-gray-500">
                  View on GitHub →
                </div>
              </a>
            ))}
          </div>

          {discussionsLoading && (
            <div className="text-center py-16">
              <div className="inline-block h-6 w-6 animate-spin rounded-full border-2 border-gray-600 border-t-purple-500" />
              <p className="text-gray-500 mt-4 text-sm">
                Loading discussions from GitHub...
              </p>
            </div>
          )}

          {discussionsError && (
            <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-6 text-center mb-8">
              <p className="text-red-400 mb-2">
                Couldn&apos;t load discussions: {discussionsError}
              </p>
              <a
                href={`${REPO_URL}/discussions`}
                className="text-blue-400 hover:text-blue-300 text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                View discussions directly on GitHub →
              </a>
            </div>
          )}

          {!discussionsLoading && !discussionsError && discussions.length > 0 && (
            <div className="space-y-3 mb-8">
              {discussions.map((discussion) => (
                <a
                  key={discussion.number}
                  href={discussion.html_url}
                  className="block rounded-xl border border-gray-800 bg-gray-900/50 p-4 question-card transition-all hover:bg-gray-900/80"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex-shrink-0 text-base">💬</div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start gap-2 flex-wrap mb-1">
                        <h3 className="font-medium text-gray-100 text-sm">
                          {discussion.title}
                        </h3>
                        <span
                          className={`inline-block rounded-full border px-2 py-0.5 text-xs font-medium ${
                            discussionCategoryStyles[discussion.category.slug] ||
                            "bg-gray-500/20 text-gray-300 border-gray-500/30"
                          }`}
                        >
                          {discussion.category.name}
                        </span>
                      </div>

                      {discussion.body && (
                        <p className="text-gray-500 text-xs mb-2 leading-relaxed">
                          {truncateBody(discussion.body, 160)}
                        </p>
                      )}

                      <div className="flex items-center gap-3 text-xs text-gray-600">
                        <span>#{discussion.number}</span>
                        <span>
                          by {discussion.user.login} · {timeAgo(discussion.updated_at)}
                        </span>
                        {discussion.reactions?.total_count > 0 && (
                          <span className="flex items-center gap-1 text-amber-500/70">
                            👍 {discussion.reactions.total_count}
                          </span>
                        )}
                        <span className="flex items-center gap-1">
                          💬 {discussion.comments}
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          )}

          <div className="text-center">
            <a
              href={`${REPO_URL}/discussions`}
              className="inline-flex items-center gap-2 rounded-lg bg-purple-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-purple-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              💬 Browse All Discussions
            </a>
            <p className="text-gray-600 text-xs mt-3">
              Start a new discussion, join existing debates, or just lurk.
            </p>
          </div>
        </div>
      )}

      {/* Issues tab */}
      {tab === "issues" && (
        <div>
          <div className="flex items-center justify-between mb-4">
            <p className="text-gray-500 text-sm">
              Actionable fixes — wrong dates, missing events, factual errors.
            </p>
            <a
              href={`${REPO_URL}/issues/new/choose`}
              className="inline-flex items-center gap-1.5 rounded-lg bg-gray-800 px-3.5 py-1.5 text-xs font-medium text-gray-300 transition-colors hover:bg-gray-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              📝 New Issue
            </a>
          </div>

          {loading && (
            <div className="text-center py-16">
              <div className="inline-block h-6 w-6 animate-spin rounded-full border-2 border-gray-600 border-t-blue-500" />
              <p className="text-gray-500 mt-4 text-sm">
                Loading issues from GitHub...
              </p>
            </div>
          )}

          {error && (
            <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-6 text-center">
              <p className="text-red-400 mb-2">
                Couldn&apos;t load issues: {error}
              </p>
              <a
                href={`${REPO_URL}/issues`}
                className="text-blue-400 hover:text-blue-300 text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                View issues directly on GitHub →
              </a>
            </div>
          )}

          {!loading && !error && issues.length === 0 && (
            <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-12 text-center">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-lg font-semibold mb-2">
                No open issues
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                Everything looks accurate! Found something wrong?
              </p>
              <a
                href={`${REPO_URL}/issues/new/choose`}
                className="inline-flex items-center gap-2 rounded-lg bg-gray-800 px-5 py-2.5 text-sm font-medium text-gray-200 transition-colors hover:bg-gray-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                📝 Report an Issue
              </a>
            </div>
          )}

          {!loading && !error && issues.length > 0 && (
            <div className="space-y-3">
              {issues.map((issue) => (
                <a
                  key={issue.number}
                  href={issue.html_url}
                  className="block rounded-xl border border-gray-800 bg-gray-900/50 p-4 question-card transition-all hover:bg-gray-900/80"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0">
                      {issue.state === "open" ? (
                        <div className="h-4 w-4 rounded-full border-2 border-green-500" />
                      ) : (
                        <div className="h-4 w-4 rounded-full bg-purple-500 flex items-center justify-center">
                          <svg
                            viewBox="0 0 16 16"
                            className="h-2.5 w-2.5 text-white"
                            fill="currentColor"
                          >
                            <path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" />
                          </svg>
                        </div>
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start gap-2 flex-wrap mb-1">
                        <h3 className="font-medium text-gray-100 text-sm">
                          {issue.title}
                        </h3>
                        {issue.labels.map((label) => (
                          <span
                            key={label.name}
                            className={`inline-block rounded-full border px-2 py-0.5 text-xs font-medium ${
                              labelStyles[label.name] ||
                              "bg-gray-500/20 text-gray-300 border-gray-500/30"
                            }`}
                          >
                            {label.name}
                          </span>
                        ))}
                      </div>

                      {issue.body && (
                        <p className="text-gray-500 text-xs mb-2 leading-relaxed">
                          {truncateBody(issue.body, 160)}
                        </p>
                      )}

                      <div className="flex items-center gap-3 text-xs text-gray-600">
                        <span>#{issue.number}</span>
                        <span>
                          opened {timeAgo(issue.created_at)} by{" "}
                          {issue.user.login}
                        </span>
                        {issue.comments > 0 && (
                          <span className="flex items-center gap-1">
                            💬 {issue.comments}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      )}

      <ContributeCard context="Want to debate AI history or fix an error? Start a Discussion for debates, open an Issue for fixes." />
    </div>
  );
}
