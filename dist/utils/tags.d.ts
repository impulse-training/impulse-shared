/**
 * Normalize a session tags value to always be string[].
 * Handles both legacy format (string) and new format (string[]).
 */
export declare function normalizeTagValue(value: string | string[] | undefined): string[];
/**
 * Normalize all tag values in a tags record to string[].
 */
export declare function normalizeTags(tags: Record<string, string | string[]> | undefined): Record<string, string[]>;
