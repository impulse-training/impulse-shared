import { PLAN_AFFIRMATION_DECAY_DAYS, planIsStale } from "./planFreshness";

const DAY = 24 * 60 * 60 * 1000;
const NOW = 1_800_000_000_000;
const ts = (msAgo: number) => ({ toMillis: () => NOW - msAgo });

describe("planIsStale", () => {
  it("is fresh within the decay window", () => {
    expect(planIsStale({ affirmedAt: ts(2 * DAY) }, NOW)).toBe(false);
    expect(
      planIsStale({ affirmedAt: ts(PLAN_AFFIRMATION_DECAY_DAYS * DAY) }, NOW),
    ).toBe(false);
  });

  it("is stale past the window", () => {
    expect(
      planIsStale({ affirmedAt: ts((PLAN_AFFIRMATION_DECAY_DAYS + 1) * DAY) }, NOW),
    ).toBe(true);
  });

  it("falls back to createdAt when never affirmed", () => {
    expect(planIsStale({ createdAt: ts(30 * DAY) }, NOW)).toBe(true);
    expect(planIsStale({ createdAt: ts(1 * DAY) }, NOW)).toBe(false);
  });

  it("affirmedAt beats an old createdAt", () => {
    expect(
      planIsStale({ createdAt: ts(60 * DAY), affirmedAt: ts(1 * DAY) }, NOW),
    ).toBe(false);
  });

  it("treats unknown age as fresh", () => {
    expect(planIsStale({}, NOW)).toBe(false);
  });
});
