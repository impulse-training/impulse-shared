import * as yup from "yup";
export declare const insightSchema: yup.ObjectSchema<{
    userId: string;
    text: string;
}, yup.AnyObject, {
    userId: undefined;
    text: undefined;
}, "">;
export type Insight = yup.InferType<typeof insightSchema>;
