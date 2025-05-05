import * as yup from "yup";
import { timestampSchema } from "../../utils";
import { attachmentSchema } from "../attachment";

// Tactic Schema
export const tacticBaseSchema = yup.object({
  id: yup.string(),
  type: yup.string().required(),
  title: yup.string(),
  description: yup.string().optional(),

  durationSeconds: yup.number().optional(), // Target duration in seconds

  // Media attachments - each can be present independently
  imageAttachment: attachmentSchema.optional().default(undefined),

  // Which behaviors the tactic should be associated with
  allBehaviors: yup.boolean().optional(),
  behaviorIds: yup.array().of(yup.string().required()).optional(),

  guidelineIds: yup.array().of(yup.string().required()).optional(),

  // Ordinal for display ordering
  ordinal: yup.number().required(),

  // The owner of the tactic
  userId: yup.string().optional(),

  // The original creator of the tactic
  createdBy: yup.string(),
  // When shared with a support group, this is set
  supportGroupId: yup.string(),

  isPublic: yup.boolean().optional(),
  createdAt: timestampSchema,
  updatedAt: timestampSchema,
});
