"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shouldRespondWithRecapTimePreferenceLog = shouldRespondWithRecapTimePreferenceLog;
const schemas_1 = require("../schemas");
/**
 * Check if we should respond to a log write event with a recap time preference log.
 * This happens when:
 * 1. The session is an alignment session
 * 2. A proposed_experiment log was just confirmed (confirmedAt was set)
 *    OR an image log was just acknowledged (acknowledgedAt was set)
 */
function shouldRespondWithRecapTimePreferenceLog(session, beforeData, afterData) {
    if (!beforeData || !afterData)
        return false;
    if (!(0, schemas_1.sessionIsAlignmentSession)(session))
        return false;
    // When a proposed_experiment log gains confirmedAt
    if (afterData.type === "proposed_experiment" &&
        beforeData.type === "proposed_experiment") {
        const before = beforeData;
        const after = afterData;
        if (after.confirmedAt && !before.confirmedAt)
            return true;
    }
    // When an image log gains acknowledgedAt (e.g. "Got it" on ImpulseMode intro)
    if (afterData.type === "image" && beforeData.type === "image") {
        const before = beforeData;
        const after = afterData;
        if (after.data.acknowledgedAt && !before.data.acknowledgedAt)
            return true;
    }
    return false;
}
