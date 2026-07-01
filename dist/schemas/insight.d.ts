import { z } from "zod";
export declare const insightSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    userId: z.ZodOptional<z.ZodString>;
    emotion: z.ZodOptional<z.ZodString>;
    associatedBehaviorDocs: z.ZodOptional<z.ZodArray<z.ZodType<import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>>, "many">>;
    sourceSessionDoc: z.ZodOptional<z.ZodType<import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>>>;
    sourceLogDoc: z.ZodOptional<z.ZodType<import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>>>;
    text: z.ZodString;
    status: z.ZodOptional<z.ZodEnum<["pending", "posted", "dismissed"]>>;
    experimentId: z.ZodOptional<z.ZodString>;
    coachId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    postedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    postedBy: z.ZodOptional<z.ZodString>;
    source: z.ZodOptional<z.ZodEnum<["experiment", "brain", "coach", "user"]>>;
    category: z.ZodOptional<z.ZodString>;
    confidence: z.ZodOptional<z.ZodNumber>;
    behavior: z.ZodOptional<z.ZodString>;
    brainThoughtId: z.ZodOptional<z.ZodString>;
    /**
     * Sharing lifecycle (user-created qualitative insights):
     * - Created private
     * - Eligibility evaluated async (null -> eligible | ineligible)
     * - Some eligible insights are surfaced later for sharing UI
     * - Sharing is always user-initiated
     * - Public insights are copies, never live documents
     */
    contentEligibilityStatus: z.ZodOptional<z.ZodNullable<z.ZodEnum<["eligible", "ineligible"]>>>;
    contentEligibilityEvaluatedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    surfacedForSharingAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    sharedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    createdAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    updatedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
}, "strip", z.ZodTypeAny, {
    text: string;
    id?: string | undefined;
    createdAt?: import("../types").Timestamp | undefined;
    updatedAt?: import("../types").Timestamp | undefined;
    status?: "pending" | "posted" | "dismissed" | undefined;
    userId?: string | undefined;
    confidence?: number | undefined;
    behavior?: string | undefined;
    source?: "user" | "experiment" | "brain" | "coach" | undefined;
    experimentId?: string | undefined;
    emotion?: string | undefined;
    associatedBehaviorDocs?: import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>[] | undefined;
    sourceSessionDoc?: import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown> | undefined;
    sourceLogDoc?: import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown> | undefined;
    coachId?: string | null | undefined;
    postedAt?: import("../types").Timestamp | undefined;
    postedBy?: string | undefined;
    category?: string | undefined;
    brainThoughtId?: string | undefined;
    contentEligibilityStatus?: "eligible" | "ineligible" | null | undefined;
    contentEligibilityEvaluatedAt?: import("../types").Timestamp | undefined;
    surfacedForSharingAt?: import("../types").Timestamp | undefined;
    sharedAt?: import("../types").Timestamp | undefined;
}, {
    text: string;
    id?: string | undefined;
    createdAt?: import("../types").Timestamp | undefined;
    updatedAt?: import("../types").Timestamp | undefined;
    status?: "pending" | "posted" | "dismissed" | undefined;
    userId?: string | undefined;
    confidence?: number | undefined;
    behavior?: string | undefined;
    source?: "user" | "experiment" | "brain" | "coach" | undefined;
    experimentId?: string | undefined;
    emotion?: string | undefined;
    associatedBehaviorDocs?: import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>[] | undefined;
    sourceSessionDoc?: import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown> | undefined;
    sourceLogDoc?: import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown> | undefined;
    coachId?: string | null | undefined;
    postedAt?: import("../types").Timestamp | undefined;
    postedBy?: string | undefined;
    category?: string | undefined;
    brainThoughtId?: string | undefined;
    contentEligibilityStatus?: "eligible" | "ineligible" | null | undefined;
    contentEligibilityEvaluatedAt?: import("../types").Timestamp | undefined;
    surfacedForSharingAt?: import("../types").Timestamp | undefined;
    sharedAt?: import("../types").Timestamp | undefined;
}>;
export type Insight = z.infer<typeof insightSchema>;
