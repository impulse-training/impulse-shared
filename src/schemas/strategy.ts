import { z } from "zod";
import { documentReferenceSchema } from "../utils/documentReferenceSchema";
import { timestampSchema } from "../utils/timestampSchema";
import { planSchema } from "./plan";

export const strategyPlanItemSchema = z.object({
  planId: z.string(),
  plan: planSchema,
  description: z.string(),
});
export type StrategyPlanItem = z.infer<typeof strategyPlanItemSchema>;

export const strategySchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional(),
  isImported: z.boolean().optional(),
  plans: z.array(strategyPlanItemSchema),
  coach: documentReferenceSchema,
  createdAt: timestampSchema.optional(),
  updatedAt: timestampSchema.optional(),
});
export type Strategy = z.infer<typeof strategySchema>;
