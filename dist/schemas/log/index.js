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
exports.isValidSummaryLog = exports.logIsSummaryLog = exports.isValidGameplanLog = exports.logIsGameplanLog = exports.isValidUserMessageLog = exports.logIsUserMessageLog = exports.isValidTacticLog = exports.logIsTacticLog = exports.isValidQuestionLog = exports.logIsQuestionLog = exports.isValidToolCallLog = exports.logIsToolCallLog = exports.isValidImpulseLog = exports.logIsImpulseLog = exports.isValidCallLog = exports.logIsCallLog = exports.isValidBehaviorTrackedLog = exports.logIsBehaviorTrackedLog = exports.isValidAssistantMessageLog = exports.logIsAssistantMessageLog = exports.logSchema = exports.logTypes = exports.logSchemas = void 0;
const yup = __importStar(require("yup"));
const behaviorTrackedLog_1 = require("./behaviorTrackedLog");
const callLog_1 = require("./callLog");
const gameplanLog_1 = require("./gameplanLog");
const impulseLog_1 = require("./impulseLog");
const messageLog_1 = require("./messageLog");
const userMessageLog_1 = require("./messageLog/userMessageLog");
const questionLog_1 = require("./questionLog");
const summaryLog_1 = require("./summaryLog");
const tacticLog_1 = require("./tacticLog");
const toolCallLog_1 = require("./toolCallLog");
exports.logSchemas = {
    user: userMessageLog_1.userMessageLogSchema,
    assistant_message: messageLog_1.assistantMessageLogSchema,
    call: callLog_1.callLogSchema,
    tool_call: toolCallLog_1.toolCallLogSchema,
    tactic_completed: tacticLog_1.tacticLogSchema,
    tactic_viewed: tacticLog_1.tacticLogSchema,
    impulse_button_pressed: impulseLog_1.impulseLogSchema,
    behavior_tracked: behaviorTrackedLog_1.behaviorTrackedLogSchema,
    question: questionLog_1.questionLogSchema,
    gameplan: gameplanLog_1.gameplanLogSchema,
    summary: summaryLog_1.summaryLogSchema,
};
exports.logTypes = Object.keys(exports.logSchemas);
__exportStar(require("./behaviorTrackedLog"), exports);
__exportStar(require("./callLog"), exports);
__exportStar(require("./gameplanLog"), exports);
__exportStar(require("./impulseLog"), exports);
__exportStar(require("./messageLog"), exports);
__exportStar(require("./questionLog"), exports);
__exportStar(require("./summaryLog"), exports);
__exportStar(require("./tacticLog"), exports);
__exportStar(require("./toolCallLog"), exports);
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
const logIsBehaviorTrackedLog = (value) => value.type === "behavior_tracked";
exports.logIsBehaviorTrackedLog = logIsBehaviorTrackedLog;
const isValidBehaviorTrackedLog = (value) => {
    try {
        behaviorTrackedLog_1.behaviorTrackedLogSchema.validateSync(value);
        return true;
    }
    catch (error) {
        return false;
    }
};
exports.isValidBehaviorTrackedLog = isValidBehaviorTrackedLog;
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
const logIsGameplanLog = (value) => value.type === "gameplan";
exports.logIsGameplanLog = logIsGameplanLog;
const isValidGameplanLog = (value) => {
    try {
        gameplanLog_1.gameplanLogSchema.validateSync(value);
        return true;
    }
    catch (error) {
        return false;
    }
};
exports.isValidGameplanLog = isValidGameplanLog;
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
