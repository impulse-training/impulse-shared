import z from "zod";
export declare const notifySupportGroupLogSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    updatedAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    userId: z.ZodString;
    timestamp: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    dateString: z.ZodString;
    tacticId: z.ZodOptional<z.ZodString>;
    behaviorIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    callLogDocPath: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"notify_support_group">;
    isDisplayable: z.ZodLiteral<true>;
    data: z.ZodObject<{
        message: z.ZodAny;
        emojiId: z.ZodOptional<z.ZodObject<{
            emoji: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            emoji: string;
        }, {
            emoji: string;
        }>>;
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
                    }, "strip", z.ZodTypeAny, {
                        emoji: string;
                    }, {
                        emoji: string;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    invitationCode: string;
                    id?: string | undefined;
                    emojiId?: {
                        emoji: string;
                    } | undefined;
                }, {
                    invitationCode: string;
                    id?: string | undefined;
                    emojiId?: {
                        emoji: string;
                    } | undefined;
                }>;
            }, "strip", z.ZodTypeAny, {
                userId: string;
                userProfile: {
                    invitationCode: string;
                    id?: string | undefined;
                    emojiId?: {
                        emoji: string;
                    } | undefined;
                };
            }, {
                userId: string;
                userProfile: {
                    invitationCode: string;
                    id?: string | undefined;
                    emojiId?: {
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
                        emoji: string;
                    } | undefined;
                };
            }>;
        }>;
        message?: any;
        emojiId?: {
            emoji: string;
        } | undefined;
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
                        emoji: string;
                    } | undefined;
                };
            }>;
        }>;
        message?: any;
        emojiId?: {
            emoji: string;
        } | undefined;
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
                        emoji: string;
                    } | undefined;
                };
            }>;
        }>;
        message?: any;
        emojiId?: {
            emoji: string;
        } | undefined;
    };
    id?: string | undefined;
    timestamp?: import("../../types").Timestamp | undefined;
    tacticId?: string | undefined;
    behaviorIds?: string[] | undefined;
    callLogDocPath?: string | undefined;
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
                        emoji: string;
                    } | undefined;
                };
            }>;
        }>;
        message?: any;
        emojiId?: {
            emoji: string;
        } | undefined;
    };
    id?: string | undefined;
    timestamp?: import("../../types").Timestamp | undefined;
    tacticId?: string | undefined;
    behaviorIds?: string[] | undefined;
    callLogDocPath?: string | undefined;
}>;
export type NotifySupportGroupLog = z.infer<typeof notifySupportGroupLogSchema>;
