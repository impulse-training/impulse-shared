"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGptPayload = getGptPayload;
const log_1 = require("../schemas/log");
const buildPlansLogPayload_1 = require("./buildPlansLogPayload");
function buildBehaviorLogPayload(log) {
    var _a, _b, _c;
    const { behaviorName, formattedValue, source, debriefOutcome } = log.data;
    const parts = [];
    if (source === "scheduled" && debriefOutcome) {
        if (debriefOutcome === "resisted") {
            parts.push("<CONTEXT>The user successfully resisted an urge. We're debriefing what helped them resist and what they can learn from it.</CONTEXT>");
        }
        else if (debriefOutcome === "acted") {
            parts.push("<CONTEXT>The user acted on an urge. We're debriefing what happened and how to support them in a non-judgmental way.</CONTEXT>");
        }
        else if (debriefOutcome === "still_there") {
            parts.push("<CONTEXT>The user reports that the urge is still present. We're helping them process the urge and decide what to do next.</CONTEXT>");
        }
    }
    if (behaviorName && formattedValue) {
        parts.push(`<CONTEXT>Behavior tracked: ${behaviorName} - ${formattedValue}.</CONTEXT>`);
    }
    if (parts.length > 0) {
        return [
            {
                role: "user",
                content: parts.join(" "),
            },
        ];
    }
    // Fallback: regular behavior tracking message without explicit debrief context
    const timestamp = (_c = (_b = (_a = log.timestamp) === null || _a === void 0 ? void 0 : _a.toDate) === null || _b === void 0 ? void 0 : _b.call(_a)) !== null && _c !== void 0 ? _c : new Date();
    const timeStr = timestamp.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
    });
    if (behaviorName && formattedValue) {
        return [
            {
                role: "user",
                content: `<CONTEXT>The user has tracked a behavior: ${behaviorName} - ${formattedValue} at ${timeStr}.</CONTEXT>`,
            },
        ];
    }
    return [];
}
function getGptPayload(log, isFinalLogInThread) {
    if ((0, log_1.logIsPlansLog)(log)) {
        return (0, buildPlansLogPayload_1.buildPlansLogPayload)(log, isFinalLogInThread);
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
        return [log.data.message];
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
        if (!log.data.endedAt)
            return [];
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
    // Handle BehaviorLog
    if ((0, log_1.logIsBehaviorLog)(log)) {
        return buildBehaviorLogPayload(log);
    }
    // Return empty array for other (unsupported) log types
    return [];
}
