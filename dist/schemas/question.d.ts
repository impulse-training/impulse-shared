import * as yup from "yup";
import { Outcome } from "../utils/outcomes";
export declare const responseTypes: readonly ["text", "slider", "multiple_choice"];
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
    } | undefined;
    scope: "debrief" | undefined;
    order: number | undefined;
    visibleForOutcomes: (Outcome | undefined)[] | undefined;
}, yup.AnyObject, {
    id: undefined;
    content: undefined;
    responseType: undefined;
    suggestedResponses: "";
    sliderConfig: undefined;
    scope: undefined;
    order: undefined;
    visibleForOutcomes: "";
}, "">;
export type ResponseType = (typeof responseTypes)[number];
export type Question = yup.InferType<typeof questionSchema>;
export declare const isQuestion: (value: unknown) => value is Question;
