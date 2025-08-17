import { z } from "zod";
import { timestampSchema } from "../../utils/timestampSchema";

// Base Log Schema
export const logBaseSchema = z.object({
  id: z.string().optional(),
  createdAt: timestampSchema,
  updatedAt: timestampSchema,
  userId: z.string(), // This is required for collection group queries security rules
  timestamp: timestampSchema,
  dateString: z.string(),
  // A log can be associated with a call, which is also a log. Not all logs should be able to be
  // associated with a call, but it's simplest to just define this as an optional property on our
  // base log schema
  callLogDocPath: z.string().optional(),
});
