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
    if (latestThreadLog && (0, log_1.logIsAssistantMessageLog)(latestThreadLog)) {
        console.log("Latest message is from assistant. Not responding with AI.");
        return false;
    }
    const isCreating = !beforeData && afterData;
    const isUpdating = beforeData && afterData;
    const isNotDeleting = !!afterData;
    console.log({
        notificationsEnabled: typeof thread.notificationsEnabled,
    });
    // Case: The user has acted on the enable notifications CTA log - now we respond to the original
    // user message. This must be checked BEFORE the alignment thread early-exit below, because at
    // the time of the CTA response, notificationsEnabled is still undefined on the thread.
    if (isUpdating &&
        (0, log_1.logIsEnableNotificationsCtaLog)(afterData) &&
        afterData.data.respondedAt &&
        !((0, log_1.logIsEnableNotificationsCtaLog)(beforeData) && beforeData.data.respondedAt)) {
        console.log("User has responded to enable notifications CTA. Responding with AI.");
        return true;
    }
    // Case: this is an alignment thread, and the user hasn't enabled or skipped notifications. We
    // don't respond with AI - we respond with the notificationsCtaLog
    if ((0, schemas_1.threadIsAlignmentThread)(thread) &&
        typeof thread.notificationsEnabled === "undefined") {
        console.log("Thread is alignment and notificationsEnabled is undefined. Not responding with AI.");
        return false;
    }
    // Case: New message logs (creation event, no before data)
    if (isCreating && (0, log_1.logIsUserMessageLog)(afterData)) {
        console.log("New message log. Responding with AI.");
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
    if (isCreating && (0, log_1.logIsBehaviorLog)(afterData) && afterData.data.value === 0) {
        console.log("User logged a behavior with value=0. Responding with AI.");
        return true;
    }
    // Case: A trigger plan is added to the thread
    if (isCreating &&
        (0, log_1.logIsPlansLog)(afterData) &&
        ((_a = afterData.data.plans[0]) === null || _a === void 0 ? void 0 : _a.plan.type) === "trigger") {
        console.log("Trigger plan was added. Responding with AI.");
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
    // Case: The user has answered all questions in a QuestionsLog (recap or experiment metrics)
    if (isNotDeleting &&
        (0, log_1.logIsQuestionsLog)(afterData) &&
        (0, fields_1.fieldChanged)(beforeData, afterData, "data.questions")) {
        // Check if all questions now have responses
        const allAnswered = afterData.data.questions.every((q) => q.response);
        if (allAnswered) {
            console.log("User has answered all questions. Responding with AI.");
            return true;
        }
    }
    // Case: A proposed experiment was accepted (confirmedAt set)
    if (isUpdating &&
        (beforeData === null || beforeData === void 0 ? void 0 : beforeData.type) === "proposed_experiment" &&
        (afterData === null || afterData === void 0 ? void 0 : afterData.type) === "proposed_experiment") {
        const beforeProposed = beforeData;
        const afterProposed = afterData;
        if (!beforeProposed.confirmedAt && afterProposed.confirmedAt) {
            console.log("Proposed experiment was accepted. Responding with AI.");
            return true;
        }
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
    // Case: A plansLog was updated with completedAt for a timePlan thread
    if (isNotDeleting &&
        (0, log_1.logIsPlansLog)(afterData) &&
        (0, schemas_1.threadIsTimePlanThread)(thread) &&
        isTimePlanFullyCompleted(thread, afterData)) {
        console.log("Time plan was fully completed. Responding with AI.");
        return true;
    }
    console.log("No conditions met. Not responding with AI.");
    return false;
}
