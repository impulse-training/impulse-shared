import { z } from "zod";
export declare const tacticSuggestionsLogSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    updatedAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    userId: z.ZodString;
    timestamp: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    dateString: z.ZodString;
    sessionId: z.ZodString;
    tacticId: z.ZodOptional<z.ZodString>;
    behaviorIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    impulseId: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"tactic_suggestions">;
    isDisplayable: z.ZodLiteral<true>;
    data: z.ZodObject<{
        taskId: z.ZodString;
        suggestions: z.ZodArray<z.ZodObject<{
            theme: z.ZodString;
            guidance: z.ZodOptional<z.ZodString>;
            tacticId: z.ZodOptional<z.ZodString>;
            tactic: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            selectedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        }, "strip", z.ZodTypeAny, {
            theme: string;
            tacticId?: string | undefined;
            tactic?: Record<string, any> | undefined;
            guidance?: string | undefined;
            selectedAt?: import("../../types").Timestamp | undefined;
        }, {
            theme: string;
            tacticId?: string | undefined;
            tactic?: Record<string, any> | undefined;
            guidance?: string | undefined;
            selectedAt?: import("../../types").Timestamp | undefined;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        taskId: string;
        suggestions: {
            theme: string;
            tacticId?: string | undefined;
            tactic?: Record<string, any> | undefined;
            guidance?: string | undefined;
            selectedAt?: import("../../types").Timestamp | undefined;
        }[];
    }, {
        taskId: string;
        suggestions: {
            theme: string;
            tacticId?: string | undefined;
            tactic?: Record<string, any> | undefined;
            guidance?: string | undefined;
            selectedAt?: import("../../types").Timestamp | undefined;
        }[];
    }>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "tactic_suggestions";
    sessionId: string;
    dateString: string;
    userId: string;
    timestamp: import("../../types").Timestamp;
    isDisplayable: true;
    data: {
        taskId: string;
        suggestions: {
            theme: string;
            tacticId?: string | undefined;
            tactic?: Record<string, any> | undefined;
            guidance?: string | undefined;
            selectedAt?: import("../../types").Timestamp | undefined;
        }[];
    };
    id?: string | undefined;
    behaviorIds?: string[] | undefined;
    tacticId?: string | undefined;
    impulseId?: string | undefined;
}, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "tactic_suggestions";
    sessionId: string;
    dateString: string;
    userId: string;
    timestamp: import("../../types").Timestamp;
    isDisplayable: true;
    data: {
        taskId: string;
        suggestions: {
            theme: string;
            tacticId?: string | undefined;
            tactic?: Record<string, any> | undefined;
            guidance?: string | undefined;
            selectedAt?: import("../../types").Timestamp | undefined;
        }[];
    };
    id?: string | undefined;
    behaviorIds?: string[] | undefined;
    tacticId?: string | undefined;
    impulseId?: string | undefined;
}>;
export type TacticSuggestionsLog = z.infer<typeof tacticSuggestionsLogSchema>;
