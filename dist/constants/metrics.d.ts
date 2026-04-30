export type MetricDefinition = {
    id: string;
    label: string;
    description: string;
    minContiguousTransitionDays: number;
    desiredDirection: "higher" | "lower";
};
export declare const METRIC_REGISTRY: MetricDefinition[];
export declare const METRIC_REGISTRY_BY_ID: Record<string, MetricDefinition>;
