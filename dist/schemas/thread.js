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
exports.isValidThread = exports.threadSchema = void 0;
const yup = __importStar(require("yup"));
const utils_1 = require("../utils");
const outcomes_1 = require("../utils/outcomes");
const timestampSchema_1 = require("../utils/timestampSchema");
const log_1 = require("./log");
// Thread schema
exports.threadSchema = yup.object({
    id: yup.string(),
    title: yup.string().required(),
    type: yup
        .mixed()
        .oneOf(["impulse", "general", "dayRecap"])
        .default("general"),
    date: timestampSchema_1.timestampSchema.required(),
    gameplan: log_1.gameplanSchema, // The gameplan is a list of tactics that the user has agreed to use
    dateString: yup.string().required(),
    behaviorDataByLogId: (0, utils_1.objectOf)(log_1.behaviorTrackingDataSchema),
    behaviorDataTotals: yup.array().of(log_1.behaviorTrackingDataSchema),
    outcome: outcomes_1.outcomeSchema,
    summary: yup.string().optional(),
    updatedAt: timestampSchema_1.timestampSchema,
    createdAt: timestampSchema_1.timestampSchema,
});
// Type guard function
const isValidThread = (value) => {
    try {
        exports.threadSchema.validateSync(value);
        return true;
    }
    catch (error) {
        return false;
    }
};
exports.isValidThread = isValidThread;
