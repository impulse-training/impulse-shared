import { z } from "zod";
export declare const behaviorTrackingDataSchema: z.ZodObject<{
    behaviorId: z.ZodString;
    behaviorName: z.ZodString;
    behaviorTrackingUnit: z.ZodOptional<z.ZodString>;
    trackingType: z.ZodEnum<["counter", "timer"]>;
    category: z.ZodType<"helpful" | "mixed" | "unhelpful" | "unsure", z.ZodTypeDef, "helpful" | "mixed" | "unhelpful" | "unsure">;
    value: z.ZodNumber;
    formattedValue: z.ZodString;
}, "strip", z.ZodTypeAny, {
    value: number;
    behaviorId: string;
    behaviorName: string;
    trackingType: "counter" | "timer";
    category: "helpful" | "mixed" | "unhelpful" | "unsure";
    formattedValue: string;
    behaviorTrackingUnit?: string | undefined;
}, {
    value: number;
    behaviorId: string;
    behaviorName: string;
    trackingType: "counter" | "timer";
    category: "helpful" | "mixed" | "unhelpful" | "unsure";
    formattedValue: string;
    behaviorTrackingUnit?: string | undefined;
}>;
export type BehaviorTrackingData = z.infer<typeof behaviorTrackingDataSchema>;
