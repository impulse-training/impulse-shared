import { z } from "zod";
import { documentReferenceSchema } from "../utils/documentReferenceSchema";
import { timestampSchema } from "../utils/timestampSchema";
import { goalSchema } from "./goal";
import { behaviorTrackingDataSchema } from "./behaviorTrackingData";
import { behaviorTemplateBase } from "./behaviorTemplate";

// Re-export for backward compatibility
export { trackingTypes } from "./behaviorTemplate";
export type { BehaviorTemplate, TrackingType } from "./behaviorTemplate";
export { behaviorTemplateSchema } from "./behaviorTemplate";

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
    // Reference to the behavior topic (e.g., "sleep", "exercise", "substances")
    // Used for matching users to support groups with similar focus areas
    behaviorTopicId: z.string().optional(),
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

// Export types inferred from schemas
export type Behavior = z.infer<typeof behaviorSchema>;

export const isBehavior = (value: unknown): value is Behavior =>
  behaviorSchema.safeParse(value).success;
