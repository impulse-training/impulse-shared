import { z } from "zod";
import { logBaseSchema } from "./base";

export const debriefUrgeLogSchema = logBaseSchema.extend({
  type: z.literal("debriefUrge"),
  isDisplayable: z.literal(true),
  data: z.object({
    actedOnUrge: z.boolean().optional(), // undefined = not answered yet
  }),
});

export type DebriefUrgeLog = z.infer<typeof debriefUrgeLogSchema>;
