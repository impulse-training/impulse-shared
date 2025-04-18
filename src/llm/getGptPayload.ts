import {
  ChatCompletionAssistantMessageParam,
  ChatCompletionMessageParam,
} from "openai/resources/chat";
import {
  Log,
  logIsAssistantMessageLog,
  logIsImpulseLog,
  logIsQuestionLog,
  logIsShowTourLog,
  logIsToolCallLog,
  logIsUserMessageLog,
  logIsWidgetSetupLog,
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

  if (logIsWidgetSetupLog(log)) {
    return [
      {
        role: "user",
        content: log.data.impulseWidgetInstalled
          ? "<SYSTEM>The user has installed the Impulse widget!</SYSTEM>"
          : "<SYSTEM>The user skipped widget install setup. The impulse widget can be pressed in an 'impulse moment' (when the user has a craving or urge), alllowing easy access to strategies and support. Their decision to skip this setup is not good. They may have encountered difficulties installing the widget. If they just skipped it absent-mindedly, encourage them to go back and try again.</SYSTEM>",
      },
    ];
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

  // Handle ShowTourLog
  if (logIsShowTourLog(log)) {
    const messages: ChatCompletionMessageParam[] = [];

    // Always include an assistant message about the tour being shown
    messages.push({
      role: "assistant",
      content: `<SYSTEM>Tour has been shown to the user: ${log.text}</SYSTEM>`,
    });

    // If the tour is completed, include a user message
    if (log.data.completedAt) {
      messages.push({
        role: "user",
        content: "<SYSTEM>The user has completed the tour</SYSTEM>",
      });
    }

    return messages;
  }

  // Return empty array for other (unsupported) log types
  return [];
}
