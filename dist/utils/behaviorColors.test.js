"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const behaviorColors_1 = require("./behaviorColors");
const RED = "#C4362C";
describe("guessBehaviorColor", () => {
    it("assigns red to pornography by default", () => {
        expect((0, behaviorColors_1.guessBehaviorColor)("Pornography")).toBe(RED);
    });
    it("avoids a color already used by another behavior", () => {
        const color = (0, behaviorColors_1.guessBehaviorColor)("Pornography", 0, [RED]);
        expect(color).not.toBe(RED);
        expect(behaviorColors_1.BEHAVIOR_COLOR_OPTIONS).toContain(color);
    });
    it("picks the next available color from the palette", () => {
        const color = (0, behaviorColors_1.guessBehaviorColor)("Pornography", 0, [RED]);
        // Should pick the next color in BEHAVIOR_COLOR_OPTIONS after RED
        expect(color).toBe(behaviorColors_1.BEHAVIOR_COLOR_OPTIONS[1]); // ORANGE
    });
    it("wraps around if all preferred colors before it are taken", () => {
        const allButPink = behaviorColors_1.BEHAVIOR_COLOR_OPTIONS.slice(0, -1);
        const color = (0, behaviorColors_1.guessBehaviorColor)("Pornography", 0, allButPink);
        expect(color).toBe(behaviorColors_1.BEHAVIOR_COLOR_OPTIONS[behaviorColors_1.BEHAVIOR_COLOR_OPTIONS.length - 1]);
    });
    it("falls back to the guessed color if every color is taken", () => {
        const allColors = [...behaviorColors_1.BEHAVIOR_COLOR_OPTIONS];
        const color = (0, behaviorColors_1.guessBehaviorColor)("Pornography", 0, allColors);
        expect(color).toBe(RED);
    });
    it("still uses index fallback when name is unknown and no conflicts", () => {
        const color = (0, behaviorColors_1.guessBehaviorColor)("Some Unknown Behavior", 2);
        expect(color).toBe(behaviorColors_1.BEHAVIOR_COLOR_OPTIONS[2]);
    });
    it("avoids used colors for index-based fallback too", () => {
        const usedColor = behaviorColors_1.BEHAVIOR_COLOR_OPTIONS[0];
        const color = (0, behaviorColors_1.guessBehaviorColor)("Some Unknown Behavior", 0, [usedColor]);
        expect(color).not.toBe(usedColor);
    });
});
