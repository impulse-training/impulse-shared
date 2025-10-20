import { z } from "zod";
import { BehaviorSelectionQuestion } from "./behaviorSelection";
import { EmotionQuestion } from "./emotion";
import { ShortTextQuestion } from "./shortText";
import { Slider1To10Question } from "./slider1To10";
import { TextQuestion } from "./text";
export * from "./behaviorSelection";
export * from "./emotion";
export * from "./shortText";
export * from "./slider1To10";
export * from "./text";
export declare const responseTypes: readonly ["text", "shortText", "emotion", "slider1To10", "behaviorSelection", "recap"];
export type ResponseType = (typeof responseTypes)[number];
export declare const responseTypeSchema: z.ZodEnum<["text", "shortText", "emotion", "slider1To10", "behaviorSelection", "recap"]>;
export type Question = TextQuestion | Slider1To10Question | ShortTextQuestion | EmotionQuestion | BehaviorSelectionQuestion;
export declare const QuestionSchemas: {
    readonly text: z.ZodObject<{
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
        responseType: "text";
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
    readonly emotion: z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        text: z.ZodString;
        lastAskedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        lastAnsweredAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        numberOfAnswers: z.ZodOptional<z.ZodNumber>;
        isTemplate: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        isPinned: z.ZodOptional<z.ZodBoolean>;
        responseType: z.ZodLiteral<"emotion">;
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
        suggestedResponses: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        text: string;
        isTemplate: boolean;
        responseType: "emotion";
        scope: "impulse" | "setback" | "success" | "recap";
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        id?: string | undefined;
        suggestedResponses?: string[] | undefined;
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
        responseType: "emotion";
        scope: "impulse" | "setback" | "success" | "recap";
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        id?: string | undefined;
        suggestedResponses?: string[] | undefined;
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
    readonly shortText: z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        text: z.ZodString;
        lastAskedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        lastAnsweredAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        numberOfAnswers: z.ZodOptional<z.ZodNumber>;
        isTemplate: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        isPinned: z.ZodOptional<z.ZodBoolean>;
        responseType: z.ZodLiteral<"shortText">;
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
        suggestedResponses: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        text: string;
        isTemplate: boolean;
        responseType: "shortText";
        scope: "impulse" | "setback" | "success" | "recap";
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        id?: string | undefined;
        suggestedResponses?: string[] | undefined;
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
        responseType: "shortText";
        scope: "impulse" | "setback" | "success" | "recap";
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        id?: string | undefined;
        suggestedResponses?: string[] | undefined;
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
    readonly slider1To10: z.ZodObject<{
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
    readonly behaviorSelection: z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        text: z.ZodString;
        lastAskedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        lastAnsweredAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        numberOfAnswers: z.ZodOptional<z.ZodNumber>;
        isTemplate: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        isPinned: z.ZodOptional<z.ZodBoolean>;
        responseType: z.ZodLiteral<"behaviorSelection">;
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
        allowMultiple: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    }, "strip", z.ZodTypeAny, {
        text: string;
        isTemplate: boolean;
        responseType: "behaviorSelection";
        scope: "impulse" | "setback" | "success" | "recap";
        allowMultiple: boolean;
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
        responseType: "behaviorSelection";
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
        allowMultiple?: boolean | undefined;
    }>;
};
export declare const questionSchema: z.ZodDiscriminatedUnion<"responseType", [z.ZodObject<{
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
    responseType: "text";
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
}>, z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    text: z.ZodString;
    lastAskedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    lastAnsweredAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    numberOfAnswers: z.ZodOptional<z.ZodNumber>;
    isTemplate: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    isPinned: z.ZodOptional<z.ZodBoolean>;
    responseType: z.ZodLiteral<"emotion">;
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
    suggestedResponses: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodTypeAny, {
    text: string;
    isTemplate: boolean;
    responseType: "emotion";
    scope: "impulse" | "setback" | "success" | "recap";
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    id?: string | undefined;
    suggestedResponses?: string[] | undefined;
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
    responseType: "emotion";
    scope: "impulse" | "setback" | "success" | "recap";
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    id?: string | undefined;
    suggestedResponses?: string[] | undefined;
    isTemplate?: boolean | undefined;
    lastAskedAt?: import("../../types").Timestamp | undefined;
    lastAnsweredAt?: import("../../types").Timestamp | undefined;
    numberOfAnswers?: number | undefined;
    isPinned?: boolean | undefined;
    debriefBehaviors?: {
        setback: string[];
        success: string[];
    } | undefined;
}>, z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    text: z.ZodString;
    lastAskedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    lastAnsweredAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    numberOfAnswers: z.ZodOptional<z.ZodNumber>;
    isTemplate: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    isPinned: z.ZodOptional<z.ZodBoolean>;
    responseType: z.ZodLiteral<"shortText">;
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
    suggestedResponses: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodTypeAny, {
    text: string;
    isTemplate: boolean;
    responseType: "shortText";
    scope: "impulse" | "setback" | "success" | "recap";
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    id?: string | undefined;
    suggestedResponses?: string[] | undefined;
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
    responseType: "shortText";
    scope: "impulse" | "setback" | "success" | "recap";
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    id?: string | undefined;
    suggestedResponses?: string[] | undefined;
    isTemplate?: boolean | undefined;
    lastAskedAt?: import("../../types").Timestamp | undefined;
    lastAnsweredAt?: import("../../types").Timestamp | undefined;
    numberOfAnswers?: number | undefined;
    isPinned?: boolean | undefined;
    debriefBehaviors?: {
        setback: string[];
        success: string[];
    } | undefined;
}>, z.ZodObject<{
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
}>, z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    text: z.ZodString;
    lastAskedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    lastAnsweredAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    numberOfAnswers: z.ZodOptional<z.ZodNumber>;
    isTemplate: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    isPinned: z.ZodOptional<z.ZodBoolean>;
    responseType: z.ZodLiteral<"behaviorSelection">;
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
    allowMultiple: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
}, "strip", z.ZodTypeAny, {
    text: string;
    isTemplate: boolean;
    responseType: "behaviorSelection";
    scope: "impulse" | "setback" | "success" | "recap";
    allowMultiple: boolean;
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
    responseType: "behaviorSelection";
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
    allowMultiple?: boolean | undefined;
}>]>;
export type QuestionTypes = {
    [K in Question["responseType"]]: z.infer<(typeof QuestionSchemas)[K]>;
};
export declare const questionIsTextQuestion: (value: Omit<Question, "id">) => value is TextQuestion;
export declare const isValidTextQuestion: (value: unknown) => value is TextQuestion;
export declare const questionIsEmotionQuestion: (value: Omit<Question, "id">) => value is EmotionQuestion;
export declare const isValidEmotionQuestion: (value: unknown) => value is EmotionQuestion;
export declare const questionIsShortTextQuestion: (value: Omit<Question, "id">) => value is ShortTextQuestion;
export declare const isValidShortTextQuestion: (value: unknown) => value is ShortTextQuestion;
export declare const questionIsSlider1To10Question: (value: Omit<Question, "id">) => value is Slider1To10Question;
export declare const isValidSlider1To10Question: (value: unknown) => value is Slider1To10Question;
export declare const questionIsBehaviorSelectionQuestion: (value: Omit<Question, "id">) => value is BehaviorSelectionQuestion;
export declare const isValidBehaviorSelectionQuestion: (value: unknown) => value is BehaviorSelectionQuestion;
export declare const isQuestion: (value: unknown) => value is Question;
