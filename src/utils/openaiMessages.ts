import {
  ChatCompletionAssistantMessageParam,
  ChatCompletionMessageParam,
} from "openai/resources/chat";
import {
  Log,
  logIsAssistantMessageLog,
  logIsQuestionLog,
  logIsToolCallLog,
  logIsUserMessageLog,
} from "../schemas/log";

export function getGptPayload(log: Log): ChatCompletionMessageParam[] {
  if (logIsUserMessageLog(log)) {
    return [
      {
        role: "user",
        content: log.data.message.content,
      },
    ];
  }

  // Handle AssistantMessageLog
  if (logIsAssistantMessageLog(log)) {
    const messages: ChatCompletionAssistantMessageParam[] = [];
    messages.push(log.data.message);

    return messages;
  }

  // Handle ToolCallLog
  if (logIsToolCallLog(log)) {
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

  // Return empty array for other (unsupported) log types
  return [];
}
