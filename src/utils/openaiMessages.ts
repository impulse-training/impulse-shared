import {
  ChatCompletionAssistantMessageParam,
  ChatCompletionMessageParam,
} from "openai/resources/chat";
import {
  Log,
  logIsAssistantMessageLog,
  logIsImpulseLog,
  logIsQuestionLog,
  logIsToolCallLog,
  logIsUserMessageLog,
} from "../schemas/log";

export function getGptPayload(log: Log): ChatCompletionMessageParam[] {
  if (logIsImpulseLog(log)) {
    return [
      {
        role: "user",
        content:
          "The user has pressed the impulse button: they are facing a craving or urge",
      },
    ];
  }

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
    const messages: ChatCompletionMessageParam[] = [];
    messages.push({
      role: "assistant",
      content: log.data.question.content,
    });

    if (log.data.response) {
      const formattedResponse =
        typeof log.data.response === "string"
          ? log.data.response
          : `${log.data.response.toString()}/10`;
      messages.push({
        role: "user",
        content: formattedResponse,
      });
    }

    return messages;
  }

  // Return empty array for other (unsupported) log types
  return [];
}
