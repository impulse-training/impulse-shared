import { Thread, threadIsTimePlanThread } from "../schemas";
import {
  Log,
  logIsBehaviorLog,
  logIsDebriefUrgeLog,
  logIsPlansLog,
  logIsQuestionsLog,
  logIsResistedLog,
  logIsShowTourLog,
  logIsUserMessageLog,
  logIsWidgetSetupLog,
  PlansLog,
} from "../schemas/log";
import { fieldChanged } from "./fields";
import { WithId } from "./withId";

function hasNewlyCompletedPlan(
  beforeData: Log | undefined,
  afterData: PlansLog,
): boolean {
  const beforePlans =
    beforeData && logIsPlansLog(beforeData) ? beforeData.data.plans : [];

  for (const afterPlan of afterData.data.plans) {
    if (!afterPlan.completedAt) continue;
    const beforePlan = beforePlans.find((p) => p.planId === afterPlan.planId);
    if (!beforePlan?.completedAt) {
      return true;
    }
  }

  return false;
}

/**
 * Check if a timePlan thread's plan is marked as completed in a plansLog
 */
function isTimePlanFullyCompleted(
  thread: WithId<Thread>,
  plansLog: PlansLog,
): boolean {
  if (!threadIsTimePlanThread(thread)) return false;

  const planId = thread.plan?.id;
  if (!planId) return false;

  // Check if this plan has completedAt set in the plansLog
  const planEntry = plansLog.data.plans.find((p) => p.planId === planId);
  return !!planEntry?.completedAt;
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
  afterData: Log | undefined,
): boolean {
  const isCreating = !beforeData && afterData;
  const isUpdating = beforeData && afterData;
  const isNotDeleting = !!afterData;

  // Case: New message logs (creation event, no before data)
  if (isCreating && logIsUserMessageLog(afterData)) {
    return true;
  }

  // Case: A plan was completed (plansLog gains completedAt on a plan entry)
  if (
    isNotDeleting &&
    logIsPlansLog(afterData) &&
    fieldChanged(beforeData, afterData, "data.plans") &&
    hasNewlyCompletedPlan(beforeData, afterData)
  ) {
    return true;
  }

  // Case: Impulse can respond when the user logs an outcome (resisted or setback)
  if (isCreating && logIsResistedLog(afterData)) {
    return true;
  }

  // Case: A trigger plan is added to the thread
  if (
    isCreating &&
    logIsPlansLog(afterData) &&
    afterData.data.plans[0]?.plan.type === "trigger"
  ) {
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

  // Case: A debrief urge log was answered and/or had its cached debrief prompt set
  if (
    isNotDeleting &&
    logIsDebriefUrgeLog(afterData) &&
    ((fieldChanged(beforeData, afterData, "data.actedOnUrge") &&
      afterData.data.actedOnUrge !== null &&
      afterData.data.actedOnUrge !== undefined) ||
      (fieldChanged(beforeData, afterData, "data.debriefSystemPrompt") &&
        !!afterData.data.debriefSystemPrompt))
  ) {
    return true;
  }

  // Case: A behavior log was explicitly marked for Zara to respond
  if (
    isNotDeleting &&
    logIsBehaviorLog(afterData) &&
    fieldChanged(beforeData, afterData, "shouldZaraRespond") &&
    afterData.shouldZaraRespond
  ) {
    return true;
  }

  // Case: A plansLog was updated with completedAt for a timePlan thread
  if (
    isNotDeleting &&
    logIsPlansLog(afterData) &&
    threadIsTimePlanThread(thread) &&
    isTimePlanFullyCompleted(thread, afterData)
  ) {
    return true;
  }

  return false;
}
