import { z } from "zod";
import { timestampSchema } from "../../utils/timestampSchema";
import { logBaseSchema } from "./base";

export const recapTimePreferenceLogSchema = logBaseSchema.extend({
  type: z.literal("recap_time_preference"),
  isDisplayable: z.literal(true),
  data: z.object({
    /** The log that triggered this recap time preference prompt */
    triggeredByLogId: z.string(),
    /** Hour the user selected (0-23) */
    hour: z.number().min(0).max(23).optional(),
    /** Minute the user selected (0-59) */
    minute: z.number().min(0).max(59).optional(),
    /** When the user responded to this prompt */
    respondedAt: timestampSchema.optional(),
  }),
});

export type RecapTimePreferenceLog = z.infer<
  typeof recapTimePreferenceLogSchema
>;
