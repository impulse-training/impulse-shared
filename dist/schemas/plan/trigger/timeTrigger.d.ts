import z from "zod";
export declare const timeTriggerSchema: z.ZodObject<{
    hour: z.ZodNumber;
    minute: z.ZodNumber;
    weekdays: z.ZodArray<z.ZodNumber, "many">;
}, "strip", z.ZodTypeAny, {
    hour: number;
    minute: number;
    weekdays: number[];
}, {
    hour: number;
    minute: number;
    weekdays: number[];
}>;
export type TimeTrigger = z.infer<typeof timeTriggerSchema>;
