import { z } from "zod";
import { logBaseSchema } from "./base";

/**
 * A metric measurement log.
 * Records a single 1-5 scale rating for a metric, with optional supporting text.
 */
export const metricLogSchema = logBaseSchema.extend({
  type: z.literal("metric"),
  isDisplayable: z.literal(true),
  /** If true, Zara should respond to this metric log (e.g. feeling discussion requested) */
  shouldZaraRespond: z.boolean().optional(),
  data: z.object({
    /** Reference to the metric document id */
    metricId: z.string(),
    /** Denormalized metric name for display */
    metricName: z.string(),
    /** 1–10 scale rating, null when awaiting user input */
    value: z.number().int().min(1).max(10).nullable(),
    /** Denormalized label for the low end of the scale */
    minLabel: z.string().optional(),
    /** Denormalized label for the high end of the scale */
    maxLabel: z.string().optional(),
    /** Optional supporting text / note */
    text: z.string().optional(),
    /** Denormalized circumplex quadrant — present only on feeling-type metrics */
    quadrant: z.enum(["activated", "stressed", "calm", "low"]).optional(),
  }),
});

export type MetricLog = z.infer<typeof metricLogSchema>;
