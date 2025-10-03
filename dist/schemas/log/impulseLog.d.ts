import { z } from "zod";
export declare const impulseLogSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
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
    type: z.ZodLiteral<"impulse_button_pressed">;
    isDisplayable: z.ZodLiteral<true>;
}, "strip", z.ZodTypeAny, {
    type: "impulse_button_pressed";
    userId: string;
    dateString: string;
    isDisplayable: true;
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    id?: string | undefined;
    timestamp?: import("../../types").Timestamp | undefined;
    callLogDocPath?: string | undefined;
    replyTactic?: {
        currentStepIndex: number;
        tactic?: any;
    } | undefined;
}, {
    type: "impulse_button_pressed";
    userId: string;
    dateString: string;
    isDisplayable: true;
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    id?: string | undefined;
    timestamp?: import("../../types").Timestamp | undefined;
    callLogDocPath?: string | undefined;
    replyTactic?: {
        currentStepIndex: number;
        tactic?: any;
    } | undefined;
}>;
export type ImpulseLog = z.infer<typeof impulseLogSchema>;
