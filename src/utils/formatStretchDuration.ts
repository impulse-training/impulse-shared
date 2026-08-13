const MINUTE_MS = 60_000;
const HOUR_MS = 60 * MINUTE_MS;
const DAY_MS = 24 * HOUR_MS;

/**
 * Formats an elapsed duration for the "time without the behavior" stretch
 * metric: "47m", "9h 40m", "2d 6h".
 *
 * Floors at each unit; drops a zero minor unit ("9h", "2d"). Anything under a
 * minute — including negative input, which happens when a stretch anchor is in
 * the future (acted today with unknown last time → end of today) — renders as
 * "0m".
 */
export function formatStretchDuration(ms: number): string {
  if (ms < MINUTE_MS) return "0m";

  if (ms < HOUR_MS) {
    return `${Math.floor(ms / MINUTE_MS)}m`;
  }

  if (ms < DAY_MS) {
    const hours = Math.floor(ms / HOUR_MS);
    const minutes = Math.floor((ms % HOUR_MS) / MINUTE_MS);
    return minutes > 0 ? `${hours}h ${minutes}m` : `${hours}h`;
  }

  const days = Math.floor(ms / DAY_MS);
  const hours = Math.floor((ms % DAY_MS) / HOUR_MS);
  return hours > 0 ? `${days}d ${hours}h` : `${days}d`;
}
