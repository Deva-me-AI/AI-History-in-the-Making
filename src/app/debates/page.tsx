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

const labelStyles: Record<string, string> = {
  timeline: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  questions: "bg-purple-500/20 text-purple-300 border-purple-500/30",
  debate: "bg-amber-500/20 text-amber-300 border-amber-500/30",
  bug: "bg-red-500/20 text-red-300 border-red-500/30",
  enhancement: "bg-green-500/20 text-green-300 border-green-500/30",
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
  const cleaned = body.replace(/\r\n/g, " ").replace(/\n/g, " ").trim();
  if (cleaned.length <= maxLen) return cleaned;
  return cleaned.slice(0, maxLen) + "…";
}

export default function DebatesPage() {
  const [issues, setIssues] = useState<GitHubIssue[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<"all" | "open" | "closed">("all");

  useEffect(() => {
    async function fetchIssues() {
      try {
        // Fetch both open and closed issues
        const [openRes, closedRes] = await Promise.all([
          fetch(
            `https://api.github.com/repos/${REPO}/issues?state=open&per_page=50&sort=updated&direction=desc`
          ),
          fetch(
            `https://api.github.com/repos/${REPO}/issues?state=closed&per_page=30&sort=updated&direction=desc`
          ),
        ]);

        if (!openRes.ok || !closedRes.ok) {
          throw new Error("Failed to fetch issues from GitHub");
        }

        const openIssues: GitHubIssue[] = await openRes.json();
        const closedIssues: GitHubIssue[] = await closedRes.json();

        // Filter out pull requests (they also show up in issues API)
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

  const filteredIssues = issues.filter((i) => {
    if (filter === "all") return true;
    return i.state === filter;
  });

  const openCount = issues.filter((i) => i.state === "open").length;
  const closedCount = issues.filter((i) => i.state === "closed").length;

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-4xl font-bold mb-4">Debates</h1>
      <p className="text-gray-400 mb-4 max-w-2xl">
        Active and resolved debates about AI history — contested events,
        questioned resolutions, and broader discussions. All debates happen on
        GitHub.
      </p>
      <p className="text-gray-500 text-sm mb-8">
        Disagree with something on this site?{" "}
        <a
          href={`${REPO_URL}/issues/new`}
          className="text-blue-400 hover:text-blue-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open an issue
        </a>{" "}
        to start a debate. The community discusses, evidence is weighed, and
        what gets merged becomes the record.
      </p>

      {/* Filter tabs */}
      <div className="flex items-center gap-1 mb-8 border-b border-gray-800 pb-px">
        <button
          onClick={() => setFilter("all")}
          className={`px-4 py-2 text-sm font-medium transition-colors border-b-2 -mb-px ${
            filter === "all"
              ? "text-white border-purple-500"
              : "text-gray-500 border-transparent hover:text-gray-300"
          }`}
        >
          All ({issues.length})
        </button>
        <button
          onClick={() => setFilter("open")}
          className={`px-4 py-2 text-sm font-medium transition-colors border-b-2 -mb-px ${
            filter === "open"
              ? "text-white border-green-500"
              : "text-gray-500 border-transparent hover:text-gray-300"
          }`}
        >
          🟢 Open ({openCount})
        </button>
        <button
          onClick={() => setFilter("closed")}
          className={`px-4 py-2 text-sm font-medium transition-colors border-b-2 -mb-px ${
            filter === "closed"
              ? "text-white border-gray-500"
              : "text-gray-500 border-transparent hover:text-gray-300"
          }`}
        >
          ✅ Resolved ({closedCount})
        </button>
      </div>

      {/* Loading state */}
      {loading && (
        <div className="text-center py-16">
          <div className="inline-block h-6 w-6 animate-spin rounded-full border-2 border-gray-600 border-t-purple-500" />
          <p className="text-gray-500 mt-4 text-sm">
            Loading debates from GitHub...
          </p>
        </div>
      )}

      {/* Error state */}
      {error && (
        <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-6 text-center">
          <p className="text-red-400 mb-2">Couldn&apos;t load issues: {error}</p>
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

      {/* Empty state */}
      {!loading && !error && filteredIssues.length === 0 && (
        <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-12 text-center">
          <div className="text-4xl mb-4">🤔</div>
          <h3 className="text-lg font-semibold mb-2">No debates yet</h3>
          <p className="text-gray-400 text-sm mb-4">
            {filter === "all"
              ? "Be the first to start a debate about AI history."
              : filter === "open"
              ? "No open debates right now."
              : "No resolved debates yet."}
          </p>
          <a
            href={`${REPO_URL}/issues/new`}
            className="inline-flex items-center gap-2 rounded-lg bg-gray-800 px-5 py-2.5 text-sm font-medium text-gray-200 transition-colors hover:bg-gray-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            📝 Start a Debate
          </a>
        </div>
      )}

      {/* Issues list */}
      {!loading && !error && filteredIssues.length > 0 && (
        <div className="space-y-4">
          {filteredIssues.map((issue) => (
            <a
              key={issue.number}
              href={issue.html_url}
              className="block rounded-xl border border-gray-800 bg-gray-900/50 p-5 question-card transition-all hover:bg-gray-900/80"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-start gap-3">
                {/* State indicator */}
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
                  {/* Title + labels */}
                  <div className="flex items-start gap-2 flex-wrap mb-1">
                    <h3 className="font-medium text-gray-100">
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

                  {/* Body preview */}
                  {issue.body && (
                    <p className="text-gray-500 text-sm mb-2 leading-relaxed">
                      {truncateBody(issue.body)}
                    </p>
                  )}

                  {/* Meta */}
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
                    {issue.updated_at !== issue.created_at && (
                      <span>updated {timeAgo(issue.updated_at)}</span>
                    )}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      )}

      <ContributeCard context="Want to challenge an event, question, or analysis? Start by opening a GitHub issue." />
    </div>
  );
}
