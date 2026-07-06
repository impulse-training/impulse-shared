"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.capturedItemSchema = void 0;
const zod_1 = require("zod");
const timestampSchema_1 = require("../utils/timestampSchema");
/**
 * An idea written down during an urge via a tactic's capture step. Lives at
 * users/{uid}/tactics/{tacticId}/capturedItems/{itemId} and accumulates across
 * plays. The weekly capture review (scheduled_processCaptureReviews) queries
 * unreviewed items by collectionGroup at the start of the linked behavior's
 * contain-goal window, presents them in a review session, and stamps
 * reviewedAt/reviewSessionId so each item is surfaced exactly once.
 */
exports.capturedItemSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    // The idea, verbatim as the user wrote it.
    text: zod_1.z.string().min(1),
    // Owner uid, denormalized for collectionGroup queries.
    userId: zod_1.z.string(),
    // Parent tactic id, denormalized for convenience.
    tacticId: zod_1.z.string(),
    // Behavior this idea defers (from the capture step's behaviorId). Unset
    // items are swept into the user's next firing review.
    behaviorId: zod_1.z.string().optional(),
    // Session the idea was captured in, when captured mid-session.
    sessionId: zod_1.z.string().optional(),
    createdAt: timestampSchema_1.timestampSchema,
    // Set when a weekly review session surfaces this item.
    reviewedAt: timestampSchema_1.timestampSchema.nullable().default(null),
    reviewSessionId: zod_1.z.string().optional(),
});
