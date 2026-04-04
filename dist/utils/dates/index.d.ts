export * from "./getUnrecappedDays";
export declare const DATE_FORMAT = "yyyy-MM-dd";
export declare function getDateString(date: Date, timezone: string): string;
/**
 * Get the recap deadline for a given target date string.
 * "Late" means after midnight at the end of the day after the target date.
 *
 * @param targetDateString - The date being recapped (e.g. "2026-04-03")
 * @param utcBuffer - If true, adds 12h buffer to handle server-side UTC execution.
 *                    Use true on the server, false on the client (which has local time).
 */
export declare function getRecapDeadline(targetDateString: string, utcBuffer?: boolean): Date;
