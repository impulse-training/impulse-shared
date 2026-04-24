import { z } from "zod";
export declare const sessionSummarySchema: z.ZodObject<{
    type: z.ZodEnum<["impulse", "general", "onboarding", "recap", "behavior", "dayRecap", "timePlan", "locationPlan", "adjustment"]>;
    tacticsByTitle: z.ZodRecord<z.ZodString, z.ZodArray<z.ZodAny, "many">>;
    behaviorsByName: z.ZodRecord<z.ZodString, z.ZodArray<z.ZodAny, "many">>;
    outcomeLogs: z.ZodArray<z.ZodAny, "many">;
    plansLogs: z.ZodArray<z.ZodAny, "many">;
    metricLogs: z.ZodOptional<z.ZodArray<z.ZodAny, "many">>;
    firstMessageLog: z.ZodOptional<z.ZodAny>;
    firstCallLog: z.ZodOptional<z.ZodAny>;
    hasContent: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    type: "behavior" | "impulse" | "general" | "onboarding" | "recap" | "dayRecap" | "timePlan" | "locationPlan" | "adjustment";
    tacticsByTitle: Record<string, any[]>;
    behaviorsByName: Record<string, any[]>;
    outcomeLogs: any[];
    plansLogs: any[];
    hasContent: boolean;
    metricLogs?: any[] | undefined;
    firstMessageLog?: any;
    firstCallLog?: any;
}, {
    type: "behavior" | "impulse" | "general" | "onboarding" | "recap" | "dayRecap" | "timePlan" | "locationPlan" | "adjustment";
    tacticsByTitle: Record<string, any[]>;
    behaviorsByName: Record<string, any[]>;
    outcomeLogs: any[];
    plansLogs: any[];
    hasContent: boolean;
    metricLogs?: any[] | undefined;
    firstMessageLog?: any;
    firstCallLog?: any;
}>;
export type SessionSummary = z.infer<typeof sessionSummarySchema>;
