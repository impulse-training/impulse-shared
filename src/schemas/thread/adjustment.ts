import { z } from "zod";
import { threadBaseSchema } from "./base";

export const adjustmentThreadSchema = threadBaseSchema.extend({
  type: z.literal("adjustment"),
});
export type AdjustmentThread = z.infer<typeof adjustmentThreadSchema>;
