import { z } from "zod";
import { logBaseSchema } from "./base";

/**
 * The durable record of a user's closing recap reflection — the optional
 * user-authored beat that ends the recap on a note of their own choosing (see
 * userData recap.closingReflection).
 *
 * Written by the `logClosingReflection` tool once the beat has been had, NOT
 * by the user directly: `response` is the assistant's faithful record of what
 * the user said, in the user's own words. Non-displayable — the exchange
 * itself is already in the thread as ordinary messages, so rendering a card
 * would duplicate it. This log exists to be queried: it is what a future
 * "look back over your reflections" surface reads, and it is the only place
 * these answers accumulate as structured data.
 *
 * `prompt` is snapshotted rather than referenced so an answer stays
 * interpretable after the user edits or deletes the question that produced it.
 */
export const closingReflectionLogSchema = logBaseSchema.extend({
  type: z.literal("closing_reflection"),
  isDisplayable: z.literal(false),
  data: z.object({
    /** The user's question text as it stood when this beat ran. */
    prompt: z.string(),
    /** What the user said, in their own words. */
    response: z.string(),
    /** The session task this beat completed. */
    taskId: z.string().optional(),
  }),
});

export type ClosingReflectionLog = z.infer<typeof closingReflectionLogSchema>;
