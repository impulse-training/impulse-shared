import { type MetricLevelLabels, type MetricScale } from "../schemas/metric";
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
export declare const METRIC_REGISTRY: MetricDefinition[];
export declare const METRIC_REGISTRY_BY_ID: Record<string, MetricDefinition>;
/**
 * The registry entry a metric came from: by `metricRegistryId`, else by name
 * (metrics seeded before the id was stored).
 */
export declare function metricRegistryEntryFor(metric: {
    metricRegistryId?: string;
    name?: string;
}): MetricDefinition | undefined;
/**
 * A metric's five level labels: its own `levels`, else its registry entry's,
 * else generic ones (very low / low / normal / high / very high). The last two
 * only cover metric docs not yet migrated to levels.
 */
export declare function metricLevelLabelsFor(metric: {
    levels?: unknown;
    metricRegistryId?: string;
    name?: string;
} | null | undefined): MetricLevelLabels;
