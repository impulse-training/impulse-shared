import { StrategyPlanSnapshot } from "../schemas/strategySnapshot";
import {
  describeStrategyPlan,
  diffStrategyPlans,
  isEmptyStrategyChanges,
  summarizeStrategyChanges,
} from "./strategyDiff";

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

/** The real-world shape: no name, identified only by its parent. */
function unnamedBehaviorPlan(
  overrides: Partial<StrategyPlanSnapshot> = {},
): StrategyPlanSnapshot {
  return plan({
    planPath: "behaviors/b1/plans/p1",
    planId: "p1",
    name: "",
    parentType: "behavior",
    parentId: "b1",
    parentLabel: "Vaping",
    ...overrides,
  });
}

describe("diffStrategyPlans", () => {
  it("returns empty changes for identical snapshots", () => {
    const snapshot = [plan()];
    const diff = diffStrategyPlans(snapshot, snapshot);
    expect(diff.added).toHaveLength(0);
    expect(diff.removed).toHaveLength(0);
    expect(diff.changed).toHaveLength(0);
    expect(isEmptyStrategyChanges(diff)).toBe(true);
  });

  it("detects added and removed plans by planPath", () => {
    const before = [plan()];
    const after = [
      plan({ planPath: "behaviors/b1/plans/p2", planId: "p2", name: "Morning plan", parentType: "behavior", parentId: "b1", parentLabel: "Coffee" }),
    ];
    const diff = diffStrategyPlans(before, after);
    expect(diff.added.map((p) => p.planId)).toEqual(["p2"]);
    expect(diff.removed.map((p) => p.planId)).toEqual(["p1"]);
    expect(isEmptyStrategyChanges(diff)).toBe(false);
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

  it("carries the parent onto changed entries so they can be labelled", () => {
    const diff = diffStrategyPlans(
      [unnamedBehaviorPlan({ isActive: false })],
      [unnamedBehaviorPlan({ isActive: true })],
    );
    expect(diff.changed[0]).toMatchObject({
      parentType: "behavior",
      parentId: "b1",
      parentLabel: "Vaping",
    });
  });

  it("reports a tactic reorder (the plan sheet leads with the first tactic)", () => {
    const before = [plan({ tacticTitles: ["A", "B"] })];
    const after = [plan({ tacticTitles: ["B", "A"] })];
    const diff = diffStrategyPlans(before, after);
    expect(diff.changed[0].changes).toEqual([
      { field: "tacticOrder", before: "A, B", after: "B, A" },
    ]);
  });
});

describe("describeStrategyPlan", () => {
  it("names an unnamed plan by its behavior", () => {
    expect(describeStrategyPlan(unnamedBehaviorPlan())).toBe("your Vaping plan");
  });

  it("quotes a trigger parent, which reads as a phrase", () => {
    expect(
      describeStrategyPlan({ name: "", parentType: "trigger", parentLabel: "Working too hard" }),
    ).toBe('your "Working too hard" plan');
  });

  it("prefers an explicit plan name when the user set one", () => {
    expect(describeStrategyPlan(plan())).toBe(
      '"Wind-down routine" (Evening wind-down)',
    );
  });

  it("never says untitled/unknown when there is nothing to go on", () => {
    const label = describeStrategyPlan({ name: "" });
    expect(label).toBe("an unnamed plan");
    expect(label).not.toMatch(/untitled/i);
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
    expect(summary).toContain('"Wind-down routine" (Evening wind-down) was activated.');
  });

  it("names unnamed plans by their parent instead of 'Untitled plan'", () => {
    const diff = diffStrategyPlans(
      [],
      [
        unnamedBehaviorPlan(),
        plan({ planPath: "triggers/t9/plans/p9", planId: "p9", name: "", parentId: "t9", parentLabel: "Working too hard", isActive: false }),
      ],
    );
    const summary = summarizeStrategyChanges(diff);
    expect(summary).toBe(
      'Added your Vaping plan. Added your "Working too hard" plan (inactive).',
    );
    expect(summary).not.toMatch(/untitled/i);
  });

  it("collapses an activate/deactivate pair under one parent into a switch", () => {
    const before = [
      unnamedBehaviorPlan({ planPath: "behaviors/b1/plans/p1", planId: "p1", isActive: true, tacticTitles: ["Old tactic"] }),
      unnamedBehaviorPlan({ planPath: "behaviors/b1/plans/p2", planId: "p2", isActive: false, tacticTitles: ["Grounding", "Podcast"] }),
    ];
    const after = [
      unnamedBehaviorPlan({ planPath: "behaviors/b1/plans/p1", planId: "p1", isActive: false, tacticTitles: ["Old tactic"] }),
      unnamedBehaviorPlan({ planPath: "behaviors/b1/plans/p2", planId: "p2", isActive: true, tacticTitles: ["Grounding", "Podcast"] }),
    ];
    const summary = summarizeStrategyChanges(diffStrategyPlans(before, after), {
      plansAfter: after,
    });
    expect(summary).toBe(
      "Switched your Vaping plan (now: Grounding, Podcast).",
    );
  });

  it("keeps activations separate when they span different parents", () => {
    const before = [
      unnamedBehaviorPlan({ planPath: "behaviors/b1/plans/p1", isActive: true }),
      unnamedBehaviorPlan({ planPath: "behaviors/b2/plans/p2", parentId: "b2", parentLabel: "Coffee", isActive: false }),
    ];
    const after = [
      unnamedBehaviorPlan({ planPath: "behaviors/b1/plans/p1", isActive: false }),
      unnamedBehaviorPlan({ planPath: "behaviors/b2/plans/p2", parentId: "b2", parentLabel: "Coffee", isActive: true }),
    ];
    const summary = summarizeStrategyChanges(diffStrategyPlans(before, after), {
      plansAfter: after,
    });
    expect(summary).toBe(
      "Your Vaping plan was deactivated. Your Coffee plan was activated.",
    );
  });

  it("describes a reorder by what the plan now leads with", () => {
    const diff = diffStrategyPlans(
      [unnamedBehaviorPlan({ tacticTitles: ["Grounding", "Podcast"] })],
      [unnamedBehaviorPlan({ tacticTitles: ["Podcast", "Grounding"] })],
    );
    expect(summarizeStrategyChanges(diff)).toBe(
      "Reordered the tactics in your Vaping plan, now leading with Podcast.",
    );
  });

  it("omits the leading tactic when it is only a removed-tactic placeholder", () => {
    const diff = diffStrategyPlans(
      [unnamedBehaviorPlan({ tacticTitles: ["Grounding", "Removed tactic"] })],
      [unnamedBehaviorPlan({ tacticTitles: ["Removed tactic", "Grounding"] })],
    );
    expect(summarizeStrategyChanges(diff)).toBe(
      "Reordered the tactics in your Vaping plan.",
    );
  });

  it("falls back to no-changes prose", () => {
    expect(
      summarizeStrategyChanges({ added: [], removed: [], changed: [] }),
    ).toBe("No plan changes.");
  });
});
