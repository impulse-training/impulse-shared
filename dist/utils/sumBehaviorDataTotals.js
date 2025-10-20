"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumBehaviorTotalsFromLogs = sumBehaviorTotalsFromLogs;
exports.sumBehaviorDataTotalsFromThreads = sumBehaviorDataTotalsFromThreads;
exports.sumBehaviorDataTotalsFromThread = sumBehaviorDataTotalsFromThread;
const lodash_1 = require("lodash");
const log_1 = require("../schemas/log");
const behaviorData_1 = require("./behaviorData");
/**
 * Calculate behavior totals from logs
 * @param logs Array of logs to process
 * @returns Record of behavior totals by behavior ID
 */
function sumBehaviorTotalsFromLogs(logs) {
    // Get the totals for the behavior across all logs
    const totalsByBehaviorId = {};
    // Process each log
    logs.forEach((logData) => {
        if ((0, log_1.logIsBehaviorLog)(logData)) {
            const behaviorData = logData.data;
            if (!totalsByBehaviorId[behaviorData.behaviorId]) {
                totalsByBehaviorId[behaviorData.behaviorId] = behaviorData;
            }
            else if (behaviorData.trackingType ===
                totalsByBehaviorId[behaviorData.behaviorId].trackingType) {
                totalsByBehaviorId[behaviorData.behaviorId].value += behaviorData.value;
            }
            else {
                // Rare (unlikely) edge case where the user has tracked a behavior using a counter, then
                // changed to track it by time, or vice-versa. We just simply don't add the values up.
            }
        }
    });
    // If we sum "2 cigarettes" and "4 cigarettes", we also need a formatted value of "6 cigarettes"
    const valuesWithFormattedValues = (0, lodash_1.mapValues)(totalsByBehaviorId, (totals) => ({
        ...totals,
        formattedValue: (0, behaviorData_1.getFormattedValue)({
            trackingType: totals.trackingType,
            value: totals.value,
            behaviorTrackingUnit: totals.behaviorTrackingUnit || totals.behaviorName.toLowerCase(),
        }),
    }));
    return valuesWithFormattedValues;
}
/**
 * Calculate behavior totals from multiple threads
 * @param threads Array of threads to process
 * @returns Record of behavior totals by behavior ID
 */
function sumBehaviorDataTotalsFromThreads(threads) {
    const behaviorLogs = threads
        .flatMap((thread) => (0, lodash_1.values)(thread.trackingLogsById))
        .filter(log_1.logIsBehaviorLog);
    return sumBehaviorTotalsFromLogs(behaviorLogs);
}
/**
 * Calculate behavior totals from a single thread (for backward compatibility)
 * @param thread Thread to process
 * @returns Record of behavior totals by behavior ID
 */
function sumBehaviorDataTotalsFromThread(thread) {
    return sumBehaviorDataTotalsFromThreads([thread]);
}
