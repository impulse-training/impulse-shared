import { QuestionEntry, RecapResponseValue } from "../schemas/log";

/**
 * Format a recap question entry response for LLM consumption.
 * Includes behavior totals and goal comparison data.
 */
export function formatRecapResponse(
  entry: QuestionEntry,
  dateString: string
): string {
  const response = entry.response;

  if (!response) {
    return `Day recap for ${dateString}: No response provided yet.`;
  }

  // Check if this is a recap response with structured data
  if (response.responseType === "recap" && response.value) {
    const recapValue = response.value as RecapResponseValue;

    let summary = `Day recap for ${dateString}:\n\n`;

    // Add behavior totals
    if (recapValue.behaviorTotals) {
      const behaviorLines = Object.entries(recapValue.behaviorTotals).map(
        ([_behaviorId, data]) => {
          const name = data.behaviorName || "Behavior";
          return `${name}: ${data.formattedValue}`;
        }
      );

      if (behaviorLines.length > 0) {
        summary += `Daily Totals:\n${behaviorLines.join("\n")}\n\n`;
      }
    }

    // Add goal comparison if present
    const goalComparison = recapValue.goalComparisonByBehaviorId;
    if (goalComparison && Object.keys(goalComparison).length > 0) {
      const lines: string[] = [];
      for (const [behaviorId, entry] of Object.entries(goalComparison)) {
        // Try to get behavior name from behaviorsById, then behaviorTotals
        const behaviorName =
          recapValue.behaviorsById?.[behaviorId]?.name ||
          recapValue.behaviorTotals?.[behaviorId]?.behaviorName ||
          "Unknown behavior";
        const statusLabel =
          entry.status === "NOT_MET_FAIL"
            ? "NOT MET (FAIL)"
            : entry.status === "MET"
            ? "MET"
            : entry.status === "UNSPECIFIED_FOR_DAY"
            ? "UNSPECIFIED FOR THIS DAY"
            : "NO GOAL";
        const targetStr =
          entry.targetValue != null
            ? `${entry.targetValue} ${entry.unit}`
            : "-";
        lines.push(
          `- ${behaviorName} — Goal: ${entry.goalLabel}; Logged: ${entry.measured} ${entry.unit}; Target: ${targetStr}; Status: ${statusLabel}`
        );
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

  return `Day recap for ${dateString}: Response submitted.`;
}
