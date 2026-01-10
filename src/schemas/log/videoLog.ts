import z from "zod";
import { logBaseSchema } from "./base";

export const videoLogSchema = logBaseSchema.extend({
  type: z.literal("video"),
  isDisplayable: z.literal(true),
  title: z.string().optional(),
  text: z.string().optional(),
  data: z.object({
    sourceUri: z.string(),
  }),
});

// Export the VideoLog type using yup.InferType
export type VideoLog = z.infer<typeof videoLogSchema>;
