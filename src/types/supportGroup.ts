/**
 * Support Group Types
 * 
 * TypeScript type definitions for support group data
 */
import { InferType } from 'yup';
import { 
  supportGroupSchema, 
  supportGroupMemberSchema, 
  supportGroupMessageSchema,
  messageTypes
} from '../schemas/supportGroup';

// Export message type
export type MessageType = (typeof messageTypes)[number];

// Export types inferred from schemas
export type SupportGroupMember = InferType<typeof supportGroupMemberSchema>;
export type SupportGroupMessage = InferType<typeof supportGroupMessageSchema>;
export type SupportGroup = InferType<typeof supportGroupSchema>;

// Type guard functions
export const isSupportGroupMember = (value: unknown): value is SupportGroupMember => {
  try {
    supportGroupMemberSchema.validateSync(value);
    return true;
  } catch (error) {
    return false;
  }
};

export const isSupportGroupMessage = (value: unknown): value is SupportGroupMessage => {
  try {
    supportGroupMessageSchema.validateSync(value);
    return true;
  } catch (error) {
    return false;
  }
};

export const isSupportGroup = (value: unknown): value is SupportGroup => {
  try {
    supportGroupSchema.validateSync(value);
    return true;
  } catch (error) {
    return false;
  }
};
