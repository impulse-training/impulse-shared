import { z } from "zod";
import { threadBaseSchema } from "./base";

export const alignmentThreadSchema = threadBaseSchema.extend({
  type: z.literal("alignment"),
});
export type AlignmentThread = z.infer<typeof alignmentThreadSchema>;
