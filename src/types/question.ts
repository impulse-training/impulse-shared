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
