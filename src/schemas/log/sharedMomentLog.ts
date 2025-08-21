import { z } from "zod";
import { logBaseSchema } from "./base";
import { documentReferenceSchema } from "../../utils/documentReferenceSchema";
import { emojiIdSchema } from "../userProfile";

export const sharedMomentLogSchema = logBaseSchema.extend({
  type: z.literal("shared_moment"),
  // For support group feed rendering
  isDisplayable: z.literal(true),
  data: z.object({
    // Reference to the original thread document (users/{uid}/threads/{threadId})
    threadRef: documentReferenceSchema,
    // Snapshot of the sharer's emoji identity (to avoid extra reads)
    emojiId: emojiIdSchema.optional(),
  }),
});

export type SharedMomentLog = z.infer<typeof sharedMomentLogSchema>;
