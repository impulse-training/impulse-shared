"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDaySummary = formatDaySummary;
function formatDaySummary(log) {
    var _a, _b, _c, _d, _e;
    // Check if behaviorDataTotalByBehaviorId exists in the log data
    const behaviorTotals = (_a = log.data) === null || _a === void 0 ? void 0 : _a.behaviorDataTotalByBehaviorId;
    const trackingLogs = (_b = log.data) === null || _b === void 0 ? void 0 : _b.trackingLogsById;
    const behaviorsById = (_c = log.data) === null || _c === void 0 ? void 0 : _c.behaviorsById;
    const goalComparison = (_d = log.data) === null || _d === void 0 ? void 0 : _d.goalComparisonByBehaviorId;
    // Format behavior totals into a readable summary
    let summary = `Day summary for ${log.dateString}:\n\n`;
    // Handle behavior totals
    if (behaviorTotals && Object.keys(behaviorTotals).length > 0) {
        const behaviorSummaries = Object.entries(behaviorTotals)
            .map(([behaviorId, behaviorData]) => {
            var _a;
            // Try to get behavior name from behaviorsById first, fallback to behaviorData
            const behaviorName = ((_a = behaviorsById === null || behaviorsById === void 0 ? void 0 : behaviorsById[behaviorId]) === null || _a === void 0 ? void 0 : _a.name) ||
                behaviorData.behaviorName ||
                "Unknown behavior";
            return `${behaviorName}: ${behaviorData.formattedValue}`;
        })
            .join("\n");
        summary += `Daily Totals:\n${behaviorSummaries}\n\n`;
    }
    else {
        // No behaviors tracked - enumerate specific behaviors with "No X" format
        const behaviorNames = new Set();
        // First, try to get behavior names from behaviorsById
        if (behaviorsById) {
            Object.values(behaviorsById).forEach((behavior) => {
                if (behavior.name) {
                    behaviorNames.add(behavior.name);
                }
            });
        }
        // Fallback: get behavior names from behaviorTotals (even if they're 0)
        if (behaviorTotals) {
            Object.values(behaviorTotals).forEach((behavior) => {
                if (behavior.behaviorName) {
                    behaviorNames.add(behavior.behaviorName);
                }
            });
        }
        // Also check tracking logs for behavior names
        if (trackingLogs && Object.keys(trackingLogs).length > 0) {
            Object.values(trackingLogs).forEach((log) => {
                var _a;
                if ((_a = log.data) === null || _a === void 0 ? void 0 : _a.behaviorName) {
                    behaviorNames.add(log.data.behaviorName);
                }
            });
        }
        if (behaviorNames.size > 0) {
            const noBehaviorsList = Array.from(behaviorNames)
                .map((name) => `No ${name.toLowerCase()}`)
                .join(". ");
            summary += `${noBehaviorsList}. User successfully maintained control!\n\n`;
        }
        else {
            summary +=
                "No impulse behaviors tracked today - user successfully maintained control!\n\n";
        }
    }
    // If goal comparison data is present, include a clear facts block
    if (goalComparison && Object.keys(goalComparison).length > 0) {
        const lines = [];
        for (const [behaviorId, entry] of Object.entries(goalComparison)) {
            const behaviorName = ((_e = behaviorsById === null || behaviorsById === void 0 ? void 0 : behaviorsById[behaviorId]) === null || _e === void 0 ? void 0 : _e.name) || "Unknown behavior";
            const statusLabel = entry.status === "NOT_MET_FAIL"
                ? "NOT MET (FAIL)"
                : entry.status === "MET"
                    ? "MET"
                    : entry.status === "UNSPECIFIED_FOR_DAY"
                        ? "UNSPECIFIED FOR THIS DAY"
                        : "NO GOAL";
            const targetStr = entry.targetValue != null ? `${entry.targetValue} ${entry.unit}` : "-";
            lines.push(`- ${behaviorName} — Goal: ${entry.goalLabel}; Logged: ${entry.measured} ${entry.unit}; Target: ${targetStr}; Status: ${statusLabel}`);
        }
        summary += [
            "Goals vs Logged:",
            ...lines,
            "",
            "If any item shows NOT MET (FAIL), acknowledge this clearly but respond with supportive, nonjudgmental language. Focus on learning and next steps.",
            "",
        ].join("\n");
    }
    // Add detailed tracking logs if available
    if (trackingLogs && Object.keys(trackingLogs).length > 0) {
        // Group logs by behavior name for better readability
        const logsByBehavior = {};
        Object.values(trackingLogs).forEach((log) => {
            const behaviorName = log.data.behaviorName;
            if (!logsByBehavior[behaviorName]) {
                logsByBehavior[behaviorName] = [];
            }
            logsByBehavior[behaviorName].push(log);
        });
        // Format each behavior's logs
        summary += "Detailed Tracking:\n";
        Object.entries(logsByBehavior).forEach(([behaviorName, logs]) => {
            // Sort logs by timestamp
            logs.sort((a, b) => a.timestamp.seconds - b.timestamp.seconds);
            summary += `${behaviorName}:\n`;
            logs.forEach((log) => {
                // Format the timestamp to a readable time
                const timestamp = new Date(log.timestamp.seconds * 1000);
                const timeString = timestamp.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                });
                // Format the log entry
                summary += `  • At ${timeString}: ${log.data.formattedValue}\n`;
            });
        });
    }
    return summary.trim();
}
