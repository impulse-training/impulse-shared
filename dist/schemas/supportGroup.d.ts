import { z } from "zod";
export declare const supportGroupPermissionsSchema: z.ZodObject<{
    dayOutcomes: z.ZodDefault<z.ZodBoolean>;
    threads: z.ZodDefault<z.ZodBoolean>;
    summary: z.ZodDefault<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    summary: boolean;
    dayOutcomes: boolean;
    threads: boolean;
}, {
    summary?: boolean | undefined;
    dayOutcomes?: boolean | undefined;
    threads?: boolean | undefined;
}>;
export type SupportGroupPermissions = z.infer<typeof supportGroupPermissionsSchema>;
export declare const supportGroupNotificationPreferencesSchema: z.ZodObject<{
    messages: z.ZodDefault<z.ZodBoolean>;
    plan: z.ZodDefault<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    plan: boolean;
    messages: boolean;
}, {
    plan?: boolean | undefined;
    messages?: boolean | undefined;
}>;
export type SupportGroupNotificationPreferences = z.infer<typeof supportGroupNotificationPreferencesSchema>;
export declare const supportGroupMemberSchema: z.ZodObject<{
    userId: z.ZodString;
    userProfile: z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        invitationCode: z.ZodString;
        emojiId: z.ZodOptional<z.ZodObject<{
            color: z.ZodString;
            emoji: z.ZodString;
            name: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            color: string;
            emoji: string;
            name?: string | undefined;
        }, {
            color: string;
            emoji: string;
            name?: string | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        invitationCode: string;
        id?: string | undefined;
        emojiId?: {
            color: string;
            emoji: string;
            name?: string | undefined;
        } | undefined;
    }, {
        invitationCode: string;
        id?: string | undefined;
        emojiId?: {
            color: string;
            emoji: string;
            name?: string | undefined;
        } | undefined;
    }>;
    permissions: z.ZodOptional<z.ZodObject<{
        dayOutcomes: z.ZodDefault<z.ZodBoolean>;
        threads: z.ZodDefault<z.ZodBoolean>;
        summary: z.ZodDefault<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        summary: boolean;
        dayOutcomes: boolean;
        threads: boolean;
    }, {
        summary?: boolean | undefined;
        dayOutcomes?: boolean | undefined;
        threads?: boolean | undefined;
    }>>;
    notificationPreferences: z.ZodOptional<z.ZodObject<{
        messages: z.ZodDefault<z.ZodBoolean>;
        plan: z.ZodDefault<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        plan: boolean;
        messages: boolean;
    }, {
        plan?: boolean | undefined;
        messages?: boolean | undefined;
    }>>;
    currentStreak: z.ZodOptional<z.ZodObject<{
        streakStart: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
        color: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        color: string;
        streakStart?: import("../types").Timestamp | undefined;
    }, {
        color: string;
        streakStart?: import("../types").Timestamp | undefined;
    }>>;
    joinedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
}, "strip", z.ZodTypeAny, {
    userId: string;
    userProfile: {
        invitationCode: string;
        id?: string | undefined;
        emojiId?: {
            color: string;
            emoji: string;
            name?: string | undefined;
        } | undefined;
    };
    permissions?: {
        summary: boolean;
        dayOutcomes: boolean;
        threads: boolean;
    } | undefined;
    notificationPreferences?: {
        plan: boolean;
        messages: boolean;
    } | undefined;
    currentStreak?: {
        color: string;
        streakStart?: import("../types").Timestamp | undefined;
    } | undefined;
    joinedAt?: import("../types").Timestamp | undefined;
}, {
    userId: string;
    userProfile: {
        invitationCode: string;
        id?: string | undefined;
        emojiId?: {
            color: string;
            emoji: string;
            name?: string | undefined;
        } | undefined;
    };
    permissions?: {
        summary?: boolean | undefined;
        dayOutcomes?: boolean | undefined;
        threads?: boolean | undefined;
    } | undefined;
    notificationPreferences?: {
        plan?: boolean | undefined;
        messages?: boolean | undefined;
    } | undefined;
    currentStreak?: {
        color: string;
        streakStart?: import("../types").Timestamp | undefined;
    } | undefined;
    joinedAt?: import("../types").Timestamp | undefined;
}>;
export declare const supportGroupSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    ownerId: z.ZodString;
    coverPhoto: z.ZodOptional<z.ZodObject<{
        createdAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
        updatedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
        uri: z.ZodString;
        storagePath: z.ZodString;
        contentType: z.ZodString;
        title: z.ZodOptional<z.ZodString>;
        sizeBytes: z.ZodOptional<z.ZodNumber>;
        metadata: z.ZodOptional<z.ZodObject<{
            width: z.ZodOptional<z.ZodNumber>;
            height: z.ZodOptional<z.ZodNumber>;
            durationMs: z.ZodOptional<z.ZodNumber>;
            transcript: z.ZodOptional<z.ZodString>;
            meterings: z.ZodOptional<z.ZodArray<z.ZodObject<{
                db: z.ZodNumber;
                timestampMs: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                db: number;
                timestampMs?: number | undefined;
            }, {
                db: number;
                timestampMs?: number | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            width?: number | undefined;
            height?: number | undefined;
            durationMs?: number | undefined;
            transcript?: string | undefined;
            meterings?: {
                db: number;
                timestampMs?: number | undefined;
            }[] | undefined;
        }, {
            width?: number | undefined;
            height?: number | undefined;
            durationMs?: number | undefined;
            transcript?: string | undefined;
            meterings?: {
                db: number;
                timestampMs?: number | undefined;
            }[] | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        uri: string;
        storagePath: string;
        contentType: string;
        createdAt?: import("../types").Timestamp | undefined;
        updatedAt?: import("../types").Timestamp | undefined;
        title?: string | undefined;
        sizeBytes?: number | undefined;
        metadata?: {
            width?: number | undefined;
            height?: number | undefined;
            durationMs?: number | undefined;
            transcript?: string | undefined;
            meterings?: {
                db: number;
                timestampMs?: number | undefined;
            }[] | undefined;
        } | undefined;
    }, {
        uri: string;
        storagePath: string;
        contentType: string;
        createdAt?: import("../types").Timestamp | undefined;
        updatedAt?: import("../types").Timestamp | undefined;
        title?: string | undefined;
        sizeBytes?: number | undefined;
        metadata?: {
            width?: number | undefined;
            height?: number | undefined;
            durationMs?: number | undefined;
            transcript?: string | undefined;
            meterings?: {
                db: number;
                timestampMs?: number | undefined;
            }[] | undefined;
        } | undefined;
    }>>;
    membersById: z.ZodRecord<z.ZodString, z.ZodObject<{
        userId: z.ZodString;
        userProfile: z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            invitationCode: z.ZodString;
            emojiId: z.ZodOptional<z.ZodObject<{
                color: z.ZodString;
                emoji: z.ZodString;
                name: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                color: string;
                emoji: string;
                name?: string | undefined;
            }, {
                color: string;
                emoji: string;
                name?: string | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            invitationCode: string;
            id?: string | undefined;
            emojiId?: {
                color: string;
                emoji: string;
                name?: string | undefined;
            } | undefined;
        }, {
            invitationCode: string;
            id?: string | undefined;
            emojiId?: {
                color: string;
                emoji: string;
                name?: string | undefined;
            } | undefined;
        }>;
        permissions: z.ZodOptional<z.ZodObject<{
            dayOutcomes: z.ZodDefault<z.ZodBoolean>;
            threads: z.ZodDefault<z.ZodBoolean>;
            summary: z.ZodDefault<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            summary: boolean;
            dayOutcomes: boolean;
            threads: boolean;
        }, {
            summary?: boolean | undefined;
            dayOutcomes?: boolean | undefined;
            threads?: boolean | undefined;
        }>>;
        notificationPreferences: z.ZodOptional<z.ZodObject<{
            messages: z.ZodDefault<z.ZodBoolean>;
            plan: z.ZodDefault<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            plan: boolean;
            messages: boolean;
        }, {
            plan?: boolean | undefined;
            messages?: boolean | undefined;
        }>>;
        currentStreak: z.ZodOptional<z.ZodObject<{
            streakStart: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
            color: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            color: string;
            streakStart?: import("../types").Timestamp | undefined;
        }, {
            color: string;
            streakStart?: import("../types").Timestamp | undefined;
        }>>;
        joinedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    }, "strip", z.ZodTypeAny, {
        userId: string;
        userProfile: {
            invitationCode: string;
            id?: string | undefined;
            emojiId?: {
                color: string;
                emoji: string;
                name?: string | undefined;
            } | undefined;
        };
        permissions?: {
            summary: boolean;
            dayOutcomes: boolean;
            threads: boolean;
        } | undefined;
        notificationPreferences?: {
            plan: boolean;
            messages: boolean;
        } | undefined;
        currentStreak?: {
            color: string;
            streakStart?: import("../types").Timestamp | undefined;
        } | undefined;
        joinedAt?: import("../types").Timestamp | undefined;
    }, {
        userId: string;
        userProfile: {
            invitationCode: string;
            id?: string | undefined;
            emojiId?: {
                color: string;
                emoji: string;
                name?: string | undefined;
            } | undefined;
        };
        permissions?: {
            summary?: boolean | undefined;
            dayOutcomes?: boolean | undefined;
            threads?: boolean | undefined;
        } | undefined;
        notificationPreferences?: {
            plan?: boolean | undefined;
            messages?: boolean | undefined;
        } | undefined;
        currentStreak?: {
            color: string;
            streakStart?: import("../types").Timestamp | undefined;
        } | undefined;
        joinedAt?: import("../types").Timestamp | undefined;
    }>>;
    unreadMessageCountsById: z.ZodRecord<z.ZodString, z.ZodNumber>;
    memberCount: z.ZodDefault<z.ZodNumber>;
    image: z.ZodObject<{
        createdAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
        updatedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
        uri: z.ZodString;
        storagePath: z.ZodString;
        contentType: z.ZodString;
        title: z.ZodOptional<z.ZodString>;
        sizeBytes: z.ZodOptional<z.ZodNumber>;
        metadata: z.ZodOptional<z.ZodObject<{
            width: z.ZodOptional<z.ZodNumber>;
            height: z.ZodOptional<z.ZodNumber>;
            durationMs: z.ZodOptional<z.ZodNumber>;
            transcript: z.ZodOptional<z.ZodString>;
            meterings: z.ZodOptional<z.ZodArray<z.ZodObject<{
                db: z.ZodNumber;
                timestampMs: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                db: number;
                timestampMs?: number | undefined;
            }, {
                db: number;
                timestampMs?: number | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            width?: number | undefined;
            height?: number | undefined;
            durationMs?: number | undefined;
            transcript?: string | undefined;
            meterings?: {
                db: number;
                timestampMs?: number | undefined;
            }[] | undefined;
        }, {
            width?: number | undefined;
            height?: number | undefined;
            durationMs?: number | undefined;
            transcript?: string | undefined;
            meterings?: {
                db: number;
                timestampMs?: number | undefined;
            }[] | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        uri: string;
        storagePath: string;
        contentType: string;
        createdAt?: import("../types").Timestamp | undefined;
        updatedAt?: import("../types").Timestamp | undefined;
        title?: string | undefined;
        sizeBytes?: number | undefined;
        metadata?: {
            width?: number | undefined;
            height?: number | undefined;
            durationMs?: number | undefined;
            transcript?: string | undefined;
            meterings?: {
                db: number;
                timestampMs?: number | undefined;
            }[] | undefined;
        } | undefined;
    }, {
        uri: string;
        storagePath: string;
        contentType: string;
        createdAt?: import("../types").Timestamp | undefined;
        updatedAt?: import("../types").Timestamp | undefined;
        title?: string | undefined;
        sizeBytes?: number | undefined;
        metadata?: {
            width?: number | undefined;
            height?: number | undefined;
            durationMs?: number | undefined;
            transcript?: string | undefined;
            meterings?: {
                db: number;
                timestampMs?: number | undefined;
            }[] | undefined;
        } | undefined;
    }>;
    tacticCollections: z.ZodArray<z.ZodType<import("../utils").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../utils").DocumentReferenceLike<unknown>>, "many">;
    isPublic: z.ZodOptional<z.ZodBoolean>;
    isTemplate: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    inviteCode: z.ZodOptional<z.ZodString>;
    lastMessage: z.ZodOptional<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        createdAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
        updatedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
        userId: z.ZodString;
        timestamp: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
        dateString: z.ZodString;
        callLogDocPath: z.ZodOptional<z.ZodString>;
        isDisplayable: z.ZodLiteral<true>;
        data: z.ZodObject<{
            message: z.ZodAny;
        }, "strip", z.ZodTypeAny, {
            message?: any;
        }, {
            message?: any;
        }>;
    } & {
        type: z.ZodLiteral<"user_message">;
        audioAttachment: z.ZodOptional<z.ZodObject<{
            createdAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
            updatedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
            uri: z.ZodString;
            storagePath: z.ZodString;
            contentType: z.ZodString;
            title: z.ZodOptional<z.ZodString>;
            sizeBytes: z.ZodOptional<z.ZodNumber>;
            metadata: z.ZodOptional<z.ZodObject<{
                width: z.ZodOptional<z.ZodNumber>;
                height: z.ZodOptional<z.ZodNumber>;
                durationMs: z.ZodOptional<z.ZodNumber>;
                transcript: z.ZodOptional<z.ZodString>;
                meterings: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    db: z.ZodNumber;
                    timestampMs: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    db: number;
                    timestampMs?: number | undefined;
                }, {
                    db: number;
                    timestampMs?: number | undefined;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                width?: number | undefined;
                height?: number | undefined;
                durationMs?: number | undefined;
                transcript?: string | undefined;
                meterings?: {
                    db: number;
                    timestampMs?: number | undefined;
                }[] | undefined;
            }, {
                width?: number | undefined;
                height?: number | undefined;
                durationMs?: number | undefined;
                transcript?: string | undefined;
                meterings?: {
                    db: number;
                    timestampMs?: number | undefined;
                }[] | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            uri: string;
            storagePath: string;
            contentType: string;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            title?: string | undefined;
            sizeBytes?: number | undefined;
            metadata?: {
                width?: number | undefined;
                height?: number | undefined;
                durationMs?: number | undefined;
                transcript?: string | undefined;
                meterings?: {
                    db: number;
                    timestampMs?: number | undefined;
                }[] | undefined;
            } | undefined;
        }, {
            uri: string;
            storagePath: string;
            contentType: string;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            title?: string | undefined;
            sizeBytes?: number | undefined;
            metadata?: {
                width?: number | undefined;
                height?: number | undefined;
                durationMs?: number | undefined;
                transcript?: string | undefined;
                meterings?: {
                    db: number;
                    timestampMs?: number | undefined;
                }[] | undefined;
            } | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        type: "user_message";
        userId: string;
        dateString: string;
        isDisplayable: true;
        data: {
            message?: any;
        };
        id?: string | undefined;
        createdAt?: import("../types").Timestamp | undefined;
        updatedAt?: import("../types").Timestamp | undefined;
        timestamp?: import("../types").Timestamp | undefined;
        callLogDocPath?: string | undefined;
        audioAttachment?: {
            uri: string;
            storagePath: string;
            contentType: string;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            title?: string | undefined;
            sizeBytes?: number | undefined;
            metadata?: {
                width?: number | undefined;
                height?: number | undefined;
                durationMs?: number | undefined;
                transcript?: string | undefined;
                meterings?: {
                    db: number;
                    timestampMs?: number | undefined;
                }[] | undefined;
            } | undefined;
        } | undefined;
    }, {
        type: "user_message";
        userId: string;
        dateString: string;
        isDisplayable: true;
        data: {
            message?: any;
        };
        id?: string | undefined;
        createdAt?: import("../types").Timestamp | undefined;
        updatedAt?: import("../types").Timestamp | undefined;
        timestamp?: import("../types").Timestamp | undefined;
        callLogDocPath?: string | undefined;
        audioAttachment?: {
            uri: string;
            storagePath: string;
            contentType: string;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            title?: string | undefined;
            sizeBytes?: number | undefined;
            metadata?: {
                width?: number | undefined;
                height?: number | undefined;
                durationMs?: number | undefined;
                transcript?: string | undefined;
                meterings?: {
                    db: number;
                    timestampMs?: number | undefined;
                }[] | undefined;
            } | undefined;
        } | undefined;
    }>>;
    tacticCount: z.ZodDefault<z.ZodNumber>;
    createdAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    updatedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
}, "strip", z.ZodTypeAny, {
    name: string;
    membersById: Record<string, {
        userId: string;
        userProfile: {
            invitationCode: string;
            id?: string | undefined;
            emojiId?: {
                color: string;
                emoji: string;
                name?: string | undefined;
            } | undefined;
        };
        permissions?: {
            summary: boolean;
            dayOutcomes: boolean;
            threads: boolean;
        } | undefined;
        notificationPreferences?: {
            plan: boolean;
            messages: boolean;
        } | undefined;
        currentStreak?: {
            color: string;
            streakStart?: import("../types").Timestamp | undefined;
        } | undefined;
        joinedAt?: import("../types").Timestamp | undefined;
    }>;
    isTemplate: boolean;
    image: {
        uri: string;
        storagePath: string;
        contentType: string;
        createdAt?: import("../types").Timestamp | undefined;
        updatedAt?: import("../types").Timestamp | undefined;
        title?: string | undefined;
        sizeBytes?: number | undefined;
        metadata?: {
            width?: number | undefined;
            height?: number | undefined;
            durationMs?: number | undefined;
            transcript?: string | undefined;
            meterings?: {
                db: number;
                timestampMs?: number | undefined;
            }[] | undefined;
        } | undefined;
    };
    tacticCollections: import("../utils").DocumentReferenceLike<unknown>[];
    ownerId: string;
    unreadMessageCountsById: Record<string, number>;
    memberCount: number;
    tacticCount: number;
    id?: string | undefined;
    createdAt?: import("../types").Timestamp | undefined;
    updatedAt?: import("../types").Timestamp | undefined;
    description?: string | undefined;
    coverPhoto?: {
        uri: string;
        storagePath: string;
        contentType: string;
        createdAt?: import("../types").Timestamp | undefined;
        updatedAt?: import("../types").Timestamp | undefined;
        title?: string | undefined;
        sizeBytes?: number | undefined;
        metadata?: {
            width?: number | undefined;
            height?: number | undefined;
            durationMs?: number | undefined;
            transcript?: string | undefined;
            meterings?: {
                db: number;
                timestampMs?: number | undefined;
            }[] | undefined;
        } | undefined;
    } | undefined;
    isPublic?: boolean | undefined;
    inviteCode?: string | undefined;
    lastMessage?: {
        type: "user_message";
        userId: string;
        dateString: string;
        isDisplayable: true;
        data: {
            message?: any;
        };
        id?: string | undefined;
        createdAt?: import("../types").Timestamp | undefined;
        updatedAt?: import("../types").Timestamp | undefined;
        timestamp?: import("../types").Timestamp | undefined;
        callLogDocPath?: string | undefined;
        audioAttachment?: {
            uri: string;
            storagePath: string;
            contentType: string;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            title?: string | undefined;
            sizeBytes?: number | undefined;
            metadata?: {
                width?: number | undefined;
                height?: number | undefined;
                durationMs?: number | undefined;
                transcript?: string | undefined;
                meterings?: {
                    db: number;
                    timestampMs?: number | undefined;
                }[] | undefined;
            } | undefined;
        } | undefined;
    } | undefined;
}, {
    name: string;
    membersById: Record<string, {
        userId: string;
        userProfile: {
            invitationCode: string;
            id?: string | undefined;
            emojiId?: {
                color: string;
                emoji: string;
                name?: string | undefined;
            } | undefined;
        };
        permissions?: {
            summary?: boolean | undefined;
            dayOutcomes?: boolean | undefined;
            threads?: boolean | undefined;
        } | undefined;
        notificationPreferences?: {
            plan?: boolean | undefined;
            messages?: boolean | undefined;
        } | undefined;
        currentStreak?: {
            color: string;
            streakStart?: import("../types").Timestamp | undefined;
        } | undefined;
        joinedAt?: import("../types").Timestamp | undefined;
    }>;
    image: {
        uri: string;
        storagePath: string;
        contentType: string;
        createdAt?: import("../types").Timestamp | undefined;
        updatedAt?: import("../types").Timestamp | undefined;
        title?: string | undefined;
        sizeBytes?: number | undefined;
        metadata?: {
            width?: number | undefined;
            height?: number | undefined;
            durationMs?: number | undefined;
            transcript?: string | undefined;
            meterings?: {
                db: number;
                timestampMs?: number | undefined;
            }[] | undefined;
        } | undefined;
    };
    tacticCollections: import("../utils").DocumentReferenceLike<unknown>[];
    ownerId: string;
    unreadMessageCountsById: Record<string, number>;
    id?: string | undefined;
    createdAt?: import("../types").Timestamp | undefined;
    updatedAt?: import("../types").Timestamp | undefined;
    description?: string | undefined;
    isTemplate?: boolean | undefined;
    coverPhoto?: {
        uri: string;
        storagePath: string;
        contentType: string;
        createdAt?: import("../types").Timestamp | undefined;
        updatedAt?: import("../types").Timestamp | undefined;
        title?: string | undefined;
        sizeBytes?: number | undefined;
        metadata?: {
            width?: number | undefined;
            height?: number | undefined;
            durationMs?: number | undefined;
            transcript?: string | undefined;
            meterings?: {
                db: number;
                timestampMs?: number | undefined;
            }[] | undefined;
        } | undefined;
    } | undefined;
    memberCount?: number | undefined;
    isPublic?: boolean | undefined;
    inviteCode?: string | undefined;
    lastMessage?: {
        type: "user_message";
        userId: string;
        dateString: string;
        isDisplayable: true;
        data: {
            message?: any;
        };
        id?: string | undefined;
        createdAt?: import("../types").Timestamp | undefined;
        updatedAt?: import("../types").Timestamp | undefined;
        timestamp?: import("../types").Timestamp | undefined;
        callLogDocPath?: string | undefined;
        audioAttachment?: {
            uri: string;
            storagePath: string;
            contentType: string;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            title?: string | undefined;
            sizeBytes?: number | undefined;
            metadata?: {
                width?: number | undefined;
                height?: number | undefined;
                durationMs?: number | undefined;
                transcript?: string | undefined;
                meterings?: {
                    db: number;
                    timestampMs?: number | undefined;
                }[] | undefined;
            } | undefined;
        } | undefined;
    } | undefined;
    tacticCount?: number | undefined;
}>;
export type SupportGroupMember = z.infer<typeof supportGroupMemberSchema>;
export type SupportGroup = z.infer<typeof supportGroupSchema>;
export declare const isValidSupportGroupMember: (value: unknown) => value is SupportGroupMember;
export declare const isValidSupportGroup: (value: unknown) => value is SupportGroup;
