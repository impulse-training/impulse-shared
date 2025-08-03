import * as yup from "yup";
export declare const supportGroupPermissionsSchema: yup.ObjectSchema<{
    dayOutcomes: boolean;
    threads: boolean;
    summary: boolean;
}, yup.AnyObject, {
    dayOutcomes: false;
    threads: false;
    summary: false;
}, "">;
export type SupportGroupPermissions = yup.InferType<typeof supportGroupPermissionsSchema>;
export declare const supportGroupNotificationPreferencesSchema: yup.ObjectSchema<{
    messages: boolean;
    plan: boolean;
}, yup.AnyObject, {
    messages: false;
    plan: false;
}, "">;
export type SupportGroupNotificationPreferences = yup.InferType<typeof supportGroupNotificationPreferencesSchema>;
export declare const supportGroupMemberSchema: yup.ObjectSchema<{
    userId: string;
    userProfile: {
        id?: string | undefined;
        name?: string | undefined;
        emojiId?: {
            color: string;
            emoji: string;
        } | undefined;
        invitationCode: string;
    };
    permissions: {
        summary: boolean;
        dayOutcomes: boolean;
        threads: boolean;
    } | undefined;
    notificationPreferences: {
        plan: boolean;
        messages: boolean;
    } | undefined;
    currentStreak: {
        streakStart?: import("../types").Timestamp | undefined;
        color: string;
    } | undefined;
    joinedAt: import("../types").Timestamp | undefined;
}, yup.AnyObject, {
    userId: undefined;
    userProfile: {
        id: undefined;
        invitationCode: undefined;
        emojiId: undefined;
        name: undefined;
    };
    permissions: undefined;
    notificationPreferences: undefined;
    currentStreak: undefined;
    joinedAt: undefined;
}, "">;
export declare const supportGroupSchema: yup.ObjectSchema<{
    id: string | undefined;
    name: string;
    description: string | undefined;
    ownerId: string;
    coverPhoto: {
        createdAt?: import("../types").Timestamp | undefined;
        updatedAt?: import("../types").Timestamp | undefined;
        sizeBytes?: number | undefined;
        metadata?: {
            width?: number | undefined;
            height?: number | undefined;
            durationMs?: number | undefined;
            transcript?: string | undefined;
            meterings?: {
                timestampMs?: number | undefined;
                db: number;
            }[] | undefined;
        } | undefined;
        uri: string;
        storagePath: string;
        contentType: string;
    } | undefined;
    membersById: {
        [x: string]: {
            joinedAt?: import("../types").Timestamp | undefined;
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
                streakStart?: import("../types").Timestamp | undefined;
                color: string;
            } | undefined;
            userId: string;
            userProfile: {
                id?: string | undefined;
                name?: string | undefined;
                emojiId?: {
                    color: string;
                    emoji: string;
                } | undefined;
                invitationCode: string;
            };
        };
    };
    unreadMessageCountsById: {
        [x: string]: number;
    };
    memberCount: number;
    image: {
        createdAt?: import("../types").Timestamp | undefined;
        updatedAt?: import("../types").Timestamp | undefined;
        sizeBytes?: number | undefined;
        metadata?: {
            width?: number | undefined;
            height?: number | undefined;
            durationMs?: number | undefined;
            transcript?: string | undefined;
            meterings?: {
                timestampMs?: number | undefined;
                db: number;
            }[] | undefined;
        } | undefined;
        uri: string;
        storagePath: string;
        contentType: string;
    };
    tacticCollections: import("../utils").DocumentReferenceLike<unknown>[];
    isPublic: boolean | undefined;
    isTemplate: boolean;
    inviteCode: string | undefined;
    lastMessage: {
        id?: string | undefined;
        createdAt?: import("../types").Timestamp | undefined;
        updatedAt?: import("../types").Timestamp | undefined;
        callLogDocPath?: string | undefined;
        audioAttachment?: {
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            sizeBytes?: number | undefined;
            metadata?: {
                width?: number | undefined;
                height?: number | undefined;
                durationMs?: number | undefined;
                transcript?: string | undefined;
                meterings?: {
                    timestampMs?: number | undefined;
                    db: number;
                }[] | undefined;
            } | undefined;
            uri: string;
            storagePath: string;
            contentType: string;
        } | undefined;
        type: "user_message";
        userId: string;
        timestamp: import("../types").Timestamp;
        dateString: string;
        isDisplayable: true;
        data: {
            message: import("openai/resources").ChatCompletionUserMessageParam;
        };
    } | undefined;
    tacticCount: number;
    createdAt: import("../types").Timestamp | undefined;
    updatedAt: import("../types").Timestamp | undefined;
}, yup.AnyObject, {
    id: undefined;
    name: undefined;
    description: undefined;
    ownerId: undefined;
    coverPhoto: {
        createdAt: undefined;
        updatedAt: undefined;
        uri: undefined;
        storagePath: undefined;
        contentType: undefined;
        sizeBytes: undefined;
        metadata: {
            width: undefined;
            height: undefined;
            durationMs: undefined;
            transcript: undefined;
            meterings: undefined;
        };
    };
    membersById: undefined;
    unreadMessageCountsById: undefined;
    memberCount: 0;
    image: {
        createdAt: undefined;
        updatedAt: undefined;
        uri: undefined;
        storagePath: undefined;
        contentType: undefined;
        sizeBytes: undefined;
        metadata: {
            width: undefined;
            height: undefined;
            durationMs: undefined;
            transcript: undefined;
            meterings: undefined;
        };
    };
    tacticCollections: "";
    isPublic: undefined;
    isTemplate: false;
    inviteCode: undefined;
    lastMessage: {
        id: undefined;
        createdAt: undefined;
        updatedAt: undefined;
        userId: undefined;
        timestamp: undefined;
        dateString: undefined;
        callLogDocPath: undefined;
        type: undefined;
        isDisplayable: undefined;
        data: {
            message: undefined;
        } & {
            message: undefined;
        };
        audioAttachment: {
            createdAt: undefined;
            updatedAt: undefined;
            uri: undefined;
            storagePath: undefined;
            contentType: undefined;
            sizeBytes: undefined;
            metadata: {
                width: undefined;
                height: undefined;
                durationMs: undefined;
                transcript: undefined;
                meterings: undefined;
            };
        };
    };
    tacticCount: 0;
    createdAt: undefined;
    updatedAt: undefined;
}, "">;
export type SupportGroupMember = yup.InferType<typeof supportGroupMemberSchema>;
export type SupportGroup = yup.InferType<typeof supportGroupSchema>;
export declare const isValidSupportGroupMember: (value: unknown) => value is SupportGroupMember;
export declare const isValidSupportGroup: (value: unknown) => value is SupportGroup;
