/**
 * Support Group Schemas
 *
 * Defines Yup schemas for support group data
 */
import * as yup from 'yup';
export declare const supportGroupMemberSchema: yup.ObjectSchema<{
    id: string;
    name: string;
    email: string;
    photoURL: string | undefined;
    role: NonNullable<"owner" | "member" | undefined>;
    joinedAt: Date;
}, yup.AnyObject, {
    id: undefined;
    name: undefined;
    email: undefined;
    photoURL: undefined;
    role: undefined;
    joinedAt: undefined;
}, "">;
export declare const messageTypes: readonly ["text", "impulse_alert", "system"];
export declare const supportGroupMessageSchema: yup.ObjectSchema<{
    id: string;
    senderId: string;
    senderName: string;
    content: string;
    timestamp: Date;
    type: NonNullable<"text" | "impulse_alert" | "system" | undefined>;
    threadId: string | undefined;
}, yup.AnyObject, {
    id: undefined;
    senderId: undefined;
    senderName: undefined;
    content: undefined;
    timestamp: undefined;
    type: undefined;
    threadId: undefined;
}, "">;
export declare const supportGroupSchema: yup.ObjectSchema<{
    id: string;
    name: string;
    description: string | undefined;
    createdAt: Date;
    updatedAt: Date;
    ownerId: string;
    members: {
        photoURL?: string | undefined;
        id: string;
        name: string;
        role: NonNullable<"owner" | "member" | undefined>;
        email: string;
        joinedAt: Date;
    }[];
    isPublic: boolean | undefined;
    inviteCode: string | undefined;
}, yup.AnyObject, {
    id: undefined;
    name: undefined;
    description: undefined;
    createdAt: undefined;
    updatedAt: undefined;
    ownerId: undefined;
    members: "";
    isPublic: undefined;
    inviteCode: undefined;
}, "">;
export declare const validateSupportGroupMember: (data: unknown) => Promise<{
    photoURL?: string | undefined;
    id: string;
    name: string;
    role: NonNullable<"owner" | "member" | undefined>;
    email: string;
    joinedAt: Date;
}>;
export declare const validateSupportGroupMessage: (data: unknown) => Promise<{
    threadId?: string | undefined;
    id: string;
    content: string;
    type: NonNullable<"text" | "impulse_alert" | "system" | undefined>;
    timestamp: Date;
    senderId: string;
    senderName: string;
}>;
export declare const validateSupportGroup: (data: unknown) => Promise<{
    description?: string | undefined;
    isPublic?: boolean | undefined;
    inviteCode?: string | undefined;
    id: string;
    createdAt: Date;
    name: string;
    updatedAt: Date;
    ownerId: string;
    members: {
        photoURL?: string | undefined;
        id: string;
        name: string;
        role: NonNullable<"owner" | "member" | undefined>;
        email: string;
        joinedAt: Date;
    }[];
}>;
