import {
  ChatCompletionAssistantMessageParam,
  ChatCompletionMessageParam,
} from "openai/resources/chat";
import {
  Log,
  logIsAssistantMessageLog,
  logIsDaySummaryLog,
  logIsImpulseLog,
  logIsQuestionLog,
  logIsResistedLog,
  logIsShowTourLog,
  logIsTacticLog,
  logIsToolCallLog,
  logIsUserMessageLog,
  logIsWidgetSetupLog,
} from "../schemas/log";

export function getGptPayload(log: Log): ChatCompletionMessageParam[] {
  if (logIsImpulseLog(log)) {
    return [
      {
        role: "user",
        content:
          "The user has pressed the impulse button: they are facing a craving or urge",
      },
    ];
  }

  if (logIsUserMessageLog(log)) {
    return [
      {
        role: "user",
        content: log.data.message.content,
      },
    ];
  }

  // Handle AssistantMessageLog
  if (logIsAssistantMessageLog(log)) {
    const messages: ChatCompletionAssistantMessageParam[] = [];
    messages.push(log.data.message);

    return messages;
  }

  // Handle ToolCallLog
  if (logIsToolCallLog(log)) {
    const messages: ChatCompletionMessageParam[] = [];
    messages.push(log.data.message);

    // Add tool result messages
    if (log.data.toolCallResults && log.data.toolCallResults.length > 0) {
      log.data.toolCallResults.forEach((result) => {
        messages.push(result);
      });
    }

    return messages;
  }

  if (logIsTacticLog(log)) {
    return [
      {
        role: "user",
        content: `<SYSTEM>User completed tactic: ${log.data.tactic.title}</SYSTEM>`,
      },
    ];
  }

  if (logIsWidgetSetupLog(log)) {
    return [
      {
        role: "user",
        content: `<SYSTEM>The user has installed the Impulse widget!</SYSTEM>`,
      },
    ];
  }

  // Handle QuestionLog
  if (logIsQuestionLog(log)) {
    const messages: ChatCompletionMessageParam[] = [];

    messages.push({
      role: "assistant",
      content: log.data.question.text
        ? log.data.question.text + "\n\n" + log.data.question.question
        : log.data.question.question,
    });

    if (log.data.response) {
      messages.push({
        role: "user",
        content: log.data.response.formattedValue,
      });
    }

    return messages;
  }

  // Handle ShowTourLog
  if (logIsShowTourLog(log)) {
    const messages: ChatCompletionMessageParam[] = [];

    // Always include an assistant message about the tour being shown
    messages.push({
      role: "assistant",
      content: `<SYSTEM>Tour has been shown to the user: ${log.text}</SYSTEM>`,
    });

    // If the tour is completed, include a user message
    if (log.data.completedAt) {
      messages.push({
        role: "user",
        content: "<SYSTEM>The user has completed the tour</SYSTEM>",
      });
    }

    return messages;
  }

  // Handle ResistedLog
  if (logIsResistedLog(log)) {
    return [
      {
        role: "user",
        content: "<SYSTEM>The user successfully resisted an impulse</SYSTEM>",
      },
    ];
  }

  // Handle DaySummaryLog
  if (logIsDaySummaryLog(log)) {
    // Check if behaviorDataTotalByBehaviorId exists in the log data
    const behaviorTotals = (log.data as any)?.behaviorDataTotalByBehaviorId;
    const trackingLogs = (log.data as any)?.trackingLogsById;
    
    // If no data is available
    if ((!behaviorTotals || Object.keys(behaviorTotals).length === 0) && 
        (!trackingLogs || Object.keys(trackingLogs).length === 0)) {
      return [
        {
          role: "user",
          content: `<s>Day summary for ${log.dateString}, but no behavior data recorded.</s>`,
        },
      ];
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

    return [
      {
        role: "user",
        content: `<s>${summary.trim()}</s>`,
      },
    ];
  }

  // Return empty array for other (unsupported) log types
  return [];
}
