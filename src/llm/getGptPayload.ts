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
  logIsMergeBehaviorsProposalLog,
  logIsProposedStrategyModificationLog,
  logIsTacticLog,
  logIsToolCallLog,
  logIsUserMessageLog,
  logIsWidgetSetupLog,
} from "../schemas/log";
import { buildPlansLogPayload } from "./buildPlansLogPayload";
import { DEFAULT_RECAP_TIME_LABEL } from "../constants";
import { SessionPhase } from "../schemas/session/phase";

interface PayloadOptions {
  forSummarization?: boolean;
  sessionPhase?: SessionPhase;
  sessionType?: string;
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
          "<CONTEXT>The user resisted the urge and is now debriefing. Do not assume they engaged with any tactic that was suggested earlier — each tactic log in the transcript states whether it was completed or left unengaged. Only reference what the transcript actually shows.</CONTEXT>",
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

  if (logIsProposedStrategyModificationLog(log)) {
    if (log.data.status !== "accepted") return [];

    const title = log.data.title.trim();
    const summary = log.data.summary?.trim();
    const context = summary ? `${title}: ${summary}` : title;

    return [
      {
        role: "user",
        content: `<SYSTEM>The user accepted a suggested strategy update. Saved strategy: ${context}.</SYSTEM>`,
      },
    ];
  }

  if (logIsMergeBehaviorsProposalLog(log)) {
    const selected = log.data.selectedResponseText?.trim();
    if (selected) {
      return [
        {
          role: "user",
          content: selected,
        },
      ];
    }

    return [
      {
        role: "user",
        content: `<SYSTEM>Zara showed the user a merge-behaviors proposal: ${log.data.title}. Task id: ${log.data.taskId}. No button has been selected yet.</SYSTEM>`,
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
    // Recap follow-up reminders are pull notifications, not part of the conversation.
    // Including them causes the context to end on a stale assistant message, which
    // causes the LLM to return an empty response.
    if ((log as any).source === "recap_follow_up") {
      return [];
    }
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
    const isDebrief = options?.sessionPhase === "debrief";

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

    if (options?.forSummarization) {
      return [
        {
          role: "user",
          content: `<SYSTEM>Tactic suggested: "${tacticTitle}" — not started or completed.</SYSTEM>`,
        },
      ];
    }
    if (isDebrief) {
      return [
        {
          role: "user",
          content: `<SYSTEM>Earlier in this session Zara suggested the tactic "${tacticTitle}", but the user did NOT start or complete it. Do not praise the user for doing this tactic.</SYSTEM>`,
        },
      ];
    }
    return [
      {
        role: "user",
        content: `<SYSTEM>Zara suggested the tactic "${tacticTitle}". The user has not engaged with it yet — do not assume they have done it.</SYSTEM>`,
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
          "<CONTEXT>The user has confirmed their day totals. Open by giving them space to reflect on the day on their own terms — do NOT fire tonight's recap question as your opening line. You still need to weave the recap question in naturally before the conversation closes.</CONTEXT>",
      },
    ];
  }

  // Handle MetricLog
  if (logIsMetricLog(log)) {
    const { metricName, value, minLabel, maxLabel, quadrant } = log.data;
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
    // Feeling metric (has quadrant) — use feeling-specific wording
    if (quadrant) {
      if (isFinalLogInSession && log.shouldZaraRespond) {
        return [
          {
            role: "user",
            content: `<CONTEXT>The user is feeling ${metricName} (${quadrant}), rated ${value}/5${scaleDesc}. They want to discuss this feeling.</CONTEXT>`,
          },
        ];
      }
      return [
        {
          role: "user",
          content: `<CONTEXT>User is feeling "${metricName}" (${quadrant}): ${value}/5${scaleDesc}.</CONTEXT>`,
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
    if (options?.forSummarization) return [];

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

  if (log.type === "impulse_started") {
    if (options?.forSummarization) return [];

    if (options?.sessionType === "onboarding") {
      return [
        {
          role: "user",
          content:
            "<SYSTEM>The user just activated Impulse Mode via their shortcut (widget or back-tap). " +
            "This confirms their shortcut is installed and working. " +
            "Acknowledge their success and move on to the next step.</SYSTEM>",
        },
      ];
    }

    return [];
  }

  if (log.type === "tactic_suggestions") {
    const data = (log as any).data;
    const suggestions = data?.suggestions as Array<{ theme: string; tacticId?: string; guidance?: string }> | undefined;
    if (!suggestions?.length) return [];

    const parts = suggestions.map((s) => {
      if (s.tacticId) return `"${s.theme}" (existing tactic ${s.tacticId})`;
      return `"${s.theme}" (template — needs personalization${s.guidance ? `, guidance: ${s.guidance}` : ""})`;
    });

    return [
      {
        role: "user" as const,
        content: `<SYSTEM>Tactic suggestion cards were shown to the user: ${parts.join("; ")}. For existing tactics, the user can add them via the + button. For templates, the user will tap to express interest and you should help personalize the tactic.</SYSTEM>`,
      },
    ];
  }

  // Return empty array for other (unsupported) log types
  return [];
}
