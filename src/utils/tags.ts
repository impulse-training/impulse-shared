/**
 * Normalize a session tags value to always be string[].
 * Handles both legacy format (string) and new format (string[]).
 */
export function normalizeTagValue(value: string | string[] | undefined): string[] {
  if (!value) return [];
  if (Array.isArray(value)) return value;
  return [value];
}

/**
 * Normalize all tag values in a tags record to string[].
 */
export function normalizeTags(
  tags: Record<string, string | string[]> | undefined,
): Record<string, string[]> {
  if (!tags) return {};
  const result: Record<string, string[]> = {};
  for (const [key, value] of Object.entries(tags)) {
    result[key] = normalizeTagValue(value);
  }
  return result;
}
