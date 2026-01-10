import z from "zod";
import { documentReferenceSchema } from "../../utils/documentReferenceSchema";
import { timestampSchema } from "../../utils/timestampSchema";
import { planBaseSchema } from "./base";

export const defaultPlanSchema = planBaseSchema("default").extend({
  behaviorId: z.string().optional(),
  behaviorRef: documentReferenceSchema.optional(),
  isActive: z.boolean().optional().default(false),
  lastUsedAt: timestampSchema.optional(),
  numberOfUses: z.number().int().nonnegative().default(0),
  numberOfSuccesses: z.number().int().nonnegative().default(0),
  numberOfSetbacks: z.number().int().nonnegative().default(0),
});

export type DefaultPlan = z.infer<typeof defaultPlanSchema>;
