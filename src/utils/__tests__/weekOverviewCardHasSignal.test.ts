import { weekOverviewCardHasSignal } from "../weekOverviewCardHasSignal";

describe("weekOverviewCardHasSignal", () => {
  it("rejects the single-entry card that reads 'peak 3' over 'No data last week'", () => {
    expect(
      weekOverviewCardHasSignal({
        trend: "INSUFFICIENT_DATA",
        pctChangeFromLastWeek: null,
      }),
    ).toBe(false);
  });

  it("rejects a card with no trend field and no comparison", () => {
    expect(weekOverviewCardHasSignal({ pctChangeFromLastWeek: null })).toBe(false);
    expect(weekOverviewCardHasSignal({})).toBe(false);
  });

  // A sparkline needs two points to have a shape; one tracked day is the same
  // "peak 3" card as before, just drawn as a dot.
  it("keeps a card whose daily values give the sparkline a shape", () => {
    expect(
      weekOverviewCardHasSignal({
        dailyValues: [null, 30, null, null, null, 45, 60],
        pctChangeFromLastWeek: null,
      }),
    ).toBe(true);
    expect(
      weekOverviewCardHasSignal({ dailyValues: [0, 0, 0, 0, 0, 0, 0], pctChangeFromLastWeek: null }),
    ).toBe(true);
    expect(
      weekOverviewCardHasSignal({
        dailyValues: [null, null, null, null, null, null, 3],
        pctChangeFromLastWeek: null,
      }),
    ).toBe(false);
  });

  it("ignores a trend once daily values are present (the trend is no longer shown)", () => {
    expect(
      weekOverviewCardHasSignal({
        trend: "IMPROVING",
        dailyValues: [null, null, null, null, null, null, 3],
        pctChangeFromLastWeek: null,
      }),
    ).toBe(false);
  });

  it("keeps a legacy card (no daily values) with a real trend even without a prior week", () => {
    expect(
      weekOverviewCardHasSignal({
        trend: "IMPROVING",
        pctChangeFromLastWeek: null,
      }),
    ).toBe(true);
    expect(
      weekOverviewCardHasSignal({ trend: "STABLE", pctChangeFromLastWeek: null }),
    ).toBe(true);
  });

  it("keeps a card with a prior-week comparison even without a trend", () => {
    expect(
      weekOverviewCardHasSignal({
        trend: "INSUFFICIENT_DATA",
        pctChangeFromLastWeek: -0.2,
      }),
    ).toBe(true);
  });

  it("treats a flat 0% change as a real comparison, not missing data", () => {
    expect(
      weekOverviewCardHasSignal({
        trend: "INSUFFICIENT_DATA",
        pctChangeFromLastWeek: 0,
      }),
    ).toBe(true);
  });
});
