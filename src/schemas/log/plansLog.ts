import { z } from "zod";
import { timestampSchema } from "../../utils/timestampSchema";
import { planWithIdSchema } from "../plan";
import { logBaseSchema } from "./base";

// Plans Log Schema - supports multiple plans (for behaviors or scheduled plans)
export const plansLogSchema = logBaseSchema.extend({
  type: z.literal("plans"),
  /**
   * Set to false by a writer that must not wake the assistant. A newly created
   * trigger-sourced plans log normally earns an AI turn; background writers
   * (the impulse assessor) match plans alongside a turn already in flight, and
   * a second turn for one user message makes the model act on state it has not
   * seen. Same opt-out shape as behaviorLog's.
   */
  shouldZaraRespond: z.boolean().optional(),
  // Usually displayed, but "planning"-mode plans logs (recap planning phase) are
  // written non-displayable, so permit both.
  isDisplayable: z.boolean(),
  data: z.object({
    // trigger/behavior = user-owned plans (the plan sheet renders these).
    // scheduled = scheduled plan sessions.
    // tags/improvised = DEPRECATED. Engine-matched plans are no longer written
    // as plans logs — they live on the session as `suggestedPlan` and are
    // delivered inline as tactic cards. Retained here so historical docs still
    // validate against `scheduled_validateSchemas`.
    source: z.union([
      z.literal("trigger"),
      z.literal("behavior"),
      z.literal("scheduled"),
      z.literal("tags"),
      z.literal("improvised"),
    ]),
    // "live" (default) = plan to start now (impulse sessions)
    // "planning" = proposed plan for next time (recap planning phase)
    mode: z.enum(["live", "planning"]).optional(),
    // The trigger these plans are for (optional - null means "something else")
    triggerId: z.string().nullable().optional(),
    // The behavior these plans are for (set when source === "behavior")
    behaviorId: z.string().nullable().optional(),
    // Array of plans (each plan has tacticsByPath on it)
    plans: z.array(
      z.object({
        planId: z.string(),
        plan: planWithIdSchema,
        startedAt: timestampSchema.optional(),
        completedAt: timestampSchema.optional(),
        // How this plan delivery ended. A plan that resolved the urge before
        // every step was used is a SUCCESS with steps unspent, not an
        // incomplete plan:
        // - resolved_early: user confirmed the urge passed mid-plan
        // - completed_all: every step was completed
        // - abandoned: session ended/plan cleared with steps unspent and no
        //   resolution signal
        outcome: z
          .enum(["resolved_early", "completed_all", "abandoned"])
          .optional(),
        // When the outcome was recorded (resolved_early sets this at the
        // moment the user confirms the urge passed).
        resolvedAt: timestampSchema.optional(),
      }),
    ),
    // Index of the currently active/selected plan in the carousel
    activeIndex: z.number().optional(),
    // When a plan was accepted/started
    acceptedAt: timestampSchema.optional(),
  }),
});

export type PlansLog = z.infer<typeof plansLogSchema>;
