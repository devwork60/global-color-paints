import { createHash } from "node:crypto";

interface Bucket {
  count: number;
  resetAt: number;
}

const buckets = new Map<string, Bucket>();

/** A small in-memory limiter: at most `limit` calls per `windowMs` for each key (here, a visitor's IP).
    It lives in one server process, so it slows casual spam but is not a hard guarantee on its own. */
export function allowRequest(key: string, limit = 5, windowMs = 15 * 60 * 1000): boolean {
  const now = Date.now();

  // Drop expired entries so the map cannot grow forever.
  if (buckets.size > 500) {
    for (const [k, b] of buckets) if (b.resetAt <= now) buckets.delete(k);
  }

  const bucket = buckets.get(key);
  if (!bucket || bucket.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return true;
  }
  if (bucket.count >= limit) return false;
  bucket.count += 1;
  return true;
}

const recentLeads = new Map<string, number>();
const DUPLICATE_WINDOW_MS = 60 * 1000;

/** Fingerprint of a lead. Only a hash is kept in memory, never the visitor's details. */
export const leadFingerprint = (...parts: string[]) =>
  createHash("sha256").update(parts.map((p) => p.trim().toLowerCase()).join("|")).digest("hex");

/** True if an identical lead was already emailed in the last minute (a double click or a retry). */
export function wasRecentlySent(fingerprint: string): boolean {
  const sentAt = recentLeads.get(fingerprint);
  return sentAt !== undefined && Date.now() - sentAt < DUPLICATE_WINDOW_MS;
}

/** Remember a lead only after its email was accepted, so a failed send can always be retried. */
export function markSent(fingerprint: string) {
  const now = Date.now();
  for (const [k, t] of recentLeads) if (now - t >= DUPLICATE_WINDOW_MS) recentLeads.delete(k);
  recentLeads.set(fingerprint, now);
}
