import { z } from "zod";
import { timestampSchema } from "../utils/timestampSchema";

export const behaviorContextSchema = z.object({
  behaviorId: z.string(),
  behaviorName: z.string(),
  trackingType: z.enum(["counter", "timer", "boolean", "scale"]),
  description: z.string().optional(),
  benefits: z.array(z.string()).optional(),
  drawbacks: z.array(z.string()).optional(),
  trackingUnit: z.string().optional(),
  goalLabel: z.string().optional(),
});

export const tacticContextSchema = z.object({
  tacticId: z.string(),
  title: z.string(),
  description: z.string().optional(),
  instructions: z.string().optional(),
});

export const activeExperimentContextSchema = z.object({
  behaviorIds: z.array(z.string()),
  behaviorNames: z.array(z.string()),
  experimentQuestion: z.string(),
  observations: z.array(z.string()),
});

export const aiMemorySchema = z.object({
  id: z.string(),
  content: z.string(),
  source: z.string(),
  createdAt: timestampSchema.optional(),
});

export const userContextSchema = z.object({
  behaviors: z.record(behaviorContextSchema),
  tactics: z.record(tacticContextSchema),
  activeExperiment: activeExperimentContextSchema.nullable().optional(),
  aiMemories: z.array(aiMemorySchema).default([]),
  consolidatedMemory: z.string().default(""),
  createdAt: timestampSchema.optional(),
  updatedAt: timestampSchema.optional(),
});

// Export types inferred from schemas
export type BehaviorContext = z.infer<typeof behaviorContextSchema>;
export type TacticContext = z.infer<typeof tacticContextSchema>;
export type ActiveExperimentContext = z.infer<
  typeof activeExperimentContextSchema
>;
export type AIMemory = z.infer<typeof aiMemorySchema>;
export type UserContext = z.infer<typeof userContextSchema>;

// Type guard functions
export const isBehaviorContext = (value: unknown): value is BehaviorContext => {
  return behaviorContextSchema.safeParse(value).success;
};

export const isTacticContext = (value: unknown): value is TacticContext => {
  return tacticContextSchema.safeParse(value).success;
};

export const isAIMemory = (value: unknown): value is AIMemory => {
  return aiMemorySchema.safeParse(value).success;
};

export const isUserContext = (value: unknown): value is UserContext => {
  return userContextSchema.safeParse(value).success;
};
