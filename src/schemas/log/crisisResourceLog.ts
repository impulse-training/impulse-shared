import { z } from "zod";
import { logBaseSchema } from "./base";

export const crisisResourceLogSchema = logBaseSchema.extend({
  type: z.literal("crisis_resource"),
  isDisplayable: z.literal(true),
  data: z.object({
    triggeredByLogId: z.string(),
    riskLevel: z.enum(["low", "high"]),
  }),
});

export type CrisisResourceLog = z.infer<typeof crisisResourceLogSchema>;
