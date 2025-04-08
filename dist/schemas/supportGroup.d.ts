import * as yup from "yup";
export declare const supportGroupMemberSchema: yup.ObjectSchema<{
    userId: string;
    userProfile: {
        emojiId?: {
            color: string;
            emoji: string;
        } | undefined;
    };
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
    currentStreak: undefined;
    joinedAt: undefined;
}, "">;
export declare const supportGroupSchema: yup.ObjectSchema<{
    id: string | undefined;
    name: string;
    description: string | undefined;
    ownerId: string;
    backgroundImage: {
        sizeBytes?: number | undefined;
        metadata?: {
            width?: number | undefined;
            height?: number | undefined;
            durationMs?: number | undefined;
            transcript?: string | undefined;
        } | undefined;
        uri: string;
        storagePath: string;
        contentType: string;
        type: NonNullable<"image" | "video" | "audio" | "document" | undefined>;
    };
    membersById: {
        [x: string]: {
            joinedAt?: import("../types").Timestamp | undefined;
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
    memberCount: number;
    image: {
        sizeBytes?: number | undefined;
        metadata?: {
            width?: number | undefined;
            height?: number | undefined;
            durationMs?: number | undefined;
            transcript?: string | undefined;
        } | undefined;
        uri: string;
        storagePath: string;
        contentType: string;
        type: NonNullable<"image" | "video" | "audio" | "document" | undefined>;
    };
    isPublic: boolean | undefined;
    inviteCode: string | undefined;
    lastMessage: {
        id?: string | undefined;
        createdAt?: import("../types").Timestamp | undefined;
        updatedAt?: import("../types").Timestamp | undefined;
        callLogDocPath?: string | undefined;
        audioAttachment?: {
            sizeBytes?: number | undefined;
            metadata?: {
                width?: number | undefined;
                height?: number | undefined;
                durationMs?: number | undefined;
                transcript?: string | undefined;
            } | undefined;
            uri: string;
            storagePath: string;
            contentType: string;
            type: NonNullable<"image" | "video" | "audio" | "document" | undefined>;
        } | undefined;
        type: "user_message";
        userId: string;
        timestamp: import("../types").Timestamp;
        dateString: string;
        data: {
            message: import("openai/resources").ChatCompletionUserMessageParam;
        };
        isDisplayable: true;
    } | undefined;
    createdAt: import("../types").Timestamp | undefined;
    updatedAt: import("../types").Timestamp | undefined;
}, yup.AnyObject, {
    id: undefined;
    name: undefined;
    description: undefined;
    ownerId: undefined;
    backgroundImage: {
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
        };
    };
    membersById: undefined;
    unreadMessageCountsById: undefined;
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
        data: {
            message: undefined;
        } & {
            message: undefined;
        };
        callLogDocPath: undefined;
        type: undefined;
        isDisplayable: undefined;
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
            };
        };
    };
    createdAt: undefined;
    updatedAt: undefined;
}, "">;
export type SupportGroupMember = yup.InferType<typeof supportGroupMemberSchema>;
export type SupportGroup = yup.InferType<typeof supportGroupSchema>;
export declare const isValidSupportGroupMember: (value: unknown) => value is SupportGroupMember;
export declare const isValidSupportGroup: (value: unknown) => value is SupportGroup;
