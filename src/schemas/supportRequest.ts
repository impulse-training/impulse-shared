import { z } from "zod";
import { timestampSchema } from "../utils/timestampSchema";

export const supportRequestSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  topic: z.enum([
    "general",
    "account",
    "billing",
    "bug_report",
    "feature_request",
  ]),
  message: z.string(),
  createdAt: timestampSchema,
});

export type SupportRequest = z.infer<typeof supportRequestSchema>;
