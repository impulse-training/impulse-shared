import {
  ChatCompletionAssistantMessageParam,
  ChatCompletionUserMessageParam,
} from "openai/resources";
import * as yup from "yup";
import { logBaseSchema } from "../base";

// Message logs can be either a user log, or an AI agent log. We create a common type, as they share
// a component for rendering.
export const messageBaseLogSchema = logBaseSchema.shape({
  type: yup
    .mixed<"user_message" | "assistant_message">()
    .oneOf(["user_message", "assistant_message"])
    .required(),
  // Message logs are always displayed in the UI
  isDisplayable: yup.mixed<true>().oneOf([true]).required(),
  data: yup
    .object({
      message: yup
        .mixed<
          ChatCompletionUserMessageParam | ChatCompletionAssistantMessageParam
        >()
        .required(),
    })
    .required(),
});
