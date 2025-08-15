import { z } from "zod";
import { mediaItemSchema } from "./media";

const baseStepSchema = z.object({
  id: z.string(),
  text: z.string().min(1), // label/instruction
});

const defaultStepSchema = baseStepSchema.extend({
  mode: z.literal("default").optional(),
});

const breathingStepSchema = baseStepSchema.extend({
  mode: z.literal("breathing"),
  breathingPattern: z.object({
    inhale: z.number().int().positive(),
    hold: z.number().int().nonnegative().optional(),
    exhale: z.number().int().positive(),
    holdAfter: z.number().int().nonnegative().optional(),
  }),
  cycles: z.number().int().positive().optional(),
});

const timerStepSchema = baseStepSchema.extend({
  mode: z.literal("timer"),
  durationSeconds: z.number().int().positive(),
});

const notifySupportStepSchema = baseStepSchema.extend({
  mode: z.literal("notifySupport"),
  groupId: z.string(),
  messageTemplate: z.string().optional(),
});

const mediaStepSchema = baseStepSchema.extend({
  mode: z.literal("media"),
  media: z.array(mediaItemSchema).min(1),
});

export const tacticStepSchema = z.discriminatedUnion("mode", [
  defaultStepSchema,
  breathingStepSchema,
  timerStepSchema,
  notifySupportStepSchema,
  mediaStepSchema,
]);

export type TacticStep = z.infer<typeof tacticStepSchema>;
