import { isTaskAwaitingApproval } from "../schemas/task";

/**
 * The "let's get set up" walkthrough: one Home card that opens a single
 * session and works through whatever suggested tasks the user currently has.
 *
 * Membership is resolved LIVE, at open time, from the user's open tasks —
 * never from a stored list. Hand-authored `create_session` bundles froze a
 * snapshot of `taskIds` at creation, so a bundle written weeks ago pointed at
 * tasks that had since been deleted while newer tasks piled up outside it,
 * each surfacing its own competing Home card.
 *
 * Client and server MUST agree on membership: the client decides whether to
 * show the walkthrough card (and hides the individual task cards it absorbs),
 * and the server decides what the session actually claims. Two copies of this
 * rule would drift, so both import these helpers.
 */

/** The single system-owned walkthrough task, and hence its session id. */
export const WALKTHROUGH_TASK_ID = "setup_walkthrough";
export const WALKTHROUGH_SESSION_ID = `task_${WALKTHROUGH_TASK_ID}`;

/**
 * Below this, a task is better surfaced as its own specific card ("Understand
 * doomscrolling") than hidden behind a generic "let's get set up". The
 * walkthrough only earns its place once there's an actual sequence.
 */
export const WALKTHROUGH_MIN_TASKS = 2;

/**
 * Types that never belong in the walkthrough because each already has a
 * dedicated surface. Mirrors the recap claim filter
 * (`filterAndRankClaimableRecapTasks`), plus `create_session` itself.
 *
 * suggest_strategy / propose_goal are strategy changes, which belong to the
 * weekly review. They're normally marked `claimableSessionTypes: ["recap"]`
 * and would be filtered on that alone, but the recap filter learned the hard
 * way that some get created without it — so exclude by type as well.
 */
export const WALKTHROUGH_EXCLUDED_TASK_TYPES: ReadonlySet<string> = new Set([
  "recap_question",
  "weekly_review",
  "create_session",
  "suggest_tactic",
  "suggest_strategy",
  "propose_goal",
]);

/**
 * Ordering within the session. Some pairs have a real dependency: merging two
 * behaviors before understanding them avoids running the benefits/drawbacks
 * conversation twice, once for a behavior that's about to be archived.
 * Unlisted types sort after these, then by `ordinal`.
 */
const TYPE_PRIORITY: Record<string, number> = {
  merge_behaviors: 10,
  propose_mask_behavior: 20,
  understand_behavior: 30,
  collect_baseline: 40,
  propose_experiment: 50,
  setup_shortcut: 60,
};

const UNPRIORITIZED = 100;

/** Raw task doc data, as claim paths see it (untyped snapshots). */
export interface WalkthroughCandidate {
  type?: unknown;
  status?: unknown;
  approvedAt?: unknown;
  ordinal?: unknown;
  minAppVersion?: unknown;
  claimedBySessionId?: unknown;
  claimableSessionTypes?: unknown;
}

/**
 * Semver-ish gate matching the recap filter: a task requiring a newer build
 * than the user has stays hidden, so we never open a flow this app can't
 * render. An unknown app version fails closed.
 */
const meetsWalkthroughMinVersion = (
  userAppVersion: string | undefined,
  minAppVersion: string,
): boolean => {
  if (!userAppVersion) return false;
  const ua = userAppVersion.split(".").map((s) => parseInt(s, 10) || 0);
  const min = minAppVersion.split(".").map((s) => parseInt(s, 10) || 0);
  for (let i = 0; i < 3; i++) {
    const diff = (ua[i] || 0) - (min[i] || 0);
    if (diff < 0) return false;
    if (diff > 0) break;
  }
  return true;
};

/**
 * True when an open task should be worked through in the walkthrough.
 *
 * Tasks already claimed by another session are left alone so an in-progress
 * recap keeps the beats it picked up. The walkthrough's OWN claims stay
 * eligible on purpose: that's what keeps the card alive after the user works
 * through half the list and leaves, and it lets a reopened session top itself
 * up with tasks created since.
 */
export const isWalkthroughEligibleTask = (
  task: WalkthroughCandidate,
  userAppVersion: string | undefined,
): boolean => {
  if (task.status !== "open") return false;
  if (typeof task.type !== "string") return false;
  if (WALKTHROUGH_EXCLUDED_TASK_TYPES.has(task.type)) return false;
  if (isTaskAwaitingApproval(task)) return false;

  const claimedBy = task.claimedBySessionId;
  if (typeof claimedBy === "string" && claimedBy !== WALKTHROUGH_SESSION_ID) {
    return false;
  }

  // A task pinned to specific session types opts in only by naming "general";
  // an unset list means "anywhere". Recap-only tasks (strategy changes, recap
  // questions) stay in the recap where they belong.
  const claimable = task.claimableSessionTypes;
  if (Array.isArray(claimable) && claimable.length > 0) {
    if (!claimable.includes("general")) return false;
  }

  if (typeof task.minAppVersion === "string") {
    if (!meetsWalkthroughMinVersion(userAppVersion, task.minAppVersion)) {
      return false;
    }
  }

  return true;
};

/** Dependency-aware order, then `ordinal`, then id for a stable tie-break. */
export const compareWalkthroughTasks = (
  a: { id: string; type?: unknown; ordinal?: unknown },
  b: { id: string; type?: unknown; ordinal?: unknown },
): number => {
  const priority = (t: unknown) =>
    typeof t === "string" ? (TYPE_PRIORITY[t] ?? UNPRIORITIZED) : UNPRIORITIZED;
  const byType = priority(a.type) - priority(b.type);
  if (byType !== 0) return byType;

  const ordinal = (o: unknown) =>
    typeof o === "number" ? o : Number.MAX_SAFE_INTEGER;
  const byOrdinal = ordinal(a.ordinal) - ordinal(b.ordinal);
  if (byOrdinal !== 0) return byOrdinal;

  return a.id.localeCompare(b.id);
};

/** Copy for the Home card, which reflects the live count rather than a stored list. */
export const walkthroughSubtitle = (count: number): string =>
  count === 1 ? "1 thing to work through" : `${count} things to work through`;
