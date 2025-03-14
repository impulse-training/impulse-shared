/**
 * Tactic Types
 *
 * TypeScript type definitions for tactic data
 */
import { InferType } from "yup";
import { tacticSchema, tacticTypes } from "../schemas/tactic";
export type TacticType = (typeof tacticTypes)[number];
export type Tactic = InferType<typeof tacticSchema>;
export declare const isTactic: (value: unknown) => value is Tactic;
