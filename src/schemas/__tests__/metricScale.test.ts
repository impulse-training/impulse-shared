import {
  defaultMetricScale,
  metricScaleLabels,
  metricValueLabel,
  normalizeMetricScale,
} from "../metric";
import { METRIC_REGISTRY } from "../../constants/metrics";

describe("metric word scale", () => {
  it("renders the bare word as the middle state, adjectives at the ends", () => {
    const scale = { word: "bored", low: "a little", high: "very" };
    expect(metricScaleLabels(scale)).toEqual(["a little bored", "bored", "very bored"]);
    expect(metricValueLabel(2, scale)).toBe("bored");
    expect(metricValueLabel(3, { word: "rested", low: "somewhat", high: "well" })).toBe(
      "well rested",
    );
  });

  it("falls back to generic labels for a metric without a scale", () => {
    expect(metricScaleLabels(undefined)).toEqual(["low", "okay", "high"]);
  });

  it("builds a default scale from a word", () => {
    expect(defaultMetricScale("  Bored ")).toEqual({ word: "bored", low: "a little", high: "very" });
  });

  it("normalizes untrusted input and refuses incomplete scales", () => {
    expect(normalizeMetricScale({ word: " On  Edge", low: "A little", high: "Very " })).toEqual({
      word: "on edge",
      low: "a little",
      high: "very",
    });
    expect(normalizeMetricScale({ word: "bored", low: "a little" })).toBeUndefined();
    expect(normalizeMetricScale(["low", "okay", "high"])).toBeUndefined();
    expect(normalizeMetricScale(null)).toBeUndefined();
  });

  it("names the low state with lowWord when the scale has one", () => {
    const scale = { word: "clear-headed", low: "somewhat", high: "very", lowWord: "foggy" };
    expect(metricScaleLabels(scale)).toEqual(["foggy", "clear-headed", "very clear-headed"]);
    expect(metricValueLabel(1, scale)).toBe("foggy");
    expect(normalizeMetricScale({ ...scale, lowWord: " Foggy " })).toEqual(scale);
  });

  it("records a low Mental clarity and Energy as their own low states", () => {
    const byId = Object.fromEntries(METRIC_REGISTRY.map((m) => [m.id, m]));
    expect(metricValueLabel(1, byId["mental-clarity"].scale)).toBe("foggy");
    expect(metricValueLabel(1, byId["energy"].scale)).toBe("drained");
  });

  it("gives every registry metric a valid scale", () => {
    for (const def of METRIC_REGISTRY) {
      expect(normalizeMetricScale(def.scale)).toEqual(def.scale);
    }
  });
});
