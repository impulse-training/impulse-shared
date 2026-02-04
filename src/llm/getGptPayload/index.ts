import { ChatCompletionMessageParam } from "openai/resources/chat";
import { BehaviorLog, Log, PlansLog } from "../../schemas/log";
import { buildPlansLogPayload } from "./plans";
import { buildBehaviorLogPayload } from "./behavior";

export function getGptPayload(
  log: Log,
  isFinalLogInThread: boolean,
): ChatCompletionMessageParam[] {
  switch (log.type) {
    case "plans":
      return buildPlansLogPayload(log as PlansLog, isFinalLogInThread);
    case "behavior":
      return buildBehaviorLogPayload(log as BehaviorLog);
    default:
      return [];
  }
}
