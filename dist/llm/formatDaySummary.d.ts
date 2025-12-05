import { QuestionLog } from "../schemas/log";
/**
 * Format a recap question log response for LLM consumption.
 * Includes behavior totals and goal comparison data.
 */
export declare function formatRecapResponse(log: QuestionLog): string;
