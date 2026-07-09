import { planHasActionableContent } from "./index";

const ref = (path: string) => ({ path }) as never;

describe("planHasActionableContent", () => {
  it("returns false for an empty placeholder plan (no tactics/questions/steps)", () => {
    // Matches the shape a freshly-created trigger plan is written with, and the
    // real-world session that motivated this: name "", tactics [], questions [].
    expect(
      planHasActionableContent({ tactics: [], questions: [], planSteps: [] }),
    ).toBe(false);
  });

  it("returns false when tactics/questions/steps are all absent", () => {
    expect(planHasActionableContent({ tactics: [] })).toBe(false);
  });

  it("returns true when the plan has at least one tactic", () => {
    expect(
      planHasActionableContent({ tactics: [ref("tactics/a")], questions: [] }),
    ).toBe(true);
  });

  it("returns true when the plan has at least one question", () => {
    expect(
      planHasActionableContent({ tactics: [], questions: [ref("questions/a")] }),
    ).toBe(true);
  });

  it("returns true when the plan has at least one plan step", () => {
    expect(
      planHasActionableContent({
        tactics: [],
        planSteps: [{ type: "collectionPick", collectionId: "c" }],
      }),
    ).toBe(true);
  });

  it("returns false for a soft-deleted plan even if it has content", () => {
    expect(
      planHasActionableContent({
        tactics: [ref("tactics/a")],
        deletedAt: { seconds: 1, nanoseconds: 0 },
      }),
    ).toBe(false);
  });
});
