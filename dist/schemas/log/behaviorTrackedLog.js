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
exports.behaviorTrackedLogSchema = exports.behaviorTrackingDataSchema = void 0;
const yup = __importStar(require("yup"));
const behavior_1 = require("../behavior");
const base_1 = require("./base");
exports.behaviorTrackingDataSchema = yup.object({
    behaviorId: yup.string().required(),
    behaviorName: yup.string().required(),
    behaviorTrackingUnit: yup.string(),
    trackingType: yup.string().oneOf(["counter", "timer"]).required(),
    category: behavior_1.categorySchema,
    value: yup.number().required(), // Count or time in seconds
    formattedValue: yup.string().required(),
    notes: yup.string(), // Optional notes for the behavior tracking
});
// TODO: rename to behaviorLog
exports.behaviorTrackedLogSchema = base_1.logBaseSchema.shape({
    type: yup.string().oneOf(["behavior_tracked"]).required(),
    // Behavior tracked logs are always displayed in the UI
    isDisplayable: yup.mixed().oneOf([true]).required(),
    data: exports.behaviorTrackingDataSchema.required(),
});
