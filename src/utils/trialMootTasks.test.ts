import {
  isStrategyPastBaseline,
  isTaskMootedByStrategies,
  TRIAL_MOOT_TASK_TYPES,
} from "./trialMootTasks";

const strategy = (over: Record<string, unknown> = {}) => ({
  status: "active",
  phase: "trial",
  behaviorIds: ["b1"],
  ...over,
});

describe("isStrategyPastBaseline", () => {
  it("is true for an active strategy running or having kept a trial", () => {
    expect(isStrategyPastBaseline(strategy())).toBe(true);
    expect(isStrategyPastBaseline(strategy({ phase: "kept" }))).toBe(true);
  });

  it("is false while still in baseline, before phases, or not active", () => {
    expect(isStrategyPastBaseline(strategy({ phase: "baseline" }))).toBe(false);
    expect(isStrategyPastBaseline(strategy({ phase: undefined }))).toBe(false);
    expect(isStrategyPastBaseline(strategy({ status: "retired" }))).toBe(false);
    expect(isStrategyPastBaseline(strategy({ status: "draft" }))).toBe(false);
  });
});

describe("isTaskMootedByStrategies", () => {
  it("moots collect_baseline for a behavior whose strategy is in a trial", () => {
    expect(TRIAL_MOOT_TASK_TYPES.has("collect_baseline")).toBe(true);
    expect(
      isTaskMootedByStrategies({ type: "collect_baseline", behaviorId: "b1" }, [strategy()]),
    ).toBe(true);
  });

  it("only for the behaviors that strategy covers", () => {
    expect(
      isTaskMootedByStrategies({ type: "collect_baseline", behaviorId: "b2" }, [strategy()]),
    ).toBe(false);
  });

  it("not while the strategy is still collecting its baseline", () => {
    expect(
      isTaskMootedByStrategies({ type: "collect_baseline", behaviorId: "b1" }, [
        strategy({ phase: "baseline" }),
      ]),
    ).toBe(false);
  });

  it("leaves understanding the behavior and other setup alone", () => {
    for (const type of ["understand_behavior", "setup_shortcut", "merge_behaviors"]) {
      expect(isTaskMootedByStrategies({ type, behaviorId: "b1" }, [strategy()])).toBe(false);
    }
  });

  it("ignores a task with no behavior", () => {
    expect(isTaskMootedByStrategies({ type: "collect_baseline" }, [strategy()])).toBe(false);
  });
});
