import { Behavior } from "../../schemas";
import { Goal } from "../../schemas/goal";
import { formatBehaviorGoal } from "../formatBehaviorGoal";

const behavior = (overrides: Partial<Behavior> = {}): Behavior =>
  ({
    id: "b1",
    name: "Vaping",
    trackingType: "scale",
    ...overrides,
  }) as Behavior;

const window = (dayOfWeek: number, startTime = "10:00", endTime = "00:00") => ({
  dayOfWeek,
  startTime,
  endTime,
});

describe("formatBehaviorGoal — contain goals", () => {
  it("collapses an identical window across all 7 days into 'every day'", () => {
    const goal: Goal = {
      type: "contain",
      allowedWindows: [0, 1, 2, 3, 4, 5, 6].map((d) => window(d)),
    };
    expect(formatBehaviorGoal(behavior(), goal)).toBe(
      "Only 10:00–midnight, every day",
    );
  });

  it("renders an end of 00:00 as midnight rather than a backwards range", () => {
    const goal: Goal = { type: "contain", allowedWindows: [window(6)] };
    expect(formatBehaviorGoal(behavior(), goal)).toBe("Only Sat 10:00–midnight");
  });

  it("keeps a non-midnight end time as-is", () => {
    const goal: Goal = {
      type: "contain",
      allowedWindows: [window(6, "09:00", "12:00")],
    };
    expect(formatBehaviorGoal(behavior(), goal)).toBe("Only Sat 09:00–12:00");
  });

  it("groups days that share a window and lists them in week order", () => {
    const goal: Goal = {
      type: "contain",
      allowedWindows: [window(3), window(1), window(2)],
    };
    expect(formatBehaviorGoal(behavior(), goal)).toBe(
      "Only Mon, Tue, Wed 10:00–midnight",
    );
  });

  it("keeps distinct time ranges as separate groups", () => {
    const goal: Goal = {
      type: "contain",
      allowedWindows: [window(1), window(2), window(6, "09:00", "12:00")],
    };
    expect(formatBehaviorGoal(behavior(), goal)).toBe(
      "Only Mon, Tue 10:00–midnight, Sat 09:00–12:00",
    );
  });

  it("treats an empty window list as eliminate", () => {
    const goal: Goal = { type: "contain", allowedWindows: [] };
    expect(formatBehaviorGoal(behavior(), goal)).toBe("Eliminate");
  });
});
