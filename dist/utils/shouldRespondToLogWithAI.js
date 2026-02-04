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
 * Check if a timePlan thread's plan is marked as completed in a plansLog
 */
function isTimePlanFullyCompleted(thread, plansLog) {
    if (!(0, schemas_1.threadIsTimePlanThread)(thread))
        return false;
    // Check if this plan has completedAt set in the plansLog
    const planEntry = plansLog.data.plans.find((p) => p.planId === thread.planId);
    return !!(planEntry === null || planEntry === void 0 ? void 0 : planEntry.completedAt);
}
/**
 * Check if we should respond to a log write event with AI
 *
 * @param beforeData The log data before the write (null for creation)
 * @param afterData The log data after the write
 * @returns True if we should respond with AI, false otherwise
 */
function shouldRespondToLogWithAI(thread, beforeData, afterData, latestThreadLog) {
    var _a;
    if (latestThreadLog && (0, log_1.logIsAssistantMessageLog)(latestThreadLog))
        return false;
    const isCreating = !beforeData && afterData;
    const isUpdating = beforeData && afterData;
    const isNotDeleting = !!afterData;
    // Case: New message logs (creation event, no before data)
    if (isCreating && (0, log_1.logIsUserMessageLog)(afterData)) {
        return true;
    }
    // Case: A plan was completed (plansLog gains completedAt on a plan entry)
    if (isNotDeleting &&
        (0, log_1.logIsPlansLog)(afterData) &&
        (0, fields_1.fieldChanged)(beforeData, afterData, "data.plans") &&
        hasNewlyCompletedPlan(beforeData, afterData)) {
        return true;
    }
    // Case: Impulse can respond when the user logs a behavior with value=0 (resisted)
    if (isCreating && (0, log_1.logIsBehaviorLog)(afterData) && afterData.data.value === 0) {
        return true;
    }
    // Case: A trigger plan is added to the thread
    if (isCreating &&
        (0, log_1.logIsPlansLog)(afterData) &&
        ((_a = afterData.data.plans[0]) === null || _a === void 0 ? void 0 : _a.plan.type) === "trigger") {
        return true;
    }
    // Case: Widget setup log with changed response field
    if (isNotDeleting && (0, log_1.logIsWidgetSetupLog)(afterData))
        return true;
    // Case: The user has completed a tour
    if (isUpdating &&
        (0, log_1.logIsShowTourLog)(beforeData) &&
        (0, log_1.logIsShowTourLog)(afterData) &&
        !(beforeData === null || beforeData === void 0 ? void 0 : beforeData.data.completedAt) &&
        afterData.data.completedAt) {
        return true;
    }
    // Case: The user has answered all questions in a QuestionsLog (recap or experiment metrics)
    if (isNotDeleting &&
        (0, log_1.logIsQuestionsLog)(afterData) &&
        (0, fields_1.fieldChanged)(beforeData, afterData, "data.questions")) {
        // Check if all questions now have responses
        const allAnswered = afterData.data.questions.every((q) => q.response);
        if (allAnswered) {
            return true;
        }
    }
    // Case: A behavior log was explicitly marked for Zara to respond, or has debrief system prompt set
    if (isNotDeleting && (0, log_1.logIsBehaviorLog)(afterData)) {
        // Respond if shouldZaraRespond was set
        if ((0, fields_1.fieldChanged)(beforeData, afterData, "shouldZaraRespond") &&
            afterData.shouldZaraRespond) {
            return true;
        }
    }
    // Case: A plansLog was updated with completedAt for a timePlan thread
    if (isNotDeleting &&
        (0, log_1.logIsPlansLog)(afterData) &&
        (0, schemas_1.threadIsTimePlanThread)(thread) &&
        isTimePlanFullyCompleted(thread, afterData)) {
        return true;
    }
    return false;
}
