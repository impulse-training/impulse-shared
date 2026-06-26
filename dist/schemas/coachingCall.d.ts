import { z } from "zod";
export declare const coachingCallStatusSchema: z.ZodEnum<["scheduled", "active", "completed", "missed", "cancelled"]>;
export declare const coachingCallSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    groupId: z.ZodString;
    slotId: z.ZodOptional<z.ZodString>;
    scheduledAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    durationMinutes: z.ZodDefault<z.ZodNumber>;
    status: z.ZodDefault<z.ZodEnum<["scheduled", "active", "completed", "missed", "cancelled"]>>;
    livekitRoomName: z.ZodString;
    participantIds: z.ZodArray<z.ZodString, "many">;
    joinedByIds: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    connectedParticipantIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    agentConnected: z.ZodOptional<z.ZodBoolean>;
    startedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    endedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    coachReadyAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    autoRingSentAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    reminderSentAt: z.ZodOptional<z.ZodObject<{
        dayBefore: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
        tenMinutes: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    }, "strip", z.ZodTypeAny, {
        dayBefore?: import("../types").Timestamp | undefined;
        tenMinutes?: import("../types").Timestamp | undefined;
    }, {
        dayBefore?: import("../types").Timestamp | undefined;
        tenMinutes?: import("../types").Timestamp | undefined;
    }>>;
    notifiedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    createdAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    updatedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
}, "strip", z.ZodTypeAny, {
    status: "scheduled" | "active" | "completed" | "missed" | "cancelled";
    livekitRoomName: string;
    durationMinutes: number;
    groupId: string;
    scheduledAt: import("../types").Timestamp;
    participantIds: string[];
    joinedByIds: string[];
    id?: string | undefined;
    createdAt?: import("../types").Timestamp | undefined;
    updatedAt?: import("../types").Timestamp | undefined;
    slotId?: string | undefined;
    connectedParticipantIds?: string[] | undefined;
    agentConnected?: boolean | undefined;
    startedAt?: import("../types").Timestamp | undefined;
    endedAt?: import("../types").Timestamp | undefined;
    coachReadyAt?: import("../types").Timestamp | undefined;
    autoRingSentAt?: import("../types").Timestamp | undefined;
    reminderSentAt?: {
        dayBefore?: import("../types").Timestamp | undefined;
        tenMinutes?: import("../types").Timestamp | undefined;
    } | undefined;
    notifiedAt?: import("../types").Timestamp | undefined;
}, {
    livekitRoomName: string;
    groupId: string;
    scheduledAt: import("../types").Timestamp;
    participantIds: string[];
    id?: string | undefined;
    createdAt?: import("../types").Timestamp | undefined;
    updatedAt?: import("../types").Timestamp | undefined;
    status?: "scheduled" | "active" | "completed" | "missed" | "cancelled" | undefined;
    durationMinutes?: number | undefined;
    slotId?: string | undefined;
    joinedByIds?: string[] | undefined;
    connectedParticipantIds?: string[] | undefined;
    agentConnected?: boolean | undefined;
    startedAt?: import("../types").Timestamp | undefined;
    endedAt?: import("../types").Timestamp | undefined;
    coachReadyAt?: import("../types").Timestamp | undefined;
    autoRingSentAt?: import("../types").Timestamp | undefined;
    reminderSentAt?: {
        dayBefore?: import("../types").Timestamp | undefined;
        tenMinutes?: import("../types").Timestamp | undefined;
    } | undefined;
    notifiedAt?: import("../types").Timestamp | undefined;
}>;
export type CoachingCall = z.infer<typeof coachingCallSchema>;
export type CoachingCallStatus = z.infer<typeof coachingCallStatusSchema>;
