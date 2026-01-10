import z from "zod";
import { planBaseSchema } from "./base";

export const emotionPlanSchema = planBaseSchema("emotion").extend({
  emotionName: z.string(),
});

export type EmotionPlan = z.infer<typeof emotionPlanSchema>;
