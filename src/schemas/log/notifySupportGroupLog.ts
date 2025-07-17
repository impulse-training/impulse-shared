import { ChatCompletionUserMessageParam } from "openai/resources";
import * as yup from "yup";
import { logBaseSchema } from "./base";

export const notifySupportGroupLogSchema = logBaseSchema.shape({
  type: yup
    .mixed<"notify_support_group">()
    .oneOf(["notify_support_group"])
    .required(),
  isDisplayable: yup.mixed<true>().oneOf([true]).required(),
  data: yup
    .object({
      message: yup.mixed<ChatCompletionUserMessageParam>().required(),
    })
    .required(),
});

export type NotifySupportGroupLog = yup.InferType<
  typeof notifySupportGroupLogSchema
>;
