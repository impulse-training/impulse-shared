import { z } from "zod";
export declare const slider1To10QuestionSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    text: z.ZodString;
    lastAskedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    lastAnsweredAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    numberOfAnswers: z.ZodOptional<z.ZodNumber>;
    isTemplate: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    isPinned: z.ZodOptional<z.ZodBoolean>;
    responseType: z.ZodLiteral<"slider1To10">;
    scope: z.ZodEnum<["impulse" | "setback" | "success" | "recap", ...("impulse" | "setback" | "success" | "recap")[]]>;
    debriefBehaviors: z.ZodOptional<z.ZodObject<{
        success: z.ZodArray<z.ZodString, "many">;
        setback: z.ZodArray<z.ZodString, "many">;
    }, "strip", z.ZodTypeAny, {
        setback: string[];
        success: string[];
    }, {
        setback: string[];
        success: string[];
    }>>;
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
}, "strip", z.ZodTypeAny, {
    text: string;
    sliderConfig: {
        minLabel?: string | undefined;
        maxLabel?: string | undefined;
    };
    isTemplate: boolean;
    responseType: "slider1To10";
    scope: "impulse" | "setback" | "success" | "recap";
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    id?: string | undefined;
    lastAskedAt?: import("../../types").Timestamp | undefined;
    lastAnsweredAt?: import("../../types").Timestamp | undefined;
    numberOfAnswers?: number | undefined;
    isPinned?: boolean | undefined;
    debriefBehaviors?: {
        setback: string[];
        success: string[];
    } | undefined;
}, {
    text: string;
    sliderConfig: {
        minLabel?: string | undefined;
        maxLabel?: string | undefined;
    };
    responseType: "slider1To10";
    scope: "impulse" | "setback" | "success" | "recap";
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    id?: string | undefined;
    isTemplate?: boolean | undefined;
    lastAskedAt?: import("../../types").Timestamp | undefined;
    lastAnsweredAt?: import("../../types").Timestamp | undefined;
    numberOfAnswers?: number | undefined;
    isPinned?: boolean | undefined;
    debriefBehaviors?: {
        setback: string[];
        success: string[];
    } | undefined;
}>;
export type Slider1To10Question = z.infer<typeof slider1To10QuestionSchema>;
