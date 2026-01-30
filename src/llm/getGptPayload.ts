import {
  ChatCompletionAssistantMessageParam,
  ChatCompletionMessageParam,
} from "openai/resources/chat";
import {
  Log,
  logIsAssistantMessageLog,
  logIsBehaviorLog,
  logIsCallLog,
  logIsPlansLog,
  logIsQuestionsLog,
  logIsReadyToDebriefLog,
  logIsShowTourLog,
  logIsTacticLog,
  logIsToolCallLog,
  logIsUserMessageLog,
  logIsWidgetSetupLog,
} from "../schemas/log";
import { buildPlansLogPayload } from "./buildPlansLogPayload";

export function getGptPayload(log: Log): ChatCompletionMessageParam[] {
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

  if (logIsPlansLog(log)) {
    return buildPlansLogPayload(log);
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

  // Handle QuestionsLog (multi-question log for recap and experiments)
  if (logIsQuestionsLog(log)) {
    const messages: ChatCompletionMessageParam[] = [];

    // Format all questions and responses together
    const questionsWithResponses = log.data.questions
      .map((entry) => {
        const questionText = entry.question.text;
        const responseValue = entry.response?.formattedValue ?? "Not answered";
        return `- ${questionText}: ${responseValue}`;
      })
      .join("\n");

    const hasAnyResponse = log.data.questions.some((entry) => entry.response);

    if (hasAnyResponse) {
      messages.push({
        role: "user",
        content: `<s>User answered experiment metric questions:\n${questionsWithResponses}</s>`,
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

  // Handle BehaviorLog
  if (logIsBehaviorLog(log)) {
    const {
      behaviorName,
      formattedValue,
      debriefSystemPrompt,
      source,
      debriefOutcome,
    } = log.data;

    // If this is a scheduled debrief log with cached system prompt, use that
    if (debriefSystemPrompt) {
      return [
        {
          role: "user",
          content: `<SYSTEM>${debriefSystemPrompt}</SYSTEM>`,
        },
      ];
    }

    // If this is an empty scheduled debrief log (no behavior data yet)
    if (source === "scheduled" && !behaviorName) {
      if (debriefOutcome === "still_there") {
        return [
          {
            role: "user",
            content:
              "<SYSTEM>The user responded to the debrief prompt that the urge is still there</SYSTEM>",
          },
        ];
      }

      return [
        {
          role: "user",
          content:
            "<SYSTEM>The user is beginning a debrief and has not recorded the outcome yet</SYSTEM>",
        },
      ];
    }

    // Check if this is a "resisted" log (behavior with value=0)
    const value = log.data.value;
    if (behaviorName && value === 0) {
      return [
        {
          role: "user",
          content: "<SYSTEM>The user successfully resisted an impulse</SYSTEM>",
        },
      ];
    }

    // Regular behavior log with tracking data
    if (behaviorName && formattedValue) {
      const timestamp = log.timestamp?.toDate?.() ?? new Date();
      const timeStr = timestamp.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });

      return [
        {
          role: "user",
          content: `<s>The user has tracked a behavior: ${behaviorName} - ${formattedValue} at ${timeStr}</s>`,
        },
      ];
    }

    // Empty behavior log (shouldn't happen in normal flow, but handle gracefully)
    return [];
  }

  // Return empty array for other (unsupported) log types
  return [];
}
