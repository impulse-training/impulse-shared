import { DaySummaryLog } from "../schemas/log";

export function formatDaySummary(log: DaySummaryLog): string {
  // Check if behaviorDataTotalByBehaviorId exists in the log data
  const behaviorTotals = log.data?.behaviorDataTotalByBehaviorId;
  const trackingLogs = log.data?.trackingLogsById;
  const behaviorsById = log.data?.behaviorsById;

  // Format behavior totals into a readable summary
  let summary = `Day summary for ${log.dateString}:\n\n`;

  // Handle behavior totals
  if (behaviorTotals && Object.keys(behaviorTotals).length > 0) {
    const behaviorSummaries = Object.entries(behaviorTotals)
      .map(([behaviorId, behaviorData]: [string, any]) => {
        // Try to get behavior name from behaviorsById first, fallback to behaviorData
        const behaviorName = behaviorsById?.[behaviorId]?.name || behaviorData.behaviorName || 'Unknown behavior';
        return `${behaviorName}: ${behaviorData.formattedValue}`;
      })
      .join("\n");

    summary += `Daily Totals:\n${behaviorSummaries}\n\n`;
  } else {
    // No behaviors tracked - enumerate specific behaviors with "No X" format
    const behaviorNames = new Set<string>();
    
    // First, try to get behavior names from behaviorsById
    if (behaviorsById) {
      Object.values(behaviorsById).forEach((behavior: any) => {
        if (behavior.name) {
          behaviorNames.add(behavior.name);
        }
      });
    }
    
    // Fallback: get behavior names from behaviorTotals (even if they're 0)
    if (behaviorTotals) {
      Object.values(behaviorTotals).forEach((behavior: any) => {
        if (behavior.behaviorName) {
          behaviorNames.add(behavior.behaviorName);
        }
      });
    }
    
    // Also check tracking logs for behavior names
    if (trackingLogs && Object.keys(trackingLogs).length > 0) {
      Object.values(trackingLogs).forEach((log: any) => {
        if (log.data?.behaviorName) {
          behaviorNames.add(log.data.behaviorName);
        }
      });
    }
    
    if (behaviorNames.size > 0) {
      const noBehaviorsList = Array.from(behaviorNames)
        .map(name => `No ${name.toLowerCase()}`)
        .join('. ');
      summary += `${noBehaviorsList}. User successfully maintained control!\n\n`;
    } else {
      summary += "No impulse behaviors tracked today - user successfully maintained control!\n\n";
    }
  }

  // Add detailed tracking logs if available
  if (trackingLogs && Object.keys(trackingLogs).length > 0) {
    // Group logs by behavior name for better readability
    const logsByBehavior: Record<string, any[]> = {};

    Object.values(trackingLogs).forEach((log: any) => {
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
      logs.forEach((log: any) => {
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
