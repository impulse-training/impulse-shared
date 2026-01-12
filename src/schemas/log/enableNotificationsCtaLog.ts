import { z } from "zod";
import { logBaseSchema } from "./base";

export const enableNotificationsCtaLogSchema = logBaseSchema.extend({
  type: z.literal("enable_notifications_cta"),
  isDisplayable: z.literal(true),
  data: z.object({
    supportGroupId: z.string(),
    triggeredByUserMessageLogId: z.string(),
  }),
});

export type EnableNotificationsCtaLog = z.infer<
  typeof enableNotificationsCtaLogSchema
>;
