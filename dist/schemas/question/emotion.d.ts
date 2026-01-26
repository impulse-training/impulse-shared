import { z } from "zod";
export declare const emotionQuestionSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    textAfterResponse: z.ZodOptional<z.ZodString>;
    metricId: z.ZodOptional<z.ZodString>;
    lastAskedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    lastAnsweredAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    numberOfAnswers: z.ZodOptional<z.ZodNumber>;
    isTemplate: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    isPinned: z.ZodOptional<z.ZodBoolean>;
    responseType: z.ZodLiteral<"emotion">;
    scope: z.ZodEnum<["impulse" | "setback" | "success" | "recap", ...("impulse" | "setback" | "success" | "recap")[]]>;
} & {
    suggestedResponses: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    text: z.ZodString;
}, "strip", z.ZodTypeAny, {
    text: string;
    isTemplate: boolean;
    responseType: "emotion";
    scope: "impulse" | "setback" | "success" | "recap";
    id?: string | undefined;
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    textAfterResponse?: string | undefined;
    metricId?: string | undefined;
    lastAskedAt?: import("../../types").Timestamp | undefined;
    lastAnsweredAt?: import("../../types").Timestamp | undefined;
    numberOfAnswers?: number | undefined;
    isPinned?: boolean | undefined;
    suggestedResponses?: string[] | undefined;
}, {
    text: string;
    responseType: "emotion";
    scope: "impulse" | "setback" | "success" | "recap";
    id?: string | undefined;
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    textAfterResponse?: string | undefined;
    metricId?: string | undefined;
    lastAskedAt?: import("../../types").Timestamp | undefined;
    lastAnsweredAt?: import("../../types").Timestamp | undefined;
    numberOfAnswers?: number | undefined;
    isTemplate?: boolean | undefined;
    isPinned?: boolean | undefined;
    suggestedResponses?: string[] | undefined;
}>;
export type EmotionQuestion = z.infer<typeof emotionQuestionSchema>;
