import { z } from "zod";
export declare const tacticSuggestionLogSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    updatedAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    userId: z.ZodString;
    timestamp: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    dateString: z.ZodString;
    tacticId: z.ZodOptional<z.ZodString>;
    callLogDocPath: z.ZodOptional<z.ZodString>;
    replyTactic: z.ZodOptional<z.ZodObject<{
        tactic: z.ZodAny;
        currentStepIndex: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        currentStepIndex: number;
        tactic?: any;
    }, {
        currentStepIndex: number;
        tactic?: any;
    }>>;
} & {
    type: z.ZodLiteral<"tactic_suggestion">;
    isDisplayable: z.ZodLiteral<true>;
    data: z.ZodObject<{
        tactic: z.ZodAny;
        tacticPath: z.ZodString;
        reason: z.ZodOptional<z.ZodString>;
        source: z.ZodOptional<z.ZodEnum<["userPlan", "library", "improvised"]>>;
        collectionRefPath: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        tacticPath: string;
        tactic?: any;
        reason?: string | undefined;
        source?: "userPlan" | "library" | "improvised" | undefined;
        collectionRefPath?: string | undefined;
    }, {
        tacticPath: string;
        tactic?: any;
        reason?: string | undefined;
        source?: "userPlan" | "library" | "improvised" | undefined;
        collectionRefPath?: string | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "tactic_suggestion";
    userId: string;
    dateString: string;
    isDisplayable: true;
    data: {
        tacticPath: string;
        tactic?: any;
        reason?: string | undefined;
        source?: "userPlan" | "library" | "improvised" | undefined;
        collectionRefPath?: string | undefined;
    };
    id?: string | undefined;
    timestamp?: import("../../types").Timestamp | undefined;
    tacticId?: string | undefined;
    callLogDocPath?: string | undefined;
    replyTactic?: {
        currentStepIndex: number;
        tactic?: any;
    } | undefined;
}, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "tactic_suggestion";
    userId: string;
    dateString: string;
    isDisplayable: true;
    data: {
        tacticPath: string;
        tactic?: any;
        reason?: string | undefined;
        source?: "userPlan" | "library" | "improvised" | undefined;
        collectionRefPath?: string | undefined;
    };
    id?: string | undefined;
    timestamp?: import("../../types").Timestamp | undefined;
    tacticId?: string | undefined;
    callLogDocPath?: string | undefined;
    replyTactic?: {
        currentStepIndex: number;
        tactic?: any;
    } | undefined;
}>;
export type TacticSuggestionLog = z.infer<typeof tacticSuggestionLogSchema>;
