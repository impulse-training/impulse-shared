import { DaySummaryLog } from "../schemas/log";

export function formatDaySummary(log: DaySummaryLog): string {
  // Check if behaviorDataTotalByBehaviorId exists in the log data
  const behaviorTotals = log.data?.behaviorDataTotalByBehaviorId;
  const trackingLogs = log.data?.trackingLogsById;
  
  // If no data is available
  if ((!behaviorTotals || Object.keys(behaviorTotals).length === 0) && 
      (!trackingLogs || Object.keys(trackingLogs).length === 0)) {
    return `Day summary for ${log.dateString}, but no behavior data recorded.`;
  }

  // Format behavior totals into a readable summary
  let summary = `Day summary for ${log.dateString}:\n\n`;
  
  // Add behavior totals if available
  if (behaviorTotals && Object.keys(behaviorTotals).length > 0) {
    const behaviorSummaries = Object.values(behaviorTotals)
      .map((behavior: any) => `${behavior.behaviorName}: ${behavior.formattedValue}`)
      .join("\n");
    
    summary += `Daily Totals:\n${behaviorSummaries}\n\n`;
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
        const timeString = timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        
        // Format the log entry
        summary += `  • At ${timeString}: ${log.data.formattedValue}\n`;
      });
    });
  }

  return summary.trim();
}
