import { Thread } from "../schemas";
import {
  Log,
  logIsBehaviorLog,
  logIsQuestionLog,
  logIsResistedLog,
  logIsShowTourLog,
  logIsUserMessageLog,
  logIsWidgetSetupLog,
} from "../schemas/log";
import { fieldChanged } from "./fields";
import { WithId } from "./withId";

/**
 * Check if we should respond to a log write event with AI
 *
 * @param beforeData The log data before the write (null for creation)
 * @param afterData The log data after the write
 * @returns True if we should respond with AI, false otherwise
 */
export function shouldRespondToLogWithAI(
  thread: WithId<Thread>,
  beforeData: Log | undefined,
  afterData: Log | undefined
): boolean {
  const isCreating = !beforeData && afterData;
  const isUpdating = beforeData && afterData;
  const isNotDeleting = !!afterData;

  // Case: New message logs (creation event, no before data)
  if (isCreating && logIsUserMessageLog(afterData)) {
    return true;
  }

  // Case: Impulse can respond when the user logs an outcome (resisted or setback)
  if (isCreating && logIsResistedLog(afterData)) {
    return true;
  }

  // Case: Widget setup log with changed response field
  if (isNotDeleting && logIsWidgetSetupLog(afterData)) return true;

  // Case: The user has completed a tour
  if (
    isUpdating &&
    logIsShowTourLog(beforeData) &&
    logIsShowTourLog(afterData) &&
    !beforeData?.data.completedAt &&
    afterData.data.completedAt
  ) {
    return true;
  }

  // Case: The user has completed a recap question (confirmed their day totals)
  if (
    isNotDeleting &&
    logIsQuestionLog(afterData) &&
    afterData.data?.question?.responseType === "recap" &&
    fieldChanged(beforeData, afterData, "data.response")
  ) {
    return true;
  }

  // Case: The user has tracked a behavior
  if (
    isNotDeleting &&
    logIsBehaviorLog(afterData) &&
    fieldChanged(beforeData, afterData, "data.formattedValue")
  ) {
    return true;
  }

  return false;
}
