import { z } from "zod";
export declare const notifySupportGroupLogSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    updatedAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    userId: z.ZodString;
    timestamp: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    dateString: z.ZodString;
    tacticId: z.ZodOptional<z.ZodString>;
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
    type: z.ZodLiteral<"notify_support_group">;
    isDisplayable: z.ZodLiteral<true>;
    data: z.ZodObject<{
        message: z.ZodAny;
        supportGroupsById: z.ZodRecord<z.ZodString, z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            membersById: z.ZodRecord<z.ZodString, z.ZodObject<{
                userId: z.ZodString;
                userProfile: z.ZodObject<{
                    id: z.ZodOptional<z.ZodString>;
                    invitationCode: z.ZodString;
                    emojiId: z.ZodOptional<z.ZodObject<{
                        emoji: z.ZodString;
                        name: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        name: string;
                        emoji: string;
                    }, {
                        name: string;
                        emoji: string;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    invitationCode: string;
                    id?: string | undefined;
                    emojiId?: {
                        name: string;
                        emoji: string;
                    } | undefined;
                }, {
                    invitationCode: string;
                    id?: string | undefined;
                    emojiId?: {
                        name: string;
                        emoji: string;
                    } | undefined;
                }>;
            }, "strip", z.ZodTypeAny, {
                userId: string;
                userProfile: {
                    invitationCode: string;
                    id?: string | undefined;
                    emojiId?: {
                        name: string;
                        emoji: string;
                    } | undefined;
                };
            }, {
                userId: string;
                userProfile: {
                    invitationCode: string;
                    id?: string | undefined;
                    emojiId?: {
                        name: string;
                        emoji: string;
                    } | undefined;
                };
            }>>;
        }, "strip", z.ZodTypeAny, {
            id: string;
            name: string;
            membersById: Record<string, {
                userId: string;
                userProfile: {
                    invitationCode: string;
                    id?: string | undefined;
                    emojiId?: {
                        name: string;
                        emoji: string;
                    } | undefined;
                };
            }>;
        }, {
            id: string;
            name: string;
            membersById: Record<string, {
                userId: string;
                userProfile: {
                    invitationCode: string;
                    id?: string | undefined;
                    emojiId?: {
                        name: string;
                        emoji: string;
                    } | undefined;
                };
            }>;
        }>>;
    }, "strip", z.ZodTypeAny, {
        supportGroupsById: Record<string, {
            id: string;
            name: string;
            membersById: Record<string, {
                userId: string;
                userProfile: {
                    invitationCode: string;
                    id?: string | undefined;
                    emojiId?: {
                        name: string;
                        emoji: string;
                    } | undefined;
                };
            }>;
        }>;
        message?: any;
    }, {
        supportGroupsById: Record<string, {
            id: string;
            name: string;
            membersById: Record<string, {
                userId: string;
                userProfile: {
                    invitationCode: string;
                    id?: string | undefined;
                    emojiId?: {
                        name: string;
                        emoji: string;
                    } | undefined;
                };
            }>;
        }>;
        message?: any;
    }>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "notify_support_group";
    userId: string;
    dateString: string;
    isDisplayable: true;
    data: {
        supportGroupsById: Record<string, {
            id: string;
            name: string;
            membersById: Record<string, {
                userId: string;
                userProfile: {
                    invitationCode: string;
                    id?: string | undefined;
                    emojiId?: {
                        name: string;
                        emoji: string;
                    } | undefined;
                };
            }>;
        }>;
        message?: any;
    };
    id?: string | undefined;
    timestamp?: import("../../types").Timestamp | undefined;
    tacticId?: string | undefined;
    callLogDocPath?: string | undefined;
    replyTactic?: {
        currentStepIndex: number;
        tactic?: any;
    } | undefined;
}, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "notify_support_group";
    userId: string;
    dateString: string;
    isDisplayable: true;
    data: {
        supportGroupsById: Record<string, {
            id: string;
            name: string;
            membersById: Record<string, {
                userId: string;
                userProfile: {
                    invitationCode: string;
                    id?: string | undefined;
                    emojiId?: {
                        name: string;
                        emoji: string;
                    } | undefined;
                };
            }>;
        }>;
        message?: any;
    };
    id?: string | undefined;
    timestamp?: import("../../types").Timestamp | undefined;
    tacticId?: string | undefined;
    callLogDocPath?: string | undefined;
    replyTactic?: {
        currentStepIndex: number;
        tactic?: any;
    } | undefined;
}>;
export type NotifySupportGroupLog = z.infer<typeof notifySupportGroupLogSchema>;
