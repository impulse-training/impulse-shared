import { z } from "zod";
/**
 * Represents the outcome data for a single session where a plan was used.
 */
export declare const planEffectivenessSessionOutcomeSchema: z.ZodObject<{
    behaviorDocs: z.ZodArray<z.ZodType<import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>>, "many">;
    started: z.ZodBoolean;
    offered: z.ZodOptional<z.ZodBoolean>;
    completed: z.ZodBoolean;
    actedOnUrge: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    sessionDate: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
}, "strip", z.ZodTypeAny, {
    completed: boolean;
    behaviorDocs: import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>[];
    started: boolean;
    actedOnUrge?: boolean | null | undefined;
    offered?: boolean | undefined;
    sessionDate?: import("../types").Timestamp | undefined;
}, {
    completed: boolean;
    behaviorDocs: import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>[];
    started: boolean;
    actedOnUrge?: boolean | null | undefined;
    offered?: boolean | undefined;
    sessionDate?: import("../types").Timestamp | undefined;
}>;
export type PlanEffectivenessSessionOutcome = z.infer<typeof planEffectivenessSessionOutcomeSchema>;
/**
 * PlanEffectiveness document schema.
 * Collection: users/{userId}/planEffectiveness/{planId}
 *
 * Tracks how effective a plan has been across multiple sessions/impulse moments.
 */
export declare const planEffectivenessSchema: z.ZodObject<{
    planId: z.ZodString;
    outcomesBySession: z.ZodRecord<z.ZodString, z.ZodObject<{
        behaviorDocs: z.ZodArray<z.ZodType<import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>>, "many">;
        started: z.ZodBoolean;
        offered: z.ZodOptional<z.ZodBoolean>;
        completed: z.ZodBoolean;
        actedOnUrge: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        sessionDate: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    }, "strip", z.ZodTypeAny, {
        completed: boolean;
        behaviorDocs: import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>[];
        started: boolean;
        actedOnUrge?: boolean | null | undefined;
        offered?: boolean | undefined;
        sessionDate?: import("../types").Timestamp | undefined;
    }, {
        completed: boolean;
        behaviorDocs: import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>[];
        started: boolean;
        actedOnUrge?: boolean | null | undefined;
        offered?: boolean | undefined;
        sessionDate?: import("../types").Timestamp | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    planId: string;
    outcomesBySession: Record<string, {
        completed: boolean;
        behaviorDocs: import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>[];
        started: boolean;
        actedOnUrge?: boolean | null | undefined;
        offered?: boolean | undefined;
        sessionDate?: import("../types").Timestamp | undefined;
    }>;
}, {
    planId: string;
    outcomesBySession: Record<string, {
        completed: boolean;
        behaviorDocs: import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>[];
        started: boolean;
        actedOnUrge?: boolean | null | undefined;
        offered?: boolean | undefined;
        sessionDate?: import("../types").Timestamp | undefined;
    }>;
}>;
export type PlanEffectiveness = z.infer<typeof planEffectivenessSchema>;
/**
 * UserPlanEffectiveness document schema.
 * Document: users/{userId}/userPlanEffectiveness/aggregate
 *
 * Aggregates all planEffectiveness data for a user, keyed by planId.
 * This allows efficient subscription to all plan effectiveness data in one document.
 */
export declare const userPlanEffectivenessSchema: z.ZodObject<{
    byPlanId: z.ZodRecord<z.ZodString, z.ZodObject<{
        planId: z.ZodString;
        outcomesBySession: z.ZodRecord<z.ZodString, z.ZodObject<{
            behaviorDocs: z.ZodArray<z.ZodType<import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>>, "many">;
            started: z.ZodBoolean;
            offered: z.ZodOptional<z.ZodBoolean>;
            completed: z.ZodBoolean;
            actedOnUrge: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
            sessionDate: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
        }, "strip", z.ZodTypeAny, {
            completed: boolean;
            behaviorDocs: import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>[];
            started: boolean;
            actedOnUrge?: boolean | null | undefined;
            offered?: boolean | undefined;
            sessionDate?: import("../types").Timestamp | undefined;
        }, {
            completed: boolean;
            behaviorDocs: import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>[];
            started: boolean;
            actedOnUrge?: boolean | null | undefined;
            offered?: boolean | undefined;
            sessionDate?: import("../types").Timestamp | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        planId: string;
        outcomesBySession: Record<string, {
            completed: boolean;
            behaviorDocs: import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>[];
            started: boolean;
            actedOnUrge?: boolean | null | undefined;
            offered?: boolean | undefined;
            sessionDate?: import("../types").Timestamp | undefined;
        }>;
    }, {
        planId: string;
        outcomesBySession: Record<string, {
            completed: boolean;
            behaviorDocs: import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>[];
            started: boolean;
            actedOnUrge?: boolean | null | undefined;
            offered?: boolean | undefined;
            sessionDate?: import("../types").Timestamp | undefined;
        }>;
    }>>;
}, "strip", z.ZodTypeAny, {
    byPlanId: Record<string, {
        planId: string;
        outcomesBySession: Record<string, {
            completed: boolean;
            behaviorDocs: import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>[];
            started: boolean;
            actedOnUrge?: boolean | null | undefined;
            offered?: boolean | undefined;
            sessionDate?: import("../types").Timestamp | undefined;
        }>;
    }>;
}, {
    byPlanId: Record<string, {
        planId: string;
        outcomesBySession: Record<string, {
            completed: boolean;
            behaviorDocs: import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>[];
            started: boolean;
            actedOnUrge?: boolean | null | undefined;
            offered?: boolean | undefined;
            sessionDate?: import("../types").Timestamp | undefined;
        }>;
    }>;
}>;
export type UserPlanEffectiveness = z.infer<typeof userPlanEffectivenessSchema>;
