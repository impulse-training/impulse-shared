import { z } from "zod";
import { threadBaseSchema } from "./base";

export const impulseThreadSchema = threadBaseSchema.extend({
  type: z.literal("impulse"),
  isSuccess: z.boolean().optional(),
});

export type ImpulseThread = z.infer<typeof impulseThreadSchema>;
