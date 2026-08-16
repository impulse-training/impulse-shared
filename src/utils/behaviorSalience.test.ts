import {
  DEFAULT_BEHAVIOR_SALIENCE,
  effectiveBehaviorSalience,
} from "./behaviorSalience";

describe("effectiveBehaviorSalience", () => {
  it("uses the derived struggle weight when no override is set", () => {
    expect(
      effectiveBehaviorSalience({ state: { struggle: { weight: 0.66 } } }),
    ).toBe(0.66);
  });

  it("lets an explicit importance override win outright", () => {
    expect(
      effectiveBehaviorSalience({
        importance: 5,
        state: { struggle: { weight: 0.1 } },
      }),
    ).toBe(1);
    expect(
      effectiveBehaviorSalience({
        importance: 1,
        state: { struggle: { weight: 0.9 } },
      }),
    ).toBe(0.2);
  });

  it("floors unknown behaviors at the default rather than zero", () => {
    expect(effectiveBehaviorSalience({})).toBe(DEFAULT_BEHAVIOR_SALIENCE);
    expect(effectiveBehaviorSalience({ state: {} })).toBe(
      DEFAULT_BEHAVIOR_SALIENCE,
    );
  });

  it("clamps out-of-range values instead of propagating them", () => {
    expect(effectiveBehaviorSalience({ importance: 9 })).toBe(1);
    expect(
      effectiveBehaviorSalience({ state: { struggle: { weight: 1.7 } } }),
    ).toBe(1);
    expect(
      effectiveBehaviorSalience({ state: { struggle: { weight: -0.2 } } }),
    ).toBe(0);
  });

  // The motivating production case, 2026-08-15: coffee (no impulse history)
  // must not outrank social media (21 sessions, 7 lapses) just because a
  // milestone rung happened to land on it.
  it("orders the production case correctly on derived weight alone", () => {
    const socialMedia = { state: { struggle: { weight: 0.66 } } };
    const coffee = { state: { struggle: { weight: 0 } } };
    expect(effectiveBehaviorSalience(socialMedia)).toBeGreaterThan(
      effectiveBehaviorSalience(coffee),
    );
  });
});
