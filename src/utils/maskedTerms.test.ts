import {
  buildMaskedTermRegex,
  findMaskedTerms,
  segmentMaskedText,
  splitTermWords,
} from "./maskedTerms";

/** Convenience: does `terms` match anywhere in `text`? */
function matches(terms: string[], text: string): boolean {
  const regex = buildMaskedTermRegex(terms);
  return !!regex && regex.test(text);
}

describe("buildMaskedTermRegex", () => {
  it("returns null when there is nothing maskable", () => {
    expect(buildMaskedTermRegex([])).toBeNull();
    expect(buildMaskedTermRegex(["", "  ", "a"])).toBeNull();
  });

  describe("the leak this was written for", () => {
    // users/MzbhPTBF…/sessions/2026-08-18 — a recap named "nose-picking" past a
    // masked behavior called "Picking nose".
    const terms = ["Picking nose"];
    const leaked =
      "You put together a full week without pornography, your coffee slip is " +
      "still continuing after yesterday's break, and you kept yesterday clean " +
      "on nose-picking too. How did yesterday feel from the inside?";

    it("catches it from the behavior name alone, with no synonyms", () => {
      expect(matches(terms, leaked)).toBe(true);
    });
  });

  describe("separators", () => {
    const terms = ["Picking nose"];
    it.each([
      "picking nose",
      "picking  nose",
      "nose picking",
      "nose-picking",
      "nose‑picking", // U+2011 non-breaking hyphen
      "nose—picking",
      "nose/picking",
      "nose_picking",
      "nosepicking",
      "Nose Picking",
    ])("matches %p", (text) => {
      expect(matches(terms, `you kept it clean on ${text} today`)).toBe(true);
    });
  });

  describe("filler words", () => {
    const terms = ["Picking nose"];
    it.each([
      "picking my nose",
      "picking your nose",
      "picking his nose",
      "picking at my nose",
      "picking at the nose",
    ])("matches %p", (text) => {
      expect(matches(terms, `you caught yourself ${text} again`)).toBe(true);
    });
  });

  describe("inflection", () => {
    it.each([
      ["Picking nose", "you picked your nose twice"],
      ["Picking nose", "one nose pick today"],
      ["Hair pulling", "you pulled your hair"],
      ["Nail biting", "you bit— sorry, you were biting nails"],
      ["Binge watching", "a binge watch last night"],
      // A silent "e" is dropped before a vowel suffix.
      ["Masturbate", "masturbating again"],
      ["Vaping", "reached for the vape"],
      // The behavior is named as a noun; the coach writes the verb.
      ["Masturbation", "you masturbated twice"],
      ["Rumination", "you were ruminating on it"],
    ])("%p matches %p", (term, text) => {
      expect(matches([term], text)).toBe(true);
    });
  });

  describe("word boundaries", () => {
    it("does not match a truncated stem as a word of its own", () => {
      // "nose" stems to "nos" before vowel suffixes — which is a word in
      // Spanish, and must not be masked on its own.
      expect(matches(["Picking nose"], "nos vemos")).toBe(false);
      expect(matches(["Nose"], "nos vemos")).toBe(false);
    });

    it("does not match inside a longer word", () => {
      expect(matches(["Porn"], "a bowl of popcorn")).toBe(false);
      expect(matches(["Gaming"], "the programming session")).toBe(false);
      expect(matches(["Coffee"], "the coffeehouse")).toBe(false);
    });

    it("still matches the whole word", () => {
      expect(matches(["Porn"], "watched porn again")).toBe(true);
      expect(matches(["Coffee"], "three coffees")).toBe(true);
    });
  });

  describe("terms of three or more words keep their order", () => {
    it("matches in order", () => {
      expect(matches(["late night snacking"], "late-night snacking")).toBe(
        true,
      );
    });

    it("does not permute", () => {
      expect(matches(["late night snacking"], "snacking late at night")).toBe(
        false,
      );
    });
  });

  it("treats a term's own punctuation as source text, not regex syntax", () => {
    expect(matches(["C++ (a.k.a)"], "logged C++ (a.k.a) today")).toBe(true);
  });

  it("matches across separators the term itself did not use", () => {
    expect(matches(["late night snacking"], "late/night...snacking")).toBe(
      true,
    );
  });

  it("matches synonyms that morphology cannot derive", () => {
    expect(matches(["Pornography", "porn"], "watched porn")).toBe(true);
    expect(
      matches(["Hair pulling", "trichotillomania"], "my trichotillomania"),
    ).toBe(true);
  });
});

describe("splitTermWords", () => {
  it("normalises punctuation away", () => {
    expect(splitTermWords("nose-picking")).toEqual(["nose", "picking"]);
    expect(splitTermWords("Social media & videos")).toEqual([
      "social",
      "media",
      "videos",
    ]);
  });
});

describe("findMaskedTerms", () => {
  const groups = [
    { id: "nose", terms: ["Picking nose"] },
    { id: "porn", terms: ["Pornography", "porn"] },
  ];

  it("reports which group each match belongs to, in order", () => {
    const found = findMaskedTerms(
      "no porn, and no nose-picking either",
      groups,
    );
    expect(found.map((m) => [m.id, m.text])).toEqual([
      ["porn", "porn"],
      ["nose", "nose-picking"],
    ]);
  });

  it("returns non-overlapping matches, preferring the longer one", () => {
    const overlapping = [
      { id: "long", terms: ["social media"] },
      { id: "short", terms: ["media"] },
    ];
    const found = findMaskedTerms("less social media today", overlapping);
    expect(found).toHaveLength(1);
    expect(found[0]).toMatchObject({ id: "long", text: "social media" });
  });

  it("is empty for text with nothing to mask", () => {
    expect(findMaskedTerms("a quiet day", groups)).toEqual([]);
    expect(findMaskedTerms("", groups)).toEqual([]);
  });
});

describe("segmentMaskedText", () => {
  const groups = [{ id: "nose", terms: ["Picking nose"] }];

  it("splits text into plain and masked runs that rejoin to the original", () => {
    const text = "you kept yesterday clean on nose-picking too";
    const segments = segmentMaskedText(text, groups);
    expect(segments.map((s) => s.text).join("")).toBe(text);
    expect(segments).toEqual([
      { text: "you kept yesterday clean on ", maskedGroupId: null },
      { text: "nose-picking", maskedGroupId: "nose" },
      { text: " too", maskedGroupId: null },
    ]);
  });

  it("returns one plain segment when nothing matches", () => {
    expect(segmentMaskedText("a quiet day", groups)).toEqual([
      { text: "a quiet day", maskedGroupId: null },
    ]);
  });
});
