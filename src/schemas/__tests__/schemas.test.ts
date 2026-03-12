import {
  Behavior,
  behaviorSchema,
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
        benefits: ["Hydration"],
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
        benefits: ["Health"],
        drawbacks: [],
        activePlanId: "plan123",
        userId: "user123",
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      const result = behaviorSchema.safeParse(validBehavior);
      expect(result.success).toBe(true);
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
        recapRequirementsMetAt: null,
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
