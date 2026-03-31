"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shouldRespondToLogWithAI = shouldRespondToLogWithAI;
const schemas_1 = require("../schemas");
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
    if (!isMetricRating &&
        !isDebriefOutcomeResolved &&
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
    // Case: An impulse moment has started
    if (isCreating && (0, log_1.logIsImpulseStartedLog)(afterData)) {
        console.log("New impulse started log. Responding with AI.");
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
    // Case: The user has completed a tour
    if (isUpdating &&
        (0, log_1.logIsShowTourLog)(beforeData) &&
        (0, log_1.logIsShowTourLog)(afterData) &&
        !(beforeData === null || beforeData === void 0 ? void 0 : beforeData.data.completedAt) &&
        afterData.data.completedAt) {
        console.log("User has completed a tour. Responding with AI.");
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
    // Case: Day totals confirmed — trigger experiment reflection in recap session
    // Only respond if the day is still within the recap deadline (10am next day)
    if (isCreating && (0, log_1.logIsDayTotalsConfirmedLog)(afterData)) {
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
    if (isUpdating &&
        (0, log_1.logIsDayTotalsConfirmedLog)(afterData) &&
        afterData.data.discussRequestedAt &&
        (!beforeData ||
            !(0, log_1.logIsDayTotalsConfirmedLog)(beforeData) ||
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
    console.log("No conditions met. Not responding with AI.");
    return false;
}
