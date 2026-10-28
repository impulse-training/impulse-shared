import {
  GENERIC_METRIC_LEVEL_LABELS,
  metricLevelLabelsSchema,
  type MetricLevelLabels,
  type MetricScale,
} from "../schemas/metric";

export type MetricDefinition = {
  id: string;
  label: string;
  description: string;
  /**
   * The word and its adjectives, chosen per metric so each end reads naturally
   * ("somewhat rested / rested / well rested"). One-ended: the word names the
   * state and the value says how much of it — high Anxiety is "very anxious"
   * just as high Energy is "very energetic", and only `desiredDirection` says
   * whether more is welcome. A metric whose low end is a state of its own names
   * it with `lowWord` ("foggy", "drained"), so a low answer records as what the
   * person said rather than as a little of what they lacked.
   */
  scale: MetricScale;
  /**
   * The five level labels, lowest first, centred on "normal": plain words for
   * each end, the way a person says them ("foggy", "drained"). Higher is more
   * of the named metric, so Anxiety runs calm → anxious.
   */
  levels: MetricLevelLabels;
  minContiguousTransitionDays: number;
  desiredDirection: "higher" | "lower";
};

export const METRIC_REGISTRY: MetricDefinition[] = [
  {
    id: "happiness",
    label: "Happiness",
    description: "How happy do you feel?",
    scale: { word: "happy", low: "a little", high: "very" },
    levels: ["very down", "down", "normal", "happy", "very happy"],
    minContiguousTransitionDays: 7,
    desiredDirection: "higher",
  },
  {
    id: "motivation",
    label: "Motivation",
    description: "How motivated do you feel?",
    scale: { word: "motivated", low: "a little", high: "very" },
    levels: ["very unmotivated", "unmotivated", "normal", "motivated", "very motivated"],
    minContiguousTransitionDays: 7,
    desiredDirection: "higher",
  },
  {
    id: "mental-clarity",
    label: "Mental clarity",
    description: "How clear is your thinking?",
    scale: { word: "clear-headed", low: "somewhat", high: "very", lowWord: "foggy" },
    levels: ["very foggy", "foggy", "normal", "clear", "very clear"],
    minContiguousTransitionDays: 7,
    desiredDirection: "higher",
  },
  {
    id: "focus",
    label: "Focus",
    description: "How well can you concentrate?",
    scale: { word: "focused", low: "somewhat", high: "very" },
    levels: ["very distracted", "distracted", "normal", "focused", "very focused"],
    minContiguousTransitionDays: 7,
    desiredDirection: "higher",
  },
  {
    id: "energy",
    label: "Energy",
    description: "How energetic do you feel?",
    scale: { word: "energetic", low: "a little", high: "very", lowWord: "drained" },
    levels: ["drained", "low", "normal", "energetic", "very energetic"],
    minContiguousTransitionDays: 7,
    desiredDirection: "higher",
  },
  {
    id: "sleep-quality",
    label: "Sleep quality",
    description: "How well did you sleep?",
    scale: { word: "rested", low: "somewhat", high: "well" },
    levels: ["very poor", "poor", "normal", "good", "very good"],
    minContiguousTransitionDays: 7,
    desiredDirection: "higher",
  },
  {
    id: "anxiety",
    label: "Anxiety",
    description: "How anxious do you feel?",
    scale: { word: "anxious", low: "a little", high: "very" },
    levels: ["very calm", "calm", "normal", "anxious", "very anxious"],
    minContiguousTransitionDays: 7,
    desiredDirection: "lower",
  },
  {
    id: "productivity",
    label: "Productivity",
    description: "How productive were you?",
    scale: { word: "productive", low: "somewhat", high: "very" },
    levels: ["very unproductive", "unproductive", "normal", "productive", "very productive"],
    minContiguousTransitionDays: 7,
    desiredDirection: "higher",
  },
];

export const METRIC_REGISTRY_BY_ID: Record<string, MetricDefinition> =
  Object.fromEntries(METRIC_REGISTRY.map((metric) => [metric.id, metric]));

/**
 * The registry entry a metric came from: by `metricRegistryId`, else by name
 * (metrics seeded before the id was stored).
 */
export function metricRegistryEntryFor(metric: {
  metricRegistryId?: string;
  name?: string;
}): MetricDefinition | undefined {
  if (metric.metricRegistryId && METRIC_REGISTRY_BY_ID[metric.metricRegistryId]) {
    return METRIC_REGISTRY_BY_ID[metric.metricRegistryId];
  }
  const name = metric.name?.trim().toLowerCase();
  if (!name) return undefined;
  return METRIC_REGISTRY.find((m) => m.label.toLowerCase() === name);
}

/**
 * A metric's five level labels: its own `levels`, else its registry entry's,
 * else generic ones (very low / low / normal / high / very high). The last two
 * only cover metric docs not yet migrated to levels.
 */
export function metricLevelLabelsFor(
  metric:
    | { levels?: unknown; metricRegistryId?: string; name?: string }
    | null
    | undefined,
): MetricLevelLabels {
  if (!metric) return GENERIC_METRIC_LEVEL_LABELS;
  const own = metricLevelLabelsSchema.safeParse(metric.levels);
  if (own.success) return own.data;
  return metricRegistryEntryFor(metric)?.levels ?? GENERIC_METRIC_LEVEL_LABELS;
}
