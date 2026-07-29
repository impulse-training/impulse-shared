import {
  isTaskAwaitingApproval,
  reviewTriggerTaskSchema,
  setupShortcutTaskSchema,
  TASK_TYPES_REQUIRING_APPROVAL,
} from "../index";

const baseReviewTrigger = {
  type: "review_trigger" as const,
  userId: "user123",
  title: "Review new trigger pattern",
  instructions: "Discuss whether to formalize this trigger.",
  impulseSessionId: "sess123",
  debriefOutcome: "acted" as const,
  suggestedTrigger: { tags: { emotion: "stressed" } },
  suggestedPlan: { name: "Alternative response plan" },
  createdAt: new Date(),
  updatedAt: new Date(),
};

describe("task approval", () => {
  it("review_trigger validates without approval fields (awaiting approval)", () => {
    const result = reviewTriggerTaskSchema.safeParse(baseReviewTrigger);
    expect(result.success).toBe(true);
  });

  it("review_trigger validates with approvedAt and approvalReason", () => {
    const result = reviewTriggerTaskSchema.safeParse({
      ...baseReviewTrigger,
      approvedAt: new Date(),
      approvalReason: "Pattern confirmed with client on last call",
    });
    expect(result.success).toBe(true);
  });

  it("rejects a non-string approvalReason", () => {
    const result = reviewTriggerTaskSchema.safeParse({
      ...baseReviewTrigger,
      approvedAt: new Date(),
      approvalReason: 42,
    });
    expect(result.success).toBe(false);
  });

  describe("isTaskAwaitingApproval", () => {
    it("holds back an unapproved review_trigger", () => {
      expect(isTaskAwaitingApproval({ type: "review_trigger" })).toBe(true);
      expect(
        isTaskAwaitingApproval({ type: "review_trigger", approvedAt: null }),
      ).toBe(true);
    });

    it("releases an approved review_trigger", () => {
      expect(
        isTaskAwaitingApproval({
          type: "review_trigger",
          approvedAt: new Date(),
        }),
      ).toBe(false);
    });

    it("never holds back types outside the approval set", () => {
      expect(isTaskAwaitingApproval({ type: "setup_shortcut" })).toBe(false);
      expect(isTaskAwaitingApproval({ type: "suggest_strategy" })).toBe(false);
      expect(isTaskAwaitingApproval({ type: "propose_goal" })).toBe(false);
      expect(isTaskAwaitingApproval({})).toBe(false);
      expect(isTaskAwaitingApproval({ type: 7 })).toBe(false);
    });

    it("approval set currently contains exactly review_trigger", () => {
      expect([...TASK_TYPES_REQUIRING_APPROVAL]).toEqual(["review_trigger"]);
    });
  });

  it("other task types still validate untouched", () => {
    const result = setupShortcutTaskSchema.safeParse({
      type: "setup_shortcut",
      userId: "user123",
      title: "Set up shortcuts",
      instructions: "Guide the user through shortcut setup.",
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    expect(result.success).toBe(true);
  });
});
