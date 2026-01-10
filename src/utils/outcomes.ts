import z from "zod";

export type Outcome = "success" | "partial" | "setback";
export const outcomes: Outcome[] = ["success", "partial", "setback"];
export const outcomeSchema = z.enum(["success", "partial", "setback"]);
