import * as yup from "yup";
import { timestampSchema } from "../../utils";
import { attachmentSchema } from "../attachment";

// Tactic Schema
export const tacticBaseSchema = yup.object({
  id: yup.string(),
  type: yup.string().required(),
  title: yup.string(),
  description: yup.string().optional(),
  content: yup.string().optional(),

  canBeManuallyMarkedAsCompleted: yup.boolean().required(),

  // Media attachments - each can be present independently
  imageAttachment: attachmentSchema.optional().default(undefined),
  videoAttachment: attachmentSchema.optional().default(undefined),
  audioAttachment: attachmentSchema.optional().default(undefined),

  // Which behaviors the tactic should be associated wit
  allBehaviors: yup.boolean().optional(),
  behaviorIds: yup.array().of(yup.string().required()).optional(),

  userId: yup.string().optional(),
  isPublic: yup.boolean().optional(),
  createdAt: timestampSchema,
  updatedAt: timestampSchema,
});
