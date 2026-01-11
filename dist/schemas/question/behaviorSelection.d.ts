import { z } from "zod";
export declare const behaviorSelectionQuestionSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    text: z.ZodOptional<z.ZodString>;
    textAfterResponse: z.ZodOptional<z.ZodString>;
    metricId: z.ZodOptional<z.ZodString>;
    lastAskedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    lastAnsweredAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    numberOfAnswers: z.ZodOptional<z.ZodNumber>;
    isTemplate: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    isPinned: z.ZodOptional<z.ZodBoolean>;
    responseType: z.ZodLiteral<"behaviorSelection">;
    scope: z.ZodEnum<["success" | "setback" | "impulse" | "recap", ...("success" | "setback" | "impulse" | "recap")[]]>;
} & {
    allowMultiple: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
}, "strip", z.ZodTypeAny, {
    isTemplate: boolean;
    responseType: "behaviorSelection";
    scope: "success" | "setback" | "impulse" | "recap";
    allowMultiple: boolean;
    id?: string | undefined;
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    text?: string | undefined;
    textAfterResponse?: string | undefined;
    metricId?: string | undefined;
    lastAskedAt?: import("../../types").Timestamp | undefined;
    lastAnsweredAt?: import("../../types").Timestamp | undefined;
    numberOfAnswers?: number | undefined;
    isPinned?: boolean | undefined;
}, {
    responseType: "behaviorSelection";
    scope: "success" | "setback" | "impulse" | "recap";
    id?: string | undefined;
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    text?: string | undefined;
    isTemplate?: boolean | undefined;
    textAfterResponse?: string | undefined;
    metricId?: string | undefined;
    lastAskedAt?: import("../../types").Timestamp | undefined;
    lastAnsweredAt?: import("../../types").Timestamp | undefined;
    numberOfAnswers?: number | undefined;
    isPinned?: boolean | undefined;
    allowMultiple?: boolean | undefined;
}>;
export type BehaviorSelectionQuestion = z.infer<typeof behaviorSelectionQuestionSchema>;
