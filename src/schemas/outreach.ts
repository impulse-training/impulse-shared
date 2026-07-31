import { z } from "zod";
import { timestampSchema } from "../utils/timestampSchema";

/**
 * Proactive outreach engine.
 *
 * Outreach RULES (code, in impulse-functions/src/outreach/rules) detect
 * user-specific moments worth opening a conversation about — a relapse
 * yesterday, a new/flaky plan scheduled for tomorrow morning — and write
 * PROPOSALS to `users/{uid}/plannedOutreach/{ruleId}_{suffix}`. A single
 * delivery engine drains due proposals through one policy chokepoint (quiet
 * hours, daily budget, recent-activity deferral) and delivers the survivors:
 * an LLM-composed opening message in a new `general` session whose
 * `defaultSystemPrompt` is seeded so the conversation continues with context,
 * plus a push deep-linking to it.
 *
 * The doc id is deterministic per rule occurrence — its existence is the
 * once-per-occurrence guarantee (same pattern as scheduledNotification
 * deliveries). Every proposal ends in a terminal status, so the collection is
 * also the audit trail of what the engine decided and why.
 */

export const plannedOutreachStatusSchema = z.enum([
  // Written by a rule detector; awaiting delivery (deliverAt may defer).
  "proposed",
  // Delivered: session created + push attempted.
  "sent",
  // Terminally dropped by policy; see suppressedReason.
  "suppressed",
  // Manually cancelled (admin/coach) before delivery.
  "cancelled",
]);
export type PlannedOutreachStatus = z.infer<typeof plannedOutreachStatusSchema>;

export const plannedOutreachSchema = z.object({
  id: z.string().optional(),
  ruleId: z.string(),
  userId: z.string(),
  status: plannedOutreachStatusSchema,

  // Higher wins when multiple proposals compete for the daily budget.
  priority: z.number(),

  // Becomes eligible for delivery at this time. The engine may push this
  // forward (quiet hours, user currently active) without changing status.
  deliverAt: timestampSchema,
  // Hard end of relevance — a night-before nudge is nonsense the next
  // morning. Due proposals past this are suppressed, not delivered late.
  expiresAt: timestampSchema,

  // Copy + context authored by the rule at detection time.
  sessionTitle: z.string(),
  notificationTitle: z.string(),
  // System prompt for the one-shot LLM compose of the opening message.
  composeInstructions: z.string(),
  // Seeded into the session's defaultSystemPrompt so the AI has the outreach
  // context when the user replies (same mechanism as scheduled check-ins).
  sessionInstructions: z.string(),
  // Used verbatim when LLM compose fails or is disabled.
  fallbackMessage: z.string(),

  // Delivery bookkeeping.
  sessionId: z.string().nullable().optional(),
  sentAt: timestampSchema.nullable().optional(),
  // User-local YYYY-MM-DD of the send — lets the daily budget check count
  // today's sends with a single equality query.
  sentDateString: z.string().nullable().optional(),
  suppressedReason: z.string().nullable().optional(),
  decidedAt: timestampSchema.nullable().optional(),

  createdAt: timestampSchema,
  updatedAt: timestampSchema,
});
export type PlannedOutreach = z.infer<typeof plannedOutreachSchema>;

/**
 * Global per-rule config at `outreachRules/{ruleId}`. Rules are enabled by
 * default in code; this doc exists to pause a rule fleet-wide or tune its
 * params without a deploy. Absence of the doc means "defaults".
 */
export const outreachRuleConfigSchema = z.object({
  id: z.string().optional(),
  enabled: z.boolean().optional(),
  /**
   * Allowlist. When present and non-empty, the rule only proposes outreach for
   * these users — everyone else is skipped as if the rule were disabled.
   * Absent or empty means every user (the normal fleet-wide state).
   *
   * This is how a rule is trialled on real accounts before general release:
   * `enabled: true` plus a one-user allowlist. It is deliberately separate from
   * `params` — targeting is enforced centrally by the engine, not interpreted
   * by individual rules — and from
   * `users/{uid}/outreachRuleSettings/{ruleId}.disabled`, which is the user's
   * own opt-out and can only ever remove a user, never add one.
   */
  userIds: z.array(z.string()).optional(),
  // Rule-specific tuning knobs, merged over the rule's defaults (each rule
  // documents its own params).
  params: z.record(z.string(), z.any()).optional(),
  createdAt: timestampSchema.optional(),
  updatedAt: timestampSchema.optional(),
});
export type OutreachRuleConfig = z.infer<typeof outreachRuleConfigSchema>;

/**
 * Per-user override at `users/{uid}/outreachRuleSettings/{ruleId}` — the
 * user-facing (or coach-set) opt-out and customization point for one rule.
 */
export const outreachRuleUserSettingsSchema = z.object({
  id: z.string().optional(),
  disabled: z.boolean().optional(),
  // Overrides merged over global params for this user.
  params: z.record(z.string(), z.any()).optional(),
  createdAt: timestampSchema.optional(),
  updatedAt: timestampSchema.optional(),
});
export type OutreachRuleUserSettings = z.infer<
  typeof outreachRuleUserSettingsSchema
>;
