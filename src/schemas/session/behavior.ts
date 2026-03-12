import { z } from "zod";
import { sessionBaseSchema } from "./base";

export const behaviorSessionSchema = sessionBaseSchema.extend({
  type: z.literal("behavior"),
});
export type BehaviorSession = z.infer<typeof behaviorSessionSchema>;
