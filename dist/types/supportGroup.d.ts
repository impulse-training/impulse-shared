/**
 * Support Group Types
 *
 * TypeScript type definitions for support group data
 */
import { InferType } from "yup";
import { messageTypes, supportGroupMemberSchema, supportGroupMessageSchema, supportGroupSchema } from "../schemas/supportGroup";
export type MessageType = (typeof messageTypes)[number];
export type SupportGroupMember = InferType<typeof supportGroupMemberSchema>;
export type SupportGroupMessage = InferType<typeof supportGroupMessageSchema>;
export type SupportGroup = InferType<typeof supportGroupSchema>;
