import * as yup from "yup";

export type Outcome = "success" | "partial" | "setback";
export const outcomes: Outcome[] = ["success", "partial", "setback"];
export const outcomeSchema = yup.string().oneOf(outcomes);
