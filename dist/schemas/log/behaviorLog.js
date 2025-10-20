"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.behaviorLogSchema = exports.behaviorTrackingDataSchema = void 0;
const zod_1 = require("zod");
const behaviorTrackingData_1 = require("../behaviorTrackingData");
Object.defineProperty(exports, "behaviorTrackingDataSchema", { enumerable: true, get: function () { return behaviorTrackingData_1.behaviorTrackingDataSchema; } });
const base_1 = require("./base");
exports.behaviorLogSchema = base_1.logBaseSchema.extend({
    type: zod_1.z.literal("behavior"),
    // Behavior tracked logs are always displayed in the UI
    isDisplayable: zod_1.z.literal(true),
    data: behaviorTrackingData_1.behaviorTrackingDataSchema,
});
