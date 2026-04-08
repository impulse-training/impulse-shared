import { z } from "zod";
import { logBaseSchema } from "./base";
import { timestampSchema } from "../../utils/timestampSchema";

export const proposedExperimentMetricSchema = z.object({
  name: z.string().min(1),
  minLabel: z.string().optional(),
  maxLabel: z.string().optional(),
});

export const proposedExperimentLogSchema = logBaseSchema.extend({
  type: z.literal("proposed_experiment"),
  isDisplayable: z.literal(true),
  /** Behaviors that this proposed experiment is about */
  behaviorIds: z.array(z.string()).min(1),
  /** Optional human-readable behavior names for nicer display */
  behaviorNames: z.array(z.string()).optional(),
  /** Structured metrics chosen by the user, including optional scale labels */
  metrics: z.array(proposedExperimentMetricSchema).min(1).optional(),
  /** Metric labels chosen by the user (names only, no pre-created questions) */
  metricLabels: z.array(z.string()).min(1),
  /** Optional experiment question draft, if already known */
  experimentQuestion: z.string().optional(),
  /** Short text shown above the preview in the session */
  text: z.string().optional(),
  /** Optional CTA button label for confirming the experiment */
  buttonText: z.string().optional(),
  /** Timestamp when this proposed experiment was confirmed */
  confirmedAt: timestampSchema.optional(),
  /** Summary of the experiment that was actually created when this proposal was confirmed */
  createdExperiment: z
    .object({
      experimentId: z.string().optional(),
      baselineDays: z.number().optional(),
    })
    .optional(),
});

export type ProposedExperimentMetric = z.infer<
  typeof proposedExperimentMetricSchema
>;
export type ProposedExperimentLog = z.infer<typeof proposedExperimentLogSchema>;
