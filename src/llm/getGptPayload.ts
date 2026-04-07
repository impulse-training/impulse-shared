import { ChatCompletionMessageParam } from "openai/resources/chat";
import {
  BehaviorLog,
  Log,
  logIsAssistantMessageLog,
  logIsBehaviorLog,
  logIsCallLog,
  logIsDayTotalsPromptLog,
  logIsMetricLog,
  logIsPlansLog,
  logIsTacticLog,
  logIsToolCallLog,
  logIsUserMessageLog,
  logIsWidgetSetupLog,
} from "../schemas/log";
import { buildPlansLogPayload } from "./buildPlansLogPayload";
import { extractRelevantContext } from "./extractRelevantContext";
import { DEFAULT_RECAP_TIME_LABEL } from "../constants";

interface PayloadOptions {
  forSummarization?: boolean;
}

function buildBehaviorLogPayload(
  log: BehaviorLog,
  options?: PayloadOptions,
): ChatCompletionMessageParam[] {
  const { behaviorName, formattedValue, source, debriefOutcome } = log.data;

  const parts: string[] = [];

  if (debriefOutcome) {
    if (options?.forSummarization) {
      // Facts only — no AI conversation instructions
      if (debriefOutcome === "resisted") {
        parts.push(
          "<CONTEXT>The user resisted the urge.</CONTEXT>",
        );
      } else if (debriefOutcome === "acted") {
        parts.push(
          "<CONTEXT>The user acted on the urge.</CONTEXT>",
        );
      } else if (debriefOutcome === "still_there") {
        parts.push(
          "<CONTEXT>The user reported the urge was still present.</CONTEXT>",
        );
      }
    } else {
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
  isFinalLogInSession: boolean,
  options?: PayloadOptions,
): ChatCompletionMessageParam[] {
  if (log.type === "proposed_experiment") {
    const behaviorName =
      "behaviorName" in log
        ? (log as { behaviorName?: string }).behaviorName
        : undefined;
    const metricLabels =
      "metricLabels" in log
        ? (log as { metricLabels?: string[] }).metricLabels
        : undefined;
    const metricNames =
      "metrics" in log
        ? (
            log as {
              metrics?: Array<{
                name: string;
              }>;
            }
          ).metrics?.map((metric) => metric.name)
        : undefined;

    const behaviorText =
      behaviorName && behaviorName.trim().length > 0
        ? behaviorName
        : "the behavior you’re tracking";
    const metricsText =
      metricNames && metricNames.length > 0
        ? metricNames.join(", ")
        : metricLabels && metricLabels.length > 0
          ? metricLabels.join(", ")
          : "what you agreed to track";

    if (isFinalLogInSession) {
      return [
        {
          role: "user",
          content:
            "<SYSTEM>\n" +
            "The user has just accepted a proposed experiment.\n" +
            "Respond to the user using the following message TEMPLATE, adapting it to what you know about the user’s issue and the specific experiment configuration (e.g. behavior, metrics).\n" +
            "Keep the structure and tone, but substitute details appropriately. Do not add extra paragraphs or questions beyond this template.\n\n" +
            "BEHAVIOR:\n" +
            behaviorText +
            "\n\n" +
            "METRICS:\n" +
            metricsText +
            "\n\n" +
            "TEMPLATE:\n" +
            "You’re all set — the experiment has started - we’ll track " +
            behaviorText +
            " and " +
            metricsText +
            "\n\n" +
            `For now, just go about your day as usual. If you ${behaviorText}, log it in the app.\n\n` +
            "After " +
            DEFAULT_RECAP_TIME_LABEL +
            ", come back to do a short recap of how the day felt.\n\n" +
            "As you track over time, you’ll start seeing insights about how your behavior connects to the metrics you’re measuring.\n" +
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
    // Plans logs contain AI instructions that pollute summaries.
    // Actual plan usage is captured by separate tactic logs.
    if (options?.forSummarization) return [];
    return buildPlansLogPayload(log, isFinalLogInSession);
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
    const tacticTitle = log.data.tactic.title;
    const isCompleted = log.data.completed === true;
    const response = log.data.response;

    if (isCompleted && response) {
      return [
        {
          role: "user",
          content: `<SYSTEM>User completed tactic: ${tacticTitle}. Response: ${response.formattedValue}</SYSTEM>`,
        },
      ];
    }

    if (isCompleted) {
      return [
        {
          role: "user",
          content: `<SYSTEM>User completed tactic: ${tacticTitle}</SYSTEM>`,
        },
      ];
    }

    // Tactic was suggested but not yet completed — skip from conversation
    return [];
  }

  if (logIsWidgetSetupLog(log)) {
    return [
      {
        role: "user",
        content: `<SYSTEM>The user has installed the Impulse widget!</SYSTEM>`,
      },
    ];
  }

  // Handle BehaviorLog
  if (logIsBehaviorLog(log)) {
    return buildBehaviorLogPayload(log, options);
  }

  // Handle DayTotalsPromptLog with confirmedAt (day totals confirmed)
  if (logIsDayTotalsPromptLog(log) && log.data.confirmedAt) {
    return [
      {
        role: "user",
        content:
          "<CONTEXT>The user has confirmed their day totals. Transition to experiment reflection — discuss the day through the lens of the active experiment, and use the createMetricLog tool to prompt the user to rate any untracked metrics.</CONTEXT>",
      },
    ];
  }

  // Handle MetricLog
  if (logIsMetricLog(log)) {
    const { metricName, value, minLabel, maxLabel } = log.data;
    const scaleDesc =
      minLabel && maxLabel ? ` (${minLabel} to ${maxLabel})` : "";
    if (value == null) {
      return [
        {
          role: "user",
          content: `<CONTEXT>Metric "${metricName}"${scaleDesc} is awaiting user rating (1-5 scale).</CONTEXT>`,
        },
      ];
    }
    return [
      {
        role: "user",
        content: `<CONTEXT>User rated "${metricName}": ${value}/5${scaleDesc}.</CONTEXT>`,
      },
    ];
  }

  // Tags updated from UI — inform the AI so it can respond with tactic suggestions
  if (log.type === "tags_updated") {
    const tactics = (log as any).data?.recommendedTactics as
      | Array<{ tacticId: string; title: string; description?: string; phase?: string }>
      | undefined;

    let tacticsContext = "";
    if (tactics && tactics.length > 0) {
      const lines = tactics.map(
        (t) =>
          `- [id=${t.tacticId}] "${t.title}"${t.phase ? ` (${t.phase})` : ""}${t.description ? ` — ${t.description}` : ""}`,
      );
      tacticsContext =
        "\n\nRecommended tactics (use suggestTactic with the tactic ID):\n" +
        lines.join("\n");
    }

    return [
      {
        role: "user",
        content:
          "<SYSTEM>The user just updated their session tags using the tag bar. " +
          "Review the updated tags in your context and respond appropriately. " +
          "Suggest a tactic using the suggestTactic tool." +
          tacticsContext +
          "</SYSTEM>",
      },
    ];
  }

  // Return empty array for other (unsupported) log types
  return [];
}
