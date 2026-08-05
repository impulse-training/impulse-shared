import {
  Behavior,
  behaviorSchema,
  normalizeBehaviorBenefits,
  formatBenefitsForPrompt,
  Session,
  sessionSchema,
  DaySummary,
  daySummarySchema,
} from "../index";

describe("Schema Validation", () => {
  describe("Behavior Schema", () => {
    it("should validate a counter behavior", () => {
      const validBehavior = {
        name: "Water",
        trackingType: "counter" as const,
        trackingUnit: "glasses",
        description: "Drinking water",
        benefits: [{ text: "Hydration", need: "pleasure" as const }],
        drawbacks: [],
        activePlanId: "plan123",
        userId: "user123",
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      const result = behaviorSchema.safeParse(validBehavior);
      expect(result.success).toBe(true);
    });

    it("should validate a timer behavior", () => {
      const validBehavior = {
        name: "Exercise",
        trackingType: "timer" as const,
        description: "Daily exercise",
        benefits: [{ text: "Health" }],
        drawbacks: [],
        activePlanId: "plan123",
        userId: "user123",
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      const result = behaviorSchema.safeParse(validBehavior);
      expect(result.success).toBe(true);
    });

    it("should normalize legacy string benefits on parse", () => {
      const legacyBehavior = {
        name: "Scrolling",
        trackingType: "timer" as const,
        description: "Late night scrolling",
        benefits: ["Winding down", { text: "Escape", need: "escape" as const }],
        drawbacks: ["Staying up late"],
        userId: "user123",
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      const result = behaviorSchema.safeParse(legacyBehavior);
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data.benefits).toEqual([
          { text: "Winding down" },
          { text: "Escape", need: "escape" },
        ]);
      }
    });

    it("should reject an unknown benefit need", () => {
      const invalidBehavior = {
        name: "Scrolling",
        trackingType: "timer" as const,
        description: "Late night scrolling",
        benefits: [{ text: "Winding down", need: "vibes" }],
        drawbacks: [],
        userId: "user123",
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      expect(behaviorSchema.safeParse(invalidBehavior).success).toBe(false);
    });
  });

  describe("Behavior benefits helpers", () => {
    it("normalizeBehaviorBenefits handles legacy, structured, and junk input", () => {
      expect(normalizeBehaviorBenefits(undefined)).toEqual([]);
      expect(
        normalizeBehaviorBenefits([
          "  Winding down  ",
          "",
          { text: "Escape", need: "escape" },
          { text: "Old entry", need: "not-a-need" },
          { need: "control" },
          42,
        ]),
      ).toEqual([
        { text: "Winding down" },
        { text: "Escape", need: "escape" },
        { text: "Old entry" },
      ]);
    });

    it("formatBenefitsForPrompt renders gives/costs lines", () => {
      expect(
        formatBenefitsForPrompt(
          [{ text: "helps me switch off", need: "relaxation" }, "a treat"],
          ["staying up past 2am"],
        ),
      ).toEqual([
        'What it gives them: relaxation: "helps me switch off"; "a treat"',
        "What it costs them: staying up past 2am",
      ]);
      expect(formatBenefitsForPrompt([], [])).toEqual([]);
      expect(
        formatBenefitsForPrompt([{ text: "fills time", need: "boredom_relief" }], undefined),
      ).toEqual(['What it gives them: boredom relief: "fills time"']);
    });
  });

  describe("Session Schema", () => {
    it("should validate a general session", () => {
      const validSession = {
        type: "general" as const,
        date: new Date(),
        userId: "user123",
        dateString: "2025-01-01",
        mode: "text" as const,
        sharedWithUserIds: [],
        sharedWithSupportGroups: [],
        emojiId: null,
      };

      const result = sessionSchema.safeParse(validSession);
      expect(result.success).toBe(true);
    });

    it("should validate an impulse session", () => {
      const validSession = {
        type: "impulse" as const,
        date: new Date(),
        userId: "user123",
        dateString: "2025-01-01",
        mode: "text" as const,
        sharedWithUserIds: [],
        sharedWithSupportGroups: [],
        behaviorDocs: [],
        emojiId: null,
        debriefFinishedAt: null,
      };

      const result = sessionSchema.safeParse(validSession);
      expect(result.success).toBe(true);
    });
  });

  describe("DaySummary Schema", () => {
    it("should validate a day summary", () => {
      const validDaySummary = {
        userId: "user123",
        impulseSessionOutcomesById: {},
        behaviorDataTotalByBehaviorId: {},
        dayTotalsConfirmedAt: null,
        summaryText: null,
        supportGroupSummariesById: {},
        sharedWithUserIds: [],
        goalComparisonByBehaviorId: {},
      };

      const result = daySummarySchema.safeParse(validDaySummary);
      expect(result.success).toBe(true);
    });
  });
});
