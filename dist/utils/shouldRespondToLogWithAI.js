"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shouldRespondToLogWithAI = shouldRespondToLogWithAI;
const schemas_1 = require("../schemas");
const log_1 = require("../schemas/log");
const fields_1 = require("./fields");
/**
 * Check if a timePlan thread's plan is marked as completed in a plansLog
 */
function isTimePlanFullyCompleted(thread, plansLog) {
    var _a;
    if (!(0, schemas_1.threadIsTimePlanThread)(thread))
        return false;
    const planId = (_a = thread.plan) === null || _a === void 0 ? void 0 : _a.id;
    if (!planId)
        return false;
    // Check if this plan has completedAt set in the plansLog
    const planEntry = plansLog.data.plans.find((p) => p.planId === planId);
    return !!(planEntry === null || planEntry === void 0 ? void 0 : planEntry.completedAt);
}
/**
 * Check if we should respond to a log write event with AI
 *
 * @param beforeData The log data before the write (null for creation)
 * @param afterData The log data after the write
 * @returns True if we should respond with AI, false otherwise
 */
function shouldRespondToLogWithAI(thread, beforeData, afterData) {
    const isCreating = !beforeData && afterData;
    const isUpdating = beforeData && afterData;
    const isNotDeleting = !!afterData;
    // Case: New message logs (creation event, no before data)
    if (isCreating && (0, log_1.logIsUserMessageLog)(afterData)) {
        return true;
    }
    // Case: Impulse can respond when the user logs an outcome (resisted or setback)
    if (isCreating && (0, log_1.logIsResistedLog)(afterData)) {
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
    // Case: A behavior log was explicitly marked for Zara to respond
    if (isNotDeleting &&
        (0, log_1.logIsBehaviorLog)(afterData) &&
        (0, fields_1.fieldChanged)(beforeData, afterData, "shouldZaraRespond") &&
        afterData.shouldZaraRespond) {
        return true;
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
