import * as yup from "yup";
export declare const responseTypes: readonly ["text", "slider"];
export declare const questionSchema: yup.ObjectSchema<{
    content: string;
    responseType: NonNullable<"text" | "slider" | undefined>;
    suggestedResponses: (string | undefined)[] | undefined;
    sliderConfig: {
        minLabel?: string | undefined;
        maxLabel?: string | undefined;
        defaultValue?: number | undefined;
        min: number;
        max: number;
        step: number;
    };
}, yup.AnyObject, {
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
}, "">;
