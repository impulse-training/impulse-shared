import { z } from "zod";
export declare const suggestedTacticsLogSchema: z.ZodObject<{
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
    type: z.ZodLiteral<"suggested_tactics">;
    isDisplayable: z.ZodLiteral<true>;
    data: z.ZodObject<{
        tactics: z.ZodArray<z.ZodObject<{
            tacticPath: z.ZodString;
            reason: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            tacticPath: string;
            reason?: string | undefined;
        }, {
            tacticPath: string;
            reason?: string | undefined;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        tactics: {
            tacticPath: string;
            reason?: string | undefined;
        }[];
    }, {
        tactics: {
            tacticPath: string;
            reason?: string | undefined;
        }[];
    }>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "suggested_tactics";
    userId: string;
    dateString: string;
    isDisplayable: true;
    data: {
        tactics: {
            tacticPath: string;
            reason?: string | undefined;
        }[];
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
    type: "suggested_tactics";
    userId: string;
    dateString: string;
    isDisplayable: true;
    data: {
        tactics: {
            tacticPath: string;
            reason?: string | undefined;
        }[];
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
export type SuggestedTacticsLog = z.infer<typeof suggestedTacticsLogSchema>;
