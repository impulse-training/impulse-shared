import { z } from "zod";
import { timestampSchema } from "../utils/timestampSchema";

/**
 * Admin-scheduled outreach notifications ("campaigns").
 *
 * A campaign lives at `scheduledNotifications/{id}`. A scheduled function walks
 * active campaigns and, when a targeted user's local time matches `localTime`,
 * delivers the push once (recorded in the `deliveries` subcollection so it never
 * re-sends). When `sessionTemplate` is set, the function pre-creates a durable
 * `general` journal session per user and the push deep-links to it.
 */

export const scheduledNotificationStatusSchema = z.enum([
  "active",
  "paused",
  "completed",
]);
export type ScheduledNotificationStatus = z.infer<
  typeof scheduledNotificationStatusSchema
>;

export const scheduledNotificationTargetingSchema = z.object({
  // Hand-picked user ids. When non-empty, takes precedence over the version range.
  userIds: z.array(z.string()).optional(),
  // App-version range: minAppVersion inclusive, maxAppVersion exclusive (e.g.
  // maxAppVersion "0.1.15" targets everyone below 0.1.15). Compared on the
  // numeric prefix of appVersion ("0.1.13:hash" -> [0,1,13]).
  minAppVersion: z.string().optional(),
  maxAppVersion: z.string().optional(),
  // Always effectively enforced by sendUserNotification (no token / disabled ->
  // skipped); kept explicit so the dashboard can surface it.
  requireNotificationsEnabled: z.boolean().optional(),
});
export type ScheduledNotificationTargeting = z.infer<
  typeof scheduledNotificationTargetingSchema
>;

// Tappable link button rendered as a `link` log after the messages. `link` is
// handed to the client (router.push for in-app routes, Linking.openURL for
// external https URLs like a TestFlight link).
export const outreachLinkSchema = z.object({
  text: z.string(),
  link: z.string(),
  buttonText: z.string(),
  icon: z.enum(["link", "rocket", "party", "check"]).optional(),
});
export type OutreachLink = z.infer<typeof outreachLinkSchema>;

export const scheduledNotificationSessionTemplateSchema = z.object({
  // Journal session title.
  title: z.string(),
  // One assistant_message per entry, in order — the durable explanation.
  messages: z.array(z.string()).min(1),
  // Optional tappable link button rendered after the messages (a `link` log).
  link: outreachLinkSchema.optional(),
});
export type ScheduledNotificationSessionTemplate = z.infer<
  typeof scheduledNotificationSessionTemplateSchema
>;

/**
 * Gate for a follow-up. ALL set conditions must hold at follow-up time. Reuses
 * the same app-version-range vocabulary as `targeting` (same `appVersionInRange`
 * evaluator), plus engagement gates derived from the outreach session's read
 * state. All conditions here are monotonic (a user who has seen/replied/updated
 * never un-does it), so a miss at due-time is permanent.
 */
export const scheduledNotificationFollowUpPredicateSchema = z.object({
  // Same semantics as targeting: maxAppVersion "1.16" => only if still below 1.16.
  minAppVersion: z.string().optional(),
  maxAppVersion: z.string().optional(),
  // Only fire if the user has NOT opened the outreach session (lastReadAt unset).
  notSeen: z.boolean().optional(),
  // Only fire if the user has NOT sent a message in the outreach session.
  notReplied: z.boolean().optional(),
});
export type ScheduledNotificationFollowUpPredicate = z.infer<
  typeof scheduledNotificationFollowUpPredicateSchema
>;

/**
 * A scheduled follow-up appended to the campaign's existing session, `delayHours`
 * after THIS user's initial delivery, if its predicate holds. Fires at most once
 * per user (tracked in the delivery's firedFollowUpIds).
 */
export const scheduledNotificationFollowUpSchema = z.object({
  id: z.string(),
  // Hours after the user's initial delivery before this becomes eligible.
  delayHours: z.number().min(0),
  predicate: scheduledNotificationFollowUpPredicateSchema.optional(),
  // Push copy for the follow-up.
  title: z.string(),
  body: z.string(),
  // Assistant messages appended to the session, in order. Empty = push-only
  // follow-up: the notification deep-links back to the session without adding
  // to it (a re-nudge at the same content, not a new drip beat).
  messages: z.array(z.string()),
  link: outreachLinkSchema.optional(),
});
export type ScheduledNotificationFollowUp = z.infer<
  typeof scheduledNotificationFollowUpSchema
>;

export const scheduledNotificationSchema = z.object({
  id: z.string().optional(),
  status: scheduledNotificationStatusSchema,

  // Push copy.
  title: z.string(),
  body: z.string(),

  // Deep-link target: either a pre-created journal session, or a raw url
  // (e.g. "/journal"). When sessionTemplate is set it wins.
  sessionTemplate: scheduledNotificationSessionTemplateSchema.optional(),
  url: z.string().optional(),

  // Local send time in each user's own timezone. Minute snaps to the 30-min
  // slot engine shared with recaps.
  localTime: z.object({
    hour: z.number().int().min(0).max(23),
    minute: z.union([z.literal(0), z.literal(30)]),
  }),

  // Optional user-local date window (YYYY-MM-DD). Fires only within [start, end].
  startDate: z.string().optional(),
  endDate: z.string().optional(),

  // Optional drip follow-ups appended to the campaign's session after the
  // initial delivery (only meaningful when sessionTemplate is set).
  followUps: z.array(scheduledNotificationFollowUpSchema).optional(),

  targeting: scheduledNotificationTargetingSchema,

  // Bookkeeping.
  deliveredCount: z.number().default(0),
  createdBy: z.string(),
  createdAt: timestampSchema.optional(),
  updatedAt: timestampSchema.optional(),
});
export type ScheduledNotification = z.infer<typeof scheduledNotificationSchema>;

/**
 * Per-user delivery record at
 * `scheduledNotifications/{id}/deliveries/{userId}`. Created (status "pending")
 * to claim the slot before sending, then updated to "sent". Its existence is the
 * one-time-per-user guarantee.
 */
export const scheduledNotificationDeliverySchema = z.object({
  id: z.string().optional(),
  // Mirrors the doc id (the delivery doc is keyed by userId). Stored as a field
  // too so a `collectionGroup("deliveries").where("userId","==",uid)` query can
  // list every campaign delivered to one user (e.g. the dashboard's per-user
  // outreach tab). Optional only because pre-backfill docs predate the field.
  userId: z.string().optional(),
  status: z.enum(["pending", "sent"]),
  sessionId: z.string().optional(),
  createdAt: timestampSchema,
  sentAt: timestampSchema.optional(),
  // Follow-ups (by id) that have fired / been permanently skipped for this user.
  firedFollowUpIds: z.array(z.string()).optional(),
  skippedFollowUpIds: z.array(z.string()).optional(),
});
export type ScheduledNotificationDelivery = z.infer<
  typeof scheduledNotificationDeliverySchema
>;
