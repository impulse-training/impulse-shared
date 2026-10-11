import { dailyStrategyItems, strategyItemStartDate } from "../index";

const ts = (iso: string) => ({ toMillis: () => Date.parse(iso) });
const move = (id: string, reviewedAt?: string) => ({
  id,
  text: `Move ${id}`,
  kind: "boundary" as const,
  fidelity: "exact" as const,
  textRevision: 1,
  userReview: "accepted" as const,
  userReviewedAt: reviewedAt ? (ts(reviewedAt) as never) : undefined,
  bindings: [],
});
const tz = "America/Mexico_City";

// 2026-10-11: accepted at 10:48 that morning, and the recap of the 10th asked
// whether the phone had slept outside the bedroom the night before.
describe("dailyStrategyItems on a date", () => {
  const strategy = {
    activatedAt: ts("2026-10-11T16:48:51Z") as never,
    items: [move("old", "2026-10-08T16:00:00Z"), move("new", "2026-10-11T16:48:51Z")],
  };

  it("leaves out moves that started after the day", () => {
    expect(dailyStrategyItems(strategy, 6, { dateString: "2026-10-10", timezone: tz }).map((i) => i.id)).toEqual([]);
  });

  it("counts the day a move started", () => {
    expect(dailyStrategyItems(strategy, 0, { dateString: "2026-10-11", timezone: tz }).map((i) => i.id)).toEqual([
      "old",
      "new",
    ]);
  });

  it("reads the start in the user's timezone", () => {
    // 01:00 UTC on the 11th is still the evening of the 10th in Mexico City.
    const late = { items: [move("late", "2026-10-11T01:00:00Z")] };
    expect(strategyItemStartDate({}, late.items[0], tz)).toBe("2026-10-10");
    expect(dailyStrategyItems(late, 6, { dateString: "2026-10-10", timezone: tz })).toHaveLength(1);
  });

  it("keeps every accepted move without a date, or without a start on record", () => {
    expect(dailyStrategyItems(strategy, 6)).toHaveLength(2);
    expect(dailyStrategyItems({ items: [move("legacy")] }, 6, { dateString: "2020-01-01", timezone: tz })).toHaveLength(1);
  });
});
