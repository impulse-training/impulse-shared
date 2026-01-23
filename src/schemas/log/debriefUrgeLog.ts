import { z } from "zod";
import { logBaseSchema } from "./base";
import { timestampSchema } from "../../utils/timestampSchema";

export const debriefUrgeLogSchema = logBaseSchema.extend({
  type: z.literal("debriefUrge"),
  isDisplayable: z.literal(true),
  data: z.object({
    actedOnUrge: z.boolean().nullable().optional(), // undefined/null = not answered yet, true = acted, false = resisted
    behaviorId: z.string().optional(),
    source: z.enum(["scheduled", "manual"]).optional(),
    resolvedAt: timestampSchema.optional(),
  }),
});

export type DebriefUrgeLog = z.infer<typeof debriefUrgeLogSchema>;
