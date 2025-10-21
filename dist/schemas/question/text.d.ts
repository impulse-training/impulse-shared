import { z } from "zod";
export declare const textQuestionSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    text: z.ZodString;
    lastAskedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    lastAnsweredAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    numberOfAnswers: z.ZodOptional<z.ZodNumber>;
    isTemplate: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    isPinned: z.ZodOptional<z.ZodBoolean>;
    responseType: z.ZodLiteral<"text">;
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
}, "strip", z.ZodTypeAny, {
    text: string;
    isTemplate: boolean;
    responseType: "text";
    scope: "impulse" | "setback" | "success" | "recap";
    id?: string | undefined;
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
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
    responseType: "text";
    scope: "impulse" | "setback" | "success" | "recap";
    id?: string | undefined;
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
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
export type TextQuestion = z.infer<typeof textQuestionSchema>;
