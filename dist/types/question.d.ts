/**
 * Question Types
 *
 * TypeScript type definitions for question data
 */
import { InferType } from "yup";
import { questionSchema, responseTypes } from "../schemas/question";
export type ResponseType = (typeof responseTypes)[number];
export type Question = InferType<typeof questionSchema>;
export declare const isQuestion: (value: unknown) => value is Question;
