import { z } from "zod";
export declare const fixedTacticStepSchema: z.ZodObject<{
    type: z.ZodLiteral<"fixedTactic">;
    tacticRef: z.ZodType<import("../../utils/documentReferenceSchema").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../../utils/documentReferenceSchema").DocumentReferenceLike<unknown>>;
}, "strip", z.ZodTypeAny, {
    type: "fixedTactic";
    tacticRef: import("../../utils/documentReferenceSchema").DocumentReferenceLike<unknown>;
}, {
    type: "fixedTactic";
    tacticRef: import("../../utils/documentReferenceSchema").DocumentReferenceLike<unknown>;
}>;
export declare const collectionPickStepSchema: z.ZodObject<{
    type: z.ZodLiteral<"collectionPick">;
    collectionId: z.ZodString;
    label: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    type: "collectionPick";
    collectionId: string;
    label?: string | undefined;
}, {
    type: "collectionPick";
    collectionId: string;
    label?: string | undefined;
}>;
export declare const planStepSchema: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
    type: z.ZodLiteral<"fixedTactic">;
    tacticRef: z.ZodType<import("../../utils/documentReferenceSchema").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../../utils/documentReferenceSchema").DocumentReferenceLike<unknown>>;
}, "strip", z.ZodTypeAny, {
    type: "fixedTactic";
    tacticRef: import("../../utils/documentReferenceSchema").DocumentReferenceLike<unknown>;
}, {
    type: "fixedTactic";
    tacticRef: import("../../utils/documentReferenceSchema").DocumentReferenceLike<unknown>;
}>, z.ZodObject<{
    type: z.ZodLiteral<"collectionPick">;
    collectionId: z.ZodString;
    label: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    type: "collectionPick";
    collectionId: string;
    label?: string | undefined;
}, {
    type: "collectionPick";
    collectionId: string;
    label?: string | undefined;
}>]>;
export type PlanStep = z.infer<typeof planStepSchema>;
export type FixedTacticStep = z.infer<typeof fixedTacticStepSchema>;
export type CollectionPickStep = z.infer<typeof collectionPickStepSchema>;
