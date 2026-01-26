"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.behaviorLogSchema = exports.behaviorTrackingDataSchema = void 0;
const zod_1 = require("zod");
const behaviorTrackingData_1 = require("../behaviorTrackingData");
Object.defineProperty(exports, "behaviorTrackingDataSchema", { enumerable: true, get: function () { return behaviorTrackingData_1.behaviorTrackingDataSchema; } });
const timestampSchema_1 = require("../../utils/timestampSchema");
const base_1 = require("./base");
exports.behaviorLogSchema = base_1.logBaseSchema.extend({
    type: zod_1.z.literal("behavior"),
    // Behavior tracked logs are always displayed in the UI
    isDisplayable: zod_1.z.literal(true),
    isAdjustment: zod_1.z.boolean().default(false),
    /** If true, Zara should respond to this behavior log */
    shouldZaraRespond: zod_1.z.boolean().optional(),
    data: behaviorTrackingData_1.behaviorTrackingDataSchema.extend({
        /** Source of the log: scheduled debrief or manual entry */
        source: zod_1.z.enum(["scheduled", "manual"]).optional(),
        /** Cached system prompt for debrief context */
        debriefSystemPrompt: zod_1.z.string().optional(),
        /** When the debrief was resolved/answered */
        resolvedAt: timestampSchema_1.timestampSchema.optional(),
    }),
});
