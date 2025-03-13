/**
 * Support Group Schemas
 *
 * Defines Yup schemas for support group data
 */
import * as yup from "yup";
export declare const supportGroupMemberSchema: yup.ObjectSchema<{
    name: string;
    email: string;
    photoURL: string | undefined;
    role: NonNullable<"owner" | "member" | undefined>;
    joinedAt: import("..").Timestamp | undefined;
}, yup.AnyObject, {
    name: undefined;
    email: undefined;
    photoURL: undefined;
    role: undefined;
    joinedAt: undefined;
}, "">;
export declare const messageTypes: readonly ["text", "impulse_alert", "system"];
export declare const supportGroupMessageSchema: yup.ObjectSchema<{
    senderId: string;
    senderName: string;
    content: string;
    timestamp: import("..").Timestamp;
    type: NonNullable<"text" | "impulse_alert" | "system" | undefined>;
    threadId: string | undefined;
    createdAt: import("..").Timestamp | undefined;
    updatedAt: import("..").Timestamp | undefined;
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
    members: {
        joinedAt?: import("..").Timestamp | undefined;
        photoURL?: string | undefined;
        name: string;
        role: NonNullable<"owner" | "member" | undefined>;
        email: string;
    }[];
    isPublic: boolean | undefined;
    inviteCode: string | undefined;
    createdAt: import("..").Timestamp | undefined;
    updatedAt: import("..").Timestamp | undefined;
}, yup.AnyObject, {
    id: undefined;
    name: undefined;
    description: undefined;
    ownerId: undefined;
    members: "";
    isPublic: undefined;
    inviteCode: undefined;
    createdAt: undefined;
    updatedAt: undefined;
}, "">;
