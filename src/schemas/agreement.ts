import { z } from "zod";
import { timestampSchema } from "../utils/timestampSchema";

/**
 * ONE tactic the user agreed, in advance, to try the next time a particular
 * situation comes round.
 *
 * This is the whole of "Next up". It is not a plan, a sequence, or a playlist —
 * it is a promise about a single next action, made in a calm moment, for a
 * moment that will not be calm.
 *
 * WHY IT IS SINGULAR, AND WHY THAT IS A SEPARATE FIELD
 *
 * `trigger.tactics` and `behavior.tactics` already hold an ordered list, and the
 * impulse moment used to walk it. That is the model being abandoned: a list
 * invites sequencing, sequencing invites "what's next", and the moment stops
 * being about the person in front of you. Narrowing the existing array to one
 * entry would have left the shape that caused it, so the agreement gets its own
 * field and the arrays are deprecated out.
 *
 * WHY AN AGREEMENT IS NOT OFFERED AS A CHOICE
 *
 * Everywhere else in the impulse moment the user gets two options, because
 * choosing is the intervention. An agreement is the one exception, and for the
 * same reason rather than despite it: the user ALREADY chose, earlier, with a
 * clear head. Putting an alternative beside it would be second-guessing their
 * own decision at the moment they are least able to defend it. So an open
 * agreement is delivered alone. Choice resumes once it has been honoured.
 */
export const tacticAgreementSchema = z.object({
  tacticId: z.string(),
  /** Firestore path, so the card can hydrate the real tactic. */
  tacticRefPath: z.string(),
  /** Denormalised: the card reads as the user agreed it, not as it is now. */
  tacticTitle: z.string(),
  /** When the user last stood behind this. Drives freshness framing, never deletion. */
  agreedAt: timestampSchema,
  /** The session the agreement was made in, when it came from a conversation. */
  agreedInSessionId: z.string().optional(),
  /**
   * The last time the user actually did it when the situation came round.
   *
   * An agreement is not spent by being honoured — the point is that it is
   * standing, and the same promise holds next time. This records that it
   * worked, and it is what "honoured 3 times" is counted from.
   */
  lastHonouredAt: timestampSchema.optional(),
  honouredCount: z.number().int().nonnegative().optional(),
  /**
   * The last time the situation came round and the user did NOT do it — they
   * declined, or the session ended without it.
   *
   * Kept beside the honoured count rather than deleted, because an agreement
   * that keeps being passed over is the signal to revisit it with the user,
   * not to quietly drop it.
   */
  lastPassedAt: timestampSchema.optional(),
  passedCount: z.number().int().nonnegative().optional(),
});

export type TacticAgreement = z.infer<typeof tacticAgreementSchema>;

/**
 * An agreement the user has passed over more often than they have kept, with
 * enough attempts to mean something. Worth raising with them; never auto-removed.
 */
export function agreementIsFaltering(agreement: TacticAgreement): boolean {
  const honoured = agreement.honouredCount ?? 0;
  const passed = agreement.passedCount ?? 0;
  return passed >= 2 && passed > honoured;
}
