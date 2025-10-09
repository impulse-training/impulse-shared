import { z } from "zod";
import { timestampSchema } from "../utils/timestampSchema";

/**
 * Schema for user summary documents stored in userSummaries collection
 * Contains pre-computed summary information for AI agents
 */
export const userSummarySchema = z.object({
  userId: z.string(),
  summary: z.string(),
  createdAt: timestampSchema.optional(),
  updatedAt: timestampSchema.optional(),
});

export type UserSummary = z.infer<typeof userSummarySchema>;

export const isUserSummary = (value: unknown): value is UserSummary =>
  userSummarySchema.safeParse(value).success;
