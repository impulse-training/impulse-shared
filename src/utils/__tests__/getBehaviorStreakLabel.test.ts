import { Behavior } from "../../schemas";
import {
  formatStreakDays,
  getBehaviorStreakLabel,
} from "../getBehaviorStreakLabel";

const behavior = (overrides: Partial<Behavior> = {}): Behavior =>
  ({ id: "b1", name: "Vaping", trackingType: "scale", ...overrides }) as Behavior;

describe("getBehaviorStreakLabel", () => {
  it("uses 'within window' for a contain goal, not the abstinence label", () => {
    const b = behavior({
      streakLabel: "free",
      goal: {
        type: "contain",
        allowedWindows: [{ dayOfWeek: 1, startTime: "10:00", endTime: "00:00" }],
      },
    });
    expect(getBehaviorStreakLabel(b)).toBe("within window");
  });

  it("uses 'on target' for reduce goals", () => {
    expect(
      getBehaviorStreakLabel(
        behavior({ goal: { type: "reduceEveryDay", target: 1 } }),
      ),
    ).toBe("on target");
    expect(
      getBehaviorStreakLabel(
        behavior({
          goal: {
            type: "reduceIndividualDays",
            dailyTargets: { 0: 1, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1 },
          },
        }),
      ),
    ).toBe("on target");
  });

  it("keeps the behavior's abstinence label for an eliminate goal", () => {
    expect(
      getBehaviorStreakLabel(
        behavior({ streakLabel: "sober", goal: { type: "eliminate" } }),
      ),
    ).toBe("sober");
  });

  it("defaults to 'free' for an eliminate goal with no label set", () => {
    expect(getBehaviorStreakLabel(behavior({ goal: { type: "eliminate" } }))).toBe(
      "free",
    );
  });

  it("defaults to 'free' when no goal is set", () => {
    expect(getBehaviorStreakLabel(behavior())).toBe("free");
  });

  it("formats singular and plural day counts", () => {
    const contain = behavior({
      goal: {
        type: "contain",
        allowedWindows: [{ dayOfWeek: 1, startTime: "10:00", endTime: "00:00" }],
      },
    });
    expect(formatStreakDays(contain, 1)).toBe("1 day within window");
    expect(formatStreakDays(contain, 0)).toBe("0 days within window");
    expect(formatStreakDays(contain, 3)).toBe("3 days within window");
    expect(formatStreakDays(behavior({ goal: { type: "eliminate" } }), 1)).toBe(
      "1 day free",
    );
  });
});
