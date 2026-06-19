import { z } from "zod";

/**
 * The shared answer model for questions across the app. Both tactic question
 * steps (in-the-moment) and debrief questions (per-behavior, at the debrief)
 * describe how a question is answered via an `AnswerSpec`:
 *
 *  - "text"        — a free-form typed answer, with optional quick-pick chips
 *                    (`suggestedResponses`) that pre-fill the text.
 *  - "choice"      — pick exactly one of a fixed set of `options`.
 *  - "slider1To10" — a 1–10 scale with optional end labels.
 *
 * Keeping one schema means a single renderer/input, one response shape, and the
 * ability to offer any answer type on any surface. Authoring UIs may still
 * expose a subset per surface.
 */
export const answerTypeSchema = z.enum(["text", "choice", "slider1To10"]);

export type AnswerType = z.infer<typeof answerTypeSchema>;

export const answerOptionSchema = z.object({
  id: z.string().min(1),
  // Button text shown to the user; also used verbatim as the user's effective
  // reply when tapped.
  label: z.string().min(1),
});

export type AnswerOption = z.infer<typeof answerOptionSchema>;

export const sliderConfigSchema = z.object({
  minLabel: z.string().optional(),
  maxLabel: z.string().optional(),
});

export type SliderConfig = z.infer<typeof sliderConfigSchema>;

export const answerSpecSchema = z.discriminatedUnion("type", [
  z.object({
    type: z.literal("text"),
    suggestedResponses: z.array(z.string().min(1)).optional(),
  }),
  z.object({
    type: z.literal("choice"),
    options: z.array(answerOptionSchema).min(2),
  }),
  z.object({
    type: z.literal("slider1To10"),
    sliderConfig: sliderConfigSchema.default({}),
  }),
]);

export type AnswerSpec = z.infer<typeof answerSpecSchema>;
