import { z } from "zod";
import { timestampSchema } from "../utils/timestampSchema";

export const recapMessageSchema = z.object({
  id: z.string().optional(),
  role: z.enum(["user", "assistant"]),
  content: z.string(),
  createdAt: timestampSchema,
});

export type RecapMessage = z.infer<typeof recapMessageSchema>;
