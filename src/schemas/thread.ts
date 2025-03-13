/**
 * Thread Schemas
 *
 * Defines Yup schemas for thread data
 */
import * as yup from "yup";
import { timestampSchema } from "../utils/timestampSchema";

// Thread Schema
export const threadSchema = yup.object({
  id: yup.string(),
  title: yup.string().required(),
  isImpulseMoment: yup.boolean().optional(),
  tactics: yup.array().of(yup.string()).optional(),
  updatedAt: timestampSchema,
  createdAt: timestampSchema,
});
