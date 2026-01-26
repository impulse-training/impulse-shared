import { z } from "zod";
export declare const sharedMomentLogSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    updatedAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    userId: z.ZodString;
    timestamp: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    dateString: z.ZodString;
    tacticId: z.ZodOptional<z.ZodString>;
    behaviorIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    callLogDocPath: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"shared_moment">;
    isDisplayable: z.ZodLiteral<true>;
    data: z.ZodObject<{
        threadRef: z.ZodType<import("../../utils/documentReferenceSchema").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../../utils/documentReferenceSchema").DocumentReferenceLike<unknown>>;
        threadSummaryData: z.ZodObject<{
            type: z.ZodEnum<["impulse", "general", "onboarding", "recap", "behavior", "dayRecap", "timePlan", "locationPlan", "adjustment"]>;
            tacticsByTitle: z.ZodRecord<z.ZodString, z.ZodArray<z.ZodAny, "many">>;
            behaviorsByName: z.ZodRecord<z.ZodString, z.ZodArray<z.ZodAny, "many">>;
            outcomeLogs: z.ZodArray<z.ZodAny, "many">;
            questionsLogs: z.ZodArray<z.ZodAny, "many">;
            firstMessageLog: z.ZodOptional<z.ZodAny>;
            firstCallLog: z.ZodOptional<z.ZodAny>;
            hasContent: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            type: "impulse" | "recap" | "behavior" | "general" | "onboarding" | "dayRecap" | "timePlan" | "locationPlan" | "adjustment";
            tacticsByTitle: Record<string, any[]>;
            behaviorsByName: Record<string, any[]>;
            outcomeLogs: any[];
            questionsLogs: any[];
            hasContent: boolean;
            firstMessageLog?: any;
            firstCallLog?: any;
        }, {
            type: "impulse" | "recap" | "behavior" | "general" | "onboarding" | "dayRecap" | "timePlan" | "locationPlan" | "adjustment";
            tacticsByTitle: Record<string, any[]>;
            behaviorsByName: Record<string, any[]>;
            outcomeLogs: any[];
            questionsLogs: any[];
            hasContent: boolean;
            firstMessageLog?: any;
            firstCallLog?: any;
        }>;
        emojiId: z.ZodOptional<z.ZodObject<{
            emoji: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            emoji: string;
        }, {
            emoji: string;
        }>>;
        message: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        threadRef: import("../../utils/documentReferenceSchema").DocumentReferenceLike<unknown>;
        threadSummaryData: {
            type: "impulse" | "recap" | "behavior" | "general" | "onboarding" | "dayRecap" | "timePlan" | "locationPlan" | "adjustment";
            tacticsByTitle: Record<string, any[]>;
            behaviorsByName: Record<string, any[]>;
            outcomeLogs: any[];
            questionsLogs: any[];
            hasContent: boolean;
            firstMessageLog?: any;
            firstCallLog?: any;
        };
        message?: string | undefined;
        emojiId?: {
            emoji: string;
        } | undefined;
    }, {
        threadRef: import("../../utils/documentReferenceSchema").DocumentReferenceLike<unknown>;
        threadSummaryData: {
            type: "impulse" | "recap" | "behavior" | "general" | "onboarding" | "dayRecap" | "timePlan" | "locationPlan" | "adjustment";
            tacticsByTitle: Record<string, any[]>;
            behaviorsByName: Record<string, any[]>;
            outcomeLogs: any[];
            questionsLogs: any[];
            hasContent: boolean;
            firstMessageLog?: any;
            firstCallLog?: any;
        };
        message?: string | undefined;
        emojiId?: {
            emoji: string;
        } | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "shared_moment";
    userId: string;
    dateString: string;
    isDisplayable: true;
    data: {
        threadRef: import("../../utils/documentReferenceSchema").DocumentReferenceLike<unknown>;
        threadSummaryData: {
            type: "impulse" | "recap" | "behavior" | "general" | "onboarding" | "dayRecap" | "timePlan" | "locationPlan" | "adjustment";
            tacticsByTitle: Record<string, any[]>;
            behaviorsByName: Record<string, any[]>;
            outcomeLogs: any[];
            questionsLogs: any[];
            hasContent: boolean;
            firstMessageLog?: any;
            firstCallLog?: any;
        };
        message?: string | undefined;
        emojiId?: {
            emoji: string;
        } | undefined;
    };
    id?: string | undefined;
    timestamp?: import("../../types").Timestamp | undefined;
    tacticId?: string | undefined;
    behaviorIds?: string[] | undefined;
    callLogDocPath?: string | undefined;
}, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "shared_moment";
    userId: string;
    dateString: string;
    isDisplayable: true;
    data: {
        threadRef: import("../../utils/documentReferenceSchema").DocumentReferenceLike<unknown>;
        threadSummaryData: {
            type: "impulse" | "recap" | "behavior" | "general" | "onboarding" | "dayRecap" | "timePlan" | "locationPlan" | "adjustment";
            tacticsByTitle: Record<string, any[]>;
            behaviorsByName: Record<string, any[]>;
            outcomeLogs: any[];
            questionsLogs: any[];
            hasContent: boolean;
            firstMessageLog?: any;
            firstCallLog?: any;
        };
        message?: string | undefined;
        emojiId?: {
            emoji: string;
        } | undefined;
    };
    id?: string | undefined;
    timestamp?: import("../../types").Timestamp | undefined;
    tacticId?: string | undefined;
    behaviorIds?: string[] | undefined;
    callLogDocPath?: string | undefined;
}>;
export type SharedMomentLog = z.infer<typeof sharedMomentLogSchema>;
