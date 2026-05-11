import { z } from "zod";
import { baseStepSchema } from "./base";

export const zaraStepSchema = baseStepSchema.extend({
  mode: z.literal("zara"),
  direction: z.string().optional(),
});

export type ZaraStep = z.infer<typeof zaraStepSchema>;
