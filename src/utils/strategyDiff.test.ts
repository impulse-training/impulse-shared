import { StrategyPlanSnapshot } from "../schemas/strategySnapshot";
import { diffStrategyPlans, summarizeStrategyChanges } from "./strategyDiff";

function plan(overrides: Partial<StrategyPlanSnapshot> = {}): StrategyPlanSnapshot {
  return {
    planPath: "triggers/t1/plans/p1",
    planId: "p1",
    name: "Wind-down routine",
    parentType: "trigger",
    parentId: "t1",
    parentLabel: "Evening wind-down",
    isActive: true,
    tacticTitles: ["Dock the phone"],
    ...overrides,
  };
}

describe("diffStrategyPlans", () => {
  it("returns empty changes for identical snapshots", () => {
    const snapshot = [plan()];
    const diff = diffStrategyPlans(snapshot, snapshot);
    expect(diff.added).toHaveLength(0);
    expect(diff.removed).toHaveLength(0);
    expect(diff.changed).toHaveLength(0);
  });

  it("detects added and removed plans by planPath", () => {
    const before = [plan()];
    const after = [
      plan({ planPath: "behaviors/b1/plans/p2", planId: "p2", name: "Morning plan", parentType: "behavior", parentId: "b1", parentLabel: "Coffee" }),
    ];
    const diff = diffStrategyPlans(before, after);
    expect(diff.added.map((p) => p.planId)).toEqual(["p2"]);
    expect(diff.removed.map((p) => p.planId)).toEqual(["p1"]);
  });

  it("detects activation, rename and tactic changes on the same plan", () => {
    const before = [plan({ isActive: false })];
    const after = [
      plan({ name: "Wind-down v2", isActive: true, tacticTitles: ["Dock the phone", "10 slow breaths"] }),
    ];
    const diff = diffStrategyPlans(before, after);
    expect(diff.changed).toHaveLength(1);
    const fields = diff.changed[0].changes.map((c) => c.field).sort();
    expect(fields).toEqual(["isActive", "name", "tactics"]);
  });

  it("ignores tactic order", () => {
    const before = [plan({ tacticTitles: ["A", "B"] })];
    const after = [plan({ tacticTitles: ["B", "A"] })];
    expect(diffStrategyPlans(before, after).changed).toHaveLength(0);
  });
});

describe("summarizeStrategyChanges", () => {
  it("labels the first snapshot", () => {
    const summary = summarizeStrategyChanges(
      { added: [], removed: [], changed: [] },
      { isFirstSnapshot: true, planCount: 3, activeCount: 2 },
    );
    expect(summary).toBe("First strategy snapshot — 3 plans, 2 active.");
  });

  it("describes adds, removals and activations in plain language", () => {
    const diff = diffStrategyPlans(
      [plan({ isActive: false }), plan({ planPath: "behaviors/b1/plans/p2", planId: "p2", name: "Old plan", parentType: "behavior", parentId: "b1", parentLabel: "Coffee" })],
      [plan({ isActive: true }), plan({ planPath: "triggers/t2/plans/p3", planId: "p3", name: "New plan", parentId: "t2", parentLabel: "Morning craving" })],
    );
    const summary = summarizeStrategyChanges(diff);
    expect(summary).toContain('Added "New plan" (Morning craving).');
    expect(summary).toContain('Removed "Old plan" (Coffee).');
    expect(summary).toContain('"Wind-down routine" activated.');
  });

  it("falls back to no-changes prose", () => {
    expect(
      summarizeStrategyChanges({ added: [], removed: [], changed: [] }),
    ).toBe("No plan changes.");
  });
});
