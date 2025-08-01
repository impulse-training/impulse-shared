import * as yup from "yup";
import { timestampSchema } from "../utils";

export const memorySchema = yup.object({
  id: yup.string().required(),
  userId: yup.string().required(),
  title: yup.string().required(),
  content: yup.string().required(),
  source: yup.string().required(), // e.g., "conversation", "user_input", "system_observation"
  tags: yup.array().of(yup.string()).default([]),
  importance: yup.number().min(1).max(10).default(5), // 1-10 scale for memory importance
  context: yup.object().default({}), // Additional context data as key-value pairs
  createdAt: timestampSchema,
  updatedAt: timestampSchema,
});

// Export type inferred from schema
export type Memory = yup.InferType<typeof memorySchema>;

// Type guard function
export const isMemory = (value: unknown): value is Memory => {
  try {
    memorySchema.validateSync(value);
    return true;
  } catch (error) {
    return false;
  }
};
