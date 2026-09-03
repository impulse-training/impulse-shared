import { z } from "zod";
import { timestampSchema } from "../../utils/timestampSchema";
import { logBaseSchema } from "./base";

/**
 * A server-written marker in the session that scheduled a check-in: "I'll
 * check in at 6:15pm". Written once, at scheduling time, by the
 * scheduleCheckIn tool (`source: "assistant"`) or by the containment
 * follow-up task (`source: "containFollowUp"`). Never written by the client.
 *
 * The card is a pointer, not a copy: status (pending/sent) and the session the
 * check-in eventually landed in live on `users/{uid}/scheduledCheckIns/
 * {checkInId}`, which the client watches. `scheduledFor` and `message` are
 * duplicated here only so the card renders before that doc loads and keeps
 * rendering if it is ever deleted.
 */
export const scheduledCheckInLogSchema = logBaseSchema.extend({
  type: z.literal("scheduled_check_in"),
  isDisplayable: z.literal(true),
  data: z.object({
    checkInId: z.string(),
    scheduledFor: timestampSchema,
    message: z.string(),
    source: z.enum(["assistant", "containFollowUp"]),
  }),
});

export type ScheduledCheckInLog = z.infer<typeof scheduledCheckInLogSchema>;
