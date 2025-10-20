export * from "./getUnrecappedDays";

export const DATE_FORMAT = "yyyy-MM-dd";

import { format } from "date-fns";
import { toZonedTime } from "date-fns-tz";

// Get a date string that can be used for SQL queries
export function getDateString(date: Date, timezone: string) {
  return format(toZonedTime(date, timezone), DATE_FORMAT);
}
