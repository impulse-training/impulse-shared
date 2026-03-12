import { z } from "zod";
import { sessionBaseSchema } from "./base";

export const commitmentSessionSchema = sessionBaseSchema.extend({
  type: z.literal("commitment"),
});

export type CommitmentSession = z.infer<typeof commitmentSessionSchema>;
