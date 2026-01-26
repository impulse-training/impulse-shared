"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGptPayload = getGptPayload;
const log_1 = require("../schemas/log");
const buildPlansLogPayload_1 = require("./buildPlansLogPayload");
function getGptPayload(log) {
    var _a, _b, _c;
    // Handle ReadyToDebriefLog
    if ((0, log_1.logIsReadyToDebriefLog)(log)) {
        return [
            {
                role: "user",
                content: "<SYSTEM>User finished a tactic and is ready to debrief</SYSTEM>",
            },
        ];
    }
    if ((0, log_1.logIsPlansLog)(log)) {
        return (0, buildPlansLogPayload_1.buildPlansLogPayload)(log);
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
    // Handle QuestionsLog (multi-question log for recap and experiments)
    if ((0, log_1.logIsQuestionsLog)(log)) {
        const messages = [];
        // Format all questions and responses together
        const questionsWithResponses = log.data.questions
            .map((entry) => {
            var _a, _b;
            const questionText = entry.question.text;
            const responseValue = (_b = (_a = entry.response) === null || _a === void 0 ? void 0 : _a.formattedValue) !== null && _b !== void 0 ? _b : "Not answered";
            return `- ${questionText}: ${responseValue}`;
        })
            .join("\n");
        const hasAnyResponse = log.data.questions.some((entry) => entry.response);
        if (hasAnyResponse) {
            messages.push({
                role: "user",
                content: `<s>User answered experiment metric questions:\n${questionsWithResponses}</s>`,
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
        const { behaviorName, formattedValue, debriefSystemPrompt, source } = log.data;
        // If this is a scheduled debrief log with cached system prompt, use that
        if (debriefSystemPrompt) {
            return [
                {
                    role: "user",
                    content: `<SYSTEM>${debriefSystemPrompt}</SYSTEM>`,
                },
            ];
        }
        // If this is an empty scheduled debrief log (no behavior data yet)
        if (source === "scheduled" && !behaviorName) {
            return [
                {
                    role: "user",
                    content: "<SYSTEM>The user is beginning a debrief and has not recorded the outcome yet</SYSTEM>",
                },
            ];
        }
        // Regular behavior log with tracking data
        if (behaviorName && formattedValue) {
            const timestamp = (_c = (_b = (_a = log.timestamp) === null || _a === void 0 ? void 0 : _a.toDate) === null || _b === void 0 ? void 0 : _b.call(_a)) !== null && _c !== void 0 ? _c : new Date();
            const timeStr = timestamp.toLocaleTimeString("en-US", {
                hour: "numeric",
                minute: "2-digit",
                hour12: true,
            });
            return [
                {
                    role: "user",
                    content: `<s>The user has tracked a behavior: ${behaviorName} - ${formattedValue} at ${timeStr}</s>`,
                },
            ];
        }
        // Empty behavior log (shouldn't happen in normal flow, but handle gracefully)
        return [];
    }
    // Return empty array for other (unsupported) log types
    return [];
}
