import { z } from "zod";

export const audioGenerationJobStatus = z.enum([
  "pending",
  "processing",
  "completed",
  "failed",
]);

export const audioGenerationResultSchema = z.object({
  storagePath: z.string(),
  contentType: z.string().optional(),
  url: z.string().url().optional(),
});

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
  results: z.array(audioGenerationResultSchema).optional(),
  createdAt: z.any(),
  updatedAt: z.any(),
  statusUpdatedAt: z.any().optional(),
  callbackReceivedAt: z.any().optional(),
});

export type AudioGenerationJob = z.infer<typeof audioGenerationJobSchema>;
export type AudioGenerationJobStatus = z.infer<typeof audioGenerationJobStatus>;

