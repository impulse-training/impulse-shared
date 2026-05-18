import { z } from "zod";
export declare const coachBookingPromptLogSchema: z.ZodObject<{
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
    type: z.ZodLiteral<"coach_booking_prompt">;
    isDisplayable: z.ZodLiteral<true>;
    data: z.ZodObject<{
        slots: z.ZodArray<z.ZodObject<{
            dayOfWeek: z.ZodNumber;
            startTime: z.ZodString;
            endTime: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            dayOfWeek: number;
            startTime: string;
            endTime: string;
        }, {
            dayOfWeek: number;
            startTime: string;
            endTime: string;
        }>, "many">;
        coachTimezone: z.ZodString;
        selectedSlot: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            dayOfWeek: z.ZodNumber;
            startTime: z.ZodString;
            endTime: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            dayOfWeek: number;
            startTime: string;
            endTime: string;
        }, {
            dayOfWeek: number;
            startTime: string;
            endTime: string;
        }>>>;
        respondedAt: z.ZodOptional<z.ZodNullable<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>>;
        taskId: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        slots: {
            dayOfWeek: number;
            startTime: string;
            endTime: string;
        }[];
        coachTimezone: string;
        respondedAt?: import("../../types").Timestamp | null | undefined;
        taskId?: string | undefined;
        selectedSlot?: {
            dayOfWeek: number;
            startTime: string;
            endTime: string;
        } | null | undefined;
    }, {
        slots: {
            dayOfWeek: number;
            startTime: string;
            endTime: string;
        }[];
        coachTimezone: string;
        respondedAt?: import("../../types").Timestamp | null | undefined;
        taskId?: string | undefined;
        selectedSlot?: {
            dayOfWeek: number;
            startTime: string;
            endTime: string;
        } | null | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "coach_booking_prompt";
    sessionId: string;
    dateString: string;
    userId: string;
    timestamp: import("../../types").Timestamp;
    isDisplayable: true;
    data: {
        slots: {
            dayOfWeek: number;
            startTime: string;
            endTime: string;
        }[];
        coachTimezone: string;
        respondedAt?: import("../../types").Timestamp | null | undefined;
        taskId?: string | undefined;
        selectedSlot?: {
            dayOfWeek: number;
            startTime: string;
            endTime: string;
        } | null | undefined;
    };
    id?: string | undefined;
    behaviorIds?: string[] | undefined;
    tacticId?: string | undefined;
    impulseId?: string | undefined;
}, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "coach_booking_prompt";
    sessionId: string;
    dateString: string;
    userId: string;
    timestamp: import("../../types").Timestamp;
    isDisplayable: true;
    data: {
        slots: {
            dayOfWeek: number;
            startTime: string;
            endTime: string;
        }[];
        coachTimezone: string;
        respondedAt?: import("../../types").Timestamp | null | undefined;
        taskId?: string | undefined;
        selectedSlot?: {
            dayOfWeek: number;
            startTime: string;
            endTime: string;
        } | null | undefined;
    };
    id?: string | undefined;
    behaviorIds?: string[] | undefined;
    tacticId?: string | undefined;
    impulseId?: string | undefined;
}>;
export type CoachBookingPromptLog = z.infer<typeof coachBookingPromptLogSchema>;
