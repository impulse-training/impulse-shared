import { z } from "zod";
export declare const recapMessageSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    role: z.ZodEnum<["user", "assistant"]>;
    content: z.ZodString;
    createdAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../types").Timestamp;
    role: "user" | "assistant";
    content: string;
    id?: string | undefined;
}, {
    createdAt: import("../types").Timestamp;
    role: "user" | "assistant";
    content: string;
    id?: string | undefined;
}>;
export type RecapMessage = z.infer<typeof recapMessageSchema>;
