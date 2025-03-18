import * as yup from "yup";
export declare const responseTypes: readonly ["text", "slider", "multiple_choice"];
export declare const questionOutcomes: readonly ["setback", "partial", "success"];
export declare const questionConditions: readonly ["equals", "contains", "greater_than", "less_than"];
export declare const questionSchema: yup.ObjectSchema<{
    id: string | undefined;
    content: string;
    responseType: NonNullable<"text" | "slider" | "multiple_choice" | undefined>;
    suggestedResponses: (string | undefined)[] | undefined;
    sliderConfig: {
        minLabel?: string | undefined;
        maxLabel?: string | undefined;
        defaultValue?: number | undefined;
        min: number;
        max: number;
        step: number;
    };
    scope: "debrief" | undefined;
    order: number | undefined;
    requiresOutcome: boolean;
    visibleForOutcomes: ("setback" | "partial" | "success" | undefined)[] | undefined;
    nextQuestionRule: {
        value: NonNullable<string | number | undefined>;
        condition: NonNullable<"equals" | "contains" | "greater_than" | "less_than" | undefined>;
        nextQuestionId: string;
    } | undefined;
}, yup.AnyObject, {
    id: undefined;
    content: undefined;
    responseType: undefined;
    suggestedResponses: "";
    sliderConfig: {
        min: undefined;
        max: undefined;
        step: 1;
        minLabel: undefined;
        maxLabel: undefined;
        defaultValue: undefined;
    };
    scope: undefined;
    order: undefined;
    requiresOutcome: false;
    visibleForOutcomes: "";
    nextQuestionRule: {
        condition: undefined;
        value: undefined;
        nextQuestionId: undefined;
    };
}, "">;
export type ResponseType = (typeof responseTypes)[number];
export type QuestionOutcome = (typeof questionOutcomes)[number];
export type QuestionCondition = (typeof questionConditions)[number];
export type Question = yup.InferType<typeof questionSchema>;
export declare const isQuestion: (value: unknown) => value is Question;
