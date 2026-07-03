const REPO_OWNER = "openui-hub";
const REPO_NAME = "openui-hub";

export function getGitHubAvatarUrl(username: string, size = 80): string {
  return `https://github.com/${username}.png?size=${size}`;
}

export function getGitHubProfileUrl(username: string): string {
  return `https://github.com/${username}`;
}

export function getGitHubRepoUrl(path = ""): string {
  return `https://github.com/${REPO_OWNER}/${REPO_NAME}${path}`;
}

export interface GitHubContributor {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  contributions: number;
}

export interface GitHubPullRequest {
  number: number;
  title: string;
  merged_at: string | null;
  user: { login: string; avatar_url: string; html_url: string };
}

/** Fetch repo contributors from the GitHub REST API. Requires GITHUB_TOKEN env var for higher rate limits. */
export async function fetchRepoContributors(): Promise<GitHubContributor[]> {
  try {
    const res = await fetch(
      `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contributors?per_page=100`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
          ...(process.env.GITHUB_TOKEN
            ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
            : {}),
        },
        next: { revalidate: 3600 },
      }
    );
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

/** Fetch merged pull requests for the repo. */
export async function fetchMergedPRs(page = 1): Promise<GitHubPullRequest[]> {
  try {
    const res = await fetch(
      `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/pulls?state=closed&per_page=50&page=${page}`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
          ...(process.env.GITHUB_TOKEN
            ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
            : {}),
        },
        next: { revalidate: 3600 },
      }
    );
    if (!res.ok) return [];
    const prs: GitHubPullRequest[] = await res.json();
    return prs.filter((pr) => pr.merged_at !== null);
  } catch {
    return [];
  }
}

/** Verify a GitHub webhook signature (HMAC-SHA256). */
export async function verifyWebhookSignature(
  payload: string,
  signature: string,
  secret: string
): Promise<boolean> {
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const mac = await crypto.subtle.sign("HMAC", key, encoder.encode(payload));
  const hex = Array.from(new Uint8Array(mac))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
  return `sha256=${hex}` === signature;
}
