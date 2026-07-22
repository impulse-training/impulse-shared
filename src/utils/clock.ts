/**
 * Wall-clock accessor with a test override.
 *
 * Returns real time in normal operation. When `TEST_NOW_MS` is set (session
 * tests / CI), it returns that fixed millisecond value instead, so anything
 * time-derived — prompt text ("it's now 9:23am", "2 days ago"), live-vs-past
 * checks — is reproducible across runs. That reproducibility is what lets the
 * LLM response cache actually hit run-to-run.
 *
 * `TEST_NOW_MS` is unset in production, so prod behavior is unchanged: this is
 * the wrapped `now()` to use everywhere instead of `new Date()` / `Date.now()`.
 */
export function nowMs(): number {
  const override =
    typeof process !== "undefined" ? process.env?.TEST_NOW_MS : undefined;
  if (override) {
    const parsed = Number(override);
    if (Number.isFinite(parsed)) return parsed;
  }
  return Date.now();
}

/** `new Date()` equivalent honoring the `TEST_NOW_MS` override. */
export function nowDate(): Date {
  return new Date(nowMs());
}
