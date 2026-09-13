import type { MetricScale } from "../schemas/metric";

export type MetricDefinition = {
  id: string;
  label: string;
  description: string;
  /**
   * The word and its adjectives, chosen per metric so each end reads naturally
   * ("somewhat rested / rested / well rested"). One-ended: the word names the
   * state and the value says how much of it — high Anxiety is "very anxious"
   * just as high Energy is "very energetic", and only `desiredDirection` says
   * whether more is welcome.
   */
  scale: MetricScale;
  minContiguousTransitionDays: number;
  desiredDirection: "higher" | "lower";
};

export const METRIC_REGISTRY: MetricDefinition[] = [
  {
    id: "happiness",
    label: "Happiness",
    description: "How happy do you feel?",
    scale: { word: "happy", low: "a little", high: "very" },
    minContiguousTransitionDays: 7,
    desiredDirection: "higher",
  },
  {
    id: "motivation",
    label: "Motivation",
    description: "How motivated do you feel?",
    scale: { word: "motivated", low: "a little", high: "very" },
    minContiguousTransitionDays: 7,
    desiredDirection: "higher",
  },
  {
    id: "mental-clarity",
    label: "Mental clarity",
    description: "How clear is your thinking?",
    scale: { word: "clear-headed", low: "somewhat", high: "very" },
    minContiguousTransitionDays: 7,
    desiredDirection: "higher",
  },
  {
    id: "focus",
    label: "Focus",
    description: "How well can you concentrate?",
    scale: { word: "focused", low: "somewhat", high: "very" },
    minContiguousTransitionDays: 7,
    desiredDirection: "higher",
  },
  {
    id: "energy",
    label: "Energy",
    description: "How energetic do you feel?",
    scale: { word: "energetic", low: "a little", high: "very" },
    minContiguousTransitionDays: 7,
    desiredDirection: "higher",
  },
  {
    id: "sleep-quality",
    label: "Sleep quality",
    description: "How well did you sleep?",
    scale: { word: "rested", low: "somewhat", high: "well" },
    minContiguousTransitionDays: 7,
    desiredDirection: "higher",
  },
  {
    id: "anxiety",
    label: "Anxiety",
    description: "How anxious do you feel?",
    scale: { word: "anxious", low: "a little", high: "very" },
    minContiguousTransitionDays: 7,
    desiredDirection: "lower",
  },
  {
    id: "productivity",
    label: "Productivity",
    description: "How productive were you?",
    scale: { word: "productive", low: "somewhat", high: "very" },
    minContiguousTransitionDays: 7,
    desiredDirection: "higher",
  },
];

export const METRIC_REGISTRY_BY_ID: Record<string, MetricDefinition> =
  Object.fromEntries(METRIC_REGISTRY.map((metric) => [metric.id, metric]));
