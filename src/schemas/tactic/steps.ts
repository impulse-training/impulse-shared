import { z } from "zod";
import { attachmentSchema } from "../attachment";
import { questionSchema } from "../question";

const baseStepSchema = z.object({
  // Make text optional at the base level so certain modes (e.g., breathing)
  // don't require it. Other modes will explicitly require non-empty text.
  text: z.string().optional(), // label/instruction
  aiInstructions: z.string().optional(),
  // Optional background image for non-media steps
  backgroundImage: attachmentSchema.optional(),
});

const defaultStepSchema = baseStepSchema.extend({
  mode: z.literal("default").optional(),
  text: z.string().min(1),
});

const breathingStepSchema = baseStepSchema.extend({
  mode: z.literal("breathing"),
  breathingPattern: z.object({
    inhale: z.number().int().positive(),
    hold: z.number().int().nonnegative().optional(),
    exhale: z.number().int().positive(),
  }),
  cycles: z.number().int().positive().optional(),
});

const timerStepSchema = baseStepSchema.extend({
  mode: z.literal("timer"),
  durationSeconds: z.number().int().positive(),
  text: z.string().min(1),
});

const notifySupportStepSchema = baseStepSchema.extend({
  mode: z.literal("notifySupport"),
  groupId: z.string(),
  text: z.string().min(1),
});

const questionStepSchema = baseStepSchema.extend({
  mode: z.literal("question"),
  // Embed a question object; question itself remains a distinct schema/type
  question: questionSchema,
  text: z.string().min(1),
});

const aiConversationStepSchema = baseStepSchema.extend({
  mode: z.literal("aiConversation"),
  // High-level objective for the conversation
  goal: z.string().min(1),
  // Initial system/user prompt to start the AI conversation
  prompt: z.string().optional(),
});

// New: media step for displaying one or more media items as its own step
const mediaStepSchema = baseStepSchema.extend({
  mode: z.literal("media"),
  media: z.array(attachmentSchema).min(1),
});

export const tacticStepSchema = z.discriminatedUnion("mode", [
  defaultStepSchema,
  breathingStepSchema,
  timerStepSchema,
  notifySupportStepSchema,
  questionStepSchema,
  aiConversationStepSchema,
  mediaStepSchema,
]);

export type TacticStep = z.infer<typeof tacticStepSchema>;
