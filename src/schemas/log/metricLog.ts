import { z } from "zod";
import { logBaseSchema } from "./base";
import { metricScaleLabelsSchema, metricValueSchema } from "../metric";

/**
 * A metric observation log — one ordered day-scoped state observation.
 *
 * The day the observation is ABOUT is `dateString` (inherited from
 * logBaseSchema); when it was actually recorded is `createdAt`. Those differ on
 * a backfill, and the gap is deliberately preserved so experiment analysis can
 * later distinguish a contemporaneous observation from a later recollection.
 * Do not collapse them by passing the backdated timestamp as `createdAt`.
 *
 * One observation per metric per day: these are written with the deterministic
 * id `metric_{metricId}_{dateString}`, so re-recording a day edits in place
 * rather than appending a second observation.
 */
export const metricLogSchema = logBaseSchema.extend({
  type: z.literal("metric"),
  isDisplayable: z.literal(true),
  /** If true, the assistant should respond to this metric log (e.g. feeling discussion requested) */
  shouldZaraRespond: z.boolean().optional(),
  data: z.object({
    /** Reference to the metric document id */
    metricId: z.string(),
    /** Denormalized metric name for display */
    metricName: z.string(),
    /** Ordered 3-point observation, null when awaiting user input */
    value: metricValueSchema.nullable(),
    /**
     * Denormalized scale labels, so a log renders ("Energy: High") without
     * loading the metric document.
     */
    scaleLabels: metricScaleLabelsSchema.optional(),
    /** Optional supporting text / note */
    text: z.string().optional(),
    /** Denormalized circumplex quadrant — present only on feeling-type metrics */
    quadrant: z.enum(["activated", "stressed", "calm", "low"]).optional(),
  }),
});

export type MetricLog = z.infer<typeof metricLogSchema>;
