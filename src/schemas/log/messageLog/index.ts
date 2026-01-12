import { AssistantMessageLog } from "./assistantMessageLog";
import { SystemMessageLog } from "./systemMessageLog";
import { UserMessageLog } from "./userMessageLog";

export * from "./assistantMessageLog";
export * from "./systemMessageLog";
export * from "./userMessageLog";

export type MessageLog =
  | AssistantMessageLog
  | SystemMessageLog
  | UserMessageLog;
