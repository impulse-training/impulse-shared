import { ChatCompletionMessageParam } from "openai/resources/chat";
import { BehaviorLog } from "../../schemas/log";

export function buildBehaviorLogPayload(
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
