import z from "zod";
import { timestampSchema } from "../utils/timestampSchema";

export const userTimezoneSchema = z.object({
  timezone: z.string(),
  timezoneOffset: z.number().optional(),
  createdAt: timestampSchema.optional(),
  updatedAt: timestampSchema.optional(),
});

export type UserTimezones = z.infer<typeof userTimezoneSchema>;
