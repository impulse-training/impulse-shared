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
    /** 1-5 scale rating */
    value: z.number().int().min(1).max(5),
    /** Optional supporting text / note */
    text: z.string().optional(),
  }),
});

export type MetricLog = z.infer<typeof metricLogSchema>;
