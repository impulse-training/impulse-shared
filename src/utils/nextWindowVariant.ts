import { ProtectNextWindowVariant } from "../schemas/task";

/**
 * Picks the time-shaped variant of the protect_next_window arc. Time alters
 * the arc rather than suppressing it — containment is immediate risk
 * management and coexists with the retrospective recap, so there is no "too
 * late for containment" hour:
 *
 * - pre_recap — the user's nightly recap fires within the next
 *   PRE_RECAP_WINDOW_MINUTES: keep the arc to one short exchange; the recap
 *   revisits the commitment.
 * - evening — from EVENING_START_HOUR, or the small hours before
 *   NIGHT_END_HOUR (a 1am urge is still "tonight"): the window is the rest of
 *   the evening; shape it lightly and transition toward sleep.
 * - daytime — everything else: the full arc.
 *
 * Pure so the boundaries are unit-testable; callers resolve timezone and the
 * recap trigger before calling.
 */
export const EVENING_START_HOUR = 20;
export const NIGHT_END_HOUR = 5;
export const PRE_RECAP_WINDOW_MINUTES = 90;

export function selectNextWindowVariant(args: {
  /** Local time of day for the user, minutes since midnight. */
  localMinutes: number;
  /** The user's recap trigger, minutes since midnight — if configured. */
  recapTriggerMinutes?: number;
}): ProtectNextWindowVariant {
  const { localMinutes, recapTriggerMinutes } = args;

  // pre_recap wins over evening: recap triggers live in the evening by
  // design, and "keep it short, the recap picks this up" is the more specific
  // instruction for that overlap.
  if (recapTriggerMinutes != null) {
    const untilRecap = recapTriggerMinutes - localMinutes;
    if (untilRecap >= 0 && untilRecap <= PRE_RECAP_WINDOW_MINUTES) {
      return "pre_recap";
    }
  }

  const hour = Math.floor(localMinutes / 60);
  if (hour >= EVENING_START_HOUR || hour < NIGHT_END_HOUR) {
    return "evening";
  }

  return "daytime";
}

/**
 * Local minutes-since-midnight for a moment in an IANA timezone. Separated
 * from the selector so the selector stays pure.
 */
export function getLocalMinutes(now: Date, timezone: string): number {
  const parts = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: false,
    timeZone: timezone,
  }).formatToParts(now);
  const hour = Number(parts.find((p) => p.type === "hour")?.value ?? 0) % 24;
  const minute = Number(parts.find((p) => p.type === "minute")?.value ?? 0);
  return hour * 60 + minute;
}
