/**
 * User Context Schemas
 * 
 * Yup schemas for user context data validation
 */
import * as yup from 'yup';

/**
 * Schema for behavior context
 */
export const behaviorContextSchema = yup.object({
  behaviorId: yup.string().required(),
  behaviorName: yup.string().required(),
  trackingType: yup.string().oneOf(['counter', 'timer', 'boolean']).required(),
  streakDays: yup.number().default(0),
  totalTracked: yup.number().default(0),
  insights: yup.array().of(yup.string()).default([]),
  effectiveTactics: yup.array().of(yup.string()).default([]),
  gameplanTacticIds: yup.array().of(yup.string()).default([])
});

/**
 * Schema for tactic context
 */
export const tacticContextSchema = yup.object({
  tacticId: yup.string().required(),
  tacticTitle: yup.string().required(),
  tacticType: yup.string().required(),
  completedCount: yup.number().default(0),
  effectiveness: yup.number().min(1).max(10).default(5)
});

/**
 * Schema for AI memory
 */
export const aiMemorySchema = yup.object({
  id: yup.string().required(),
  content: yup.string().required(),
  source: yup.string().required(),
  createdAt: yup.date().default(() => new Date())
});

/**
 * Schema for user context
 */
export const userContextSchema = yup.object({
  userId: yup.string().required(),
  // Use lazy to create a record type schema
  behaviors: yup.lazy(() => 
    yup.object().default({})
  ),
  tactics: yup.lazy(() => 
    yup.object().default({})
  ),
  memories: yup.array().of(aiMemorySchema).default([]),
  overallInsights: yup.array().of(yup.string()).default([]),
  lastUpdatedAt: yup.date().default(() => new Date())
});

/**
 * Validate user context data
 * 
 * @param data Data to validate
 * @returns Validated user context data
 */
export async function validateUserContext(data: any) {
  return await userContextSchema.validate(data, { stripUnknown: false });
}

/**
 * Validate behavior context data
 * 
 * @param data Data to validate
 * @returns Validated behavior context data
 */
export async function validateBehaviorContext(data: any) {
  return await behaviorContextSchema.validate(data, { stripUnknown: false });
}

/**
 * Validate tactic context data
 * 
 * @param data Data to validate
 * @returns Validated tactic context data
 */
export async function validateTacticContext(data: any) {
  return await tacticContextSchema.validate(data, { stripUnknown: false });
}

/**
 * Validate AI memory data
 * 
 * @param data Data to validate
 * @returns Validated AI memory data
 */
export async function validateAIMemory(data: any) {
  return await aiMemorySchema.validate(data, { stripUnknown: false });
}
