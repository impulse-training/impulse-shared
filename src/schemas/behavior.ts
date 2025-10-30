import { z } from "zod";
import { categorySchema } from "../constants";
import { documentReferenceSchema } from "../utils/documentReferenceSchema";
import { timestampSchema } from "../utils/timestampSchema";
import { goalSchema } from "./goal";
import { behaviorTrackingDataSchema } from "./behaviorTrackingData";

export const trackingTypes = ["counter", "timer"] as const;

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

// These are stored at the user-level, as in, users/$userId/behaviors/$behaviorId
export const behaviorSchema = behaviorTemplateBase
  .extend({
    id: z.string().optional(),
    description: z.string(),
    ordinal: z.number().default(0),
    benefits: z.array(z.string()),
    drawbacks: z.array(z.string()),
    goal: goalSchema.optional(),
    lastTrackedAt: timestampSchema.optional(),
    tactics: z.array(documentReferenceSchema).optional(),
    initialUsage: behaviorTrackingDataSchema.optional(),
    hidden: z.boolean().optional().default(false),
    impulseQuestions: z.array(documentReferenceSchema).optional(),
    debriefQuestions: z
      .object({
        success: z.array(documentReferenceSchema),
        setback: z.array(documentReferenceSchema),
      })
      .optional(),
    activePlanId: z.string(),
  })
  .superRefine((val, ctx) => {
    if (val.trackingType === "counter" && !val.trackingUnit) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Tracking unit is required when tracking type is 'counter'",
        path: ["trackingUnit"],
      });
    }
  });

export type TrackingType = (typeof trackingTypes)[number];

// Export types inferred from schemas
export type Behavior = z.infer<typeof behaviorSchema>;

export const isBehavior = (value: unknown): value is Behavior =>
  behaviorSchema.safeParse(value).success;
