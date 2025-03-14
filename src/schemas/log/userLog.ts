import * as yup from "yup";
import { logBaseSchema } from ".";

/**
 * User Log Schema
 * Represents a user message in a conversation thread
 */
export const userLogSchema = logBaseSchema.shape({
  type: yup.string().oneOf(["user"]).required(),
  data: yup
    .object({
      content: yup.string().required(),
    })
    .required(),
});
