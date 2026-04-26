import { z } from "zod";
import { sessionBaseSchema } from "./base";

// TODO: Remove this file after 2026-05-26. Legacy schema for the
// "alignment" -> "onboarding" rename.
export const alignmentSessionSchema = sessionBaseSchema.extend({
  type: z.literal("alignment"),
  notificationsEnabled: z.boolean().nullable(),
});
export type AlignmentSession = z.infer<typeof alignmentSessionSchema>;
