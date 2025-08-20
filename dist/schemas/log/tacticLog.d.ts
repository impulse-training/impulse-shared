import { z } from "zod";
export declare const tacticLogSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    userId: z.ZodString;
    timestamp: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    dateString: z.ZodString;
    callLogDocPath: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"tactic_completed">;
    isDisplayable: z.ZodLiteral<true>;
    data: z.ZodObject<{
        tactic: z.ZodAny;
        stepCount: z.ZodOptional<z.ZodNumber>;
        completedStepIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        completed: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        tactic?: any;
        stepCount?: number | undefined;
        completedStepIds?: string[] | undefined;
        completed?: boolean | undefined;
    }, {
        tactic?: any;
        stepCount?: number | undefined;
        completedStepIds?: string[] | undefined;
        completed?: boolean | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    type: "tactic_completed";
    dateString: string;
    userId: string;
    timestamp: import("../../types").Timestamp;
    isDisplayable: true;
    data: {
        tactic?: any;
        stepCount?: number | undefined;
        completedStepIds?: string[] | undefined;
        completed?: boolean | undefined;
    };
    id?: string | undefined;
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    callLogDocPath?: string | undefined;
}, {
    type: "tactic_completed";
    dateString: string;
    userId: string;
    timestamp: import("../../types").Timestamp;
    isDisplayable: true;
    data: {
        tactic?: any;
        stepCount?: number | undefined;
        completedStepIds?: string[] | undefined;
        completed?: boolean | undefined;
    };
    id?: string | undefined;
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    callLogDocPath?: string | undefined;
}>;
export type TacticLog = z.infer<typeof tacticLogSchema>;
