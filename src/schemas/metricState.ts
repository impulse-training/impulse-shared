import { z } from "zod";
import { timestampSchema } from "../utils/timestampSchema";
import {
  dataCompletenessSchema,
  stabilitySchema,
  trendSchema,
  WINDOW_SIZES,
} from "./behavior";

// MetricWindow represents computed metrics for a slider question over a time window
export const metricWindowSchema = z.object({
  windowSizeDays: z.union([z.literal(7), z.literal(30), z.literal(90)]),

  averageValue: z.number().optional(),

  trend: trendSchema,
  stability: stabilitySchema,

  sampleCount: z.number(),
});
export type MetricWindow = z.infer<typeof metricWindowSchema>;

// MetricState is embedded on the question document at
// users/{userId}/questions/{questionId}.state
export const metricStateSchema = z.object({
  questionId: z.string(),

  windows: z.object({
    short: metricWindowSchema,
    medium: metricWindowSchema,
    long: metricWindowSchema,
  }),

  meta: z.object({
    lastUpdatedAt: timestampSchema,
    dataCompleteness: dataCompletenessSchema,
  }),
});
export type MetricState = z.infer<typeof metricStateSchema>;

export function isMetricState(value: unknown): value is MetricState {
  return metricStateSchema.safeParse(value).success;
}

// Re-export window sizes for metric computations
export { WINDOW_SIZES };
export type { WindowKey } from "./behavior";
