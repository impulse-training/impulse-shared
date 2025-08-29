import { z } from "zod";
import { baseStepSchema } from "./base";

export const defaultStepSchema = baseStepSchema.extend({
  mode: z.literal("default").optional(),
  text: z.string().min(1),
});

export type DefaultStep = z.infer<typeof defaultStepSchema>;
