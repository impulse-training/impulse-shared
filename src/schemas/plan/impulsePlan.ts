import { z } from "zod";
import { documentReferenceSchema } from "../../utils/documentReferenceSchema";
import { planBaseSchema } from "./base";

export const impulsePlanSchema = planBaseSchema("impulse").extend({
  behaviorId: z.string(),
  behaviorRef: documentReferenceSchema,
  isActive: z.boolean().optional().default(false),
});

export type ImpulsePlan = z.infer<typeof impulsePlanSchema>;
