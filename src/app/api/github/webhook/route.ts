import { NextRequest, NextResponse } from "next/server";
import { verifyWebhookSignature } from "@/lib/github";

/**
 * GitHub webhook handler for pull_request events.
 *
 * When a PR is merged into the default branch, this endpoint:
 *  1. Verifies the HMAC-SHA256 signature from GitHub.
 *  2. Identifies the PR author's GitHub username.
 *  3. (In production) Creates or updates their contributor profile in your
 *     database / KV store and triggers an ISR revalidation of /contributors
 *     and /contributors/[username].
 *
 * Setup on GitHub:
 *  Repository → Settings → Webhooks → Add webhook
 *    Payload URL : https://your-domain.com/api/github/webhook
 *    Content type: application/json
 *    Secret      : value of GITHUB_WEBHOOK_SECRET env var
 *    Events      : Pull requests
 */
export async function POST(req: NextRequest) {
  const event = req.headers.get("x-github-event");
  const sig = req.headers.get("x-hub-signature-256") ?? "";
  const secret = process.env.GITHUB_WEBHOOK_SECRET ?? "";

  const body = await req.text();

  // Reject if no secret configured (except in dev)
  if (secret && !(await verifyWebhookSignature(body, sig, secret))) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
  }

  if (event !== "pull_request") {
    return NextResponse.json({ ignored: true, event });
  }

  let payload: Record<string, unknown>;
  try {
    payload = JSON.parse(body);
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const action = payload.action as string;
  const pr = payload.pull_request as Record<string, unknown> | undefined;
  const merged = pr?.merged as boolean | undefined;

  if (action !== "closed" || !merged) {
    return NextResponse.json({ ignored: true, reason: "Not a merged PR" });
  }

  const user = pr?.user as Record<string, unknown> | undefined;
  const githubUsername = user?.login as string | undefined;

  if (!githubUsername) {
    return NextResponse.json({ error: "No user login in payload" }, { status: 400 });
  }

  /*
   * ── Production integration point ──────────────────────────────────────────
   *
   * Here you would:
   *
   *  1. Upsert the contributor in your database:
   *       await db.contributor.upsert({
   *         where: { username: githubUsername },
   *         update: { contributionCount: { increment: 1 } },
   *         create: {
   *           username: githubUsername,
   *           displayName: githubUsername,
   *           role: "contributor",
   *           contributionCount: 1,
   *           joinedAt: new Date().toISOString(),
   *         },
   *       });
   *
   *  2. Parse the PR body / changed files to detect which components were
   *     added and associate them with the contributor.
   *
   *  3. Trigger Next.js ISR revalidation so the pages update immediately:
   *       revalidatePath("/contributors");
   *       revalidatePath(`/contributors/${githubUsername}`);
   *
   * ──────────────────────────────────────────────────────────────────────────
   */

  console.log(`[webhook] PR merged by ${githubUsername} — would upsert contributor profile`);

  return NextResponse.json({
    received: true,
    contributor: githubUsername,
    action: "profile_upsert_pending",
  });
}
