import { z } from "zod";
export declare function questionBaseSchema<T extends string>(type: T): z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    text: z.ZodString;
    textAfterResponse: z.ZodOptional<z.ZodString>;
    metricId: z.ZodOptional<z.ZodString>;
    lastAskedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    lastAnsweredAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    numberOfAnswers: z.ZodOptional<z.ZodNumber>;
    isTemplate: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    isPinned: z.ZodOptional<z.ZodBoolean>;
    responseType: z.ZodLiteral<T>;
    scope: z.ZodEnum<["success" | "setback" | "impulse" | "recap", ...("success" | "setback" | "impulse" | "recap")[]]>;
    debriefBehaviors: z.ZodOptional<z.ZodObject<{
        success: z.ZodArray<z.ZodString, "many">;
        setback: z.ZodArray<z.ZodString, "many">;
    }, "strip", z.ZodTypeAny, {
        success: string[];
        setback: string[];
    }, {
        success: string[];
        setback: string[];
    }>>;
}, "strip", z.ZodTypeAny, z.objectUtil.addQuestionMarks<z.baseObjectOutputType<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    text: z.ZodString;
    textAfterResponse: z.ZodOptional<z.ZodString>;
    metricId: z.ZodOptional<z.ZodString>;
    lastAskedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    lastAnsweredAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    numberOfAnswers: z.ZodOptional<z.ZodNumber>;
    isTemplate: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    isPinned: z.ZodOptional<z.ZodBoolean>;
    responseType: z.ZodLiteral<T>;
    scope: z.ZodEnum<["success" | "setback" | "impulse" | "recap", ...("success" | "setback" | "impulse" | "recap")[]]>;
    debriefBehaviors: z.ZodOptional<z.ZodObject<{
        success: z.ZodArray<z.ZodString, "many">;
        setback: z.ZodArray<z.ZodString, "many">;
    }, "strip", z.ZodTypeAny, {
        success: string[];
        setback: string[];
    }, {
        success: string[];
        setback: string[];
    }>>;
}>, any> extends infer T_1 ? { [k in keyof T_1]: z.objectUtil.addQuestionMarks<z.baseObjectOutputType<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    text: z.ZodString;
    textAfterResponse: z.ZodOptional<z.ZodString>;
    metricId: z.ZodOptional<z.ZodString>;
    lastAskedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    lastAnsweredAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    numberOfAnswers: z.ZodOptional<z.ZodNumber>;
    isTemplate: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    isPinned: z.ZodOptional<z.ZodBoolean>;
    responseType: z.ZodLiteral<T>;
    scope: z.ZodEnum<["success" | "setback" | "impulse" | "recap", ...("success" | "setback" | "impulse" | "recap")[]]>;
    debriefBehaviors: z.ZodOptional<z.ZodObject<{
        success: z.ZodArray<z.ZodString, "many">;
        setback: z.ZodArray<z.ZodString, "many">;
    }, "strip", z.ZodTypeAny, {
        success: string[];
        setback: string[];
    }, {
        success: string[];
        setback: string[];
    }>>;
}>, any>[k]; } : never, z.baseObjectInputType<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    text: z.ZodString;
    textAfterResponse: z.ZodOptional<z.ZodString>;
    metricId: z.ZodOptional<z.ZodString>;
    lastAskedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    lastAnsweredAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    numberOfAnswers: z.ZodOptional<z.ZodNumber>;
    isTemplate: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    isPinned: z.ZodOptional<z.ZodBoolean>;
    responseType: z.ZodLiteral<T>;
    scope: z.ZodEnum<["success" | "setback" | "impulse" | "recap", ...("success" | "setback" | "impulse" | "recap")[]]>;
    debriefBehaviors: z.ZodOptional<z.ZodObject<{
        success: z.ZodArray<z.ZodString, "many">;
        setback: z.ZodArray<z.ZodString, "many">;
    }, "strip", z.ZodTypeAny, {
        success: string[];
        setback: string[];
    }, {
        success: string[];
        setback: string[];
    }>>;
}> extends infer T_2 ? { [k_1 in keyof T_2]: z.baseObjectInputType<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    text: z.ZodString;
    textAfterResponse: z.ZodOptional<z.ZodString>;
    metricId: z.ZodOptional<z.ZodString>;
    lastAskedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    lastAnsweredAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    numberOfAnswers: z.ZodOptional<z.ZodNumber>;
    isTemplate: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    isPinned: z.ZodOptional<z.ZodBoolean>;
    responseType: z.ZodLiteral<T>;
    scope: z.ZodEnum<["success" | "setback" | "impulse" | "recap", ...("success" | "setback" | "impulse" | "recap")[]]>;
    debriefBehaviors: z.ZodOptional<z.ZodObject<{
        success: z.ZodArray<z.ZodString, "many">;
        setback: z.ZodArray<z.ZodString, "many">;
    }, "strip", z.ZodTypeAny, {
        success: string[];
        setback: string[];
    }, {
        success: string[];
        setback: string[];
    }>>;
}>[k_1]; } : never>;
