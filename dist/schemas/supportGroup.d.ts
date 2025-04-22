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
export declare const supportGroupMemberSchema: yup.ObjectSchema<{
    userId: string;
    userProfile: {
        emojiId?: {
            color: string;
            emoji: string;
        } | undefined;
    };
    permissions: {
        summary: boolean;
        dayOutcomes: boolean;
        threads: boolean;
    } | undefined;
    currentStreak: {
        streakStart?: import("../types").Timestamp | undefined;
        color: string;
    } | undefined;
    joinedAt: import("../types").Timestamp | undefined;
}, yup.AnyObject, {
    userId: undefined;
    userProfile: {
        emojiId: undefined;
    };
    permissions: undefined;
    currentStreak: undefined;
    joinedAt: undefined;
}, "">;
export declare const supportGroupSchema: yup.ObjectSchema<{
    id: string | undefined;
    name: string;
    description: string | undefined;
    ownerId: string;
    coverPhoto: {
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
        type: NonNullable<"image" | "video" | "audio" | "document" | undefined>;
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
            currentStreak?: {
                streakStart?: import("../types").Timestamp | undefined;
                color: string;
            } | undefined;
            userId: string;
            userProfile: {
                emojiId?: {
                    color: string;
                    emoji: string;
                } | undefined;
            };
        };
    };
    unreadMessageCountsById: {
        [x: string]: number;
    };
    hiddenTacticIdsByUserId: {
        [x: string]: string[] | undefined;
    };
    memberCount: number;
    image: {
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
        type: NonNullable<"image" | "video" | "audio" | "document" | undefined>;
        uri: string;
        storagePath: string;
        contentType: string;
    };
    isPublic: boolean | undefined;
    inviteCode: string | undefined;
    lastMessage: {
        createdAt?: import("../types").Timestamp | undefined;
        updatedAt?: import("../types").Timestamp | undefined;
        id?: string | undefined;
        callLogDocPath?: string | undefined;
        audioAttachment?: {
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
            type: NonNullable<"image" | "video" | "audio" | "document" | undefined>;
            uri: string;
            storagePath: string;
            contentType: string;
        } | undefined;
        userId: string;
        timestamp: import("../types").Timestamp;
        dateString: string;
        type: "user_message";
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
        uri: undefined;
        storagePath: undefined;
        contentType: undefined;
        sizeBytes: undefined;
        type: undefined;
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
    hiddenTacticIdsByUserId: undefined;
    memberCount: 0;
    image: {
        uri: undefined;
        storagePath: undefined;
        contentType: undefined;
        sizeBytes: undefined;
        type: undefined;
        metadata: {
            width: undefined;
            height: undefined;
            durationMs: undefined;
            transcript: undefined;
            meterings: undefined;
        };
    };
    isPublic: undefined;
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
            uri: undefined;
            storagePath: undefined;
            contentType: undefined;
            sizeBytes: undefined;
            type: undefined;
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
