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

export type EngagementLevel =
  // Un-activated branch — never created a behavior. Takes precedence over the
  // recency ladder regardless of how recently the app was opened.
  | "new" // signed up < ACTIVATION_GRACE_MINUTES ago; still plausibly onboarding
  | "ghost" // signed up longer ago and still never activated (dead signup)
  // Activated branch — recency ladder for users who crossed into being real.
  | "engaged"
  | "slipping"
  | "distant"
  | "churned";

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

/**
 * Grace window (minutes) after signup during which a never-activated account
 * still reads as `new` rather than `ghost`. Long enough to cover a real
 * onboarding session (with interruptions); past it, an account that still has
 * no behavior is treated as a dead signup.
 *
 * NOTE: the dbt view `impulse-analytics` replicates this in SQL — keep in sync.
 */
export const ACTIVATION_GRACE_MINUTES = 60;

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
const MS_PER_MINUTE = 60 * 1000;

/** A user "activated" once they created at least one (unmerged) behavior. */
const hasActivated = (user: { behaviorNames?: readonly string[] }): boolean =>
  (user.behaviorNames?.length ?? 0) > 0;

/**
 * Derive a user's engagement level.
 *
 * Two axes, not one. First an ACTIVATION gate: a user who never created a
 * behavior isn't on the recency ladder at all — they're `new` within the first
 * `ACTIVATION_GRACE_MINUTES` after signup (still plausibly onboarding), and
 * `ghost` after that (a dead signup). This mirrors the markedForDeletion flow's
 * definition of a real user (`userHasBehaviors`); `behaviorNames` is the
 * denormalized in-doc mirror of it. The gate fires regardless of how recently
 * the app was opened — opening the app and doing nothing doesn't make you real.
 *
 * Only once activated do we classify by RECENCY, using the freshest of
 * `lastActive` / `lastLogin` / `createdAt`. Accepts Firestore Timestamps,
 * Dates, or millis — works in functions, the web apps, and tests.
 */
export function getEngagementLevel(
  user: {
    lastActive?: DateLike;
    lastLogin?: DateLike;
    createdAt?: DateLike;
    behaviorNames?: readonly string[];
  },
  now: DateLike = new Date(),
): EngagementLevel {
  const nowMs = toMillis(now) ?? Date.now();

  // Activation gate: never created a behavior => new / ghost, ignoring recency.
  if (!hasActivated(user)) {
    // Account age anchors on createdAt; fall back to the oldest signal we have
    // (best proxy for signup), and if none, stay benign (`new`).
    const signupMs =
      toMillis(user.createdAt) ??
      toMillis(user.lastLogin) ??
      toMillis(user.lastActive);
    if (signupMs == null) return "new";
    const minutesOld = (nowMs - signupMs) / MS_PER_MINUTE;
    return minutesOld < ACTIVATION_GRACE_MINUTES ? "new" : "ghost";
  }

  const lastActiveMs =
    toMillis(user.lastActive) ??
    toMillis(user.lastLogin) ??
    toMillis(user.createdAt);
  // Activated but no activity signal at all (malformed doc): fail open as
  // engaged rather than wrongly suppressing recaps / mislabeling as churned.
  if (lastActiveMs == null) return "engaged";

  const days = (nowMs - lastActiveMs) / MS_PER_DAY;

  if (days < ENGAGEMENT_THRESHOLDS.slipping) return "engaged";
  if (days < ENGAGEMENT_THRESHOLDS.distant) return "slipping";
  if (days < ENGAGEMENT_THRESHOLDS.churned) return "distant";
  return "churned";
}
