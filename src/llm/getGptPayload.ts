import {
  ChatCompletionAssistantMessageParam,
  ChatCompletionMessageParam,
} from "openai/resources/chat";
import { getBehaviorCategoryExplanation } from "../constants/behaviorCategories";
import {
  Log,
  logIsAssistantMessageLog,
  logIsBehaviorLog,
  logIsCallLog,
  logIsImpulseLog,
  logIsQuestionLog,
  logIsReadyToDebriefLog,
  logIsResistedLog,
  logIsShowTourLog,
  logIsTacticLog,
  logIsToolCallLog,
  logIsUserMessageLog,
  logIsWidgetSetupLog,
} from "../schemas/log";
import { formatRecapResponse } from "./formatDaySummary";

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

  // Handle ReadyToDebriefLog
  if (logIsReadyToDebriefLog(log)) {
    return [
      {
        role: "user",
        content:
          "<SYSTEM>User finished a tactic and is ready to debrief</SYSTEM>",
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
    messages.push(log.data.message as ChatCompletionMessageParam);

    // Add tool result messages
    if (log.data.toolCallResults && log.data.toolCallResults.length > 0) {
      log.data.toolCallResults.forEach((result) => {
        messages.push(result);
      });
    }

    return messages;
  }

  // Handle CallLog
  if (logIsCallLog(log)) {
    const messages: ChatCompletionMessageParam[] = [];

    if (log.data.summary) {
      messages.push({
        role: "user",
        content: `<SYSTEM>Previous call summary: ${log.data.summary}</SYSTEM>`,
      });
    } else {
      messages.push({
        role: "user",
        content: "<SYSTEM>User had a previous call with the assistant</SYSTEM>",
      });
    }

    return messages;
  }

  if (logIsTacticLog(log)) {
    return [
      {
        role: "user",
        content: `<SYSTEM>User completed tactic: ${log.data.tactic.title}</SYSTEM>`,
      },
    ];
  }

  if (logIsWidgetSetupLog(log)) {
    return [
      {
        role: "user",
        content: `<SYSTEM>The user has installed the Impulse widget!</SYSTEM>`,
      },
    ];
  }

  // Handle QuestionLog
  if (logIsQuestionLog(log)) {
    const messages: ChatCompletionMessageParam[] = [];

    messages.push({
      role: "assistant",
      content: log.data.question.text,
    });

    if (log.data.response) {
      // For recap questions, use the formatted recap response
      if (log.data.response.responseType === "recap") {
        const recapSummary = formatRecapResponse(log);
        messages.push({
          role: "user",
          content: `<s>${recapSummary}</s>`,
        });
      } else {
        messages.push({
          role: "user",
          content: log.data.response.formattedValue,
        });
      }
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

  // Handle ResistedLog
  if (logIsResistedLog(log)) {
    const isSuccess = log.data.isSuccess;
    return [
      {
        role: "user",
        content: isSuccess
          ? "<SYSTEM>The user successfully resisted an impulse</SYSTEM>"
          : "<SYSTEM>The user experienced a setback and did not resist an impulse</SYSTEM>",
      },
    ];
  }

  // Handle BehaviorLog
  if (logIsBehaviorLog(log)) {
    const { behaviorName, formattedValue, category } = log.data;
    const categoryExplanation = getBehaviorCategoryExplanation(category);

    return [
      {
        role: "user",
        content: `<s>The user has tracked a behavior: ${behaviorName} - ${formattedValue} (Category: ${category} - ${categoryExplanation})</s>`,
      },
    ];
  }

  // Return empty array for other (unsupported) log types
  return [];
}
