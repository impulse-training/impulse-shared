"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatRecapResponse = formatRecapResponse;
/**
 * Format a recap question log response for LLM consumption.
 * Includes behavior totals and goal comparison data.
 */
function formatRecapResponse(log) {
    var _a, _b, _c;
    const response = (_a = log.data) === null || _a === void 0 ? void 0 : _a.response;
    if (!response) {
        return `Day recap for ${log.dateString}: No response provided yet.`;
    }
    // Check if this is a recap response with structured data
    if (response.responseType === "recap" && response.value) {
        const recapValue = response.value;
        let summary = `Day recap for ${log.dateString}:\n\n`;
        // Add behavior totals
        if (recapValue.behaviorTotals) {
            const behaviorLines = Object.entries(recapValue.behaviorTotals).map(([_behaviorId, data]) => {
                const name = data.behaviorName || "Behavior";
                return `${name}: ${data.formattedValue}`;
            });
            if (behaviorLines.length > 0) {
                summary += `Daily Totals:\n${behaviorLines.join("\n")}\n\n`;
            }
        }
        // Add goal comparison if present
        const goalComparison = recapValue.goalComparisonByBehaviorId;
        if (goalComparison && Object.keys(goalComparison).length > 0) {
            const lines = [];
            for (const [behaviorId, entry] of Object.entries(goalComparison)) {
                // Try to get behavior name from behaviorTotals
                const behaviorName = ((_c = (_b = recapValue.behaviorTotals) === null || _b === void 0 ? void 0 : _b[behaviorId]) === null || _c === void 0 ? void 0 : _c.behaviorName) ||
                    "Unknown behavior";
                const statusLabel = entry.status === "NOT_MET_FAIL"
                    ? "NOT MET (FAIL)"
                    : entry.status === "MET"
                        ? "MET"
                        : entry.status === "UNSPECIFIED_FOR_DAY"
                            ? "UNSPECIFIED FOR THIS DAY"
                            : "NO GOAL";
                const targetStr = entry.targetValue != null
                    ? `${entry.targetValue} ${entry.unit}`
                    : "-";
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
        // If we have a summaryText, append it
        if (recapValue.summaryText) {
            summary += `\nUser's summary: ${recapValue.summaryText}`;
        }
        return summary.trim();
    }
    // Fallback to formattedValue if available
    if (response.formattedValue) {
        return response.formattedValue;
    }
    return `Day recap for ${log.dateString}: Response submitted.`;
}
