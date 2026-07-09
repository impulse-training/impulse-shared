import { z } from "zod";
import { logBaseSchema } from "./base";

export const humanSupportEscalationLogSchema = logBaseSchema.extend({
  type: z.literal("human_support_escalation"),
  isDisplayable: z.literal(true),
  data: z.object({
    issueSummary: z.string().optional(),
  }),
});

export type HumanSupportEscalationLog = z.infer<
  typeof humanSupportEscalationLogSchema
>;
