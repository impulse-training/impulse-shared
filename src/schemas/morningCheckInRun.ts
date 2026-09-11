import { z } from "zod";
import { timestampSchema } from "../utils/timestampSchema";

/**
 * Why a morning's calling stopped. Absent while it is still in progress.
 */
export const morningCheckInStoppedReasonSchema = z.enum([
  // The user picked up: a caller reached the room.
  "answered",
  // Every attempt in the window went unanswered.
  "exhausted",
  // The phone could not be rung at all, so the check-in went as a push.
  // There is nothing to retry: a push is a delivery, and repeating it every
  // half hour would be nagging rather than calling back.
  "delivered-as-push",
]);
export type MorningCheckInStoppedReason = z.infer<
  typeof morningCheckInStoppedReasonSchema
>;

/**
 * One morning's calling, at `users/{uid}/morningCheckInRuns/{dateString}`.
 *
 * A ringing phone is easy to miss — asleep, in a pocket, or (the case this
 * exists for) silenced by a Focus mode iOS forgot to turn off. So the morning
 * check-in calls back: the scheduler ticks every half hour anyway, and this
 * doc is what tells each tick whether today's call has already been answered,
 * is still owed a retry, or is finished.
 *
 * It deliberately does NOT live on the session. Which session hosts the
 * morning can CHANGE between attempts — the first call targets yesterday's
 * recap while its totals are unconfirmed, and if the user confirms them by
 * hand at 9:45 the next attempt belongs in a general session instead. State
 * kept on the session would be invisible to the new one and the user would be
 * rung as if for the first time.
 */
export const morningCheckInRunSchema = z.object({
  id: z.string().optional(),
  /** The user's local date this morning belongs to (YYYY-MM-DD). */
  dateString: z.string(),
  /** The session the most recent attempt opened into. */
  sessionId: z.string(),
  /** Rings sent so far today, including the first. */
  attempts: z.number().int().positive(),
  firstAttemptAt: timestampSchema,
  lastAttemptAt: timestampSchema,
  /** The call the most recent attempt prepared; null when it went as a push. */
  lastCallLogId: z.string().nullable().optional(),
  /** Set the moment a tick observes that a caller reached one of our rooms. */
  answeredAt: timestampSchema.nullable().optional(),
  stoppedReason: morningCheckInStoppedReasonSchema.optional(),
  createdAt: timestampSchema,
  updatedAt: timestampSchema,
});

export type MorningCheckInRun = z.infer<typeof morningCheckInRunSchema>;
