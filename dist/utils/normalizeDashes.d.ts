export declare const hasFancyDash: (text: string) => boolean;
/**
 * Rewrites en/em dashes as plain ASCII.
 *
 * A bare hyphen is the wrong substitution for the common case: the models
 * mostly emit an unspaced parenthetical dash, so `for you—how are you` would
 * become `for you-how are you`, which reads worse than what we started with.
 * A SPACED hyphen preserves the pause and stays readable, so that is the
 * default. The three narrower rules ahead of it exist because a spaced hyphen
 * is wrong for ranges (`3–5` wants `3-5`) and for a dash that opens or closes
 * a line, which is a sign-off or a stray rather than a parenthetical.
 */
export declare function normalizeDashes(text: string): string;
/**
 * Applies `normalizeDashes` to every string in a parsed JSON value, in place of
 * ~15 separate per-field calls at the tool boundary. Structure, key names and
 * non-string values are untouched.
 *
 * Safe over tool arguments because the non-prose fields (ids, ISO dates, enum
 * values) never contain a fancy dash, so the walk is a no-op for them.
 */
export declare function normalizeDashesDeep<T>(value: T): T;
