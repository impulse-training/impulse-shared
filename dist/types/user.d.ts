/**
 * User Types
 *
 * TypeScript type definitions for user data
 */
import { InferType } from "yup";
import { userSchema } from "../schemas/user";
export type User = InferType<typeof userSchema>;
export type UserData = InferType<typeof userSchema>;
export declare const isUser: (value: unknown) => value is User;
