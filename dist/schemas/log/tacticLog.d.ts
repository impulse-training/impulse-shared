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
        tacticCollectionId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        tacticCollectionId: string;
        tactic?: any;
    }, {
        tacticCollectionId: string;
        tactic?: any;
    }>;
}, "strip", z.ZodTypeAny, {
    type: "tactic_completed";
    dateString: string;
    userId: string;
    timestamp: import("../../types").Timestamp;
    isDisplayable: true;
    data: {
        tacticCollectionId: string;
        tactic?: any;
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
        tacticCollectionId: string;
        tactic?: any;
    };
    id?: string | undefined;
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    callLogDocPath?: string | undefined;
}>;
export type TacticLog = z.infer<typeof tacticLogSchema>;
