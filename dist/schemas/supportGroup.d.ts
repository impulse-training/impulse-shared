import * as yup from "yup";
export declare const supportGroupMemberSchema: yup.ObjectSchema<{
    userId: string;
    emojiId: {
        color: string;
        emoji: string;
    } | undefined;
    joinedAt: import("../types").Timestamp | undefined;
}, yup.AnyObject, {
    userId: undefined;
    emojiId: undefined;
    joinedAt: undefined;
}, "">;
export declare const messageTypes: readonly ["text", "impulse_alert", "system"];
export declare const supportGroupMessageSchema: yup.ObjectSchema<{
    senderId: string;
    senderName: string;
    content: string;
    timestamp: import("../types").Timestamp;
    type: NonNullable<"text" | "system" | "impulse_alert" | undefined>;
    threadId: string | undefined;
    createdAt: import("../types").Timestamp | undefined;
    updatedAt: import("../types").Timestamp | undefined;
}, yup.AnyObject, {
    senderId: undefined;
    senderName: undefined;
    content: undefined;
    timestamp: undefined;
    type: undefined;
    threadId: undefined;
    createdAt: undefined;
    updatedAt: undefined;
}, "">;
export declare const supportGroupSchema: yup.ObjectSchema<{
    id: string | undefined;
    name: string;
    description: string | undefined;
    ownerId: string;
    memberIds: (string | undefined)[];
    members: {
        joinedAt?: import("../types").Timestamp | undefined;
        emojiId?: {
            color: string;
            emoji: string;
        } | undefined;
        userId: string;
    }[];
    isPublic: boolean | undefined;
    inviteCode: string | undefined;
    streaksByUserId: {
        [x: string]: {
            streakStart?: import("../types").Timestamp | undefined;
            color: string;
        };
    };
    createdAt: import("../types").Timestamp | undefined;
    updatedAt: import("../types").Timestamp | undefined;
}, yup.AnyObject, {
    id: undefined;
    name: undefined;
    description: undefined;
    ownerId: undefined;
    memberIds: "";
    members: "";
    isPublic: undefined;
    inviteCode: undefined;
    streaksByUserId: undefined;
    createdAt: undefined;
    updatedAt: undefined;
}, "">;
export type MessageType = (typeof messageTypes)[number];
export type SupportGroupMember = yup.InferType<typeof supportGroupMemberSchema>;
export type SupportGroupMessage = yup.InferType<typeof supportGroupMessageSchema>;
export type SupportGroup = yup.InferType<typeof supportGroupSchema>;
export declare const isSupportGroupMember: (value: unknown) => value is SupportGroupMember;
export declare const isSupportGroupMessage: (value: unknown) => value is SupportGroupMessage;
export declare const isSupportGroup: (value: unknown) => value is SupportGroup;
