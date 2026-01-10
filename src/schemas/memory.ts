import z from "zod";
import { timestampSchema } from "../utils/timestampSchema";

export const memorySchema = z.object({
  id: z.string(),
  title: z.string(),
  content: z.string(),
  source: z.string(), // e.g., "conversation", "user_input", "system_observation"
  tags: z.array(z.string()).default([]),
  importance: z.number().min(1).max(10).default(5), // 1-10 scale for memory importance
  createdAt: timestampSchema.optional(),
  updatedAt: timestampSchema.optional(),
});

// Export type inferred from schema
export type Memory = z.infer<typeof memorySchema>;

// Type guard function
export const isMemory = (value: unknown): value is Memory =>
  memorySchema.safeParse(value).success;
