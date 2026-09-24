import { z } from "zod";
import { timestampSchema } from "../utils/timestampSchema";

/**
 * A thread: something the user said is coming up, with the days it matters.
 *
 * "I'm really stressed about a meeting this Friday", said on a Wednesday, is
 * neither a durable fact about the person (the brain's business) nor part of
 * the last day's conversation (what the morning call already reads). It is
 * live from Wednesday until the day after Friday, and any conversation in
 * that window should know it without the user having to say it again.
 *
 * Lives at users/{uid}/threads/{id}. Extracted when a session is summarised
 * (the transcript is final by then), from the user's own turns only. Dates
 * are the user's local YYYY-MM-DD strings, resolved at extraction time
 * against the day the user said it, so "this Friday" is a date, not a word.
 *
 * A thread is live while `relevantFrom <= today <= relevantUntil` and open;
 * `relevantUntil` runs one day past the event so the next conversation can
 * ask how it went. Nothing sweeps them: the window is the lifecycle, and
 * `closed` exists for the user or the coach to end one early.
 */
export const threadStatusSchema = z.enum(["open", "closed"]);

export const threadSchema = z.object({
  id: z.string().optional(),
  userId: z.string(),
  /** What is coming up, in the user's own terms: "a meeting with her manager". */
  what: z.string().min(1),
  /** How they said they felt about it, if they did: "stressed", "looking forward to it". */
  feeling: z.string().optional(),
  /** The user's local date they said it (YYYY-MM-DD). */
  saidOn: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  /** The session it was said in. Re-summarising that session replaces its threads. */
  sourceSessionId: z.string(),
  /** First local date the thread should be in a conversation's context (YYYY-MM-DD). */
  relevantFrom: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  /** Last local date it should be (YYYY-MM-DD), one day past the event. */
  relevantUntil: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  /** The event's own local date, when the user gave one; absent for "sometime next week". */
  eventDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
  status: threadStatusSchema,
  closedAt: timestampSchema.nullable().optional(),
  createdAt: timestampSchema,
  updatedAt: timestampSchema,
});

export type Thread = z.infer<typeof threadSchema>;
export type ThreadStatus = z.infer<typeof threadStatusSchema>;
