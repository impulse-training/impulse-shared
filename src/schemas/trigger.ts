import { z } from "zod";
import { timestampSchema } from "../utils/timestampSchema";

// Supporting enums
export const socialContexts = [
  "alone",
  "with_partner",
  "with_friends",
  "public",
  "work",
] as const;

export const locationTypes = [
  "home",
  "bedroom",
  "workplace",
  "commute",
  "outdoors",
  "gym",
  "other",
] as const;

export const timeBands = [
  "late_night",
  "morning",
  "afternoon",
  "evening",
] as const;

export const triggerKinds = ["situation"] as const;

// Zod schemas for enums
export const socialContextSchema = z.enum(socialContexts);
export const locationTypeSchema = z.enum(locationTypes);
export const timeBandSchema = z.enum(timeBands);
export const triggerKindSchema = z.enum(triggerKinds);

// Usage statistics schema
const usageSchema = z.object({
  totalMoments: z.number().optional(),
  lastUsedAt: timestampSchema.optional().nullable(),
  "30dCount": z.number().optional(),
});

// Context schema
const contextSchema = z.object({
  social: socialContextSchema.optional(),
  locationType: locationTypeSchema.optional(),
  timeBand: timeBandSchema.optional(),
  tags: z.array(z.string()).optional(),
});

// Facets schema
const facetsSchema = z.object({
  situation: z.string().optional(),
  emotion: z.string().optional(),
  physio: z.string().optional(),
  cognitive: z.string().optional(),
});

// Main trigger schema
export const triggerSchema = z.object({
  id: z.string(),
  uid: z.string(),
  title: z.string(),
  kind: triggerKindSchema,
  facets: facetsSchema,
  context: contextSchema.optional(),
  createdAt: timestampSchema,
  updatedAt: timestampSchema,

  // Quick denorm for routing
  defaultPlanId: z.string().optional(),
  activeExperimentId: z.string().optional().nullable(),
  usage: usageSchema,
});

// Export types
export type SocialContext = z.infer<typeof socialContextSchema>;
export type LocationType = z.infer<typeof locationTypeSchema>;
export type TimeBand = z.infer<typeof timeBandSchema>;
export type TriggerKind = z.infer<typeof triggerKindSchema>;
export type Trigger = z.infer<typeof triggerSchema>;

// Type guard function
export const isTrigger = (value: unknown): value is Trigger =>
  triggerSchema.safeParse(value).success;
