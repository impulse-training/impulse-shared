import { z } from "zod";
export declare const proposedExperimentMetricSchema: z.ZodObject<{
    name: z.ZodString;
    minLabel: z.ZodOptional<z.ZodString>;
    maxLabel: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    name: string;
    minLabel?: string | undefined;
    maxLabel?: string | undefined;
}, {
    name: string;
    minLabel?: string | undefined;
    maxLabel?: string | undefined;
}>;
export declare const proposedExperimentLogSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    updatedAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    userId: z.ZodString;
    timestamp: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    dateString: z.ZodString;
    sessionId: z.ZodString;
    tacticId: z.ZodOptional<z.ZodString>;
    impulseId: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"proposed_experiment">;
    isDisplayable: z.ZodLiteral<true>;
    behaviorIds: z.ZodArray<z.ZodString, "many">;
    behaviorNames: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    metrics: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        minLabel: z.ZodOptional<z.ZodString>;
        maxLabel: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        minLabel?: string | undefined;
        maxLabel?: string | undefined;
    }, {
        name: string;
        minLabel?: string | undefined;
        maxLabel?: string | undefined;
    }>, "many">>;
    metricLabels: z.ZodArray<z.ZodString, "many">;
    experimentQuestion: z.ZodOptional<z.ZodString>;
    text: z.ZodOptional<z.ZodString>;
    buttonText: z.ZodOptional<z.ZodString>;
    confirmedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    createdExperiment: z.ZodOptional<z.ZodObject<{
        experimentId: z.ZodOptional<z.ZodString>;
        baselineDays: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        experimentId?: string | undefined;
        baselineDays?: number | undefined;
    }, {
        experimentId?: string | undefined;
        baselineDays?: number | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "proposed_experiment";
    sessionId: string;
    dateString: string;
    behaviorIds: string[];
    userId: string;
    timestamp: import("../../types").Timestamp;
    isDisplayable: true;
    metricLabels: string[];
    id?: string | undefined;
    text?: string | undefined;
    tacticId?: string | undefined;
    impulseId?: string | undefined;
    buttonText?: string | undefined;
    behaviorNames?: string[] | undefined;
    metrics?: {
        name: string;
        minLabel?: string | undefined;
        maxLabel?: string | undefined;
    }[] | undefined;
    experimentQuestion?: string | undefined;
    confirmedAt?: import("../../types").Timestamp | undefined;
    createdExperiment?: {
        experimentId?: string | undefined;
        baselineDays?: number | undefined;
    } | undefined;
}, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "proposed_experiment";
    sessionId: string;
    dateString: string;
    behaviorIds: string[];
    userId: string;
    timestamp: import("../../types").Timestamp;
    isDisplayable: true;
    metricLabels: string[];
    id?: string | undefined;
    text?: string | undefined;
    tacticId?: string | undefined;
    impulseId?: string | undefined;
    buttonText?: string | undefined;
    behaviorNames?: string[] | undefined;
    metrics?: {
        name: string;
        minLabel?: string | undefined;
        maxLabel?: string | undefined;
    }[] | undefined;
    experimentQuestion?: string | undefined;
    confirmedAt?: import("../../types").Timestamp | undefined;
    createdExperiment?: {
        experimentId?: string | undefined;
        baselineDays?: number | undefined;
    } | undefined;
}>;
export type ProposedExperimentMetric = z.infer<typeof proposedExperimentMetricSchema>;
export type ProposedExperimentLog = z.infer<typeof proposedExperimentLogSchema>;
