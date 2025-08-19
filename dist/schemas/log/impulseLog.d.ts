import { z } from "zod";
export declare const impulseLogSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    userId: z.ZodString;
    timestamp: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    dateString: z.ZodString;
    callLogDocPath: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"impulse_button_pressed">;
    isDisplayable: z.ZodLiteral<true>;
}, "strip", z.ZodTypeAny, {
    type: "impulse_button_pressed";
    dateString: string;
    userId: string;
    timestamp: import("../../types").Timestamp;
    isDisplayable: true;
    id?: string | undefined;
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    callLogDocPath?: string | undefined;
}, {
    type: "impulse_button_pressed";
    dateString: string;
    userId: string;
    timestamp: import("../../types").Timestamp;
    isDisplayable: true;
    id?: string | undefined;
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    callLogDocPath?: string | undefined;
}>;
export type ImpulseLog = z.infer<typeof impulseLogSchema>;
