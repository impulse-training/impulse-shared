import {
  behaviorIsActive,
  scheduledPlanIsEnabled,
  scheduledPlanSchema,
} from "../index";

describe("behaviorIsActive", () => {
  it("is active when neither merged nor archived", () => {
    expect(behaviorIsActive({})).toBe(true);
  });
  it("is inactive once archived", () => {
    expect(behaviorIsActive({ archivedAt: new Date() as never })).toBe(false);
  });
  it("is inactive once merged away", () => {
    expect(behaviorIsActive({ mergedIntoBehaviorId: "other" })).toBe(false);
  });
});

describe("scheduledPlanIsEnabled", () => {
  const base = {
    name: "Morning prep",
    type: "scheduled" as const,
    tactics: [],
    hour: 7,
    minute: 0,
    weekdays: [1, 2, 3],
  };
  it("treats an absent flag as enabled (every pre-existing plan)", () => {
    const parsed = scheduledPlanSchema.parse(base);
    expect(scheduledPlanIsEnabled(parsed)).toBe(true);
  });
  it("respects an explicit false", () => {
    const parsed = scheduledPlanSchema.parse({ ...base, enabled: false });
    expect(scheduledPlanIsEnabled(parsed)).toBe(false);
  });
});
