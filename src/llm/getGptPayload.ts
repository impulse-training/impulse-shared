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
  logIsResistedLog,
  logIsShowTourLog,
  logIsTacticLog,
  logIsToolCallLog,
  logIsUserMessageLog,
  logIsWidgetSetupLog,
} from "../schemas/log";
import { tacticSchema } from "../schemas/tactic/tactic";

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
    const activeIndex = log.data.activeIndex ?? 0;
    const activePlanEntry = log.data.plans[activeIndex];
    const plan = activePlanEntry?.plan;

    const tacticsCount = plan?.tactics?.length ?? 0;

    const firstTacticRef = plan?.tactics?.[0];
    const firstTacticPath =
      typeof (firstTacticRef as { path?: unknown } | undefined)?.path ===
      "string"
        ? ((firstTacticRef as { path: string }).path as string)
        : undefined;

    const tacticsByPath = plan?.tacticsByPath as
      | Record<string, unknown>
      | undefined;
    const firstTacticRaw =
      firstTacticPath && tacticsByPath ? tacticsByPath[firstTacticPath] : null;

    const parsedTactic = firstTacticRaw
      ? tacticSchema.safeParse(firstTacticRaw)
      : null;

    const firstTacticTitle = parsedTactic?.success
      ? parsedTactic.data.title ?? "Untitled tactic"
      : null;

    const firstStepText = parsedTactic?.success
      ? typeof parsedTactic.data.steps[0]?.text === "string"
        ? parsedTactic.data.steps[0].text
        : null
      : null;

    const parts: string[] = [];
    parts.push(`There is a plan with ${tacticsCount} tactics.`);
    if (firstTacticTitle) {
      parts.push(`First tactic: ${firstTacticTitle}.`);
    }
    if (firstStepText) {
      parts.push(`First step instructions: ${firstStepText}`);
    }

    return [
      {
        role: "user",
        content: `<SYSTEM>${parts.join(" ")}</SYSTEM>`,
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
    const { behaviorName, formattedValue } = log.data;
    // Format the timestamp for context
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

  // Return empty array for other (unsupported) log types
  return [];
}
