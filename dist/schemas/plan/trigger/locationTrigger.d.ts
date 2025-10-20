import { z } from "zod";
export declare const locationTriggerSchema: z.ZodObject<{
    locationName: z.ZodString;
    triggerType: z.ZodEnum<["arrival", "departure"]>;
    latitude: z.ZodNumber;
    longitude: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    locationName: string;
    triggerType: "arrival" | "departure";
    latitude: number;
    longitude: number;
}, {
    locationName: string;
    triggerType: "arrival" | "departure";
    latitude: number;
    longitude: number;
}>;
export type LocationTrigger = z.infer<typeof locationTriggerSchema>;
