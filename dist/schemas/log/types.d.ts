export declare const logTypes: readonly ["user", "assistant_message", "tool_call", "tactic", "tactic_uncompleted", "impulse_button_pressed", "behavior", "question", "debrief_answer", "debrief_outcome", "debrief_summary_request", "debrief_summary", "debrief_summary_edited"];
export type LogType = (typeof logTypes)[number];
