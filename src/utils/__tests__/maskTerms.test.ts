import { maskTerms, MaskedTermSubstitution } from "../maskedTerms";

const NOSE: MaskedTermSubstitution = {
  id: "nose",
  terms: ["Picking nose"],
  replacement: "the green behavior",
};
const PORN: MaskedTermSubstitution = {
  id: "porn",
  terms: ["Pornography", "porn"],
  replacement: "the red behavior",
};

describe("maskTerms", () => {
  it("leaves text without masked terms alone", () => {
    expect(maskTerms("Coffee: 3 cups", [NOSE, PORN])).toBe("Coffee: 3 cups");
  });

  it("is a no-op when nothing is masked", () => {
    expect(maskTerms("Pornography (timer)", [])).toBe("Pornography (timer)");
  });

  it("rewrites the stored name", () => {
    expect(maskTerms("### Pornography (timer) — Total: 1h", [PORN])).toBe(
      "### the red behavior (timer) — Total: 1h",
    );
  });

  // The leak this whole mechanism exists for: a hyphen was enough.
  it("rewrites the reversed, hyphenated form the coach actually writes", () => {
    expect(maskTerms("a day without nose-picking", [NOSE])).toBe(
      "a day without the green behavior",
    );
  });

  it("rewrites each group as its own colour", () => {
    expect(maskTerms("Pornography and picking my nose", [PORN, NOSE])).toBe(
      "the red behavior and the green behavior",
    );
  });

  it("rewrites every occurrence, not just the first", () => {
    expect(maskTerms("porn, then porn again", [PORN])).toBe(
      "the red behavior, then the red behavior again",
    );
  });

  it("does not match inside a longer word", () => {
    expect(maskTerms("pornographic-sounding", [PORN])).toBe(
      "pornographic-sounding",
    );
  });
});
