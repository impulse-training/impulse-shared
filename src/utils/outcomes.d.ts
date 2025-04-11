import * as yup from "yup";
export type Outcome = "success" | "partial" | "setback";
export declare const outcomes: Outcome[];
export declare const outcomeSchema: yup.StringSchema<"success" | "partial" | "setback" | undefined, yup.AnyObject, undefined, "">;
