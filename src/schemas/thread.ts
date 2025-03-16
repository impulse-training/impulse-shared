import * as yup from "yup";
import { timestampSchema } from "../utils/timestampSchema";

// Thread schema
export const threadSchema = yup.object({
  id: yup.string(),
  title: yup.string().required(),
  type: yup
    .string()
    .oneOf(["impulse", "general", "dayRecap"])
    .default("general"),
  date: timestampSchema.required(),
  updatedAt: timestampSchema,
  createdAt: timestampSchema,
});
