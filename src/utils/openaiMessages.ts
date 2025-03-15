import { ChatCompletionMessageParam } from "openai/resources/chat";
import { Log, isAgentLog, isQuestionLog, isUserLog } from "../types/log";

export function getGptPayload(log: Log): ChatCompletionMessageParam[] {
  if (isUserLog(log)) {
    return [
      {
        role: "user",
        content: log.data.content,
      },
    ];
  }

  // Handle AgentLog
  if (isAgentLog(log)) {
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
  if (isQuestionLog(log)) {
    return [
      {
        role: "user",
        content: log.data.content,
      },
    ];
  }

  // Return empty array for unsupported log types
  return [];
}
