import { ChatCompletionAssistantMessageParam } from "openai/resources/chat";
import * as yup from "yup";
import { messageBaseLogSchema } from "./base";

export const assistantMessageLogSchema = messageBaseLogSchema.shape({
  type: yup.string().oneOf(["assistant_message"]).required(),
  data: yup
    .object({
      message: yup.mixed<ChatCompletionAssistantMessageParam>().required(),
    })
    .required(),
});

export type AssistantMessageLog = yup.InferType<
  typeof assistantMessageLogSchema
>;
