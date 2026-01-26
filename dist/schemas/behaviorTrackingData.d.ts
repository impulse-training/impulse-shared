import { z } from "zod";
export declare const behaviorTrackingDataSchema: z.ZodObject<{
    behaviorId: z.ZodOptional<z.ZodString>;
    behaviorName: z.ZodOptional<z.ZodString>;
    behaviorTrackingUnit: z.ZodOptional<z.ZodString>;
    trackingType: z.ZodOptional<z.ZodEnum<["counter", "timer"]>>;
    value: z.ZodOptional<z.ZodNumber>;
    formattedValue: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    value?: number | undefined;
    behaviorId?: string | undefined;
    behaviorName?: string | undefined;
    behaviorTrackingUnit?: string | undefined;
    trackingType?: "counter" | "timer" | undefined;
    formattedValue?: string | undefined;
}, {
    value?: number | undefined;
    behaviorId?: string | undefined;
    behaviorName?: string | undefined;
    behaviorTrackingUnit?: string | undefined;
    trackingType?: "counter" | "timer" | undefined;
    formattedValue?: string | undefined;
}>;
export type BehaviorTrackingData = z.infer<typeof behaviorTrackingDataSchema>;
