import { z } from "zod";
import { tacticStepSchema } from "./steps";

// Zod version of Attachment (yup attachmentSchema exists elsewhere but zod is used here)
export const attachmentZSchema = z.object({
  // timestamps are serialized as numbers in most clients
  createdAt: z.number().optional(),
  updatedAt: z.number().optional(),

  // Basic file info
  uri: z.string(),
  storagePath: z.string(),
  contentType: z.string(),
  title: z.string().optional(),
  sizeBytes: z.number().optional(),

  // Additional metadata (shape varies per type)
  metadata: z.record(z.any()).optional(),
});

export const tacticSchema = z.object({
  id: z.string(),
  title: z.string().min(1),
  description: z.string().optional(),
  aiInstructions: z.string().optional(),
  media: z.array(attachmentZSchema).optional(),
  steps: z.array(tacticStepSchema).optional(),
  tags: z.array(z.string()).optional(),
  createdAt: z.number().int().optional(),
  updatedAt: z.number().int().optional(),
});

export type Tactic = z.infer<typeof tacticSchema>;
