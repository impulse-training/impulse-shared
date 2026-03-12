import { z } from "zod";
import { timestampSchema } from "../utils/timestampSchema";
import { experimentPhaseEnum } from "./experiment";

/**
 * UserState — a single, trigger-maintained document per user (`userStates/{userId}`)
 * that gives the AI stable context about the user without querying multiple collections.
 *
 * Updated by Firestore triggers on:
 *   - behavior writes  → trackedBehaviors
 *   - experiment writes → activeExperiment
 *   - memory writes     → consolidatedMemory
 */

const trackedBehaviorStateSchema = z.object({
  id: z.string(),
  name: z.string(),
  trackingType: z.enum(["counter", "timer", "boolean"]),
  trackingUnit: z.string().optional(),
  description: z.string().optional(),
  goalLabel: z.string().optional(),
});

const activeExperimentStateSchema = z.object({
  behaviorId: z.string(),
  behaviorName: z.string(),
  experimentQuestion: z.string(),
  currentPhase: experimentPhaseEnum,
  startDate: z.string().optional(),
  phaseDescription: z.string().optional(),
  observations: z.array(z.string()),
});

export const userStateSchema = z.object({
  /** Behaviors the user is actively tracking */
  trackedBehaviors: z.array(trackedBehaviorStateSchema),

  /** Currently active experiment, if any */
  activeExperiment: activeExperimentStateSchema.nullable(),

  /** Consolidated text summary of AI memories */
  consolidatedMemory: z.string(),

  createdAt: timestampSchema,
  updatedAt: timestampSchema,
});

export type TrackedBehaviorState = z.infer<typeof trackedBehaviorStateSchema>;
export type ActiveExperimentState = z.infer<typeof activeExperimentStateSchema>;
export type UserState = z.infer<typeof userStateSchema>;

export const isUserState = (value: unknown): value is UserState =>
  userStateSchema.safeParse(value).success;
