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
export declare const METRIC_REGISTRY: MetricDefinition[];
export declare const METRIC_REGISTRY_BY_ID: Record<string, MetricDefinition>;
