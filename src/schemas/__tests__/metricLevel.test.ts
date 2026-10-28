import {
  countMetricLevels,
  levelFromValue,
  metricLevelLabel,
  metricLevelLabelsSchema,
  metricLogLevel,
  metricReadingFields,
  metricSchema,
  nearestMetricLevel,
  normalizeMetricLevelLabels,
  valueDistributionFromLevelCounts,
  valueFromLevel,
} from "../metric";
import { metricLogSchema } from "../log/metricLog";
import { METRIC_REGISTRY, metricLevelLabelsFor } from "../../constants/metrics";

const byId = Object.fromEntries(METRIC_REGISTRY.map((m) => [m.id, m]));

describe("five-point metric levels", () => {
  it("maps a 3-point reading to low / normal / high, never an extreme", () => {
    expect([1, 2, 3].map((v) => levelFromValue(v as 1 | 2 | 3))).toEqual([2, 3, 4]);
  });

  it("collapses a level to the 3-point value older readers understand", () => {
    expect([1, 2, 3, 4, 5].map((l) => valueFromLevel(l as 1 | 2 | 3 | 4 | 5))).toEqual([
      1, 1, 2, 3, 3,
    ]);
    expect(metricReadingFields(5)).toEqual({ level: 5, value: 3 });
  });

  it("resolves a reading's level from level, else from value", () => {
    expect(metricLogLevel({ value: 1 })).toBe(2);
    expect(metricLogLevel({ value: 2 })).toBe(3);
    expect(metricLogLevel({ value: 3 })).toBe(4);
    expect(metricLogLevel({ value: 1, level: 1 })).toBe(1);
    expect(metricLogLevel({ value: 3, level: 5 })).toBe(5);
    expect(metricLogLevel({ value: null })).toBeNull();
    expect(metricLogLevel({ value: null, level: null })).toBeNull();
    expect(metricLogLevel(undefined)).toBeNull();
  });

  it("trusts the value over a level an older build left stale", () => {
    // An old build rewrote data.value from "very clear" (5 → 3) to its low (1).
    expect(metricLogLevel({ value: 1, level: 5 })).toBe(2);
    // ...or to its middle.
    expect(metricLogLevel({ value: 2, level: 1 })).toBe(3);
  });

  it("names Mental clarity and Energy as Michael worded them", () => {
    expect(byId["mental-clarity"].levels).toEqual([
      "very foggy",
      "foggy",
      "normal",
      "clear",
      "very clear",
    ]);
    expect(byId["energy"].levels).toEqual([
      "drained",
      "low",
      "normal",
      "energetic",
      "very energetic",
    ]);
    expect(metricLevelLabel(2, byId["mental-clarity"].levels)).toBe("foggy");
  });

  it("gives every registry metric five valid labels centred on normal", () => {
    for (const def of METRIC_REGISTRY) {
      expect(metricLevelLabelsSchema.parse(def.levels)).toEqual(def.levels);
      expect(def.levels[2]).toBe("normal");
      expect(new Set(def.levels).size).toBe(5);
    }
  });

  it("orders Anxiety calm → anxious: higher is more of the named metric", () => {
    expect(byId["anxiety"].levels[4]).toBe("very anxious");
    expect(byId["anxiety"].desiredDirection).toBe("lower");
  });

  it("resolves labels: own, then registry by id or name, then generic", () => {
    const own = ["very flat", "flat", "normal", "lively", "very lively"];
    expect(metricLevelLabelsFor({ levels: own, name: "Energy" })).toEqual(own);
    expect(metricLevelLabelsFor({ metricRegistryId: "energy" })[0]).toBe("drained");
    expect(metricLevelLabelsFor({ name: " mental clarity " })[1]).toBe("foggy");
    expect(metricLevelLabelsFor({ name: "Lung health" })).toEqual([
      "very low",
      "low",
      "normal",
      "high",
      "very high",
    ]);
  });

  it("normalizes untrusted labels and refuses bad ones", () => {
    expect(
      normalizeMetricLevelLabels({
        veryLow: " Very  Foggy",
        low: "Foggy",
        high: "clear",
        veryHigh: "VERY clear",
      }),
    ).toEqual(["very foggy", "foggy", "normal", "clear", "very clear"]);
    expect(normalizeMetricLevelLabels(["a", "b", "whatever", "d", "e"])).toEqual([
      "a",
      "b",
      "normal",
      "d",
      "e",
    ]);
    expect(normalizeMetricLevelLabels({ veryLow: "a", low: "b", high: "c" })).toBeUndefined();
    expect(
      normalizeMetricLevelLabels({ veryLow: "a", low: "normal", high: "c", veryHigh: "d" }),
    ).toBeUndefined();
    expect(
      normalizeMetricLevelLabels({ veryLow: "a", low: "a", high: "c", veryHigh: "d" }),
    ).toBeUndefined();
    expect(
      normalizeMetricLevelLabels({
        veryLow: "x".repeat(21),
        low: "b",
        high: "c",
        veryHigh: "d",
      }),
    ).toBeUndefined();
    expect(normalizeMetricLevelLabels(null)).toBeUndefined();
  });

  it("counts levels and collapses counts to the 3-point distribution", () => {
    const counts = countMetricLevels([1, 2, 2, 3, null, 5, 4, 4]);
    expect(counts).toEqual([1, 2, 1, 2, 1]);
    expect(valueDistributionFromLevelCounts(counts)).toEqual({ low: 3, okay: 1, high: 3 });
  });

  it("rounds a mean level to the nearest label, half away from normal", () => {
    expect(nearestMetricLevel(3.4)).toBe(3);
    expect(nearestMetricLevel(3.5)).toBe(4);
    expect(nearestMetricLevel(2.5)).toBe(2);
    expect(nearestMetricLevel(1.2)).toBe(1);
    expect(nearestMetricLevel(9)).toBe(5);
  });

  it("accepts a migrated metric doc and both reading shapes", () => {
    expect(
      metricSchema.safeParse({
        name: "Mental clarity",
        scale: { word: "clear-headed", low: "somewhat", high: "very" },
        levels: byId["mental-clarity"].levels,
      }).success,
    ).toBe(true);
    expect(
      metricSchema.safeParse({ name: "X", levels: ["a", "b", "okay", "d", "e"] }).success,
    ).toBe(false);

    const base = {
      type: "metric",
      isDisplayable: true,
      userId: "u",
      sessionId: "s",
      dateString: "2026-10-28",
      createdAt: { seconds: 1, nanoseconds: 0 },
      updatedAt: { seconds: 1, nanoseconds: 0 },
      timestamp: { seconds: 1, nanoseconds: 0 },
    };
    const legacy = { metricId: "m", metricName: "Energy", value: 3 };
    expect(metricLogSchema.safeParse({ ...base, data: legacy }).success).toBe(true);
    expect(
      metricLogSchema.safeParse({
        ...base,
        data: { ...legacy, level: 4, levels: byId["energy"].levels },
      }).success,
    ).toBe(true);
    expect(
      metricLogSchema.safeParse({ ...base, data: { ...legacy, level: 6 } }).success,
    ).toBe(false);
  });
});
