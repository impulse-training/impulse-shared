/**
 * Support Group Types
 *
 * TypeScript type definitions for support group data
 */
import { InferType } from 'yup';
import { supportGroupSchema, supportGroupMemberSchema, supportGroupMessageSchema, messageTypes } from '../schemas/supportGroup';
export type MessageType = (typeof messageTypes)[number];
export type SupportGroupMember = InferType<typeof supportGroupMemberSchema>;
export type SupportGroupMessage = InferType<typeof supportGroupMessageSchema>;
export type SupportGroup = InferType<typeof supportGroupSchema>;
export declare const isSupportGroupMember: (value: unknown) => value is SupportGroupMember;
export declare const isSupportGroupMessage: (value: unknown) => value is SupportGroupMessage;
export declare const isSupportGroup: (value: unknown) => value is SupportGroup;
