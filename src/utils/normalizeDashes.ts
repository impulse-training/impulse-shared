// Em dashes are the single loudest "written by an LLM" tell in our copy: at the
// time this was added, 35.6% of recent assistant messages contained one. The
// models are only doing what our own system prompts do, which are themselves
// written in a heavy em-dash style, so a "no em dashes" prompt rule would be
// fighting several thousand words of counter-example. We normalise on the way
// out instead.
//
// Apply this at write time, at a choke point, to LLM-authored user-facing text
// only. Do NOT apply it to prompts, admin/judge output, or anything the user
// typed themselves.

const FANCY_DASH_CLASS = "–—―"; // en dash, em dash, horizontal bar

// Every rule matches horizontal whitespace only, never `\s`: a newline must
// never be absorbed, or a dash sitting at a paragraph break would silently
// join the two paragraphs (and the chat path splits on those breaks).
const NUMERIC_RANGE = new RegExp(
  `(\\d)[ \\t]*[${FANCY_DASH_CLASS}][ \\t]*(\\d)`,
  "g",
);
const LINE_LEADING = new RegExp(`^([ \\t]*)[${FANCY_DASH_CLASS}][ \\t]*`, "gm");
const LINE_TRAILING = new RegExp(`[ \\t]*[${FANCY_DASH_CLASS}][ \\t]*$`, "gm");
const REMAINING = new RegExp(`[ \\t]*[${FANCY_DASH_CLASS}][ \\t]*`, "g");

export const hasFancyDash = (text: string): boolean =>
  new RegExp(`[${FANCY_DASH_CLASS}]`).test(text);

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
export function normalizeDashes(text: string): string {
  if (!hasFancyDash(text)) return text;
  return text
    .replace(NUMERIC_RANGE, "$1-$2")
    .replace(LINE_LEADING, "$1")
    .replace(LINE_TRAILING, "")
    .replace(REMAINING, " - ");
}

/**
 * Applies `normalizeDashes` to every string in a parsed JSON value, in place of
 * ~15 separate per-field calls at the tool boundary. Structure, key names and
 * non-string values are untouched.
 *
 * Safe over tool arguments because the non-prose fields (ids, ISO dates, enum
 * values) never contain a fancy dash, so the walk is a no-op for them.
 */
export function normalizeDashesDeep<T>(value: T): T {
  if (typeof value === "string") return normalizeDashes(value) as unknown as T;
  if (Array.isArray(value))
    return value.map((entry) => normalizeDashesDeep(entry)) as unknown as T;
  if (value !== null && typeof value === "object") {
    const out: Record<string, unknown> = {};
    for (const [key, entry] of Object.entries(value)) {
      out[key] = normalizeDashesDeep(entry);
    }
    return out as T;
  }
  return value;
}
