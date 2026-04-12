import {
  Session,
  sessionIsImpulseSession,
  sessionIsTimePlanSession,
} from "../schemas";
import { getDateString, getRecapDeadline } from "./dates";
import {
  Log,
  logIsAssistantMessageLog,
  logIsBehaviorLog,
  logIsDayTotalsPromptLog,
  logIsImpulseStartedLog,
  logIsMetricLog,
  logIsPlansLog,
  logIsSetupModeChoiceLog,
  logIsTacticReviewLog,
  logIsTacticLog,
  logIsTagsUpdatedLog,
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
  timezone?: string,
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

  const isDayTotalsPromptAction =
    beforeData && afterData && logIsDayTotalsPromptLog(afterData);

  const isSetupModeTextChoice =
    beforeData &&
    afterData &&
    logIsSetupModeChoiceLog(afterData) &&
    afterData.data.choice === "text" &&
    fieldChanged(beforeData, afterData, "data.choice");

  const isTagsUpdated =
    !beforeData &&
    afterData &&
    logIsTagsUpdatedLog(afterData) &&
    !(
      session &&
      sessionIsImpulseSession(session) &&
      session.phase === "debrief"
    );

  const isTacticCompleted =
    beforeData &&
    afterData &&
    logIsTacticLog(afterData) &&
    afterData.data.completed === true &&
    (!logIsTacticLog(beforeData) || beforeData.data.completed !== true);

  if (
    !isMetricRating &&
    !isDebriefOutcomeResolved &&
    !isDayTotalsPromptAction &&
    !isSetupModeTextChoice &&
    !isTacticCompleted &&
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

  // Case: Tags updated from UI — user set/changed session tags manually
  if (isTagsUpdated) {
    console.log("Tags updated from UI. Responding with AI.");
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

  // Case: Setup mode text choice was made
  if (isSetupModeTextChoice) {
    console.log("Setup mode text choice made. Responding with AI.");
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

  // Case: Day totals confirmed — the day_totals_prompt log is updated with confirmedAt.
  // Trigger experiment reflection. Only respond if within the recap deadline (10am next day).
  if (
    isUpdating &&
    afterData &&
    logIsDayTotalsPromptLog(afterData) &&
    afterData.data.confirmedAt &&
    (!beforeData ||
      !logIsDayTotalsPromptLog(beforeData) ||
      !beforeData.data.confirmedAt)
  ) {
    const dateStr = afterData.data.targetDateString;
    const now = new Date();
    const todayStr = timezone
      ? getDateString(now, timezone)
      : `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;

    if (dateStr === todayStr) {
      console.log("Day totals confirmed for today. Responding with AI.");
      return true;
    }

    if (dateStr < todayStr) {
      // Past day: check if within recap deadline (midnight at end of day after target, in user's timezone).
      const deadline = getRecapDeadline(dateStr, timezone);

      if (now < deadline) {
        console.log(
          "Day totals confirmed within recap deadline. Responding with AI.",
        );
        return true;
      }

      console.log(
        "Day totals confirmed past recap deadline. Not responding with AI.",
      );
      return false;
    }

    // Future date — shouldn't happen, but don't respond
    console.log(
      "Day totals confirmed for future date. Not responding with AI.",
    );
    return false;
  }

  // Case: Late recap discussion requested — user tapped "Discuss" on a late-recapped day
  if (
    isUpdating &&
    afterData &&
    logIsDayTotalsPromptLog(afterData) &&
    afterData.data.discussRequestedAt &&
    (!beforeData ||
      !logIsDayTotalsPromptLog(beforeData) ||
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
    (!beforeData ||
      !logIsMetricLog(beforeData) ||
      beforeData.data.value === null)
  ) {
    console.log("Metric log was rated. Responding with AI.");
    return true;
  }

  // Case: Tactic log was completed — user finished a suggested tactic
  if (isTacticCompleted) {
    console.log("Tactic was completed. Responding with AI.");
    return true;
  }

  // Case: Tactic review completed — user finished reviewing tactics in the recap
  if (
    isUpdating &&
    afterData &&
    logIsTacticReviewLog(afterData) &&
    afterData.data.completedAt &&
    (!beforeData ||
      !logIsTacticReviewLog(beforeData) ||
      !beforeData.data.completedAt)
  ) {
    console.log("Tactic review completed. Responding with AI.");
    return true;
  }

  console.log("No conditions met. Not responding with AI.");
  return false;
}
