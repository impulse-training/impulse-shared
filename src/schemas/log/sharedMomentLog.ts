import { z } from "zod";
import { documentReferenceSchema } from "../../utils/documentReferenceSchema";
import { emojiIdSchema } from "../emojiId";
import { sessionSummarySchema } from "../sessionSummary";
import { logBaseSchema } from "./base";

export const sharedMomentLogSchema = logBaseSchema.extend({
  type: z.literal("shared_moment"),
  // For support group feed rendering
  isDisplayable: z.literal(true),
  data: z.object({
    // Reference to the original session document (users/{uid}/sessions/{sessionId})
    sessionRef: documentReferenceSchema,
    // session schema
    sessionSummaryData: sessionSummarySchema,
    // Snapshot of the sharer's emoji identity (to avoid extra reads)
    emojiId: emojiIdSchema.optional(),
    // Optional custom message when sharing (e.g., from NotifySupport step)
    message: z.string().optional(),
  }),
});

export type SharedMomentLog = z.infer<typeof sharedMomentLogSchema>;
