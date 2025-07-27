import {
  Log,
  logIsImpulseLog,
  logIsQuestionLog,
  logIsResistedLog,
  logIsShowTourLog,
  logIsUserMessageLog,
  logIsWidgetSetupLog,
} from "../schemas/log";
import { fieldChanged } from "./fields";

/**
 * Check if we should respond to a log write event with AI
 *
 * @param beforeData The log data before the write (null for creation)
 * @param afterData The log data after the write
 * @returns True if we should respond with AI, false otherwise
 */
export function shouldRespondWithAI(
  beforeData: Log | undefined,
  afterData: Log | undefined
): boolean {
  // Case 1: New message logs (creation event, no before data)
  if (
    !beforeData &&
    afterData &&
    (logIsUserMessageLog(afterData) || logIsImpulseLog(afterData))
  ) {
    return true;
  }

  // Impulse can respond when the user marks that they resisted the impulse
  if (!beforeData && afterData && logIsResistedLog(afterData)) {
    return true;
  }

  // Case 2: Widget setup log with changed response field
  if (afterData && logIsWidgetSetupLog(afterData)) return true;

  // Case 3: The user has completed a tour
  if (
    beforeData &&
    afterData &&
    logIsShowTourLog(beforeData) &&
    logIsShowTourLog(afterData) &&
    !beforeData?.data.completedAt &&
    afterData.data.completedAt
  ) {
    return true;
  }

  // Case 4: The user has answered a question, and it's the final question
  if (
    beforeData &&
    afterData &&
    logIsQuestionLog(afterData) &&
    fieldChanged(
      beforeData,
      afterData,
      "data.response" as keyof typeof beforeData
    )
  ) {
    return true;
  }

  return false;
}
