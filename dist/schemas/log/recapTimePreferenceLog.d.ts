import { z } from "zod";
export declare const recapTimePreferenceLogSchema: z.ZodObject<{
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
    type: z.ZodLiteral<"recap_time_preference">;
    isDisplayable: z.ZodLiteral<true>;
    data: z.ZodObject<{
        /** The log that triggered this recap time preference prompt */
        triggeredByLogId: z.ZodString;
        /** Hour the user selected (0-23) */
        hour: z.ZodOptional<z.ZodNumber>;
        /** Minute the user selected (0-59) */
        minute: z.ZodOptional<z.ZodNumber>;
        /** When the user responded to this prompt */
        respondedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    }, "strip", z.ZodTypeAny, {
        triggeredByLogId: string;
        respondedAt?: import("../../types").Timestamp | undefined;
        hour?: number | undefined;
        minute?: number | undefined;
    }, {
        triggeredByLogId: string;
        respondedAt?: import("../../types").Timestamp | undefined;
        hour?: number | undefined;
        minute?: number | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "recap_time_preference";
    sessionId: string;
    dateString: string;
    userId: string;
    timestamp: import("../../types").Timestamp;
    isDisplayable: true;
    data: {
        triggeredByLogId: string;
        respondedAt?: import("../../types").Timestamp | undefined;
        hour?: number | undefined;
        minute?: number | undefined;
    };
    id?: string | undefined;
    tacticId?: string | undefined;
    behaviorIds?: string[] | undefined;
    impulseId?: string | undefined;
}, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "recap_time_preference";
    sessionId: string;
    dateString: string;
    userId: string;
    timestamp: import("../../types").Timestamp;
    isDisplayable: true;
    data: {
        triggeredByLogId: string;
        respondedAt?: import("../../types").Timestamp | undefined;
        hour?: number | undefined;
        minute?: number | undefined;
    };
    id?: string | undefined;
    tacticId?: string | undefined;
    behaviorIds?: string[] | undefined;
    impulseId?: string | undefined;
}>;
export type RecapTimePreferenceLog = z.infer<typeof recapTimePreferenceLogSchema>;
