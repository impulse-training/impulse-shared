import { z } from "zod";
import { categorySchema } from "../constants";
import { timestampSchema } from "../utils/timestampSchema";

export const trackingTypes = ["counter", "timer"] as const;
export type TrackingType = (typeof trackingTypes)[number];

// These are foundational attributes, and correspond to documents in a top-level behaviorTemplates
// collection. We then extend that schema to be the full behavior schema.
const behaviorTemplateBase = z.object({
  name: z.string(),
  category: categorySchema,
  hasQuestions: z.boolean().optional(),
  trackingType: z.enum(trackingTypes),
  trackingUnit: z.string().optional(),
  createdAt: timestampSchema.optional(),
  updatedAt: timestampSchema.optional(),
});

export const behaviorTemplateSchema = behaviorTemplateBase.superRefine(
  (val, ctx) => {
    if (val.trackingType === "counter" && !val.trackingUnit) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Tracking unit is required when tracking type is 'counter'",
        path: ["trackingUnit"],
      });
    }
  }
);

export type BehaviorTemplate = z.infer<typeof behaviorTemplateSchema>;

// Re-export the base for extending in behavior.ts
export { behaviorTemplateBase };
