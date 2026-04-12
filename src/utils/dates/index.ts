export * from "./getUnrecappedDays";

export const DATE_FORMAT = "yyyy-MM-dd";

import { format } from "date-fns";
import { fromZonedTime, toZonedTime } from "date-fns-tz";

// Get a date string that can be used for SQL queries
export function getDateString(date: Date, timezone: string) {
  return format(toZonedTime(date, timezone), DATE_FORMAT);
}

/**
 * Get the recap deadline for a given target date string.
 * The deadline is midnight at the start of (targetDate + 2 days) in the user's timezone —
 * i.e. the end of the day after the target date.
 *
 * @param targetDateString - The date being recapped (e.g. "2026-04-03")
 * @param timezone - The user's IANA timezone (e.g. "America/Mexico_City").
 *                   Omit on the client — JS local time is used instead.
 */
export function getRecapDeadline(
  targetDateString: string,
  timezone?: string,
): Date {
  const [year, month, day] = targetDateString.split("-").map(Number);
  // +2 days: JS Date handles month/year rollover automatically
  const deadlineLocalDate = new Date(year, month - 1, day + 2);
  const deadlineDateStr = format(deadlineLocalDate, DATE_FORMAT);

  if (timezone) {
    // Midnight in the user's timezone → UTC Date
    return fromZonedTime(`${deadlineDateStr}T00:00:00`, timezone);
  }

  // Client-side: midnight in device local time
  deadlineLocalDate.setHours(0, 0, 0, 0);
  return deadlineLocalDate;
}
