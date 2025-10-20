import { z } from "zod";
export declare const threadSummarySchema: z.ZodObject<{
    type: z.ZodEnum<["impulse", "general", "onboarding", "recap", "behavior", "dayRecap", "timePlan", "locationPlan", "adjustment"]>;
    tacticsByTitle: z.ZodRecord<z.ZodString, z.ZodArray<z.ZodAny, "many">>;
    behaviorsByName: z.ZodRecord<z.ZodString, z.ZodArray<z.ZodAny, "many">>;
    outcomeLogs: z.ZodArray<z.ZodAny, "many">;
    daySummaryLog: z.ZodOptional<z.ZodAny>;
    questionLogs: z.ZodArray<z.ZodAny, "many">;
    firstMessageLog: z.ZodOptional<z.ZodAny>;
    firstCallLog: z.ZodOptional<z.ZodAny>;
    hasContent: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    type: "impulse" | "recap" | "behavior" | "general" | "onboarding" | "dayRecap" | "timePlan" | "locationPlan" | "adjustment";
    tacticsByTitle: Record<string, any[]>;
    behaviorsByName: Record<string, any[]>;
    outcomeLogs: any[];
    questionLogs: any[];
    hasContent: boolean;
    daySummaryLog?: any;
    firstMessageLog?: any;
    firstCallLog?: any;
}, {
    type: "impulse" | "recap" | "behavior" | "general" | "onboarding" | "dayRecap" | "timePlan" | "locationPlan" | "adjustment";
    tacticsByTitle: Record<string, any[]>;
    behaviorsByName: Record<string, any[]>;
    outcomeLogs: any[];
    questionLogs: any[];
    hasContent: boolean;
    daySummaryLog?: any;
    firstMessageLog?: any;
    firstCallLog?: any;
}>;
export type ThreadSummary = z.infer<typeof threadSummarySchema>;
