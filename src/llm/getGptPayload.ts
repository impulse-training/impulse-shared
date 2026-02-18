import { ChatCompletionMessageParam } from "openai/resources/chat";
import {
  BehaviorLog,
  Log,
  logIsAssistantMessageLog,
  logIsBehaviorLog,
  logIsCallLog,
  logIsPlansLog,
  logIsQuestionsLog,
  logIsShowTourLog,
  logIsTacticLog,
  logIsToolCallLog,
  logIsUserMessageLog,
  logIsWidgetSetupLog,
} from "../schemas/log";
import { buildPlansLogPayload } from "./buildPlansLogPayload";
import { extractRelevantContext } from "./extractRelevantContext";
import { DEFAULT_RECAP_TIME_LABEL } from "../constants";

function buildBehaviorLogPayload(
  log: BehaviorLog,
): ChatCompletionMessageParam[] {
  const { behaviorName, formattedValue, source, debriefOutcome } = log.data;

  const parts: string[] = [];

  if (source === "scheduled" && debriefOutcome) {
    if (debriefOutcome === "resisted") {
      parts.push(
        "<CONTEXT>The user successfully resisted an urge. We're debriefing what helped them resist and what they can learn from it.</CONTEXT>",
      );
    } else if (debriefOutcome === "acted") {
      parts.push(
        "<CONTEXT>The user acted on an urge. We're debriefing what happened and how to support them in a non-judgmental way.</CONTEXT>",
      );
    } else if (debriefOutcome === "still_there") {
      parts.push(
        "<CONTEXT>The user reports that the urge is still present. We're helping them process the urge and decide what to do next.</CONTEXT>",
      );
    }
  }

  if (behaviorName && formattedValue) {
    parts.push(
      `<CONTEXT>Behavior tracked: ${behaviorName} - ${formattedValue}.</CONTEXT>`,
    );
  }

  if (parts.length > 0) {
    return [
      {
        role: "user",
        content: parts.join(" "),
      },
    ];
  }

  // Fallback: regular behavior tracking message without explicit debrief context
  const timestamp = log.timestamp?.toDate?.() ?? new Date();
  const timeStr = timestamp.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  if (behaviorName && formattedValue) {
    return [
      {
        role: "user",
        content: `<CONTEXT>The user has tracked a behavior: ${behaviorName} - ${formattedValue} at ${timeStr}.</CONTEXT>`,
      },
    ];
  }

  return [];
}

export function getGptPayload(
  log: Log,
  isFinalLogInThread: boolean,
): ChatCompletionMessageParam[] {
  if (log.type === "proposed_experiment") {
    // createdExperiment is written by the confirmExperimentFromProposal API
    const createdExperiment =
      "createdExperiment" in log
        ? (
            log as {
              createdExperiment?: {
                baselineDays?: number;
                observationDays?: number;
              };
            }
          ).createdExperiment
        : undefined;

    const baselineDays = createdExperiment?.baselineDays ?? 5;

    const behaviorName =
      "behaviorName" in log
        ? (log as { behaviorName?: string }).behaviorName
        : undefined;
    const metricLabels =
      "metricLabels" in log
        ? (log as { metricLabels?: string[] }).metricLabels
        : undefined;

    const behaviorText =
      behaviorName && behaviorName.trim().length > 0
        ? behaviorName
        : "the behavior you're tracking";
    const metricsText =
      metricLabels && metricLabels.length > 0
        ? metricLabels.join(", ")
        : "what you agreed to track";

    if (isFinalLogInThread) {
      return [
        {
          role: "user",
          content:
            "<SYSTEM>\n" +
            "The user has just accepted a proposed experiment.\n" +
            "Respond to the user using the following message TEMPLATE, adapting it to what you know about the user's issue and the specific experiment configuration (e.g. behavior, metrics, baseline length).\n" +
            "Keep the structure and tone, but substitute details appropriately. Do not add extra paragraphs or questions beyond this template.\n\n" +
            "BEHAVIOR:\n" +
            behaviorText +
            "\n\n" +
            "METRICS:\n" +
            metricsText +
            "\n\n" +
            "TEMPLATE:\n" +
            "You’re all set — the experiment has started - we'll track " +
            behaviorText +
            " and " +
            metricsText +
            "\n\n" +
            `For now, just go about your day as usual. If you ${behaviorText}, log it in the app.\n\n` +
            "After " +
            DEFAULT_RECAP_TIME_LABEL +
            ", come back to do a short recap of how the day felt.\n\n" +
            `We’ll start with a baseline period for the next ${baselineDays} days. After that, we’ll introduce a small change and see what actually moves.\n` +
            "</SYSTEM>",
        },
      ];
    }

    return [
      {
        role: "user",
        content:
          "<SYSTEM>The user has accepted the proposed experiment and it's now active. You do not need to re-explain the experiment; just treat this as context for future replies.</SYSTEM>",
      },
    ];
  }

  if (logIsPlansLog(log)) {
    return buildPlansLogPayload(log, isFinalLogInThread);
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
    return [log.data.message];
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

    if (!log.data.endedAt) return [];

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
    return buildBehaviorLogPayload(log);
  }

  // Return empty array for other (unsupported) log types
  return [];
}
