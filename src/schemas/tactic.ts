/**
 * Tactic Schemas
 *
 * Defines Yup schemas for tactic data
 */
import * as yup from "yup";
import { timestampSchema } from "../utils";

// Tactic Types
export const tacticTypes = [
  "task",
  "affirmation",
  "image",
  "video",
  "link",
  "supportGroup",
  "breathingExercise",
] as const;

// Tactic Schema
export const tacticSchema = yup.object({
  id: yup.string(),
  type: yup.string().oneOf(tacticTypes).required(),
  title: yup.string().required(),
  description: yup.string().optional(),
  content: yup.string().optional(),
  imageUri: yup.string().optional(),
  videoUri: yup.string().optional(),
  audioUri: yup.string().optional(),
  linkUrl: yup.string().optional(),
  supportGroupId: yup.string().optional(),
  supportGroupName: yup.string().optional(),
  completed: yup.boolean().optional(),
  durationSeconds: yup.number().optional(), // Total duration in seconds
  allBehaviors: yup.boolean().optional(),
  behaviorIds: yup.array().of(yup.string()).optional(),
  userId: yup.string().optional(),
  isPublic: yup.boolean().optional(),
  createdAt: timestampSchema,
  updatedAt: timestampSchema,
});
