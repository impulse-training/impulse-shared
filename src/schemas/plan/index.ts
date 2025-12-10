import { z } from "zod";
import { withIdSchema } from "../../utils/withId";
import { EmotionPlan, emotionPlanSchema } from "./emotionPlan";
import { ImpulsePlan, impulsePlanSchema } from "./impulsePlan";
import { LocationPlan, locationPlanSchema } from "./locationPlan";
import { TimePlan, timePlanSchema } from "./timePlan";

export * from "./emotionPlan";
export * from "./impulsePlan";
export * from "./locationPlan";
export * from "./timePlan";

export const planSchema = z.discriminatedUnion("type", [
  emotionPlanSchema,
  impulsePlanSchema,
  timePlanSchema,
  locationPlanSchema,
]);

export type Plan = z.infer<typeof planSchema>;

// WithId variant for plans
export const planWithIdSchema = z.union([
  withIdSchema(emotionPlanSchema),
  withIdSchema(impulsePlanSchema),
  withIdSchema(timePlanSchema),
  withIdSchema(locationPlanSchema),
]);

export const planIsTimePlan = (value: Plan): value is TimePlan =>
  value.type === "time";
export const isValidTimePlan = (value: unknown): value is TimePlan =>
  timePlanSchema.safeParse(value).success;

export const planIsLocationPlan = (value: Plan): value is LocationPlan =>
  value.type === "location";
export const isValidLocationPlan = (value: unknown): value is LocationPlan =>
  locationPlanSchema.safeParse(value).success;

export const planIsImpulsePlan = (value: Plan): value is ImpulsePlan =>
  value.type === "impulse";
export const isValidImpulsePlan = (value: unknown): value is ImpulsePlan =>
  impulsePlanSchema.safeParse(value).success;

export const planIsEmotionPlan = (value: Plan): value is EmotionPlan =>
  value.type === "emotion";
export const isValidEmotionPlan = (value: unknown): value is EmotionPlan =>
  emotionPlanSchema.safeParse(value).success;
