import { z } from "zod";

export const audioGenerationJobStatus = z.enum([
  "pending",
  "processing",
  "completed",
  "failed",
]);

// Results will store attachment-shaped objects (see attachment.ts in shared),
// including audio metadata like meterings. We keep this permissive to avoid
// duplicating the yup schema in zod here.

export const audioGenerationJobSchema = z.object({
  userId: z.string(),
  prompt: z.string(),
  title: z.string().optional(),
  style: z.string().optional(),
  negativeTags: z.string().optional(),
  voice: z.enum(["m", "f"]).optional(),
  provider: z.literal("kie").default("kie"),
  providerJobId: z.string().optional(),
  status: audioGenerationJobStatus,
  error: z.string().optional(),
  results: z.array(z.any()).optional(),
  createdAt: z.any(),
  updatedAt: z.any(),
  statusUpdatedAt: z.any().optional(),
  callbackReceivedAt: z.any().optional(),
});

export type AudioGenerationJob = z.infer<typeof audioGenerationJobSchema>;
export type AudioGenerationJobStatus = z.infer<typeof audioGenerationJobStatus>;

