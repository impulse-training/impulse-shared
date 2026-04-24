import { z } from "zod";
export declare const dayTotalsPromptLogSchema: z.ZodObject<{
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
    type: z.ZodLiteral<"day_totals_prompt">;
    isDisplayable: z.ZodLiteral<true>;
    data: z.ZodObject<{
        /** The dateString this prompt is for (typically the current day) */
        targetDateString: z.ZodString;
        /** Set when the user confirms their day totals */
        confirmedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        /** Set when the user requests a late-recap discussion with the AI */
        discussRequestedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    }, "strip", z.ZodTypeAny, {
        targetDateString: string;
        confirmedAt?: import("../../types").Timestamp | undefined;
        discussRequestedAt?: import("../../types").Timestamp | undefined;
    }, {
        targetDateString: string;
        confirmedAt?: import("../../types").Timestamp | undefined;
        discussRequestedAt?: import("../../types").Timestamp | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "day_totals_prompt";
    sessionId: string;
    dateString: string;
    userId: string;
    timestamp: import("../../types").Timestamp;
    isDisplayable: true;
    data: {
        targetDateString: string;
        confirmedAt?: import("../../types").Timestamp | undefined;
        discussRequestedAt?: import("../../types").Timestamp | undefined;
    };
    id?: string | undefined;
    tacticId?: string | undefined;
    behaviorIds?: string[] | undefined;
    impulseId?: string | undefined;
}, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "day_totals_prompt";
    sessionId: string;
    dateString: string;
    userId: string;
    timestamp: import("../../types").Timestamp;
    isDisplayable: true;
    data: {
        targetDateString: string;
        confirmedAt?: import("../../types").Timestamp | undefined;
        discussRequestedAt?: import("../../types").Timestamp | undefined;
    };
    id?: string | undefined;
    tacticId?: string | undefined;
    behaviorIds?: string[] | undefined;
    impulseId?: string | undefined;
}>;
export type DayTotalsPromptLog = z.infer<typeof dayTotalsPromptLogSchema>;
