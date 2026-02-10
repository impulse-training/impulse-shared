import { z } from "zod";
import { logBaseSchema } from "./base";
import { timestampSchema } from "../../utils/timestampSchema";

export const proposedExperimentLogSchema = logBaseSchema.extend({
  type: z.literal("proposed_experiment"),
  isDisplayable: z.literal(true),
  /** Behavior that this proposed experiment is about */
  behaviorId: z.string(),
  /** Optional human-readable behavior name for nicer display */
  behaviorName: z.string().optional(),
  /** Metric labels chosen by the user (names only, no pre-created questions) */
  metricLabels: z.array(z.string()).min(1),
  /** Optional experiment question draft, if already known */
  experimentQuestion: z.string().optional(),
  /** Short text shown above the preview in the thread */
  text: z.string().optional(),
  /** Optional CTA button label for confirming the experiment */
  buttonText: z.string().optional(),
  /** Timestamp when this proposed experiment was confirmed */
  confirmedAt: timestampSchema.optional(),
});

export type ProposedExperimentLog = z.infer<typeof proposedExperimentLogSchema>;
