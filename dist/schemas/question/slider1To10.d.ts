import { z } from "zod";
export declare const slider1To10QuestionSchema: z.ZodObject<{
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
    responseType: z.ZodLiteral<"slider1To10">;
    scope: z.ZodEnum<["success" | "setback" | "impulse" | "recap", ...("success" | "setback" | "impulse" | "recap")[]]>;
} & {
    sliderConfig: z.ZodObject<{
        minLabel: z.ZodOptional<z.ZodString>;
        maxLabel: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        minLabel?: string | undefined;
        maxLabel?: string | undefined;
    }, {
        minLabel?: string | undefined;
        maxLabel?: string | undefined;
    }>;
    text: z.ZodString;
}, "strip", z.ZodTypeAny, {
    text: string;
    sliderConfig: {
        minLabel?: string | undefined;
        maxLabel?: string | undefined;
    };
    isTemplate: boolean;
    responseType: "slider1To10";
    scope: "success" | "setback" | "impulse" | "recap";
    id?: string | undefined;
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    textAfterResponse?: string | undefined;
    metricId?: string | undefined;
    lastAskedAt?: import("../../types").Timestamp | undefined;
    lastAnsweredAt?: import("../../types").Timestamp | undefined;
    numberOfAnswers?: number | undefined;
    isPinned?: boolean | undefined;
}, {
    text: string;
    sliderConfig: {
        minLabel?: string | undefined;
        maxLabel?: string | undefined;
    };
    responseType: "slider1To10";
    scope: "success" | "setback" | "impulse" | "recap";
    id?: string | undefined;
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    isTemplate?: boolean | undefined;
    textAfterResponse?: string | undefined;
    metricId?: string | undefined;
    lastAskedAt?: import("../../types").Timestamp | undefined;
    lastAnsweredAt?: import("../../types").Timestamp | undefined;
    numberOfAnswers?: number | undefined;
    isPinned?: boolean | undefined;
}>;
export type Slider1To10Question = z.infer<typeof slider1To10QuestionSchema>;
