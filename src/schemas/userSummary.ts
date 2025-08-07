import * as yup from "yup";
import { timestampSchema } from "../utils";

/**
 * Schema for user summary documents stored in userSummaries collection
 * Contains pre-computed summary information for AI agents
 */
export const userSummarySchema = yup.object({
  userId: yup.string().required(),
  summary: yup.string().required(),
  createdAt: timestampSchema,
  updatedAt: timestampSchema,
});

export type UserSummary = yup.InferType<typeof userSummarySchema>;

export const isUserSummary = (value: unknown): value is UserSummary => {
  try {
    userSummarySchema.validateSync(value);
    return true;
  } catch (error) {
    return false;
  }
};
