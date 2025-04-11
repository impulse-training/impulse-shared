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
Object.defineProperty(exports, "__esModule", { value: true });
exports.daySummarySchema = void 0;
exports.isValidDaySummary = isValidDaySummary;
const yup = __importStar(require("yup"));
const utils_1 = require("../utils");
const outcomes_1 = require("../utils/outcomes");
const log_1 = require("./log");
const tactic_1 = require("./tactic");
const supportGroupSharingPermissionsSchema = yup.object({
    impulseMoments: yup.boolean().default(false),
    conversations: yup.boolean().default(false),
    tactics: yup.boolean().default(false),
    behaviorData: yup.boolean().default(false),
    insights: yup.boolean().default(false),
    summary: yup.boolean().default(false),
});
exports.daySummarySchema = yup.object({
    id: yup.string(),
    dateString: yup.string().required(),
    userId: yup.string().required(),
    impulseThreadOutcomesById: (0, utils_1.objectOf)(outcomes_1.outcomeSchema.required()),
    outcome: outcomes_1.outcomeSchema,
    behaviorDataTotalByBehaviorId: (0, utils_1.objectOf)(log_1.behaviorTrackingDataSchema.required()),
    tacticsUsed: yup.array().of(tactic_1.tacticSchema).default([]),
    summaryText: yup.string().default(""),
    sharedWithSupportGroupIds: yup
        .array()
        .of(yup.string().required())
        .default([]),
    sharedWithUserIds: yup.array().of(yup.string().required()),
    supportGroupPermissions: (0, utils_1.objectOf)(supportGroupSharingPermissionsSchema),
    recapCompletedAt: utils_1.timestampSchema,
    createdAt: utils_1.timestampSchema,
    updatedAt: utils_1.timestampSchema,
});
/**
 * Check if a value is a DaySummary
 */
function isValidDaySummary(value) {
    return exports.daySummarySchema.isValidSync(value);
}
