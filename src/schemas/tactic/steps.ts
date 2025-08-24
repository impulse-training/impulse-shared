import { z } from "zod";
import { attachmentSchema } from "../attachment";
import { questionSchema } from "../question";

export const baseStepSchema = z.object({
  // Make text optional at the base level so certain modes (e.g., breathing)
  // don't require it. Other modes will explicitly require non-empty text.
  text: z.string().optional(), // label/instruction
  aiInstructions: z.string().optional(),
  // Optional background image for non-media steps
  backgroundImage: attachmentSchema.optional(),
});

export const defaultStepSchema = baseStepSchema.extend({
  mode: z.literal("default").optional(),
  text: z.string().min(1),
});

export const breathingStepSchema = baseStepSchema.extend({
  mode: z.literal("breathing"),
  breathingPattern: z.object({
    inhale: z.number().int().positive(),
    hold: z.number().int().nonnegative().optional(),
    exhale: z.number().int().positive(),
  }),
  cycles: z.number().int().positive().optional(),
});

export const timerStepSchema = baseStepSchema.extend({
  mode: z.literal("timer"),
  durationSeconds: z.number().int().positive(),
  text: z.string().min(1),
});

export const notifySupportStepSchema = baseStepSchema.extend({
  mode: z.literal("notifySupport"),
  groupId: z.string(),
  text: z.string().min(1),
});

export const questionStepSchema = baseStepSchema.extend({
  mode: z.literal("question"),
  // Embed a question object; question itself remains a distinct schema/type
  question: questionSchema,
  text: z.string().min(1),
});

export const aiConversationStepSchema = baseStepSchema
  .omit({ backgroundImage: true })
  .extend({
    mode: z.literal("aiConversation"),
    // High-level objective for the conversation
    goal: z.string().min(1),
    // Initial system/user prompt to start the AI conversation
    prompt: z.string().optional(),
  });

// New: media step for displaying one or more media items as its own step
export const mediaStepSchema = baseStepSchema.extend({
  mode: z.literal("media"),
  media: z.array(attachmentSchema).min(1),
});

// New: affirmation step for repeating a positive statement
export const affirmationStepSchema = baseStepSchema.extend({
  mode: z.literal("affirmation"),
  // Use base text as a title/label for the step
  text: z.string().min(1),
  repeatCount: z.number().int().min(1).max(5),
});

export const tacticStepSchema = z.discriminatedUnion("mode", [
  defaultStepSchema,
  breathingStepSchema,
  timerStepSchema,
  notifySupportStepSchema,
  questionStepSchema,
  aiConversationStepSchema,
  mediaStepSchema,
  affirmationStepSchema,
]);

export type TacticStep = z.infer<typeof tacticStepSchema>;

// Export concrete step types for precise narrowing
export type DefaultStep = z.infer<typeof defaultStepSchema>;
export type BreathingStep = z.infer<typeof breathingStepSchema>;
export type TimerStep = z.infer<typeof timerStepSchema>;
export type NotifySupportStep = z.infer<typeof notifySupportStepSchema>;
export type QuestionStep = z.infer<typeof questionStepSchema>;
export type AIConversationStep = z.infer<typeof aiConversationStepSchema>;
export type MediaStep = z.infer<typeof mediaStepSchema>;
export type AffirmationStep = z.infer<typeof affirmationStepSchema>;
