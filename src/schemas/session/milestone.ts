import { z } from "zod";
import { sessionBaseSchema } from "./base";

export const milestoneSessionSchema = sessionBaseSchema.extend({
  type: z.literal("milestone"),
  milestoneAchievementId: z.string(),
  milestoneBehaviorId: z.string(),
  rungDays: z.number().int().positive(),
  rungLabel: z.string(),
});

export type MilestoneSession = z.infer<typeof milestoneSessionSchema>;
