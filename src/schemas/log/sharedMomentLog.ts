import { z } from "zod";
import { logBaseSchema } from "./base";
import { documentReferenceSchema } from "../../utils/documentReferenceSchema";

export const sharedMomentLogSchema = logBaseSchema.extend({
  type: z.literal("shared_moment"),
  // For support group feed rendering
  isDisplayable: z.literal(true),
  data: z.object({
    // Reference to the original thread document (users/{uid}/threads/{threadId})
    threadRef: documentReferenceSchema,
  }),
});

export type SharedMomentLog = z.infer<typeof sharedMomentLogSchema>;
