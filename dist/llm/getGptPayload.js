"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGptPayload = getGptPayload;
const behaviorCategories_1 = require("../constants/behaviorCategories");
const log_1 = require("../schemas/log");
const formatDaySummary_1 = require("./formatDaySummary");
function getGptPayload(log) {
    if ((0, log_1.logIsImpulseLog)(log)) {
        return [
            {
                role: "user",
                content: "The user has pressed the impulse button: they are facing a craving or urge",
            },
        ];
    }
    // Handle ReadyToDebriefLog
    if ((0, log_1.logIsReadyToDebriefLog)(log)) {
        return [
            {
                role: "user",
                content: "<SYSTEM>User finished a tactic and is ready to debrief</SYSTEM>",
            },
        ];
    }
    if ((0, log_1.logIsUserMessageLog)(log)) {
        return [
            {
                role: "user",
                content: log.data.message.content,
            },
        ];
    }
    // Handle AssistantMessageLog
    if ((0, log_1.logIsAssistantMessageLog)(log)) {
        const messages = [];
        messages.push(log.data.message);
        return messages;
    }
    // Handle ToolCallLog
    if ((0, log_1.logIsToolCallLog)(log)) {
        const messages = [];
        messages.push(log.data.message);
        // Add tool result messages
        if (log.data.toolCallResults && log.data.toolCallResults.length > 0) {
            log.data.toolCallResults.forEach((result) => {
                messages.push(result);
            });
        }
        return messages;
    }
    // Handle CallLog
    if ((0, log_1.logIsCallLog)(log)) {
        const messages = [];
        if (log.data.summary) {
            messages.push({
                role: "user",
                content: `<SYSTEM>Previous call summary: ${log.data.summary}</SYSTEM>`,
            });
        }
        else {
            messages.push({
                role: "user",
                content: "<SYSTEM>User had a previous call with the assistant</SYSTEM>",
            });
        }
        return messages;
    }
    if ((0, log_1.logIsTacticLog)(log)) {
        return [
            {
                role: "user",
                content: `<SYSTEM>User completed tactic: ${log.data.tactic.title}</SYSTEM>`,
            },
        ];
    }
    if ((0, log_1.logIsWidgetSetupLog)(log)) {
        return [
            {
                role: "user",
                content: `<SYSTEM>The user has installed the Impulse widget!</SYSTEM>`,
            },
        ];
    }
    // Handle QuestionLog
    if ((0, log_1.logIsQuestionLog)(log)) {
        const messages = [];
        messages.push({
            role: "assistant",
            content: log.data.question.text,
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
    if ((0, log_1.logIsShowTourLog)(log)) {
        const messages = [];
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
    if ((0, log_1.logIsResistedLog)(log)) {
        const isSuccess = log.data.isSuccess;
        return [
            {
                role: "user",
                content: isSuccess
                    ? "<SYSTEM>The user successfully resisted an impulse</SYSTEM>"
                    : "<SYSTEM>The user experienced a setback and did not resist an impulse</SYSTEM>",
            },
        ];
    }
    // Handle BehaviorLog
    if ((0, log_1.logIsBehaviorLog)(log)) {
        const { behaviorName, formattedValue, category } = log.data;
        const categoryExplanation = (0, behaviorCategories_1.getBehaviorCategoryExplanation)(category);
        return [
            {
                role: "user",
                content: `<s>The user has tracked a behavior: ${behaviorName} - ${formattedValue} (Category: ${category} - ${categoryExplanation})</s>`,
            },
        ];
    }
    // Handle DaySummaryLog
    if ((0, log_1.logIsDaySummaryLog)(log)) {
        const summary = (0, formatDaySummary_1.formatDaySummary)(log);
        return [
            {
                role: "user",
                content: `<s>${summary}</s>`,
            },
        ];
    }
    // Return empty array for other (unsupported) log types
    return [];
}
