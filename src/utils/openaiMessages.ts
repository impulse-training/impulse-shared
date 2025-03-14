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
    messages.push(log.data);

    // Add tool result messages
    if (log.toolCallResults && log.toolCallResults.length > 0) {
      log.toolCallResults.forEach((result) => {
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
