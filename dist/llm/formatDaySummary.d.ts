import { QuestionEntry } from "../schemas/log";
/**
 * Format a recap question entry response for LLM consumption.
 * Includes behavior totals and goal comparison data.
 */
export declare function formatRecapResponse(entry: QuestionEntry, dateString: string): string;
