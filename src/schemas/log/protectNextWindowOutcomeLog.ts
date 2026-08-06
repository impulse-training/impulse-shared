import { z } from "zod";
import { logBaseSchema } from "./base";

/**
 * The durable record of a protect_next_window arc — resisted-path containment
 * (see protectNextWindowTaskSchema) — written by the logNextWindowOutcome tool
 * when the arc settles.
 *
 * Non-displayable: the conversation itself is already in the thread; this log
 * exists to be queried. `commitment` is the field with a future: it is what
 * the evening recap will read back ("this morning you said you'd start with
 * the outline — how did it go?"), so it is captured verbatim, in the user's
 * words, only when the user actually committed to something specific.
 */
export const protectNextWindowOutcomeLogSchema = logBaseSchema.extend({
  type: z.literal("protect_next_window_outcome"),
  isDisplayable: z.literal(false),
  data: z.object({
    /** The protect_next_window session task this arc completed. */
    taskId: z.string(),
    /** Which time-shaped variant ran (see protectNextWindowVariantSchema). */
    variant: z.string().optional(),
    /** Where the arc landed, near-verbatim. */
    outcome: z.string(),
    /** The specific step the user committed to, verbatim — only if they did. */
    commitment: z.string().optional(),
    /** How they feel about staying on track, in their words — only if given. */
    confidence: z.string().optional(),
  }),
});

export type ProtectNextWindowOutcomeLog = z.infer<typeof protectNextWindowOutcomeLogSchema>;
