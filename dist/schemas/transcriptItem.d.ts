import { z } from "zod";
export declare const transcriptItemSchema: z.ZodObject<{
    role: z.ZodEnum<["user", "assistant"]>;
    text: z.ZodString;
    ts: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    interrupted: z.ZodOptional<z.ZodBoolean>;
    type: z.ZodOptional<z.ZodEnum<["final", "partial"]>>;
}, "strip", z.ZodTypeAny, {
    text: string;
    role: "assistant" | "user";
    ts: import("../types").Timestamp;
    type?: "partial" | "final" | undefined;
    interrupted?: boolean | undefined;
}, {
    text: string;
    role: "assistant" | "user";
    ts: import("../types").Timestamp;
    type?: "partial" | "final" | undefined;
    interrupted?: boolean | undefined;
}>;
export type TranscriptItem = z.infer<typeof transcriptItemSchema>;
export declare function isTranscriptItem(value: unknown): value is TranscriptItem;
