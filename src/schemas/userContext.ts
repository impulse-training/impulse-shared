import * as yup from "yup";
import { timestampSchema } from "../utils";
import { objectOf } from "../utils/objectOf";

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

export const tacticContextSchema = yup.object({
  tacticId: yup.string().required(),
  tacticTitle: yup.string().required(),
  tacticType: yup.string().required(),
  completedCount: yup.number().default(0),
  effectiveness: yup.number().min(1).max(10).default(5),
});

export const aiMemorySchema = yup.object({
  id: yup.string().required(),
  content: yup.string().required(),
  source: yup.string().required(),
  createdAt: timestampSchema,
});

export const userContextSchema = yup.object({
  behaviors: objectOf(behaviorContextSchema),
  tactics: objectOf(tacticContextSchema),
  aiMemories: yup.array().of(aiMemorySchema).default([]),
  overallInsights: yup.array().of(yup.string()).default([]),
  createdAt: timestampSchema,
  updatedAt: timestampSchema,
});

// Export types inferred from schemas
export type BehaviorContext = yup.InferType<typeof behaviorContextSchema>;
export type TacticContext = yup.InferType<typeof tacticContextSchema>;
export type AIMemory = yup.InferType<typeof aiMemorySchema>;

// Extend the inferred UserContext type to properly type the record fields
export interface UserContext
  extends Omit<
    yup.InferType<typeof userContextSchema>,
    "behaviors" | "tactics"
  > {
  behaviors: Record<string, BehaviorContext>;
  tactics: Record<string, TacticContext>;
}

// Type guard functions
export const isBehaviorContext = (value: unknown): value is BehaviorContext => {
  try {
    behaviorContextSchema.validateSync(value);
    return true;
  } catch (error) {
    return false;
  }
};

export const isTacticContext = (value: unknown): value is TacticContext => {
  try {
    tacticContextSchema.validateSync(value);
    return true;
  } catch (error) {
    return false;
  }
};

export const isAIMemory = (value: unknown): value is AIMemory => {
  try {
    aiMemorySchema.validateSync(value);
    return true;
  } catch (error) {
    return false;
  }
};

export const isUserContext = (value: unknown): value is UserContext => {
  try {
    userContextSchema.validateSync(value);
    return true;
  } catch (error) {
    return false;
  }
};
