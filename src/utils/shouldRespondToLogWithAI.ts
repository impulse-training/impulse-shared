import { Thread } from "../schemas";
import {
  Log,
  logIsBehaviorLog,
  logIsDaySummaryLog,
  logIsImpulseLog,
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

  // Case 1: New message logs (creation event, no before data)
  if (isCreating && logIsUserMessageLog(afterData)) {
    return true;
  }

  if (isCreating && logIsImpulseLog(afterData)) {
    return true;
  }

  // Case 2: Impulse can respond when the user marks that they resisted the impulse
  if (isCreating && logIsResistedLog(afterData)) {
    return true;
  }

  // Case 3: Widget setup log with changed response field
  if (isNotDeleting && logIsWidgetSetupLog(afterData)) return true;

  // Case 4: The user has completed a tour
  if (
    isUpdating &&
    logIsShowTourLog(beforeData) &&
    logIsShowTourLog(afterData) &&
    !beforeData?.data.completedAt &&
    afterData.data.completedAt
  ) {
    return true;
  }

  // Case 5: The user has answered a question
  if (
    isUpdating &&
    logIsQuestionLog(afterData) &&
    fieldChanged(
      beforeData,
      afterData,
      "data.response" as keyof typeof beforeData
    )
  ) {
    return true;
  }

  // Case 6: The user has completed a day summary
  if (
    isNotDeleting &&
    logIsDaySummaryLog(afterData) &&
    fieldChanged(beforeData, afterData, "data.behaviorDataTotalByBehaviorId")
  ) {
    return true;
  }

  // Case 7: The user has tracked a behavior
  if (
    isNotDeleting &&
    logIsBehaviorLog(afterData) &&
    fieldChanged(beforeData, afterData, "data.formattedValue")
  ) {
    return true;
  }

  return false;
}
