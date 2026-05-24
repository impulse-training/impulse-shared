import { z } from "zod";
export declare const shortcutSetupIntroLogSchema: z.ZodObject<{
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
    respondingToLogId: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"shortcut_setup_intro">;
    isDisplayable: z.ZodLiteral<true>;
    data: z.ZodObject<{
        shortcutType: z.ZodEnum<["back_tap", "lock_screen_widget"]>;
        message: z.ZodString;
        respondedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        choice: z.ZodOptional<z.ZodEnum<["voice", "text", "skip"]>>;
    }, "strip", z.ZodTypeAny, {
        message: string;
        shortcutType: "back_tap" | "lock_screen_widget";
        respondedAt?: import("../../types").Timestamp | undefined;
        choice?: "text" | "voice" | "skip" | undefined;
    }, {
        message: string;
        shortcutType: "back_tap" | "lock_screen_widget";
        respondedAt?: import("../../types").Timestamp | undefined;
        choice?: "text" | "voice" | "skip" | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "shortcut_setup_intro";
    sessionId: string;
    dateString: string;
    userId: string;
    timestamp: import("../../types").Timestamp;
    isDisplayable: true;
    data: {
        message: string;
        shortcutType: "back_tap" | "lock_screen_widget";
        respondedAt?: import("../../types").Timestamp | undefined;
        choice?: "text" | "voice" | "skip" | undefined;
    };
    id?: string | undefined;
    behaviorIds?: string[] | undefined;
    tacticId?: string | undefined;
    impulseId?: string | undefined;
    respondingToLogId?: string | undefined;
}, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "shortcut_setup_intro";
    sessionId: string;
    dateString: string;
    userId: string;
    timestamp: import("../../types").Timestamp;
    isDisplayable: true;
    data: {
        message: string;
        shortcutType: "back_tap" | "lock_screen_widget";
        respondedAt?: import("../../types").Timestamp | undefined;
        choice?: "text" | "voice" | "skip" | undefined;
    };
    id?: string | undefined;
    behaviorIds?: string[] | undefined;
    tacticId?: string | undefined;
    impulseId?: string | undefined;
    respondingToLogId?: string | undefined;
}>;
export type ShortcutSetupIntroLog = z.infer<typeof shortcutSetupIntroLogSchema>;
