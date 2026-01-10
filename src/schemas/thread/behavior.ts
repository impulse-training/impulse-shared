import { z } from "zod";
import { threadBaseSchema } from "./base";

export const behaviorThreadSchema = threadBaseSchema.extend({
  type: z.literal("behavior"),
});
export type BehaviorThread = z.infer<typeof behaviorThreadSchema>;
