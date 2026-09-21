/**
 * Where a day's "no specific time" adjustment lives.
 *
 * Correcting a day's total — on the totals card, or by voice on the morning
 * call — writes ONE behavior log per behavior and day, in a session of its
 * own, rather than into whatever conversation happened to ask. Both writers
 * derive the ids here so a correction looks the same whichever made it
 * (2026-09-21: the call wrote its correction into the recap session, so it
 * showed up as a card mid-conversation and carried the call's time rather
 * than the day's).
 */

/** Deterministic id of the adjustment session for a behavior on a day. */
export function adjustmentSessionId(dateString: string, behaviorId: string): string {
  return `${dateString}-adjustment-${behaviorId}`;
}

/** What that session is called in the journal. */
export function adjustmentSessionTitle(behaviorName: string | undefined): string {
  return `Adjusted ${behaviorName ?? "behavior"}`;
}

/**
 * The last instant of a local day, as epoch millis, in the given IANA zone.
 * An adjustment with no time sorts after everything else that day.
 */
export function endOfLocalDayMs(dateString: string, timeZone: string): number {
  const [year, month, day] = dateString.split("-").map(Number);
  // The zone's offset at midday that day (never in a DST gap), applied to the
  // day's last local millisecond.
  const midday = Date.UTC(year, month - 1, day, 12);
  const asZoned = new Date(new Date(midday).toLocaleString("en-US", { timeZone }));
  const asUtc = new Date(new Date(midday).toLocaleString("en-US", { timeZone: "UTC" }));
  const offsetMs = asUtc.getTime() - asZoned.getTime();
  return Date.UTC(year, month - 1, day, 23, 59, 59, 999) + offsetMs;
}
