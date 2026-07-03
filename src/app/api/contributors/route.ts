import { NextResponse } from "next/server";
import { contributors } from "@/data/contributors";
import { getComponentsByContributor } from "@/data";
import { getGitHubAvatarUrl, getGitHubProfileUrl } from "@/lib/github";

export const dynamic = "force-dynamic";

export async function GET() {
  const data = contributors.map((c) => ({
    username: c.username,
    displayName: c.displayName,
    role: c.role,
    bio: c.bio,
    avatarUrl: getGitHubAvatarUrl(c.username, 96),
    githubUrl: getGitHubProfileUrl(c.username),
    componentCount: getComponentsByContributor(c.username).length,
    contributionCount: c.contributionCount,
    joinedAt: c.joinedAt,
  }));

  return NextResponse.json({ contributors: data, total: data.length });
}
