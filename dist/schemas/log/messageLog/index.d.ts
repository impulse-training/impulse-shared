import { AssistantMessageLog } from "./assistantMessageLog";
import { UserMessageLog } from "./userMessageLog";
export * from "./assistantMessageLog";
export * from "./userMessageLog";
export type MessageLog = AssistantMessageLog | UserMessageLog;
