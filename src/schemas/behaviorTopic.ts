import { z } from "zod";
import { timestampSchema } from "../utils/timestampSchema";

/**
 * BehaviorTopic represents a grouping of behaviors by topic/issue area.
 * Examples: "Sleep", "Exercise", "Substances", "Anxiety", "Focus", etc.
 *
 * These are stored in a top-level `behaviorTopics` collection and are used
 * for matching users to support groups with similar focus areas.
 *
 * Note: This is different from the behavior "category" (helpful/unhelpful/mixed/unsure)
 * which describes the user's relationship to the behavior.
 */
export const behaviorTopicSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional(),
  // Slug for URL-friendly identification
  slug: z.string(),
  // Icon or emoji for display
  icon: z.string().optional(),
  // Whether this topic was created by the system or by AI
  isSystemDefined: z.boolean().default(true),
  createdAt: timestampSchema.optional(),
  updatedAt: timestampSchema.optional(),
});

export type BehaviorTopic = z.infer<typeof behaviorTopicSchema>;

export const isBehaviorTopic = (value: unknown): value is BehaviorTopic =>
  behaviorTopicSchema.safeParse(value).success;
