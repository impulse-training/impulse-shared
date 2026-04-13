import { z } from "zod";
import { sessionBaseSchema } from "./base";

export const generalSessionSchema = sessionBaseSchema.extend({
  type: z.literal("general"),
  intensity: z.number().optional(),
});
export type GeneralSession = z.infer<typeof generalSessionSchema>;
