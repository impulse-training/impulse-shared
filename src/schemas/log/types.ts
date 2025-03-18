// Log Types
export const logTypes = [
  "user", // User message type
  "ai_agent", // Agent/AI message type
  "tool_call", // Tool call type
  "tactic_completed",
  "tactic_uncompleted",
  "impulse_button_pressed",
  "behavior_tracked",
  "question",
  "debrief_answer",
  "debrief_outcome",
  "debrief_summary_request",
  "debrief_summary",
  "debrief_summary_edited"
] as const;

export type LogType = (typeof logTypes)[number];
