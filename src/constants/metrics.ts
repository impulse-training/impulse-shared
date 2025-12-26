export type MetricDefinition = {
  id: string;
  label: string;
  description: string;
  minContiguousTransitionDays: number;
};

export const METRIC_REGISTRY: MetricDefinition[] = [
  {
    id: "happiness",
    label: "Happiness",
    description: "How happy do you feel?",
    minContiguousTransitionDays: 7,
  },
  {
    id: "motivation",
    label: "Motivation",
    description: "How motivated do you feel?",
    minContiguousTransitionDays: 7,
  },
  {
    id: "mental-clarity",
    label: "Mental clarity",
    description: "How clear is your thinking?",
    minContiguousTransitionDays: 7,
  },
  {
    id: "focus",
    label: "Focus",
    description: "How well can you concentrate?",
    minContiguousTransitionDays: 7,
  },
  {
    id: "energy",
    label: "Energy",
    description: "How energetic do you feel?",
    minContiguousTransitionDays: 7,
  },
  {
    id: "sleep-quality",
    label: "Sleep quality",
    description: "How well did you sleep?",
    minContiguousTransitionDays: 7,
  },
  {
    id: "anxiety",
    label: "Anxiety",
    description: "How anxious do you feel?",
    minContiguousTransitionDays: 7,
  },
  {
    id: "productivity",
    label: "Productivity",
    description: "How productive were you?",
    minContiguousTransitionDays: 7,
  },
];

export const METRIC_REGISTRY_BY_ID: Record<string, MetricDefinition> =
  Object.fromEntries(METRIC_REGISTRY.map((metric) => [metric.id, metric]));
