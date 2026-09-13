import { z } from "zod";
/**
 * A metric observation log — one ordered day-scoped state observation.
 *
 * The day the observation is ABOUT is `dateString` (inherited from
 * logBaseSchema); when it was actually recorded is `createdAt`. Those differ on
 * a backfill, and the gap is deliberately preserved so experiment analysis can
 * later distinguish a contemporaneous observation from a later recollection.
 * Do not collapse them by passing the backdated timestamp as `createdAt`.
 *
 * One observation per metric per day: these are written with the deterministic
 * id `metric_{metricId}_{dateString}`, so re-recording a day edits in place
 * rather than appending a second observation.
 */
export declare const metricLogSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    updatedAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    userId: z.ZodString;
    timestamp: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    dateString: z.ZodString;
    sessionId: z.ZodString;
    tacticId: z.ZodOptional<z.ZodString>;
    behaviorIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    impulseId: z.ZodOptional<z.ZodString>;
    respondingToLogId: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"metric">;
    isDisplayable: z.ZodLiteral<true>;
    /** If true, the assistant should respond to this metric log (e.g. feeling discussion requested) */
    shouldZaraRespond: z.ZodOptional<z.ZodBoolean>;
    data: z.ZodObject<{
        /** Reference to the metric document id */
        metricId: z.ZodString;
        /** Denormalized metric name for display */
        metricName: z.ZodString;
        /** Ordered 3-point observation, null when awaiting user input */
        value: z.ZodNullable<z.ZodUnion<[z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>]>>;
        /**
         * Denormalized word scale, so a log renders ("Energy: very energetic")
         * without loading the metric document.
         */
        scale: z.ZodOptional<z.ZodObject<{
            word: z.ZodString;
            low: z.ZodString;
            high: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            low: string;
            high: string;
            word: string;
        }, {
            low: string;
            high: string;
            word: string;
        }>>;
        /** Optional supporting text / note */
        text: z.ZodOptional<z.ZodString>;
        /** Denormalized circumplex quadrant — present only on feeling-type metrics */
        quadrant: z.ZodOptional<z.ZodEnum<["activated", "stressed", "calm", "low"]>>;
    }, "strip", z.ZodTypeAny, {
        value: 1 | 2 | 3 | null;
        metricId: string;
        metricName: string;
        text?: string | undefined;
        scale?: {
            low: string;
            high: string;
            word: string;
        } | undefined;
        quadrant?: "low" | "activated" | "stressed" | "calm" | undefined;
    }, {
        value: 1 | 2 | 3 | null;
        metricId: string;
        metricName: string;
        text?: string | undefined;
        scale?: {
            low: string;
            high: string;
            word: string;
        } | undefined;
        quadrant?: "low" | "activated" | "stressed" | "calm" | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "metric";
    userId: string;
    sessionId: string;
    dateString: string;
    timestamp: import("../../types").Timestamp;
    isDisplayable: true;
    data: {
        value: 1 | 2 | 3 | null;
        metricId: string;
        metricName: string;
        text?: string | undefined;
        scale?: {
            low: string;
            high: string;
            word: string;
        } | undefined;
        quadrant?: "low" | "activated" | "stressed" | "calm" | undefined;
    };
    id?: string | undefined;
    behaviorIds?: string[] | undefined;
    tacticId?: string | undefined;
    impulseId?: string | undefined;
    respondingToLogId?: string | undefined;
    shouldZaraRespond?: boolean | undefined;
}, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "metric";
    userId: string;
    sessionId: string;
    dateString: string;
    timestamp: import("../../types").Timestamp;
    isDisplayable: true;
    data: {
        value: 1 | 2 | 3 | null;
        metricId: string;
        metricName: string;
        text?: string | undefined;
        scale?: {
            low: string;
            high: string;
            word: string;
        } | undefined;
        quadrant?: "low" | "activated" | "stressed" | "calm" | undefined;
    };
    id?: string | undefined;
    behaviorIds?: string[] | undefined;
    tacticId?: string | undefined;
    impulseId?: string | undefined;
    respondingToLogId?: string | undefined;
    shouldZaraRespond?: boolean | undefined;
}>;
export type MetricLog = z.infer<typeof metricLogSchema>;
