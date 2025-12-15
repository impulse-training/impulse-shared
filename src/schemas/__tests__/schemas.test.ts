import {
  Behavior,
  behaviorSchema,
  Question,
  questionSchema,
  Thread,
  threadSchema,
  DaySummary,
  daySummarySchema,
} from "../index";

describe("Schema Validation", () => {
  describe("Question Schema", () => {
    it("should validate a text question", () => {
      const validQuestion = {
        responseType: "text" as const,
        text: "How are you feeling?",
        scope: "impulse" as const,
      };

      const result = questionSchema.safeParse(validQuestion);
      expect(result.success).toBe(true);
    });

    it("should validate a slider1To10 question", () => {
      const validQuestion = {
        responseType: "slider1To10" as const,
        text: "Rate your urge",
        scope: "impulse" as const,
        sliderConfig: {
          minLabel: "Low",
          maxLabel: "High",
        },
      };

      const result = questionSchema.safeParse(validQuestion);
      expect(result.success).toBe(true);
    });

    it("should reject invalid question type", () => {
      const invalidQuestion = {
        responseType: "invalid",
        text: "Test",
      };

      const result = questionSchema.safeParse(invalidQuestion);
      expect(result.success).toBe(false);
    });
  });

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

  describe("Thread Schema", () => {
    it("should validate a general thread", () => {
      const validThread = {
        type: "general" as const,
        date: new Date(),
        userId: "user123",
        dateString: "2025-01-01",
        mode: "text" as const,
        trackingLogsById: {},
        sharedWithUserIds: [],
        emojiId: null,
      };

      const result = threadSchema.safeParse(validThread);
      expect(result.success).toBe(true);
    });

    it("should validate an impulse thread", () => {
      const validThread = {
        type: "impulse" as const,
        date: new Date(),
        userId: "user123",
        dateString: "2025-01-01",
        mode: "text" as const,
        trackingLogsById: {},
        sharedWithUserIds: [],
        behaviorDocs: [],
        emojiId: null,
        debriefFinishedAt: null,
      };

      const result = threadSchema.safeParse(validThread);
      expect(result.success).toBe(true);
    });
  });

  describe("DaySummary Schema", () => {
    it("should validate a day summary", () => {
      const validDaySummary = {
        userId: "user123",
        sharedWithUserIds: [],
        goalComparisonByBehaviorId: {},
      };

      const result = daySummarySchema.safeParse(validDaySummary);
      expect(result.success).toBe(true);
    });
  });
});
