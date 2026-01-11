import { EligibleToJoinImpulseLog } from "./eligibleToJoinImpulseLog";
import { AssistantMessageLog } from "./assistantMessageLog";
import { SystemMessageLog } from "./systemMessageLog";
import { UserMessageLog } from "./userMessageLog";

export * from "./eligibleToJoinImpulseLog";
export * from "./assistantMessageLog";
export * from "./systemMessageLog";
export * from "./userMessageLog";

export type MessageLog =
  | AssistantMessageLog
  | SystemMessageLog
  | UserMessageLog
  | EligibleToJoinImpulseLog;
