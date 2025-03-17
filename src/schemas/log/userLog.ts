import * as yup from "yup";
import { logBaseSchema } from ".";

/**
 * User Log Schema
 * Represents a user message in a conversation thread
 */
export const userLogSchema = logBaseSchema.shape({
  type: yup.string().oneOf(["user"]).required(),
  // User logs are always displayed in the UI
  isDisplayable: yup.mixed<true>().oneOf([true]).required(),
  data: yup
    .object({
      content: yup.string().required(),
    })
    .required(),
});

export type UserLog = yup.InferType<typeof userLogSchema>;
