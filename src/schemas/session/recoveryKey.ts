import { z } from "zod";
import { sessionBaseSchema } from "./base";

export const recoveryKeySessionSchema = sessionBaseSchema.extend({
  type: z.literal("recoveryKey"),
});
export type RecoveryKeySession = z.infer<typeof recoveryKeySessionSchema>;
