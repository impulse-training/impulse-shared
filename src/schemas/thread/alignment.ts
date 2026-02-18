import { z } from "zod";
import { threadBaseSchema } from "./base";

export const alignmentThreadSchema = threadBaseSchema.extend({
  type: z.literal("alignment"),
  notificationsEnabled: z.boolean().nullable(),
});
export type AlignmentThread = z.infer<typeof alignmentThreadSchema>;
