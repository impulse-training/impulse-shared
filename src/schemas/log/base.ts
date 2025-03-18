import * as yup from "yup";
import { timestampSchema } from "../../utils/timestampSchema";
import { logTypes } from "./types";

// Base Log Schema
export const logBaseSchema = yup.object({
  type: yup.string().oneOf(logTypes).required(),
  userId: yup.string().required(), // This is required for collection group queries security rules
  timestamp: timestampSchema.required(),
  data: yup.object().default({}),
  createdAt: timestampSchema,
  updatedAt: timestampSchema,
});
