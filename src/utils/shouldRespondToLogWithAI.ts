import {
  Session,
  sessionIsAlignmentSession,
  sessionIsTimePlanSession,
} from "../schemas";
import {
  Log,
  logIsBehaviorLog,
  logIsPlansLog,
  logIsShowTourLog,
  logIsUserMessageLog,
  logIsWidgetSetupLog,
  logIsAssistantMessageLog,
  PlansLog,
  ProposedExperimentLog,
  logIsEnableNotificationsCtaLog,
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
 * Check if a timePlan session's plan is marked as completed in a plansLog
 */
function isTimePlanFullyCompleted(
  session: WithId<Session>,
  plansLog: PlansLog,
): boolean {
  if (!sessionIsTimePlanSession(session)) return false;

  // Check if this plan has completedAt set in the plansLog
  const planEntry = plansLog.data.plans.find(
    (p) => p.planId === session.planId,
  );
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
  session: WithId<Session> | undefined,
  beforeData: Log | undefined,
  afterData: Log | undefined,
  latestSessionLog?: Log,
): boolean {
  if (latestSessionLog && logIsAssistantMessageLog(latestSessionLog)) {
    console.log("Latest message is from assistant. Not responding with AI.");
    return false;
  }

  const isCreating = !beforeData && afterData;
  const isUpdating = beforeData && afterData;
  const isNotDeleting = !!afterData;

  // Case: New message logs (creation event, no before data)
  if (isCreating && logIsUserMessageLog(afterData)) {
    console.log("New message log. Responding with AI.");
    return true;
  }

  // Case: A plan was completed (plansLog gains completedAt on a plan entry)
  if (
    isNotDeleting &&
    logIsPlansLog(afterData) &&
    fieldChanged(beforeData, afterData, "data.plans") &&
    hasNewlyCompletedPlan(beforeData, afterData)
  ) {
    console.log("Plan was completed. Responding with AI.");
    return true;
  }

  // Case: Impulse can respond when the user logs a behavior with value=0 (resisted)
  if (isCreating && logIsBehaviorLog(afterData) && afterData.data.value === 0) {
    console.log("User logged a behavior with value=0. Responding with AI.");
    return true;
  }

  // Case: A trigger plan is added to the session
  if (
    isCreating &&
    logIsPlansLog(afterData) &&
    afterData.data.plans[0]?.plan.type === "trigger"
  ) {
    console.log("Trigger plan was added. Responding with AI.");
    return true;
  }

  // Case: Widget setup log with changed response field
  if (isNotDeleting && logIsWidgetSetupLog(afterData)) {
    console.log(
      "Widget setup log with changed response field. Responding with AI.",
    );
    return true;
  }

  // Case: The user has completed a tour
  if (
    isUpdating &&
    logIsShowTourLog(beforeData) &&
    logIsShowTourLog(afterData) &&
    !beforeData?.data.completedAt &&
    afterData.data.completedAt
  ) {
    console.log("User has completed a tour. Responding with AI.");
    return true;
  }

  // Case: A behavior log was explicitly marked for Zara to respond, or has debrief system prompt set
  if (isNotDeleting && logIsBehaviorLog(afterData)) {
    // Respond if shouldZaraRespond was set
    if (
      fieldChanged(beforeData, afterData, "shouldZaraRespond") &&
      afterData.shouldZaraRespond
    ) {
      console.log(
        "Behavior log was explicitly marked for Zara to respond. Responding with AI.",
      );
      return true;
    }
  }

  // Case: A plansLog was updated with completedAt for a timePlan session
  if (
    isNotDeleting &&
    logIsPlansLog(afterData) &&
    session &&
    sessionIsTimePlanSession(session) &&
    isTimePlanFullyCompleted(session, afterData)
  ) {
    console.log("Time plan was fully completed. Responding with AI.");
    return true;
  }

  console.log("No conditions met. Not responding with AI.");
  return false;
}
