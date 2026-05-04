"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shouldRespondWithRecapTimePreferenceLog = shouldRespondWithRecapTimePreferenceLog;
const schemas_1 = require("../schemas");
/**
 * Check if we should respond to a log write event with a recap time preference log.
 * This is a safety-net trigger only — showImpulseModeIntro creates the recap
 * time preference directly. This fires if the user acknowledges the image log
 * and no recap_time_preference exists yet.
 */
function shouldRespondWithRecapTimePreferenceLog(session, beforeData, afterData) {
    if (!beforeData || !afterData)
        return false;
    if (!(0, schemas_1.sessionIsOnboardingSession)(session))
        return false;
    // When an image log gains acknowledgedAt (e.g. "Got it" on ImpulseMode intro)
    if (afterData.type === "image" && beforeData.type === "image") {
        const before = beforeData;
        const after = afterData;
        if (after.data.acknowledgedAt && !before.data.acknowledgedAt)
            return true;
    }
    return false;
}
