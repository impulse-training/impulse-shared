"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildLadder = buildLadder;
exports.computeMilestoneProgress = computeMilestoneProgress;
const RUNG_LABELS = {
    1: "1 day",
    3: "3 days",
    7: "1 week",
    14: "2 weeks",
    30: "1 month",
    90: "3 months",
    180: "6 months",
    365: "1 year",
};
const ELIMINATE_THRESHOLDS = [1, 3, 7, 14, 30, 90, 180, 365];
const STREAK_THRESHOLDS = [3, 7, 14, 30, 90, 180, 365];
function thresholdsToRungs(thresholds) {
    return thresholds.map((days) => {
        var _a;
        return ({
            days,
            label: (_a = RUNG_LABELS[days]) !== null && _a !== void 0 ? _a : `${days} days`,
        });
    });
}
function defaultRungsForGoalType(goalType) {
    switch (goalType) {
        case "ELIMINATE":
            return thresholdsToRungs(ELIMINATE_THRESHOLDS);
        case "MAX_PER_DAY":
        case "MIN_PER_DAY":
            return thresholdsToRungs(STREAK_THRESHOLDS);
        case "CUSTOM":
            return [];
    }
}
function buildLadder(goalType, customRungs) {
    const defaults = defaultRungsForGoalType(goalType);
    if (!customRungs || customRungs.length === 0)
        return defaults;
    const defaultDays = new Set(defaults.map((r) => r.days));
    const merged = [
        ...defaults,
        ...customRungs
            .filter((r) => !defaultDays.has(r.days))
            .map((r) => ({ ...r, isCustom: true })),
    ];
    merged.sort((a, b) => a.days - b.days);
    return merged;
}
function computeMilestoneProgress(currentStreakDays, ladder) {
    let lastAchievedRung = null;
    let nextRung = null;
    for (const rung of ladder) {
        if (currentStreakDays >= rung.days) {
            lastAchievedRung = rung;
        }
        else {
            nextRung = rung;
            break;
        }
    }
    return { lastAchievedRung, nextRung };
}
