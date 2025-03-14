/**
 * Question Types
 *
 * TypeScript type definitions for question data
 */
import { InferType } from "yup";
import { questionSchema, responseTypes } from "../schemas/question";

// Export response type
export type ResponseType = (typeof responseTypes)[number];

// Export types inferred from schemas
export type Question = InferType<typeof questionSchema>;

// Type guard function
export const isQuestion = (value: unknown): value is Question => {
  try {
    questionSchema.validateSync(value);
    return true;
  } catch (error) {
    return false;
  }
};
