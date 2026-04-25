import { z } from "zod";
/**
 * A metric measurement log.
 * Records a single 1-5 scale rating for a metric, with optional supporting text.
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
} & {
    type: z.ZodLiteral<"metric">;
    isDisplayable: z.ZodLiteral<true>;
    /** If true, Zara should respond to this metric log (e.g. feeling discussion requested) */
    shouldZaraRespond: z.ZodOptional<z.ZodBoolean>;
    data: z.ZodObject<{
        /** Reference to the metric document id */
        metricId: z.ZodString;
        /** Denormalized metric name for display */
        metricName: z.ZodString;
        /** 1–10 scale rating, null when awaiting user input */
        value: z.ZodNullable<z.ZodNumber>;
        /** Denormalized label for the low end of the scale */
        minLabel: z.ZodOptional<z.ZodString>;
        /** Denormalized label for the high end of the scale */
        maxLabel: z.ZodOptional<z.ZodString>;
        /** Optional supporting text / note */
        text: z.ZodOptional<z.ZodString>;
        /** Denormalized circumplex quadrant — present only on feeling-type metrics */
        quadrant: z.ZodOptional<z.ZodEnum<["activated", "stressed", "calm", "low"]>>;
    }, "strip", z.ZodTypeAny, {
        value: number | null;
        metricId: string;
        metricName: string;
        text?: string | undefined;
        minLabel?: string | undefined;
        maxLabel?: string | undefined;
        quadrant?: "low" | "activated" | "stressed" | "calm" | undefined;
    }, {
        value: number | null;
        metricId: string;
        metricName: string;
        text?: string | undefined;
        minLabel?: string | undefined;
        maxLabel?: string | undefined;
        quadrant?: "low" | "activated" | "stressed" | "calm" | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "metric";
    sessionId: string;
    dateString: string;
    userId: string;
    timestamp: import("../../types").Timestamp;
    isDisplayable: true;
    data: {
        value: number | null;
        metricId: string;
        metricName: string;
        text?: string | undefined;
        minLabel?: string | undefined;
        maxLabel?: string | undefined;
        quadrant?: "low" | "activated" | "stressed" | "calm" | undefined;
    };
    id?: string | undefined;
    behaviorIds?: string[] | undefined;
    tacticId?: string | undefined;
    impulseId?: string | undefined;
    shouldZaraRespond?: boolean | undefined;
}, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "metric";
    sessionId: string;
    dateString: string;
    userId: string;
    timestamp: import("../../types").Timestamp;
    isDisplayable: true;
    data: {
        value: number | null;
        metricId: string;
        metricName: string;
        text?: string | undefined;
        minLabel?: string | undefined;
        maxLabel?: string | undefined;
        quadrant?: "low" | "activated" | "stressed" | "calm" | undefined;
    };
    id?: string | undefined;
    behaviorIds?: string[] | undefined;
    tacticId?: string | undefined;
    impulseId?: string | undefined;
    shouldZaraRespond?: boolean | undefined;
}>;
export type MetricLog = z.infer<typeof metricLogSchema>;
