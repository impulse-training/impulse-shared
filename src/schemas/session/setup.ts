import { z } from "zod";
import { sessionBaseSchema } from "./base";

export const setupSessionSchema = sessionBaseSchema.extend({
  type: z.literal("setup"),
  isPhoneCentric: z.boolean().optional(),
  behaviorId: z.string().optional(),
});
export type SetupSession = z.infer<typeof setupSessionSchema>;
