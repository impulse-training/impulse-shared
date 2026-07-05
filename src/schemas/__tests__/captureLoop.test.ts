import {
  capturedItemSchema,
  captureStepSchema,
  stepIsCaptureStep,
  strategyModificationOperationSchema,
  tacticStepSchema,
} from "../index";

describe("Capture loop schemas", () => {
  describe("captureStepSchema", () => {
    it("parses a minimal capture step", () => {
      const result = captureStepSchema.safeParse({
        mode: "capture",
        text: "Write the idea down. It will be waiting for you.",
      });
      expect(result.success).toBe(true);
    });

    it("parses optional placeholder and behaviorId", () => {
      const result = captureStepSchema.safeParse({
        mode: "capture",
        text: "What do you want to make?",
        placeholder: "Describe the video idea",
        behaviorId: "behavior123",
      });
      expect(result.success).toBe(true);
    });

    it("rejects a capture step without prompt text", () => {
      expect(captureStepSchema.safeParse({ mode: "capture" }).success).toBe(
        false,
      );
      expect(
        captureStepSchema.safeParse({ mode: "capture", text: "" }).success,
      ).toBe(false);
    });

    it("discriminates capture within the step union", () => {
      const parsed = tacticStepSchema.safeParse({
        mode: "capture",
        text: "Park the idea here",
      });
      expect(parsed.success).toBe(true);
      if (parsed.success) {
        expect(stepIsCaptureStep(parsed.data)).toBe(true);
        expect(parsed.data.mode).toBe("capture");
      }
    });
  });

  describe("capturedItemSchema", () => {
    const base = {
      text: "A dolly zoom through the market at dawn",
      userId: "user123",
      tacticId: "tactic123",
      createdAt: new Date(),
    };

    it("parses and defaults reviewedAt to null", () => {
      const result = capturedItemSchema.safeParse(base);
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data.reviewedAt).toBeNull();
      }
    });

    it("rejects empty text and missing userId", () => {
      expect(
        capturedItemSchema.safeParse({ ...base, text: "" }).success,
      ).toBe(false);
      const { userId: _userId, ...withoutUserId } = base;
      expect(capturedItemSchema.safeParse(withoutUserId).success).toBe(false);
    });
  });

  describe("set_behavior_goal operation", () => {
    it("accepts a contain goal with allowed windows", () => {
      const result = strategyModificationOperationSchema.safeParse({
        type: "set_behavior_goal",
        behaviorId: "behavior123",
        goal: {
          type: "contain",
          allowedWindows: [
            { dayOfWeek: 6, startTime: "09:00", endTime: "12:00" },
          ],
        },
      });
      expect(result.success).toBe(true);
    });

    it("rejects an invalid goal payload", () => {
      const result = strategyModificationOperationSchema.safeParse({
        type: "set_behavior_goal",
        behaviorId: "behavior123",
        goal: { type: "contain" },
      });
      expect(result.success).toBe(false);
    });

    it("rejects a missing behaviorId", () => {
      const result = strategyModificationOperationSchema.safeParse({
        type: "set_behavior_goal",
        behaviorId: "",
        goal: { type: "eliminate" },
      });
      expect(result.success).toBe(false);
    });

    it("still accepts the existing create_trigger operation", () => {
      const result = strategyModificationOperationSchema.safeParse({
        type: "create_trigger",
        clientId: "t1",
        trigger: { title: "Late night", tags: {} },
      });
      expect(result.success).toBe(true);
    });
  });
});
