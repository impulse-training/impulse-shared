import { z } from "zod";
export declare const sessionSchema: z.ZodObject<{
    participantUids: z.ZodArray<z.ZodString, "many">;
    startTime: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    durationMinutes: z.ZodNumber;
    title: z.ZodOptional<z.ZodString>;
    transcriptSummary: z.ZodOptional<z.ZodString>;
    code: z.ZodString;
}, "strip", z.ZodTypeAny, {
    code: string;
    durationMinutes: number;
    participantUids: string[];
    title?: string | undefined;
    startTime?: import("../types").Timestamp | undefined;
    transcriptSummary?: string | undefined;
}, {
    code: string;
    durationMinutes: number;
    participantUids: string[];
    title?: string | undefined;
    startTime?: import("../types").Timestamp | undefined;
    transcriptSummary?: string | undefined;
}>;
export type Session = z.infer<typeof sessionSchema>;
