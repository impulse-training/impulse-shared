import { ChatCompletionMessageParam } from "openai/resources/chat";
import { BehaviorLog, Log, PlansLog } from "../../schemas/log";
import { buildPlansLogPayload } from "./plans";
import { buildBehaviorLogPayload } from "./behavior";

export function getGptPayload(
  log: Log,
  isFinalLogInSession: boolean,
): ChatCompletionMessageParam[] {
  switch (log.type) {
    case "plans":
      return buildPlansLogPayload(log as PlansLog, isFinalLogInSession);
    case "behavior":
      return buildBehaviorLogPayload(log as BehaviorLog);
    default:
      return [];
  }
}
