"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shouldRespondToLogWithAI = shouldRespondToLogWithAI;
const schemas_1 = require("../schemas");
const log_1 = require("../schemas/log");
const fields_1 = require("./fields");
/**
 * Check if all tactics in a timePlan thread's plan are completed
 */
function isTimePlanFullyCompleted(thread) {
    if (!(0, schemas_1.threadIsTimePlanThread)(thread))
        return false;
    const plan = thread.plan;
    const tacticsByPath = plan.tacticsByPath || {};
    const trackingLogsById = thread.trackingLogsById || {};
    // Check each tactic reference in the plan
    for (const tacticRef of plan.tactics || []) {
        const tacticPath = tacticRef.path;
        const tactic = tacticsByPath[tacticPath];
        const tacticId = tactic === null || tactic === void 0 ? void 0 : tactic.id;
        if (!tacticId)
            continue;
        // Check if this tactic has a completion log
        const isCompleted = Object.values(trackingLogsById).some((log) => { var _a, _b; return (0, log_1.logIsTacticLog)(log) && ((_b = (_a = log.data) === null || _a === void 0 ? void 0 : _a.tactic) === null || _b === void 0 ? void 0 : _b.id) === tacticId; });
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
    // Case: The user has tracked a behavior
    if (isNotDeleting &&
        (0, log_1.logIsBehaviorLog)(afterData) &&
        (0, fields_1.fieldChanged)(beforeData, afterData, "data.formattedValue")) {
        return true;
    }
    // Case: The user has completed a tactic in a timePlan thread and all tactics are now done
    if (isCreating &&
        (0, log_1.logIsTacticLog)(afterData) &&
        (0, schemas_1.threadIsTimePlanThread)(thread) &&
        isTimePlanFullyCompleted(thread)) {
        return true;
    }
    return false;
}
