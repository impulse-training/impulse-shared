import { z } from "zod";
import { sessionBaseSchema } from "./base";

// Note: wire value stays "zaraCheckIn" to keep existing session docs valid.
export const coachCheckInSessionSchema = sessionBaseSchema.extend({
  type: z.literal("zaraCheckIn"),
  // Link back to the scheduled coaching call in supportGroups/{id}/coachingCalls
  coachingCallId: z.string().optional(),
});
export type CoachCheckInSession = z.infer<typeof coachCheckInSessionSchema>;
