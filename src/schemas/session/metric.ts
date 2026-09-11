import { z } from "zod";
import { sessionBaseSchema } from "./base";

/**
 * An ambient session grouping metric observations recorded outside a
 * conversation — i.e. straight from the Home matrix.
 *
 * Recording is one tap, so a user checking in on three metrics produces three
 * logs seconds apart. Rather than three journal entries, writers reuse the most
 * recent metric session within a short debounce window (see
 * `createOrReuseMetricSession` in impulse-native), so a burst reads as one
 * entry with the observations shown together.
 */
export const metricSessionSchema = sessionBaseSchema.extend({
  type: z.literal("metric"),
});
export type MetricSession = z.infer<typeof metricSessionSchema>;
