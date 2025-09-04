import { z } from "zod";
import { BEHAVIOR_CATEGORIES, BehaviorCategoryKey } from "../constants";
import { timestampSchema } from "../utils";

export const trackingTypes = ["counter", "timer"] as const;

// Use the category keys from our constants
const categoryKeys = Object.keys(BEHAVIOR_CATEGORIES) as BehaviorCategoryKey[];

export const categorySchema = z.custom<BehaviorCategoryKey>((val) =>
  categoryKeys.includes(val as BehaviorCategoryKey)
);

// Daily goals schema - supports eliminate or reduce with targets
const dailyGoalSchema = z.discriminatedUnion("type", [
  // Eliminate - goal is to have 0 of this behavior
  z.object({
    type: z.literal("eliminate"),
  }),
  // Reduce with every day target
  z.object({
    type: z.literal("reduceEveryDay"),
    target: z.number(),
  }),
  // Reduce with individual day targets
  z.object({
    type: z.literal("reduceIndividualDays"),
    dailyTargets: z.object({
      0: z.number(), // Sunday
      1: z.number(), // Monday
      2: z.number(), // Tuesday
      3: z.number(), // Wednesday
      4: z.number(), // Thursday
      5: z.number(), // Friday
      6: z.number(), // Saturday
    }),
  }),
]);

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
        message:
          "Tracking unit is required when tracking type is 'counter'",
        path: ["trackingUnit"],
      });
    }
  }
);
export type BehaviorTemplate = z.infer<typeof behaviorTemplateSchema>;

// These are stored at the user-level, as in, users/$userId/behaviors/$behaviorId
export const behaviorSchema = behaviorTemplateBase.extend({
  id: z.string().optional(),
  description: z.string(),
  ordinal: z.number().default(0),
  benefits: z.array(z.string()),
  drawbacks: z.array(z.string()),
  goal: dailyGoalSchema.optional(),
  lastTrackedAt: timestampSchema.optional(),
}).superRefine((val, ctx) => {
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
