import { Thread, threadIsTimePlanThread } from "../schemas";
import {
  Log,
  logIsBehaviorLog,
  logIsQuestionsLog,
  logIsResistedLog,
  logIsShowTourLog,
  logIsTacticLog,
  logIsUserMessageLog,
  logIsWidgetSetupLog,
} from "../schemas/log";
import { fieldChanged } from "./fields";
import { WithId } from "./withId";

/**
 * Check if all tactics in a timePlan thread's plan are completed
 */
function isTimePlanFullyCompleted(thread: WithId<Thread>): boolean {
  if (!threadIsTimePlanThread(thread)) return false;

  const plan = thread.plan;
  const tacticsByPath = plan.tacticsByPath || {};
  const trackingLogsById = thread.trackingLogsById || {};

  // Check each tactic reference in the plan
  for (const tacticRef of plan.tactics || []) {
    const tacticPath = tacticRef.path;
    const tactic = tacticsByPath[tacticPath];
    const tacticId = tactic?.id;

    if (!tacticId) continue;

    // Check if this tactic has a completion log
    const isCompleted = Object.values(trackingLogsById).some(
      (log) => logIsTacticLog(log) && log.data?.tactic?.id === tacticId
    );

    if (!isCompleted) {
      return false;
    }
  }

  return true;
}

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

  // Case: The user has answered all questions in a QuestionsLog (recap or experiment metrics)
  if (
    isNotDeleting &&
    logIsQuestionsLog(afterData) &&
    fieldChanged(beforeData, afterData, "data.questions")
  ) {
    // Check if all questions now have responses
    const allAnswered = afterData.data.questions.every((q) => q.response);
    if (allAnswered) {
      return true;
    }
  }

  // Case: The user has tracked a behavior
  if (
    isNotDeleting &&
    logIsBehaviorLog(afterData) &&
    fieldChanged(beforeData, afterData, "data.formattedValue")
  ) {
    return true;
  }

  // Case: The user has completed a tactic in a timePlan thread and all tactics are now done
  if (
    isCreating &&
    logIsTacticLog(afterData) &&
    threadIsTimePlanThread(thread) &&
    isTimePlanFullyCompleted(thread)
  ) {
    return true;
  }

  return false;
}
