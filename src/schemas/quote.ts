import { z } from "zod";
import { timestampSchema } from "../utils/timestampSchema";

export const quoteSchema = z.object({
  text: z.string(),
  author: z.string(),
  createdAt: timestampSchema.optional(),
  updatedAt: timestampSchema.optional(),
});

export type Quote = z.infer<typeof quoteSchema>;
