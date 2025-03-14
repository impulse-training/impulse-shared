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
exports.logBaseSchema = exports.activityTypes = void 0;
const yup = __importStar(require("yup"));
const timestampSchema_1 = require("../../utils/timestampSchema");
// Activity Types
exports.activityTypes = [
    "message", // Legacy message type (for backward compatibility)
    "user", // User message type
    "agent", // Agent/AI message type
    "tactic_completed",
    "tactic_uncompleted",
    "impulse_button_pressed",
    "behavior_tracked",
    "question",
];
// Base Log Schema
exports.logBaseSchema = yup.object({
    type: yup.string().oneOf(exports.activityTypes).required(),
    userId: yup.string().required(), // This is required for collection group queries security rules
    timestamp: timestampSchema_1.timestampSchema.required(),
    data: yup.object().default({}),
    createdAt: timestampSchema_1.timestampSchema,
    updatedAt: timestampSchema_1.timestampSchema,
});
__exportStar(require("./agentLog"), exports);
__exportStar(require("./behaviorTrackedLog"), exports);
__exportStar(require("./impulseLog"), exports);
__exportStar(require("./questionLog"), exports);
__exportStar(require("./tacticLog"), exports);
__exportStar(require("./userLog"), exports);
