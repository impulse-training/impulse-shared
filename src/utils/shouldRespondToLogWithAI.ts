import { Session, sessionIsTimePlanSession } from "../schemas";
import {
  Log,
  logIsAssistantMessageLog,
  logIsBehaviorLog,
  logIsDayTotalsConfirmedLog,
  logIsImpulseStartedLog,
  logIsMetricLog,
  logIsPlansLog,
  logIsTriggerSelectionLog,
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
  // Skip the "latest is assistant" guard for inline interactions
  // where the user acts without sending a message
  const isMetricRating =
    beforeData &&
    afterData &&
    logIsMetricLog(afterData) &&
    afterData.data.value !== null &&
    logIsMetricLog(beforeData) &&
    beforeData.data.value === null;

  const isDebriefOutcomeResolved =
    beforeData &&
    afterData &&
    logIsBehaviorLog(afterData) &&
    afterData.data.source === "scheduled" &&
    afterData.data.resolvedAt != null &&
    fieldChanged(beforeData, afterData, "data.resolvedAt");

  if (
    !isMetricRating &&
    !isDebriefOutcomeResolved &&
    latestSessionLog &&
    logIsAssistantMessageLog(latestSessionLog)
  ) {
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

  // Case: An impulse moment has started
  if (isCreating && logIsImpulseStartedLog(afterData)) {
    console.log("New impulse started log. Responding with AI.");
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
  if (
    isCreating &&
    logIsBehaviorLog(afterData) &&
    afterData.data.value === 0 &&
    afterData.shouldZaraRespond !== false
  ) {
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

  // Case: User selected "something else" in trigger selection
  if (
    isUpdating &&
    logIsTriggerSelectionLog(afterData) &&
    fieldChanged(beforeData, afterData, "data.selectedTriggerId") &&
    afterData.data.selectedTriggerId === null
  ) {
    console.log(
      'Trigger selection "something else" selected. Responding with AI.',
    );
    return true;
  }

  // Case: Widget setup log with changed response field
  if (isNotDeleting && logIsWidgetSetupLog(afterData)) {
    console.log(
      "Widget setup log with changed response field. Responding with AI.",
    );
    return true;
  }

  // Case: Debrief urge outcome was resolved (resisted/still_there)
  if (isDebriefOutcomeResolved) {
    console.log("Debrief urge outcome resolved. Responding with AI.");
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

  // Case: Day totals confirmed — trigger experiment reflection in recap session
  // Only respond if the day is still within the recap deadline (10am next day)
  if (isCreating && logIsDayTotalsConfirmedLog(afterData)) {
    const dateStr = afterData.dateString;
    const now = new Date();
    const todayStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;

    if (dateStr === todayStr) {
      console.log("Day totals confirmed for today. Responding with AI.");
      return true;
    }

    if (dateStr < todayStr) {
      // Past day: check if within deadline (10am the day after the target date)
      const [year, month, day] = dateStr.split("-").map(Number);
      const targetDate = new Date(year, month - 1, day);
      const deadline = new Date(targetDate);
      deadline.setDate(deadline.getDate() + 1);
      deadline.setHours(10, 0, 0, 0);

      if (now < deadline) {
        console.log("Day totals confirmed within recap deadline. Responding with AI.");
        return true;
      }

      console.log("Day totals confirmed past recap deadline. Not responding with AI.");
      return false;
    }

    // Future date — shouldn't happen, but don't respond
    console.log("Day totals confirmed for future date. Not responding with AI.");
    return false;
  }

  // Case: Late recap discussion requested — user tapped "Discuss" on a late-recapped day
  if (
    isUpdating &&
    logIsDayTotalsConfirmedLog(afterData) &&
    afterData.data.discussRequestedAt &&
    (!beforeData ||
      !logIsDayTotalsConfirmedLog(beforeData) ||
      !beforeData.data.discussRequestedAt)
  ) {
    console.log("Late recap discussion requested. Responding with AI.");
    return true;
  }

  // Case: Metric log was rated (value changed from null to a number)
  if (
    isUpdating &&
    logIsMetricLog(afterData) &&
    afterData.data.value !== null &&
    (!beforeData || !logIsMetricLog(beforeData) || beforeData.data.value === null)
  ) {
    console.log("Metric log was rated. Responding with AI.");
    return true;
  }

  console.log("No conditions met. Not responding with AI.");
  return false;
}
