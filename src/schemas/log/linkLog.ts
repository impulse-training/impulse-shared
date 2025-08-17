import { z } from "zod";
import { logBaseSchema } from "./base";

// Define the LinkLog schema

export const linkLogSchema = logBaseSchema.extend({
  type: z.literal("link"),
  isDisplayable: z.literal(true),
  text: z.string(),
  link: z.string(),
  buttonText: z.string(),
});

// Export the LinkLog type using yup.InferType
export type LinkLog = z.infer<typeof linkLogSchema>;
