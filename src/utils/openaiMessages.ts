import { ChatCompletionMessageParam } from "openai/resources/chat";
import {
  Log,
  logIsAgentLog,
  logIsQuestionLog,
  logIsUserLog,
} from "../types/log";

export function getGptPayload(log: Log): ChatCompletionMessageParam[] {
  if (logIsUserLog(log)) {
    return [
      {
        role: "user",
        content: log.data.content,
      },
    ];
  }

  // Handle AgentLog
  if (logIsAgentLog(log)) {
    const messages: ChatCompletionMessageParam[] = [];
    messages.push(log.data.message);

    // Add tool result messages
    if (log.data.toolCallResults && log.data.toolCallResults.length > 0) {
      log.data.toolCallResults.forEach((result) => {
        messages.push(result);
      });
    }

    return messages;
  }

  // Handle QuestionLog
  if (logIsQuestionLog(log)) {
    return [
      {
        role: "assistant",
        content: log.data.content,
      },
    ];
  }

  // Return empty array for unsupported log types
  return [];
}
