import { z } from "zod";
/**
 * Where a generated collection came from. The Tactics screen builds
 * collections from evidence (a feeling's mix, "what's working") and the user
 * can save one as their own; `source` records that provenance so the screen
 * shows the saved copy in place of the generated one.
 */
export declare const tacticCollectionSourceSchema: z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
    kind: z.ZodLiteral<"feeling">;
    optionId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    kind: "feeling";
    optionId: string;
}, {
    kind: "feeling";
    optionId: string;
}>, z.ZodObject<{
    kind: z.ZodLiteral<"working">;
}, "strip", z.ZodTypeAny, {
    kind: "working";
}, {
    kind: "working";
}>]>;
export type TacticCollectionSource = z.infer<typeof tacticCollectionSourceSchema>;
export declare const tacticCollectionSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    emoji: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    tacticIds: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    items: z.ZodOptional<z.ZodArray<z.ZodType<import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>>, "many">>;
    userHiddenTactics: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodArray<z.ZodString, "many">>>;
    createdByUid: z.ZodOptional<z.ZodString>;
    source: z.ZodOptional<z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
        kind: z.ZodLiteral<"feeling">;
        optionId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        kind: "feeling";
        optionId: string;
    }, {
        kind: "feeling";
        optionId: string;
    }>, z.ZodObject<{
        kind: z.ZodLiteral<"working">;
    }, "strip", z.ZodTypeAny, {
        kind: "working";
    }, {
        kind: "working";
    }>]>>;
    ordinal: z.ZodOptional<z.ZodNumber>;
    createdAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    updatedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
}, "strip", z.ZodTypeAny, {
    name: string;
    tacticIds: string[];
    id?: string | undefined;
    createdAt?: import("../types").Timestamp | undefined;
    updatedAt?: import("../types").Timestamp | undefined;
    description?: string | undefined;
    ordinal?: number | undefined;
    source?: {
        kind: "feeling";
        optionId: string;
    } | {
        kind: "working";
    } | undefined;
    createdByUid?: string | undefined;
    emoji?: string | undefined;
    items?: import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>[] | undefined;
    userHiddenTactics?: Record<string, string[]> | undefined;
}, {
    name: string;
    id?: string | undefined;
    createdAt?: import("../types").Timestamp | undefined;
    updatedAt?: import("../types").Timestamp | undefined;
    description?: string | undefined;
    ordinal?: number | undefined;
    source?: {
        kind: "feeling";
        optionId: string;
    } | {
        kind: "working";
    } | undefined;
    createdByUid?: string | undefined;
    tacticIds?: string[] | undefined;
    emoji?: string | undefined;
    items?: import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>[] | undefined;
    userHiddenTactics?: Record<string, string[]> | undefined;
}>;
export type TacticCollection = z.infer<typeof tacticCollectionSchema>;
