import {
  PLAN_AFFIRMATION_DECAY_DAYS,
  planIsFatigued,
  planIsStale,
} from "./planFreshness";

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

describe("planIsFatigued", () => {
  const t = (msAgo: number) => ({ toMillis: () => NOW - msAgo });
  const acted = (msAgo: number, extra = {}) => ({
    started: true,
    actedOnUrge: true,
    sessionDate: t(msAgo),
    ...extra,
  });
  const resisted = (msAgo: number) => ({
    started: true,
    actedOnUrge: false,
    sessionDate: t(msAgo),
  });

  it("fatigued after two recent non-successes", () => {
    expect(planIsFatigued([acted(2 * DAY), acted(1 * DAY)])).toBe(true);
  });

  it("an ignored offer in an acted session counts", () => {
    expect(
      planIsFatigued([
        acted(2 * DAY),
        { started: false, offered: true, actedOnUrge: true, sessionDate: t(1 * DAY) },
      ]),
    ).toBe(true);
  });

  it("a success since the failures resets the run", () => {
    expect(
      planIsFatigued([acted(3 * DAY), acted(2 * DAY), resisted(1 * DAY)]),
    ).toBe(false);
  });

  it("older failures behind a success do not count", () => {
    expect(
      planIsFatigued([acted(5 * DAY), resisted(3 * DAY), acted(1 * DAY)]),
    ).toBe(false);
  });

  it("unresolved and never-in-play sessions count neither way", () => {
    expect(
      planIsFatigued([
        acted(3 * DAY),
        { started: true, actedOnUrge: null, sessionDate: t(2 * DAY) },
        { started: false, actedOnUrge: true, sessionDate: t(1 * DAY) },
        acted(0.5 * DAY),
      ]),
    ).toBe(true);
    expect(planIsFatigued([acted(1 * DAY)])).toBe(false);
  });
});
