import { z } from "zod";
import { timestampSchema } from "../../utils/timestampSchema";
import { logBaseSchema } from "./base";

/**
 * A server-written card offering a short voice call, shown at the moments
 * contact matters most: containment start (a lapse was just logged) and
 * scheduled check-in delivery. Never written by the conversation model.
 *
 * Ignoring the card is free — no state changes, text continues around it.
 * `respondedWith` stays unset until the user either starts a call from the
 * card ("call", stamped when the call connects) or dismisses it ("text").
 */
export const voiceOfferLogSchema = logBaseSchema.extend({
  type: z.literal("voice_offer"),
  isDisplayable: z.literal(true),
  data: z.object({
    source: z.enum(["containLapse", "scheduledCheckIn"]),
    /** The offer line shown on the card. */
    prompt: z.string(),
    respondedWith: z.enum(["call", "text"]).optional(),
    respondedAt: timestampSchema.optional(),
  }),
});

export type VoiceOfferLog = z.infer<typeof voiceOfferLogSchema>;
