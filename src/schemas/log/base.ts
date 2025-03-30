import * as yup from "yup";
import { timestampSchema } from "../../utils/timestampSchema";

// Base Log Schema
export const logBaseSchema = yup.object({
  id: yup.string(),
  userId: yup.string().required(), // This is required for collection group queries security rules
  timestamp: timestampSchema.required(),
  dateString: yup.string().required(),
  data: yup.object().default({}),
  createdAt: timestampSchema,
  updatedAt: timestampSchema,
});
