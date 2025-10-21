import { z } from "zod";
export declare const linkLogSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    updatedAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    userId: z.ZodString;
    timestamp: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    dateString: z.ZodString;
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
    type: z.ZodLiteral<"link">;
    isDisplayable: z.ZodLiteral<true>;
    text: z.ZodString;
    link: z.ZodString;
    buttonText: z.ZodString;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    text: string;
    type: "link";
    userId: string;
    link: string;
    dateString: string;
    isDisplayable: true;
    buttonText: string;
    id?: string | undefined;
    timestamp?: import("../../types").Timestamp | undefined;
    callLogDocPath?: string | undefined;
    replyTactic?: {
        currentStepIndex: number;
        tactic?: any;
    } | undefined;
}, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    text: string;
    type: "link";
    userId: string;
    link: string;
    dateString: string;
    isDisplayable: true;
    buttonText: string;
    id?: string | undefined;
    timestamp?: import("../../types").Timestamp | undefined;
    callLogDocPath?: string | undefined;
    replyTactic?: {
        currentStepIndex: number;
        tactic?: any;
    } | undefined;
}>;
export type LinkLog = z.infer<typeof linkLogSchema>;
