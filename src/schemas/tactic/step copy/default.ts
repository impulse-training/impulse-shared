import { z } from "zod";
import { baseStepSchema } from "./base";

export const defaultStepSchema = baseStepSchema.extend({
  mode: z.literal("default").optional(),
  text: z.string().min(1),
  durationSeconds: z.number().int().positive().optional(),
  aiConfiguration: z
    .object({
      defaultConversationMode: z.enum(["voice", "text"]).optional(),
      goal: z.string().min(1),
      prompt: z.string().optional(),
    })
    .optional(),
});

export type DefaultStep = z.infer<typeof defaultStepSchema>;
