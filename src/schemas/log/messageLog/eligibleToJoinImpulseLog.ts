import { z } from "zod";
import { messageBaseLogSchema } from "./base";
import { systemMessageContentSchema } from "./systemMessageLog";

export const eligibleToJoinImpulseLogSchema = messageBaseLogSchema.extend({
  type: z.literal("eligible_to_join_impulse"),
  data: z.object({
    message: systemMessageContentSchema,
  }),
});

export type EligibleToJoinImpulseLog = z.infer<
  typeof eligibleToJoinImpulseLogSchema
>;
