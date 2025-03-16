/**
 * Support Group Schemas
 *
 * Defines Yup schemas for support group data
 */
import * as yup from "yup";
import { SupportGroup, SupportGroupMember, SupportGroupMessage } from "../types";
export declare const supportGroupMemberSchema: yup.ObjectSchema<{
    userId: string;
    name: string;
    email: string;
    photoURL: string | undefined;
    role: NonNullable<"owner" | "member" | undefined>;
    joinedAt: import("../types").Timestamp | undefined;
}, yup.AnyObject, {
    userId: undefined;
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
    id: string;
    name: string;
    description: string | undefined;
    ownerId: string;
    members: {
        joinedAt?: import("../types").Timestamp | undefined;
        photoURL?: string | undefined;
        userId: string;
        name: string;
        email: string;
        role: NonNullable<"owner" | "member" | undefined>;
    }[];
    isPublic: boolean | undefined;
    inviteCode: string | undefined;
    createdAt: import("../types").Timestamp | undefined;
    updatedAt: import("../types").Timestamp | undefined;
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
export declare const isSupportGroupMember: (value: unknown) => value is SupportGroupMember;
export declare const isSupportGroupMessage: (value: unknown) => value is SupportGroupMessage;
export declare const isSupportGroup: (value: unknown) => value is SupportGroup;
