import { mapValues, values } from "lodash";
import { Log, logIsBehaviorLog } from "../schemas/log";
import { BehaviorTrackingData } from "../schemas/log/behaviorLog";
import { Thread } from "../schemas/thread";
import { getFormattedValue } from "./behaviorData";

/**
 * Calculate behavior totals from logs
 * @param logs Array of logs to process
 * @returns Record of behavior totals by behavior ID
 */
export function sumBehaviorTotalsFromLogs(
  logs: Log[]
): Record<string, BehaviorTrackingData> {
  // Get the totals for the behavior across all logs
  const totalsByBehaviorId: Record<string, BehaviorTrackingData> = {};

  // Process each log
  logs.forEach((logData) => {
    if (logIsBehaviorLog(logData)) {
      const behaviorData = logData.data;

      if (!totalsByBehaviorId[behaviorData.behaviorId]) {
        totalsByBehaviorId[behaviorData.behaviorId] = behaviorData;
      } else if (
        behaviorData.trackingType ===
        totalsByBehaviorId[behaviorData.behaviorId].trackingType
      ) {
        totalsByBehaviorId[behaviorData.behaviorId].value += behaviorData.value;
      } else {
        // Rare (unlikely) edge case where the user has tracked a behavior using a counter, then
        // changed to track it by time, or vice-versa. We just simply don't add the values up.
      }
    }
  });

  // If we sum "2 cigarettes" and "4 cigarettes", we also need a formatted value of "6 cigarettes"
  const valuesWithFormattedValues = mapValues(totalsByBehaviorId, (totals) => ({
    ...totals,
    formattedValue: getFormattedValue({
      trackingType: totals.trackingType,
      value: totals.value,
      behaviorTrackingUnit:
        totals.behaviorTrackingUnit || totals.behaviorName.toLowerCase(),
    }),
  }));

  return valuesWithFormattedValues;
}

/**
 * Calculate behavior totals from multiple threads
 * @param threads Array of threads to process
 * @returns Record of behavior totals by behavior ID
 */
export function sumBehaviorDataTotalsFromThreads(
  threads: Thread[]
): Record<string, BehaviorTrackingData> {
  const behaviorLogs = threads
    .flatMap((thread) => values(thread.trackingLogsById))
    .filter(logIsBehaviorLog);

  return sumBehaviorTotalsFromLogs(behaviorLogs);
}

/**
 * Calculate behavior totals from a single thread (for backward compatibility)
 * @param thread Thread to process
 * @returns Record of behavior totals by behavior ID
 */
export function sumBehaviorDataTotalsFromThread(
  thread: Thread
): Record<string, BehaviorTrackingData> {
  return sumBehaviorDataTotalsFromThreads([thread]);
}
