"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGptPayload = getGptPayload;
const log_1 = require("../schemas/log");
const buildPlansLogPayload_1 = require("./buildPlansLogPayload");
const constants_1 = require("../constants");
function buildBehaviorLogPayload(log, options) {
    var _a, _b, _c;
    const { behaviorName, formattedValue, source, debriefOutcome } = log.data;
    const parts = [];
    if (debriefOutcome) {
        if (options === null || options === void 0 ? void 0 : options.forSummarization) {
            // Facts only — no AI conversation instructions
            if (debriefOutcome === "resisted") {
                parts.push("<CONTEXT>The user resisted the urge.</CONTEXT>");
            }
            else if (debriefOutcome === "acted") {
                parts.push("<CONTEXT>The user acted on the urge.</CONTEXT>");
            }
            else if (debriefOutcome === "still_there") {
                parts.push("<CONTEXT>The user reported the urge was still present.</CONTEXT>");
            }
        }
        else {
            if (debriefOutcome === "resisted") {
                parts.push("<CONTEXT>The user resisted the urge and is now debriefing. Do not assume they engaged with any tactic that was suggested earlier — each tactic log in the transcript states whether it was completed or left unengaged. Only reference what the transcript actually shows.</CONTEXT>");
            }
            else if (debriefOutcome === "acted") {
                parts.push("<CONTEXT>The user acted on an urge. We're debriefing what happened and how to support them in a non-judgmental way.</CONTEXT>");
            }
            else if (debriefOutcome === "still_there") {
                parts.push("<CONTEXT>The user reports that the urge is still present. We're helping them process the urge and decide what to do next.</CONTEXT>");
            }
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
function getGptPayload(log, isFinalLogInSession, options) {
    var _a, _b, _c;
    if (log.type === "proposed_experiment") {
        const behaviorName = "behaviorName" in log
            ? log.behaviorName
            : undefined;
        const metricLabels = "metricLabels" in log
            ? log.metricLabels
            : undefined;
        const metricNames = "metrics" in log
            ? (_a = log.metrics) === null || _a === void 0 ? void 0 : _a.map((metric) => metric.name)
            : undefined;
        const behaviorText = behaviorName && behaviorName.trim().length > 0
            ? behaviorName
            : "the behavior you’re tracking";
        const metricsText = metricNames && metricNames.length > 0
            ? metricNames.join(", ")
            : metricLabels && metricLabels.length > 0
                ? metricLabels.join(", ")
                : "what you agreed to track";
        if (isFinalLogInSession) {
            return [
                {
                    role: "user",
                    content: "<SYSTEM>\n" +
                        "The user has just accepted a proposed experiment.\n" +
                        "Respond to the user using the following message TEMPLATE, adapting it to what you know about the user’s issue and the specific experiment configuration (e.g. behavior, metrics).\n" +
                        "Keep the structure and tone, but substitute details appropriately. Do not add extra paragraphs or questions beyond this template.\n\n" +
                        "BEHAVIOR:\n" +
                        behaviorText +
                        "\n\n" +
                        "METRICS:\n" +
                        metricsText +
                        "\n\n" +
                        "TEMPLATE:\n" +
                        "You’re all set — the experiment has started - we’ll track " +
                        behaviorText +
                        " and " +
                        metricsText +
                        "\n\n" +
                        `For now, just go about your day as usual. If you ${behaviorText}, log it in the app.\n\n` +
                        "After " +
                        constants_1.DEFAULT_RECAP_TIME_LABEL +
                        ", come back to do a short recap of how the day felt.\n\n" +
                        "As you track over time, you’ll start seeing insights about how your behavior connects to the metrics you’re measuring.\n" +
                        "</SYSTEM>",
                },
            ];
        }
        return [
            {
                role: "user",
                content: "<SYSTEM>The user has accepted the proposed experiment and it's now active. You do not need to re-explain the experiment; just treat this as context for future replies.</SYSTEM>",
            },
        ];
    }
    if ((0, log_1.logIsProposedStrategyModificationLog)(log)) {
        if (log.data.status !== "accepted")
            return [];
        const title = log.data.title.trim();
        const summary = (_b = log.data.summary) === null || _b === void 0 ? void 0 : _b.trim();
        const context = summary ? `${title}: ${summary}` : title;
        return [
            {
                role: "user",
                content: `<SYSTEM>The user accepted a suggested strategy update. Saved strategy: ${context}.</SYSTEM>`,
            },
        ];
    }
    if ((0, log_1.logIsPlansLog)(log)) {
        // Plans logs contain AI instructions that pollute summaries.
        // Actual plan usage is captured by separate tactic logs.
        if (options === null || options === void 0 ? void 0 : options.forSummarization)
            return [];
        return (0, buildPlansLogPayload_1.buildPlansLogPayload)(log, isFinalLogInSession);
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
        const tacticTitle = log.data.tactic.title;
        const isCompleted = log.data.completed === true;
        const response = log.data.response;
        const isDebrief = (options === null || options === void 0 ? void 0 : options.sessionPhase) === "debrief";
        if (isCompleted && response) {
            return [
                {
                    role: "user",
                    content: `<SYSTEM>User completed tactic: ${tacticTitle}. Response: ${response.formattedValue}</SYSTEM>`,
                },
            ];
        }
        if (isCompleted) {
            return [
                {
                    role: "user",
                    content: `<SYSTEM>User completed tactic: ${tacticTitle}</SYSTEM>`,
                },
            ];
        }
        if (options === null || options === void 0 ? void 0 : options.forSummarization) {
            return [
                {
                    role: "user",
                    content: `<SYSTEM>Tactic suggested: "${tacticTitle}" — not started or completed.</SYSTEM>`,
                },
            ];
        }
        if (isDebrief) {
            return [
                {
                    role: "user",
                    content: `<SYSTEM>Earlier in this session Zara suggested the tactic "${tacticTitle}", but the user did NOT start or complete it. Do not praise the user for doing this tactic.</SYSTEM>`,
                },
            ];
        }
        return [
            {
                role: "user",
                content: `<SYSTEM>Zara suggested the tactic "${tacticTitle}". The user has not engaged with it yet — do not assume they have done it.</SYSTEM>`,
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
    // Handle BehaviorLog
    if ((0, log_1.logIsBehaviorLog)(log)) {
        return buildBehaviorLogPayload(log, options);
    }
    // Handle DayTotalsPromptLog with confirmedAt (day totals confirmed)
    if ((0, log_1.logIsDayTotalsPromptLog)(log) && log.data.confirmedAt) {
        return [
            {
                role: "user",
                content: "<CONTEXT>The user has confirmed their day totals. Transition to experiment reflection — discuss the day through the lens of the active experiment, and use the createMetricLog tool to prompt the user to rate any untracked metrics.</CONTEXT>",
            },
        ];
    }
    // Handle MetricLog
    if ((0, log_1.logIsMetricLog)(log)) {
        const { metricName, value, minLabel, maxLabel, quadrant } = log.data;
        const scaleDesc = minLabel && maxLabel ? ` (${minLabel} to ${maxLabel})` : "";
        if (value == null) {
            return [
                {
                    role: "user",
                    content: `<CONTEXT>Metric "${metricName}"${scaleDesc} is awaiting user rating (1-10 scale).</CONTEXT>`,
                },
            ];
        }
        // Feeling metric (has quadrant) — use feeling-specific wording
        if (quadrant) {
            if (isFinalLogInSession && log.shouldZaraRespond) {
                return [
                    {
                        role: "user",
                        content: `<CONTEXT>The user is feeling ${metricName} (${quadrant}), rated ${value}/10${scaleDesc}. They want to discuss this feeling.</CONTEXT>`,
                    },
                ];
            }
            return [
                {
                    role: "user",
                    content: `<CONTEXT>User is feeling "${metricName}" (${quadrant}): ${value}/10${scaleDesc}.</CONTEXT>`,
                },
            ];
        }
        return [
            {
                role: "user",
                content: `<CONTEXT>User rated "${metricName}": ${value}/10${scaleDesc}.</CONTEXT>`,
            },
        ];
    }
    // Tags updated from UI — inform the AI so it can respond with tactic suggestions
    if (log.type === "tags_updated") {
        const tactics = (_c = log.data) === null || _c === void 0 ? void 0 : _c.recommendedTactics;
        let tacticsContext = "";
        if (tactics && tactics.length > 0) {
            const lines = tactics.map((t) => `- [id=${t.tacticId}] "${t.title}"${t.phase ? ` (${t.phase})` : ""}${t.description ? ` — ${t.description}` : ""}`);
            tacticsContext =
                "\n\nRecommended tactics (use suggestTactic with the tactic ID):\n" +
                    lines.join("\n");
        }
        return [
            {
                role: "user",
                content: "<SYSTEM>The user just updated their session tags using the tag bar. " +
                    "Review the updated tags in your context and respond appropriately. " +
                    "Suggest a tactic using the suggestTactic tool." +
                    tacticsContext +
                    "</SYSTEM>",
            },
        ];
    }
    // Return empty array for other (unsupported) log types
    return [];
}
