import { z } from "zod";
import { logBaseSchema } from "../base";

export const voiceTurnSchema = z.object({
  callLogId: z.string(),
  // The speaker was cut off (assistant turns only in practice).
  interrupted: z.boolean().optional(),
  // Copied from a legacy call's transcriptItems subcollection after the fact.
  // The log write trigger skips these: they must not bump session recency,
  // unread state or the debrief timer for a call that ended weeks ago.
  backfilled: z.boolean().optional(),
});

// Message logs can be user, assistant, or system messages. We create a common type because they share
// a component for rendering.
export const messageBaseLogSchema = logBaseSchema.extend({
  type: z.enum(["user_message", "assistant_message", "system_message"]),
  // Message logs are always displayed in the UI
  isDisplayable: z.literal(true),
  data: z.object({
    // Keep loose for now to avoid coupling to OpenAI types at runtime
    message: z.any(),
  }),
  // Set on turns transcribed from a voice call. The call log named by
  // callLogId is the boundary card; the message logs carrying its id ARE the
  // transcript. Writers: the voice agent (live) and the transcript backfill.
  voice: voiceTurnSchema.optional(),
});

export type VoiceTurn = z.infer<typeof voiceTurnSchema>;
