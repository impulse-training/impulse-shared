import { z } from "zod";
/**
 * An idea written down during an urge via a tactic's capture step. Lives at
 * users/{uid}/tactics/{tacticId}/capturedItems/{itemId} and accumulates across
 * plays. The weekly capture review (scheduled_processCaptureReviews) queries
 * unreviewed items by collectionGroup at the start of the linked behavior's
 * contain-goal window, presents them in a review session, and stamps
 * reviewedAt/reviewSessionId so each item is surfaced exactly once.
 */
export declare const capturedItemSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    text: z.ZodString;
    userId: z.ZodString;
    tacticId: z.ZodString;
    behaviorId: z.ZodOptional<z.ZodString>;
    sessionId: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    reviewedAt: z.ZodDefault<z.ZodNullable<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>>;
    reviewSessionId: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../types").Timestamp;
    userId: string;
    text: string;
    tacticId: string;
    reviewedAt: import("../types").Timestamp | null;
    id?: string | undefined;
    sessionId?: string | undefined;
    behaviorId?: string | undefined;
    reviewSessionId?: string | undefined;
}, {
    createdAt: import("../types").Timestamp;
    userId: string;
    text: string;
    tacticId: string;
    id?: string | undefined;
    sessionId?: string | undefined;
    behaviorId?: string | undefined;
    reviewedAt?: import("../types").Timestamp | null | undefined;
    reviewSessionId?: string | undefined;
}>;
export type CapturedItem = z.infer<typeof capturedItemSchema>;
