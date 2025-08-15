import * as yup from "yup";
import { timestampSchema } from "../../utils";
import { attachmentSchema } from "../attachment";

// Guided tactic step schema
export const tacticStepSchema = yup.object({
  id: yup.string().required(),
  text: yup.string().required(),
  durationSeconds: yup.number().optional(),
  expectUserInput: yup.boolean().optional(),
  inputType: yup
    .mixed<"text" | "choice" | "number" | "slider">()
    .oneOf(["text", "choice", "number", "slider"]) as any,
  choices: yup
    .array()
    .of(
      yup.object({
        label: yup.string().required(),
        value: yup.string().required(),
      })
    )
    .optional(),
  logField: yup.string().optional(),
  branch: yup
    .array()
    .of(
      yup.object({
        conditionField: yup.string().required(),
        equals: yup.string().required(),
        gotoStepId: yup.string().required(),
      })
    )
    .optional(),
});

// Tactic Schema
export const tacticBaseSchema = yup.object({
  id: yup.string(),
  type: yup.string().required(),
  title: yup.string(),
  description: yup.string().optional(),

  // Ordinal for display ordering
  ordinal: yup.number().required(),

  durationSeconds: yup.number().optional(), // Target duration in seconds

  // Media attachments - each can be present independently
  imageAttachment: attachmentSchema.optional().default(undefined),

  // Which behaviors the tactic should be associated with
  allBehaviors: yup.boolean().optional(),
  behaviorIds: yup.array().of(yup.string().required()).optional(),

  summaryForAI: yup.string(),

  // The original creator of the tactic
  createdByUid: yup.string(),

  notificationSound: yup.string().optional(),

  isPublic: yup.boolean().optional(),
  createdAt: timestampSchema,
  updatedAt: timestampSchema,

  // Guided tactic fields (optional; present when mode is guided)
  mode: yup.mixed<"guided" | "unguided">().oneOf(["guided", "unguided"]).optional(),
  voiceGuidance: yup.boolean().optional(),
  media: yup
    .object({
      audioUrl: yup.string().url().optional(),
      videoUrl: yup.string().url().optional(),
      imageUrl: yup.string().url().optional(),
    })
    .optional(),
  steps: yup.array().of(tacticStepSchema).optional(),
});

export type TacticStep = yup.InferType<typeof tacticStepSchema>;
