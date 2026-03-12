import { z } from "zod";
import { sessionBaseSchema } from "./base";

export const alignmentSessionSchema = sessionBaseSchema.extend({
  type: z.literal("alignment"),
  notificationsEnabled: z.boolean().nullable(),
});
export type AlignmentSession = z.infer<typeof alignmentSessionSchema>;
