import { z } from "zod";
export declare const insightSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    emotion: z.ZodString;
    associatedBehaviorDocs: z.ZodOptional<z.ZodArray<z.ZodType<import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>>, "many">>;
    sourceThreadDoc: z.ZodOptional<z.ZodType<import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>>>;
    sourceLogDoc: z.ZodOptional<z.ZodType<import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>>>;
    text: z.ZodString;
    /**
     * Insight lifecycle:
     * - Created private
     * - Eligibility evaluated async (null -> eligible | ineligible)
     * - Some eligible insights are surfaced later
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
    emotion: string;
    id?: string | undefined;
    createdAt?: import("../types").Timestamp | undefined;
    updatedAt?: import("../types").Timestamp | undefined;
    associatedBehaviorDocs?: import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>[] | undefined;
    sourceThreadDoc?: import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown> | undefined;
    sourceLogDoc?: import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown> | undefined;
    contentEligibilityStatus?: "eligible" | "ineligible" | null | undefined;
    contentEligibilityEvaluatedAt?: import("../types").Timestamp | undefined;
    surfacedForSharingAt?: import("../types").Timestamp | undefined;
    sharedAt?: import("../types").Timestamp | undefined;
}, {
    text: string;
    emotion: string;
    id?: string | undefined;
    createdAt?: import("../types").Timestamp | undefined;
    updatedAt?: import("../types").Timestamp | undefined;
    associatedBehaviorDocs?: import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>[] | undefined;
    sourceThreadDoc?: import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown> | undefined;
    sourceLogDoc?: import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown> | undefined;
    contentEligibilityStatus?: "eligible" | "ineligible" | null | undefined;
    contentEligibilityEvaluatedAt?: import("../types").Timestamp | undefined;
    surfacedForSharingAt?: import("../types").Timestamp | undefined;
    sharedAt?: import("../types").Timestamp | undefined;
}>;
export type Insight = z.infer<typeof insightSchema>;
