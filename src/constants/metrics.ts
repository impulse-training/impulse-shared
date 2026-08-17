import type { MetricScaleLabels } from "../schemas/metric";

export type MetricDefinition = {
  id: string;
  label: string;
  description: string;
  /**
   * The three scale labels, ordered low → high. Named for the metric itself
   * rather than a generic Low/Medium/High, because the ordering means "more of
   * this metric" — high Anxiety is 3 just as high Energy is 3, and only
   * `desiredDirection` says whether that is welcome.
   */
  scaleLabels: MetricScaleLabels;
  minContiguousTransitionDays: number;
  desiredDirection: "higher" | "lower";
};

export const METRIC_REGISTRY: MetricDefinition[] = [
  {
    id: "happiness",
    label: "Happiness",
    description: "How happy do you feel?",
    scaleLabels: ["Low", "Okay", "High"],
    minContiguousTransitionDays: 7,
    desiredDirection: "higher",
  },
  {
    id: "motivation",
    label: "Motivation",
    description: "How motivated do you feel?",
    scaleLabels: ["Low", "Okay", "High"],
    minContiguousTransitionDays: 7,
    desiredDirection: "higher",
  },
  {
    id: "mental-clarity",
    label: "Mental clarity",
    description: "How clear is your thinking?",
    scaleLabels: ["Foggy", "Okay", "Clear"],
    minContiguousTransitionDays: 7,
    desiredDirection: "higher",
  },
  {
    id: "focus",
    label: "Focus",
    description: "How well can you concentrate?",
    scaleLabels: ["Scattered", "Okay", "Sharp"],
    minContiguousTransitionDays: 7,
    desiredDirection: "higher",
  },
  {
    id: "energy",
    label: "Energy",
    description: "How energetic do you feel?",
    scaleLabels: ["Low", "Okay", "High"],
    minContiguousTransitionDays: 7,
    desiredDirection: "higher",
  },
  {
    id: "sleep-quality",
    label: "Sleep quality",
    description: "How well did you sleep?",
    scaleLabels: ["Poor", "Okay", "Good"],
    minContiguousTransitionDays: 7,
    desiredDirection: "higher",
  },
  {
    id: "anxiety",
    label: "Anxiety",
    description: "How anxious do you feel?",
    scaleLabels: ["Low", "Moderate", "High"],
    minContiguousTransitionDays: 7,
    desiredDirection: "lower",
  },
  {
    id: "productivity",
    label: "Productivity",
    description: "How productive were you?",
    scaleLabels: ["Low", "Okay", "High"],
    minContiguousTransitionDays: 7,
    desiredDirection: "higher",
  },
];

export const METRIC_REGISTRY_BY_ID: Record<string, MetricDefinition> =
  Object.fromEntries(METRIC_REGISTRY.map((metric) => [metric.id, metric]));
