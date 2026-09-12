import {
  guessBehaviorColor,
  BEHAVIOR_COLOR_OPTIONS,
  behaviorDisplayName,
} from "./behaviorColors";

const RED = "#C4362C";

describe("guessBehaviorColor", () => {
  it("assigns red to pornography by default", () => {
    expect(guessBehaviorColor("Pornography")).toBe(RED);
  });

  it("avoids a color already used by another behavior", () => {
    const color = guessBehaviorColor("Pornography", 0, [RED]);
    expect(color).not.toBe(RED);
    expect(BEHAVIOR_COLOR_OPTIONS).toContain(color);
  });

  it("picks the next available color from the palette", () => {
    const color = guessBehaviorColor("Pornography", 0, [RED]);
    // Should pick the next color in BEHAVIOR_COLOR_OPTIONS after RED
    expect(color).toBe(BEHAVIOR_COLOR_OPTIONS[1]); // ORANGE
  });

  it("wraps around if all preferred colors before it are taken", () => {
    const allButPink = BEHAVIOR_COLOR_OPTIONS.slice(0, -1);
    const color = guessBehaviorColor("Pornography", 0, allButPink);
    expect(color).toBe(BEHAVIOR_COLOR_OPTIONS[BEHAVIOR_COLOR_OPTIONS.length - 1]);
  });

  it("falls back to the guessed color if every color is taken", () => {
    const allColors = [...BEHAVIOR_COLOR_OPTIONS];
    const color = guessBehaviorColor("Pornography", 0, allColors);
    expect(color).toBe(RED);
  });

  it("still uses index fallback when name is unknown and no conflicts", () => {
    const color = guessBehaviorColor("Some Unknown Behavior", 2);
    expect(color).toBe(BEHAVIOR_COLOR_OPTIONS[2]);
  });

  it("avoids used colors for index-based fallback too", () => {
    const usedColor = BEHAVIOR_COLOR_OPTIONS[0];
    const color = guessBehaviorColor("Some Unknown Behavior", 0, [usedColor]);
    expect(color).not.toBe(usedColor);
  });
});

describe("behaviorDisplayName", () => {
  it("names an unmasked behavior plainly", () => {
    expect(behaviorDisplayName({ name: "Coffee", color: "#6F4E37" })).toBe("Coffee");
    expect(behaviorDisplayName({ name: "Coffee", masked: false })).toBe("Coffee");
  });

  it("names a masked behavior by its colour, the way the user sees it", () => {
    expect(
      behaviorDisplayName({ name: "Pornography", masked: true, color: "#C4362C" }),
    ).toBe("the red behavior");
    expect(
      behaviorDisplayName({ name: "Picking nose", masked: true, color: "#16A34A" }),
    ).toBe("the green behavior");
  });

  it("never falls back to the name it is hiding", () => {
    const hidden = behaviorDisplayName({ name: "Pornography", masked: true });
    expect(hidden).toBe("a hidden behavior");
    expect(hidden).not.toContain("Porn");
    const unknownColor = behaviorDisplayName({
      name: "Pornography",
      masked: true,
      color: "#123456",
    });
    expect(unknownColor).not.toContain("Porn");
  });
});
