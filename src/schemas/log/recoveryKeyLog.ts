import { z } from "zod";
import { logBaseSchema } from "./base";

export const recoveryKeyLogSchema = logBaseSchema.extend({
  type: z.literal("recovery_key"),
  isDisplayable: z.literal(true),
  data: z.object({
    recoveryKey: z.string(),
    action: z.enum(["saved", "copied", "downloaded"]),
  }),
});

export type RecoveryKeyLog = z.infer<typeof recoveryKeyLogSchema>;
