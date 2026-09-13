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

  it("gives every registry metric a valid scale", () => {
    for (const def of METRIC_REGISTRY) {
      expect(normalizeMetricScale(def.scale)).toEqual(def.scale);
    }
  });
});
