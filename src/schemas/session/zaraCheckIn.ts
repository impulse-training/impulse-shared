import { z } from "zod";
import { sessionBaseSchema } from "./base";

export const zaraCheckInSessionSchema = sessionBaseSchema.extend({
  type: z.literal("zaraCheckIn"),
  // Link back to the scheduled coaching call in supportGroups/{id}/coachingCalls
  coachingCallId: z.string().optional(),
});
export type ZaraCheckInSession = z.infer<typeof zaraCheckInSessionSchema>;
