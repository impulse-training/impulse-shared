import { z } from "zod";
import { timestampSchema } from "../utils/timestampSchema";
import { planSchema } from "./plan";
import { coachSchema } from "./coach";

export const strategyPlanItemSchema = z.object({
  planId: z.string(),
  plan: planSchema,
  description: z.string(),
});

export const strategyCoachSchema = z.object({
  coachId: z.string(),
  coach: coachSchema,
});

export const strategySchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional(),
  shortDescription: z.string().optional(),
  problem: z.string().optional(),
  whenUseful: z.string().optional(),
  isImported: z.boolean().optional(),
  plans: z.array(strategyPlanItemSchema),
  coach: strategyCoachSchema,
  publishedAt: timestampSchema.optional(),
  createdAt: timestampSchema.optional(),
  updatedAt: timestampSchema.optional(),
});

export type StrategyPlanItem = z.infer<typeof strategyPlanItemSchema>;
export type StrategyCoach = z.infer<typeof strategyCoachSchema>;
export type Strategy = z.infer<typeof strategySchema>;
