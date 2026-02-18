import { z } from "zod";
import { timestampSchema } from "../../utils/timestampSchema";
import { logBaseSchema } from "./base";

export const enableNotificationsCtaLogSchema = logBaseSchema.extend({
  type: z.literal("enable_notifications_cta"),
  isDisplayable: z.literal(true),
  data: z.object({
    triggeredByUserMessageLogId: z.string(),
    respondedAt: timestampSchema.optional(),
    enabled: z.boolean().optional(),
  }),
});

export type EnableNotificationsCtaLog = z.infer<
  typeof enableNotificationsCtaLogSchema
>;
