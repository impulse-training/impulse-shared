import { ChatCompletionUserMessageParam } from "openai/resources";
import * as yup from "yup";
import { attachmentSchema } from "../../attachment";
import { userProfileSchema } from "../../userProfile";
import { messageBaseLogSchema } from "./base";

export const userMessageLogSchema = messageBaseLogSchema.shape({
  type: yup.string().oneOf(["user_message"]).required(),
  audioAttachment: attachmentSchema.optional(),
  data: yup
    .object({
      message: yup.mixed<ChatCompletionUserMessageParam>().required(),
      userProfile: userProfileSchema.required(),
    })
    .required(),
});

export type UserMessageLog = yup.InferType<typeof userMessageLogSchema>;
