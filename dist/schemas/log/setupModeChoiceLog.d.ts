import { z } from "zod";
export declare const setupModeChoiceLogSchema: z.ZodObject<{
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
    type: z.ZodLiteral<"setup_mode_choice">;
    isDisplayable: z.ZodLiteral<true>;
    data: z.ZodObject<{
        respondedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        choice: z.ZodOptional<z.ZodEnum<["voice", "text"]>>;
    }, "strip", z.ZodTypeAny, {
        respondedAt?: import("../../types").Timestamp | undefined;
        choice?: "text" | "voice" | undefined;
    }, {
        respondedAt?: import("../../types").Timestamp | undefined;
        choice?: "text" | "voice" | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "setup_mode_choice";
    sessionId: string;
    dateString: string;
    userId: string;
    timestamp: import("../../types").Timestamp;
    isDisplayable: true;
    data: {
        respondedAt?: import("../../types").Timestamp | undefined;
        choice?: "text" | "voice" | undefined;
    };
    id?: string | undefined;
    tacticId?: string | undefined;
    behaviorIds?: string[] | undefined;
    impulseId?: string | undefined;
}, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "setup_mode_choice";
    sessionId: string;
    dateString: string;
    userId: string;
    timestamp: import("../../types").Timestamp;
    isDisplayable: true;
    data: {
        respondedAt?: import("../../types").Timestamp | undefined;
        choice?: "text" | "voice" | undefined;
    };
    id?: string | undefined;
    tacticId?: string | undefined;
    behaviorIds?: string[] | undefined;
    impulseId?: string | undefined;
}>;
export type SetupModeChoiceLog = z.infer<typeof setupModeChoiceLogSchema>;
