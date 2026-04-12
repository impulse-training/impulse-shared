export * from "./getUnrecappedDays";
export declare const DATE_FORMAT = "yyyy-MM-dd";
export declare function getDateString(date: Date, timezone: string): string;
/**
 * Get the recap deadline for a given target date string.
 * The deadline is midnight at the start of (targetDate + 2 days) in the user's timezone —
 * i.e. the end of the day after the target date.
 *
 * @param targetDateString - The date being recapped (e.g. "2026-04-03")
 * @param timezone - The user's IANA timezone (e.g. "America/Mexico_City").
 *                   Omit on the client — JS local time is used instead.
 */
export declare function getRecapDeadline(targetDateString: string, timezone?: string): Date;
