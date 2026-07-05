import { z } from "zod";
import { timestampSchema } from "../utils/timestampSchema";

/**
 * An idea written down during an urge via a tactic's capture step. Lives at
 * users/{uid}/tactics/{tacticId}/capturedItems/{itemId} and accumulates across
 * plays. The weekly capture review (scheduled_processCaptureReviews) queries
 * unreviewed items by collectionGroup at the start of the linked behavior's
 * contain-goal window, presents them in a review session, and stamps
 * reviewedAt/reviewSessionId so each item is surfaced exactly once.
 */
export const capturedItemSchema = z.object({
  id: z.string().optional(),
  // The idea, verbatim as the user wrote it.
  text: z.string().min(1),
  // Owner uid, denormalized for collectionGroup queries.
  userId: z.string(),
  // Parent tactic id, denormalized for convenience.
  tacticId: z.string(),
  // Behavior this idea defers (from the capture step's behaviorId). Unset
  // items are swept into the user's next firing review.
  behaviorId: z.string().optional(),
  // Session the idea was captured in, when captured mid-session.
  sessionId: z.string().optional(),
  createdAt: timestampSchema,
  // Set when a weekly review session surfaces this item.
  reviewedAt: timestampSchema.nullable().default(null),
  reviewSessionId: z.string().optional(),
});

export type CapturedItem = z.infer<typeof capturedItemSchema>;
