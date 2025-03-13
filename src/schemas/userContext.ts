/**
 * User Context Schemas
 *
 * Yup schemas for user context data validation
 */
import * as yup from "yup";
import { timestampSchema } from "../utils";

/**
 * Schema for behavior context
 */
export const behaviorContextSchema = yup.object({
  behaviorId: yup.string().required(),
  behaviorName: yup.string().required(),
  trackingType: yup.string().oneOf(["counter", "timer", "boolean"]).required(),
  streakDays: yup.number().default(0),
  totalTracked: yup.number().default(0),
  insights: yup.array().of(yup.string()).default([]),
  effectiveTactics: yup.array().of(yup.string()).default([]),
  gameplanTacticIds: yup.array().of(yup.string()).default([]),
});

/**
 * Schema for tactic context
 */
export const tacticContextSchema = yup.object({
  tacticId: yup.string().required(),
  tacticTitle: yup.string().required(),
  tacticType: yup.string().required(),
  completedCount: yup.number().default(0),
  effectiveness: yup.number().min(1).max(10).default(5),
});

/**
 * Schema for AI memory
 */
export const aiMemorySchema = yup.object({
  id: yup.string().required(),
  content: yup.string().required(),
  source: yup.string().required(),
  createdAt: timestampSchema,
});

/**
 * Schema for user context
 */
export const userContextSchema = yup.object({
  id: yup.string(),
  userId: yup.string().required(),
  // Use lazy to create a record type schema
  behaviors: yup.lazy(() => yup.object().default({})),
  tactics: yup.lazy(() => yup.object().default({})),
  memories: yup.array().of(aiMemorySchema).default([]),
  overallInsights: yup.array().of(yup.string()).default([]),
  createdAt: timestampSchema,
  updatedAt: timestampSchema,
});
