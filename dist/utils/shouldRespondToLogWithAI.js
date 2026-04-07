"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shouldRespondToLogWithAI = shouldRespondToLogWithAI;
const schemas_1 = require("../schemas");
const dates_1 = require("./dates");
const log_1 = require("../schemas/log");
const fields_1 = require("./fields");
function hasNewlyCompletedPlan(beforeData, afterData) {
    const beforePlans = beforeData && (0, log_1.logIsPlansLog)(beforeData) ? beforeData.data.plans : [];
    for (const afterPlan of afterData.data.plans) {
        if (!afterPlan.completedAt)
            continue;
        const beforePlan = beforePlans.find((p) => p.planId === afterPlan.planId);
        if (!(beforePlan === null || beforePlan === void 0 ? void 0 : beforePlan.completedAt)) {
            return true;
        }
    }
    return false;
}
/**
 * Check if a timePlan session's plan is marked as completed in a plansLog
 */
function isTimePlanFullyCompleted(session, plansLog) {
    if (!(0, schemas_1.sessionIsTimePlanSession)(session))
        return false;
    // Check if this plan has completedAt set in the plansLog
    const planEntry = plansLog.data.plans.find((p) => p.planId === session.planId);
    return !!(planEntry === null || planEntry === void 0 ? void 0 : planEntry.completedAt);
}
/**
 * Check if we should respond to a log write event with AI
 *
 * @param beforeData The log data before the write (null for creation)
 * @param afterData The log data after the write
 * @returns True if we should respond with AI, false otherwise
 */
function shouldRespondToLogWithAI(session, beforeData, afterData, latestSessionLog) {
    var _a;
    // Skip the "latest is assistant" guard for inline interactions
    // where the user acts without sending a message
    const isMetricRating = beforeData &&
        afterData &&
        (0, log_1.logIsMetricLog)(afterData) &&
        afterData.data.value !== null &&
        (0, log_1.logIsMetricLog)(beforeData) &&
        beforeData.data.value === null;
    const isDebriefOutcomeResolved = beforeData &&
        afterData &&
        (0, log_1.logIsBehaviorLog)(afterData) &&
        afterData.data.source === "scheduled" &&
        afterData.data.resolvedAt != null &&
        (0, fields_1.fieldChanged)(beforeData, afterData, "data.resolvedAt");
    const isDayTotalsPromptAction = beforeData &&
        afterData &&
        (0, log_1.logIsDayTotalsPromptLog)(afterData);
    const isSetupModeTextChoice = beforeData &&
        afterData &&
        (0, log_1.logIsSetupModeChoiceLog)(afterData) &&
        afterData.data.choice === "text" &&
        (0, fields_1.fieldChanged)(beforeData, afterData, "data.choice");
    const isTagsUpdated = !beforeData && afterData && (0, log_1.logIsTagsUpdatedLog)(afterData);
    const isTacticCompleted = beforeData &&
        afterData &&
        (0, log_1.logIsTacticLog)(afterData) &&
        afterData.data.completed === true &&
        (!(0, log_1.logIsTacticLog)(beforeData) || beforeData.data.completed !== true);
    if (!isMetricRating &&
        !isDebriefOutcomeResolved &&
        !isDayTotalsPromptAction &&
        !isSetupModeTextChoice &&
        !isTagsUpdated &&
        !isTacticCompleted &&
        latestSessionLog &&
        (0, log_1.logIsAssistantMessageLog)(latestSessionLog)) {
        console.log("Latest message is from assistant. Not responding with AI.");
        return false;
    }
    const isCreating = !beforeData && afterData;
    const isUpdating = beforeData && afterData;
    const isNotDeleting = !!afterData;
    // Case: New message logs (creation event, no before data)
    if (isCreating && (0, log_1.logIsUserMessageLog)(afterData)) {
        console.log("New message log. Responding with AI.");
        return true;
    }
    // Case: Tags updated from UI — user set/changed session tags manually
    if (isTagsUpdated) {
        console.log("Tags updated from UI. Responding with AI.");
        return true;
    }
    // Case: A plan was completed (plansLog gains completedAt on a plan entry)
    if (isNotDeleting &&
        (0, log_1.logIsPlansLog)(afterData) &&
        (0, fields_1.fieldChanged)(beforeData, afterData, "data.plans") &&
        hasNewlyCompletedPlan(beforeData, afterData)) {
        console.log("Plan was completed. Responding with AI.");
        return true;
    }
    // Case: Impulse can respond when the user logs a behavior with value=0 (resisted)
    if (isCreating &&
        (0, log_1.logIsBehaviorLog)(afterData) &&
        afterData.data.value === 0 &&
        afterData.shouldZaraRespond !== false) {
        console.log("User logged a behavior with value=0. Responding with AI.");
        return true;
    }
    // Case: A trigger plan is added to the session
    if (isCreating &&
        (0, log_1.logIsPlansLog)(afterData) &&
        ((_a = afterData.data.plans[0]) === null || _a === void 0 ? void 0 : _a.plan.type) === "trigger") {
        console.log("Trigger plan was added. Responding with AI.");
        return true;
    }
    // Case: User selected "something else" in trigger selection
    if (isUpdating &&
        (0, log_1.logIsTriggerSelectionLog)(afterData) &&
        (0, fields_1.fieldChanged)(beforeData, afterData, "data.selectedTriggerId") &&
        afterData.data.selectedTriggerId === null) {
        console.log('Trigger selection "something else" selected. Responding with AI.');
        return true;
    }
    // Case: Widget setup log with changed response field
    if (isNotDeleting && (0, log_1.logIsWidgetSetupLog)(afterData)) {
        console.log("Widget setup log with changed response field. Responding with AI.");
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
    if (isNotDeleting && (0, log_1.logIsBehaviorLog)(afterData)) {
        // Respond if shouldZaraRespond was set
        if ((0, fields_1.fieldChanged)(beforeData, afterData, "shouldZaraRespond") &&
            afterData.shouldZaraRespond) {
            console.log("Behavior log was explicitly marked for Zara to respond. Responding with AI.");
            return true;
        }
    }
    // Case: A plansLog was updated with completedAt for a timePlan session
    if (isNotDeleting &&
        (0, log_1.logIsPlansLog)(afterData) &&
        session &&
        (0, schemas_1.sessionIsTimePlanSession)(session) &&
        isTimePlanFullyCompleted(session, afterData)) {
        console.log("Time plan was fully completed. Responding with AI.");
        return true;
    }
    // Case: Day totals confirmed — the day_totals_prompt log is updated with confirmedAt.
    // Trigger experiment reflection. Only respond if within the recap deadline (10am next day).
    if (isUpdating &&
        afterData &&
        (0, log_1.logIsDayTotalsPromptLog)(afterData) &&
        afterData.data.confirmedAt &&
        (!beforeData ||
            !(0, log_1.logIsDayTotalsPromptLog)(beforeData) ||
            !beforeData.data.confirmedAt)) {
        const dateStr = afterData.data.targetDateString;
        const now = new Date();
        const todayStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
        if (dateStr === todayStr) {
            console.log("Day totals confirmed for today. Responding with AI.");
            return true;
        }
        if (dateStr < todayStr) {
            // Past day: check if within recap deadline (end of the day after the target date).
            // Uses UTC buffer since this runs on the server.
            const deadline = (0, dates_1.getRecapDeadline)(dateStr, true);
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
    if (isUpdating &&
        afterData &&
        (0, log_1.logIsDayTotalsPromptLog)(afterData) &&
        afterData.data.discussRequestedAt &&
        (!beforeData ||
            !(0, log_1.logIsDayTotalsPromptLog)(beforeData) ||
            !beforeData.data.discussRequestedAt)) {
        console.log("Late recap discussion requested. Responding with AI.");
        return true;
    }
    // Case: Metric log was rated (value changed from null to a number)
    if (isUpdating &&
        (0, log_1.logIsMetricLog)(afterData) &&
        afterData.data.value !== null &&
        (!beforeData || !(0, log_1.logIsMetricLog)(beforeData) || beforeData.data.value === null)) {
        console.log("Metric log was rated. Responding with AI.");
        return true;
    }
    // Case: Tactic log was completed — user finished a suggested tactic
    if (isTacticCompleted) {
        console.log("Tactic was completed. Responding with AI.");
        return true;
    }
    // Case: Tactic review completed — user finished reviewing tactics in the recap
    if (isUpdating &&
        afterData &&
        (0, log_1.logIsTacticReviewLog)(afterData) &&
        afterData.data.completedAt &&
        (!beforeData ||
            !(0, log_1.logIsTacticReviewLog)(beforeData) ||
            !beforeData.data.completedAt)) {
        console.log("Tactic review completed. Responding with AI.");
        return true;
    }
    console.log("No conditions met. Not responding with AI.");
    return false;
}
