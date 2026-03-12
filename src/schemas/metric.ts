import { z } from "zod";
import { timestampSchema } from "../utils/timestampSchema";

/**
 * A user-level metric document.
 * Path: users/{userId}/metrics/{metricId}
 *
 * Metrics are lightweight self-report scales (1-5) that users track
 * during experiments to measure how a behavior change affects them.
 */
export const metricSchema = z.object({
  id: z.string().optional(),
  /** Display name, e.g. "Mental clarity" */
  name: z.string().min(1),
  /** Prompt shown when tracking, e.g. "How clear is your thinking?" */
  description: z.string().optional(),
  /** If created from METRIC_REGISTRY, stores the registry id for dedup */
  metricRegistryId: z.string().optional(),
  createdAt: timestampSchema.optional(),
  updatedAt: timestampSchema.optional(),
});

export type Metric = z.infer<typeof metricSchema>;

export const isMetric = (value: unknown): value is Metric =>
  metricSchema.safeParse(value).success;
