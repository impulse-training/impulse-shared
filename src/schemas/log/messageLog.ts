import * as yup from "yup";
import { logBaseSchema } from ".";
import { MessageLog } from "../../types";

// Message Log Schema
export const messageLogSchema = logBaseSchema.shape({
  type: yup.string().oneOf(["message"]).required(),
  data: yup
    .object({
      role: yup.string().oneOf(["user", "assistant"]).required(),
      content: yup.string().required(),
    })
    .required(),
});

export const isMessageLog = (value: unknown): value is MessageLog => {
  try {
    messageLogSchema.validateSync(value);
    return true;
  } catch (error) {
    return false;
  }
};
