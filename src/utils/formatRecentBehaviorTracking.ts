import type { BehaviorLog } from "../schemas/log/behaviorLog";
import { nowMs } from "./clock";

/**
 * Renders behavior logs the user recorded in the last few hours as a prompt
 * section.
 *
 * The AI has always been told a day total ("Social media & videos: 1h 45m") and,
 * for logs written inside the current session, a bare transcript line
 * ("Behavior tracked: Social media & videos - 15m"). Neither carries a time.
 * A user tracked a 15-minute lapse and started a call fifteen seconds later,
 * and the coach opened by asking whether they were "feeling pulled toward
 * something" — the tracking was in context, but nothing marked it as having
 * just happened, so it read as background rather than as the thing to talk
 * about.
 *
 * This section exists to make recency unmissable: newest first, each entry
 * stamped with how long ago it was and what the user said the outcome was.
 */

export interface FormatRecentBehaviorTrackingOptions {
  /** How far back to look. Default 6 hours. */
  windowMs?: number;
  /** Max entries rendered, newest first. Default 8. */
  cap?: number;
  /** Section heading. Default "RECENTLY TRACKED BEHAVIOR". */
  heading?: string;
  /** "Now" in epoch ms. Defaults to `nowMs()` (honors TEST_NOW_MS). */
  now?: number;
  /**
   * Logs written by this session are already in the transcript the model is
   * reading. Passing the session id marks them "(this session)" instead of
   * dropping them: the transcript line carries no time, and this is where the
   * time comes from.
   */
  sessionId?: string;
  /**
   * The line telling the model what to do about these. Pass null for the facts
   * with no instruction attached.
   *
   * The system prompt wants the instruction. The transcript copy must not have
   * it: a directive rendered into the message list is re-read on every turn
   * from the most salient position there is, and it then outranks whatever the
   * user actually just said. Measured, that cost two tool calls that should
   * have fired (setSessionTags on a feeling, proposeMergingBehaviors on a
   * recap task) — the model answered the standing instruction instead of the
   * turn in front of it.
   */
  guidance?: string | null;
}

const DEFAULT_WINDOW_MS = 6 * 60 * 60 * 1000;
const DEFAULT_CAP = 8;
const DEFAULT_HEADING = "RECENTLY TRACKED BEHAVIOR";
const DEFAULT_GUIDANCE =
  "What the user has logged in the last few hours, newest first. These have " +
  "already happened. The most recent entry is part of what is going on for " +
  "them right now, so this moment has context even when their message does " +
  "not: unless they have already brought it up in this conversation, name it " +
  "— what it was, how much, and how long ago — and let it lead what you ask " +
  "next.";

const OUTCOME_LABEL: Record<
  NonNullable<BehaviorLog["data"]["debriefOutcome"]>,
  string
> = {
  acted: "they acted on the urge",
  resisted: "they resisted the urge",
  still_there: "the urge was still there",
};

/**
 * Coarse buckets, not exact durations. The point is "is this happening now or
 * is it history", and a minute-precise figure invites the model to quote a
 * number back at the user.
 */
export function formatTimeAgo(deltaMs: number): string {
  if (deltaMs < 0) return "just now";
  const minutes = Math.floor(deltaMs / 60_000);
  if (minutes < 2) return "just now";
  if (minutes < 60) return `${minutes} minutes ago`;
  const hours = Math.floor(minutes / 60);
  const remainder = minutes % 60;
  if (hours === 1 && remainder === 0) return "an hour ago";
  if (remainder === 0) return `${hours} hours ago`;
  return hours === 1
    ? `an hour and ${remainder} minutes ago`
    : `${hours} hours ago`;
}

function toMillis(log: BehaviorLog): number | null {
  const ts = log.timestamp as
    | { toMillis?: () => number; toDate?: () => Date; _seconds?: number }
    | undefined;
  if (!ts) return null;
  if (typeof ts.toMillis === "function") return ts.toMillis();
  if (typeof ts.toDate === "function") return ts.toDate().getTime();
  if (typeof ts._seconds === "number") return ts._seconds * 1000;
  return null;
}

export function formatRecentBehaviorTrackingForPrompt(
  logs: BehaviorLog[],
  options: FormatRecentBehaviorTrackingOptions = {},
): string {
  const {
    windowMs = DEFAULT_WINDOW_MS,
    cap = DEFAULT_CAP,
    heading = DEFAULT_HEADING,
    now = nowMs(),
    sessionId,
    guidance = DEFAULT_GUIDANCE,
  } = options;

  const entries = logs
    .map((log) => ({ log, ms: toMillis(log) }))
    .filter(
      (entry): entry is { log: BehaviorLog; ms: number } =>
        entry.ms !== null && now - entry.ms <= windowMs,
    )
    // A placeholder debrief row (source "scheduled", no behavior yet) is a UI
    // scaffold, not something the user tracked. It has no name or amount to
    // report and would render as an empty bullet.
    .filter(({ log }) => Boolean(log.data?.behaviorName))
    .sort((a, b) => b.ms - a.ms)
    .slice(0, cap);

  if (entries.length === 0) return "";

  const lines: string[] = [`## ${heading}`];
  if (guidance) lines.push(guidance);
  lines.push("");

  for (const { log, ms } of entries) {
    const { behaviorName, formattedValue, debriefOutcome } = log.data;
    const amount = formattedValue ? ` - ${formattedValue}` : "";
    const when =
      sessionId && log.sessionId === sessionId
        ? `${formatTimeAgo(now - ms)}, in this conversation`
        : formatTimeAgo(now - ms);
    const outcome = debriefOutcome ? `; ${OUTCOME_LABEL[debriefOutcome]}` : "";
    lines.push(`- ${behaviorName}${amount} (${when}${outcome})`);
  }

  return lines.join("\n");
}
