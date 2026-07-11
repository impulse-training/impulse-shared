import { z } from "zod";
import { timestampSchema } from "../../utils/timestampSchema";
import { logBaseSchema } from "./base";

/**
 * Card asking a returning user whether to turn scheduled recap reminders
 * back on (their `recap.paused` flag is set). Written by the
 * resume_recap_reminders deterministic task handler; the client stamps
 * respondedAt + resumed, and afterUserLogWrite clears recap.paused when
 * resumed is true.
 */
export const resumeRecapRemindersCtaLogSchema = logBaseSchema.extend({
  type: z.literal("resume_recap_reminders_cta"),
  isDisplayable: z.literal(true),
  data: z.object({
    triggeredByTaskId: z.string(),
    respondedAt: timestampSchema.optional(),
    resumed: z.boolean().optional(),
  }),
});

export type ResumeRecapRemindersCtaLog = z.infer<
  typeof resumeRecapRemindersCtaLogSchema
>;
