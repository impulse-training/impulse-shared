import z from "zod";
import { timestampSchema } from "../utils/timestampSchema";

export const behaviorContextSchema = z.object({
  behaviorId: z.string(),
  behaviorName: z.string(),
  trackingType: z.enum(["counter", "timer", "boolean"]),
  description: z.string().optional(),
  benefits: z.array(z.string()).optional(),
  drawbacks: z.array(z.string()).optional(),
  trackingUnit: z.string().optional(),
  streakDays: z.number().default(0),
  totalTracked: z.number().default(0),
  insights: z.array(z.string()).default([]),
  effectiveTactics: z.array(z.string()).default([]),
  planTacticIds: z.array(z.string()).default([]),
});

export const tacticContextSchema = z.object({
  tacticId: z.string(),
  tacticTitle: z.string(),
  tacticType: z.string(),
  completedCount: z.number().default(0),
  effectiveness: z.number().min(1).max(10).default(5),
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
  aiMemories: z.array(aiMemorySchema).default([]),
  overallInsights: z.array(z.string()).default([]),
  consolidatedMemory: z.string().default(""),
  createdAt: timestampSchema.optional(),
  updatedAt: timestampSchema.optional(),
});

// Export types inferred from schemas
export type BehaviorContext = z.infer<typeof behaviorContextSchema>;
export type TacticContext = z.infer<typeof tacticContextSchema>;
export type AIMemory = z.infer<typeof aiMemorySchema>;

// Extend the inferred UserContext type to properly type the record fields
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
