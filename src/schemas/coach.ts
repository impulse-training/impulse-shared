/**
 * Coach Schema (Zod)
 *
 * Defines the schema for coaches who can provide support to users.
 * A coach's document ID matches the userId of the user who created it.
 */
import { z } from "zod";
import { timestampSchema } from "../utils/timestampSchema";
import { attachmentSchema } from "./attachment";

export const coachSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  credentials: z.string(),
  avatar: attachmentSchema.optional(),
  focusBehaviors: z.array(z.string()).default([]),
  createdAt: timestampSchema.optional(),
  updatedAt: timestampSchema.optional(),
});

export type Coach = z.infer<typeof coachSchema>;

export const isValidCoach = (value: unknown): value is Coach => {
  return coachSchema.safeParse(value).success;
};
