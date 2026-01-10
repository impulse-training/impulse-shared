import z from "zod";
export type Outcome = "success" | "partial" | "setback";
export declare const outcomes: Outcome[];
export declare const outcomeSchema: z.ZodEnum<["success", "partial", "setback"]>;
