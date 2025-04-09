import {
  ChatCompletionMessage,
  ChatCompletionMessageParam,
  ChatCompletionTool,
} from "openai/resources";
import * as yup from "yup";
import { timestampSchema } from "../utils";

export const llmAuditEntrySchema = yup.object({
  userId: yup.string().required(),
  logId: yup.string().required(),
  timestamp: timestampSchema,
  messages: yup.array().of(yup.mixed<ChatCompletionMessageParam>()).required(),
  response: yup.mixed<ChatCompletionMessage>().required(),
  toolDefinitions: yup.array().of(yup.mixed<ChatCompletionTool>()).required(),
});

export type LLMAuditEntry = yup.InferType<typeof llmAuditEntrySchema>;
