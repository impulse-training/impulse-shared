import { z } from "zod";
export declare const insightSchema: z.ZodObject<{
    userId: z.ZodString;
    text: z.ZodString;
}, "strip", z.ZodTypeAny, {
    text: string;
    userId: string;
}, {
    text: string;
    userId: string;
}>;
export type Insight = z.infer<typeof insightSchema>;
