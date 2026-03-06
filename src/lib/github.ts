const REPO = "Deva-me-AI/AI-History-in-the-Making";
const API = `https://api.github.com/repos/${REPO}`;

export interface ActivityItem {
  id: string;
  type: "issue" | "pr" | "comment" | "discussion" | "commit";
  title: string;
  body: string;
  url: string;
  updatedAt: string;
  author: {
    login: string;
    avatarUrl: string;
    htmlUrl: string;
  };
  labels: { id: number; name: string; color: string }[];
}

async function ghFetch(path: string): Promise<unknown[]> {
  try {
    const res = await fetch(`${API}${path}`, {
      headers: { Accept: "application/vnd.github+json" },
      next: { revalidate: 300 },
    });
    if (!res.ok) return [];
    return (await res.json()) as unknown[];
  } catch {
    return [];
  }
}

function author(u: Record<string, string>) {
  return {
    login: u?.login ?? "ghost",
    avatarUrl: u?.avatar_url ?? "https://github.com/ghost.png",
    htmlUrl: u?.html_url ?? "https://github.com/ghost",
  };
}

// biome-ignore lint: any is fine for raw API responses
function labels(raw: any[]): ActivityItem["labels"] {
  return (raw ?? []).map((l: Record<string, unknown>) => ({
    id: l.id as number,
    name: l.name as string,
    color: l.color as string,
  }));
}

export async function getRecentActivity(limit = 18): Promise<ActivityItem[]> {
  const [issues, prs, comments, commits] = await Promise.all([
    ghFetch("/issues?state=all&sort=updated&per_page=10"),
    ghFetch("/pulls?state=all&sort=updated&per_page=10"),
    ghFetch("/issues/comments?sort=updated&per_page=10"),
    ghFetch("/commits?per_page=10"),
  ]);

  const items: ActivityItem[] = [];

  // biome-ignore lint: raw API
  for (const i of issues as any[]) {
    if (i.pull_request) continue; // skip PRs in issues endpoint
    items.push({
      id: `issue-${i.id}`,
      type: "issue",
      title: i.title,
      body: i.body ?? "",
      url: i.html_url,
      updatedAt: i.updated_at,
      author: author(i.user),
      labels: labels(i.labels),
    });
  }

  // biome-ignore lint: raw API
  for (const p of prs as any[]) {
    items.push({
      id: `pr-${p.id}`,
      type: "pr",
      title: p.title,
      body: p.body ?? "",
      url: p.html_url,
      updatedAt: p.updated_at,
      author: author(p.user),
      labels: labels(p.labels),
    });
  }

  // biome-ignore lint: raw API
  for (const c of comments as any[]) {
    const issueUrl = c.issue_url as string;
    const issueNum = issueUrl.split("/").pop();
    items.push({
      id: `comment-${c.id}`,
      type: "comment",
      title: `Comment on #${issueNum}`,
      body: c.body ?? "",
      url: c.html_url,
      updatedAt: c.updated_at,
      author: author(c.user),
      labels: [],
    });
  }

  // biome-ignore lint: raw API
  for (const co of commits as any[]) {
    const msg = co.commit?.message ?? "";
    const isMerge = msg.startsWith("Merge");
    items.push({
      id: `commit-${co.sha}`,
      type: isMerge ? "pr" : "commit",
      title: msg.split("\n")[0],
      body: msg.split("\n").slice(1).join("\n").trim(),
      url: co.html_url,
      updatedAt: co.commit?.committer?.date ?? co.commit?.author?.date ?? "",
      author: co.author ? author(co.author) : { login: co.commit?.author?.name ?? "unknown", avatarUrl: "https://github.com/ghost.png", htmlUrl: "https://github.com/ghost" },
      labels: [],
    });
  }

  items.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());

  // deduplicate by id
  const seen = new Set<string>();
  const unique = items.filter((i) => {
    if (seen.has(i.id)) return false;
    seen.add(i.id);
    return true;
  });

  return unique.slice(0, limit);
}
