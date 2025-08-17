import { z } from "zod";
import { questionSchema } from "../question";

const baseStepSchema = z.object({
  id: z.string(),
  text: z.string().min(1), // label/instruction
  aiInstructions: z.string().optional(),
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

const questionStepSchema = baseStepSchema.extend({
  mode: z.literal("question"),
  // Embed a question object; question itself remains a distinct schema/type
  question: questionSchema,
});

export const tacticStepSchema = z.discriminatedUnion("mode", [
  defaultStepSchema,
  breathingStepSchema,
  timerStepSchema,
  notifySupportStepSchema,
  questionStepSchema,
]);

export type TacticStep = z.infer<typeof tacticStepSchema>;
