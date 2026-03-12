import { z } from "zod";
import { sessionBaseSchema } from "./base";

export const adjustmentSessionSchema = sessionBaseSchema.extend({
  type: z.literal("adjustment"),
});
export type AdjustmentSession = z.infer<typeof adjustmentSessionSchema>;
