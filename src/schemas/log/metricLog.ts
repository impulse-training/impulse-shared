import { z } from "zod";
import { logBaseSchema } from "./base";

/**
 * A metric measurement log.
 * Records a single 1-5 scale rating for a metric, with optional supporting text.
 */
export const metricLogSchema = logBaseSchema.extend({
  type: z.literal("metric"),
  isDisplayable: z.literal(true),
  data: z.object({
    /** Reference to the metric document id */
    metricId: z.string(),
    /** Denormalized metric name for display */
    metricName: z.string(),
    /** 1-5 scale rating, null when awaiting user input */
    value: z.number().int().min(1).max(5).nullable(),
    /** Denormalized label for the low end of the scale */
    minLabel: z.string().optional(),
    /** Denormalized label for the high end of the scale */
    maxLabel: z.string().optional(),
    /** Optional supporting text / note */
    text: z.string().optional(),
  }),
});

export type MetricLog = z.infer<typeof metricLogSchema>;
