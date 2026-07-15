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

  it("keeps a card with a real trend even without a prior week", () => {
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
