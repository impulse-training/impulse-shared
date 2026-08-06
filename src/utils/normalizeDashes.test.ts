import { hasFancyDash, normalizeDashes, normalizeDashesDeep } from "./normalizeDashes";

describe("normalizeDashes", () => {
  it("leaves text without a fancy dash exactly as-is", () => {
    const text = "No fancy dashes here - just a plain hyphen, and 2026-08-05.";
    expect(normalizeDashes(text)).toBe(text);
  });

  it("spaces out an unspaced parenthetical dash", () => {
    // The message that prompted this: a bare hyphen would give "you-how".
    expect(
      normalizeDashes(
        "Let's check in on how yesterday felt overall for you—how are you sitting with it?",
      ),
    ).toBe(
      "Let's check in on how yesterday felt overall for you - how are you sitting with it?",
    );
  });

  it("collapses an already-spaced dash to a single spaced hyphen", () => {
    expect(normalizeDashes("Just checking in  —  how did it go?")).toBe(
      "Just checking in - how did it go?",
    );
  });

  it("handles multiple dashes in one sentence", () => {
    expect(
      normalizeDashes("That shift—catching yourself—really shows progress."),
    ).toBe("That shift - catching yourself - really shows progress.");
  });

  it("keeps numeric ranges tight", () => {
    expect(normalizeDashes("roughly 3–5 times, 2020–2024")).toBe(
      "roughly 3-5 times, 2020-2024",
    );
  });

  it("drops a line-leading dash rather than orphaning it", () => {
    expect(normalizeDashes("Nice work today.\n— Impulse")).toBe(
      "Nice work today.\nImpulse",
    );
  });

  it("drops a line-trailing dash rather than leaving a dangling hyphen", () => {
    expect(normalizeDashes("Here's the thing —\nit gets easier.")).toBe(
      "Here's the thing\nit gets easier.",
    );
  });

  it("normalises en dashes and horizontal bars too", () => {
    expect(normalizeDashes("one–two")).toBe("one - two");
    expect(normalizeDashes("one―two")).toBe("one - two");
  });

  it("never absorbs a newline, so paragraph breaks survive the rewrite", () => {
    // The chat path splits on blank lines AFTER normalising, so a dash at a
    // paragraph boundary must not merge the two paragraphs.
    expect(normalizeDashes("Nice work today.\n\n—\n\nWhat's next?")).toBe(
      "Nice work today.\n\n\n\nWhat's next?",
    );
    expect(normalizeDashes("I counted 3\n\n—\n\n5 slips.")).toBe(
      "I counted 3\n\n\n\n5 slips.",
    );
    expect(normalizeDashes("first para—here\n\nsecond para—here")).toBe(
      "first para - here\n\nsecond para - here",
    );
  });

  it("is idempotent", () => {
    const once = normalizeDashes("A shift—a real one.");
    expect(normalizeDashes(once)).toBe(once);
  });
});

describe("hasFancyDash", () => {
  it("detects each dash variant and ignores plain hyphens", () => {
    expect(hasFancyDash("a—b")).toBe(true);
    expect(hasFancyDash("a–b")).toBe(true);
    expect(hasFancyDash("a―b")).toBe(true);
    expect(hasFancyDash("a-b")).toBe(false);
  });
});

describe("normalizeDashesDeep", () => {
  it("rewrites strings at every depth and preserves structure", () => {
    expect(
      normalizeDashesDeep({
        title: "A shift—a real one",
        options: [{ label: "Yes—let's do it" }, { label: "Not now" }],
        steps: ["Walk outside—5 minutes"],
      }),
    ).toEqual({
      title: "A shift - a real one",
      options: [{ label: "Yes - let's do it" }, { label: "Not now" }],
      steps: ["Walk outside - 5 minutes"],
    });
  });

  it("leaves ids, numbers, booleans and nulls untouched", () => {
    const args = {
      behaviorId: "UwiuMV43YmkSr1xxJbPf",
      dateString: "2026-08-05",
      value: 3,
      enabled: false,
      emojiId: null,
    };
    expect(normalizeDashesDeep(args)).toEqual(args);
  });

  it("passes non-objects straight through", () => {
    expect(normalizeDashesDeep(42)).toBe(42);
    expect(normalizeDashesDeep(null)).toBe(null);
    expect(normalizeDashesDeep(undefined)).toBe(undefined);
  });
});
