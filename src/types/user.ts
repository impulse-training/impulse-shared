/**
 * User Types
 *
 * TypeScript type definitions for user data
 */
import { InferType } from "yup";
import { userSchema } from "../schemas/user";

// Export User type inferred from schema
export type User = InferType<typeof userSchema>;

// Using the same pattern as Thread type
export type UserData = InferType<typeof userSchema>;

// Type guard for User
export const isUser = (value: unknown): value is User => {
  try {
    userSchema.validateSync(value);
    return true;
  } catch (error) {
    return false;
  }
};
