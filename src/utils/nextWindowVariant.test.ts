import {
  getLocalMinutes,
  selectNextWindowVariant,
} from "./nextWindowVariant";

const m = (h: number, min = 0) => h * 60 + min;

describe("selectNextWindowVariant", () => {
  it("midday with no recap configured is daytime", () => {
    expect(selectNextWindowVariant({ localMinutes: m(14) })).toBe("daytime");
  });

  it("evening starts at 20:00", () => {
    expect(selectNextWindowVariant({ localMinutes: m(19, 59) })).toBe("daytime");
    expect(selectNextWindowVariant({ localMinutes: m(20) })).toBe("evening");
  });

  // A 1am urge is still "tonight" — the window is winding toward sleep, not a
  // fresh day.
  it("small hours are evening until 05:00", () => {
    expect(selectNextWindowVariant({ localMinutes: m(1) })).toBe("evening");
    expect(selectNextWindowVariant({ localMinutes: m(4, 59) })).toBe("evening");
    expect(selectNextWindowVariant({ localMinutes: m(5) })).toBe("daytime");
  });

  it("inside 90 minutes before the recap trigger is pre_recap", () => {
    expect(
      selectNextWindowVariant({
        localMinutes: m(20),
        recapTriggerMinutes: m(21),
      }),
    ).toBe("pre_recap");
  });

  // pre_recap is the more specific instruction where the two overlap — recap
  // triggers live in the evening by design.
  it("pre_recap wins over evening", () => {
    expect(
      selectNextWindowVariant({
        localMinutes: m(20, 30),
        recapTriggerMinutes: m(21),
      }),
    ).toBe("pre_recap");
  });

  it("a recap already past does not make it pre_recap", () => {
    expect(
      selectNextWindowVariant({
        localMinutes: m(22),
        recapTriggerMinutes: m(21),
      }),
    ).toBe("evening");
    expect(
      selectNextWindowVariant({
        localMinutes: m(14),
        recapTriggerMinutes: m(9),
      }),
    ).toBe("daytime");
  });

  it("a recap more than the window away stays daytime", () => {
    expect(
      selectNextWindowVariant({
        localMinutes: m(14),
        recapTriggerMinutes: m(21),
      }),
    ).toBe("daytime");
  });
});

describe("getLocalMinutes", () => {
  it("resolves the local wall clock in the given timezone", () => {
    // 2026-08-05T15:30:00Z is 09:30 in Mexico City (UTC-6, no DST).
    const now = new Date("2026-08-05T15:30:00Z");
    expect(getLocalMinutes(now, "America/Mexico_City")).toBe(9 * 60 + 30);
  });

  it("handles midnight without wrapping to 24h", () => {
    // 06:00Z is exactly midnight in Mexico City.
    const now = new Date("2026-08-05T06:00:00Z");
    expect(getLocalMinutes(now, "America/Mexico_City")).toBe(0);
  });
});
