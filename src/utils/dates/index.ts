export * from "./getUnrecappedDays";

export const DATE_FORMAT = "yyyy-MM-dd";

import { format } from "date-fns";
import { toZonedTime } from "date-fns-tz";

// Get a date string that can be used for SQL queries
export function getDateString(date: Date, timezone: string) {
  return format(toZonedTime(date, timezone), DATE_FORMAT);
}

/**
 * Get the recap deadline for a given target date string.
 * "Late" means after midnight at the end of the day after the target date.
 *
 * @param targetDateString - The date being recapped (e.g. "2026-04-03")
 * @param utcBuffer - If true, adds 12h buffer to handle server-side UTC execution.
 *                    Use true on the server, false on the client (which has local time).
 */
export function getRecapDeadline(
  targetDateString: string,
  utcBuffer = false,
): Date {
  const [year, month, day] = targetDateString.split("-").map(Number);
  const targetDate = new Date(year, month - 1, day);
  const deadline = new Date(targetDate);
  deadline.setDate(deadline.getDate() + 2);
  deadline.setHours(utcBuffer ? 12 : 0, 0, 0, 0);
  return deadline;
}
