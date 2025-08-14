"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidLinkLog = exports.logIsLinkLog = exports.isValidSummaryLog = exports.logIsSummaryLog = exports.isValidPlanLog = exports.logIsPlanLog = exports.isValidUserMessageLog = exports.logIsUserMessageLog = exports.isValidTacticSuggestionLog = exports.logIsTacticSuggestionLog = exports.isValidTacticLog = exports.logIsTacticLog = exports.isValidQuestionLog = exports.logIsQuestionLog = exports.isValidWidgetSetupLog = exports.logIsWidgetSetupLog = exports.isValidToolCallLog = exports.logIsToolCallLog = exports.isValidImpulseLog = exports.logIsImpulseLog = exports.isValidCallLog = exports.logIsCallLog = exports.isValidBehaviorLog = exports.logIsBehaviorLog = exports.isValidDaySummaryLog = exports.logIsDaySummaryLog = exports.isValidResistedLog = exports.logIsResistedLog = exports.isValidNotifySupportGroupLog = exports.logIsNotifySupportGroupLog = exports.isValidShowTourLog = exports.logIsShowTourLog = exports.isValidAssistantMessageLog = exports.logIsAssistantMessageLog = exports.logSchema = exports.logTypes = exports.logSchemas = void 0;
const yup = __importStar(require("yup"));
const behaviorLog_1 = require("./behaviorLog");
const callLog_1 = require("./callLog");
const daySummaryLog_1 = require("./daySummaryLog");
const impulseLog_1 = require("./impulseLog");
const linkLog_1 = require("./linkLog");
const messageLog_1 = require("./messageLog");
const userMessageLog_1 = require("./messageLog/userMessageLog");
const notifySupportGroupLog_1 = require("./notifySupportGroupLog");
const planLog_1 = require("./planLog");
const questionLog_1 = require("./questionLog");
const resistedLog_1 = require("./resistedLog");
const showTourLog_1 = require("./showTourLog");
const summaryLog_1 = require("./summaryLog");
const tacticLog_1 = require("./tacticLog");
const toolCallLog_1 = require("./toolCallLog");
const videoLog_1 = require("./videoLog");
const widgetSetupLog_1 = require("./widgetSetupLog");
const tacticSuggestionLog_1 = require("./tacticSuggestionLog");
exports.logSchemas = {
    user: userMessageLog_1.userMessageLogSchema,
    assistant_message: messageLog_1.assistantMessageLogSchema,
    call: callLog_1.callLogSchema,
    tool_call: toolCallLog_1.toolCallLogSchema,
    tactic_completed: tacticLog_1.tacticLogSchema,
    tactic_suggestion: tacticSuggestionLog_1.tacticSuggestionLogSchema,
    day_summary: daySummaryLog_1.daySummaryLogSchema,
    tactic_viewed: tacticLog_1.tacticLogSchema,
    impulse_button_pressed: impulseLog_1.impulseLogSchema,
    behavior: behaviorLog_1.behaviorLogSchema,
    question: questionLog_1.questionLogSchema,
    plan: planLog_1.planLogSchema,
    summary: summaryLog_1.summaryLogSchema,
    resisted: resistedLog_1.resistedLogSchema,
    widget_setup: widgetSetupLog_1.widgetSetupLogSchema,
    show_tour: showTourLog_1.showTourLogSchema,
    link: linkLog_1.linkLogSchema,
    notify_support_group: notifySupportGroupLog_1.notifySupportGroupLogSchema,
    video: videoLog_1.videoLogSchema,
};
exports.logTypes = Object.keys(exports.logSchemas);
__exportStar(require("./behaviorLog"), exports);
__exportStar(require("./callLog"), exports);
__exportStar(require("./daySummaryLog"), exports);
__exportStar(require("./impulseLog"), exports);
__exportStar(require("./linkLog"), exports);
__exportStar(require("./messageLog"), exports);
__exportStar(require("./notifySupportGroupLog"), exports);
__exportStar(require("./planLog"), exports);
__exportStar(require("./questionLog"), exports);
__exportStar(require("./resistedLog"), exports);
__exportStar(require("./showTourLog"), exports);
__exportStar(require("./summaryLog"), exports);
__exportStar(require("./tacticLog"), exports);
__exportStar(require("./tacticSuggestionLog"), exports);
__exportStar(require("./toolCallLog"), exports);
__exportStar(require("./videoLog"), exports);
__exportStar(require("./widgetSetupLog"), exports);
// Dynamic schema that selects the appropriate schema based on the tactic type
exports.logSchema = yup.lazy((value) => {
    if (typeof (value === null || value === void 0 ? void 0 : value.type) === "string" && value.type in exports.logSchemas) {
        return exports.logSchemas[value.type];
    }
    // Fallback schema for validation when type is missing or invalid
    return yup.object({
        type: yup
            .string()
            .oneOf(Object.keys(exports.logSchemas))
            .required("Tactic type is required"),
    });
});
// Export log type guards
const logIsAssistantMessageLog = (value) => value.type === "assistant_message";
exports.logIsAssistantMessageLog = logIsAssistantMessageLog;
const isValidAssistantMessageLog = (value) => {
    try {
        messageLog_1.assistantMessageLogSchema.validateSync(value);
        return true;
    }
    catch (error) {
        return false;
    }
};
exports.isValidAssistantMessageLog = isValidAssistantMessageLog;
const logIsShowTourLog = (value) => value.type === "show_tour";
exports.logIsShowTourLog = logIsShowTourLog;
const isValidShowTourLog = (value) => {
    try {
        showTourLog_1.showTourLogSchema.validateSync(value);
        return true;
    }
    catch (error) {
        return false;
    }
};
exports.isValidShowTourLog = isValidShowTourLog;
const logIsNotifySupportGroupLog = (value) => value.type === "notify_support_group";
exports.logIsNotifySupportGroupLog = logIsNotifySupportGroupLog;
const isValidNotifySupportGroupLog = (value) => {
    try {
        notifySupportGroupLog_1.notifySupportGroupLogSchema.validateSync(value);
        return true;
    }
    catch (error) {
        return false;
    }
};
exports.isValidNotifySupportGroupLog = isValidNotifySupportGroupLog;
const logIsResistedLog = (value) => value.type === "resisted";
exports.logIsResistedLog = logIsResistedLog;
const isValidResistedLog = (value) => {
    try {
        resistedLog_1.resistedLogSchema.validateSync(value);
        return true;
    }
    catch (error) {
        return false;
    }
};
exports.isValidResistedLog = isValidResistedLog;
const logIsDaySummaryLog = (value) => value.type === "day_summary";
exports.logIsDaySummaryLog = logIsDaySummaryLog;
const isValidDaySummaryLog = (value) => {
    try {
        showTourLog_1.showTourLogSchema.validateSync(value);
        return true;
    }
    catch (error) {
        return false;
    }
};
exports.isValidDaySummaryLog = isValidDaySummaryLog;
const logIsBehaviorLog = (value) => value.type === "behavior";
exports.logIsBehaviorLog = logIsBehaviorLog;
const isValidBehaviorLog = (value) => {
    try {
        behaviorLog_1.behaviorLogSchema.validateSync(value);
        return true;
    }
    catch (error) {
        return false;
    }
};
exports.isValidBehaviorLog = isValidBehaviorLog;
const logIsCallLog = (value) => value.type === "call";
exports.logIsCallLog = logIsCallLog;
const isValidCallLog = (value) => {
    try {
        callLog_1.callLogSchema.validateSync(value);
        return true;
    }
    catch (error) {
        return false;
    }
};
exports.isValidCallLog = isValidCallLog;
const logIsImpulseLog = (value) => value.type === "impulse_button_pressed";
exports.logIsImpulseLog = logIsImpulseLog;
const isValidImpulseLog = (value) => {
    try {
        impulseLog_1.impulseLogSchema.validateSync(value);
        return true;
    }
    catch (error) {
        return false;
    }
};
exports.isValidImpulseLog = isValidImpulseLog;
const logIsToolCallLog = (value) => value.type === "tool_call";
exports.logIsToolCallLog = logIsToolCallLog;
const isValidToolCallLog = (value) => {
    try {
        toolCallLog_1.toolCallLogSchema.validateSync(value);
        return true;
    }
    catch (error) {
        return false;
    }
};
exports.isValidToolCallLog = isValidToolCallLog;
const logIsWidgetSetupLog = (value) => value.type === "widget_setup";
exports.logIsWidgetSetupLog = logIsWidgetSetupLog;
const isValidWidgetSetupLog = (value) => {
    try {
        toolCallLog_1.toolCallLogSchema.validateSync(value);
        return true;
    }
    catch (error) {
        return false;
    }
};
exports.isValidWidgetSetupLog = isValidWidgetSetupLog;
const logIsQuestionLog = (value) => value.type === "question";
exports.logIsQuestionLog = logIsQuestionLog;
const isValidQuestionLog = (value) => {
    try {
        questionLog_1.questionLogSchema.validateSync(value);
        return true;
    }
    catch (error) {
        return false;
    }
};
exports.isValidQuestionLog = isValidQuestionLog;
const logIsTacticLog = (value) => value.type === "tactic_completed";
exports.logIsTacticLog = logIsTacticLog;
const isValidTacticLog = (value) => {
    try {
        tacticLog_1.tacticLogSchema.validateSync(value);
        return true;
    }
    catch (error) {
        return false;
    }
};
exports.isValidTacticLog = isValidTacticLog;
const logIsTacticSuggestionLog = (value) => value.type === "tactic_suggestion";
exports.logIsTacticSuggestionLog = logIsTacticSuggestionLog;
const isValidTacticSuggestionLog = (value) => {
    try {
        tacticSuggestionLog_1.tacticSuggestionLogSchema.validateSync(value);
        return true;
    }
    catch (error) {
        return false;
    }
};
exports.isValidTacticSuggestionLog = isValidTacticSuggestionLog;
const logIsUserMessageLog = (value) => value.type === "user_message";
exports.logIsUserMessageLog = logIsUserMessageLog;
const isValidUserMessageLog = (value) => {
    try {
        userMessageLog_1.userMessageLogSchema.validateSync(value);
        return true;
    }
    catch (error) {
        return false;
    }
};
exports.isValidUserMessageLog = isValidUserMessageLog;
const logIsPlanLog = (value) => value.type === "plan";
exports.logIsPlanLog = logIsPlanLog;
const isValidPlanLog = (value) => {
    try {
        planLog_1.planLogSchema.validateSync(value);
        return true;
    }
    catch (error) {
        return false;
    }
};
exports.isValidPlanLog = isValidPlanLog;
const logIsSummaryLog = (value) => value.type === "summary";
exports.logIsSummaryLog = logIsSummaryLog;
const isValidSummaryLog = (value) => {
    try {
        summaryLog_1.summaryLogSchema.validateSync(value);
        return true;
    }
    catch (error) {
        return false;
    }
};
exports.isValidSummaryLog = isValidSummaryLog;
const logIsLinkLog = (value) => value.type === "link";
exports.logIsLinkLog = logIsLinkLog;
const isValidLinkLog = (value) => {
    try {
        linkLog_1.linkLogSchema.validateSync(value);
        return true;
    }
    catch (error) {
        return false;
    }
};
exports.isValidLinkLog = isValidLinkLog;
