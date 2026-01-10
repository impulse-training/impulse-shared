/**
 * Attachment Schemas (Zod)
 *
 * Defines Zod schemas for file/media attachments
 */
import z from "zod";
import { timestampSchema } from "../utils/timestampSchema";

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
export const attachmentSchema = z.object({
  createdAt: timestampSchema.optional(),
  updatedAt: timestampSchema.optional(),

  // Basic file info
  uri: z.string(),
  storagePath: z.string(),
  contentType: z.string(),
  // Optional display title for the attachment
  title: z.string().optional(),
  sizeBytes: z.number().optional(),

  // For any additional type-specific data
  metadata: z
    .object({
      // Image-specific fields
      width: z.number().optional(),
      height: z.number().optional(),

      // Audio/video specific fields
      durationMs: z.number().optional(),

      // Audio-specific fields
      transcript: z.string().optional(),
      meterings: z
        .array(
          z.object({
            db: z.number(),
            timestampMs: z.number().optional(),
          })
        )
        .optional(),
    })
    .optional(),
});

// Export types
export type Attachment = z.infer<typeof attachmentSchema>;

// Type guard
export function isAttachment(value: unknown): value is Attachment {
  return attachmentSchema.safeParse(value).success;
}
