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
export declare const METRIC_REGISTRY: MetricDefinition[];
export declare const METRIC_REGISTRY_BY_ID: Record<string, MetricDefinition>;
