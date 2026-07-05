import { z } from "zod";
import { baseStepSchema } from "./base";
import { timestampSchema } from "../../../utils/timestampSchema";

/**
 * A capture step: during an urge, the user writes the idea down instead of
 * acting on it. Each submission is appended to the tactic's `capturedItems`
 * subcollection (users/{uid}/tactics/{tacticId}/capturedItems) and surfaced
 * later by the weekly capture review (scheduled_processCaptureReviews) at the
 * start of the linked behavior's contain-goal window. Deferral, not denial:
 * the idea gets a legitimate home instead of being suppressed.
 */
export const captureStepSchema = baseStepSchema.extend({
  mode: z.literal("capture"),
  id: z.string().optional(),
  createdAt: timestampSchema.optional(),
  updatedAt: timestampSchema.optional(),
  // The prompt, e.g. "Write the idea down. It will be waiting for you."
  text: z.string().min(1),
  // Input placeholder shown in the text field.
  placeholder: z.string().optional(),
  // Links captured items to a behavior with a contain goal, so the weekly
  // review for that behavior picks them up. Unset items are swept into the
  // user's next firing review.
  behaviorId: z.string().optional(),
});

export type CaptureStep = z.infer<typeof captureStepSchema>;
