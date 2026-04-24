import { z } from "zod";
import { timestampSchema } from "../utils/timestampSchema";

export const milestoneRungSchema = z.object({
  days: z.number().int().positive(),
  label: z.string(),
  isCustom: z.boolean().optional(),
});
export type MilestoneRung = z.infer<typeof milestoneRungSchema>;

/**
 * Stored at users/{userId}/behaviors/{behaviorId}/milestoneAchievements/{achievementId}
 *
 * Append-only: once earned, an achievement is permanent — it persists through relapses.
 */
export const milestoneAchievementSchema = z.object({
  id: z.string().optional(),
  rungDays: z.number().int().positive(),
  rungLabel: z.string(),
  achievedAt: timestampSchema,
  streakLengthAtAchievement: z.number().int(),
  reflectionSessionId: z.string().optional(),
  reflectionSummary: z.string().optional(),
});
export type MilestoneAchievement = z.infer<typeof milestoneAchievementSchema>;

export const milestoneProgressSchema = z.object({
  lastAchievedRung: milestoneRungSchema.nullable(),
  nextRung: milestoneRungSchema.nullable(),
  currentStreakDays: z.number().int(),
});
export type MilestoneProgress = z.infer<typeof milestoneProgressSchema>;
