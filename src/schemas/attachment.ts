/**
 * Attachment Schemas
 *
 * Defines Yup schemas for file/media attachments
 */
import * as yup from "yup";
import { timestampSchema } from "../utils";

// Attachment Types
export const attachmentTypes = [
  "image",
  "video",
  "audio",
  "text",
  "document",
] as const;

export type AttachmentType = (typeof attachmentTypes)[number];

// Base Attachment Schema
export const attachmentSchema = yup.object({
  createdAt: timestampSchema,
  updatedAt: timestampSchema,

  // Basic file info
  uri: yup.string().required(),
  storagePath: yup.string().required(),
  contentType: yup.string().required(),
  sizeBytes: yup.number().optional(),

  // For any additional type-specific data
  metadata: yup
    .object({
      // Image-specific fields
      width: yup.number().when("type", {
        is: "image",
        then: () => yup.number().optional(),
        otherwise: () => yup.number().strip(),
      }),
      height: yup.number().when("type", {
        is: "image",
        then: () => yup.number().optional(),
        otherwise: () => yup.number().strip(),
      }),

      // Audio/video specific fields
      durationMs: yup.number().when("type", {
        is: (val: string) => val === "audio" || val === "video",
        then: () => yup.number().optional(),
        otherwise: () => yup.number().strip(),
      }),

      // Audio-specific fields
      transcript: yup.string().when("type", {
        is: "audio",
        then: () => yup.string().optional(),
        otherwise: () => yup.string().strip(),
      }),
      meterings: yup
        .array(
          yup.object({
            db: yup.number().required(),
            timestampMs: yup.number().optional(),
          })
        )
        .when("type", {
          is: "audio",
          then: () => yup.array().optional(),
          otherwise: () => yup.array().strip(),
        }),
    })
    .optional(),
});

// Export types
export type Attachment = yup.InferType<typeof attachmentSchema>;

// Type guard
export function isAttachment(value: unknown): value is Attachment {
  try {
    attachmentSchema.validateSync(value);
    return true;
  } catch (error) {
    return false;
  }
}
