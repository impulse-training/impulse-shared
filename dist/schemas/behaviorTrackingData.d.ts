import z from "zod";
export declare const behaviorTrackingDataSchema: z.ZodObject<{
    behaviorId: z.ZodString;
    behaviorName: z.ZodString;
    behaviorTrackingUnit: z.ZodOptional<z.ZodString>;
    trackingType: z.ZodEnum<["counter", "timer"]>;
    value: z.ZodNumber;
    formattedValue: z.ZodString;
}, "strip", z.ZodTypeAny, {
    value: number;
    behaviorId: string;
    behaviorName: string;
    trackingType: "counter" | "timer";
    formattedValue: string;
    behaviorTrackingUnit?: string | undefined;
}, {
    value: number;
    behaviorId: string;
    behaviorName: string;
    trackingType: "counter" | "timer";
    formattedValue: string;
    behaviorTrackingUnit?: string | undefined;
}>;
export type BehaviorTrackingData = z.infer<typeof behaviorTrackingDataSchema>;
