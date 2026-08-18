import { buildExperimentLadder } from "../milestoneLadder";
import {
  DEFAULT_EXPERIMENT_TARGET_DAYS,
  getExperimentTargetDays,
} from "../../schemas/experiment";

describe("buildExperimentLadder", () => {
  it("caps the default ladder at the target, flagging the target rung", () => {
    const rungs = buildExperimentLadder("ELIMINATE", undefined, 30);
    expect(rungs.map((r) => r.days)).toEqual([1, 3, 7, 14, 30]);
    expect(rungs[rungs.length - 1].label).toBe("1 month");
  });

  it("appends the target as a rung when it is not one of the defaults", () => {
    const rungs = buildExperimentLadder("ELIMINATE", undefined, 21);
    expect(rungs.map((r) => r.days)).toEqual([1, 3, 7, 14, 21]);
    expect(rungs[rungs.length - 1]).toEqual({ days: 21, label: "21 days" });
  });

  it("keeps custom rungs below the target and drops those above it", () => {
    const rungs = buildExperimentLadder(
      "ELIMINATE",
      [{ days: 10, label: "10 days" }, { days: 45, label: "45 days" }],
      30,
    );
    expect(rungs.map((r) => r.days)).toEqual([1, 3, 7, 10, 14, 30]);
  });

  it("is empty for goal types without a streak ladder", () => {
    expect(buildExperimentLadder("CUSTOM", undefined, 30)).toEqual([]);
  });
});

describe("getExperimentTargetDays", () => {
  it("defaults when absent or invalid, otherwise returns the doc's value", () => {
    expect(getExperimentTargetDays(undefined)).toBe(DEFAULT_EXPERIMENT_TARGET_DAYS);
    expect(getExperimentTargetDays({})).toBe(30);
    expect(getExperimentTargetDays({ targetDays: 0 })).toBe(30);
    expect(getExperimentTargetDays({ targetDays: 21 })).toBe(21);
  });
});
