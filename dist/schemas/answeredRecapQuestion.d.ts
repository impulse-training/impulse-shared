import { z } from "zod";
/**
 * Stored at users/{userId}/answeredRecapQuestions/{questionId}
 *
 * Tracks which sequence questions the user has completed.
 * Contextual questions (baseline, milestone, experiment, trend) are NOT
 * tracked here — they are gated by current state instead.
 */
export declare const answeredRecapQuestionSchema: z.ZodObject<{
    answeredAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    sessionId: z.ZodString;
    dateString: z.ZodString;
    answerSummary: z.ZodOptional<z.ZodString>;
    behaviorIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodTypeAny, {
    answeredAt: import("../types").Timestamp;
    sessionId: string;
    dateString: string;
    answerSummary?: string | undefined;
    behaviorIds?: string[] | undefined;
}, {
    answeredAt: import("../types").Timestamp;
    sessionId: string;
    dateString: string;
    answerSummary?: string | undefined;
    behaviorIds?: string[] | undefined;
}>;
export type AnsweredRecapQuestion = z.infer<typeof answeredRecapQuestionSchema>;
