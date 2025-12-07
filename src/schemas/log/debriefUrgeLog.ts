import { z } from "zod";
import { timestampSchema } from "../../utils/timestampSchema";
import { logBaseSchema } from "./base";

export const debriefUrgeLogSchema = logBaseSchema.extend({
  type: z.literal("debriefUrge"),
  isDisplayable: z.literal(true),
  data: z.object({
    // When the debrief should occur (countdown target)
    debriefAfter: timestampSchema,
    // When the user actually debriefed (undefined = not yet debriefed)
    debriefedAt: timestampSchema.optional(),
    // User's response to "did you act on the urge?" (only relevant after debrief)
    actedOnUrge: z.boolean().optional(),
  }),
});

export type DebriefUrgeLog = z.infer<typeof debriefUrgeLogSchema>;
