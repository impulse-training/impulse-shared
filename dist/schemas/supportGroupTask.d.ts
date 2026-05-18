import { z } from "zod";
export declare const supportGroupTaskStatusSchema: z.ZodEnum<["open", "completed"]>;
export declare const supportGroupTaskBaseSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    title: z.ZodString;
    status: z.ZodDefault<z.ZodEnum<["open", "completed"]>>;
    createdBy: z.ZodString;
    assignedTo: z.ZodString;
    groupId: z.ZodString;
    logId: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    updatedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    completedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    status: "completed" | "open";
    title: string;
    groupId: string;
    createdBy: string;
    assignedTo: string;
    id?: string | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    logId?: string | undefined;
}, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    title: string;
    groupId: string;
    createdBy: string;
    assignedTo: string;
    id?: string | undefined;
    status?: "completed" | "open" | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    logId?: string | undefined;
}>;
export declare const coachBookingTaskSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    title: z.ZodString;
    status: z.ZodDefault<z.ZodEnum<["open", "completed"]>>;
    createdBy: z.ZodString;
    assignedTo: z.ZodString;
    groupId: z.ZodString;
    logId: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    updatedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    completedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
} & {
    type: z.ZodLiteral<"coach_booking">;
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
        respondedAt: z.ZodOptional<z.ZodNullable<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>>;
    }, "strip", z.ZodTypeAny, {
        slots: {
            dayOfWeek: number;
            startTime: string;
            endTime: string;
        }[];
        coachTimezone: string;
        respondedAt?: import("../types").Timestamp | null | undefined;
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
        respondedAt?: import("../types").Timestamp | null | undefined;
        selectedSlot?: {
            dayOfWeek: number;
            startTime: string;
            endTime: string;
        } | null | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "coach_booking";
    status: "completed" | "open";
    title: string;
    groupId: string;
    data: {
        slots: {
            dayOfWeek: number;
            startTime: string;
            endTime: string;
        }[];
        coachTimezone: string;
        respondedAt?: import("../types").Timestamp | null | undefined;
        selectedSlot?: {
            dayOfWeek: number;
            startTime: string;
            endTime: string;
        } | null | undefined;
    };
    createdBy: string;
    assignedTo: string;
    id?: string | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    logId?: string | undefined;
}, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "coach_booking";
    title: string;
    groupId: string;
    data: {
        slots: {
            dayOfWeek: number;
            startTime: string;
            endTime: string;
        }[];
        coachTimezone: string;
        respondedAt?: import("../types").Timestamp | null | undefined;
        selectedSlot?: {
            dayOfWeek: number;
            startTime: string;
            endTime: string;
        } | null | undefined;
    };
    createdBy: string;
    assignedTo: string;
    id?: string | undefined;
    status?: "completed" | "open" | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    logId?: string | undefined;
}>;
export declare const supportGroupTaskSchema: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    title: z.ZodString;
    status: z.ZodDefault<z.ZodEnum<["open", "completed"]>>;
    createdBy: z.ZodString;
    assignedTo: z.ZodString;
    groupId: z.ZodString;
    logId: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    updatedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    completedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
} & {
    type: z.ZodLiteral<"coach_booking">;
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
        respondedAt: z.ZodOptional<z.ZodNullable<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>>;
    }, "strip", z.ZodTypeAny, {
        slots: {
            dayOfWeek: number;
            startTime: string;
            endTime: string;
        }[];
        coachTimezone: string;
        respondedAt?: import("../types").Timestamp | null | undefined;
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
        respondedAt?: import("../types").Timestamp | null | undefined;
        selectedSlot?: {
            dayOfWeek: number;
            startTime: string;
            endTime: string;
        } | null | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "coach_booking";
    status: "completed" | "open";
    title: string;
    groupId: string;
    data: {
        slots: {
            dayOfWeek: number;
            startTime: string;
            endTime: string;
        }[];
        coachTimezone: string;
        respondedAt?: import("../types").Timestamp | null | undefined;
        selectedSlot?: {
            dayOfWeek: number;
            startTime: string;
            endTime: string;
        } | null | undefined;
    };
    createdBy: string;
    assignedTo: string;
    id?: string | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    logId?: string | undefined;
}, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    type: "coach_booking";
    title: string;
    groupId: string;
    data: {
        slots: {
            dayOfWeek: number;
            startTime: string;
            endTime: string;
        }[];
        coachTimezone: string;
        respondedAt?: import("../types").Timestamp | null | undefined;
        selectedSlot?: {
            dayOfWeek: number;
            startTime: string;
            endTime: string;
        } | null | undefined;
    };
    createdBy: string;
    assignedTo: string;
    id?: string | undefined;
    status?: "completed" | "open" | undefined;
    completedAt?: import("../types").Timestamp | undefined;
    logId?: string | undefined;
}>]>;
export type SupportGroupTask = z.infer<typeof supportGroupTaskSchema>;
export type CoachBookingTask = z.infer<typeof coachBookingTaskSchema>;
export type SupportGroupTaskStatus = z.infer<typeof supportGroupTaskStatusSchema>;
