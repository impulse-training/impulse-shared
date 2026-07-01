/**
 * Engagement level — a *derived* recency classification of a user account.
 *
 * There is deliberately NO stored `engagement` field. Engagement is a pure
 * function of how long it has been since the user was last active, so we derive
 * it on read wherever it's needed (recap suppression, admin/dashboard display,
 * and — mirrored in SQL — dbt analytics). This avoids a denormalized column
 * that drifts and needs a daily job to maintain.
 *
 * Dead-signup cleanup is a SEPARATE concern handled by the markedForDeletion
 * flow (`deletionRequestedAt`), not by engagement.
 */

export type EngagementLevel = "engaged" | "slipping" | "distant" | "churned";

/**
 * Day thresholds since last activity. A user is `engaged` below `slipping`,
 * `slipping` up to `distant`, `distant` up to `churned`, and `churned` beyond.
 *
 * NOTE: the dbt view `impulse-analytics` replicates these numbers in SQL. Keep
 * the two in sync if you change them.
 */
export const ENGAGEMENT_THRESHOLDS = {
  slipping: 3,
  distant: 7,
  churned: 30,
} as const;

/** Recaps are only sent while a user is `engaged`. */
export const shouldSendRecap = (level: EngagementLevel): boolean =>
  level === "engaged";

// Permissive on purpose: accepts Firestore Timestamps (whose `toDate` may be
// typed optional in the web apps), Dates, or millis. The runtime guards below
// handle whatever actually shows up.
type DateLike = Date | number | { toDate?: () => Date } | null | undefined;

const toMillis = (value: DateLike): number | null => {
  if (value == null) return null;
  if (typeof value === "number") return value;
  if (value instanceof Date) return value.getTime();
  if (typeof (value as { toDate?: unknown }).toDate === "function") {
    return (value as { toDate: () => Date }).toDate().getTime();
  }
  return null;
};

const MS_PER_DAY = 24 * 60 * 60 * 1000;

/**
 * Derive a user's engagement level from their most recent activity signal.
 *
 * Pass the user doc (or the relevant timestamps). We use the freshest of
 * `lastActive` / `lastLogin` / `createdAt` as the "last active" reference, so a
 * brand-new signup (no `lastActive` yet) reads as `engaged` rather than churned.
 * Accepts Firestore Timestamps, Dates, or millis — works in functions, the web
 * apps, and tests.
 */
export function getEngagementLevel(
  user: {
    lastActive?: DateLike;
    lastLogin?: DateLike;
    createdAt?: DateLike;
  },
  now: DateLike = new Date(),
): EngagementLevel {
  const lastActiveMs =
    toMillis(user.lastActive) ??
    toMillis(user.lastLogin) ??
    toMillis(user.createdAt);
  // No activity signal at all (malformed doc): fail open as engaged rather than
  // wrongly suppressing recaps / mislabeling as churned.
  if (lastActiveMs == null) return "engaged";

  const nowMs = toMillis(now) ?? Date.now();
  const days = (nowMs - lastActiveMs) / MS_PER_DAY;

  if (days < ENGAGEMENT_THRESHOLDS.slipping) return "engaged";
  if (days < ENGAGEMENT_THRESHOLDS.distant) return "slipping";
  if (days < ENGAGEMENT_THRESHOLDS.churned) return "distant";
  return "churned";
}
