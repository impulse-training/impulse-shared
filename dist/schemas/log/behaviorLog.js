"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.behaviorLogSchema = exports.behaviorTrackingDataSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const behaviorTrackingData_1 = require("../behaviorTrackingData");
Object.defineProperty(exports, "behaviorTrackingDataSchema", { enumerable: true, get: function () { return behaviorTrackingData_1.behaviorTrackingDataSchema; } });
const base_1 = require("./base");
exports.behaviorLogSchema = base_1.logBaseSchema.extend({
    type: zod_1.default.literal("behavior"),
    // Behavior tracked logs are always displayed in the UI
    isDisplayable: zod_1.default.literal(true),
    isAdjustment: zod_1.default.boolean().default(false),
    /** If true, Zara should respond to this behavior log */
    shouldZaraRespond: zod_1.default.boolean().optional(),
    data: behaviorTrackingData_1.behaviorTrackingDataSchema,
});
