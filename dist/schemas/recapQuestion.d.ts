import { z } from "zod";
export declare const recapQuestionSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    question: z.ZodString;
    metaInstructions: z.ZodString;
    createdAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    updatedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
}, "strip", z.ZodTypeAny, {
    question: string;
    metaInstructions: string;
    id?: string | undefined;
    createdAt?: import("../types").Timestamp | undefined;
    updatedAt?: import("../types").Timestamp | undefined;
}, {
    question: string;
    metaInstructions: string;
    id?: string | undefined;
    createdAt?: import("../types").Timestamp | undefined;
    updatedAt?: import("../types").Timestamp | undefined;
}>;
export type RecapQuestion = z.infer<typeof recapQuestionSchema>;
