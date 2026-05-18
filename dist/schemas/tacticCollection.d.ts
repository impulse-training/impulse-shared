import { z } from "zod";
export declare const tacticCollectionSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    emoji: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    tacticIds: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    items: z.ZodOptional<z.ZodArray<z.ZodType<import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>>, "many">>;
    userHiddenTactics: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodArray<z.ZodString, "many">>>;
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
    tacticIds?: string[] | undefined;
    emoji?: string | undefined;
    items?: import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>[] | undefined;
    userHiddenTactics?: Record<string, string[]> | undefined;
}>;
export type TacticCollection = z.infer<typeof tacticCollectionSchema>;
