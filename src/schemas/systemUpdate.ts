import { z } from "zod";
import { timestampSchema } from "../utils/timestampSchema";

export const systemUpdateSchema = z.object({
  severity: z.enum(["normal", "severe"]),
  iosUpdateId: z.string(),
  updateGroupId: z.string().nullable().optional(),
  createdAt: timestampSchema,
  updatedAt: timestampSchema,
});

export type SystemUpdate = z.infer<typeof systemUpdateSchema>;

export const systemUpdateUserSchema = z.object({
  firstOpenedAt: timestampSchema,
  downloadedAt: timestampSchema.nullable().optional(),
  appliedAt: timestampSchema.nullable().optional(),
});

export type SystemUpdateUser = z.infer<typeof systemUpdateUserSchema>;
