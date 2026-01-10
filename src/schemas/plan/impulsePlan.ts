import { z } from "zod";
import { documentReferenceSchema } from "../../utils/documentReferenceSchema";
import { timestampSchema } from "../../utils/timestampSchema";
import { planBaseSchema } from "./base";

export const impulsePlanSchema = planBaseSchema("impulse").extend({
  behaviorId: z.string(),
  behaviorRef: documentReferenceSchema,
  isActive: z.boolean().optional().default(false),
  lastUsedAt: timestampSchema.optional(),
  numberOfUses: z.number().int().nonnegative().default(0),
  numberOfSuccesses: z.number().int().nonnegative().default(0),
  numberOfSetbacks: z.number().int().nonnegative().default(0),
});

export type ImpulsePlan = z.infer<typeof impulsePlanSchema>;
