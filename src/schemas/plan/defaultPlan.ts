import { z } from "zod";
import { timestampSchema } from "../../utils/timestampSchema";
import { planBaseSchema } from "./base";

export const defaultPlanSchema = planBaseSchema("default").extend({
  lastUsedAt: timestampSchema.optional(),
  numberOfUses: z.number().int().nonnegative().default(0),
  numberOfSuccesses: z.number().int().nonnegative().default(0),
  numberOfSetbacks: z.number().int().nonnegative().default(0),
  isActive: z.boolean().optional(),
});

export type DefaultPlan = z.infer<typeof defaultPlanSchema>;
