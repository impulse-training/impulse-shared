import * as yup from "yup";
import { timestampSchema } from "../../utils/timestampSchema";

// Base Log Schema
export const logBaseSchema = yup.object({
  id: yup.string(),
  createdAt: timestampSchema,
  updatedAt: timestampSchema,
  userId: yup.string().required(), // This is required for collection group queries security rules
  timestamp: timestampSchema.required(),
  dateString: yup.string().required(),
  // A log can be associated with a call, which is also a log. Not all logs should be able to be
  // associated with a call, but it's simplest to just define this as an optional property on our
  // base log schema
  callLogDocPath: yup.string().optional(),
});
