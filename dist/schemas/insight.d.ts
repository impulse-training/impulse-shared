import { z } from "zod";
export declare const insightSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    emotion: z.ZodString;
    associatedBehaviorDocs: z.ZodOptional<z.ZodArray<z.ZodType<import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>>, "many">>;
    sourceThreadDoc: z.ZodOptional<z.ZodType<import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>>>;
    sourceLogDoc: z.ZodOptional<z.ZodType<import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>>>;
    text: z.ZodString;
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
}, {
    text: string;
    emotion: string;
    id?: string | undefined;
    createdAt?: import("../types").Timestamp | undefined;
    updatedAt?: import("../types").Timestamp | undefined;
    associatedBehaviorDocs?: import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>[] | undefined;
    sourceThreadDoc?: import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown> | undefined;
    sourceLogDoc?: import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown> | undefined;
}>;
export type Insight = z.infer<typeof insightSchema>;
