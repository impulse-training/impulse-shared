import { z } from "zod";
import { threadBaseSchema } from "./base";

export const generalThreadSchema = threadBaseSchema.extend({
  type: z.literal("general"),
});
export type GeneralThread = z.infer<typeof generalThreadSchema>;
