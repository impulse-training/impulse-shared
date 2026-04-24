import { z } from "zod";
export declare const experimentSchema: z.ZodObject<{
    startedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    name: z.ZodString;
    experimentQuestion: z.ZodString;
    behaviorIds: z.ZodArray<z.ZodString, "many">;
    metricIds: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    memory: z.ZodOptional<z.ZodObject<{
        notesByDate: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodObject<{
            behaviorIds: z.ZodArray<z.ZodString, "many">;
            insights: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            behaviorIds: string[];
            insights: string[];
        }, {
            behaviorIds: string[];
            insights?: string[] | undefined;
        }>>>;
    }, "strip", z.ZodTypeAny, {
        notesByDate: Record<string, {
            behaviorIds: string[];
            insights: string[];
        }>;
    }, {
        notesByDate?: Record<string, {
            behaviorIds: string[];
            insights?: string[] | undefined;
        }> | undefined;
    }>>;
    resultsSummary: z.ZodOptional<z.ZodString>;
    archivedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    stage: z.ZodDefault<z.ZodEnum<["observe", "intervene", "maintain"]>>;
    stageChangedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    stageHistory: z.ZodDefault<z.ZodArray<z.ZodObject<{
        stage: z.ZodEnum<["observe", "intervene", "maintain"]>;
        enteredAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
        exitedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
        summary: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        stage: "observe" | "intervene" | "maintain";
        enteredAt: import("../types").Timestamp;
        summary?: string | undefined;
        exitedAt?: import("../types").Timestamp | undefined;
    }, {
        stage: "observe" | "intervene" | "maintain";
        enteredAt: import("../types").Timestamp;
        summary?: string | undefined;
        exitedAt?: import("../types").Timestamp | undefined;
    }>, "many">>;
    hypothesis: z.ZodOptional<z.ZodString>;
    goal: z.ZodOptional<z.ZodObject<{
        metricId: z.ZodString;
        target: z.ZodNumber;
        direction: z.ZodEnum<["increase", "decrease"]>;
    }, "strip", z.ZodTypeAny, {
        target: number;
        direction: "increase" | "decrease";
        metricId: string;
    }, {
        target: number;
        direction: "increase" | "decrease";
        metricId: string;
    }>>;
    chartUnlocked: z.ZodOptional<z.ZodBoolean>;
    insights: z.ZodOptional<z.ZodArray<z.ZodObject<{
        heading: z.ZodString;
        body: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        body: string;
        heading: string;
    }, {
        body: string;
        heading: string;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    name: string;
    behaviorIds: string[];
    experimentQuestion: string;
    stage: "observe" | "intervene" | "maintain";
    metricIds: string[];
    stageHistory: {
        stage: "observe" | "intervene" | "maintain";
        enteredAt: import("../types").Timestamp;
        summary?: string | undefined;
        exitedAt?: import("../types").Timestamp | undefined;
    }[];
    goal?: {
        target: number;
        direction: "increase" | "decrease";
        metricId: string;
    } | undefined;
    startedAt?: import("../types").Timestamp | undefined;
    insights?: {
        body: string;
        heading: string;
    }[] | undefined;
    memory?: {
        notesByDate: Record<string, {
            behaviorIds: string[];
            insights: string[];
        }>;
    } | undefined;
    resultsSummary?: string | undefined;
    archivedAt?: import("../types").Timestamp | undefined;
    stageChangedAt?: import("../types").Timestamp | undefined;
    hypothesis?: string | undefined;
    chartUnlocked?: boolean | undefined;
}, {
    name: string;
    behaviorIds: string[];
    experimentQuestion: string;
    goal?: {
        target: number;
        direction: "increase" | "decrease";
        metricId: string;
    } | undefined;
    startedAt?: import("../types").Timestamp | undefined;
    insights?: {
        body: string;
        heading: string;
    }[] | undefined;
    stage?: "observe" | "intervene" | "maintain" | undefined;
    metricIds?: string[] | undefined;
    memory?: {
        notesByDate?: Record<string, {
            behaviorIds: string[];
            insights?: string[] | undefined;
        }> | undefined;
    } | undefined;
    resultsSummary?: string | undefined;
    archivedAt?: import("../types").Timestamp | undefined;
    stageChangedAt?: import("../types").Timestamp | undefined;
    stageHistory?: {
        stage: "observe" | "intervene" | "maintain";
        enteredAt: import("../types").Timestamp;
        summary?: string | undefined;
        exitedAt?: import("../types").Timestamp | undefined;
    }[] | undefined;
    hypothesis?: string | undefined;
    chartUnlocked?: boolean | undefined;
}>;
export type Experiment = z.infer<typeof experimentSchema>;
export declare const experimentProposalSchema: z.ZodObject<{
    proposedBy: z.ZodEnum<["admin", "ai"]>;
    proposedByUid: z.ZodOptional<z.ZodString>;
    proposedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    status: z.ZodEnum<["pending", "accepted", "declined", "superseded"]>;
    changes: z.ZodRecord<z.ZodString, z.ZodUnknown>;
    rationale: z.ZodOptional<z.ZodString>;
    respondedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    declineNote: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    status: "declined" | "pending" | "accepted" | "superseded";
    proposedBy: "admin" | "ai";
    proposedAt: import("../types").Timestamp;
    changes: Record<string, unknown>;
    respondedAt?: import("../types").Timestamp | undefined;
    proposedByUid?: string | undefined;
    rationale?: string | undefined;
    declineNote?: string | undefined;
}, {
    status: "declined" | "pending" | "accepted" | "superseded";
    proposedBy: "admin" | "ai";
    proposedAt: import("../types").Timestamp;
    changes: Record<string, unknown>;
    respondedAt?: import("../types").Timestamp | undefined;
    proposedByUid?: string | undefined;
    rationale?: string | undefined;
    declineNote?: string | undefined;
}>;
export type ExperimentProposal = z.infer<typeof experimentProposalSchema>;
