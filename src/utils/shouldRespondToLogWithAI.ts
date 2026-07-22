import {
  Session,
  sessionIsImpulseSession,
  sessionIsOnboardingSession,
  sessionIsTimePlanSession,
} from "../schemas";
import { getDateString, getRecapDeadline } from "./dates";
import {
  Log,
  logIsAssistantMessageLog,
  logIsBehaviorLog,
  logIsDebriefQuestionLog,
  logIsDayTotalsPromptLog,
  logIsImpulseStartedLog,
  logIsMaskBehaviorProposalLog,
  logIsMergeBehaviorsProposalLog,
  logIsProposedGoalChangeLog,
  logIsProposedStrategyModificationLog,
  logIsMetricLog,
  logIsPlansLog,
  logIsResumeRecapRemindersCtaLog,
  logIsSetupModeChoiceLog,
  logIsShortcutSetupIntroLog,
  logIsTacticReviewLog,
  logIsTacticLog,
  logIsTagsUpdatedLog,
  logIsToolCallLog,
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
  if (!Array.isArray(afterData.data.plans)) return false;
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

  // A behavior log on an impulse session gained resolvedAt — the debrief urge
  // outcome was just resolved. Key off resolvedAt (not source) so this fires for
  // every outcome: "resisted"/"still_there" resolve the scheduled log in place,
  // while "acted" goes through the tracking sheet, which replaces the log's
  // `data` wholesale and drops the scheduled `source`.
  const isDebriefOutcomeResolved =
    beforeData &&
    afterData &&
    logIsBehaviorLog(afterData) &&
    !!session &&
    sessionIsImpulseSession(session) &&
    afterData.data.resolvedAt != null &&
    fieldChanged(beforeData, afterData, "data.resolvedAt");

  const isDayTotalsDiscussRequested =
    beforeData &&
    afterData &&
    logIsDayTotalsPromptLog(afterData) &&
    !!afterData.data.discussRequestedAt &&
    (!logIsDayTotalsPromptLog(beforeData) ||
      !beforeData.data.discussRequestedAt);

  // Day totals confirmed via the totals card — no user message is sent, so
  // this must bypass the "latest is assistant" guard. In pending-task recaps
  // the intro assistant message ("I have a couple of things to look at...")
  // is the latest session log at confirm time; without this exclusion the
  // confirmation is swallowed and the recap AI never responds.
  const isDayTotalsConfirmed =
    beforeData &&
    afterData &&
    logIsDayTotalsPromptLog(afterData) &&
    !!afterData.data.confirmedAt &&
    (!logIsDayTotalsPromptLog(beforeData) || !beforeData.data.confirmedAt);

  const isSetupModeTextChoice =
    beforeData &&
    afterData &&
    logIsSetupModeChoiceLog(afterData) &&
    afterData.data.choice === "text" &&
    fieldChanged(beforeData, afterData, "data.choice");

  const isShortcutSetupTextChoice =
    beforeData &&
    afterData &&
    logIsShortcutSetupIntroLog(afterData) &&
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

  // Completed on update (an inline card's checkbox), OR created already
  // completed — the plan sheet writes a fresh completed tactic log when the
  // tactic never had an inline card, and that completion still needs an AI
  // acknowledgment.
  const isTacticCompleted =
    afterData &&
    logIsTacticLog(afterData) &&
    afterData.data.completed === true &&
    (!beforeData ||
      !logIsTacticLog(beforeData) ||
      beforeData.data.completed !== true);

  // The user accepted/declined a proposed goal change card — an inline
  // interaction with no user message, so it must bypass the "latest is
  // assistant" guard. Keyed on the pending → accepted/declined transition so
  // the server-side apply patch (appliedAt/previousGoal, status unchanged)
  // doesn't re-trigger a second response.
  const isGoalChangeResponded =
    beforeData &&
    afterData &&
    logIsProposedGoalChangeLog(afterData) &&
    (afterData.data.status === "accepted" ||
      afterData.data.status === "declined") &&
    logIsProposedGoalChangeLog(beforeData) &&
    beforeData.data.status === "pending";

  // The user accepted/declined a weekly-review strategy proposal card (or its
  // full-screen view) — inline interaction, no user message. Scoped to queue
  // cards (data.sourceTaskId) OR any card inside a weekly recap — v2 review
  // beats create generative cards with no source task (gap offers), and
  // without this the accept is swallowed and the review stalls. Accepting a
  // coach-dashboard proposal elsewhere keeps its existing behavior. Keyed on
  // the status transition.
  const isStrategyCardResponded =
    beforeData &&
    afterData &&
    logIsProposedStrategyModificationLog(afterData) &&
    (!!(afterData.data as { sourceTaskId?: string }).sourceTaskId ||
      (session?.type === "recap" &&
        (session as { recapMode?: string }).recapMode === "weekly")) &&
    (afterData.data.status === "accepted" ||
      afterData.data.status === "declined") &&
    logIsProposedStrategyModificationLog(beforeData) &&
    beforeData.data.status === "pending";

  // The user answered the resume-reminders card (yes/not now) — an inline
  // interaction with no user message, so it must bypass the "latest is
  // assistant" guard or the response is silently swallowed. Keyed on the
  // respondedAt transition so the server-side pause-clearing patch doesn't
  // re-trigger a second response.
  const isResumeRemindersResponded =
    beforeData &&
    afterData &&
    logIsResumeRecapRemindersCtaLog(afterData) &&
    !!afterData.data.respondedAt &&
    (!logIsResumeRecapRemindersCtaLog(beforeData) ||
      !beforeData.data.respondedAt);

  const isMergeBehaviorsResponseSelected =
    beforeData &&
    afterData &&
    logIsMergeBehaviorsProposalLog(afterData) &&
    !!afterData.data.selectedResponseText &&
    fieldChanged(beforeData, afterData, "data.selectedResponseText");

  const isMaskBehaviorResponseSelected =
    beforeData &&
    afterData &&
    logIsMaskBehaviorProposalLog(afterData) &&
    !!afterData.data.selectedResponseText &&
    fieldChanged(beforeData, afterData, "data.selectedResponseText");

  const isDebriefQuestionResponseSelected =
    beforeData &&
    afterData &&
    logIsDebriefQuestionLog(afterData) &&
    !!afterData.data.selectedResponseText &&
    fieldChanged(beforeData, afterData, "data.selectedResponseText");

  const isImpulseStartedDuringOnboarding =
    !beforeData &&
    afterData &&
    logIsImpulseStartedLog(afterData) &&
    session &&
    sessionIsOnboardingSession(session);

  // The user pressed the impulse button again while a recent impulse session
  // was reused. The latest log is almost always assistant output at that
  // point, so this must bypass the "latest is assistant" guard or the
  // response is silently swallowed. (Even a contextless re-press gets a
  // response — the repress payload message steers the model to gently
  // re-engage rather than pretend it has a plan or tactics to point at.)
  const isImpulseRepress =
    !beforeData &&
    afterData &&
    logIsImpulseStartedLog(afterData) &&
    afterData.data.repress === true &&
    !!session &&
    sessionIsImpulseSession(session);

  const latestIsAssistantOutput =
    latestSessionLog &&
    (logIsAssistantMessageLog(latestSessionLog) ||
      logIsToolCallLog(latestSessionLog) ||
      (logIsTacticLog(latestSessionLog) &&
        !latestSessionLog.data.completed));

  if (
    !isMetricRating &&
    !isDebriefOutcomeResolved &&
    !isDayTotalsDiscussRequested &&
    !isDayTotalsConfirmed &&
    !isSetupModeTextChoice &&
    !isShortcutSetupTextChoice &&
    !isTacticCompleted &&
    !isGoalChangeResponded &&
    !isStrategyCardResponded &&
    !isResumeRemindersResponded &&
    !isMergeBehaviorsResponseSelected &&
    !isMaskBehaviorResponseSelected &&
    !isDebriefQuestionResponseSelected &&
    !isImpulseStartedDuringOnboarding &&
    !isImpulseRepress &&
    latestIsAssistantOutput
  ) {
    console.log("Latest log is assistant output. Not responding with AI.");
    return false;
  }

  // A structured debrief question was posted (quick-tap chips) and is still
  // unanswered — it is the latest log in the session. It stands on its own; any
  // AI free-text reply layered on top of it hides the chips in the UI. This
  // blocks the redundant reply that arises when a tracked behavior auto-posts
  // the question and, a beat later, the user taps "Discuss" on the card (which
  // flips shouldZaraRespond → true on the behavior log). Answering the question
  // sets `selectedResponseText` (no longer "unanswered") and produces a newer
  // log, so the deferred reply still fires then via isDebriefQuestionResponseSelected.
  const latestIsUnansweredDebriefQuestion =
    !!latestSessionLog &&
    logIsDebriefQuestionLog(latestSessionLog) &&
    !latestSessionLog.data.selectedResponseText;
  if (latestIsUnansweredDebriefQuestion) {
    console.log(
      "Latest log is an unanswered debrief question. Not responding with AI.",
    );
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

  // Case: Weekly strategy proposal responded to (accept/decline tapped)
  if (isStrategyCardResponded) {
    console.log("Strategy proposal card responded to. Responding with AI.");
    return true;
  }

  // Case: Proposed goal change responded to (accept/decline card tapped)
  if (isGoalChangeResponded) {
    console.log("Goal change proposal responded to. Responding with AI.");
    return true;
  }

  // Case: Resume-reminders card responded to (yes/not now tapped)
  if (isResumeRemindersResponded) {
    console.log("Resume reminders card responded to. Responding with AI.");
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

  // Case: Shortcut setup intro — user chose text instructions
  if (isShortcutSetupTextChoice) {
    console.log("Shortcut setup text choice made. Responding with AI.");
    return true;
  }

  // Case: impulse_started during onboarding — user tested their shortcut
  if (isImpulseStartedDuringOnboarding) {
    console.log("Impulse started during onboarding. Responding with AI.");
    return true;
  }

  // Case: impulse button re-pressed while an existing session was reused —
  // the urge is back (or never left), so the AI should re-engage.
  if (isImpulseRepress) {
    console.log("Impulse button re-pressed. Responding with AI.");
    return true;
  }

  // Case: Debrief urge outcome was resolved (resisted/still_there)
  if (isDebriefOutcomeResolved) {
    console.log("Debrief urge outcome resolved. Responding with AI.");
    return true;
  }

  // Case: A behavior log was explicitly marked for the assistant to respond, or has debrief system prompt set
  if (isNotDeleting && logIsBehaviorLog(afterData)) {
    // Respond if shouldZaraRespond was set
    if (
      fieldChanged(beforeData, afterData, "shouldZaraRespond") &&
      afterData.shouldZaraRespond
    ) {
      console.log(
        "Behavior log was explicitly marked for the assistant to respond. Responding with AI.",
      );
      return true;
    }
  }

  // Case: A metric log was explicitly marked for the assistant to respond (e.g. feeling discussion requested)
  if (isNotDeleting && logIsMetricLog(afterData)) {
    if (
      fieldChanged(beforeData, afterData, "shouldZaraRespond") &&
      afterData.shouldZaraRespond
    ) {
      console.log(
        "Metric log marked for the assistant to respond. Responding with AI.",
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
  if (isDayTotalsConfirmed && logIsDayTotalsPromptLog(afterData)) {
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

  if (isMergeBehaviorsResponseSelected) {
    console.log("Merge behaviors response selected. Responding with AI.");
    return true;
  }

  if (isMaskBehaviorResponseSelected) {
    console.log("Mask behavior response selected. Responding with AI.");
    return true;
  }

  if (isDebriefQuestionResponseSelected) {
    console.log("Debrief question response selected. Responding with AI.");
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
