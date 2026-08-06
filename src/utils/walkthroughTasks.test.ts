import {
  compareWalkthroughTasks,
  isWalkthroughEligibleTask,
  walkthroughSubtitle,
  WALKTHROUGH_SESSION_ID,
} from "./walkthroughTasks";

const APP_VERSION = "0.1.13";

const open = (over: Record<string, unknown> = {}) => ({
  type: "merge_behaviors",
  status: "open",
  ...over,
});

describe("isWalkthroughEligibleTask", () => {
  it("includes an unclaimed task with no session-type restriction", () => {
    expect(isWalkthroughEligibleTask(open(), APP_VERSION)).toBe(true);
  });

  it("excludes tasks that are not open", () => {
    expect(isWalkthroughEligibleTask(open({ status: "completed" }), APP_VERSION)).toBe(false);
    expect(isWalkthroughEligibleTask(open({ status: "dismissed" }), APP_VERSION)).toBe(false);
  });

  it("excludes types with their own surface", () => {
    for (const type of [
      "recap_question",
      "weekly_review",
      "create_session",
      "suggest_tactic",
    ]) {
      expect(isWalkthroughEligibleTask(open({ type }), APP_VERSION)).toBe(false);
    }
  });

  it("excludes strategy changes by type even when they forgot claimableSessionTypes", () => {
    // The recap filter hit exactly this: a suggest_strategy created without
    // claimableSessionTypes got claimed where it didn't belong.
    expect(
      isWalkthroughEligibleTask(open({ type: "suggest_strategy" }), APP_VERSION),
    ).toBe(false);
    expect(
      isWalkthroughEligibleTask(open({ type: "propose_goal" }), APP_VERSION),
    ).toBe(false);
  });

  it("excludes recap-only tasks but keeps ones that name general", () => {
    expect(
      isWalkthroughEligibleTask(
        open({ claimableSessionTypes: ["recap"] }),
        APP_VERSION,
      ),
    ).toBe(false);
    expect(
      isWalkthroughEligibleTask(
        open({ type: "understand_behavior", claimableSessionTypes: ["recap", "general"] }),
        APP_VERSION,
      ),
    ).toBe(true);
  });

  it("leaves tasks claimed by another session alone", () => {
    expect(
      isWalkthroughEligibleTask(
        open({ claimedBySessionId: "recap_2026-08-05" }),
        APP_VERSION,
      ),
    ).toBe(false);
  });

  it("keeps its own claims eligible so the card survives a half-finished run", () => {
    expect(
      isWalkthroughEligibleTask(
        open({ claimedBySessionId: WALKTHROUGH_SESSION_ID }),
        APP_VERSION,
      ),
    ).toBe(true);
  });

  it("excludes tasks needing a newer build, and fails closed on unknown version", () => {
    expect(
      isWalkthroughEligibleTask(open({ minAppVersion: "0.1.17" }), APP_VERSION),
    ).toBe(false);
    expect(
      isWalkthroughEligibleTask(open({ minAppVersion: "0.1.10" }), APP_VERSION),
    ).toBe(true);
    expect(
      isWalkthroughEligibleTask(open({ minAppVersion: "0.1.10" }), undefined),
    ).toBe(false);
  });

  it("excludes review_trigger until a coach approves it", () => {
    expect(
      isWalkthroughEligibleTask(open({ type: "review_trigger" }), APP_VERSION),
    ).toBe(false);
    expect(
      isWalkthroughEligibleTask(
        open({ type: "review_trigger", approvedAt: new Date() }),
        APP_VERSION,
      ),
    ).toBe(true);
  });

  // Opal (ImnmmWDt2EQhrsqAzYPq1MqXxD93) is the case that motivated this: a May
  // bundle listing 3 live tasks + 1 deleted one, while 5 more accumulated
  // outside it. These are his real task shapes.
  it("resolves the motivating user's open tasks to the expected set", () => {
    const tasks = [
      { id: "merge_porn_mast", type: "merge_behaviors", status: "open", minAppVersion: "0.1.7" },
      { id: "Tt7JaIq9Tyn62HKzqQPc", type: "propose_mask_behavior", status: "open" },
      { id: "propose_exp_porn", type: "propose_experiment", status: "open" },
      { id: "propose_goal_porn", type: "propose_goal", status: "open", claimableSessionTypes: ["recap"] },
      { id: "suggest_strategy_late_night", type: "suggest_strategy", status: "open", claimableSessionTypes: ["recap"], ordinal: 50 },
      { id: "resume_recap_reminders", type: "resume_recap_reminders", status: "open", claimableSessionTypes: ["recap"], ordinal: 15, minAppVersion: "0.1.17" },
      { id: "understand_behavior_EBrYdKXCrUmVxpjbApnk", type: "understand_behavior", status: "open", claimableSessionTypes: ["recap", "general"] },
      { id: "understand_behavior_EHUZkrCVrlGjq1GVVfpE", type: "understand_behavior", status: "open", claimableSessionTypes: ["recap", "general"] },
      { id: "recap_EHUZkrCVrlGjq1GVVfpE_after-feeling", type: "recap_question", status: "open", ordinal: 10 },
    ];

    const eligible = tasks
      .filter((t) => isWalkthroughEligibleTask(t, APP_VERSION))
      .sort(compareWalkthroughTasks)
      .map((t) => t.id);

    expect(eligible).toEqual([
      "merge_porn_mast",
      "Tt7JaIq9Tyn62HKzqQPc",
      "understand_behavior_EBrYdKXCrUmVxpjbApnk",
      "understand_behavior_EHUZkrCVrlGjq1GVVfpE",
      "propose_exp_porn",
    ]);
  });
});

describe("compareWalkthroughTasks", () => {
  it("puts a merge before the understand conversations it would invalidate", () => {
    const understand = { id: "u", type: "understand_behavior" };
    const merge = { id: "m", type: "merge_behaviors" };
    expect([understand, merge].sort(compareWalkthroughTasks)).toEqual([merge, understand]);
  });

  it("falls back to ordinal, then id", () => {
    const a = { id: "a", type: "contain_lapse", ordinal: 20 };
    const b = { id: "b", type: "contain_lapse", ordinal: 10 };
    expect([a, b].sort(compareWalkthroughTasks)).toEqual([b, a]);

    const c = { id: "c", type: "contain_lapse" };
    const d = { id: "d", type: "contain_lapse" };
    expect([d, c].sort(compareWalkthroughTasks)).toEqual([c, d]);
  });
});

describe("walkthroughSubtitle", () => {
  it("does not say 1 things", () => {
    expect(walkthroughSubtitle(1)).toBe("1 thing to work through");
    expect(walkthroughSubtitle(5)).toBe("5 things to work through");
  });
});
