import { z } from "zod";
import { documentReferenceSchema } from "../../utils/documentReferenceSchema";
import { timestampSchema } from "../../utils/timestampSchema";
import { planWithIdSchema } from "../plan";
import { tacticPhaseSchema } from "../tactic/tactic";
import { sessionBaseSchema } from "./base";
import { sessionPhaseSchema } from "./phase";

export const recommendedTacticSchema = z.object({
  tacticId: z.string(),
  title: z.string(),
  description: z.string().optional(),
  // Denormalised copy of the tactic's phase. `.catch(undefined)` keeps a stray
  // legacy value from failing the whole-session safeParse used by the
  // `isImpulseSession` type guard.
  phase: tacticPhaseSchema.optional().catch(undefined),
  firstStepText: z.string().optional(),
  tacticRefPath: z.string().optional(),
});

export type RecommendedTactic = z.infer<typeof recommendedTacticSchema>;

/**
 * An ENGINE-MATCHED plan for this session — the backend saying "this is a good
 * plan, guide the user through it". Invisible to the user: its tactics are
 * delivered inline one `suggestTactic` card at a time (see
 * `advanceToNextPlanTactic`), never through the plan sheet and never as a
 * "Plan assigned" card.
 *
 * Deliberately NOT a `plans` log — user-owned plans (source trigger/behavior)
 * are the only plans logs, and they are what the plan sheet renders. Keeping
 * the engine plan as session state is what makes it impossible to render it as
 * a committed plan. The plan is embedded (with its `tacticsByPath`) so readers
 * need no extra fetch, mirroring how plans logs denormalise.
 */
export const suggestedPlanSchema = z.object({
  planId: z.string(),
  plan: planWithIdSchema,
  source: z.enum(["tags", "improvised"]),
  matchedAt: timestampSchema,
});

export type SuggestedPlan = z.infer<typeof suggestedPlanSchema>;

export const impulseSessionSchema = sessionBaseSchema.extend({
  type: z.literal("impulse"),
  behaviorDocs: z.array(documentReferenceSchema),
  debriefAfter: timestampSchema.optional(),
  debriefBefore: timestampSchema.optional(),
  debriefUrgeLogInsertedAt: timestampSchema.nullable().optional(),
  actedOnUrge: z.boolean().nullable().optional(), // true = acted, false = resisted, null/undefined = not answered
  mostHelpfulTacticId: z.string().nullable().optional(),
  debriefNote: z.string().nullable().optional(),
  generatedPlanId: z.string().optional(),
  // Protocol phase the user is currently in. Drives how getGptPayload renders
  // context for tactic/behavior logs so the AI grounds its responses correctly.
  phase: sessionPhaseSchema.optional(),
  hasScheduledCheckIn: z.boolean().optional(),
  recommendedTactics: z.array(recommendedTacticSchema).optional(),
  suggestedPlan: suggestedPlanSchema.optional(),
});

export type ImpulseSession = z.infer<typeof impulseSessionSchema>;
