import { reminderCadence, StrategyDay } from "../strategy";

type O = StrategyDay["boundaries"][string];
/** Days from 2026-10-01 on, one outcome each ("-" = not answered). */
const days = (...outcomes: (O | "-")[]) =>
  outcomes.flatMap((o, i) =>
    o === "-" ? [] : [{ dateString: `2026-10-${String(i + 1).padStart(2, "0")}`, boundaries: { m: o } }],
  );
const day = (n: number) => `2026-10-${String(n).padStart(2, "0")}`;

describe("reminderCadence", () => {
  it("reminds daily at the start", () => {
    expect(reminderCadence([], "m", day(1))).toMatchObject({ stage: "daily", firesToday: true, keptInRow: 0 });
    expect(reminderCadence(days("kept", "kept"), "m", day(3))).toMatchObject({ stage: "daily", firesToday: true });
  });

  it("tapers to every other day after three kept days", () => {
    const d = days("kept", "kept", "kept"); // alternate from day 3
    expect(reminderCadence(d, "m", day(4))).toMatchObject({ stage: "alternate", firesToday: false });
    expect(reminderCadence(d, "m", day(5))).toMatchObject({ stage: "alternate", firesToday: true });
    expect(reminderCadence(d, "m", day(6)).firesToday).toBe(false);
  });

  it("stops once it is a habit", () => {
    const d = days(...Array<O>(14).fill("kept"));
    expect(reminderCadence(d, "m", day(15))).toMatchObject({ stage: "habit", firesToday: false, keptInRow: 14 });
  });

  it("goes back to daily after a miss, and a partly day counts as one", () => {
    expect(reminderCadence(days("kept", "kept", "kept", "kept", "broken"), "m", day(6))).toMatchObject({
      stage: "daily",
      firesToday: true,
      keptInRow: 0,
    });
    expect(reminderCadence(days("kept", "kept", "kept", "partly"), "m", day(5)).stage).toBe("daily");
  });

  it("ignores days with no answer, and days that did not apply", () => {
    expect(reminderCadence(days("kept", "-", "kept", "na", "kept"), "m", day(6))).toMatchObject({
      stage: "alternate",
      keptInRow: 3,
    });
  });

  it("does not count today or later", () => {
    expect(reminderCadence(days("kept", "kept", "kept"), "m", day(3)).stage).toBe("daily");
  });

  it("is silent when turned off, and restarts from sinceDateString", () => {
    expect(reminderCadence([], "m", day(1), { off: true }).firesToday).toBe(false);
    const d = days("kept", "kept", "kept", "kept");
    expect(reminderCadence(d, "m", day(5), { sinceDateString: day(4) })).toMatchObject({ stage: "daily", keptInRow: 1 });
  });

  it("flags a move missed three times in the last five answers", () => {
    expect(reminderCadence(days("broken", "kept", "broken", "kept", "broken"), "m", day(6)).needsReview).toBe(true);
    expect(reminderCadence(days("broken", "broken", "kept", "kept", "kept", "broken"), "m", day(7)).needsReview).toBe(
      false,
    );
  });
});
