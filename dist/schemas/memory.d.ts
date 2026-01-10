import { z } from "zod";
export declare const memorySchema: z.ZodObject<{
    id: z.ZodString;
    title: z.ZodString;
    content: z.ZodString;
    source: z.ZodString;
    tags: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    importance: z.ZodDefault<z.ZodNumber>;
    createdAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    updatedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
}, "strip", z.ZodTypeAny, {
    id: string;
    title: string;
    importance: number;
    tags: string[];
    content: string;
    source: string;
    createdAt?: import("../types").Timestamp | undefined;
    updatedAt?: import("../types").Timestamp | undefined;
}, {
    id: string;
    title: string;
    content: string;
    source: string;
    createdAt?: import("../types").Timestamp | undefined;
    updatedAt?: import("../types").Timestamp | undefined;
    importance?: number | undefined;
    tags?: string[] | undefined;
}>;
export type Memory = z.infer<typeof memorySchema>;
export declare const isMemory: (value: unknown) => value is Memory;
