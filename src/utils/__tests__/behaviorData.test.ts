import { getFormattedValue } from "../behaviorData";

describe("getFormattedValue", () => {
  it("formats occurrence values as times, ignoring any stray unit", () => {
    expect(
      getFormattedValue({ trackingType: "occurrence", value: 1 }),
    ).toBe("1 time");
    expect(
      getFormattedValue({ trackingType: "occurrence", value: 3 }),
    ).toBe("3 times");
    // A migrated doc that still carries a unit must not produce "1 puffs".
    expect(
      getFormattedValue({
        trackingType: "occurrence",
        value: 1,
        behaviorTrackingUnit: "puffs",
      }),
    ).toBe("1 time");
  });

  it("keeps counter formatting intact", () => {
    expect(
      getFormattedValue({
        trackingType: "counter",
        value: 2,
        behaviorTrackingUnit: "puffs",
      }),
    ).toBe("2 puffs");
  });

  it("keeps timer formatting intact", () => {
    expect(getFormattedValue({ trackingType: "timer", value: 5400 })).toBe(
      "1h 30m",
    );
  });
});
